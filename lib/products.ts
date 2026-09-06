import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'maple-cloud-hybrid',
    name: 'Maple Cloud Hybrid',
    type: 'Hybrid',
    price: 2199,
    sizes: ['King', 'Queen', 'Double'],
    firmness: ['Plush', 'Medium'],
    description: 'Hand-finished hybrid comfort with pressure-relief foam and responsive support coils.',
    image: '/images/maple-cloud-hybrid.jpg',
    inStockOttawa: true,
    visible: true,
  },
  {
    id: 'forest-rest-memory',
    name: 'Forest Rest Memory',
    type: 'Memory Foam',
    price: 1799,
    sizes: ['King', 'Queen'],
    firmness: ['Plush', 'Medium', 'Firm'],
    description: 'Cooling memory foam profile for contouring comfort and reduced motion transfer.',
    image: '/images/forest-rest-memory.jpg',
    inStockOttawa: true,
    visible: true,
  },
  {
    id: 'ottawa-pocket-coil',
    name: 'Ottawa Pocket Coil Signature',
    type: 'Pocket Coil',
    price: 1999,
    sizes: ['Queen', 'Double'],
    firmness: ['Medium', 'Firm'],
    description: 'Tailored pocket coil system engineered for balanced edge support and airflow.',
    image: '/images/ottawa-pocket-coil.jpg',
    inStockOttawa: false,
    visible: true,
  },
];

export const sizeFilters = ['King', 'Queen', 'Double'] as const;
export const typeFilters = ['Memory Foam', 'Hybrid', 'Pocket Coil'] as const;
