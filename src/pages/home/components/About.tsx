export default function About() {
  const reasons = [
    {
      title: '단순 인력 소개가 아닙니다',
      description: '현장 운영을 고려한 인력 매칭 구조',
    },
    {
      title: '투입 후 관리가 핵심입니다',
      description: '근태 · 적응 · 안정화까지 운영 지원',
    },
    {
      title: '속도만 빠른 업체와 다릅니다',
      description: '신속 + 안정 중심 인력 운영',
    },
    {
      title: '비용보다 리스크를 줄입니다',
      description: '운영 공백 최소화 / 업무 연속성 확보',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-3">
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src="/business-meeting-v2.jpeg"
                alt="휴먼플로우 전문 팀"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1B3D] mb-10 leading-tight">
              왜 많은 기업이<br />휴먼플로우를 선택할까요?
            </h2>

            <div className="space-y-6 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-[#C8A35F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm font-bold"></i>
                  </div>
                  <div>
                    <div className="text-[#0F1B3D] font-bold text-lg">{reason.title}</div>
                    <div className="text-gray-600 mt-1">{reason.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex bg-[#C8A35F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B8934F] transition-colors whitespace-nowrap cursor-pointer items-center gap-2">
              <i className="ri-mail-send-line"></i>
              문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
