import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, SmilePlus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Book Appointment",
    description: "Call us, WhatsApp, or fill the form. We'll confirm your slot within minutes.",
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Consultation",
    description: "Our specialist examines your teeth and builds a personalised treatment plan.",
  },
  {
    num: "03",
    icon: SmilePlus,
    title: "Leave Smiling",
    description: "Receive expert, comfortable treatment and dedicated aftercare support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="How It Works" subtitle="Three simple steps to your perfect smile" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
          {/* Connecting dashes */}
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] border-t-2 border-dashed border-primary-200/60 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative text-center group z-10"
            >
              {/* Step number with ring */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-full bg-accent-400 text-white font-heading font-bold text-sm flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                {/* Ring that appears on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-accent-400/30 scale-[1.6] opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition-all duration-500" />
              </div>

              {/* Icon card */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-primary-100 flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                <step.icon size={26} className="text-primary-500" />
              </div>

              <h3 className="font-heading font-semibold text-base text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 max-w-[220px] mx-auto leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
