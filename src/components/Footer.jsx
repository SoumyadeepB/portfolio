export default function Footer() {
  return (
    <footer className="footer-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Soumyadeep Bhattacharjee.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SoumyadeepB"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/soumyadeepb"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href="#hero" className="footer-top-link" aria-label="Back to top">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
