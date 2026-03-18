"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-snap relative flex items-center justify-center bg-[#f5f0eb]">
      <div className="w-full max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm md:text-lg tracking-wide">
            About
          </span>
          <h2 className="text-dark text-[22px] md:text-4xl lg:text-[42px] font-bold leading-snug mt-3 mb-8 md:mb-10">
            &quot;아직도 비싼 아웃소싱 수수료를
            <br />
            부담하시나요?&quot;
          </h2>
        </motion.div>

        <motion.div
          className="relative w-[85%] md:w-full mx-auto aspect-[16/9] mb-12 overflow-hidden rounded-sm"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Image
            src="/business-meeting-v2.jpeg"
            alt="비즈니스 미팅"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-dark text-base md:text-2xl lg:text-[26px] font-bold leading-relaxed mb-5 whitespace-nowrap">
            휴먼플로우는 비합리적인
            <br className="md:hidden" />
            {" "}아웃소싱 서비스를
            <br className="hidden md:block" />
            {" "}혁신하기 위해 출발했습니다.
          </h3>
          <p className="text-gray-500 text-xs md:text-base leading-relaxed max-w-2xl mx-auto">
            대다수의 아웃소싱 업체가 서비스 대비 터무니 없이 높은
            <br className="hidden md:block" />
            이용수수료를 부과하는 것이 업계의 현실입니다.
            <br className="hidden md:block" />
            휴먼플로우는 이용 고객의 마음으로 아웃소싱 서비스를 시작했습니다.
            <br className="hidden md:block" />
            고객사와 함께 성장하고, 나아가 기업과 근로자가 행복한
            <br className="hidden md:block" />
            미래의 고용시장을 고민하고 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
