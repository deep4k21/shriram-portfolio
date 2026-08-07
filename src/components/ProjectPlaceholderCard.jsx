import PropTypes from 'prop-types'

export default function ProjectPlaceholderCard({ index, onSelect, style }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={style}
      className="flex h-full w-full items-center justify-center rounded-[0.625rem] border border-[#3C3C3C] bg-black transition-colors hover:bg-section"
    >
      <span className="font-roboto text-fs-body-small font-medium text-body-grey">
        Project {index}
      </span>
    </button>
  )
}

ProjectPlaceholderCard.propTypes = {
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  style: PropTypes.object,
}
