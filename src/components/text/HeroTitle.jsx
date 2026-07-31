import PropTypes from 'prop-types'

export default function HeroTitle({ lead, emphasis }) {
  return (
    <h1 className="bg-gradient-to-r from-heading from-0% to-white to-[50%] bg-clip-text font-sora font-semibold text-transparent">
      <span className="text-fs-subheading">{lead}</span>
      <span className="text-fs-heading">{emphasis}</span>
    </h1>
  )
}

HeroTitle.propTypes = {
  lead: PropTypes.node.isRequired,
  emphasis: PropTypes.node.isRequired,
}
