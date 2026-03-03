export default function Problems() {
  const problems = [
    {
      icon: 'ri-user-unfollow-line',
      title: '갑작스러운 인력 공백',
    },
    {
      icon: 'ri-loop-left-line',
      title: '반복되는 채용부담',
    },
    {
      icon: 'ri-calendar-event-line',
      title: '성수기 인력 부족',
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: '인건비 운영부담',
    },
    {
      icon: 'ri-time-line',
      title: '근태 관리 어려움',
    },
  ];

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1B3D] mb-4 leading-tight">
            이런 문제가 있다면<br />
            <span className="text-[#C8A35F]">휴먼플로우</span>가 해답입니다
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#0F1B3D]/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <i className={`${problem.icon} text-3xl text-[#C8A35F]`}></i>
              </div>
              <div className="text-[#0F1B3D] font-bold text-lg">{problem.title}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[26px] font-bold text-[#C0392B]">
            휴먼플로우가 가장 현실적인 해결책을 제시합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
