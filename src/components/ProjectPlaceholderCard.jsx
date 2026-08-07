import PropTypes from 'prop-types'
import { motion } from 'motion/react'

export default function ProjectPlaceholderCard({ index, layoutId, onSelect }) {
  return (
    <motion.button
      type="button"
      layoutId={layoutId}
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="flex h-full w-full items-center justify-center rounded-[0.625rem] border border-[#3C3C3C] bg-black transition-colors hover:bg-section"
    >
      <span className="font-roboto text-fs-body-small font-medium text-body-grey">
        Project {index}
      </span>
    </motion.button>
  )
}

ProjectPlaceholderCard.propTypes = {
  index: PropTypes.number.isRequired,
  layoutId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}
