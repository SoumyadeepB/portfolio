import { useRef, useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    url: 'https://github.com/SoumyadeepB',
    color: '#181717',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/soumyadeepb',
    color: '#0A66C2',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    url: 'mailto:soumyadeep.bh1994@gmail.com',
    color: '#EA4335',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

const HERO_WORDS = 'Turning complex business challenges into production-ready AI systems.'.split(' ')

export default function Hero() {
  const portraitRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="hero-block">
      <div className="section-wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="section-eyebrow">Founding Engineer · AI/ML</span>
            <h1 className="hero-title">
              {HERO_WORDS.map((word, i) => (
                <span
                  key={i}
                  className="hero-word"
                  style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="hero-summary">
              I am Soumyadeep Bhattacharjee — 5+ years leading end-to-end
              Generative AI initiatives, from retrieval pipelines and agentic
              workflows to on-device ML and privacy-preserving deployments.
              Founding engineer at a VC-backed AI startup, working directly
              with executive leadership.
            </p>
          </div>

          <aside className="hero-side">
            <div
              ref={portraitRef}
              className="hero-portrait-frame"
              style={{ transform: `translateY(${offset * 0.04}px)` }}
            >
              <img
                src={`${BASE}assets/GitHub.jpg`}
                alt="Soumyadeep Bhattacharjee"
                className="hero-portrait"
              />
            </div>

            <div className="hero-side-socials">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={link.label}
                  className="hero-social-icon"
                  style={{ '--icon-color': link.color }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </aside>
        </div>

        <div className="hero-details">
          <div className="hero-meta">
            <div>
              <span className="hero-meta-label">Based in</span>
              <p>Munich, Germany</p>
            </div>
            <div>
              <span className="hero-meta-label">Focus</span>
              <p>Generative AI, Agentic Systems, MLOps</p>
            </div>
            <div>
              <span className="hero-meta-label">Experience</span>
              <p>5+ years across startups, research labs, and enterprise AI</p>
            </div>
          </div>

          <div className="hero-note">
            <p className="hero-note-label">Approach</p>
            <p className="hero-note-text">
              Translate business needs into measurable AI solutions —
              collaborating with cross-cultural teams and managing delivery
              of enterprise systems end-to-end.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href="#projects" className="monastic-button monastic-button-primary">
            View selected projects
          </a>
          <a href="#experience" className="monastic-button">
            Read experience
          </a>
        </div>

        <div className="hero-baseline">
          <div className="baseline-rule" />
          <p>
            Engineering depth. Product judgment. Quiet execution.
          </p>
        </div>
      </div>
    </section>
  )
}
