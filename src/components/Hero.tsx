import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-warm to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-stone blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-4">
            Artista Visual
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6"
        >
          María José
          <br />
          <span className="italic">Parot</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-md mx-auto mb-10"
        >
          Isla Negra — Santiago
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#obras"
            className="btn-primary inline-flex items-center gap-2 text-base"
          >
            Ver Obras Disponibles
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} strokeWidth={1} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
