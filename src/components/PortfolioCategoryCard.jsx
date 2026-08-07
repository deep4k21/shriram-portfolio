import PropTypes from 'prop-types'
import { motion } from 'motion/react'

const mountVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
}

export default function PortfolioCategoryCard({ category, state, onHoverStart, onHoverEnd, onContinue }) {
  const {
    title,
    tagline,
    description,
    summary,
    collectionLabel,
    collectionIntro,
    collectionItems,
    ctaLabel,
    cramTitle,
    cramCtaLabel,
  } = category

  const isExpanded = state === 'expanded'
  const isCramped = state === 'cramped'
  const collectionLine = [collectionIntro, ...collectionItems].filter(Boolean).join(' • ')

  return (
    <motion.button
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onContinue}
      variants={mountVariants}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={`group flex h-full min-h-[18rem] min-w-0 flex-col overflow-hidden rounded-[0.625rem] border border-[#3C3C3C] p-[2rem] text-left backdrop-blur-[0.625rem] transition-[flex-grow,background-color] duration-500 ease-in-out ${
        isExpanded ? 'bg-black' : 'bg-[#15161A]/80'
      }`}
      style={{ flexGrow: isExpanded ? 3 : 1, flexBasis: 0 }}
    >
      <p className="shrink-0 whitespace-nowrap font-sora text-fs-body-title font-semibold text-subheading-orange">
        {isCramped ? cramTitle : title}
      </p>

      <p className="mt-[0.75rem] shrink-0 font-roboto text-fs-body-small font-normal text-body-white">
        {tagline}
      </p>

      <div className="flex-1">
        {/* Cramped summary — collapses away when not cramped */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isCramped ? 'mt-[0.5rem] grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <p
            className={`overflow-hidden font-roboto text-fs-body-small leading-relaxed text-body-grey transition-opacity duration-300 ${
              isCramped ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
          >
            {summary}
          </p>
        </div>

        {/* Default-only description — collapses away once expanded or cramped */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            state === 'default' ? 'mt-[0.5rem] grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <p
            className={`overflow-hidden font-roboto text-fs-body-small leading-relaxed text-body-grey transition-opacity duration-300 ${
              state === 'default' ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Curated collection — only in expanded state */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`font-roboto text-fs-body-small font-semibold text-subheading-green transition-opacity duration-300 ${
              isExpanded ? 'opacity-100 delay-200' : 'opacity-0'
            }`}
          >
            {collectionLabel}
          </p>
          <p
            className={`mt-[0.25rem] font-roboto text-fs-body-small text-body-grey transition-opacity duration-300 ${
              isExpanded ? 'opacity-100 delay-200' : 'opacity-0'
            }`}
          >
            {collectionLine}
          </p>
        </div>
      </div>

      <p className="mt-[0.75rem] shrink-0 whitespace-nowrap font-sora text-fs-body-small font-semibold text-body-white">
        {isCramped ? cramCtaLabel : ctaLabel} <span aria-hidden="true">→</span>
      </p>
    </motion.button>
  )
}

PortfolioCategoryCard.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    collectionLabel: PropTypes.string.isRequired,
    collectionIntro: PropTypes.string,
    collectionItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    ctaLabel: PropTypes.string.isRequired,
    cramTitle: PropTypes.string.isRequired,
    cramCtaLabel: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.oneOf(['default', 'expanded', 'cramped']).isRequired,
  onHoverStart: PropTypes.func.isRequired,
  onHoverEnd: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
}
