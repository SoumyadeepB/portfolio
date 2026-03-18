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
    <section id="education" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-green/60 via-accent-blue/40 to-transparent" />

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
    <h2
      ref={ref}
      className={`text-3xl md:text-4xl font-bold text-center mb-16 fade-in ${visible ? 'visible' : ''}`}
    >
      <span className="gradient-text">{title}</span>
    </h2>
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
      <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 -translate-x-1/2 mt-6 rounded-full bg-accent-green shadow-lg shadow-accent-green/30 z-10 ring-4 ring-slate-950" />

      <div
        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
        }`}
      >
        <div className="group bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 hover:border-accent-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-green/5">
          <div className="flex items-start gap-4">
            <img
              src={`${BASE}assets/${item.logo}`}
              alt={item.institution}
              className="w-16 h-16 rounded-xl object-contain bg-white shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                {item.institution}
              </h3>
              <p className="text-accent-green/80 text-sm mt-0.5">
                {item.degree}
              </p>
              <p className="text-slate-500 text-sm mt-1">{item.period}</p>
              {item.courses && (
                <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                  <span className="text-slate-500">Key courses:</span>{' '}
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
