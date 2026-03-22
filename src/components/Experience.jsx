import { useInView } from '../hooks/useInView'

const BASE = import.meta.env.BASE_URL

const EXPERIENCE = [
  {
    company: 'Knowlix GmbH',
    location: 'Munich, Germany',
    role: 'Founding Engineer, AI/ML',
    startDate: new Date('2021-10-01'),
    endDate: null,
    logo: 'knowlix.png',
    highlights: [
      'Built the core Generative AI & RAG platform, contributing ~90% of the initial production codebase across ML systems, backend, and frontend.',
      'Worked directly with the CEO and CTO, both experienced startup founders with extensive Silicon Valley backgrounds.',
      'Participated in client discovery calls with SME companies in Germany and the US to evaluate AI integration opportunities within ERP workflows.',
      'Developed agentic AI workflows integrated with ERP systems to automate CRM, quotation, invoicing, and support operations.',
      'Designed and deployed ML models for on-device inference across iOS and macOS, optimizing with quantization, pruning, and Apache TVM.',
      'Architected secure and scalable AI infrastructure on AWS, collaborating with AWS engineers for privacy-compliant deployments.',
      'Developed federated learning proof-of-concepts for privacy-preserving on-device ML, contributing to securing German R&D funding.',
      'Supported the company\'s strategic pivot from B2C to B2B, developing solution PoCs and technical decks for VC fundraising.',
      'Led technical hiring and mentoring, interviewing 50+ candidates across ML, frontend, and full-stack roles.',
    ],
  },
  {
    company: 'Sony R&D Center Europe',
    location: 'Stuttgart, Germany',
    role: 'Master Thesis — Deep Learning for Voice Cloning',
    startDate: new Date('2020-11-01'),
    endDate: new Date('2021-04-01'),
    logo: 'Sony.svg',
    highlights: [
      'Developed an algorithm to artificially simulate the voice of a target speaker in a zero-shot setting using a few seconds of untranscribed speech.',
    ],
  },
  {
    company: 'Fraunhofer IPA',
    location: 'Stuttgart, Germany',
    role: 'Student Assistant — Software Developer',
    startDate: new Date('2019-05-01'),
    endDate: new Date('2020-06-01'),
    logo: 'Fraunhofer.png',
    highlights: [
      'Worked for a start-up initiative developing an Intelligent Operator Assistant and a PoC Anomaly Detection Tool.',
      'Contributed to full-stack web development for a Crowd-Engineering Robotics platform.',
    ],
  },
  {
    company: 'Nomura Research Institute',
    location: 'India',
    role: 'Software Engineer',
    startDate: new Date('2017-08-01'),
    endDate: new Date('2018-01-01'),
    logo: 'NRI.png',
    highlights: [
      'Contributed to the development of a broker back-office software for OpenMarkets, a technology vendor to the Australian Capital Market.',
    ],
  },
]

function formatDuration(start, end) {
  const to = end || new Date()
  const months =
    (to.getFullYear() - start.getFullYear()) * 12 +
    (to.getMonth() - start.getMonth()) +
    1
  const years = Math.floor(months / 12)
  const rem = months % 12

  if (years > 0 && rem > 0) {
    return `${years} yr${years > 1 ? 's' : ''} ${rem} mo`
  }
  if (years > 0) {
    return `${years} yr${years > 1 ? 's' : ''}`
  }
  return `${rem} mo`
}

function formatPeriod(start, end) {
  const fmt = (d) =>
    d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  return `${fmt(start)} – ${end ? fmt(end) : 'Present'}`
}

export default function Experience() {
  const [headingRef, headingVisible] = useInView()

  return (
    <section id="experience" className="section-block section-block-lined">
      <div className="section-wrap">
        <div
          ref={headingRef}
          className={`fade-in ${headingVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Experience</span>
          <div className="section-heading-row">
            <h2 className="section-title">Built across startups, research labs, and enterprise delivery.</h2>
            <p className="section-intro">
              From founding a VC-backed AI startup working with Silicon Valley
              leadership, to deep learning research at Sony and Fraunhofer,
              to enterprise software at Nomura.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={i} item={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ item, index }) {
  const [ref, visible] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card-surface">
        {!item.endDate && (
          <span className="card-badge">
            <span className="card-badge-dot" />
            Current
          </span>
        )}

        <div className="flex items-start gap-5">
          <img
            src={`${BASE}assets/${item.logo}`}
            alt={item.company}
            className="card-logo"
          />
          <div className="min-w-0">
            <p className="card-meta-upper">{item.location}</p>
            <h3 className="card-heading">{item.company}</h3>
            <p className="card-subtext">{item.role}</p>
            <div className="card-date-row">
              <span>{formatPeriod(item.startDate, item.endDate)}</span>
              <span className="card-date-sep">·</span>
              <span>{formatDuration(item.startDate, item.endDate)}</span>
            </div>

            {item.highlights.length > 0 && (
              <ul className="card-highlights">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
