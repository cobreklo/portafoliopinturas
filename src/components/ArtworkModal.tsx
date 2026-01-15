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

        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
          {/* Backdrop (Light Blur for Gallery feel) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/90 backdrop-blur-sm"
          />

          {/* Navigation Buttons (Desktop) - Minimal Dark/Gold */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full border border-gray-200 bg-white hover:border-primary hover:text-primary text-gray-400 transition-all hover:scale-105 shadow-sm"
              aria-label="Obra anterior"
            >
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
          )}

          {hasNext && (
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full border border-gray-200 bg-white hover:border-primary hover:text-primary text-gray-400 transition-all hover:scale-105 shadow-sm"
              aria-label="Siguiente obra"
            >
              <ChevronRight size={24} strokeWidth={1} />
            </button>
          )}

          {/* Modal Container - Marble White */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full md:h-auto md:max-w-6xl md:aspect-[16/9] bg-[#FAFAFA] rounded-none shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row border border-gray-100 selection:bg-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 text-neutral-900 hover:bg-white hover:text-primary transition-colors shadow-sm"
              aria-label="Cerrar"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Image Section (Clean Gallery Wall) */}
            <div className="relative w-full md:w-[65%] h-[50vh] md:h-full bg-zinc-50 flex items-center justify-center p-8 group overflow-hidden">

              <img
                src={currentImage}
                alt={artwork.title}
                className="relative z-10 max-w-full max-h-full object-contain shadow-xl transition-transform duration-700 hover:scale-[1.01]"
              />

              {/* Internal Image Navigation */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={toggleImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 text-neutral-900 hover:text-primary backdrop-blur-md shadow-sm transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={toggleImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 text-neutral-900 hover:text-primary backdrop-blur-md shadow-sm transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === 0 ? 'bg-primary w-4' : 'bg-gray-300'}`} />
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === 1 ? 'bg-primary w-4' : 'bg-gray-300'}`} />
                  </div>
                </>
              )}

              {artwork.isMasterpiece && (
                <span className="absolute top-6 left-6 bg-primary text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold shadow-sm z-20">
                  Obra Maestra
                </span>
              )}
            </div>

            {/* Details Section - Editorial Style */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white border-l border-gray-100 flex flex-col">
              <div className="flex-1">
                <div className="mb-8">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                    Detalles de la Obra
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-normal text-neutral-900 mb-4 tracking-tight">
                    {artwork.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-primary mb-8" />

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Técnica</span>
                      <span className="text-sm font-medium text-neutral-900 border-b border-gray-200 pb-1">{artwork.technique}</span>
                    </div>
                    <div className="flex flex-col ml-4">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Dimensiones</span>
                      <span className="text-sm font-medium text-neutral-900 border-b border-gray-200 pb-1">{artwork.dimensions}</span>
                    </div>
                  </div>

                  {artwork.description && (
                    <p className="text-neutral-600 text-base font-light leading-relaxed">
                      {artwork.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Precio Colección</p>
                      <p className="font-display text-3xl font-normal text-neutral-900">
                        {artwork.priceFormatted}
                      </p>
                    </div>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-3 w-full text-center group"
                  >
                    <MessageCircle size={18} strokeWidth={1.5} />
                    <span>Solicitar Pieza</span>
                  </a>

                  {/* Mobile Navigation */}
                  <div className="flex md:hidden justify-between gap-4 mt-2">
                    <button
                      onClick={handlePrev}
                      disabled={!hasPrev}
                      className="flex-1 py-4 px-4 border border-gray-200 text-neutral-900 disabled:opacity-30 text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:bg-gray-50"
                    >
                      <ChevronLeft size={16} /> Anterior
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!hasNext}
                      className="flex-1 py-4 px-4 border border-gray-200 text-neutral-900 disabled:opacity-30 text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:bg-gray-50"
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
