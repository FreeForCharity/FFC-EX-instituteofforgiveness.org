import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Make a tax-deductible donation to the Institute of Forgiveness. Your gift funds training, basic-need support, and business startup assistance.',
  alternates: { canonical: '/donate/' },
}

const tiers = [
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

const DonatePage: React.FC = () => {
  return (
    <main className="bg-[#FBF6EC]">
      <section className="bg-gradient-to-br from-[#3D1E4D] via-[#5B2A6B] to-[#7A3B7E] py-[120px] text-white">
        <div className="mx-auto w-[92%] max-w-[1080px]">
          <p className="text-[13px] uppercase tracking-[0.28em] text-[#F5C76A] mb-[14px] aria-font">
            Support the work
          </p>
          <h1 className="text-[42px] md:text-[56px] font-[500] leading-[115%] max-w-[820px] mb-[20px] faustina-font">
            Your donation funds real second chances.
          </h1>
          <p className="text-[18px] leading-[170%] text-white/85 max-w-[680px] lato-font">
            Your donation will support the many programs and services that the Institute of
            Forgiveness and Nolef Turns Inc. provide for those with current and previous justice
            involvement. The goal is to increase corporate employment, self-employment, and
            entrepreneurship by providing training, basic-need support, and business startup
            assistance — reducing incarceration and recidivism rates.
          </p>
          <div className="mt-[36px] flex flex-wrap gap-[14px]">
            <a
              href="https://donorbox.org/institute-of-forgiveness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] items-center justify-center rounded-full bg-[#F5C76A] px-[40px] text-[18px] font-[600] text-[#3D1E4D] transition hover:bg-[#FFD888] lato-font"
            >
              Give via Donorbox
            </a>
            <a
              href="mailto:info@instituteofforgiveness.org?subject=Volunteer%20%2F%20Mentor%20Inquiry"
              className="inline-flex h-[58px] items-center justify-center rounded-full border-2 border-white/70 bg-transparent px-[36px] text-[17px] font-[500] text-white transition hover:bg-white/10 lato-font"
            >
              Volunteer or Mentor
            </a>
          </div>
        </div>
      </section>

      <section className="py-[80px] lg:py-[110px]">
        <div className="mx-auto w-[92%] max-w-[1080px]">
          <h2 className="text-[30px] md:text-[36px] font-[500] text-[#3D1E4D] leading-[120%] mb-[36px] max-w-[680px] faustina-font">
            What your gift accomplishes.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {tiers.map((tier) => (
              <div
                key={tier.amount}
                className="rounded-[20px] bg-white border border-[#3D1E4D]/8 p-[26px]"
              >
                <span className="block text-[40px] font-[600] text-[#7A3B7E] leading-none mb-[12px] faustina-font">
                  {tier.amount}
                </span>
                <p className="text-[15px] leading-[160%] text-[#2A1430]/85 lato-font">
                  {tier.impact}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-[40px] text-[14px] leading-[170%] text-[#2A1430]/70 max-w-[820px] lato-font">
            The Institute of Forgiveness is a subsidiary of Nolef Turns Inc., a 501(c)(3) charitable
            organization, EIN 47-5341386. All donations are deemed tax-deductible absent any
            limitations on deductibility applicable to a particular taxpayer. No goods or services
            were provided in exchange for your contribution.
          </p>
        </div>
      </section>
    </main>
  )
}

export default DonatePage
