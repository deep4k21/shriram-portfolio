import { useState } from 'react'
import PropTypes from 'prop-types'

const portfolioSections = [
  { id: 'portfolio-uiux', label: 'UI/UX' },
  { id: 'portfolio-brand', label: 'Brand Identity' },
  { id: 'portfolio-marketing', label: 'Marketing Campaigns' },
  { id: 'portfolio-illustrations', label: 'What If?' },
]

const navItems = [
  { id: 'home', label: 'Home', icon: '/images/menuicons/house.svg' },
  { id: 'about', label: 'About Me', icon: '/images/menuicons/article_person.svg' },
  { id: 'portfolio', label: 'Portfolio', icon: '/images/menuicons/stylus_note.svg', hasSubmenu: true },
  { id: 'career', label: 'Career Journey', icon: '/images/menuicons/card_travel.svg' },
  { id: 'connect', label: 'Let’s Connect', icon: '/images/menuicons/mobile_vibrate.svg' },
]

export default function Sidebar({ activeId, onNavigate }) {
  const [manualPortfolioOpen, setManualPortfolioOpen] = useState(null)

  const isPortfolioActive = activeId === 'portfolio' || activeId?.startsWith('portfolio-')
  const portfolioOpen = manualPortfolioOpen ?? isPortfolioActive

  function handleNavClick(id) {
    if (id === 'portfolio') {
      setManualPortfolioOpen(activeId === 'portfolio' ? !portfolioOpen : true)
    } else if (!id.startsWith('portfolio-')) {
      // Navigating to any non-Portfolio page closes the submenu so it
      // doesn't stay stuck open (and pushing the sidebar into overflow)
      // after the user has moved on.
      setManualPortfolioOpen(false)
    }
    onNavigate(id)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-center">
        <img
          src="/images/menuicons/avatar.png"
          alt="Shriram Sivakumar"
          className="aspect-square w-[60%] rounded-full object-cover"
        />
      </div>

      <nav className="mt-10 flex flex-col gap-4">
        {navItems.map(({ id, label, icon, hasSubmenu }) => {
          const isActive = activeId === id

          return (
            <div key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`flex w-full items-center gap-3 rounded-xl px-5 py-4 text-left text-fs-nav font-roboto transition-colors duration-150 ${
                  isActive
                    ? 'bg-sidebar-selected font-bold text-body-white'
                    : 'font-normal text-body-white hover:bg-sidebar-selected/30'
                }`}
              >
                <img src={icon} alt="" className="h-6 w-6 shrink-0" />
                <span className="flex-1 truncate">{label}</span>
              </button>

              {hasSubmenu && portfolioOpen && (
                <div className="mt-1 flex flex-col gap-1 rounded-xl border border-white/10 p-2">
                  {portfolioSections.map(({ id: subId, label: subLabel }) => (
                    <button
                      key={subId}
                      onClick={() => onNavigate(subId)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-fs-body-small font-roboto transition-colors duration-150 ${
                        activeId === subId
                          ? 'bg-sidebar-selected font-bold text-body-white'
                          : 'font-normal text-body-white hover:bg-sidebar-selected/30'
                      }`}
                    >
                      {subLabel}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

Sidebar.propTypes = {
  activeId: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
}
