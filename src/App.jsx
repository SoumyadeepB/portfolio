import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
