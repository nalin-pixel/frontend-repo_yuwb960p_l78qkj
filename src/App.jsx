import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_20%,#f5f7ff_60%,#ffffff_100%)] text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Showcase />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-white/60 py-10 backdrop-blur-xl dark:bg-black/40">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Basting Solutions — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Terms</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
