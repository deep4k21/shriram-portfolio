import { useState, useEffect, useCallback } from 'react'

export default function Home({ onContinue }) {
  const [visible, setVisible] = useState(false)

  const startTimer = useCallback(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 2000)
    return t
  }, [])

  useEffect(() => {
    const t = startTimer()
    return () => clearTimeout(t)
  }, [startTimer])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'r' || e.key === 'R') startTimer()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [startTimer])

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Background image */}
      <img
        src="/images/bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Press R hint */}
      <button
        onClick={() => startTimer()}
        className={`absolute right-6 top-6 z-30 flex items-center gap-2 text-sm text-white/60 transition-all duration-700 hover:text-white/90 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg
          className="h-5 w-5 animate-spin-slow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Press &ldquo;R&rdquo; to Restart
      </button>

      {/* Backdrop — fades in with the card */}
      <div
        className={`absolute inset-0 z-10 bg-black/75 transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Center card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div
          className={`flex flex-col items-center gap-5 rounded-xl bg-[#101010]/60 px-10 pb-10 pt-8 shadow-[0_0_37px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-1000 ease-out
            ${visible ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0'}`}
        >
          {/* Profile picture */}
          <img
            src="/images/profilepic.png"
            alt="Shriram Sivakumar"
            className="h-52 w-52 rounded-full object-cover ring-4 ring-white/10"
          />

          {/* Name */}
          <h1 className="text-2xl font-bold text-white">Shriram Sivakumar</h1>

          {/* Role badge */}
          <span className="rounded bg-[#202A28] px-5 py-1.5 text-sm text-gray-300">
            Visual &amp; UI/UX Designer
          </span>

          {/* CTA button */}
          <button
            onClick={onContinue}
            className="mt-1 w-full rounded-lg bg-brand-teal py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-90 active:scale-95"
          >
            More About Me
          </button>
        </div>
      </div>
    </div>
  )
}
