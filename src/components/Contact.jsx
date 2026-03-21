import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import clinicData from "../data/clinicData";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(
    `Hi ${clinicData.doctorName}, I want to book an appointment.`
  )}`;

  const infoItems = [
    { icon: Phone, label: "Phone", value: clinicData.phone.replace("+91", "+91 "), href: `tel:${clinicData.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappUrl, external: true },
    { icon: Mail, label: "Email", value: clinicData.email, href: `mailto:${clinicData.email}` },
    { icon: MapPin, label: "Address", value: clinicData.address, href: null },
  ];

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-300 bg-white";

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Get In Touch" subtitle="Book your appointment today" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary-50 border border-primary-100 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle size={52} className="text-primary-500 mb-5" />
                </motion.div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-500 text-sm">We'll contact you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" required placeholder="+91 98XXX XXXXX" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Treatment</label>
                  <select required className={inputClass + " text-gray-600"} defaultValue="">
                    <option value="" disabled>Select a treatment</option>
                    {clinicData.services.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Other / General Checkup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Message <span className="text-gray-300 normal-case font-normal">(optional)</span>
                  </label>
                  <textarea rows={4} placeholder="Any specific concerns..." className={inputClass + " resize-none"} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-accent-400 hover:bg-accent-500 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-accent-400/20"
                >
                  <Send size={17} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {infoItems.map((item) => {
              const El = item.href ? "a" : "div";
              return (
                <El
                  key={item.label}
                  {...(item.href ? { href: item.href, ...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <item.icon size={18} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.label}</p>
                    <p className="text-gray-800 font-medium text-sm mt-0.5">{item.value}</p>
                  </div>
                </El>
              );
            })}

            {/* Hours */}
            <div className="mt-2 p-5 rounded-2xl bg-primary-50/60 border border-primary-100/60">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-primary-500" />
                <p className="font-heading font-semibold text-sm text-gray-900">Working Hours</p>
              </div>
              {clinicData.workingHours.map((wh) => (
                <div key={wh.days} className="flex justify-between text-sm py-2 border-b border-primary-100/60 last:border-0">
                  <span className="text-gray-500">{wh.days}</span>
                  <span className="font-semibold text-gray-800">{wh.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        >
          <iframe
            src={clinicData.googleMapsEmbed}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
