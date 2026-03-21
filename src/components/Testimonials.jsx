import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import clinicData from "../data/clinicData";
import SectionHeading from "./ui/SectionHeading";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="What Our Patients Say"
            subtitle={`Trusted by ${clinicData.googleReviewCount}+ patients in ${clinicData.city}`}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {clinicData.reviews.map((review, i) => (
            <motion.div
              key={review.name}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                i === 1
                  ? "bg-primary-600 shadow-2xl shadow-primary-500/25 md:-mt-4 md:mb-4"
                  : "bg-gray-50 hover:bg-gray-100/80 border border-gray-100"
              }`}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className={`absolute top-5 right-5 ${i === 1 ? "text-white/15" : "text-primary-100"}`}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={15} className="text-accent-400 fill-accent-400" />
                ))}
              </div>

              {/* Text */}
              <p className={`text-sm leading-relaxed mb-7 relative z-10 ${i === 1 ? "text-white/80" : "text-gray-600"}`}>
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
                  />
                  <span className={`font-heading font-semibold text-sm ${i === 1 ? "text-white" : "text-gray-900"}`}>
                    {review.name}
                  </span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${i === 1 ? "bg-white/15 text-white/70" : "bg-gray-100 text-gray-400"}`}>
                  Google
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Smile+Craft+Dental+Clinic+Kolkata"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors border-b border-primary-200 hover:border-primary-400 pb-0.5"
          >
            View all {clinicData.googleReviewCount}+ reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
