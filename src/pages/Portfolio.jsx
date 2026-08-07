import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'motion/react'
import PortfolioCategoryCard from '../components/PortfolioCategoryCard'
import ProjectPlaceholderCard from '../components/ProjectPlaceholderCard'
import ProjectDetailModal from '../components/ProjectDetailModal'
import { mockProject } from '../data/mockProject'
import { portfolioCategories } from '../data/portfolioCategories'

const rowVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

const fadeVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 1 },
}

// Applied to everything in the grid EXCEPT the clicked card (which morphs
// separately via its own layoutId) — fades out fast so it doesn't linger
// and visually compete with the slower card-to-header morph.
const fastExitVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } },
}

const headerContentVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut', delay: 0.35 } },
}

// Used when switching directly between two detail categories (via sidebar
// submenu, no grid in between) — there's no card to morph from in that
// case, so the whole detail block gets a plain fade+rise instead, matching
// the rest of the app's page transitions.
const detailSwitchVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.15, ease: 'easeIn' } },
}

function DetailContent({ category, onSelectProject }) {
  return (
    <>
      <motion.div
        layout="position"
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`shrink-0 rounded-[0.625rem] border border-[#3C3C3C] ${category.detail.bgClassName} p-[2rem] backdrop-blur-xl`}
      >
        <motion.div variants={headerContentVariants} initial="hidden" animate="show">
          <p className="font-roboto text-fs-body-title font-medium text-heading">
            {category.detail.heading}
          </p>
          {/* Fixed 2-line box regardless of actual wrap count, so switching
              between a 1-line and 2-line description never grows/shrinks the
              panel (and everything stacked below it). */}
          <p className="mt-[1.125rem] h-[3.5rem] overflow-hidden font-roboto text-fs-body-small font-normal leading-[1.75rem] text-body-grey">
            {category.detail.descriptionSpans.map((span, i) =>
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
            {category.detail.stats.map(({ value, valueSuffix, label }, i) => (
              <div key={label} className="flex items-center gap-[2.5rem]">
                {i > 0 && <div className="h-[5.125rem] w-px bg-[#3C3C3C]" />}
                <div>
                  <p
                    className={`${category.detail.statFontClassName} text-fs-subheading font-semibold text-subheading-orange`}
                  >
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
        </motion.div>
      </motion.div>

      {/* 2x4 grid, but only the first 3 slots of row 1 and first 2 of row 2
          hold cards — an L-shape, matching the Figma layout — rather than
          letting the grid auto-fill every cell. */}
      <motion.div
        key={category.id}
        className="grid flex-1 grid-cols-4 grid-rows-2 gap-[1.5rem]"
        variants={gridVariants}
        initial="hidden"
        animate="show"
      >
        {Array.from({ length: category.detail.projectCount }, (_, i) => {
          const row = i < 3 ? 1 : 2
          const col = i < 3 ? i + 1 : i - 3 + 1
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              className="h-full w-full"
              style={{ gridRow: row, gridColumn: col }}
            >
              <ProjectPlaceholderCard
                index={i + 1}
                layoutId={`project-card-${category.id}-${i + 1}`}
                onSelect={() => onSelectProject(i + 1)}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

DetailContent.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    detail: PropTypes.object.isRequired,
  }).isRequired,
  onSelectProject: PropTypes.func.isRequired,
}

export default function Portfolio({ activeId, onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [clickedId, setClickedId] = useState(null)
  // Flips false the instant a card is clicked, independent of activeId —
  // lets the intro panel + other cards unmount fast on their own, instead
  // of waiting on the clicked card's much longer layoutId morph to finish.
  const [siblingsVisible, setSiblingsVisible] = useState(true)
  const rows = [portfolioCategories.slice(0, 2), portfolioCategories.slice(2, 4)]

  const activeCategory = portfolioCategories.find((c) => c.id === activeId)

  // Detects "switched straight from one detail category to another via the
  // sidebar" (no grid in between, so no card to morph from) vs. "arrived
  // fresh from the grid" — read during render, updated after paint.
  const prevCategoryIdRef = useRef(null)
  const cameFromAnotherDetail = Boolean(prevCategoryIdRef.current) && prevCategoryIdRef.current !== activeId

  useEffect(() => {
    prevCategoryIdRef.current = activeId
  }, [activeId])

  useEffect(() => {
    if (!activeCategory) {
      setSiblingsVisible(true)
      setClickedId(null)
      setHoveredId(null)
    }
  }, [activeCategory])

  function cardState(id, row) {
    if (!hoveredId) return 'default'
    const hoveredInRow = row.some((c) => c.id === hoveredId)
    if (!hoveredInRow) return 'default'
    return id === hoveredId ? 'expanded' : 'cramped'
  }

  function handleContinue(id) {
    setClickedId(id)
    setSiblingsVisible(false)
    onNavigate(id)
  }

  return (
    <div className="flex h-full min-h-full flex-col gap-[2rem]">
      <AnimatePresence mode="popLayout">
        {!activeCategory ? (
          <motion.div
            key="grid"
            variants={fadeVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex h-full min-h-full flex-col gap-[2rem]"
          >
            <AnimatePresence>
              {siblingsVisible && (
                <motion.div
                  variants={fastExitVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="h-[13rem] rounded-[0.625rem] border border-[#3C3C3C] bg-[#22262E]/80 p-[2rem] backdrop-blur-xl"
                >
                  <p className="font-roboto text-fs-body-title font-medium text-body-white">
                    Every project started with <span className="text-heading">curiosity.</span> Every
                    solution was shaped by <span className="text-heading">design.</span>
                  </p>
                  <p className="mt-[1.125rem] font-roboto text-fs-body-small font-normal text-body-grey">
                    From enterprise platforms and global rebrands to marketing campaigns and speculative
                    explorations, this collection represents how I think, create, and evolve through design.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-1 flex-col gap-[2rem]">
              {rows.map((row, i) => (
                <motion.div
                  key={i}
                  className="flex flex-1 gap-[2rem]"
                  variants={rowVariants}
                  initial="hidden"
                  animate="show"
                >
                  <AnimatePresence>
                    {row.map((category) =>
                      category.id === clickedId || siblingsVisible ? (
                        <PortfolioCategoryCard
                          key={category.id}
                          category={category}
                          state={cardState(category.id, row)}
                          onHoverStart={() => setHoveredId(category.id)}
                          onHoverEnd={() => setHoveredId(null)}
                          onContinue={() => handleContinue(category.id)}
                        />
                      ) : null
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : cameFromAnotherDetail ? (
          <motion.div
            key={`detail-${activeCategory.id}`}
            variants={detailSwitchVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex h-full min-h-full flex-col gap-[2rem]"
          >
            <DetailContent category={activeCategory} onSelectProject={setSelectedProject} />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            layoutId={`portfolio-card-${activeCategory.id}`}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full min-h-full flex-col gap-[2rem]"
          >
            <DetailContent category={activeCategory} onSelectProject={setSelectedProject} />
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectDetailModal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        content={mockProject}
        layoutId={
          selectedProject !== null && activeCategory
            ? `project-card-${activeCategory.id}-${selectedProject}`
            : undefined
        }
      />
    </div>
  )
}

Portfolio.propTypes = {
  activeId: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
}
