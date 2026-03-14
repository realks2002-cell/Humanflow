"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Building2,
  Factory,
  Phone,
  Package,
  Target,
  GraduationCap,
} from "lucide-react";

const services = [
  { icon: Globe, label: "HR서비스" },
  { icon: Factory, label: "제조생산" },
  { icon: Phone, label: "건설현장" },
  { icon: Package, label: "물류" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function BusinessSection() {
  return (
    <section className="section-snap relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/teamwork.jpg)" }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.15 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ marginTop: "620px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-[50px] font-bold leading-snug">
            종합 인력 솔루션
          </h2>
          <p className="text-white/60 text-base md:text-[18px] mt-6 md:mt-8 mb-[30px] leading-relaxed max-w-2xl mx-auto">
            제조, 건설, 물류 등 다양한 산업 분야에 최적화된 맞춤형 인력도급 서비스를 제공합니다
          </p>
        </motion.div>

        {/* Service grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-12 mt-14 md:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300" style={{ marginTop: "-50px" }}>
                <Icon
                  size={26}
                  strokeWidth={1.2}
                  className="text-white/80 group-hover:text-primary transition-colors duration-300"
                />
              </div>
              <span className="text-white/80 text-sm md:text-[15px] font-medium group-hover:text-primary transition-colors duration-300">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
