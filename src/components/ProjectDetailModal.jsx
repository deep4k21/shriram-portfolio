import { useEffect } from 'react'
import PropTypes from 'prop-types'

const arrowNext = '/images/project-modal/arrow-next.svg'
const arrowNextHover = '/images/project-modal/arrow-next-hover.svg'

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[1.5rem] w-[1.5rem]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
)

export default function ProjectDetailModal({ open, onClose, content }) {
  useEffect(() => {
    if (!open) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open || !content) return null

  const {
    thumbnails = [],
    activeThumbnailIndex = 0,
    tools = [],
    category,
    titleGrey,
    titleBlue,
    subtitle,
    image,
    problem,
    solution,
    brandSystem,
    process,
  } = content

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-[2rem] backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="themed-scrollbar relative max-h-full w-full max-w-[93.75rem] animate-[modalPop_0.25s_ease-out] overflow-y-auto rounded-[1.25rem] border border-white/10 bg-black/60 shadow-[0_0_2.28125rem_-0.3125rem_rgba(0,0,0,0.2)] backdrop-blur-[0.625rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[1.5rem] top-[4.375rem] z-10 flex h-[2.75rem] w-[2.75rem] -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-body-white transition-colors hover:bg-sidebar-selected/60"
        >
          <CloseIcon />
        </button>

        {/* Thumbnail strip */}
        <div className="flex items-center justify-center gap-[1.25rem] pt-[2.5rem]">
          {thumbnails.map((thumb, i) => (
            <div
              key={i}
              className={`h-[3.75rem] w-[6.875rem] shrink-0 rounded-[0.3125rem] border-2 ${
                i === activeThumbnailIndex
                  ? 'border-subheading-orange bg-[#15171a]'
                  : 'border-[#505569] bg-[rgba(21,23,26,0.6)]'
              }`}
              style={
                thumb
                  ? { backgroundImage: `url(${thumb})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : undefined
              }
            />
          ))}
          <button
            type="button"
            aria-label="Next project"
            className="group relative flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center"
          >
            <img src={arrowNext} alt="" className="absolute inset-0 h-full w-full transition-opacity duration-150 group-hover:opacity-0" />
            <img src={arrowNextHover} alt="" className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
          </button>
        </div>

        <div className="mx-[5rem] mt-[2.5rem] h-px bg-[#3C3C3C]" />

        <div className="px-[5rem] pb-[5rem] pt-[3.75rem]">
          <div className="flex items-center justify-between gap-[1.25rem]">
            {category && (
              <p className="font-sora text-fs-body-subtitle font-normal uppercase text-body-grey">
                {category}
              </p>
            )}

            {tools.length > 0 && (
              <div className="flex shrink-0 gap-[1.25rem]">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-center rounded-full border-2 border-[#505569] bg-[rgba(21,23,26,0.6)] px-[1.25rem] py-[0.75rem]"
                  >
                    <p className="whitespace-nowrap text-center font-roboto text-fs-body-small font-normal text-body-white">
                      {tool}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {(titleGrey || titleBlue) && (
            <p className="mt-[1rem] whitespace-nowrap bg-gradient-to-r from-white from-0% to-heading to-[20%] bg-clip-text font-sora text-fs-subheading font-semibold text-transparent">
              {titleGrey}
              {titleBlue}
            </p>
          )}

          {subtitle && (
            <p className="mt-[1rem] max-w-[47.875rem] font-roboto text-fs-body-title font-normal leading-[2.5rem] text-body-grey">
              {subtitle}
            </p>
          )}

          {/* Hero image */}
          <div className="relative mt-[2.5rem] h-[15.625rem] w-full overflow-hidden rounded-[1.25rem] bg-body-grey">
            {image ? (
              <img src={image} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <p className="font-sora text-fs-body-subtitle uppercase text-body-white">Image</p>
              </div>
            )}
          </div>

          {/* Problem / Solution */}
          <div className="mt-[1.25rem] flex gap-[1.25rem]">
            {problem && (
              <div className="flex-1 rounded-[1.25rem] bg-section p-[1.25rem]">
                <p className="font-sora text-fs-body-subtitle font-semibold text-subheading-orange">
                  Problem
                </p>
                <p className="mt-[0.75rem] font-roboto text-fs-body-small font-normal leading-[1.75rem] text-body-grey">
                  {problem}
                </p>
              </div>
            )}
            {solution && (
              <div className="flex-1 rounded-[1.25rem] bg-section p-[1.25rem]">
                <p className="font-sora text-fs-body-subtitle font-semibold text-subheading-green">
                  Solution
                </p>
                <p className="mt-[0.75rem] font-roboto text-fs-body-small font-normal leading-[1.75rem] text-body-grey">
                  {solution}
                </p>
              </div>
            )}
          </div>
        </div>

        {brandSystem && (
          <>
            <div className="mx-[5rem] h-px bg-[#3C3C3C]" />
            <div className="px-[5rem] py-[3.125rem]">
              <div className="flex items-center justify-center rounded-[1.25rem] bg-section px-[2.5rem] py-[2.5rem]">
                <p className="shrink-0 font-sora text-fs-body-subtitle font-semibold text-heading">
                  Brand system
                </p>
                <div className="ml-[3.75rem] flex shrink-0 items-center gap-[0.75rem]">
                  <p className="font-sora text-fs-body-small font-semibold text-body-grey">Color</p>
                  {(brandSystem.colors || []).map((color, i) => (
                    <div
                      key={i}
                      className="h-[3.75rem] w-[7.5rem] rounded-[0.3125rem]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                {brandSystem.typeface && (
                  <div className="ml-[3.75rem] flex shrink-0 items-center gap-[0.75rem]">
                    <p className="font-sora text-fs-body-small font-semibold text-body-grey">Typeface</p>
                    <p className="font-sora text-fs-body-small font-semibold text-body-white">
                      {brandSystem.typeface}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mx-[5rem] h-px bg-[#3C3C3C]" />
          </>
        )}

        {/* Process — placeholder box, content to be defined later */}
        <div className="px-[5rem] pt-[3.125rem] pb-[5rem]">
          <p className="font-sora text-fs-body-subtitle font-semibold text-heading">Process</p>
          <div className="mt-[1.25rem] h-[60.5rem] w-full rounded-[1.25rem] bg-section">
            {process}
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectDetailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape({
    thumbnails: PropTypes.arrayOf(PropTypes.string),
    activeThumbnailIndex: PropTypes.number,
    tools: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
    titleGrey: PropTypes.string,
    titleBlue: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    problem: PropTypes.string,
    solution: PropTypes.string,
    brandSystem: PropTypes.shape({
      colors: PropTypes.arrayOf(PropTypes.string),
      typeface: PropTypes.string,
    }),
    process: PropTypes.node,
  }),
}
