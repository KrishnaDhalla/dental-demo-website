import { motion } from "framer-motion";
import clinicData from "../data/clinicData";
import DynamicIcon from "./ui/DynamicIcon";
import SectionHeading from "./ui/SectionHeading";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Our Services" subtitle="Comprehensive dental care for your entire family" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {clinicData.services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              whileHover={{ y: -6 }}
              className="card-shine bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer group transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/8"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-sm">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-heading font-semibold text-gray-900 mb-2 text-sm leading-snug">
                {service.name}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 h-px bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
