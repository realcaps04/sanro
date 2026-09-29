export const galleryCategories = ['All', 'Doors', 'Interiors', 'Manufacturing', 'Projects', 'Waterproofing']

export const galleryItems = [
  { id: 'g1', src: '/images/doors/hero.jpg', alt: 'Interior fibre door in a contemporary living space', category: 'Doors', tall: true },
  { id: 'g2', src: '/images/rooms/living.jpg', alt: 'Living space with SANRO interior door', category: 'Interiors' },
  { id: 'g3', src: '/images/factory/manufacturing.jpg', alt: 'Fibre manufacturing floor at SANRO', category: 'Manufacturing', tall: true },
  { id: 'g4', src: '/images/projects/resid-01.jpg', alt: 'Completed residential door project', category: 'Projects' },
  { id: 'g5', src: '/images/waterproofing/terrace.jpg', alt: 'Residential terrace waterproofing', category: 'Waterproofing' },
  { id: 'g6', src: '/images/doors/designer-01.jpg', alt: 'Designer fibre door in a styled interior', category: 'Doors' },
  { id: 'g7', src: '/images/rooms/bedroom.jpg', alt: 'Bedroom interior with fibre door', category: 'Interiors', tall: true },
  { id: 'g8', src: '/images/factory/finishing.jpg', alt: 'Door finishing in the SANRO workshop', category: 'Manufacturing' },
  { id: 'g9', src: '/images/projects/comm-02.jpg', alt: 'Commercial interior door installation', category: 'Projects', tall: true },
  { id: 'g10', src: '/images/doors/classic-01.jpg', alt: 'Classic panelled fibre door', category: 'Doors' },
  { id: 'g11', src: '/images/rooms/bathroom.jpg', alt: 'Bathroom specified fibre door', category: 'Interiors' },
  { id: 'g12', src: '/images/waterproofing/bathroom.jpg', alt: 'Bathroom waterproofing work', category: 'Waterproofing', tall: true },
  { id: 'g13', src: '/images/gallery/g1.jpg', alt: 'Architectural interior with door opening', category: 'Interiors' },
  { id: 'g14', src: '/images/factory/material.jpg', alt: 'Material preparation at SANRO', category: 'Manufacturing' },
  { id: 'g15', src: '/images/projects/resid-03.jpg', alt: 'Villa interior door set', category: 'Projects' },
]

export function getGalleryByCategory(category) {
  if (!category || category === 'All') return galleryItems
  return galleryItems.filter((item) => item.category === category)
}
