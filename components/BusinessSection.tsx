"use client";

import { motion } from "framer-motion";
import { Factory, Package, Monitor, HardHat } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "생산 / 제조 인력 아웃소싱",
    desc: "조립, 검사, 포장, 라인 작업 등 현장 적응력이 높은 인력자원",
  },
  {
    icon: Package,
    title: "물류 / 창고 인력 아웃소싱",
    desc: "입출고, 피킹, 분류, 상하차 등 물류 효율 극대화 지원",
  },
  {
    icon: Monitor,
    title: "사무 / 지원 인력",
    desc: "사무보조, 전산업무, 고객응대 등 업무 공백 최소화",
  },
  {
    icon: HardHat,
    title: "현장 / 특수 전문 인력",
    desc: "다양한 산업 환경에 맞춘 직무별 인력 매칭",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BusinessSection() {
  return (
    <section className="section-snap relative flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/teamwork.jpg)" }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.15 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center -mt-[70px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-lg md:text-2xl tracking-wide">
            Service
          </span>
          <h2 className="text-white text-[26px] md:text-5xl lg:text-[50px] font-bold leading-snug mt-3 mb-10 md:mb-14">
            서비스 안내
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="flex items-start gap-4 md:gap-5 p-5 md:p-7 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon className="text-primary w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <h4 className="text-white text-base md:text-xl font-bold mb-1">
                  {title}
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
