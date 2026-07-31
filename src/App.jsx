import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Sidebar from './components/Sidebar'
import AboutMe from './pages/AboutMe'
import ScaleDebugBadge from './components/ScaleDebugBadge'

function App() {
  const [activeId, setActiveId] = useState('about')

  return (
    <>
      <MainLayout sidebar={<Sidebar activeId={activeId} onNavigate={setActiveId} />}>
        {activeId === 'about' ? (
          <AboutMe />
        ) : (
          <div className="text-body-white">Coming soon</div>
        )}
      </MainLayout>
      {import.meta.env.DEV && <ScaleDebugBadge />}
    </>
  )
}

export default App
