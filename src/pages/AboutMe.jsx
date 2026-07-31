import HeroTitle from '../components/text/HeroTitle'
import HeroSubtitle from '../components/text/HeroSubtitle'
import BodySubtitle, { Emphasis } from '../components/text/BodySubtitle'
import AtAGlanceCard from '../components/AtAGlanceCard'
import GlassPanelCard from '../components/GlassPanelCard'

const glanceItems = [
  { grey: 'rebrands in', white: 'SaaS and marketing on multiple project' },
  { grey: 'clean, user-first', white: 'UI/UX for Dashboards & Websites.' },
  { grey: 'expert use of', white: 'Figma & Adobe Creative Suite.' },
  { grey: 'working across', white: 'APAC/US/EU/ANZ markets.' },
  { grey: 'conceptualizing and designing', white: 'C-level presentations.' },
  { grey: 'visuals for', white: 'company product launches and events.' },
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
    <div className="flex flex-col gap-6">
      <HeroTitle lead="Layovers to layouts, " emphasis="I’m Shriram." />

      <HeroSubtitle orange="Designer by profession, " green="Traveler by instinct." />

      <BodySubtitle>
        Over <Emphasis>9 years, </Emphasis>
        I’ve designed <Emphasis>SaaS</Emphasis> products, intuitive{' '}
        <Emphasis>UI/UX</Emphasis> experiences, and scalable visual systems
        shaped by global perspective and bold thinking.
      </BodySubtitle>

      <AtAGlanceCard
        eyebrow="At a Glance"
        lead="I’ve contributed through"
        items={glanceItems}
      />

      <div className="flex gap-6">
        <GlassPanelCard
          title="My Toolkit"
          description="The tools I use to design, prototype, and bring ideas to life."
          icons={myToolkitImages}
        />
        <GlassPanelCard
          title="AI Workflow"
          description="AI tools I use to accelerate ideation, workflows, and execution."
          icons={aiWorkflowImages}
        />
      </div>
    </div>
  )
}
