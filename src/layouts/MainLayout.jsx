import { useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../components/Sidebar'
import AboutMe from '../pages/AboutMe'
import CareerJourney from '../pages/CareerJourney'

const pages = {
  about:     AboutMe,
  portfolio: AboutMe,
  career:    CareerJourney,
  connect:   AboutMe,
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

  const Page = pages[activeId] ?? AboutMe

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
