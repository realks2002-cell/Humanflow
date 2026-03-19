"use client";

import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck, ClipboardList } from "lucide-react";

const highlights = [
  { label: "검증된 인력풀", icon: Users },
  { label: "신속한 대응 시스템", icon: Zap },
  { label: "안정적 현장운영", icon: ShieldCheck },
  { label: "체계적 인력관리", icon: ClipboardList },
];

export default function AboutSection() {
  return (
    <section className="section-snap relative flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/tyler-franta-iusJ25iYu1c-unsplash.jpg)" }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.15 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 text-center -mt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-lg md:text-2xl tracking-wide">
            About
          </span>
          <h2 className="text-white text-[26px] md:text-5xl lg:text-[50px] font-bold leading-snug mt-3 mb-8 md:mb-10">
            신뢰를 기반으로 흐르는 인력 솔루션
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/90 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto mb-6">
            휴먼플로우는 기업과 사람을 연결하는 전문 아웃소싱 파트너입니다.
            <br className="hidden md:block" />
            다양한 산업현장의 경험과 체계적인 인력관리 시스템을 바탕으로
            <br className="hidden md:block" />
            고객사의 운영 안정성과 효율 향상을 지원합니다.
            <br />
            <br />
            단순 인력 공급이 아닌, 지속 가능한 인력 운영 솔루션을 제공합니다.
          </p>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            - 휴먼플로우 임직원 일동 -
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[70px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {highlights.map((item, i) => (
            <div
              key={i}
              className="border border-white/20 rounded-lg py-8 px-3 bg-white/5 backdrop-blur-sm flex flex-col items-center gap-3"
            >
              <item.icon className="text-emerald-300 w-7 h-7 md:w-8 md:h-8" />
              <p className="text-white text-sm md:text-base font-semibold">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
