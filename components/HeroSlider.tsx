"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mouse } from "lucide-react";

const slides = [
  {
    subtitle: "STABLE WORKFORCE PARTNER",
    title: "기업 운영의",
    titleHighlight: "안정적인 인력파트너",
    description: "필요한 인력, 필요한 순간 (주)휴먼플로우",
    bgImage:
      "/growth.jpg",
  },
  {
    subtitle: "TOTAL WORKFORCE SOLUTION",
    title: "종합 인력 솔루션",
    titleHighlight: "",
    description:
      "제조, 건설, 물류 등 다양한 산업 분야에 최적화된 맞춤형 인력도급 서비스를 제공합니다",
    bgImage:
      "/meeting.jpg",
  },
  {
    subtitle: "HR SERVICE LEADING COMPANY",
    title: "대한민국",
    titleHighlight: "인력서비스 리딩 기업",
    description: "고객의 성공을 위한 최적의 인력 솔루션을 제공합니다",
    bgImage:
      "/hands.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [zooming, setZooming] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => {
        setPrev(p);
        return (p + 1) % slides.length;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  useEffect(() => {
    setZooming(false);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setZooming(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [current]);

  const goTo = (i: number) => {
    setPrev(current);
    setCurrent(i);
    resetTimer();
  };

  return (
    <section className="section-snap relative h-screen w-full overflow-hidden bg-dark">
      {/* All slides stacked, only current visible */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transition: i === current && zooming ? "transform 5s ease-out" : "none",
              transform: i === current ? (zooming ? "scale(1.15)" : "scale(1)") : i === prev ? "scale(1.15)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-[1400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-white/70 text-sm md:text-base tracking-[4px] uppercase mb-4 md:mb-6">
              {slides[current].subtitle}
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              {slides[current].title}
              {slides[current].titleHighlight && (
                <>
                  <br />
                  <span className="text-primary">
                    {slides[current].titleHighlight}
                  </span>
                </>
              )}
            </h1>
            <p className="text-white/60 text-base md:text-lg mt-4 md:mt-6 tracking-wide">
              {slides[current].description}
            </p>

            <button className="mt-8 md:mt-10 border border-white/40 text-white px-6 py-3 text-sm flex items-center gap-3 hover:bg-white/10 transition-colors">
              자세히 보기
              <span className="text-lg">→</span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cards */}
      <div className="absolute bottom-[212px] left-0 right-0 z-10 flex justify-center px-6">
        <div className="w-full max-w-[630px] grid grid-cols-3 gap-2 md:gap-3">
          {[
            { title: "인력공급 전문", desc: "검증된 전문 인력" },
            { title: "10년+ 노하우", desc: "업계 최고 경력" },
            { title: "맞춤형 인력관리", desc: "업종별 최적 솔루션" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-3 md:px-4 md:py-3 text-center"
            >
              <p className="text-white font-bold text-xs md:text-sm">{card.title}</p>
              <p className="text-white/50 text-[10px] md:text-xs mt-0.5">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom area */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2 scroll-indicator">
          <Mouse size={20} className="text-white/60" />
          <span className="text-white/40 text-[10px] tracking-[3px] uppercase">
            Scroll Down
          </span>
        </div>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
