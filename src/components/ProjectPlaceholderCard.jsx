import PropTypes from 'prop-types'

export default function ProjectPlaceholderCard({ index, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="flex h-full w-full items-center justify-center rounded-2xl border border-white/5 bg-surface-darker transition-colors hover:bg-surface-mid/20"
    >
      <span className="text-sm font-medium text-neutral-muted">Project {index}</span>
    </button>
  )
}

ProjectPlaceholderCard.propTypes = {
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}
