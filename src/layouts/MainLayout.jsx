import { useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../components/Sidebar'
import ContactModal from '../components/ContactModal'
import AboutMe from '../pages/AboutMe'
import CareerJourney from '../pages/CareerJourney'
import Portfolio from '../pages/Portfolio'
import PortfolioDetail from '../pages/PortfolioDetail'
import { portfolioSections } from '../data/portfolio'

export default function MainLayout({ onGoHome }) {
  const [activeId, setActiveId] = useState('about')
  const [contactOpen, setContactOpen] = useState(false)

  function handleNavigate(id) {
    if (id === 'home') {
      onGoHome()
    } else if (id === 'connect') {
      setContactOpen(true)
    } else {
      setActiveId(id)
    }
  }

  const pages = {
    about:     () => <AboutMe />,
    portfolio: () => <Portfolio onNavigate={handleNavigate} />,
    career:    () => <CareerJourney />,
  }

  for (const section of portfolioSections) {
    pages[section.id] = () => <PortfolioDetail section={section} />
  }

  const Page = pages[activeId] ?? pages.about

  return (
    <div className="flex h-screen w-screen bg-surface-darker">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />
      <main className="flex-1 overflow-hidden">
        <Page />
      </main>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

MainLayout.propTypes = {
  onGoHome: PropTypes.func.isRequired,
}
