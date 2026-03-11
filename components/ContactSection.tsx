"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const inquiryTypes = [
  "인력파견",
  "인력도급",
  "채용대행",
  "컨설팅",
  "기타",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    type: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="section-snap relative w-full bg-gray-950 flex items-center justify-center overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-12 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">문의하기</h2>
          <p className="text-white/50 text-base md:text-xl">
            휴먼플로우는 인력을 보내는 회사가 아니라 현장을 안정시키는 파트너입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl font-bold mb-10">연락처 정보</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">전화 문의</p>
                  <p className="text-white/80 text-xl font-bold mt-1">02-0000-0000</p>
                  <p className="text-white/40 text-sm mt-1">평일 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">이메일 문의</p>
                  <p className="text-white/80 text-lg mt-1">placeholder@doguphr.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">오시는 길</p>
                  <p className="text-white/80 text-lg mt-1">서울특별시 OO구 OO로 000</p>
                  <p className="text-white/50 text-base">OO빌딩 00층</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">카카오톡 문의</p>
                  <a href="#" className="text-primary text-lg font-medium mt-1 inline-block hover:underline">
                    카카오톡으로 문의하기 →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/70 text-base font-medium mb-2 block">회사명 *</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="회사명을 입력해주세요"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-3 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-base font-medium mb-2 block">담당자명 *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="담당자명을 입력해주세요"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-3 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/70 text-base font-medium mb-2 block">연락처 *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-3 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-base font-medium mb-2 block">이메일 *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-3 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/70 text-base font-medium mb-2 block">문의유형 *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-3 text-white text-base focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-gray-900">문의유형을 선택해주세요</option>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t} className="bg-gray-900">{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white/70 text-base font-medium mb-2 block">문의내용 *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="필요한 인력 규모, 업종, 기간 등을 상세히 적어주시면 빠른 상담이 가능합니다."
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-3 text-white text-base placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-colors text-lg"
              >
                문의 보내기
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
