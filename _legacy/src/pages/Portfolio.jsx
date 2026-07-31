import { useState } from 'react'
import PropTypes from 'prop-types'
import PortfolioSectionCard from '../components/PortfolioSectionCard'
import { portfolioIntro, portfolioSections } from '../data/portfolio'

export default function Portfolio({ onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null)

  const rows = [portfolioSections.slice(0, 2), portfolioSections.slice(2, 4)]

  function cardState(id, row) {
    if (!hoveredId) return 'default'
    const hoveredInRow = row.some((s) => s.id === hoveredId)
    if (!hoveredInRow) return 'default'
    return id === hoveredId ? 'expanded' : 'cramped'
  }

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto rounded-[20px] bg-surface-dark/90 p-6 backdrop-blur-[20px]">

      <div className="shrink-0 rounded-2xl border border-white/5 p-5">
        <h2 className="text-xl font-semibold text-brand-cyan">
          {portfolioIntro.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-muted">{portfolioIntro.body}</p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-4">
        {rows.map((row, i) => (
          <div key={i} className="flex min-h-0 flex-1 gap-4">
            {row.map((section) => (
              <PortfolioSectionCard
                key={section.id}
                section={section}
                state={cardState(section.id, row)}
                onHoverStart={() => setHoveredId(section.id)}
                onHoverEnd={() => setHoveredId(null)}
                onSelect={() => onNavigate(section.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}
