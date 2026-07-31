import { useEffect } from 'react'
import PropTypes from 'prop-types'

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
)

export default function Modal({ open, onClose, title, children, maxWidthClassName = 'max-w-lg' }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className={`relative max-h-[85vh] w-full ${maxWidthClassName} overflow-y-auto rounded-2xl bg-surface-dark shadow-2xl animate-[modalPop_0.25s_ease-out]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface-darker/80 text-neutral-light transition-colors hover:bg-surface-mid/60"
        >
          <CloseIcon />
        </button>

        {title && (
          <div className="border-b border-white/5 px-8 py-6">
            <h2 className="text-2xl font-semibold text-neutral-light">{title}</h2>
          </div>
        )}

        <div className="p-8">{children}</div>
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
