export const portfolioCategories = [
  {
    id: 'portfolio-uiux',
    title: 'UI/UX Design',
    tagline: 'Enterprise • SaaS • Product',
    description:
      'Designing intuitive digital experiences that transform complex workflows into scalable products and seamless user journeys.',
    summary: 'Turning complexity into clarity.',
    collectionLabel: 'Curated Collection',
    collectionIntro: '',
    collectionItems: ['Enterprise Dashboards', 'Websites', 'Design Systems', 'Product Experiences'],
    ctaLabel: 'Continue to UI/UX Design',
    cramTitle: 'UI/UX Design',
    cramCtaLabel: 'View more',
    detail: {
      heading: 'UI/UX Design',
      bgClassName: 'bg-[#22262E]/80',
      statFontClassName: 'font-sora',
      descriptionSpans: [
        { text: 'A curated collection of ' },
        { text: 'enterprise dashboards, SaaS platforms, mobile applications, ', strong: true },
        { text: 'and' },
        { text: ' product experiences', strong: true },
        {
          text: ' designed to solve complex business challenges through thoughtful, user-centered design.',
        },
      ],
      stats: [
        { value: '20+', label: 'Products Designed' },
        { value: '6', label: 'Years Experience' },
        { value: '5', label: 'Industries Explored' },
        { value: '10+', label: 'Global Markets' },
      ],
      projectCount: 5,
    },
  },
  {
    id: 'portfolio-brand',
    title: 'Brand Identity',
    tagline: 'Identity • Strategy • Guidelines',
    description:
      'Building memorable brands through thoughtful identities and scalable visual systems.',
    summary: 'Building brands that people remember.',
    collectionLabel: 'Curated Collection',
    collectionIntro: 'Brand exploration on',
    collectionItems: ['Freshstart', 'Forge', 'HealthDesk', 'Project Agresor'],
    ctaLabel: 'Continue to Brand Identity',
    cramTitle: 'Brand Identity',
    cramCtaLabel: 'View more',
    detail: {
      heading: 'Brand Identity',
      bgClassName: 'bg-[#22262E]/80',
      statFontClassName: 'font-roboto',
      descriptionSpans: [
        {
          text: 'From startup launches to global rebranding initiatives, these projects showcase identities built to create ',
        },
        { text: 'clarity, consistency,', strong: true },
        { text: ' and lasting ' },
        { text: 'brand recognition.', strong: true },
      ],
      stats: [
        { value: '15+', label: 'Brand Systems' },
        { value: '8', label: 'Logo Identities' },
        { value: '2', label: 'Global Rebrands' },
        { value: '100+', label: 'Global Collaborations' },
      ],
      projectCount: 5,
    },
  },
  {
    id: 'portfolio-marketing',
    title: 'Marketing Campaigns',
    tagline: 'Creative • Growth • Performance',
    description:
      'Campaigns that combine storytelling, strategy, events, illustrations and measurable business impact.',
    summary: 'Stories designed to perform.',
    collectionLabel: 'Curated Collection',
    collectionIntro: '',
    collectionItems: ['Product Launches', 'Event Branding', 'Social Campaigns', 'Landing Pages'],
    ctaLabel: 'Continue to Campaigns',
    cramTitle: 'Marketing Campaigns',
    cramCtaLabel: 'View more',
    detail: {
      heading: 'Marketing Campaigns',
      bgClassName: 'bg-[#22262E]/80',
      statFontClassName: 'font-roboto',
      descriptionSpans: [
        { text: 'A collection of campaigns crafted to tell ' },
        { text: 'compelling stories, launch products,', strong: true },
        { text: ' and create meaningful engagement across digital and physical touchpoints.' },
      ],
      stats: [
        { value: '30+', label: 'Campaigns' },
        { value: '5', label: 'Event Brands' },
        { value: '4', label: 'Social Media Channels' },
        { value: '50+', label: 'Marketing Assets' },
      ],
      projectCount: 5,
    },
  },
  {
    id: 'portfolio-illustrations',
    title: 'What If — Brand Reimagined',
    tagline: 'Conceptual • Explorations',
    description:
      'Speculative redesigns exploring how iconic brands could evolve through new visual systems.',
    summary: 'Reimagining the familiar.',
    collectionLabel: 'Curated Collection',
    collectionIntro: 'Speculative case studies on',
    collectionItems: ['Apple X Google', 'Nike X Adidas'],
    ctaLabel: 'Continue to What If',
    cramTitle: 'What If',
    cramCtaLabel: 'View more',
    detail: {
      heading: 'What If — Brand Reimagined',
      bgClassName: 'bg-[#22262E]/80',
      statFontClassName: 'font-roboto',
      descriptionSpans: [
        {
          text: 'A growing collection of speculative redesigns exploring how iconic brands could evolve through different design systems, visual languages, and strategic thinking.',
        },
      ],
      stats: [
        { value: '4', label: 'Explorations' },
        // "%" renders at a smaller size than "100" — see PortfolioDetail.jsx
        { value: '100', valueSuffix: '%', label: 'Self-Initiated' },
        { value: '∞', label: 'Creative Freedom' },
        { value: '1', label: 'Philosophy' },
      ],
      projectCount: 5,
    },
  },
]
