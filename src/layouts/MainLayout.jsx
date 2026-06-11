import { useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../components/Sidebar'
import AboutMe from '../pages/AboutMe'
import CareerJourney from '../pages/CareerJourney'
import ComingSoon from '../pages/ComingSoon'

const pages = {
  about:                    () => <AboutMe />,
  portfolio:                () => <ComingSoon label="Portfolio" />,
  'portfolio-uiux':         () => <ComingSoon label="UI/UX" />,
  'portfolio-brand':        () => <ComingSoon label="Brand Identity" />,
  'portfolio-marketing':    () => <ComingSoon label="Marketing Campaigns" />,
  'portfolio-illustrations':() => <ComingSoon label="Illustrations" />,
  career:                   () => <CareerJourney />,
  connect:                  () => <ComingSoon label="Let's Connect" />,
}

export default function MainLayout({ onGoHome }) {
  const [activeId, setActiveId] = useState('about')

  function handleNavigate(id) {
    if (id === 'home') {
      onGoHome()
    } else {
      setActiveId(id)
    }
  }

  const Page = pages[activeId] ?? pages.about

  return (
    <div className="flex h-screen w-screen bg-surface-darker">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />
      <main className="flex-1 overflow-hidden">
        <Page />
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  onGoHome: PropTypes.func.isRequired,
}
