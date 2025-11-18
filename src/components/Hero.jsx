import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_80%,rgba(249,115,22,0.18),transparent_60%)]" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          >
            Train AI voice agents through conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-lg sm:text-xl text-slate-300 max-w-xl"
          >
            A futuristic, minimal interface to design, test, and refine natural voice interactions. Powered by real-time AI and beautiful motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="/call" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-white font-medium shadow-xl shadow-fuchsia-500/20">
              Start a call
            </a>
            <a href="#features" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur border border-white/10">
              Explore features
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-slate-300">
            <div className="h-[1px] w-10 bg-slate-600" />
            <span className="text-sm">Minimal. Futuristic. Real-time.</span>
          </div>
        </div>

        <div className="lg:col-span-6" />
      </div>

      {/* soft overlay so Spline stays interactive but text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/0 to-slate-950/60" />
    </section>
  );
}
