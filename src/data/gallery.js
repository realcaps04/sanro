export const galleryCategories = ['All', 'Doors', 'Interiors', 'Manufacturing', 'Waterproofing']

export const galleryItems = [
  {
    id: 'g1',
    src: '/images/sanrodoors/Elegant Modern Entryway with Wooden Door.png',
    alt: 'Elegant modern SANRO fibre door with recessed geometric panels',
    category: 'Doors',
    tall: true,
  },
  { id: 'g2', src: '/images/rooms/living.jpg', alt: 'Living space with SANRO interior door', category: 'Interiors' },
  { id: 'g3', src: '/madebysanro/manufacturing.png', alt: 'Fibre door moulding at SANRO', category: 'Manufacturing', tall: true },
  {
    id: 'g5',
    src: '/images/waterproofing/Rooftop Waterproofing with Scenic Mountain Views (1).png',
    alt: 'Residential terrace waterproofing',
    category: 'Waterproofing',
  },
  {
    id: 'g6',
    src: '/images/sanrodoors/Warm Modern Entryway with Stained Glass Door.png',
    alt: 'Warm modern SANRO door with stained-glass upper panel',
    category: 'Doors',
  },
  { id: 'g7', src: '/images/rooms/bedroom.jpg', alt: 'Bedroom interior with fibre door', category: 'Interiors', tall: true },
  { id: 'g8', src: '/images/factory/finishing.jpg', alt: 'Door finishing in the SANRO workshop', category: 'Manufacturing' },
  {
    id: 'g10',
    src: '/images/sanrodoors/Sage Green Foyer with Mahogany Door.png',
    alt: 'Mahogany panelled SANRO fibre door in a foyer',
    category: 'Doors',
  },
  { id: 'g11', src: '/images/rooms/bathroom.jpg', alt: 'Bathroom specified fibre door', category: 'Interiors' },
  { id: 'g12', src: '/images/waterproofing/card-bathroom.jpg', alt: 'Bathroom waterproofing work', category: 'Waterproofing', tall: true },
  { id: 'g13', src: '/images/gallery/g1.jpg', alt: 'Architectural interior with door opening', category: 'Interiors' },
  { id: 'g14', src: '/images/factory/material.jpg', alt: 'Material preparation at SANRO', category: 'Manufacturing' },
  {
    id: 'g16',
    src: '/images/sanrodoors/Warm Scandinavian Entryway Living Room.png',
    alt: 'Scandinavian-warm SANRO panelled door in a living room',
    category: 'Doors',
    tall: true,
  },
]

export function getGalleryByCategory(category) {
  if (!category || category === 'All') return galleryItems
  return galleryItems.filter((item) => item.category === category)
}
