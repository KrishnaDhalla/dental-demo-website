import { motion } from "framer-motion";
import { Star, Phone, CalendarCheck, Clock, ArrowRight } from "lucide-react";
import clinicData from "../data/clinicData";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Dot overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-400/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Rating pill */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/15 rounded-full px-5 py-2.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-accent-400 fill-accent-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">
                {clinicData.googleRating} · {clinicData.googleReviewCount}+ Google Reviews
              </span>
            </div>
          </motion.div>

          {/* Heading — gradient on last two words */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6 tracking-tight"
          >
            {clinicData.tagline.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="gradient-text">{clinicData.tagline.split(' ').slice(-2).join(' ')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/55 max-w-2xl mb-12 leading-relaxed"
          >
            {clinicData.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-14">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(245,158,11,0.35)" }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2.5 bg-accent-400 hover:bg-accent-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base group"
            >
              <CalendarCheck size={20} />
              Book Appointment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${clinicData.phone}`}
              className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/20 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full transition-all text-base"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
          </motion.div>

          {/* Bottom trust row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Clock size={15} />
              <span>{clinicData.workingHours[0].days}: {clinicData.workingHours[0].time}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            {clinicData.stats.map((s, i) => (
              <div key={i} className="text-white/40 text-sm">
                <span className="text-white/80 font-semibold">{s.value}</span> {s.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Doctor + Patient image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex items-end justify-center relative"
        >
          {/* Glow ring behind image */}
          <div className="absolute inset-0 rounded-3xl bg-primary-500/10 blur-2xl scale-90" />
          <img
            src={clinicData.doctorPatientImage}
            alt="Doctor consulting with patient"
            className="relative z-10 rounded-3xl w-full max-w-md object-cover shadow-2xl shadow-black/30"
          />
          {/* Floating rating badge */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-lg z-20"
          >
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-accent-400 fill-accent-400" />)}
            </div>
            <p className="text-white text-xs font-semibold">{clinicData.googleRating} Rating</p>
            <p className="text-white/50 text-[10px]">{clinicData.googleReviewCount}+ reviews</p>
          </motion.div>
          {/* Floating patients badge */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-lg z-20"
          >
            <p className="text-white font-heading font-bold text-lg leading-none">{clinicData.stats[0].value}</p>
            <p className="text-white/50 text-xs mt-0.5">{clinicData.stats[0].label}</p>
          </motion.div>
        </motion.div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
