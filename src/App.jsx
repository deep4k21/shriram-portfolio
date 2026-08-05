import { useState, useRef } from 'react'
import MainLayout from './layouts/MainLayout'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ContactModal from './components/ContactModal'
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
                } else if (id === 'portfolio') {
                  setProjectOpen(true)
                  setActiveId(id)
                } else {
                  setActiveId(id)
                }
              }}
            />
          }
        >
          {activeId === 'about' ? (
            <AboutMe />
          ) : (
            <div className="text-body-white">Coming soon</div>
          )}
        </MainLayout>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <ProjectDetailModal
        open={projectOpen}
        onClose={() => setProjectOpen(false)}
        content={mockProject}
      />

      {import.meta.env.DEV && <ScaleDebugBadge />}
    </div>
  )
}

export default App
