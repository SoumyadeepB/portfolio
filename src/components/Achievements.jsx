import { useInView } from '../hooks/useInView'

const BASE = import.meta.env.BASE_URL

const ACHIEVEMENTS = [
  {
    title: 'Intel® Edge AI Scholarship',
    year: '2019',
    image: 'IntelScholarship.jpg',
    description:
      'Scholarship recipient — Intel® Edge AI Scholarship Program.',
  },
  {
    title: 'IBM Master the Mainframe — Winner from Europe',
    year: '2018',
    image: 'MTM.png',
    description:
      'Winner from Europe out of 18,000 students globally from over 120 countries.',
    url: 'https://techchannel.com/master-the-mainframe/a-closer-look-at-the-2018-master-the-mainframe-winners/#:~:text=Soumyadeep%20Bhattacharjee%20is%20a%20typical%20example%3A%20A%20master%E2%80%99s%20student%20at%20the%20University%20of%20Stuttgart%20in%20Germany%2C%20he%20is%20planning%20a%20career%20as%20a%20researcher%20in%20the%20field%20of%20artificial%20intelligence%20(AI)%20and%20other%20%E2%80%9Cfuturistic%20technologies.%E2%80%9D',
  },
  {
    title: 'IBM Master the Mainframe — Ranked 3rd from India',
    year: '2016',
    image: null,
    description: 'Ranked 3rd from India in the IBM Master the Mainframe Contest.',
  },
]

export default function Achievements() {
  const [headingRef, headingVisible] = useInView()

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className={`text-3xl md:text-4xl font-bold text-center mb-16 fade-in ${headingVisible ? 'visible' : ''}`}
        >
          <span className="gradient-text">Certifications & Awards</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ item, index }) {
  const [ref, visible] = useInView(0.1)

  const Wrapper = item.url ? 'a' : 'div'
  const linkProps = item.url
    ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Wrapper
        {...linkProps}
        className="group block h-full bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-accent-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-green/5"
      >
        {item.image && (
          <div className="aspect-video bg-slate-800/50 overflow-hidden">
            <img
              src={`${BASE}assets/${item.image}`}
              alt={item.title}
              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold text-white group-hover:text-accent-green transition-colors leading-snug">
              {item.title}
            </h3>
          </div>
          <span className="text-accent-green/60 text-xs">{item.year}</span>
          <p className="text-slate-500 text-xs mt-2 leading-relaxed">
            {item.description}
          </p>
          {item.url && (
            <span className="inline-flex items-center gap-1 text-accent-green/70 text-xs mt-3 group-hover:text-accent-green transition-colors">
              View details
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          )}
        </div>
      </Wrapper>
    </div>
  )
}
