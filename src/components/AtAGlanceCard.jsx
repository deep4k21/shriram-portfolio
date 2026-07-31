import PropTypes from 'prop-types'
import { Emphasis } from './text/BodySubtitle'

export default function AtAGlanceCard({ eyebrow, lead, items }) {
  return (
    <div
      className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#050505] p-8"
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Faint color glow — same gradient stops as the design, dimmed via opacity
          so it reads as a subtle wash rather than a bold saturated stripe */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            'linear-gradient(90deg, #050E0B 2%, #FF9A5C 24%, #000000 44%, #030806 68%, #47C89A 100%)',
        }}
      />
      {/* Soft sheen to sell the glass look without anything behind the card to blur */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)',
        }}
      />
      <div className="relative">
        <p className="text-fs-body-title font-roboto font-semibold text-heading">
          {eyebrow}
        </p>
        <p className="mt-2 text-fs-body-subtitle font-roboto font-normal text-body-grey">
          {lead}
        </p>

        {/* Infinite upward marquee — doubled list for a seamless loop.
            Row height/line-height are equal so the keyframe step percentages
            (8.3333% per row) always line up, regardless of the exact value —
            it's set a bit taller than the text's own font size to leave
            headroom for ascenders/descenders that would otherwise get
            clipped by this viewport's overflow-hidden. */}
        <div className="mt-1 h-[3.75rem] overflow-hidden">
          <div className="marquee-up flex flex-col">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex h-[3.75rem] shrink-0 items-center gap-2 text-fs-subheading font-roboto font-light text-body-grey"
              >
                <span>{item.grey}</span>
                <Emphasis>{item.white}</Emphasis>
              </div>
            ))}
            {items.map((item, i) => (
              <div
                key={`dup-${i}`}
                className="flex h-[3.75rem] shrink-0 items-center gap-2 text-fs-subheading font-roboto font-light text-body-grey"
              >
                <span>{item.grey}</span>
                <Emphasis>{item.white}</Emphasis>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

AtAGlanceCard.propTypes = {
  eyebrow: PropTypes.node.isRequired,
  lead: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      grey: PropTypes.node.isRequired,
      white: PropTypes.node.isRequired,
    })
  ).isRequired,
}
