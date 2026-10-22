import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { X, View } from 'lucide-react'
import {
  createArRenderer,
  createArScene,
  createDoorMesh,
  createDoorTexture,
  createReticle,
  isArSupported,
  placeDoorFromHit,
  startArSession,
} from '../../lib/doorAr'

function setDoorOpacity(door, opacity) {
  if (!door || !Array.isArray(door.material)) return
  door.material.forEach((material) => {
    material.transparent = opacity < 1
    material.opacity = opacity
    material.needsUpdate = true
  })
}

/**
 * Fullscreen WebXR “View in your room” overlay for door products.
 * Places a life-size door plane textured with the product image via hit-testing.
 */
export function DoorArViewer({ imageUrl, productName, onClose }) {
  const canvasRef = useRef(null)
  const overlayRef = useRef(null)
  const [status, setStatus] = useState('checking')
  const [hint, setHint] = useState('Move your phone to find a floor or wall')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let cancelled = false
    let renderer
    let session
    let hitTestSource = null
    let hitTestSourceRequested = false
    let door
    let reticle
    let placed = false
    let lastHint = ''
    const tempMatrix = new THREE.Matrix4()

    const updateHint = (next) => {
      if (next === lastHint) return
      lastHint = next
      setHint(next)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    async function boot() {
      const supported = await isArSupported()
      if (cancelled) return

      if (!supported) {
        setStatus('unsupported')
        return
      }

      setStatus('starting')

      try {
        const canvas = canvasRef.current
        const overlay = overlayRef.current
        if (!canvas || !overlay) return

        const scene = createArScene()
        const camera = new THREE.PerspectiveCamera(
          70,
          window.innerWidth / window.innerHeight,
          0.01,
          40,
        )
        renderer = createArRenderer(canvas)

        const texture = await createDoorTexture(imageUrl)
        if (cancelled) {
          texture.dispose()
          return
        }

        door = createDoorMesh(texture)
        reticle = createReticle()
        scene.add(door)
        scene.add(reticle)

        session = await startArSession(renderer, overlay)
        if (cancelled) {
          await session.end().catch(() => {})
          return
        }

        setStatus('active')
        updateHint('Move your phone to find a floor or wall · Tap to place')

        const onSelect = () => {
          if (!reticle.visible) return
          placeDoorFromHit(door, reticle.matrix)
          setDoorOpacity(door, 1)
          placed = true
          updateHint('Door placed · Walk around to view · Tap again to move')
        }

        session.addEventListener('select', onSelect)

        const onResize = () => {
          if (!renderer) return
          renderer.setSize(window.innerWidth, window.innerHeight, false)
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
        }
        window.addEventListener('resize', onResize)

        renderer.setAnimationLoop((_timestamp, frame) => {
          if (!frame || !renderer) return

          const xrSession = renderer.xr.getSession()
          if (!xrSession) return

          if (!hitTestSourceRequested) {
            hitTestSourceRequested = true
            xrSession
              .requestReferenceSpace('viewer')
              .then((viewerSpace) => xrSession.requestHitTestSource({ space: viewerSpace }))
              .then((source) => {
                hitTestSource = source
              })
              .catch(() => {
                setStatus('error')
                setErrorMessage('Hit testing is not available on this device.')
              })
          }

          const referenceSpace = renderer.xr.getReferenceSpace()
          if (hitTestSource && referenceSpace) {
            const hits = frame.getHitTestResults(hitTestSource)
            if (hits.length > 0) {
              const pose = hits[0].getPose(referenceSpace)
              if (pose) {
                reticle.visible = true
                reticle.matrix.fromArray(pose.transform.matrix)
                if (!placed) {
                  updateHint('Surface found · Tap to place the door')
                }
              }
            } else {
              reticle.visible = false
            }
          }

          if (!placed && reticle.visible) {
            door.visible = true
            door.position.setFromMatrixPosition(reticle.matrix)
            const euler = new THREE.Euler().setFromRotationMatrix(
              tempMatrix.copy(reticle.matrix),
              'YXZ',
            )
            door.rotation.set(0, euler.y, 0)
            setDoorOpacity(door, 0.72)
          }

          renderer.render(scene, camera)
        })

        return () => {
          window.removeEventListener('resize', onResize)
          session?.removeEventListener('select', onSelect)
        }
      } catch (err) {
        console.error(err)
        if (!cancelled) {
          setStatus('error')
          setErrorMessage(err?.message || 'Could not start camera AR')
        }
      }
    }

    let cleanupSession = null
    boot().then((fn) => {
      cleanupSession = typeof fn === 'function' ? fn : null
    })

    return () => {
      cancelled = true
      document.body.style.overflow = previousOverflow
      cleanupSession?.()
      if (renderer) {
        renderer.setAnimationLoop(null)
        const active = renderer.xr.getSession()
        if (active) {
          active.end().catch(() => {})
        }
        renderer.dispose()
      }
      if (door) {
        door.geometry.dispose()
        if (Array.isArray(door.material)) {
          door.material.forEach((material) => {
            material.map?.dispose()
            material.dispose()
          })
        }
      }
      if (reticle) {
        reticle.geometry.dispose()
        reticle.material.dispose()
      }
    }
  }, [imageUrl])

  return (
    <div className="fixed inset-0 z-[80] bg-ink">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 sm:p-6"
      >
        <div className="pointer-events-auto flex items-start justify-between gap-4">
          <div className="max-w-xs rounded-control bg-ink/55 px-4 py-3 text-white shadow-float backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">View in your room</p>
            <p className="mt-1 text-sm font-medium tracking-[-0.02em]">{productName}</p>
            <p className="mt-1 text-[12px] text-white/75">Approx. 80&quot; × 36&quot;</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-float"
            aria-label="Close room view"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="pointer-events-auto mx-auto mb-4 w-full max-w-md">
          {status === 'checking' || status === 'starting' ? (
            <StatusCard
              title="Opening camera…"
              body="Allow camera access so you can place this door in your room."
            />
          ) : null}

          {status === 'unsupported' ? (
            <StatusCard
              title="Room view needs AR"
              body="Open this page in Chrome on an Android phone over HTTPS to place the door in your room with the camera. Your gallery still works here."
              actionLabel="Close"
              onAction={onClose}
            />
          ) : null}

          {status === 'error' ? (
            <StatusCard
              title="Could not start room view"
              body={errorMessage || 'Check camera permission and try again on a supported phone.'}
              actionLabel="Close"
              onAction={onClose}
            />
          ) : null}

          {status === 'active' ? (
            <div className="rounded-control bg-ink/55 px-4 py-3 text-center text-sm text-white shadow-float backdrop-blur-sm">
              <span className="inline-flex items-center justify-center gap-2">
                <View size={16} strokeWidth={1.75} aria-hidden="true" />
                {hint}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function StatusCard({ title, body, actionLabel, onAction }) {
  return (
    <div className="rounded-card bg-white px-5 py-5 text-ink shadow-float">
      <p className="text-lg font-medium tracking-[-0.02em]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
      {actionLabel ? (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 inline-flex items-center justify-center rounded-control bg-ink px-5 py-2.5 text-[13px] font-medium text-white"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  )
}
