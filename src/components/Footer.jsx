import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import clinicData from "../data/clinicData";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1 — Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              {clinicData.clinicName}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {clinicData.description}
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-white/50 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {clinicData.services.slice(0, 5).map((s) => (
                <li key={s.name}>
                  <a
                    href="#services"
                    onClick={(e) => handleClick(e, "#services")}
                    className="text-white/50 hover:text-primary-400 text-sm transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${clinicData.phone}`}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {clinicData.phone.replace("+91", "+91 ")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${clinicData.email}`}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {clinicData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-primary-400 mt-0.5 shrink-0"
                />
                <span className="text-white/50 text-sm">
                  {clinicData.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} {clinicData.clinicName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-500/20 flex items-center justify-center transition-colors"
              >
                <Icon size={16} className="text-white/50" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
