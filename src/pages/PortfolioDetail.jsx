import { useState } from 'react'
import PropTypes from 'prop-types'
import ProjectPlaceholderCard from '../components/ProjectPlaceholderCard'
import Modal from '../components/Modal'

export default function PortfolioDetail({ section }) {
  const { heading, description, stats, projectCount } = section.detail
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="flex h-full w-full flex-col gap-5 overflow-hidden rounded-[20px] bg-surface-dark/90 p-6 backdrop-blur-[20px]">

      <div className="shrink-0 rounded-2xl border border-white/5 p-6">
        <h2 className="text-2xl font-semibold text-brand-cyan">{heading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-muted">{description}</p>

        <div className="mt-6 flex divide-x divide-white/10">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex-1 px-6 first:pl-0">
              <p className="text-3xl font-bold text-brand-orange">{value}</p>
              <p className="mt-1 text-sm text-neutral-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-4">
        {Array.from({ length: projectCount }, (_, i) => (
          <ProjectPlaceholderCard key={i} index={i + 1} onSelect={() => setSelectedProject(i + 1)} />
        ))}
      </div>

      <Modal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={`Project ${selectedProject}`}
      >
        <p className="text-sm leading-relaxed text-neutral-muted">
          Sample content for Project {selectedProject}. Case study details coming soon.
        </p>
      </Modal>
    </div>
  )
}

PortfolioDetail.propTypes = {
  section: PropTypes.shape({
    detail: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      projectCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}
