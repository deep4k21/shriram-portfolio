import { useState } from 'react'
import PropTypes from 'prop-types'
import PortfolioCategoryCard from '../components/PortfolioCategoryCard'
import { portfolioCategories } from '../data/portfolioCategories'

export default function Portfolio({ onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null)
  const rows = [portfolioCategories.slice(0, 2), portfolioCategories.slice(2, 4)]

  function cardState(id, row) {
    if (!hoveredId) return 'default'
    const hoveredInRow = row.some((c) => c.id === hoveredId)
    if (!hoveredInRow) return 'default'
    return id === hoveredId ? 'expanded' : 'cramped'
  }

  return (
    <div className="flex h-full min-h-full flex-col gap-[2rem]">
      <div className="h-[13rem] rounded-[0.625rem] border border-[#3C3C3C] bg-[#22262E]/80 p-[2rem] backdrop-blur-xl">
        <p className="font-roboto text-fs-body-title font-medium text-body-white">
          Every project started with <span className="text-heading">curiosity.</span> Every
          solution was shaped by <span className="text-heading">design.</span>
        </p>
        <p className="mt-[1.125rem] font-roboto text-fs-body-small font-normal text-body-grey">
          From enterprise platforms and global rebrands to marketing campaigns and speculative
          explorations, this collection represents how I think, create, and evolve through design.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-[2rem]">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-1 gap-[2rem]">
            {row.map((category) => (
              <PortfolioCategoryCard
                key={category.id}
                category={category}
                state={cardState(category.id, row)}
                onHoverStart={() => setHoveredId(category.id)}
                onHoverEnd={() => setHoveredId(null)}
                onContinue={() => onNavigate(category.id)}
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
