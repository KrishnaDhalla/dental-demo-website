import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const faqs = [
  {
    q: "Is root canal treatment painful?",
    a: "Modern root canal treatment is virtually painless. We use advanced local anaesthesia so you feel nothing during the procedure. Most patients are surprised by how comfortable it is — it's no more painful than a routine filling.",
  },
  {
    q: "How much do dental implants cost?",
    a: "Implant costs vary based on the number of teeth and complexity. We provide a detailed, transparent cost breakdown after your consultation — no hidden charges. Flexible payment options are also available.",
  },
  {
    q: "How long does teeth whitening last?",
    a: "Professional whitening results typically last 1–2 years with proper care. Avoiding staining foods (tea, coffee, red wine) and maintaining good oral hygiene significantly extends the effect.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book by calling us, sending a WhatsApp message, or filling the contact form on this page. We confirm your slot within minutes during working hours (Mon–Sat, 10 AM–7 PM).",
  },
  {
    q: "Are braces suitable for adults?",
    a: "Absolutely. We offer metal braces, ceramic braces, and clear aligners — all suitable for adults. Clear aligners in particular are nearly invisible and very popular with working professionals.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a check-up and professional cleaning every 6 months. Regular visits help catch issues early, saving you time, money, and discomfort in the long run.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
        open ? "border-primary-200 bg-primary-50/40" : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-heading font-semibold text-sm md:text-base transition-colors ${open ? "text-primary-700" : "text-gray-900"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          <Plus size={15} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-primary-100/60 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Common Questions"
            subtitle="Everything patients ask us before their first visit"
          />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
