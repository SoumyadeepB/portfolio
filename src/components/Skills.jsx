import { useInView } from '../hooks/useInView'

const SKILL_CATEGORIES = [
  {
    title: 'Programming & Version Control',
    skills: ['Python', 'Java', 'C', 'Matlab', 'GitHub', 'Bitbucket'],
  },
  {
    title: 'Web & Databases',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'NodeJS',
      'ReactJS',
      'Docker',
      'Oracle',
      'MySQL',
    ],
  },
  {
    title: 'ML / Agentic AI',
    skills: [
      'PyTorch',
      'NumPy',
      'Pandas',
      'matplotlib',
      'LangChain',
      'LangGraph',
    ],
  },
  {
    title: 'Project Management',
    skills: [
      'Jira',
      'Confluence',
      'Microsoft 365',
      'Kanban',
      'Scrum',
    ],
  },
  {
    title: 'Languages',
    skills: ['English (C2)', 'German (A2)', 'Spanish (A1)', 'Bengali (Native)', 'Hindi (Native)'],
  },
]

export default function Skills() {
  const [headingRef, headingVisible] = useInView()

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className={`text-3xl md:text-4xl font-bold text-center mb-16 fade-in ${headingVisible ? 'visible' : ''}`}
        >
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard key={i} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category, index }) {
  const [ref, visible] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 h-full hover:border-accent-blue/20 transition-all duration-300">
        <h3 className="text-sm font-semibold text-accent-blue/80 mb-3">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs text-slate-300 bg-slate-800/80 rounded-full border border-slate-700/50 hover:border-accent-green/30 hover:text-accent-green transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
