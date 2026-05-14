import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the Institute of Forgiveness website',
  alternates: { canonical: '/terms-of-service/' },
}

export default function TermsOfService() {
  return (
    <main className="bg-[#FBF6EC] pt-[140px] pb-[80px]">
      <div className="mx-auto w-[92%] max-w-[860px]" id="lato-font">
        <h1
          className="text-[36px] md:text-[44px] font-[500] text-[#3D1E4D] mb-[8px]"
          id="faustina-font"
        >
          Terms of Service
        </h1>
        <p className="text-[14px] text-[#2A1430]/60 mb-[28px]">Effective Date: 2026-05-14</p>

        <div className="space-y-[20px] text-[16px] leading-[175%] text-[#2A1430]/90">
          <p>
            By accessing the Institute of Forgiveness website you agree to the following terms. If
            you do not agree, please do not use this site.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px]" id="faustina-font">
            Use of the site
          </h2>
          <p>
            All content on this site is provided for informational purposes. You may share and
            reference our content with attribution, but you may not reuse our branding, logos, or
            program names to imply endorsement without written permission.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px]" id="faustina-font">
            Donations
          </h2>
          <p>
            Donations made through our Donorbox giving page are tax-deductible to the extent allowed
            by law. The Institute of Forgiveness is a subsidiary of Nolef Turns Inc., a 501(c)(3)
            charitable organization, EIN 47-5341386. No goods or services are provided in exchange
            for monetary contributions.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px]" id="faustina-font">
            Third-party services
          </h2>
          <p>
            We use third-party services including Donorbox (donations), Google (analytics), and
            social platforms (engagement). Their terms govern your interactions on those platforms.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px]" id="faustina-font">
            Contact
          </h2>
          <p>
            Questions about these terms? Email{' '}
            <Link
              href="mailto:info@instituteofforgiveness.org"
              className="font-[600] text-[#7A3B7E] underline decoration-[#F5C76A] decoration-2 underline-offset-4 hover:text-[#3D1E4D]"
            >
              info@instituteofforgiveness.org
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
