import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen antialiased app-surface">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
