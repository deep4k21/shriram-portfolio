import PropTypes from 'prop-types'

const B = ({ children }) => (
  <span className="text-neutral-light">{children}</span>
)
B.propTypes = { children: PropTypes.node.isRequired }

const glanceItems = [
  <>rebrands in{' '}<B>SaaS and marketing on multiple projects.</B></>,
  <>clean, user-first{' '}<B>UI/UX for Dashboards &amp; Websites.</B></>,
  <>expert use of{' '}<B>Figma &amp; Adobe Creative Suite.</B></>,
  <>working across{' '}<B>APAC/US/EU/ANZ markets.</B></>,
  <>conceptualizing and designing{' '}<B>C-level presentations.</B></>,
  <>visuals for{' '}<B>company product launches and events.</B></>,
]

const myToolkitImages = [
  '/images/mytoolkit/Group 366.png',       // Figma
  '/images/mytoolkit/Group 369.png',       // Illustrator
  '/images/mytoolkit/Group 368.png',       // Photoshop
  '/images/mytoolkit/image 17.png',        // Framer
  '/images/mytoolkit/Group 367.png',       // InDesign
  '/images/mytoolkit/Clip path frame.png', // After Effects
  '/images/mytoolkit/Rectangle.png',       // XD
  '/images/mytoolkit/Rectangle (1).png',   // Premiere Pro
  '/images/mytoolkit/image 27.png',        // R
  '/images/mytoolkit/image 19.png',        // PowerPoint
  '/images/mytoolkit/Rectangle (2).png',   // Gradient tool
]

const aiWorkflowImages = [
  '/images/aiworkflow/image 20.png',
  '/images/aiworkflow/image 21.png',
  '/images/aiworkflow/image 22.png',
  '/images/aiworkflow/image 24.png',
  '/images/aiworkflow/image 25.png',
  '/images/aiworkflow/image 26.png',
]

export default function AboutMe() {

  return (
    <div className="flex h-full w-full flex-col gap-5 overflow-hidden rounded-[20px] bg-surface-dark/90 p-8 backdrop-blur-[20px]">

      {/* Hero */}
      <div className="shrink-0">
        <h1 className="text-4xl font-light leading-tight text-neutral-muted">
          Hello, I&apos;m <span className="font-bold text-neutral-light">Shriram</span>
        </h1>
        <p className="mt-2 text-sm">
          <span className="text-brand-orange">Designer by profession,</span>{' '}
          <span className="text-brand-cyan">Traveler by instinct.</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-light">
          Over <strong>9 years</strong>, I&apos;ve designed{' '}
          <strong>SaaS</strong> products, intuitive{' '}
          <strong>UI/UX</strong> experiences, and scalable visual
          systems shaped by global perspective and bold thinking.
        </p>
      </div>

      {/* At a Glance — rolling text block */}
      <div className="shrink-0 rounded-2xl bg-surface-darker p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
          At a Glance
        </p>
        <p className="mt-2 text-xl font-light leading-snug text-neutral-light/50">
          I&apos;ve contributed through
        </p>
        {/* Infinite upward marquee — doubled list for seamless loop */}
        <div className="h-[2rem] overflow-hidden">
          <div className="marquee-up flex flex-col">
            {glanceItems.map((item, i) => (
              <div key={i} className="h-[2rem] shrink-0 leading-[2rem] text-xl font-light text-neutral-light/50">
                {item}
              </div>
            ))}
            {glanceItems.map((item, i) => (
              <div key={`dup-${i}`} className="h-[2rem] shrink-0 leading-[2rem] text-xl font-light text-neutral-light/50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool cards */}
      <div className="flex min-h-0 flex-1 gap-4">

        {/* My Toolkit */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-surface-darker p-5">
          <h3 className="shrink-0 text-sm font-semibold text-brand-cyan">My Toolkit</h3>
          <p className="mt-0.5 shrink-0 text-xs text-neutral-muted">
            The tools I use to design, prototype, and bring ideas to life.
          </p>
          <div className="mt-3 grid grid-cols-7 gap-2">
            {myToolkitImages.map((src, i) => (
              <img key={i} src={src} alt="" className="h-11 w-11 cursor-pointer rounded-lg object-contain transition-transform duration-200 hover:scale-125" />
            ))}
          </div>
        </div>

        {/* AI Workflow */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-surface-darker p-5">
          <h3 className="shrink-0 text-sm font-semibold text-brand-cyan">AI Workflow</h3>
          <p className="mt-0.5 shrink-0 text-xs text-neutral-muted">
            AI tools I use to accelerate ideation, workflows, and execution.
          </p>
          <div className="mt-3 grid grid-cols-6 gap-2">
            {aiWorkflowImages.map((src, i) => (
              <img key={i} src={src} alt="" className="h-11 w-11 cursor-pointer rounded-lg object-contain transition-transform duration-200 hover:scale-125" />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
