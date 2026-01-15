import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Maximize2 } from 'lucide-react';
import { artworks, techniques, type TechniqueFilter } from '@/data/artworks';
import { ArtworkModal } from './ArtworkModal';
import type { Artwork } from '@/data/artworks';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
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
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer group w-full mb-12"
    >
      {/* Image Container - Pure & Clean */}
      <div className="relative w-full overflow-hidden bg-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-md">
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-100" />
        )}

        <div className="overflow-hidden">
          <img
            src={currentImage}
            alt={artwork.title}
            loading="lazy"
            onLoad={() => onImageLoad(artwork.id)}
            className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.03] ${isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>

        {/* Minimal Hover Overlay */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">

        </div>

        {/* Carousel Controls - Minimal */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white drop-shadow-md transition-all ${currentImgIndex === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white drop-shadow-md transition-all ${currentImgIndex === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {artwork.isMasterpiece && (
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary px-3 py-1 text-[9px] uppercase tracking-widest font-semibold shadow-sm">
            Colección Privada
          </span>
        )}
      </div>

      {/* Info - Clean Editorial Style */}
      <div className="mt-6 text-center">
        <h3 className="font-display text-2xl text-foreground font-medium mb-2 group-hover:text-primary transition-colors duration-300">
          {artwork.title}
        </h3>

        <div className="flex flex-col gap-2 items-center">
          <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
            {artwork.technique}
          </p>
          {/* Gold Separator */}
          <div className="w-6 h-[1px] bg-primary/40 my-1 group-hover:w-12 transition-all duration-500" />
          <p className="font-body text-sm font-light text-foreground/80">
            {artwork.priceFormatted}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

// Hook to detect number of columns based on window width
function useColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1280) setColumns(3); // Large Desktop
      else if (window.innerWidth >= 768) setColumns(2); // Tablet
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
    <section id="obras" className="py-32 relative">
      {/* Background - Clean */}
      <div className="absolute inset-0 pointer-events-none bg-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* Vertical Gold Line Decoration */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-primary"></div>

          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
            Galería Exclusiva
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-4">
            Obras Selectas
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground font-body max-w-lg mx-auto text-base font-light leading-relaxed">
            Una mirada íntima al paisaje de la costa central.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
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
        <div className="flex gap-8 items-start">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-8">
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
