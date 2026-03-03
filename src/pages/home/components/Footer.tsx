export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-12 border-b border-gray-700">
          <div className="flex items-center gap-3 mb-4 lg:mb-0">
            <div className="w-12 h-12 bg-[#C8A35F] rounded-lg flex items-center justify-center">
              <i className="ri-team-line text-2xl text-white"></i>
            </div>
            <span className="text-2xl font-bold">휴먼플로우</span>
          </div>
          <p className="text-gray-400">필요한 인력, 필요한순간 (주)휴먼플로우</p>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 서비스 */}
          <div>
            <h4 className="text-lg font-bold mb-6">서비스</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">제조/생산 인력</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">건설/현장 인력</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">물류/유통 인력</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">맞춤형 인력도급</a></li>
            </ul>
          </div>

          {/* 회사소개 */}
          <div>
            <h4 className="text-lg font-bold mb-6">회사소개</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">휴먼플로우 소개</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">고객 후기</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">채용 안내</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">공지사항</a></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-lg font-bold mb-6">고객지원</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">문의하기</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">자주 묻는 질문</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">서비스 지역</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#C8A35F] transition-colors cursor-pointer">개인정보처리방침</a></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-bold mb-6">연락처</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <i className="ri-phone-line text-[#C8A35F]"></i>
                1644-5393
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <i className="ri-mail-line text-[#C8A35F]"></i>
                placeholder@doguphr.com
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <i className="ri-map-pin-line text-[#C8A35F] mt-1"></i>
                경기도 화성시 동탄구 동탄산단6길 15-40, 3층302호(방교동)
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <i className="ri-time-line text-[#C8A35F]"></i>
                평일 09:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            &copy; 2026 휴먼플로우. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C8A35F] transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C8A35F] transition-colors cursor-pointer">
                <i className="ri-blog-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
