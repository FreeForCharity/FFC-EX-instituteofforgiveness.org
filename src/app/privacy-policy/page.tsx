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
        <p className="text-[14px] text-[#2A1430]/60 mb-[28px]">Effective Date: 2026-08-30</p>

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
            We use Google Tag Manager and Google Analytics, with Google Consent Mode, to understand
            how visitors use the site in aggregate. Google&apos;s tags set no analytics or
            advertising cookies and read no measurement identifiers until you accept through the
            cookie consent banner, wherever in the world you are — until then only aggregate,
            cookieless measurement takes place. (Switzerland is included because Google&apos;s
            consent defaults cover it; the data of visitors in Switzerland is protected by
            Switzerland&apos;s Federal Act on Data Protection (FADP) rather than the GDPR.) There is
            no country in which analytics cookies are set before you choose. The same rule applies
            to every visitor, so nothing depends on where you are. You can decline or withdraw
            consent at any time via the cookie banner or the Cookie Preferences link in the footer —
            this site then deletes the tracking cookies it set and Google&apos;s tags return to the
            cookieless state.
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px] faustina-font">
            Your rights in the EU, UK, and EEA (GDPR)
          </h2>
          <p>
            If you visit from the European Union, the United Kingdom, or the wider European Economic
            Area, the EU GDPR or UK GDPR applies to our handling of your personal data. We process
            personal data only with your consent (the analytics cookies described above, and any
            marketing cookies you choose to enable through the cookie consent banner), on our
            legitimate interests (operating and securing this website), or to comply with a legal
            obligation. You have the right to access the personal data we hold about you; to have
            inaccurate data rectified; to have your data erased; to restrict or object to
            processing; to receive your data in a portable format; and to withdraw any consent you
            have given, at any time, without affecting the lawfulness of processing before
            withdrawal. To exercise any of these rights, contact us using the details below; we will
            respond within the time limits the GDPR sets. You also have the right to lodge a
            complaint with your national data protection supervisory authority (in the UK, the
            Information Commissioner&apos;s Office).
          </p>

          <h2 className="text-[24px] font-[500] text-[#3D1E4D] pt-[20px] faustina-font">
            Your California privacy rights (CCPA/CPRA)
          </h2>
          <p>
            If you are a California resident, the CCPA, as amended by the CPRA, gives you specific
            rights. We do not sell personal information, and we do not share it for cross-context
            behavioral advertising, as those terms are defined by California law — and have not done
            so in the preceding 12 months. You have the right to know what personal information we
            collect, use, and disclose, and to access it; to delete personal information we
            collected from you; to correct inaccurate personal information; to opt out of any sale
            or sharing (not applicable, since we do neither); to limit the use of sensitive personal
            information; and not to be discriminated against for exercising any of these rights.
            This site does not read or respond to the Global Privacy Control or Do Not Track browser
            signals — we do not sell or share personal information, so there is nothing for those
            signals to opt out of. Analytics cookies are never set before you accept, anywhere in
            the world; you can turn them off again at any time via the Cookie Preferences link in
            the footer, and we delete the cookies when you do. To exercise your rights, contact us
            using the details below; we will verify your request using information associated with
            your interactions with us, you may use an authorized agent, and we will respond within
            the timeframes California law requires.
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
