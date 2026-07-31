import PropTypes from 'prop-types'

export default function PortfolioSectionCard({ section, state, onHoverStart, onHoverEnd, onSelect }) {
  const {
    title,
    tags,
    description,
    summary,
    collectionLabel,
    collectionIntro,
    collectionItems,
    ctaLabel,
    cramTitle,
    cramCtaLabel,
  } = section
  const isExpanded = state === 'expanded'
  const isCramped = state === 'cramped'
  const collectionLine = [collectionIntro, ...collectionItems].filter(Boolean).join(' • ')

  return (
    <button
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onSelect}
      className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/5 p-5 text-left transition-[flex-grow,background-color] duration-500 ease-in-out ${
        isExpanded ? 'bg-black' : 'bg-surface-dark'
      }`}
      style={{ flexGrow: isExpanded ? 3 : 1, flexBasis: 0 }}
    >
      <h3 className="shrink-0 whitespace-nowrap text-xl font-semibold text-brand-orange">
        {isCramped ? cramTitle : title}
      </h3>

      <p className="mt-1.5 shrink-0 text-sm text-neutral-light">{tags.join(' • ')}</p>

      <div className="flex-1">
        {/* Cramped summary — collapses away when not cramped */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isCramped ? 'mt-2 grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <p className={`overflow-hidden text-sm leading-relaxed text-neutral-muted transition-opacity duration-300 ${isCramped ? 'opacity-100 delay-150' : 'opacity-0'}`}>
            {summary}
          </p>
        </div>

        {/* Default-only description — collapses away once expanded or cramped */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            state === 'default' ? 'mt-2 grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <p className={`overflow-hidden text-sm leading-relaxed text-neutral-muted transition-opacity duration-300 ${state === 'default' ? 'opacity-100 delay-150' : 'opacity-0'}`}>
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
          <p className={`text-sm font-semibold text-brand-teal transition-opacity duration-300 ${isExpanded ? 'opacity-100 delay-200' : 'opacity-0'}`}>
            {collectionLabel}
          </p>
          <p className={`mt-1 text-sm text-neutral-muted transition-opacity duration-300 ${isExpanded ? 'opacity-100 delay-200' : 'opacity-0'}`}>
            {collectionLine}
          </p>
        </div>
      </div>

      <p className="mt-3 shrink-0 whitespace-nowrap text-sm font-bold text-neutral-light">
        {isCramped ? cramCtaLabel : ctaLabel} <span aria-hidden="true">→</span>
      </p>
    </button>
  )
}

PortfolioSectionCard.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  onSelect: PropTypes.func.isRequired,
}
