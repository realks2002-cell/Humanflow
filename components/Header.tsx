"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Navigation from "./Navigation";

const menuItems = [
  { label: "회사소개", index: 1 },
  { label: "사업소개", index: 2 },
  { label: "문의하기", index: 5 },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <Image
          src="/logo-white.png"
          alt="휴먼플로우"
          width={180}
          height={30}
          className="h-6 md:h-9 w-auto ml-0 md:ml-[100px]"
          priority
        />

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
