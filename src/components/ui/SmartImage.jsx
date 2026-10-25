/**
 * Image loading helper that never alters the file — full quality preserved.
 * Off-screen images wait until needed; priority images load immediately.
 */
export function SmartImage({ priority = false, alt = '', className, ...props }) {
  return (
    <img
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  )
}
