import PropTypes from 'prop-types'

export default function BodySubtitle({ children }) {
  return (
    <p className="text-fs-body-subtitle font-roboto font-light text-body-grey">
      {children}
    </p>
  )
}

BodySubtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export function Emphasis({ children }) {
  return <span className="font-medium text-body-white">{children}</span>
}

Emphasis.propTypes = {
  children: PropTypes.node.isRequired,
}
