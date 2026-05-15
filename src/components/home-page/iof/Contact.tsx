import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-white py-[90px] lg:py-[120px]">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-start">
          <div className="lg:col-span-5">
            <p
              className="text-[13px] uppercase tracking-[0.28em] text-[#7A3B7E] mb-[14px]"
              id="aria-font"
            >
              Visit & Connect
            </p>
            <h2
              className="text-[34px] md:text-[42px] font-[500] text-[#3D1E4D] leading-[115%] mb-[20px]"
              id="faustina-font"
            >
              Reach the Institute.
            </h2>
            <p
              className="text-[17px] leading-[170%] text-[#2A1430]/80 max-w-[440px]"
              id="lato-font"
            >
              Whether you need our services, want to volunteer, or are interested in partnership —
              we&apos;re here in Richmond, Virginia and ready to talk.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[18px]" id="lato-font">
            <a
              href="tel:8049186195"
              className="group flex flex-col rounded-[18px] border border-[#3D1E4D]/20 bg-[#FBF6EC] p-[24px] transition hover:border-[#F5C76A] hover:bg-[#F5E9D2]"
            >
              <span
                className="text-[12px] uppercase tracking-[0.24em] text-[#7A3B7E] mb-[10px]"
                id="aria-font"
              >
                Phone
              </span>
              <span className="text-[22px] font-[600] text-[#3D1E4D] group-hover:text-[#7A3B7E]">
                (804) 918-6195
              </span>
            </a>

            <a
              href="mailto:info@instituteofforgiveness.org"
              className="group flex flex-col rounded-[18px] border border-[#3D1E4D]/20 bg-[#FBF6EC] p-[24px] transition hover:border-[#F5C76A] hover:bg-[#F5E9D2]"
            >
              <span
                className="text-[12px] uppercase tracking-[0.24em] text-[#7A3B7E] mb-[10px]"
                id="aria-font"
              >
                Email
              </span>
              <span className="text-[17px] font-[500] text-[#3D1E4D] group-hover:text-[#7A3B7E] break-all">
                info@instituteofforgiveness.org
              </span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=2317+Westwood+Ave+Suite+115-C+Richmond+VA+23230"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[18px] border border-[#3D1E4D]/20 bg-[#FBF6EC] p-[24px] transition hover:border-[#F5C76A] hover:bg-[#F5E9D2] sm:col-span-2"
            >
              <span
                className="text-[12px] uppercase tracking-[0.24em] text-[#7A3B7E] mb-[10px]"
                id="aria-font"
              >
                Address
              </span>
              <span className="text-[17px] font-[500] text-[#3D1E4D] group-hover:text-[#7A3B7E] leading-[145%]">
                Institute of Forgiveness
                <br />
                2317 Westwood Ave. Ste. 115-C
                <br />
                Richmond, VA 23230-4019
              </span>
              <span className="mt-[10px] text-[13px] text-[#2A1430]/65" id="aria-font">
                A subsidiary of Nolef Turns Inc.
              </span>
            </a>

            <div className="flex flex-col rounded-[18px] border border-[#3D1E4D]/20 bg-[#FBF6EC] p-[24px] sm:col-span-2">
              <span
                className="text-[12px] uppercase tracking-[0.24em] text-[#7A3B7E] mb-[14px]"
                id="aria-font"
              >
                Follow the work
              </span>
              <div className="flex flex-wrap gap-[10px]">
                {[
                  ['Facebook', 'https://www.facebook.com/instituteofforgiveness'],
                  ['Instagram', 'https://www.instagram.com/instituteofforgiveness'],
                  ['X / Twitter', 'https://twitter.com/ioforgiveness'],
                  ['LinkedIn', 'https://www.linkedin.com/company/instituteofforgiveness'],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-[#3D1E4D]/20 bg-white px-[16px] py-[8px] text-[14px] font-[500] text-[#3D1E4D] transition hover:bg-[#3D1E4D] hover:text-[#F5C76A]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
