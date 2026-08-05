import { useEffect } from 'react'
import PropTypes from 'prop-types'

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[1.5rem] w-[1.5rem]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
)

export default function Modal({ open, onClose, title, children, maxWidthClassName = 'max-w-[34rem]' }) {
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

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-[1rem] backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className={`relative max-h-[85vh] w-full ${maxWidthClassName} overflow-y-auto rounded-[1.25rem] border border-white/10 bg-section/50 shadow-2xl backdrop-blur-xl animate-[modalPop_0.25s_ease-out]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[1.5rem] top-[1.5rem] z-10 flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-background/80 text-body-white transition-colors hover:bg-sidebar-selected/60"
        >
          <CloseIcon />
        </button>

        {title && (
          <div className="border-b border-white/5 px-[2.5rem] py-[2rem]">
            <h2 className="font-sora text-fs-body-title font-semibold text-body-white">{title}</h2>
          </div>
        )}

        <div className="p-[2.5rem] font-roboto text-fs-body-small">{children}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  maxWidthClassName: PropTypes.string,
}
