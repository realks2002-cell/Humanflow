import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#C8A35F]">
              <i className="ri-team-line text-2xl text-white"></i>
            </div>
            <span className="text-xl font-bold text-[#0F1B3D]">휴먼플로우</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-[15px] font-medium text-[#0F1B3D] hover:text-[#C8A35F] transition-colors whitespace-nowrap cursor-pointer">서비스 소개</a>
            <a href="#about" className="text-[15px] font-medium text-[#0F1B3D] hover:text-[#C8A35F] transition-colors whitespace-nowrap cursor-pointer">회사소개</a>
            <a href="#contact" className="text-[15px] font-medium text-[#0F1B3D] hover:text-[#C8A35F] transition-colors whitespace-nowrap cursor-pointer">문의하기</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <i className={`text-2xl text-[#0F1B3D] ${
              isMobileOpen ? 'ri-close-line' : 'ri-menu-line'
            }`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-6 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              <a href="#services" onClick={() => setIsMobileOpen(false)} className="text-[#0F1B3D] font-medium py-2 hover:text-[#C8A35F] transition-colors cursor-pointer">서비스 소개</a>
              <a href="#about" onClick={() => setIsMobileOpen(false)} className="text-[#0F1B3D] font-medium py-2 hover:text-[#C8A35F] transition-colors cursor-pointer">회사소개</a>
              <a href="#contact" onClick={() => setIsMobileOpen(false)} className="text-[#0F1B3D] font-medium py-2 hover:text-[#C8A35F] transition-colors cursor-pointer">문의하기</a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
