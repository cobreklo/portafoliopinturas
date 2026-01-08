import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Artwork } from '@/data/artworks';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const ArtworkModal = ({ 
  artwork, 
  isOpen, 
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev
}: ArtworkModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when artwork changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [artwork?.id]);

  if (!artwork) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola María José, me interesa la obra "${artwork.title}" (${artwork.priceFormatted}). ¿Está disponible?`
  );
  const whatsappLink = `https://wa.me/56912345678?text=${whatsappMessage}`;

  const hasMultipleImages = !!artwork.secondaryImageUrl;
  const currentImage = currentImageIndex === 0 ? artwork.imageUrl : artwork.secondaryImageUrl;

  const toggleImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNext?.();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPrev?.();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
          />

          {/* Navigation Buttons (Desktop) */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background backdrop-blur-md transition-all hover:scale-110"
              aria-label="Obra anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}
          
          {hasNext && (
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/10 hover:bg-background/20 text-background backdrop-blur-md transition-all hover:scale-110"
              aria-label="Siguiente obra"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-5xl bg-background rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-accent transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Image Container */}
            <div className="relative w-full md:w-[60%] h-[40vh] md:h-full bg-black/5 overflow-hidden group flex items-center justify-center">
              <img
                src={currentImage}
                alt={artwork.title}
                className="max-w-full max-h-full object-contain transition-transform duration-500"
              />
              
              {/* Internal Image Navigation (for pairs) */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={toggleImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={toggleImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className={`w-2 h-2 rounded-full transition-colors ${currentImageIndex === 0 ? 'bg-white' : 'bg-white/50'}`} />
                    <div className={`w-2 h-2 rounded-full transition-colors ${currentImageIndex === 1 ? 'bg-white' : 'bg-white/50'}`} />
                  </div>

                  <span className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {currentImageIndex === 0 ? 'Original' : 'Zoom'}
                  </span>
                </>
              )}
              
              {artwork.isMasterpiece && (
                <span className="absolute top-4 left-4 tag-masterpiece z-10">
                  Obra Maestra
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col">
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {artwork.title}
                </h2>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-sm font-body text-muted-foreground bg-accent px-3 py-1 rounded-full">
                    {artwork.technique}
                  </span>
                  <span className="text-sm font-body text-muted-foreground border border-border px-3 py-1 rounded-full">
                    {artwork.dimensions}
                  </span>
                </div>

                {artwork.description && (
                  <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                    {artwork.description}
                  </p>
                )}
              </div>

              <div className="mt-auto pt-6 border-t border-border">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground font-body mb-1">Precio</p>
                    <p className="font-display text-2xl md:text-3xl font-medium text-foreground">
                      {artwork.priceFormatted}
                    </p>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 w-full"
                  >
                    <MessageCircle size={18} strokeWidth={1.5} />
                    Coordinar Compra
                  </a>

                  {/* Mobile Navigation */}
                  <div className="flex md:hidden justify-between gap-4 mt-4">
                    <button
                      onClick={handlePrev}
                      disabled={!hasPrev}
                      className="flex-1 py-3 px-4 rounded-lg bg-accent text-foreground disabled:opacity-50 font-medium text-sm flex items-center justify-center gap-2"
                    >
                      <ChevronLeft size={16} /> Anterior
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!hasNext}
                      className="flex-1 py-3 px-4 rounded-lg bg-accent text-foreground disabled:opacity-50 font-medium text-sm flex items-center justify-center gap-2"
                    >
                      Siguiente <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
