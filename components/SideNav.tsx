"use client";

import { useEffect, useState } from "react";

const sections = [
  { index: 1, label: "회사소개" },
  { index: 2, label: "서비스안내" },
  { index: 3, label: "문제해소" },
  { index: 4, label: "운영개선" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".fullpage-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const index = Math.round(scrollTop / sectionHeight);
      setActiveSection(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const container = document.querySelector(".fullpage-container");
    if (!container) return;
    container.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
  };

  const isLightBg = false;

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-7">
      {sections.map((section) => (
        <button
          key={section.index}
          onClick={() => scrollToSection(section.index)}
          className="flex items-center gap-4 group cursor-pointer bg-transparent border-none outline-none"
        >
          <span
            className={`text-base transition-all duration-300 ${
              activeSection === section.index
                ? `${isLightBg ? "text-dark" : "text-white"} font-semibold`
                : isLightBg
                  ? "text-dark/50 group-hover:text-dark/80"
                  : "text-white/50 group-hover:text-white/80"
            }`}
          >
            {section.label}
          </span>
          <span
            className={`rounded-full transition-all duration-300 ${
              activeSection === section.index
                ? `w-[18px] h-[18px] border-2 border-primary ${isLightBg ? "bg-dark" : "bg-white"}`
                : isLightBg
                  ? "w-3 h-3 bg-dark/50 group-hover:bg-dark/80"
                  : "w-3 h-3 bg-white/50 group-hover:bg-white/80"
            }`}
          />
        </button>
      ))}

      <button
        onClick={() => scrollToSection(5)}

        className="mt-3 bg-primary hover:bg-primary-dark text-white text-base font-semibold rounded-full px-6 py-3 transition-all duration-300 cursor-pointer border-none outline-none"
      >
        Contact Us
      </button>
    </nav>
  );
}
