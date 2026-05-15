import React from 'react'

interface Tier {
  amount: string
  impact: string
}

const tiers: Tier[] = [
  { amount: '$50', impact: 'Basic toiletries for two recently released individuals.' },
  {
    amount: '$100',
    impact:
      'Interview clothes, work boots, and transportation assistance for the first two weeks of new employment.',
  },
  { amount: '$500', impact: 'Education and technical-skills training for individuals in need.' },
  {
    amount: '$1,000',
    impact: 'Startup assistance for an individual launching their own business.',
  },
  {
    amount: '$2,500',
    impact:
      'Self-Resolution Fund — housing stability for individuals navigating background-check barriers.',
  },
  {
    amount: '$5,000',
    impact:
      'Real-estate fund for the future Holistic Care Re-Entry Center: a living facility for returning citizens.',
  },
]

const ImpactTiers: React.FC = () => {
  return (
    <section id="impact" className="w-full bg-[#F5E9D2] py-[90px] lg:py-[120px]">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="mb-[48px] max-w-[720px]">
          <p
            className="text-[13px] uppercase tracking-[0.28em] text-[#7A3B7E] mb-[14px]"
            id="aria-font"
          >
            Your Impact
          </p>
          <h2
            className="text-[34px] md:text-[44px] font-[500] text-[#3D1E4D] leading-[115%]"
            id="faustina-font"
          >
            Every gift is a concrete second chance.
          </h2>
          <p className="mt-[18px] text-[17px] leading-[165%] text-[#2A1430]/80" id="lato-font">
            These are the real, named programs your donation funds. Tax-deductible to the extent
            allowed by law — EIN 47-5341386.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {tiers.map((tier) => (
            <div
              key={tier.amount}
              className="relative flex flex-col rounded-[20px] bg-white border border-[#3D1E4D]/15 p-[26px] transition hover:shadow-lg hover:-translate-y-1 hover:border-[#F5C76A]"
            >
              <span
                className="text-[40px] font-[600] text-[#7A3B7E] leading-none mb-[12px]"
                id="faustina-font"
              >
                {tier.amount}
              </span>
              <p className="text-[15px] leading-[160%] text-[#2A1430]/85" id="lato-font">
                {tier.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactTiers
