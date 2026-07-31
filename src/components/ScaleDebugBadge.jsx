import { useEffect, useState } from 'react'

function readScale() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    rootFontSize: getComputedStyle(document.documentElement).fontSize,
  }
}

// Dev-only overlay showing live viewport size and the root font-size our
// index.css breakpoints (width- and height-based) have resolved to — makes
// it obvious which rule actually won at the current window size.
export default function ScaleDebugBadge() {
  const [scale, setScale] = useState(readScale)

  useEffect(() => {
    function handleResize() {
      setScale(readScale())
    }
    window.addEventListener('resize', handleResize)

    // DevTools device-mode viewport changes (dragging the frame, or typing
    // into the width/height fields) don't reliably fire a window 'resize'
    // event, so poll as a fallback to keep the badge honest there too.
    const interval = setInterval(handleResize, 300)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2 z-50 rounded bg-black/80 px-2 py-1 font-mono text-[11px] leading-tight text-white/80">
      {scale.width}×{scale.height}px · root {scale.rootFontSize}
    </div>
  )
}
