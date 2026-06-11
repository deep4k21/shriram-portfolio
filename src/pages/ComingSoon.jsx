import PropTypes from 'prop-types'

export default function ComingSoon({ label }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[20px] bg-surface-dark/90 backdrop-blur-[20px]">
      <p className="text-3xl font-light text-neutral-light">{label}</p>
      <p className="text-sm text-neutral-muted">Coming soon</p>
    </div>
  )
}

ComingSoon.propTypes = { label: PropTypes.string.isRequired }
