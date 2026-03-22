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
    <section id="achievements" className="section-block">
      <div className="section-wrap">
        <div
          ref={headingRef}
          className={`fade-in ${headingVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Awards</span>
          <div className="section-heading-row">
            <h2 className="section-title">Recognition across AI and systems-focused work.</h2>
            <p className="section-intro">
              Selected from global competitions and scholarship programs in
              edge AI and enterprise systems — recognized among thousands of
              students across 120+ countries.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
        className="group block h-full overflow-hidden card-surface !p-0"
      >
        {item.image && (
          <div className="achievement-img-wrap">
            <img
              src={`${BASE}assets/${item.image}`}
              alt={item.title}
              className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="achievement-title">{item.title}</h3>
          </div>
          <span className="card-meta-upper">{item.year}</span>
          <p className="achievement-desc">{item.description}</p>
          {item.url && (
            <span className="achievement-link">
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
