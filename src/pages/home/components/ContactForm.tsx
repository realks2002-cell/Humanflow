import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[휴먼플로우 문의] ${formData.companyName} - ${formData.inquiryType}`);
    const body = encodeURIComponent(
      `회사명: ${formData.companyName}\n담당자명: ${formData.contactName}\n연락처: ${formData.phone}\n이메일: ${formData.email}\n문의유형: ${formData.inquiryType}\n\n문의내용:\n${formData.message}`
    );
    window.location.href = `mailto:placeholder@doguphr.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F1B3D]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8A35F]/20 text-[#C8A35F] px-4 py-2 rounded-full mb-4">
            <i className="ri-mail-send-line"></i>
            <span className="text-sm font-semibold uppercase tracking-wide">문의하기</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            업체 문의
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            휴먼플로우는 인력을 보내는 회사가 아니라 현장을 안정시키는 파트너입니다
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">연락처 정보</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A35F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl text-[#C8A35F]"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">전화 문의</div>
                    <div className="text-gray-300">02-0000-0000</div>
                    <div className="text-gray-400 text-sm">평일 09:00 - 18:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A35F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl text-[#C8A35F]"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">이메일 문의</div>
                    <div className="text-gray-300">placeholder@doguphr.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A35F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-[#C8A35F]"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">오시는 길</div>
                    <div className="text-gray-300">서울특별시 OO구 OO로 000</div>
                    <div className="text-gray-400 text-sm">OO빌딩 00층</div>
                  </div>
                </div>
              </div>
            </div>

            {/* KakaoTalk Button */}
            <a
              href="https://pf.kakao.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#FEE500] text-[#3C1E1E] px-6 py-4 rounded-2xl font-semibold hover:bg-[#F5DC00] transition-colors cursor-pointer w-2/5 justify-center"
            >
              <i className="ri-kakao-talk-fill text-2xl"></i>
              카카오톡 문의
            </a>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">회사명 *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="회사명을 입력해주세요"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A35F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">담당자명 *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="담당자명을 입력해주세요"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A35F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">연락처 *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A35F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">이메일 *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A35F] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">문의유형 *</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#C8A35F] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0F1B3D]">문의유형을 선택해주세요</option>
                  <option value="제조/생산 인력" className="bg-[#0F1B3D]">제조/생산 인력</option>
                  <option value="건설/현장 인력" className="bg-[#0F1B3D]">건설/현장 인력</option>
                  <option value="물류/유통 인력" className="bg-[#0F1B3D]">물류/유통 인력</option>
                  <option value="기타 문의" className="bg-[#0F1B3D]">기타 문의</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-gray-300 text-sm font-medium mb-2">문의내용 *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="필요한 인력 규모, 업종, 기간 등을 상세히 적어주시면 빠른 상담이 가능합니다."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A35F] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8A35F] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#B8934F] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="ri-send-plane-line"></i>
                문의 보내기
              </button>

              {isSubmitted && (
                <div className="mt-4 text-center text-green-400 font-medium">
                  이메일 클라이언트가 열렸습니다. 문의 내용을 발송해주세요.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
