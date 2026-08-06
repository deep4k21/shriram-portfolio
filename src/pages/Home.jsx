import { useState } from 'react'
import HomeContent from '../components/HomeContent'

const ZOOM_DURATION_MS = 1400
const LAND_DURATION_MS = 1400

export default function Home() {
  // Two-phase transition:
  // 1. "zooming" — depth-tiered forward zoom (animate-zoom-depth-* in
  //    index.css), background/mid/foreground layers all scale up together
  //    at different rates, like diving through the current page.
  // 2. "landing" — the instant the variant cuts over, the whole new page
  //    starts small (animate-zoom-land) and grows out to full size, so the
  //    cut continues to feel like motion/arrival instead of a hard snap.
  const [variant, setVariant] = useState('default')
  const [zooming, setZooming] = useState(false)
  const [landing, setLanding] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  function handleClick() {
    if (zooming || landing) return

    setZooming(true)
    setAnimKey((k) => k + 1)

    window.setTimeout(() => {
      setVariant((v) => (v === 'default' ? 'alternate' : 'default'))
      setZooming(false)
      setLanding(true)
      setAnimKey((k) => k + 1)

      window.setTimeout(() => {
        setLanding(false)
      }, LAND_DURATION_MS)
    }, ZOOM_DURATION_MS)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden" onClick={handleClick}>
      <HomeContent key={animKey} variant={variant} zooming={zooming} landing={landing} />
    </div>
  )
}
