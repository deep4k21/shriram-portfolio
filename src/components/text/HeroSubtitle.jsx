import PropTypes from 'prop-types'

export default function HeroSubtitle({ orange, green }) {
  return (
    <p className="text-fs-body-title font-sora font-semibold">
      <span className="text-subheading-orange">{orange}</span>
      <span className="text-subheading-green">{green}</span>
    </p>
  )
}

HeroSubtitle.propTypes = {
  orange: PropTypes.node.isRequired,
  green: PropTypes.node.isRequired,
}
