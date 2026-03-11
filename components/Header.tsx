"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Navigation from "./Navigation";

const menuItems = [
  "회사소개",
  "사업소개",
  "채용정보",
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            className="text-white"
          >
            <circle cx="10" cy="10" r="5" fill="currentColor" opacity="0.8" />
            <circle cx="16" cy="10" r="5" fill="currentColor" />
            <text
              x="0"
              y="30"
              fill="currentColor"
              fontSize="14"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              HF
            </text>
          </svg>
          <span className="text-white text-xl font-bold tracking-wider ml-1">
            휴먼플로우
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" style={{ marginRight: "250px" }}>
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-[19px] font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
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
