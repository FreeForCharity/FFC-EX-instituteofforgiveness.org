import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Institute of Forgiveness website',
  alternates: { canonical: '/privacy-policy/' },
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FBF6EC] pt-[140px] pb-[80px]">
      <div className="mx-auto w-[92%] max-w-[860px] lato-font">
        <h1 className="text-[36px] md:text-[44px] font-[500] text-[#3D1E4D] mb-[8px] faustina-font">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-[#2A1430]/60 mb-[28px]">Effective Date: 2026-05-14</p>

        <div className="space-y-[20px] text-[16px] leading-[175%] text-[#2A1430]/90">
          <p>
            The Institute of Forgiveness (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
            subsidiary of Nolef Turns Inc., a 501(c)(3) nonprofit. We respect your privacy and are
            committed to protecting any information you share with us through this website.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px] faustina-font">
            Information we collect
          </h2>
          <p>
            We collect only the information you voluntarily provide — for example when you email us,
            call our office, or use our donation processor. We do not sell personal information.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px] faustina-font">
            Donations
          </h2>
          <p>
            Donations are processed by Donorbox; their privacy practices govern data you submit on
            their forms. We receive only the information needed to acknowledge your gift and issue
            tax-deductibility documentation.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px] faustina-font">
            Analytics
          </h2>
          <p>
            We may use Google Tag Manager and Google Analytics to understand how visitors use the
            site in aggregate. You can opt out via browser settings or by declining non-essential
            cookies through our cookie banner.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px] faustina-font">
            Contact us
          </h2>
          <p>
            If you have any questions about this policy or wish to request deletion of any
            information you provided, email{' '}
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
