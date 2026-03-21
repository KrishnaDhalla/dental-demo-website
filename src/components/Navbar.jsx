import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clinicData from "../data/clinicData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2.5">
              <img
                src={clinicData.logo}
                alt={clinicData.clinicName}
                className="h-14 w-auto transition-all duration-300"
                style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link text-sm font-medium transition-colors duration-300 hover:text-primary-500 ${
                    scrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href={`tel:${clinicData.phone}`}
                className={`hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-500" : "text-white/70"
                }`}
              >
                <Phone size={14} />
                {clinicData.phone.replace("+91", "+91 ")}
              </a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="bg-accent-400 hover:bg-accent-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-accent-400/20"
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img src={clinicData.logo} alt={clinicData.clinicName} className="h-8 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-gray-600 p-1">
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-700 font-medium text-base py-3 px-3 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 space-y-3">
                <a href={`tel:${clinicData.phone}`} className="flex items-center gap-2 text-gray-500 text-sm">
                  <Phone size={16} className="text-primary-500" />
                  {clinicData.phone.replace("+91", "+91 ")}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="block bg-accent-400 text-white text-center font-semibold py-3 rounded-xl"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
