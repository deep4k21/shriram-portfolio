import { useState } from 'react'
import PropTypes from 'prop-types'
import PortfolioCategoryCard from '../components/PortfolioCategoryCard'

const categories = [
  {
    id: 'portfolio-uiux',
    title: 'UI/UX Design',
    tagline: 'Enterprise • SaaS • Product',
    description:
      'Designing intuitive digital experiences that transform complex workflows into scalable products and seamless user journeys.',
    summary: 'Turning complexity into clarity.',
    collectionLabel: 'Curated Collection',
    collectionIntro: '',
    collectionItems: ['Enterprise Dashboards', 'Websites', 'Design Systems', 'Product Experiences'],
    ctaLabel: 'Continue to UI/UX Design',
    cramTitle: 'UI/UX Design',
    cramCtaLabel: 'View more',
  },
  {
    id: 'portfolio-brand',
    title: 'Brand Identity',
    tagline: 'Identity • Strategy • Guidelines',
    description:
      'Building memorable brands through thoughtful identities and scalable visual systems.',
    summary: 'Building brands that people remember.',
    collectionLabel: 'Curated Collection',
    collectionIntro: 'Brand exploration on',
    collectionItems: ['Freshstart', 'Forge', 'HealthDesk', 'Project Agresor'],
    ctaLabel: 'Continue to Brand Identity',
    cramTitle: 'Brand Identity',
    cramCtaLabel: 'View more',
  },
  {
    id: 'portfolio-marketing',
    title: 'Marketing Campaigns',
    tagline: 'Creative • Growth • Performance',
    description:
      'Campaigns that combine storytelling, strategy, events, illustrations and measurable business impact.',
    summary: 'Stories designed to perform.',
    collectionLabel: 'Curated Collection',
    collectionIntro: '',
    collectionItems: ['Product Launches', 'Event Branding', 'Social Campaigns', 'Landing Pages'],
    ctaLabel: 'Continue to Campaigns',
    cramTitle: 'Marketing Campaigns',
    cramCtaLabel: 'View more',
  },
  {
    id: 'portfolio-illustrations',
    title: 'What If — Brand Reimagined',
    tagline: 'Conceptual • Explorations',
    description:
      'Speculative redesigns exploring how iconic brands could evolve through new visual systems.',
    summary: 'Reimagining the familiar.',
    collectionLabel: 'Curated Collection',
    collectionIntro: 'Speculative case studies on',
    collectionItems: ['Apple X Google', 'Nike X Adidas'],
    ctaLabel: 'Continue to What If',
    cramTitle: 'What If',
    cramCtaLabel: 'View more',
  },
]

export default function Portfolio({ onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null)
  const rows = [categories.slice(0, 2), categories.slice(2, 4)]

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
