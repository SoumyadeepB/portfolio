import { useState, useEffect, useCallback, useRef } from 'react'
import { useInView } from '../hooks/useInView'

const PROJECTS = [
  {
    slug: 'rag-platform',
    file: '~/projects/genai-rag-platform.ts',
    title: 'Generative AI & RAG Platform',
    category: 'Production AI System',
    summary:
      'Core platform contributing ~90% of the initial production codebase across ML systems, backend, and frontend — retrieval pipelines, orchestration layers, and integrations for scalable AI applications.',
    stack: ['Python', 'AWS', 'RAG', 'LLM Ops', 'WandB', 'LangSmith'],
    log: [
      'Designed the initial production codebase and shipped the first end-to-end platform foundation.',
      'Connected retrieval, orchestration, and frontend workflows into a single operator-ready system.',
      'Established experimentation and observability practices using Weights & Biases and LangSmith.',
    ],
  },
  {
    slug: 'agentic-erp',
    file: '~/projects/agentic-erp-workflows.yaml',
    title: 'Agentic ERP Workflows',
    category: 'Automation Infrastructure',
    summary:
      'Autonomous AI workflows integrated with ERP systems, automating CRM, quotation, invoicing, and customer support for SME clients using memory-augmented architectures.',
    stack: ['LangChain', 'LangGraph', 'mem0', 'ERP', 'Automation'],
    log: [
      'Mapped business operations into agentic flows with clear tool boundaries.',
      'Integrated operational systems to reduce repetitive back-office work for SME clients.',
      'Balanced automation with reliability, traceability, and user trust.',
    ],
  },
  {
    slug: 'on-device-ml',
    file: '~/projects/on-device-ml-optimization.py',
    title: 'On-Device ML & Model Optimization',
    category: 'Edge AI / MLOps',
    summary:
      'End-to-end pipelines to convert and optimize PyTorch models into Core ML for low-latency, resource-efficient inference on Apple hardware (CPU, GPU, Neural Engine).',
    stack: ['PyTorch', 'Core ML', 'Apache TVM', 'Quantization'],
    log: [
      'Designed and deployed ML models for on-device inference across iOS and macOS environments.',
      'Led model optimization — quantization, pruning, graph-level transformations — reducing memory footprint.',
      'Compiled and autotuned small language models (SLMs) on-device using Apache TVM.',
      'Built secure deployment workflows with model encryption for IP protection.',
    ],
  },
  {
    slug: 'federated-learning',
    file: '~/projects/federated-learning-poc.py',
    title: 'Federated Learning PoC',
    category: 'Privacy-Preserving AI',
    summary:
      'Proof-of-concept for privacy-preserving on-device ML using federated learning, contributing to securing German R&D funding (Forschungszulage).',
    stack: ['Python', 'PyTorch', 'Federated Learning', 'Privacy'],
    log: [
      'Developed federated learning proof-of-concepts for privacy-preserving on-device ML.',
      'Contributed to securing German R&D funding through technical demonstrations.',
      'Represented the company at research conferences on privacy-preserving AI and document intelligence.',
    ],
  },
  {
    slug: 'voice-cloning',
    file: '~/research/zero-shot-voice-cloning.ipynb',
    title: 'Zero-Shot Voice Cloning',
    category: 'Deep Learning Research · Sony R&D',
    summary:
      'Algorithm to simulate a target speaker\'s voice in a zero-shot setting using only a few seconds of untranscribed speech — developed as a Master Thesis at Sony R&D Center Europe.',
    stack: ['PyTorch', 'Speech Synthesis', 'Deep Learning'],
    log: [
      'Explored robust speaker representation with extremely small sample windows.',
      'Focused on signal quality, generalization, and speaker identity preservation.',
      'Delivered as a completed Master Thesis at Universität Stuttgart.',
    ],
  },
]

export default function Projects() {
  const [headingRef, headingVisible] = useInView()
  const [active, setActive] = useState(0)
  const shellRef = useRef(null)
  const [shellFocused, setShellFocused] = useState(false)

  const navigate = useCallback(
    (dir) => setActive((prev) => Math.max(0, Math.min(PROJECTS.length - 1, prev + dir))),
    [],
  )

  useEffect(() => {
    if (!shellFocused) return
    const onKey = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault()
        navigate(-1)
      } else if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault()
        navigate(1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [shellFocused, navigate])

  const project = PROJECTS[active]

  return (
    <section id="projects" className="section-block">
      <div className="section-wrap">
        <div
          ref={headingRef}
          className={`fade-in ${headingVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Selected Projects</span>
          <div className="section-heading-row">
            <h2 className="section-title">From research prototypes to production AI platforms.</h2>
            <p className="section-intro section-intro-tight">
              End-to-end systems spanning retrieval pipelines, agentic
              automation, on-device inference, and privacy-preserving ML —
              built for real business impact.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div
            ref={shellRef}
            className="terminal-shell"
            tabIndex={0}
            onFocus={() => setShellFocused(true)}
            onBlur={() => setShellFocused(false)}
            role="application"
            aria-label="Interactive project browser. Use arrow keys to navigate."
          >
            {/* Top bar */}
            <div className="terminal-topbar">
              <div className="terminal-dots" aria-hidden="true">
                <span /><span /><span />
              </div>
              <span className="terminal-path">~/projects</span>
              <span className="terminal-hint">
                {shellFocused ? '↑↓ navigate' : 'click to focus'}
              </span>
            </div>

            <div className="terminal-shell-body">
              {/* Left: file browser sidebar */}
              <nav className="terminal-sidebar" aria-label="Project list">
                <div className="terminal-sidebar-header">
                  <span className="terminal-prompt">$</span>
                  <span>ls projects/</span>
                  <span className="terminal-cursor" aria-hidden="true" />
                </div>
                <ul className="terminal-file-list">
                  {PROJECTS.map((p, i) => (
                    <li key={p.slug}>
                      <button
                        className={`terminal-file-item ${i === active ? 'terminal-file-active' : ''}`}
                        onClick={() => setActive(i)}
                        aria-current={i === active ? 'true' : undefined}
                      >
                        <span className="terminal-file-arrow" aria-hidden="true">
                          {i === active ? '▸' : '\u00A0'}
                        </span>
                        <span className="terminal-file-name">{p.file.split('/').pop()}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right: project detail */}
              <div className="terminal-detail" key={project.slug}>
                <div className="terminal-command">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-typing">cat {project.file}</span>
                </div>

                <div className="terminal-detail-content">
                  <p className="terminal-label">{project.category}</p>
                  <h3 className="terminal-title">{project.title}</h3>
                  <p className="terminal-summary">{project.summary}</p>

                  <div className="terminal-detail-meta">
                    <div>
                      <p className="terminal-label">Stack</p>
                      <div className="terminal-tags">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="terminal-label">Build Notes</p>
                      <ul className="terminal-log">
                        {project.log.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="terminal-statusbar">
              <span>{active + 1}/{PROJECTS.length}</span>
              <span className="terminal-statusbar-file">{project.file}</span>
              <span>{project.category}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
