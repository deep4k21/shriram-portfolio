import { useState } from 'react'
import { motion } from 'motion/react'
import { careerCompanies } from '../data/careerCompanies'

export default function CareerJourney() {
  const [activeId, setActiveId] = useState(careerCompanies[0].id)
  const [hovered, setHovered] = useState(false)

  const active = careerCompanies.find((c) => c.id === activeId)
  const prevRoles = active.progression ? active.progression.slice(0, -1) : []

  function handleTabClick(id) {
    setActiveId(id)
    setHovered(false)
  }

  return (
    <div className="flex h-full min-h-full flex-col gap-[1.5rem]">
      {/* Academic & Professional Journey */}
      <div className="rounded-[0.625rem] border border-[#3C3C3C] bg-section/80 p-[1.75rem] backdrop-blur-xl">
        <p className="font-roboto text-fs-body-title font-medium text-heading">
          Academic &amp; Professional Journey
        </p>
        <p className="mt-[0.75rem] font-roboto text-fs-body-subtitle font-bold text-body-white">
          B.Sc., Visual Communication
        </p>
        <p className="mt-[0.75rem] font-roboto text-fs-body-subtitle font-normal text-body-grey">
          SRM Institute of Science and Technology, Chennai.
        </p>
      </div>

      {/* Company tabs — clicking switches which company's role/points show below */}
      <div className="flex gap-[1.25rem]">
        {careerCompanies.map((company) => (
          <motion.button
            key={company.id}
            type="button"
            onClick={() => handleTabClick(company.id)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`flex items-center justify-center rounded-[0.625rem] border p-[1.25rem] transition-opacity duration-150 ${
              activeId === company.id
                ? 'border-transparent bg-black opacity-100'
                : 'border-[#3C3C3C] opacity-50 hover:opacity-100'
            }`}
          >
            <img src={company.logo} alt={company.name} className="h-[1.9375rem] w-auto object-contain" />
          </motion.button>
        ))}
      </div>

      {/* Role + description for the active company */}
      <div
        className="no-scrollbar min-h-[32rem] flex-1 overflow-y-auto rounded-[0.625rem] bg-black/60 p-[1.75rem] backdrop-blur-[0.625rem]"
        onMouseEnter={() => active.progression && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center overflow-hidden">
          {/* Previous roles — slide/fade in on hover, staggered per index */}
          {prevRoles.map((title, i) => (
            <div
              key={title}
              className="flex items-center overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxWidth: hovered ? '18.75rem' : '0rem',
                opacity: hovered ? 1 : 0,
                transitionDelay: hovered ? `${i * 100}ms` : '0ms',
              }}
            >
              <span className="whitespace-nowrap font-sora text-fs-body-subtitle font-semibold text-subheading-green">
                {title}
              </span>
              <span className="mx-[0.75rem] whitespace-nowrap text-body-grey/60">→</span>
            </div>
          ))}

          <p className="whitespace-nowrap font-sora text-fs-body-subtitle font-semibold text-subheading-orange">
            {active.role}
          </p>
        </div>

        <p className="mt-[0.5rem] font-roboto text-fs-body-small font-bold text-body-grey">
          ({active.period})
        </p>

        <ul className="mt-[2.5rem] list-disc space-y-[1.875rem] pl-[2.0625rem] font-roboto text-fs-body-small font-normal text-body-grey">
          {active.points.map((spans, i) => (
            <li key={i}>
              {spans.map((span, j) =>
                span.strong ? (
                  <span key={j} className="font-medium text-body-white">
                    {span.text}
                  </span>
                ) : (
                  <span key={j}>{span.text}</span>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
