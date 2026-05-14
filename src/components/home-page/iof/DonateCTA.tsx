import React from 'react'

const DonateCTA: React.FC = () => {
  return (
    <section
      id="donate"
      className="relative w-full overflow-hidden py-[90px] lg:py-[120px] text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A3B7E] via-[#5B2A6B] to-[#3D1E4D]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, #F5C76A 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-[980px] text-center">
        <p
          className="text-[13px] uppercase tracking-[0.28em] text-[#F5C76A] mb-[18px]"
          id="aria-font"
        >
          Stand for Forgiveness
        </p>
        <h2
          className="text-[36px] md:text-[48px] font-[500] leading-[115%] mb-[24px]"
          id="faustina-font"
        >
          As we tackle the injustice system, our clients&apos; needs grow with us.
        </h2>
        <p
          className="mx-auto max-w-[720px] text-[18px] leading-[165%] text-white/85 mb-[40px]"
          id="lato-font"
        >
          Please consider a tax-deductible gift today. If you cannot give monetarily, we welcome you
          as a volunteer or mentor — both are vital to the work.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[14px]">
          <a
            href="https://donorbox.org/institute-of-forgiveness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[58px] items-center justify-center rounded-full bg-[#F5C76A] px-[40px] text-[18px] font-[600] text-[#3D1E4D] transition hover:bg-[#FFD888]"
            id="lato-font"
          >
            Donate via Donorbox
          </a>
          <a
            href="mailto:info@instituteofforgiveness.org?subject=Volunteer%20%2F%20Mentor%20Inquiry"
            className="inline-flex h-[58px] items-center justify-center rounded-full border-2 border-white/70 bg-transparent px-[36px] text-[17px] font-[500] text-white transition hover:bg-white/10"
            id="lato-font"
          >
            Volunteer or Mentor
          </a>
        </div>

        <p
          className="mx-auto mt-[36px] max-w-[760px] text-[13px] leading-[160%] text-white/60"
          id="lato-font"
        >
          The Institute of Forgiveness is a subsidiary of Nolef Turns Inc., a 501(c)(3) charitable
          organization, EIN 47-5341386. All donations are deemed tax-deductible absent any
          limitations on deductibility applicable to a particular taxpayer.
        </p>
      </div>
    </section>
  )
}

export default DonateCTA
