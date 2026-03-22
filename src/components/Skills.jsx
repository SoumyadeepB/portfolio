import { useInView } from '../hooks/useInView'

const SI = (slug) => `https://cdn.simpleicons.org/${slug}`
const DI = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`
const AWS = (cat, name) => `https://icon.icepanel.io/AWS/svg/${cat}/${name}.svg`
const FLAG = (code) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${code}.svg`

const ICON_MAP = {
  'Python':           SI('python'),
  'Java':             SI('openjdk'),
  'C':                SI('c'),
  'Matlab':           DI('matlab'),
  'GitHub':           SI('github'),
  'Bitbucket':        SI('bitbucket'),
  'HTML':             SI('html5'),
  'CSS':              DI('css3'),
  'JavaScript':       SI('javascript'),
  'NodeJS':           SI('nodedotjs'),
  'ReactJS':          SI('react'),
  'Docker':           SI('docker'),
  'Oracle':           DI('oracle'),
  'MySQL':            SI('mysql'),
  'PyTorch':          SI('pytorch'),
  'LangChain':        SI('langchain'),
  'LangGraph':        SI('langchain'),
  'Core ML':          SI('apple'),
  'Apache TVM':       SI('apache'),
  'Weights & Biases': SI('weightsandbiases'),
  'LangSmith':        SI('langchain'),
  'AWS Lambda':       AWS('Compute', 'Lambda'),
  'EC2':              AWS('Compute', 'EC2'),
  'S3':               AWS('Storage', 'Simple-Storage-Service'),
  'DynamoDB':         AWS('Database', 'DynamoDB'),
  'API Gateway':      AWS('App-Integration', 'API-Gateway'),
  'SageMaker':        AWS('Machine-Learning', 'SageMaker'),
  'CloudWatch':       AWS('Management-Governance', 'CloudWatch'),
  'Jira':             SI('jira'),
  'Confluence':       SI('confluence'),
  'Microsoft 365':    DI('windows11'),
  'English (C2)':     FLAG('1f1ec-1f1e7'),
  'German (A2)':      FLAG('1f1e9-1f1ea'),
  'Spanish (A1)':     FLAG('1f1ea-1f1f8'),
  'Bengali (Native)': FLAG('1f1ee-1f1f3'),
  'Hindi (Native)':   FLAG('1f1ee-1f1f3'),
}

const SKILL_CATEGORIES = [
  {
    title: 'Programming & Version Control',
    skills: ['Python', 'Java', 'C', 'Matlab', 'GitHub', 'Bitbucket'],
  },
  {
    title: 'Web & Databases',
    skills: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ReactJS', 'Docker', 'Oracle', 'MySQL'],
  },
  {
    title: 'ML / Agentic AI',
    skills: ['PyTorch', 'LangChain', 'LangGraph', 'mem0', 'deepagents', 'Core ML', 'Apache TVM'],
  },
  {
    title: 'Logging & Observability',
    skills: ['Weights & Biases', 'LangSmith'],
  },
  {
    title: 'Cloud & MLOps',
    skills: ['AWS Lambda', 'EC2', 'S3', 'DynamoDB', 'API Gateway', 'SageMaker', 'CloudWatch', 'Docker'],
  },
  {
    title: 'Project Management',
    skills: ['Jira', 'Confluence', 'Microsoft 365', 'Kanban', 'Scrum'],
  },
  {
    title: 'Languages',
    skills: ['English (C2)', 'German (A2)', 'Spanish (A1)', 'Bengali (Native)', 'Hindi (Native)'],
  },
]

export default function Skills() {
  const [headingRef, headingVisible] = useInView()

  return (
    <section id="skills" className="section-block section-block-lined">
      <div className="section-wrap">
        <div
          ref={headingRef}
          className={`fade-in ${headingVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Capabilities</span>
          <div className="section-heading-row">
            <h2 className="section-title">Tooling, languages, and execution range.</h2>
            <p className="section-intro">
              Full-stack across ML systems, cloud infrastructure, and
              product delivery — from PyTorch and LangGraph to AWS and
              on-device optimization.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      className={`fade-in h-full ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="card-surface p-5 h-full">
        <h3 className="skill-cat-title">{category.title}</h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span
              key={skill}
              className={`skill-tag skill-tag-stagger ${visible ? 'skill-tag-visible' : ''}`}
              style={{ transitionDelay: visible ? `${index * 80 + i * 35}ms` : '0ms' }}
            >
              {ICON_MAP[skill] && (
                <img
                  src={ICON_MAP[skill]}
                  alt=""
                  className={`skill-icon ${ICON_MAP[skill].includes('icepanel') || ICON_MAP[skill].includes('devicon') || ICON_MAP[skill].includes('twemoji') ? 'skill-icon-color' : ''}`}
                  loading="lazy"
                />
              )}
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
