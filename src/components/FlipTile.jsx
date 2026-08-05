import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function FlipTile({ style }) {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setFlipped((f) => !f), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute" style={{ ...style, perspective: '62.5rem' }}>
      <div
        className="relative h-full w-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
        }}
      >
        {/* Front face — image goes here later */}
        <div
          className="absolute inset-0 bg-subheading-green"
          style={{ backfaceVisibility: 'hidden' }}
        />
        {/* Back face — second image goes here later */}
        <div
          className="absolute inset-0 bg-subheading-orange"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
        />
      </div>
    </div>
  )
}

FlipTile.propTypes = {
  style: PropTypes.object.isRequired,
}
