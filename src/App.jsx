import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import MainLayout from './layouts/MainLayout'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import CareerJourney from './pages/CareerJourney'
import Portfolio from './pages/Portfolio'
import ContactModal from './components/ContactModal'
// ProjectDetailModal was wired to the Portfolio sidebar link for early
// testing; kept available (see mockProject) but no longer triggered from
// navigation now that the real Portfolio page exists.
import ProjectDetailModal from './components/ProjectDetailModal'
import { mockProject } from './data/mockProject'
import ScaleDebugBadge from './components/ScaleDebugBadge'

function App() {
  const [view, setView] = useState('home')
  const [activeId, setActiveId] = useState('about')
  const [contactOpen, setContactOpen] = useState(false)
  const [projectOpen, setProjectOpen] = useState(false)
  const transitioning = useRef(false)

  function handleWheel(e) {
    if (view === 'home' && e.deltaY > 0 && !transitioning.current) {
      transitioning.current = true
      setView('main')
    }
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          view === 'main' ? '-translate-y-full' : 'translate-y-0'
        }`}
        onWheel={handleWheel}
      >
        <Home />
      </div>

      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          view === 'main' ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <MainLayout
          sidebar={
            <Sidebar
              activeId={activeId}
              onNavigate={(id) => {
                if (id === 'home') {
                  transitioning.current = false
                  setView('home')
                } else if (id === 'connect') {
                  setContactOpen(true)
                } else {
                  setActiveId(id)
                }
              }}
            />
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId === 'portfolio' || activeId.startsWith('portfolio-') ? 'portfolio' : activeId}
              className="h-full w-full"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeId === 'about' ? (
                <AboutMe />
              ) : activeId === 'career' ? (
                <CareerJourney />
              ) : activeId === 'portfolio' || activeId.startsWith('portfolio-') ? (
                <Portfolio activeId={activeId} onNavigate={setActiveId} />
              ) : (
                <div className="text-body-white">Coming soon</div>
              )}
            </motion.div>
          </AnimatePresence>
        </MainLayout>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <ProjectDetailModal
        open={projectOpen}
        onClose={() => setProjectOpen(false)}
        content={mockProject}
      />

      <ScaleDebugBadge />
    </div>
  )
}

export default App
