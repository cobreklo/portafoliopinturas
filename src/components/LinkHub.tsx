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
    <section id="enlaces" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
            Conecta Conmigo
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Sígueme en redes sociales y descubre más sobre mi trabajo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              variants={itemVariants}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-4 p-5 rounded-xl transition-all duration-300 ${
                link.featured
                  ? 'bg-primary text-primary-foreground sm:col-span-2 lg:col-span-1'
                  : 'bg-card hover:bg-accent border border-border/50'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  link.featured ? 'bg-primary-foreground/20' : 'bg-accent'
                }`}
              >
                <link.icon
                  size={22}
                  strokeWidth={1.5}
                  className={link.featured ? 'text-primary-foreground' : 'text-foreground'}
                />
              </div>
              <div>
                <h3
                  className={`font-body font-medium ${
                    link.featured ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {link.title}
                </h3>
                <p
                  className={`text-sm ${
                    link.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {link.subtitle}
                </p>
              </div>
              <ExternalLink
                size={16}
                strokeWidth={1.5}
                className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                  link.featured ? 'text-primary-foreground/50' : 'text-muted-foreground'
                }`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
