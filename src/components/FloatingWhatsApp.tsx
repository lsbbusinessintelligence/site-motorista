import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Preciso%20de%20um%20motorista%20particular.%20Gostaria%20de%20agendar%20uma%20corrida.";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Agendar Corrida pelo WhatsApp"
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'click_whatsapp', {
            event_category: 'lead',
            event_label: 'botao_whatsapp_flutuante'
          });
        }
      }}
    >
      <MessageCircle className="w-8 h-8 relative z-10" />
      <span className="font-semibold text-lg whitespace-nowrap relative z-10">
        Agendar Corrida
      </span>
      <div className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
