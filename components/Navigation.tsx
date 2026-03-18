"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Plus } from "lucide-react";

const menuItems = [
  { label: "회사소개", index: 1 },
  { label: "사업소개", index: 2 },
  { label: "문의하기", index: 5 },
];

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-[60]"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-white z-[70] shadow-2xl"
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={onClose}
                className="text-gray-800 hover:opacity-60 transition-opacity"
                aria-label="메뉴 닫기"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu items */}
            <ul className="px-8">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="border-b border-gray-100"
                >
                  <button
                    onClick={() => {
                      const container = document.querySelector(".fullpage-container");
                      if (container) container.scrollTo({ top: item.index * window.innerHeight, behavior: "smooth" });
                      onClose();
                    }}
                    className="flex items-center justify-between py-5 text-gray-800 text-[17px] font-medium hover:text-primary transition-colors w-full bg-transparent border-none cursor-pointer text-left"
                  >
                    {item.label}
                    <Plus size={18} className="text-gray-400" />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
