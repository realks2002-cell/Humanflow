
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero.jpg"
          alt="종합 인력도급 전문기업 도급HR"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-32">
        <div className="max-w-4xl mx-auto text-center mt-[100px]">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            최적의 인력 솔루션,<br />도급HR이 함께합니다
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            제조·건설·물류 전 분야 맞춤형 인력도급 서비스<br className="hidden sm:block" />
            10년 이상의 전문 노하우로 귀사의 성장을 지원합니다
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <a href="https://pf.kakao.com/placeholder" target="_blank" rel="noopener noreferrer" className="bg-[#FEE500] text-[#3C1E1E] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#F5DC00] transition-all border-2 border-[#FEE500] flex items-center gap-3 whitespace-nowrap cursor-pointer">
              <i className="ri-kakao-talk-fill text-xl"></i>
              카카오톡 문의
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 w-[280px]">
              <div className="w-12 h-12 bg-[#C8A35F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <div className="text-left flex-1">
                <div className="text-white font-bold text-base">인력공급 전문</div>
                <div className="text-gray-300 text-sm">검증된 전문 인력</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 w-[280px]">
              <div className="w-12 h-12 bg-[#C8A35F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <div className="text-left flex-1">
                <div className="text-white font-bold text-base">10년+ 노하우</div>
                <div className="text-gray-300 text-sm">업계 최고 경력</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 w-[280px]">
              <div className="w-12 h-12 bg-[#C8A35F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-user-settings-line text-2xl text-white"></i>
              </div>
              <div className="text-left flex-1">
                <div className="text-white font-bold text-base">맞춤형 인력관리</div>
                <div className="text-gray-300 text-sm">업종별 최적 솔루션</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
