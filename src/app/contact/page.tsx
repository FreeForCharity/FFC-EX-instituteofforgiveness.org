import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact the Institute of Forgiveness — phone, email, and our Richmond, Virginia address.',
  alternates: { canonical: '/contact/' },
}

const ContactPage: React.FC = () => {
  return (
    <main className="bg-[#FBF6EC]">
      <section className="bg-[#3D1E4D] py-[120px] text-white">
        <div className="mx-auto w-[92%] max-w-[1080px]">
          <p
            className="text-[13px] uppercase tracking-[0.28em] text-[#F5C76A] mb-[14px]"
            id="aria-font"
          >
            Get in touch
          </p>
          <h1
            className="text-[42px] md:text-[56px] font-[500] leading-[115%] max-w-[820px]"
            id="faustina-font"
          >
            Reach the Institute of Forgiveness.
          </h1>
        </div>
      </section>

      <section className="py-[80px] lg:py-[110px]">
        <div className="mx-auto w-[92%] max-w-[1080px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <a
            href="tel:8049186195"
            className="group rounded-[20px] bg-white border border-[#3D1E4D]/10 p-[32px] transition hover:border-[#F5C76A]"
          >
            <p
              className="text-[12px] uppercase tracking-[0.24em] text-[#7A3B7E] mb-[12px]"
              id="aria-font"
            >
              Phone
            </p>
            <p
              className="text-[26px] font-[600] text-[#3D1E4D] group-hover:text-[#7A3B7E]"
              id="faustina-font"
            >
              (804) 918-6195
            </p>
          </a>

          <a
            href="mailto:info@instituteofforgiveness.org"
            className="group rounded-[20px] bg-white border border-[#3D1E4D]/10 p-[32px] transition hover:border-[#F5C76A]"
          >
            <p
              className="text-[12px] uppercase tracking-[0.24em] text-[#7A3B7E] mb-[12px]"
              id="aria-font"
            >
              Email
            </p>
            <p
              className="text-[20px] font-[500] text-[#3D1E4D] group-hover:text-[#7A3B7E] break-all"
              id="lato-font"
            >
              info@instituteofforgiveness.org
            </p>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=2317+Westwood+Ave+Suite+115-C+Richmond+VA+23230"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 rounded-[20px] bg-white border border-[#3D1E4D]/10 p-[32px] transition hover:border-[#F5C76A]"
          >
            <p
              className="text-[12px] uppercase tracking-[0.24em] text-[#7A3B7E] mb-[12px]"
              id="aria-font"
            >
              Mailing & Visiting Address
            </p>
            <p
              className="text-[20px] font-[500] text-[#3D1E4D] group-hover:text-[#7A3B7E] leading-[150%]"
              id="lato-font"
            >
              Institute of Forgiveness
              <br />
              a subsidiary of Nolef Turns Inc.
              <br />
              2317 Westwood Ave. Ste. 115-C
              <br />
              Richmond, VA 23230-4019
            </p>
          </a>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
