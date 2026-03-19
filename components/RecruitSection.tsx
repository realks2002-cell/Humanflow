"use client";

import { motion } from "framer-motion";
import {
  Siren,
  UserPlus,
  Wallet,
  UsersRound,
  UserX,
} from "lucide-react";

const problems = [
  { icon: Siren, label: "긴급 인력 필요" },
  { icon: UserPlus, label: "채용 부담 증가" },
  { icon: Wallet, label: "인건비 관리 어려움" },
  { icon: UsersRound, label: "성수기 인력 부족" },
  { icon: UserX, label: "이직률 / 근태 문제" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function RecruitSection() {
  return (
    <section className="section-snap relative flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80)",
        }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.15 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center -mt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-[26px] md:text-5xl lg:text-[50px] font-bold mb-4 md:mb-6" style={{ lineHeight: "calc(1em + 8px)" }}>
            이런 문제가 있다면
            <br />
            휴먼플로우가 해답입니다.
          </h2>
        </motion.div>

        <motion.div
          className="mt-[80px] mb-10 md:mb-14 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 상단 3개 */}
          <div className="flex justify-center gap-3 md:gap-5">
            {problems.slice(0, 3).map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-3 md:px-6 md:py-4 backdrop-blur-sm"
              >
                <Icon className="text-primary w-4 h-4 md:w-6 md:h-6" />
                <span className="text-white text-sm md:text-base font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
          {/* 하단 2개 - 상단 사이에 걸치도록 올려서 배치 */}
          <div className="flex justify-center gap-3 md:gap-5 mt-[30px]">
            {problems.slice(3).map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-3 md:px-6 md:py-4 backdrop-blur-sm"
              >
                <Icon className="text-primary w-4 h-4 md:w-6 md:h-6" />
                <span className="text-white text-sm md:text-base font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-[100px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-yellow-300 text-xl md:text-3xl leading-relaxed font-semibold">
            필요한 인력, 바로 요청하세요.
            <br />
            휴먼플로우가 가장 빠르게 대응합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
