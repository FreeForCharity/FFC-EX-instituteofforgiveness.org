import React from 'react'

const Mission: React.FC = () => {
  return (
    <section id="mission" className="w-full bg-[#F5E9D2] py-[80px] lg:py-[110px]">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-start">
          <div className="lg:col-span-5">
            <p className="text-[13px] uppercase tracking-[0.28em] text-[#7A3B7E] mb-[14px] aria-font">
              Our Mission
            </p>
            <h2 className="text-[34px] md:text-[44px] font-[500] text-[#3D1E4D] leading-[115%] faustina-font">
              Rebuilding the foundations of family and community.
            </h2>
            <div className="mt-[28px] inline-block rounded-full bg-[#3D1E4D] px-[18px] py-[8px] text-[13px] font-[600] text-[#F5C76A]">
              A subsidiary of Nolef Turns Inc. &middot; 501(c)(3)
            </div>

            {/* Visual anchor: three programme pillars */}
            <div className="mt-[36px] space-y-[14px]">
              {(
                [
                  { label: 'Trade Training', desc: 'Barbering & cosmetology licensure' },
                  { label: 'Mentoring', desc: 'Lived experience guides the way' },
                  { label: 'Re-Entry Support', desc: 'Dignity from day one' },
                ] as const
              ).map((item) => (
                <div key={item.label} className="flex items-center gap-[12px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#F5C76A] flex-shrink-0 ring-2 ring-[#E08540]/50" />
                  <span className="text-[15px] font-[600] text-[#3D1E4D] [font-family:var(--font-lato,sans-serif)]">
                    {item.label}
                  </span>
                  <span className="text-[14px] text-[#3D1E4D]/60 [font-family:var(--font-lato,sans-serif)]">
                    — {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 space-y-[22px] lato-font">
            <p className="text-[18px] leading-[170%] text-[#2A1430]">
              A professional barber and a battle for forgiveness. Sheba Williams is the founder of
              the Institute of Forgiveness; she uses her skills, training, and lived experience to
              change the juvenile and criminal legal systems in Virginia.
            </p>
            <p className="text-[18px] leading-[170%] text-[#2A1430]">
              After spending years as a barber stylist, Sheba decided to use her barbering and
              cosmetology training to make a difference. She began a mentoring and trade program in
              2016 after founding{' '}
              <a
                href="https://www.nolefturns.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[600] text-[#7A3B7E] underline decoration-[#F5C76A] decoration-2 underline-offset-4 hover:text-[#3D1E4D]"
              >
                Nolef Turns Inc.
              </a>
              , which works to reduce recidivism by supporting and advocating alongside those with
              court and justice involvement.
            </p>
            <p className="text-[18px] leading-[170%] text-[#2A1430]">
              Because barbering is the most successful trade offered in Virginia&apos;s Department
              of Corrections, the Institute uses it as a tool to teach self-employment skills, the
              path to state licensure, financial independence, and PRE-Entry mentoring for youth
              experiencing trauma that could otherwise pull them into the legal system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
