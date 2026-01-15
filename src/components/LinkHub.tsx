import { motion } from 'framer-motion';
import { Instagram, Youtube, ExternalLink, Sparkles } from 'lucide-react';

const links = [
  {
    id: 'temu',
    title: 'Colaboración TEMU',
    subtitle: 'Partner Oficial',
    icon: Sparkles,
    href: '#',
    featured: true,
  },
  {
    id: 'instagram',
    title: '@Cotiparot',
    subtitle: 'Instagram Personal',
    icon: Instagram,
    href: 'https://instagram.com/cotiparot',
  },
  {
    id: 'art-instagram',
    title: 'Arte Instagram',
    subtitle: 'Galería Visual',
    icon: Instagram,
    href: '#',
  },
  {
    id: 'youtube',
    title: 'Mi Proceso Creativo',
    subtitle: 'YouTube',
    icon: Youtube,
    href: '#',
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    subtitle: 'Contenido Viral',
    icon: ExternalLink,
    href: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const LinkHub = () => {
  return (
    <section id="enlaces" className="py-32 bg-zinc-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Conexiones
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto font-light">
            Explora más allá del lienzo en mis plataformas digitales
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              variants={itemVariants}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-5 p-6 rounded-sm transition-all duration-500 border ${link.featured
                  ? 'bg-primary/10 border-primary/30 hover:bg-primary/20 sm:col-span-2 lg:col-span-1'
                  : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${link.featured ? 'bg-primary text-primary-foreground' : 'bg-white/10 text-foreground'
                  }`}
              >
                <link.icon
                  size={20}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3
                  className={`font-display text-lg font-medium mb-1 transition-colors ${link.featured ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    }`}
                >
                  {link.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground/80">
                  {link.subtitle}
                </p>
              </div>
              <ExternalLink
                size={16}
                strokeWidth={1.5}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-50 transition-all text-foreground -translate-x-2 group-hover:translate-x-0"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
