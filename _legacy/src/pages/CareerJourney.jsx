import { useState } from 'react'
import PropTypes from 'prop-types'

const H = ({ children }) => (
  <span className="font-semibold text-neutral-light">{children}</span>
)
H.propTypes = { children: PropTypes.node.isRequired }

const companies = [
  {
    id: 'company1',
    name: 'Protiviti',
    logo: '/images/companies/company1.png',
    role: 'Deputy Manager - Marketing Design',
    period: 'June 2023 – April 2025',
    points: [
      <>Led the <H>UI/UX</H> function within the Marketing Design team.</>,
      <>Designed enterprise <H>dashboards</H>, <H>mobile apps</H>, and <H>web experiences</H> for clients across India and the Middle East.</>,
      <>Created <H>marketing collaterals</H> including exhibition booths, brochures, e-magazines, and campaign assets.</>,
      <>Simplified complex business challenges into <H>strategic presentations</H>, intuitive &amp; user-centered digital solutions.</>,
      <>Built and maintained <H>scalable design systems</H> to ensure consistency across projects.</>,
      <>Transformed ideas into <H>interactive dashboard prototypes</H>, helping stakeholders visualize solutions before development.</>,
    ],
  },
  {
    id: 'company2',
    name: 'Freshworks',
    logo: '/images/companies/company2.png',
    role: 'Senior Visual Designer',
    period: 'January 2019 – December 2022',
    progression: ['Graphic Designer', 'Visual Designer', 'Senior Visual Designer'],
    points: [
      <>Progressed through <H>three</H> design roles, Led marketing design for the <H>Partnerships, Startups,</H> and <H>Marketplace teams.</H></>,
      <>Collaborated with <H>100+</H> global stakeholders across regions and business functions.</>,
      <>Drove branding and creative direction for flagship programs including <H>Freshstart, Orbitshift Podcast,</H> and <H>Forge.</H></>,
      <>Played a key role in the <H>Freshworks global rebranding</H> initiative, helping scale visual consistency across digital touchpoints.</>,
      <>Designed integrated <H>marketing campaigns, event branding, landing pages,</H> and digital experiences for global audiences.</>,
      <>Recognized for creative excellence through awards including <H>Best Rookie (2019)</H> and <H>Certificate of Innovation (2020).</H></>,
    ],
  },
  {
    id: 'company3',
    name: 'RRD',
    logo: '/images/companies/company3.png',
    role: 'Graphic Designer',
    period: 'August 2017 – October 2018',
    points: [
      <>Designed executive presentations and visual communication materials for <H>Fortune 500 clients.</H></>,
      <>Created custom <H>illustrations, infographics,</H> and <H>layouts</H> for business-critical communications.</>,
      <>Collaborated with animation teams to develop <H>storyboards</H> and <H>motion design assets.</H></>,
      <>Translated complex information into <H>visually engaging</H> and <H>easy-to-understand presentations.</H></>,
      <>Maintained brand consistency while managing <H>high-volume</H> creative requests.</>,
      <>Delivered creative solutions for global clients including <H>First Data, Cisco,</H> and <H>McKinsey &amp; Company.</H></>,
    ],
  },
  {
    id: 'company4',
    name: '2adpro',
    logo: '/images/companies/company4.png',
    role: 'Junior Designer',
    period: 'April 2016 – July 2017',
    points: [
      <>Created <H>print</H> and <H>digital advertisements</H> for leading publications across the <H>ANZ market.</H></>,
      <>Adapted creative assets across industries while adhering to <H>strict brand guidelines.</H></>,
      <>Produced <H>high-volume advertising creatives</H> with accuracy and attention to detail.</>,
      <><H>Collaborated with production teams</H> to ensure timely delivery of campaign assets.</>,
      <>Developed strong foundations in <H>layout design, typography,</H> and visual storytelling.</>,
      <>Gained expertise in <H>production workflows</H> and <H>market-specific</H> creative execution.</>,
    ],
  },
]

export default function CareerJourney() {
  const [activeId, setActiveId] = useState(companies[0].id)
  const [hovered, setHovered] = useState(false)
  const active = companies.find((c) => c.id === activeId)

  function handleTabClick(id) {
    setActiveId(id)
    setHovered(false)
  }

  const prevRoles = active.progression ? active.progression.slice(0, -1) : []

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-[20px] bg-surface-dark/90 p-8 backdrop-blur-[20px]">

      {/* Education */}
      <div className="shrink-0 rounded-2xl bg-surface-darker p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Academic &amp; Professional Journey</p>
        <h2 className="mt-3 text-lg font-bold text-neutral-light">B.Sc., Visual Communication</h2>
        <p className="mt-1 text-sm text-neutral-muted">SRM Institute of Science and Technology, Chennai.</p>
      </div>

      {/* Work Experience */}
      <div className="flex min-h-0 flex-1 flex-col rounded-2xl bg-surface-darker">

        {/* Company tabs */}
        <div className="flex shrink-0 gap-2 border-b border-white/5 px-5 pt-5">
          {companies.map((c) => (
            <button
              key={c.id}
              onClick={() => handleTabClick(c.id)}
              className={`overflow-hidden rounded-xl transition-all duration-150 ${
                activeId === c.id ? '' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <img src={c.logo} alt={c.name} className="h-12 w-auto object-contain" />
            </button>
          ))}
        </div>

        {/* Company content */}
        <div
          className="flex min-h-0 flex-1 flex-col overflow-y-auto p-5"
          onMouseEnter={() => active.progression && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-0 overflow-hidden">
              {/* Previous roles — slide in from left on hover */}
              {prevRoles.map((title, i) => (
                <div
                  key={i}
                  className="flex items-center overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxWidth: hovered ? '200px' : '0px',
                    opacity: hovered ? 1 : 0,
                    transitionDelay: hovered ? `${i * 100}ms` : '0ms',
                  }}
                >
                  <span className="whitespace-nowrap font-semibold text-brand-teal">{title}</span>
                  <span className="mx-2 whitespace-nowrap text-neutral-muted/60">→</span>
                </div>
              ))}
              {/* Current role — always visible, moves right as prev roles expand */}
              <h3 className="whitespace-nowrap text-lg font-semibold text-brand-orange">
                {active.role}
              </h3>
            </div>
          </div>

          <p className="mt-0.5 text-sm text-neutral-muted">{active.period}</p>

          <ul className="mt-4 flex flex-col gap-3">
            {active.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-light/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
