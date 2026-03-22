import { useInView } from '../hooks/useInView'

const BASE = import.meta.env.BASE_URL

const EDUCATION = [
  {
    institution: 'Universität Stuttgart',
    degree: 'M.Sc. Computer Science',
    period: 'Oct 2018 – Aug 2021',
    logo: 'UniStuttgartLogo.png',
    courses:
      'Math for Intelligent Systems, Computer Vision, Machine Learning, Deep Learning for Speech, Embedded Systems, Reinforcement Learning',
  },
  {
    institution: 'West Bengal University of Technology',
    degree: 'B.Tech. in Computer Science',
    period: 'Aug 2013 – Jul 2017',
    logo: 'WBUT.png',
    courses:
      'Design & Analysis of Algorithms, Formal Languages & Automata Theory, Computer Networks, DBMS, Computer Architecture, Operating Systems, Discrete Mathematics, OOP',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-block">
      <div className="section-wrap">
        <SectionHeading title="Education" />

        <div className="relative mt-12">
          <div className="timeline-line" />

          {EDUCATION.map((edu, i) => (
            <TimelineItem key={i} item={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ title }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? 'visible' : ''}`}
    >
      <span className="section-eyebrow">{title}</span>
      <div className="section-heading-row">
        <h2 className="section-title">Foundations in computer science, ML, and systems thinking.</h2>
        <p className="section-intro">
          M.Sc. in Computer Science from Universität Stuttgart with a focus on
          intelligent systems and deep learning, built on a B.Tech. foundation
          in algorithms and systems architecture.
        </p>
      </div>
    </div>
  )
}

function TimelineItem({ item, index }) {
  const [ref, visible] = useInView(0.1)
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-12 md:mb-16 fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-dot" />

      <div
        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
        }`}
      >
        <div className="card-surface p-5">
          <div className="flex items-start gap-4">
            <img
              src={`${BASE}assets/${item.logo}`}
              alt={item.institution}
              className="card-logo"
            />
            <div className="min-w-0">
              <h3 className="card-heading !text-base md:!text-lg !mt-0">{item.institution}</h3>
              <p className="card-subtext">{item.degree}</p>
              <p className="card-meta-upper mt-1">{item.period}</p>
              {item.courses && (
                <p className="card-courses">
                  <span className="card-courses-label">Key courses:</span>{' '}
                  {item.courses}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
