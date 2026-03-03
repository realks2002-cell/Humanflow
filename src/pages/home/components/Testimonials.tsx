export default function Testimonials() {
  const testimonials = [
    {
      name: '김정수',
      position: '생산관리 팀장',
      company: '(주)한성전자',
      text: '휴먼플로우 덕분에 생산라인 인력 충원 문제를 빠르게 해결했습니다. 숙련된 인력을 적시에 공급받아 납기 지연 없이 원활하게 운영하고 있습니다. 인력 관리도 체계적이라 매우 만족합니다.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: '박미영',
      position: '인사총무 부장',
      company: '대한물류(주)',
      text: '물류센터 인력 운영에 어려움이 많았는데 휴먼플로우과 협력한 이후로 인력 수급이 안정되었습니다. 시즌별 물량 변동에도 유연하게 대응해주셔서 큰 도움이 됩니다.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: '이동훈',
      position: '현장소장',
      company: '삼진건설(주)',
      text: '건설현장 인력 파견을 맡기고 있는데 안전교육을 철저히 이수한 인력만 보내주셔서 안심하고 현장을 운영합니다. 긴급 인력 요청에도 빠르게 대응해주십니다.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: '최윤희',
      position: '운영이사',
      company: '(주)코리아푸드',
      text: '식품 제조 공장 인력을 전적으로 휴먼플로우에 맡기고 있습니다. 위생 관련 교육도 사전에 진행해주시고, 이직률도 다른 업체 대비 현저히 낮아서 매우 만족하고 있습니다.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=9'
    },
    {
      name: '장현우',
      position: '구매팀장',
      company: '서울자동차부품(주)',
      text: '자동차 부품 제조라인에 휴먼플로우 인력을 도입한 이후 불량률이 크게 감소했습니다. 인력의 전문성이 높고, 담당 매니저의 사후관리도 꼼꼼해서 장기 파트너로 신뢰하고 있습니다.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8A35F]/10 text-[#C8A35F] px-4 py-2 rounded-full mb-4">
            <i className="ri-chat-quote-line"></i>
            <span className="text-sm font-semibold uppercase tracking-wide">고객 후기</span>
          </div>
          <h2 className="text-5xl font-bold text-[#0F1B3D]">
            고객사의 생생한 후기
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-[#C8A35F] text-sm"></i>
                    ))}
                  </div>
                </div>
              </div>

              <i className="ri-double-quotes-l text-5xl text-[#C8A35F]/20 mb-4 block"></i>

              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                {testimonial.text}
              </p>

              <div>
                <div className="font-bold text-[#0F1B3D]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
                <div className="text-sm text-[#C8A35F] font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-[#C8A35F] text-sm"></i>
                    ))}
                  </div>
                </div>
              </div>

              <i className="ri-double-quotes-l text-5xl text-[#C8A35F]/20 mb-4 block"></i>

              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                {testimonial.text}
              </p>

              <div>
                <div className="font-bold text-[#0F1B3D]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
                <div className="text-sm text-[#C8A35F] font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
