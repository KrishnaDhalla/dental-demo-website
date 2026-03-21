import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import clinicData from "../data/clinicData";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const waUrl = `https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(
    `Hi ${clinicData.doctorName}, I want to book an appointment.`
  )}`;

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-pulse w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-xl shadow-green-500/30 flex items-center justify-center"
      >
        <MessageCircle size={26} className="text-white" />
      </motion.a>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        href={`tel:${clinicData.phone}`}
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/30 flex items-center justify-center self-end"
      >
        <Phone size={20} className="text-white" />
      </motion.a>
    </motion.div>
  );
}
