"use client";

import { motion } from "framer-motion";
import {
  UserX,
  RefreshCw,
  Users,
  Wallet,
  ClipboardCheck,
  Crosshair,
  HeartHandshake,
  Zap,
  ShieldCheck,
} from "lucide-react";

const problems = [
  { icon: UserX, label: "갑작스러운 인력 공백" },
  { icon: RefreshCw, label: "반복되는 채용부담" },
  { icon: Users, label: "성수기 인력 부족" },
  { icon: Wallet, label: "인건비 운영부담" },
  { icon: ClipboardCheck, label: "근태 관리 어려움" },
];

const reasons = [
  { icon: Crosshair, title: "단순 인력 소개가 아닙니다", desc: "현장 운영을 고려한 인력 매칭 구조" },
  { icon: HeartHandshake, title: "투입 후 관리가 핵심입니다", desc: "근태 · 적응 · 안정화까지 운영 지원" },
  { icon: Zap, title: "속도만 빠른 업체와 다릅니다", desc: "신속 + 안정 중심 인력 운영" },
  { icon: ShieldCheck, title: "비용보다 리스크를 줄입니다", desc: "운영 공백 최소화 / 업무 연속성 확보" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProblemSection() {
  return (
    <section id="problem" className="section-snap relative w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 text-center" style={{ marginTop: "50px" }}>

        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm md:text-xl mb-2">
            왜 많은 기업이
          </p>
          <h3 className="text-white text-2xl md:text-5xl lg:text-[46px] font-bold leading-snug mb-6">
            휴먼플로우를 선택할까요?
          </h3>
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {problems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5">
                <Icon size={19} className="text-white" />
                <span className="text-white text-base">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="flex items-center gap-3 md:gap-5 p-0 md:p-6 text-left"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg bg-white/15 flex items-center justify-center">
                <Icon size={26} className="text-white hidden md:block" />
                <Icon size={18} className="text-white md:hidden" />
              </div>
              <div>
                <h4 className="text-white text-sm md:text-xl font-bold">
                  {title}
                </h4>
                <p className="text-white/60 text-xs md:text-lg mt-0.5">
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
