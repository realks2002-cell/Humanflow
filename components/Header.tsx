"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 md:px-10 py-5">
      <Image
        src="/logo-white.png"
        alt="휴먼플로우"
        width={180}
        height={30}
        className="h-6 md:h-10 w-auto ml-0 md:ml-[40px]"
        priority
      />
    </header>
  );
}
