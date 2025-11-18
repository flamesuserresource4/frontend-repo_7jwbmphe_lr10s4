import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen relative bg-slate-950">
      {/* starry subtle texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_80%,rgba(56,189,248,0.10),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Auralynx. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white">Features</a>
            <a href="/call" className="text-slate-300 hover:text-white">Call demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App