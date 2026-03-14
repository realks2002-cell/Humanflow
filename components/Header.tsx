"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Navigation from "./Navigation";

const menuItems = [
  { label: "회사소개", index: 1 },
  { label: "사업소개", index: 2 },
  { label: "문의하기", index: 4 },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <span className="text-white text-xl font-bold tracking-wider">
          휴먼플로우
        </span>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" style={{ marginRight: "250px" }}>
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                const container = document.querySelector(".fullpage-container");
                if (container) container.scrollTo({ top: item.index * window.innerHeight, behavior: "smooth" });
              }}
              className="text-white text-[19px] font-medium hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsNavOpen(true)}
          className="lg:hidden text-white p-2 hover:opacity-80 transition-opacity"
          aria-label="메뉴 열기"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </header>

      <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
}
