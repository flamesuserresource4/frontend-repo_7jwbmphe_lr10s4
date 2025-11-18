import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 p-8 sm:p-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative grid gap-6 sm:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to try a conversation?</h3>
              <p className="mt-3 text-slate-200">Open the live call interface and talk to the agent in your browser.</p>
            </div>
            <div className="sm:justify-self-end">
              <a href="/call" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow">
                Launch the call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
