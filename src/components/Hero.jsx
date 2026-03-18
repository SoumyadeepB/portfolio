import { TypeAnimation } from 'react-type-animation'

const BASE = import.meta.env.BASE_URL

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    url: 'https://github.com/SoumyadeepB',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/soumyadeepb',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    url: 'mailto:soumyadeep.bh1994@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(42,245,152,0.07)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,158,253,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 text-center px-6">
        <div className="mb-8 inline-block">
          <img
            src={`${BASE}assets/GitHub.jpg`}
            alt="Soumyadeep Bhattacharjee"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full mx-auto object-cover ring-4 ring-accent-green/20 shadow-2xl shadow-accent-green/10 transition-transform duration-500 hover:scale-105"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
          <span className="gradient-text">Soumyadeep Bhattacharjee</span>
        </h1>

        <p className="text-slate-400 text-sm md:text-base mb-6 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Munich, Germany
        </p>

        <div className="text-xl md:text-3xl text-slate-300 h-12 font-light">
          <TypeAnimation
            sequence={[
              'Founding Engineer',
              2000,
              'AI/ML Engineer',
              2000,
              'Full-Stack Builder',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="max-w-xl mx-auto text-slate-500 text-sm md:text-base mt-8 leading-relaxed">
          5+ years leading end-to-end Generative AI initiatives, translating
          business needs into production-ready AI solutions.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              className="text-slate-500 hover:text-accent-green transition-colors duration-200 p-2 rounded-xl hover:bg-slate-800/50"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
