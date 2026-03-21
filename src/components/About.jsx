import { motion } from "framer-motion";
import clinicData from "../data/clinicData";
import DynamicIcon from "./ui/DynamicIcon";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — Avatar with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end relative"
          >
            {/* Large decorative number behind avatar */}
            <span className="absolute -top-8 -left-4 font-heading font-bold text-[160px] md:text-[200px] text-gray-50 select-none leading-none pointer-events-none z-0">
              {clinicData.doctorYears}
            </span>

            <div className="relative z-10">
              <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={clinicData.doctorImage}
                  alt={clinicData.doctorName}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -right-4 bg-accent-400 text-white font-heading font-bold text-sm px-4 py-2 rounded-2xl shadow-xl shadow-accent-400/30"
              >
                {clinicData.doctorYears}+ Years
              </motion.div>

              {/* Floating stat pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                animate={{ y: [-4, 4, -4] }}
                className="absolute -top-6 -left-10 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-2.5"
              >
                <p className="font-heading font-bold text-primary-600 text-lg leading-none">{clinicData.stats[0].value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{clinicData.stats[0].label}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary-500 font-semibold text-xs uppercase tracking-[0.15em] mb-3">
              About Our Practice
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-2 leading-tight">
              {clinicData.doctorName}
            </h2>
            <p className="text-primary-600 font-medium mb-5 text-sm">
              {clinicData.doctorCredentials}
            </p>
            <p className="text-gray-500 leading-relaxed mb-10 text-base">
              {clinicData.doctorBio}
            </p>

            {/* Trust Points — minimal list style */}
            <div className="space-y-4">
              {clinicData.trustPoints.map((tp, i) => (
                <motion.div
                  key={tp.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <DynamicIcon name={tp.icon} size={18} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="pt-1">
                    <p className="font-heading font-semibold text-sm text-gray-900">{tp.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{tp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
