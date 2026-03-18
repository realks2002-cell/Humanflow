"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RecruitSection() {
  return (
    <section className="section-snap relative flex items-center justify-center overflow-hidden">
      {/* Background - track/runner */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-white text-xl md:text-4xl lg:text-[42px] font-bold mb-4 md:whitespace-nowrap">
          멈추지 않는 도약, 대한민국 HR의 미래를 씁니다
        </h2>
        <p className="text-white text-xs md:text-lg mt-4 md:mt-8 leading-relaxed max-w-xl mx-auto">
          대한민국 HR의 중심 휴먼플로우, 우리의 미래가 될 당신을 기다립니다.
        </p>

        <motion.button
          onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 md:mt-12 border border-white/50 text-white px-8 py-3.5 text-sm flex items-center gap-3 mx-auto hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          자세히 보기
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}
