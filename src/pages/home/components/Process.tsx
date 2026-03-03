export default function Process() {
  const steps = [
    {
      number: '01',
      title: '기업상담 및 요구분석',
    },
    {
      number: '02',
      title: '맞춤 인력 매칭 및 제안',
    },
    {
      number: '03',
      title: '현장 투입 및 운영시작',
    },
    {
      number: '04',
      title: '지속 관리 및 피드백',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8A35F]/10 text-[#C8A35F] px-4 py-2 rounded-full mb-4">
            <i className="ri-route-line"></i>
            <span className="text-sm font-semibold uppercase tracking-wide">Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1B3D]">진행절차</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+48px)] right-[-calc(50%-48px)] h-[2px] bg-[#C8A35F]/30 z-0" style={{ width: 'calc(100% - 96px)', left: 'calc(50% + 48px)' }}></div>
              )}
              <div className="bg-[#F5F7FA] rounded-2xl p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-[#0F1B3D] rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-[#C8A35F] font-extrabold text-lg">{step.number}</span>
                </div>
                <div className="text-[#0F1B3D] font-bold text-lg leading-snug">{step.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <p className="text-gray-500 text-lg">
            복잡한 절차없이 <span className="text-[#0F1B3D] font-semibold">빠르고 명확하게</span> 진행됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
