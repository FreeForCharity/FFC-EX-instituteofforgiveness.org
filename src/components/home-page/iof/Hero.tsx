import React from 'react'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-[120px] pb-[100px] lg:pt-[160px] lg:pb-[140px]"
    >
      {/* Layered backdrop: deep plum to warm gold */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3D1E4D] via-[#5B2A6B] to-[#7A3B7E]" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 25%, #F5C76A 0%, transparent 45%), radial-gradient(circle at 85% 75%, #E08540 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 bg-[#F5E9D2] opacity-95"
        style={{
          clipPath: 'polygon(0% 100%, 100% 88%, 100% 100%, 0% 100%)',
        }}
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1180px] flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
        <div className="w-full lg:w-[58%] text-white">
          <p
            className="text-[14px] uppercase tracking-[0.28em] text-[#F5C76A] mb-[18px]"
            id="aria-font"
          >
            Institute of Forgiveness
          </p>
          <h1
            className="text-[40px] md:text-[52px] lg:text-[60px] font-[500] leading-[110%] mb-[24px]"
            id="faustina-font"
          >
            The key to ending mass incarceration is{' '}
            <span className="text-[#F5C76A] italic">forgiveness</span>.
          </h1>
          <p
            className="text-[18px] md:text-[20px] leading-[150%] text-white/85 mb-[36px] max-w-[620px]"
            id="lato-font"
          >
            A mentoring institute for those with previous justice involvement. We work toward
            juvenile and criminal justice reform, rebuilding the core foundations of family and
            community in Richmond, Virginia and beyond.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Link
              href="#donate"
              className="inline-flex h-[54px] items-center justify-center rounded-full bg-[#F5C76A] px-[34px] text-[17px] font-[600] text-[#3D1E4D] transition hover:bg-[#FFD888]"
              id="lato-font"
            >
              Donate Now
            </Link>
            <Link
              href="#programs"
              className="inline-flex h-[54px] items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-[34px] text-[17px] font-[500] text-white transition hover:bg-white/10"
              id="lato-font"
            >
              Our Programs
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-[54px] items-center justify-center rounded-full bg-white/10 px-[34px] text-[17px] font-[500] text-white backdrop-blur transition hover:bg-white/20"
              id="lato-font"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right column: pillar quote card */}
        <div className="w-full lg:w-[42%]">
          <div className="relative rounded-[28px] bg-white/[0.14] backdrop-blur-md border border-white/30 p-[32px] lg:p-[40px] shadow-2xl">
            <div
              aria-hidden="true"
              className="absolute -top-[18px] left-[28px] text-[88px] leading-none text-[#F5C76A] font-serif"
            >
              &ldquo;
            </div>
            <blockquote
              className="text-white text-[20px] md:text-[22px] leading-[145%] font-[400] pt-[16px]"
              id="faustina-font"
            >
              Partnering youth with those with learned and lived experience opens them up to
              opportunities of success — and deters young people from entering the legal system.
            </blockquote>
            <div className="mt-[24px] flex items-center gap-[14px]">
              <div
                className="h-[44px] w-[44px] rounded-full bg-[#F5C76A] flex items-center justify-center text-[#3D1E4D] font-[700] text-[18px]"
                id="cinzel"
              >
                SW
              </div>
              <div>
                <p className="text-white text-[16px] font-[600]" id="lato-font">
                  Sheba Williams
                </p>
                <p className="text-white/70 text-[14px]" id="lato-font">
                  Founder, Institute of Forgiveness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
