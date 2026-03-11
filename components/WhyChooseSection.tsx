"use client";

import { motion } from "framer-motion";
import { Crosshair, HeartHandshake, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Crosshair,
    title: "단순 인력 소개가 아닙니다",
    desc: "현장 운영을 고려한 인력 매칭 구조",
  },
  {
    icon: HeartHandshake,
    title: "투입 후 관리가 핵심입니다",
    desc: "근태 · 적응 · 안정화까지 운영 지원",
  },
  {
    icon: Zap,
    title: "속도만 빠른 업체와 다릅니다",
    desc: "신속 + 안정 중심 인력 운영",
  },
  {
    icon: ShieldCheck,
    title: "비용보다 리스크를 줄입니다",
    desc: "운영 공백 최소화 / 업무 연속성 확보",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseSection() {
  return (
    <section className="section-snap relative w-full flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-lg md:text-xl mb-4">
            왜 많은 기업이
          </p>
          <h2 className="text-white text-3xl md:text-5xl lg:text-[50px] font-bold leading-snug">
            휴먼플로우를 선택할까요?
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <Icon size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                  {title}
                </h3>
                <p className="text-white/50 text-sm md:text-base">
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
