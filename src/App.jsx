import { useState } from 'react'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

export default function App() {
  const [view, setView] = useState('home')

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Home — slides up and out */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          view === 'main' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <Home onContinue={() => setView('main')} />
      </div>

      {/* Main layout — slides up from below */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          view === 'main' ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <MainLayout onGoHome={() => setView('home')} />
      </div>
    </div>
  )
}
