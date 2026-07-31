import PropTypes from 'prop-types'

export default function GlassPanelCard({ title, description, icons }) {
  return (
    <div className="relative flex-1 overflow-hidden rounded-[0.625rem] bg-[#050505] p-10">
      {/* Fill layer only (not the whole card) carries the 60% opacity from Figma */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'linear-gradient(90deg, #000000 17%, #00B8C9 60%, #050E0B 85%, #00B8C9 100%)',
        }}
      />
      {/* Darkening overlay on top of the gradient — sells the glass/glass-frost look */}
      <div className="pointer-events-none absolute inset-0 bg-black/70" />
      <div className="relative">
        <h3 className="text-fs-body-title font-roboto font-semibold text-heading">
          {title}
        </h3>
        <p className="mt-1 text-fs-body-small font-roboto font-normal text-body-grey">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-8">
          {icons.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-[3.625rem] w-[3.625rem] cursor-pointer rounded-lg object-contain transition-transform duration-200 hover:scale-125"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

GlassPanelCard.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
}
