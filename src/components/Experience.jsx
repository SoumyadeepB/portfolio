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
      'Developed agentic AI workflows integrated with ERP systems to automate CRM, quotation, invoicing, and support operations.',
      'Architected secure and scalable AI infrastructure on AWS with privacy-compliant cloud deployments.',
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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className={`text-3xl md:text-4xl font-bold text-center mb-16 fade-in ${headingVisible ? 'visible' : ''}`}
        >
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-6">
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
      <div className="group relative bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/5">
        {!item.endDate && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-medium text-accent-green">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            Current
          </span>
        )}

        <div className="flex items-start gap-5">
          <img
            src={`${BASE}assets/${item.logo}`}
            alt={item.company}
            className="w-20 h-20 rounded-xl object-contain bg-white shrink-0"
          />
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {item.company}
            </h3>
            <p className="text-accent-blue/80 text-sm mt-0.5">{item.role}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-sm text-slate-500">
              <span>{formatPeriod(item.startDate, item.endDate)}</span>
              <span className="text-slate-700">·</span>
              <span>{formatDuration(item.startDate, item.endDate)}</span>
              <span className="text-slate-700">·</span>
              <span>{item.location}</span>
            </div>

            {item.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-slate-400 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-slate-700"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
