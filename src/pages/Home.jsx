import FlipTile from '../components/FlipTile'

const profilePhoto = '/images/home/profile-photo.png'
const profileMask = '/images/home/profile-mask.svg'
const bgPattern1 = '/images/home/bg-pattern-1.svg'
const bgPattern2 = '/images/home/bg-pattern-2.svg'

const tealBlocks = [
  { left: '5%', top: '23.33%', width: '19.27%', height: '18.7%' },
  { left: '10.26%', top: '67.5%', width: '19.27%', height: '18.7%' },
  { left: '66.82%', top: '7.31%', width: '19.27%', height: '18.7%' },
  { left: '77.34%', top: '42.5%', width: '19.27%', height: '18.7%' },
  { left: '66.82%', top: '72.59%', width: '19.27%', height: '18.7%' },
]

export default function Home() {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 55% 55% at 50% 50%, #333946 0%, #242830 50%, #15161A 100%)',
      }}
    >
      {/* Faint grid line patterns, matching Figma's decorative background.
          Both are mix-blend-darken so they only ever darken the page
          gradient beneath them — never brighten it — reading as a subtle
          texture rather than a visible grid. */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={bgPattern1}
          alt=""
          className="absolute left-[8.33%] top-0 h-full w-[83.07%] mix-blend-darken"
        />
        <div className="absolute left-0 top-[14.35%] flex h-[71.76%] w-full items-center justify-center overflow-hidden">
          {/* Rotation swaps visual width/height, so the image's own
              (pre-rotation) height is set to the viewport width, and its
              own width to the container's height — post-rotation this
              renders as a band spanning the full page width. */}
          <img
            src={bgPattern2}
            alt=""
            className="rotate-90 mix-blend-darken"
            style={{ height: '100vw', width: '71.76vh' }}
          />
        </div>
      </div>

      {/* Decorative teal panels around the profile card — each flips to its
          back face every 5s, standing in for a future image swap */}
      {tealBlocks.map((pos, i) => (
        <FlipTile key={i} style={pos} />
      ))}

      {/* Anchor at the card's own center — the 4 flanking glass panels below
          are positioned as offsets from this same point, matching how
          Figma places them relative to the card rather than the page. */}
      <div className="absolute left-1/2 top-1/2 h-[43.75rem] w-[28.125rem] -translate-x-1/2 -translate-y-1/2">
        {/* Flanking glass panels — border only, no fill beyond the blur.
            Each pulses opacity/scale from its own center on a loop. */}
        <div className="fade-scale-center absolute left-[-8.625rem] top-[5.6875rem] h-[6.25rem] w-[22.5rem] rounded-[0.625rem] border border-[rgba(137,145,159,0.5)] bg-section/35 backdrop-blur-[0.625rem]" />
        <div className="fade-scale-center absolute left-[-3.75rem] top-[16.8125rem] h-[14.375rem] w-[11.25rem] rounded-[0.625rem] border border-[rgba(137,145,159,0.5)] bg-section/35 backdrop-blur-[0.625rem]" />
        <div className="fade-scale-center absolute left-[24.6875rem] top-[3.375rem] h-[13.125rem] w-[16.875rem] rounded-[0.625rem] border border-[rgba(137,145,159,0.5)] bg-section/35 backdrop-blur-[0.625rem]" />
        <div className="fade-scale-center absolute left-[19.625rem] top-[19rem] h-[3.75rem] w-[16.875rem] rounded-[1.875rem] border border-[rgba(137,145,159,0.5)] bg-section/35 backdrop-blur-[0.625rem]" />

        {/* Profile card — 450x700 in Figma (28.125rem x 43.75rem) */}
        <div className="absolute inset-0 overflow-hidden rounded-[0.625rem] shadow-[0_0_2.28125rem_-0.3125rem_rgba(0,0,0,0.2)]">
          <div className="absolute inset-0 bg-section/35 backdrop-blur-[0.625rem]" />
          <div
            className="absolute inset-0 opacity-80 mix-blend-color-dodge"
            style={{
              background: 'linear-gradient(to bottom, #15161A 51.923%, rgba(255,214,92,0.85))',
            }}
          />

          {/* Photo, masked into the Figma cutout shape — offset 81,91 within the card */}
          <div
            className="absolute left-[5.0625rem] top-[5.6875rem] h-[23.625rem] w-[17.9763rem] rotate-[-2.73deg]"
            style={{
              maskImage: `url(${profileMask})`,
              maskSize: '100% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: `url(${profileMask})`,
              WebkitMaskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
            }}
          >
            <img
              src={profilePhoto}
              alt="Shriram Sivakumar"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name — offset 51,531 within the card */}
          <p className="absolute left-[3.1875rem] top-[33.1875rem] w-[21.75rem] whitespace-nowrap bg-gradient-to-b from-white from-[46.154%] to-subheading-orange bg-clip-text text-center font-sora text-[2.25rem] font-semibold leading-[2.25rem] text-transparent">
            Shriram Sivakumar
          </p>

          {/* Role tag — offset 92,594 within the card */}
          <div className="absolute left-[5.75rem] top-[37.125rem] flex h-[2.875rem] w-[16.625rem] items-center justify-center rounded-[0.3125rem] bg-section px-[1.625rem] py-[0.8125rem]">
            <p className="whitespace-nowrap text-center font-roboto text-[1.25rem] font-bold leading-[1.25rem] text-subheading-orange">
              Visual &amp; UI/UX Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
