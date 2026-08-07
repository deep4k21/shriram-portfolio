import { useState } from 'react'
import PropTypes from 'prop-types'
import ProjectPlaceholderCard from '../components/ProjectPlaceholderCard'
import ProjectDetailModal from '../components/ProjectDetailModal'
import { mockProject } from '../data/mockProject'

export default function PortfolioDetail({ category }) {
  const { heading, descriptionSpans, stats, projectCount, bgClassName, statFontClassName } =
    category.detail
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="flex h-full min-h-full flex-col gap-[2rem]">
      <div
        className={`shrink-0 rounded-[0.625rem] border border-[#3C3C3C] ${bgClassName} p-[2rem] backdrop-blur-xl`}
      >
        <p className="font-roboto text-fs-body-title font-medium text-heading">{heading}</p>
        {/* Fixed 2-line box regardless of actual wrap count, so switching
            between a 1-line and 2-line description never grows/shrinks the
            panel (and everything stacked below it). */}
        <p className="mt-[1.125rem] h-[3.5rem] overflow-hidden font-roboto text-fs-body-small font-normal leading-[1.75rem] text-body-grey">
          {descriptionSpans.map((span, i) =>
            span.strong ? (
              <span key={i} className="font-semibold text-body-grey">
                {span.text}
              </span>
            ) : (
              <span key={i}>{span.text}</span>
            )
          )}
        </p>

        <div className="mt-[1.75rem] flex items-center gap-[2.5rem]">
          {stats.map(({ value, valueSuffix, label }, i) => (
            <div key={label} className="flex items-center gap-[2.5rem]">
              {i > 0 && <div className="h-[5.125rem] w-px bg-[#3C3C3C]" />}
              <div>
                <p className={`${statFontClassName} text-fs-subheading font-semibold text-subheading-orange`}>
                  {value}
                  {valueSuffix && <span className="text-fs-body-title">{valueSuffix}</span>}
                </p>
                <p className="mt-[0.5rem] font-roboto text-fs-body-small font-normal text-body-grey">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2x4 grid, but only the first 3 slots of row 1 and first 2 of row 2
          hold cards — an L-shape, matching the Figma layout — rather than
          letting the grid auto-fill every cell. */}
      <div className="grid flex-1 grid-cols-4 grid-rows-2 gap-[1.5rem]">
        {Array.from({ length: projectCount }, (_, i) => {
          const row = i < 3 ? 1 : 2
          const col = i < 3 ? i + 1 : i - 3 + 1
          return (
            <ProjectPlaceholderCard
              key={i}
              index={i + 1}
              onSelect={() => setSelectedProject(i + 1)}
              style={{ gridRow: row, gridColumn: col }}
            />
          )
        })}
      </div>

      <ProjectDetailModal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        content={mockProject}
      />
    </div>
  )
}

PortfolioDetail.propTypes = {
  category: PropTypes.shape({
    detail: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      bgClassName: PropTypes.string.isRequired,
      statFontClassName: PropTypes.string.isRequired,
      descriptionSpans: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          strong: PropTypes.bool,
        })
      ).isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          valueSuffix: PropTypes.string,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      projectCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}
