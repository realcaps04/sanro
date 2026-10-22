import * as THREE from 'three'

/** Approx. standard interior door: 36" × 80" in metres */
export const DOOR_WIDTH_M = 0.91
export const DOOR_HEIGHT_M = 2.03
export const DOOR_DEPTH_M = 0.04

export async function isArSupported() {
  if (typeof navigator === 'undefined' || !navigator.xr) return false
  try {
    return await navigator.xr.isSessionSupported('immersive-ar')
  } catch {
    return false
  }
}

/**
 * Load a door-only texture. Prefer product.arImage (cropped leaf) over lifestyle photos.
 * Optional crop: { x, y, w, h } as 0–1 fractions of the source image.
 */
export function createDoorTexture(imageUrl, crop = null) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        let sx = 0
        let sy = 0
        let sw = image.naturalWidth
        let sh = image.naturalHeight

        if (crop) {
          sx = Math.round(crop.x * image.naturalWidth)
          sy = Math.round(crop.y * image.naturalHeight)
          sw = Math.round(crop.w * image.naturalWidth)
          sh = Math.round(crop.h * image.naturalHeight)
        }

        // Output at door aspect so the mesh isn’t letterboxed with room leftovers
        const outW = 512
        const outH = Math.round(outW * (DOOR_HEIGHT_M / DOOR_WIDTH_M))
        canvas.width = outW
        canvas.height = outH
        ctx.clearRect(0, 0, outW, outH)
        ctx.drawImage(image, sx, sy, sw, sh, 0, 0, outW, outH)

        const texture = new THREE.CanvasTexture(canvas)
        texture.colorSpace = THREE.SRGBColorSpace
        texture.anisotropy = 8
        texture.needsUpdate = true
        resolve(texture)
      } catch (err) {
        reject(err)
      }
    }
    image.onerror = () => reject(new Error(`Failed to load door image: ${imageUrl}`))
    image.src = imageUrl
  })
}

export function getProductArImage(product) {
  if (!product) return null
  return product.arImage || product.image
}

export function createDoorMesh(texture) {
  const geometry = new THREE.BoxGeometry(DOOR_WIDTH_M, DOOR_HEIGHT_M, DOOR_DEPTH_M)
  const face = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.55,
    metalness: 0.05,
    transparent: true,
    alphaTest: 0.08,
  })
  const edge = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    roughness: 0.8,
    metalness: 0.1,
  })
  // BoxGeometry material order: +x, -x, +y, -y, +z, -z — front/back get the door face
  const materials = [edge, edge, edge, edge, face, face]
  const mesh = new THREE.Mesh(geometry, materials)
  mesh.castShadow = true
  mesh.visible = false
  // Pivot at floor centre so placement sits on the hit surface
  mesh.geometry.translate(0, DOOR_HEIGHT_M / 2, 0)
  return mesh
}

export function createReticle() {
  const ring = new THREE.RingGeometry(0.12, 0.16, 32).rotateX(-Math.PI / 2)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff5700,
    transparent: true,
    opacity: 0.85,
  })
  const reticle = new THREE.Mesh(ring, material)
  reticle.matrixAutoUpdate = false
  reticle.visible = false
  return reticle
}

export function createArScene() {
  const scene = new THREE.Scene()

  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.1)
  scene.add(hemi)

  const dir = new THREE.DirectionalLight(0xffffff, 0.85)
  dir.position.set(2, 4, 2)
  scene.add(dir)

  return scene
}

export function createArRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(window.innerWidth, window.innerHeight, false)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.xr.enabled = true
  return renderer
}

export async function startArSession(renderer, overlayRoot) {
  const sessionInit = {
    requiredFeatures: ['hit-test'],
    optionalFeatures: ['dom-overlay', 'local-floor', 'light-estimation'],
  }
  if (overlayRoot) {
    sessionInit.domOverlay = { root: overlayRoot }
  }

  const session = await navigator.xr.requestSession('immersive-ar', sessionInit)
  renderer.xr.setReferenceSpaceType('local')
  await renderer.xr.setSession(session)
  return session
}

export function placeDoorFromHit(door, hitMatrix) {
  door.visible = true
  door.position.setFromMatrixPosition(hitMatrix)
  // Keep upright; yaw to face roughly toward -Z of hit if available
  const euler = new THREE.Euler().setFromRotationMatrix(hitMatrix, 'YXZ')
  door.rotation.set(0, euler.y, 0)
}
