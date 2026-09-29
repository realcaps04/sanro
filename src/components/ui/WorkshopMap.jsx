const query = encodeURIComponent('SANRO Fibre Glass Industries, Thankamany, Idukki, Kerala 685515')

export function WorkshopMap({ className = '' }) {
  return (
    <div className={`overflow-hidden rounded-card bg-surface shadow-card ${className}`}>
      <iframe
        title="SANRO Fibre Glass Industries on Google Maps"
        src={`https://maps.google.com/maps?q=${query}&z=14&output=embed`}
        className="h-[300px] w-full border-0 sm:h-[380px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
