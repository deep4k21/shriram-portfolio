import PropTypes from 'prop-types'

export default function MainLayout({ sidebar, children }) {
  return (
    <div className="flex h-screen w-screen gap-[1%] bg-background p-0">
      <aside
        className="no-scrollbar h-full w-[20%] shrink-0 overflow-y-auto rounded-[1.25rem] bg-section pt-10 pr-10 pl-10"
        style={{ paddingBottom: 'min(35.0625rem, 20vh)' }}
      >
        {sidebar}
      </aside>
      <main className="no-scrollbar h-full w-[79%] overflow-y-auto rounded-[1.25rem] bg-section px-10 py-10">
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  sidebar: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}
