import { motion } from "framer-motion";
import clinicData from "../data/clinicData";
import CountUp from "./ui/CountUp";

export default function Stats() {
  return (
    <section className="relative py-20 md:py-24 bg-dark-800 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-400/8 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0"
        >
          {clinicData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`text-center px-8 ${i > 0 ? "md:border-l md:border-white/8" : ""}`}
            >
              <div className="font-heading font-bold text-5xl md:text-6xl mb-3 gradient-text">
                <CountUp target={stat.value} duration={2200} />
              </div>
              <p className="text-white/40 text-xs font-medium tracking-[0.12em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
