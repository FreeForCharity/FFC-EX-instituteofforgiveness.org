import React from 'react'

interface Program {
  title: string
  description: string
  icon: React.ReactNode
}

const programs: Program[] = [
  {
    title: 'Barbering & Cosmetology Trade Path',
    description:
      'Hands-on training that mirrors Virginia DOC&rsquo;s most successful trade program — preparing students for state licensing exams and a path to self-employment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 20l8-16 8 16M9 14h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Mentoring with Lived Experience',
    description:
      'Pairing youth and returning citizens with mentors who have walked the path — turning hard-earned wisdom into a deterrent against entering the legal system.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 13a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'PRE-Entry Youth Services',
    description:
      'Trauma-informed support for young people before crisis becomes contact with the juvenile system — building stability, identity, and opportunity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M3 12l9-9 9 9M5 10v10h14V10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Re-Entry & Self-Resolution Support',
    description:
      'Toiletries, interview clothing, transportation, and a self-resolution fund that increases housing stability for individuals with background-check challenges.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 7h16v13H4zM8 7V4h8v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Entrepreneurship & Startup Funding',
    description:
      'Business startup assistance for individuals pursuing their own enterprise — financial literacy, mentorship, and seed support for licensed trades.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 2v6m0 8v6M5 12H2m20 0h-3M6.3 6.3l-2 -2m14.3 14.3l2 2M6.3 17.7l-2 2m14.3 -14.3l2-2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Holistic Care Re-Entry Center',
    description:
      'Long-term vision: a residential facility that wraps returning citizens in re-entry services, community, and dignity from day one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7H10v7H5a1 1 0 01-1-1z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const Programs: React.FC = () => {
  return (
    <section id="programs" className="w-full bg-[#3D1E4D] py-[90px] lg:py-[120px] text-white">
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-[24px]">
          <div className="max-w-[680px]">
            <p className="text-[13px] uppercase tracking-[0.28em] text-[#F5C76A] mb-[14px] aria-font">
              What We Do
            </p>
            <h2 className="text-[34px] md:text-[44px] font-[500] leading-[115%] faustina-font">
              Programs that turn second chances into long-term change.
            </h2>
          </div>
          <p className="max-w-[380px] text-[16px] leading-[160%] text-white/75 lato-font">
            Every dollar funds training, basic-need support, and business startup assistance for
            people with current or previous justice involvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group relative overflow-hidden rounded-[20px] bg-white/[0.06] border border-white/12 p-[28px] transition hover:bg-white/[0.10] hover:border-[#F5C76A]/50"
            >
              <div className="mb-[18px] inline-flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F5C76A] text-[#3D1E4D]">
                {program.icon}
              </div>
              <h3 className="text-[22px] font-[500] leading-[125%] mb-[10px] faustina-font">
                {program.title}
              </h3>
              <p
                className="text-[15px] leading-[165%] text-white/75 lato-font"
                dangerouslySetInnerHTML={{ __html: program.description }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
