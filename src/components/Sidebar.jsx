import { useState } from 'react'
import PropTypes from 'prop-types'

const NavIcon = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-5 w-5 shrink-0" />
)

NavIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
)

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
)

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
)

const portfolioSections = [
  { id: 'portfolio-uiux',          label: 'UI/UX' },
  { id: 'portfolio-brand',         label: 'Brand Identity' },
  { id: 'portfolio-marketing',     label: 'Marketing Campaigns' },
  { id: 'portfolio-illustrations', label: 'Illustrations' },
]

const navItems = [
  { id: 'home',      label: 'Home',          icon: '/images/menuicons/house.svg' },
  { id: 'about',     label: 'About Me',       icon: '/images/menuicons/article_person.svg' },
  { id: 'portfolio', label: 'Portfolio',      icon: '/images/menuicons/stylus_note.svg', hasSubmenu: true },
  { id: 'career',    label: 'Career Journey', icon: '/images/menuicons/card_travel.svg' },
  { id: 'connect',   label: "Let's Connect",  icon: '/images/menuicons/mobile_vibrate.svg' },
]

Sidebar.propTypes = {
  activeId: PropTypes.string,
  onNavigate: PropTypes.func.isRequired,
}

export default function Sidebar({ activeId, onNavigate }) {
  const [collapsed, setCollapsed] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(
    activeId === 'portfolio' || activeId?.startsWith('portfolio-')
  )

  const isPortfolioActive = activeId === 'portfolio' || activeId?.startsWith('portfolio-')

  function handleNavClick(id) {
    if (id === 'portfolio') {
      setPortfolioOpen((prev) => !prev)
      onNavigate('portfolio')
    } else {
      onNavigate(id)
    }
  }

  return (
    <aside
      className={`relative flex h-full flex-col bg-surface-dark py-6 transition-all duration-300 ease-in-out ${
        collapsed ? 'w-[72px]' : 'w-[370px]'
      }`}
    >
      {/* Inner wrapper so percentage heights resolve against the padded content area */}
      <div className="flex min-h-0 flex-1 flex-col">

      {/* Avatar — 20% of sidebar height */}
      <div className={`flex h-[20%] items-center justify-center transition-all duration-300 ${collapsed ? 'px-3' : 'px-10'}`}>
        <img
          src="/images/menuicons/avatar.png"
          alt="Shriram Sivakumar"
          className="aspect-square h-full w-auto max-w-full rounded-full object-cover transition-all duration-300"
        />
      </div>

      {/* Nav items — 75% of sidebar height */}
      <nav className="flex h-[75%] flex-col gap-1 overflow-y-auto px-4 py-4">
        {navItems.map(({ id, label, icon, hasSubmenu }) => {
          const isActive = id === 'portfolio' ? isPortfolioActive : activeId === id

          return (
            <div key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150 ${
                  isActive
                    ? 'bg-surface-mid/40 text-neutral-light'
                    : 'text-neutral-light hover:bg-surface-mid/20'
                } ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? label : undefined}
              >
                <NavIcon src={icon} alt={label} />
                {!collapsed && (
                  <span className="flex-1 truncate text-sm font-medium">{label}</span>
                )}
              </button>

              {/* Portfolio submenu */}
              {hasSubmenu && !collapsed && portfolioOpen && (
                <div className="mt-0.5 flex flex-col gap-0.5 pl-4">
                  {portfolioSections.map(({ id: subId, label: subLabel }) => (
                    <button
                      key={subId}
                      onClick={() => onNavigate(subId)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors duration-150 ${
                        activeId === subId
                          ? 'bg-surface-mid/40 text-neutral-light'
                          : 'text-neutral-light hover:bg-surface-mid/20'
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

      {/* Collapse toggle — 5% of sidebar height */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        className={`flex h-[5%] w-full items-center gap-2 px-4 text-neutral-muted transition-colors hover:bg-surface-mid/20 hover:text-neutral-light ${
          collapsed ? 'justify-center' : ''
        }`}
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
        {!collapsed && <span className="text-xs">Collapse</span>}
      </button>
      </div>
    </aside>
  )
}
