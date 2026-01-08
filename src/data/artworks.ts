export type Technique = 'Óleo' | 'Carboncillo' | 'Acrílico' | 'Mixta';

export interface Artwork {
  id: string;
  title: string;
  technique: Technique;
  dimensions: string;
  price: number;
  priceFormatted: string;
  isMasterpiece?: boolean;
  available: boolean;
  imageUrl: string;
  secondaryImageUrl?: string;
  description?: string;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Casona',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/casona.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '2',
    title: 'Jardín',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/jardin.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '3',
    title: 'Los Naranjos',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/losnaranjos.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '4',
    title: 'Ojos de Mar',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/ojosdemar.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '5',
    title: 'Gaviota',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/gaviota.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '6',
    title: 'San Antonio',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/sanantonio.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '7',
    title: 'Jirafas',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/jirafas.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '8',
    title: 'Fantasmas',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/fantasmas.jpg',
    secondaryImageUrl: '/pinturas/fantasmas2.jpg',
    description: 'Obra disponible en catálogo. Incluye detalle.'
  },
  {
    id: '9',
    title: 'Vista al Mar',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/vistaalmar.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '10',
    title: 'Habitación',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/habitacion.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '11',
    title: 'Bajada a la Playa',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/bajadaalaplaya.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '12',
    title: 'Muerte en Soledad',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/muerteensoledad.jpg',
    secondaryImageUrl: '/pinturas/muerteensoledad2.jpg',
    description: 'Obra disponible en catálogo. Incluye detalle.'
  },
  {
    id: '13',
    title: 'Ducha',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/ducha.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '14',
    title: 'Loza',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/loza.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '15',
    title: 'Vida Suspendida',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/vidasuspendida.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '16',
    title: 'La Infancia Inmóvil',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/lainfanciainmovil.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '17',
    title: 'Papa',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/papa.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '18',
    title: 'Piñata',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/piñata.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '19',
    title: 'Sin Título',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/sintitulo.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '20',
    title: 'Mujer Nenúfar',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/mujernenufar.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '21',
    title: 'Plaza de Armas',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/plazadearmas.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '22',
    title: 'Necrosis',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/necrosis.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '23',
    title: 'Quemadura Tercer Grado',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/quemaduratercergrado.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '24',
    title: 'Abdomen',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/abdomen.jpg',
    description: 'Obra disponible en catálogo.'
  },
  {
    id: '25',
    title: 'Sin Título 2',
    technique: 'Óleo',
    dimensions: 'Dimensiones por confirmar',
    price: 0,
    priceFormatted: 'Consultar',
    available: true,
    imageUrl: '/pinturas/sintitulo2.jpg',
    description: 'Obra disponible en catálogo.'
  }
];

export const techniques = ['Todos', 'Óleo', 'Carboncillo', 'Acrílico', 'Mixta'] as const;
export type TechniqueFilter = typeof techniques[number];
