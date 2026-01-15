import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola María José, me interesa tu trabajo artístico. ¿Podemos conversar?'
  );
  const whatsappLink = `https://wa.me/56927473012?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={1.5} />
    </motion.a>
  );
};
