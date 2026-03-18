export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Soumyadeep Bhattacharjee. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/SoumyadeepB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-green transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/soumyadeepb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-green transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
