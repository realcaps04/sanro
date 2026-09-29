import { useEffect, useState } from 'react'

export function usePresence(open, duration = 300) {
  const [mounted, setMounted] = useState(open)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (open) {
      setMounted(true)
      if (reduce) {
        setActive(true)
        return undefined
      }
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true))
      })
      return () => cancelAnimationFrame(frame)
    }

    setActive(false)
    if (reduce) {
      setMounted(false)
      return undefined
    }
    const timer = setTimeout(() => setMounted(false), duration)
    return () => clearTimeout(timer)
  }, [open, duration])

  return { mounted, active }
}
