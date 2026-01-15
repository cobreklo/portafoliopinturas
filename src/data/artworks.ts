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
  // Óleo (1-7)
  {
    id: '1',
    title: 'Casona',
    technique: 'Óleo',
    dimensions: '120 x 100 cm',
    price: 850000,
    priceFormatted: '$850.000',
    available: true,
    imageUrl: '/pinturas/casona.jpg',
    description: 'Una representación nostálgica de la arquitectura tradicional, capturando la luz del atardecer sobre los muros desgastados. La textura del óleo evoca el paso del tiempo y la memoria persistente.'
  },
  {
    id: '2',
    title: 'Jardín',
    technique: 'Óleo',
    dimensions: '150 x 120 cm',
    price: 1200000,
    priceFormatted: '$1.200.000',
    available: true,
    imageUrl: '/pinturas/jardin.jpg',
    description: 'Explosión de verdor y vida. Este óleo trabaja las capas de vegetación para crear una profundidad inmersiva, invitando al espectador a perderse entre el follaje y las sombras proyectadas.'
  },
  {
    id: '3',
    title: 'Los Naranjos',
    technique: 'Óleo',
    dimensions: '100 x 80 cm',
    price: 950000,
    priceFormatted: '$950.000',
    available: true,
    imageUrl: '/pinturas/losnaranjos.jpg',
    description: 'Un estudio sobre la luz filtrada a través de los árboles frutales. Los tonos cálidos de los cítricos contrastan vibrante con los verdes profundos del fondo.'
  },
  {
    id: '4',
    title: 'Ojos de Mar',
    technique: 'Óleo',
    dimensions: '180 x 150 cm',
    price: 1500000,
    priceFormatted: '$1.500.000',
    isMasterpiece: true,
    available: true,
    imageUrl: '/pinturas/ojosdemar.jpg',
    description: 'Obra de gran formato que captura la inmensidad del océano y sus misterios. La paleta de azules y grises construye una atmósfera de calma tensa y profundidad insondable.'
  },
  {
    id: '5',
    title: 'Gaviota',
    technique: 'Óleo',
    dimensions: '60 x 50 cm',
    price: 450000,
    priceFormatted: '$450.000',
    available: true,
    imageUrl: '/pinturas/gaviota.jpg',
    description: 'Retrato íntimo de la fauna costera. Pinceladas sueltas capturan el movimiento y la libertad del vuelo, destacando la elegancia natural del ave en su entorno.'
  },
  {
    id: '6',
    title: 'San Antonio',
    technique: 'Óleo',
    dimensions: '110 x 90 cm',
    price: 890000,
    priceFormatted: '$890.000',
    available: true,
    imageUrl: '/pinturas/sanantonio.jpg',
    description: 'Una visión del puerto, donde la industria y el mar convergen. Los tonos oxidados y metálicos se mezclan con la bruma marina en una composición de fuerte carácter.'
  },
  {
    id: '7',
    title: 'Jirafas',
    technique: 'Óleo',
    dimensions: '140 x 140 cm',
    price: 1350000,
    priceFormatted: '$1.350.000',
    available: true,
    imageUrl: '/pinturas/jirafas.jpg',
    description: 'Surrealismo sutil que introduce elementos exóticos en paisajes oníricos. La verticalidad de las figuras alarga la composición, creando una sensación de elegancia monumental.'
  },

  // Carboncillo (8-12)
  {
    id: '8',
    title: 'Fantasmas',
    technique: 'Carboncillo',
    dimensions: '80 x 60 cm',
    price: 380000,
    priceFormatted: '$380.000',
    available: true,
    imageUrl: '/pinturas/fantasmas.jpg',
    secondaryImageUrl: '/pinturas/fantasmas2.jpg',
    description: 'Juego de luces y sombras extremas. El carboncillo permite difuminar los límites entre la figura y el fondo, evocando presencias etéreas y memorias desvanecidas.'
  },
  {
    id: '9',
    title: 'Vista al Mar',
    technique: 'Carboncillo',
    dimensions: '70 x 50 cm',
    price: 350000,
    priceFormatted: '$350.000',
    available: true,
    imageUrl: '/pinturas/vistaalmar.jpg',
    description: 'El paisaje costero reducido a su esencia monocromática. Líneas gestuales definen el horizonte y el oleaje, capturando la energía del mar sin necesidad de color.'
  },
  {
    id: '10',
    title: 'Habitación',
    technique: 'Carboncillo',
    dimensions: '90 x 70 cm',
    price: 420000,
    priceFormatted: '$420.000',
    available: true,
    imageUrl: '/pinturas/habitacion.jpg',
    description: 'Intimismo doméstico. El trazo suave del carbón construye un espacio de silencio y contemplación, donde la luz que entra por la ventana es la protagonista.'
  },
  {
    id: '11',
    title: 'Bajada a la Playa',
    technique: 'Carboncillo',
    dimensions: '100 x 80 cm',
    price: 480000,
    priceFormatted: '$480.000',
    available: true,
    imageUrl: '/pinturas/bajadaalaplaya.jpg',
    description: 'Perspectiva y profundidad logradas a través del contraste. El camino descendente invita al espectador a un viaje visual hacia la orilla invisible pero presente.'
  },
  {
    id: '12',
    title: 'Muerte en Soledad',
    technique: 'Carboncillo',
    dimensions: '120 x 90 cm',
    price: 650000,
    priceFormatted: '$650.000',
    available: true,
    imageUrl: '/pinturas/muerteensoledad.jpg',
    secondaryImageUrl: '/pinturas/muerteensoledad2.jpg',
    description: 'Una obra de fuerte carga emocional. La oscuridad del medio se utiliza para expresar soledad y quietud, con dramáticos claros que resaltan la fragilidad del sujeto.'
  },

  // Acrílico (13-18)
  {
    id: '13',
    title: 'Ducha',
    technique: 'Acrílico',
    dimensions: '90 x 90 cm',
    price: 680000,
    priceFormatted: '$680.000',
    available: true,
    imageUrl: '/pinturas/ducha.jpg',
    description: 'La inmediatez del acrílico captura el agua y el vapor. Colores fríos y translúcidos construyen una escena cotidiana elevada a momento estético.'
  },
  {
    id: '14',
    title: 'Loza',
    technique: 'Acrílico',
    dimensions: '80 x 60 cm',
    price: 520000,
    priceFormatted: '$520.000',
    available: true,
    imageUrl: '/pinturas/loza.jpg',
    description: 'Naturaleza muerta contemporánea. El brillo de la cerámica y los reflejos domésticos son estudiados con una paleta vibrante y moderna.'
  },
  {
    id: '15',
    title: 'Vida Suspendida',
    technique: 'Acrílico',
    dimensions: '110 x 80 cm',
    price: 750000,
    priceFormatted: '$750.000',
    available: true,
    imageUrl: '/pinturas/vidasuspendida.jpg',
    description: 'Una composición que congela el tiempo. Objetos flotantes o en equilibrio precario sugieren una narrativa interrumpida, abierta a la interpretación.'
  },
  {
    id: '16',
    title: 'La Infancia Inmóvil',
    technique: 'Acrílico',
    dimensions: '100 x 100 cm',
    price: 820000,
    priceFormatted: '$820.000',
    available: true,
    imageUrl: '/pinturas/lainfanciainmovil.jpg',
    description: 'Retrato que explora la quietud y la inocencia. Colores planos y saturados crean una atmósfera casi irreal, similar a un recuerdo vívido.'
  },
  {
    id: '17',
    title: 'Papa',
    technique: 'Acrílico',
    dimensions: '70 x 70 cm',
    price: 490000,
    priceFormatted: '$490.000',
    available: true,
    imageUrl: '/pinturas/papa.jpg',
    description: 'Estudio de figura con un enfoque expresionista. El acrílico permite pinceladas rápidas que capturan la personalidad y el gesto espontáneo.'
  },
  {
    id: '18',
    title: 'Piñata',
    technique: 'Acrílico',
    dimensions: '130 x 100 cm',
    price: 980000,
    priceFormatted: '$980.000',
    available: true,
    imageUrl: '/pinturas/piñata.jpg',
    description: 'Celebración y color. Una explosión visual que utiliza la vivacidad del acrílico para transmitir alegría, movimiento y la fragmentación festiva.'
  },

  // Mixta (19-25)
  {
    id: '19',
    title: 'Sin Título',
    technique: 'Mixta',
    dimensions: '100 x 80 cm',
    price: 720000,
    priceFormatted: '$720.000',
    available: true,
    imageUrl: '/pinturas/sintitulo.jpg',
    description: 'Exploración matérica abstracta. Combinación de pigmentos y texturas que buscan evocar sensaciones táctiles más allá de lo puramente visual.'
  },
  {
    id: '20',
    title: 'Mujer Nenúfar',
    technique: 'Mixta',
    dimensions: '120 x 100 cm',
    price: 880000,
    priceFormatted: '$880.000',
    available: true,
    imageUrl: '/pinturas/mujernenufar.jpg',
    description: 'Fusión de figura humana y naturaleza. Capas de collage y pintura se entrelazan para crear una metamorfosis visual poética.'
  },
  {
    id: '21',
    title: 'Plaza de Armas',
    technique: 'Mixta',
    dimensions: '150 x 120 cm',
    price: 1100000,
    priceFormatted: '$1.100.000',
    available: true,
    imageUrl: '/pinturas/plazadearmas.jpg',
    description: 'El caos urbano organizado. Fragmentos de realidad se superponen en una técnica mixta que refleja la complejidad y las múltiples capas de la ciudad.'
  },
  {
    id: '22',
    title: 'Necrosis',
    technique: 'Mixta',
    dimensions: '90 x 90 cm',
    price: 690000,
    priceFormatted: '$690.000',
    available: true,
    imageUrl: '/pinturas/necrosis.jpg',
    description: 'Estudio sobre la degradación y el cambio. Texturas orgánicas y colores oxidados crean una belleza inusual en el deterioro.'
  },
  {
    id: '23',
    title: 'Quemadura Tercer Grado',
    technique: 'Mixta',
    dimensions: '100 x 80 cm',
    price: 740000,
    priceFormatted: '$740.000',
    available: true,
    imageUrl: '/pinturas/quemaduratercergrado.jpg',
    description: 'Intensidad visceral. El uso de materiales diversos genera relieves y profundidades que simulan la piel y sus transformaciones traumáticas.'
  },
  {
    id: '24',
    title: 'Abdomen',
    technique: 'Mixta',
    dimensions: '80 x 60 cm',
    price: 550000,
    priceFormatted: '$550.000',
    available: true,
    imageUrl: '/pinturas/abdomen.jpg',
    description: 'Fragmentación del cuerpo. Una mirada cercana que abstrae la anatomía a través de capas de material y color, buscando formas fundamentales.'
  },
  {
    id: '25',
    title: 'Sin Título 2',
    technique: 'Mixta',
    dimensions: '110 x 90 cm',
    price: 780000,
    priceFormatted: '$780.000',
    available: true,
    imageUrl: '/pinturas/sintitulo2.jpg',
    description: 'Composición libre y gestual. La técnica mixta permite una libertad total donde el azar y la intención dialogan en el lienzo.'
  }
];

export const techniques = ['Todos', 'Óleo', 'Carboncillo', 'Acrílico', 'Mixta'] as const;
export type TechniqueFilter = typeof techniques[number];
