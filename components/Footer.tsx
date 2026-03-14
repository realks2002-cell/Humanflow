"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-6 px-6 md:px-10" style={{ scrollSnapAlign: "end" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">휴먼플로우</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              대한민국 HR서비스의 미래를 만들어가는
              <br />
              종합 인력 솔루션 기업
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>전화: 02-0000-0000</li>
              <li>이메일: placeholder@doguphr.com</li>
              <li>팩스: 02-0000-0001</li>
            </ul>
          </div>

          {/* 주소 */}
          <div>
            <h4 className="text-white font-semibold mb-4">오시는 길</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>경기도 화성시 동탄구 동탄산단6길 15-40</li>
              <li>3층 302호(방교동)</li>
            </ul>
          </div>
        </div>

        {/* 하단 */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30" style={{ fontSize: "14.4px" }}>
            © 2026 주식회사 휴먼플로우. All rights reserved. | 대표: 신경미 | 사업자등록번호: 286-87-03747
          </p>
          <div className="flex gap-6 text-white/40" style={{ fontSize: "14.4px" }}>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
