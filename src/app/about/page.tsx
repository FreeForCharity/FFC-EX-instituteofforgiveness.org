import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The Institute of Forgiveness is a Virginia-based mentoring institute and subsidiary of Nolef Turns Inc., working toward juvenile and criminal justice reform through trade training, mentoring, and re-entry support.',
  alternates: { canonical: '/about/' },
}

const AboutPage: React.FC = () => {
  return (
    <main className="bg-[#FBF6EC]">
      <section className="bg-[#3D1E4D] py-[120px] text-white">
        <div className="mx-auto w-[92%] max-w-[1080px]">
          <p
            className="text-[13px] uppercase tracking-[0.28em] text-[#F5C76A] mb-[14px]"
            id="aria-font"
          >
            About the Institute
          </p>
          <h1
            className="text-[42px] md:text-[56px] font-[500] leading-[115%] max-w-[820px]"
            id="faustina-font"
          >
            Forgiveness is the practical work of a more humane justice system.
          </h1>
        </div>
      </section>

      <section className="py-[80px] lg:py-[110px]">
        <div className="mx-auto w-[92%] max-w-[860px] space-y-[26px]" id="lato-font">
          <p className="text-[18px] leading-[175%] text-[#2A1430]">
            A professional barber and a battle for forgiveness — Sheba Williams is the founder of
            the Institute of Forgiveness. She uses her skills, training, and lived experience to
            change the juvenile and criminal legal systems in Virginia.
          </p>
          <p className="text-[18px] leading-[175%] text-[#2A1430]">
            After spending years as a barber stylist, Sheba decided to use her barbering and
            cosmetology training to make a difference in the juvenile and criminal legal systems.
            She began a mentoring and trade program in 2016 after founding{' '}
            <Link
              href="https://www.nolefturns.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[600] text-[#7A3B7E] underline decoration-[#F5C76A] decoration-2 underline-offset-4 hover:text-[#3D1E4D]"
            >
              Nolef Turns Inc.
            </Link>{' '}
            — a nonprofit that works to reduce recidivism by supporting and advocating alongside
            those with court and justice involvement.
          </p>
          <p className="text-[18px] leading-[175%] text-[#2A1430]">
            Because the barbering program is the most successful trade offered in Virginia&apos;s
            Department of Corrections, Sheba made the decision to use her barbering training as a
            tool to help others with self-employment skills — learning what is necessary to become
            licensed and pass state-certified testing, how to maintain financial independence, and
            most importantly, to provide PRE-Entry services for youth experiencing trauma that could
            potentially lead them into the juvenile or criminal legal systems through the mentoring
            program.
          </p>
          <p className="text-[18px] leading-[175%] text-[#2A1430]">
            Partnering youth with those of learned and lived experience opens them up to
            opportunities of success and deters young people from entering the legal system.
          </p>

          <div className="mt-[40px] rounded-[20px] bg-white border border-[#3D1E4D]/10 p-[28px]">
            <h2 className="text-[24px] font-[500] text-[#3D1E4D] mb-[10px]" id="faustina-font">
              How we are organized
            </h2>
            <p className="text-[16px] leading-[170%] text-[#2A1430]/85">
              The Institute of Forgiveness is a subsidiary of{' '}
              <Link
                href="https://www.nolefturns.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[600] text-[#7A3B7E] underline decoration-[#F5C76A] decoration-2 underline-offset-4 hover:text-[#3D1E4D]"
              >
                Nolef Turns Inc.
              </Link>
              , a 501(c)(3) charitable organization, EIN 47-5341386. All donations are deemed
              tax-deductible absent any limitations on deductibility applicable to a particular
              taxpayer.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
