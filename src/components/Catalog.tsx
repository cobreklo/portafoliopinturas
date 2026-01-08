import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { artworks, techniques, type TechniqueFilter } from '@/data/artworks';
import { ArtworkModal } from './ArtworkModal';
import type { Artwork } from '@/data/artworks';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const GridItem = ({ 
  artwork, 
  index, 
  onClick, 
  onImageLoad, 
  isLoaded 
}: { 
  artwork: Artwork; 
  index: number; 
  onClick: () => void;
  onImageLoad: (id: string) => void;
  isLoaded: boolean;
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const hasMultipleImages = !!artwork.secondaryImageUrl;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex(0);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex(1);
  };

  const currentImage = currentImgIndex === 0 ? artwork.imageUrl : artwork.secondaryImageUrl;

  return (
    <motion.article
      layout
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="cursor-pointer group w-full"
    >
      {/* Image Container - Museum Wall Style (Clean) */}
      <div className="relative w-full overflow-hidden bg-muted mb-4 rounded-sm">
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-muted to-accent" />
        )}

        <img
          src={currentImage}
          alt={artwork.title}
          loading="lazy"
          onLoad={() => onImageLoad(artwork.id)}
          className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Grid Item Carousel Controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all ${
                currentImgIndex === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all ${
                currentImgIndex === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              <div className={`w-1.5 h-1.5 rounded-full transition-colors ${currentImgIndex === 0 ? 'bg-white' : 'bg-white/50'}`} />
              <div className={`w-1.5 h-1.5 rounded-full transition-colors ${currentImgIndex === 1 ? 'bg-white' : 'bg-white/50'}`} />
            </div>
          </>
        )}

        {artwork.isMasterpiece && (
          <span className="absolute top-3 left-3 tag-masterpiece">
            Obra Maestra
          </span>
        )}
      </div>

      {/* Info - Museum Style (Minimal) */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-start gap-4">
           <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {artwork.title}
          </h3>
          <p className="font-body text-sm font-medium text-foreground whitespace-nowrap">
             {artwork.priceFormatted}
          </p>
        </div>
        
        <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">
          {artwork.technique} · {artwork.dimensions}
        </p>

        <button className="text-xs font-medium text-primary mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-fit">
           Consultar <ArrowRight size={12} />
        </button>
      </div>
    </motion.article>
  );
};

// Hook to detect number of columns based on window width
function useColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(3); // Desktop
      else if (window.innerWidth >= 640) setColumns(2); // Tablet
      else setColumns(1); // Mobile
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return columns;
}

export const Catalog = () => {
  const [filter, setFilter] = useState<TechniqueFilter>('Todos');
  const [selectedArtworkId, setSelectedArtworkId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
  
  const columnsCount = useColumns();

  const filteredArtworks = useMemo(() => {
    if (filter === 'Todos') return artworks;
    return artworks.filter((artwork) => artwork.technique === filter);
  }, [filter]);

  // Distribute items into columns for Masonry layout
  const columns = useMemo(() => {
    const cols: Artwork[][] = Array.from({ length: columnsCount }, () => []);
    filteredArtworks.forEach((artwork, i) => {
      cols[i % columnsCount].push(artwork);
    });
    return cols;
  }, [filteredArtworks, columnsCount]);

  const selectedArtworkIndex = useMemo(() => {
    if (!selectedArtworkId) return -1;
    return filteredArtworks.findIndex(a => a.id === selectedArtworkId);
  }, [selectedArtworkId, filteredArtworks]);

  const selectedArtwork = selectedArtworkIndex >= 0 ? filteredArtworks[selectedArtworkIndex] : null;

  const openModal = (artwork: Artwork) => {
    setSelectedArtworkId(artwork.id);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleNextArtwork = () => {
    if (selectedArtworkIndex < filteredArtworks.length - 1) {
      setSelectedArtworkId(filteredArtworks[selectedArtworkIndex + 1].id);
    }
  };

  const handlePrevArtwork = () => {
    if (selectedArtworkIndex > 0) {
      setSelectedArtworkId(filteredArtworks[selectedArtworkIndex - 1].id);
    }
  };

  const handleImageLoad = (id: string) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="obras" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-4">
            Obras Disponibles
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Cada pieza es única, creada con dedicación en mi estudio de Isla Negra
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {techniques.map((technique) => (
            <button
              key={technique}
              onClick={() => setFilter(technique)}
              className={`filter-tab ${filter === technique ? 'filter-tab-active' : ''}`}
            >
              {technique}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid (React Implementation) */}
        <div className="flex gap-6 items-start">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {col.map((artwork, i) => (
                  <GridItem 
                    key={artwork.id}
                    artwork={artwork}
                    index={i}
                    onClick={() => openModal(artwork)}
                    onImageLoad={handleImageLoad}
                    isLoaded={!!imageLoaded[artwork.id]}
                  />
                ))}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={handleNextArtwork}
        onPrev={handlePrevArtwork}
        hasNext={selectedArtworkIndex < filteredArtworks.length - 1}
        hasPrev={selectedArtworkIndex > 0}
      />
    </section>
  );
};
