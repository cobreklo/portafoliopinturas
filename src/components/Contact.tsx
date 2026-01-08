import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'cotiparot@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
            Adquiere una Obra
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            Para adquirir una obra original, contáctame directamente.
            <br className="hidden sm:block" />
            Cada pieza incluye certificado de autenticidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            {/* Email */}
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-card border border-border px-6 py-4 rounded-xl hover:border-primary/50 transition-colors group w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Mail size={18} strokeWidth={1.5} className="text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground font-body">Email</p>
                <p className="font-body font-medium text-foreground">{email}</p>
              </div>
              <div className="ml-auto pl-4">
                {copied ? (
                  <Check size={18} className="text-primary" />
                ) : (
                  <Copy size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
              </div>
            </motion.button>

            {/* Location */}
            <div className="flex items-center gap-3 bg-card border border-border px-6 py-4 rounded-xl w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <MapPin size={18} strokeWidth={1.5} className="text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground font-body">Ubicación</p>
                <p className="font-body font-medium text-foreground">Isla Negra / Santiago</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground font-body">
            También puedes contactarme vía WhatsApp usando el botón flotante
          </p>
        </motion.div>
      </div>
    </section>
  );
};
