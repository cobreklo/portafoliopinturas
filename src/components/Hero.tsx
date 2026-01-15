import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dark Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-background to-background" />

      {/* Decorative Orbs - Adjusted for Mobile - Reduced Size significantly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 3 }}
          className="absolute top-0 right-0 w-[250px] md:w-[800px] h-[250px] md:h-[800px] rounded-full bg-primary blur-[60px] md:blur-[150px] -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-0 left-0 w-[200px] md:w-[600px] h-[200px] md:h-[600px] rounded-full bg-stone blur-[50px] md:blur-[120px] translate-y-1/2 -translate-x-1/2"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center w-full max-w-full overflow-hidden pb-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="inline-block mb-8">
            <span className="bg-primary text-white px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold shadow-md">
              Artista Visual
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-4xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 tracking-tight w-full break-words leading-[1.1]"
        >
          María José
          <br />
          <span className="italic font-light text-primary block mt-2 relative inline-block">
            Parot
            {/* Decorative Gold Underline */}
            <span className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-primary"></span>
          </span>
        </motion.h1>



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#obras"
            className="btn-primary inline-flex items-center gap-2 text-xs md:text-sm"
          >
            Explorar Colección
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-muted-foreground/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-light">Descubrir</span>
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};
