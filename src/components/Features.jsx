import { Sparkles, Mic, Waveform, Bot, Shield, Gauge } from "lucide-react";

const items = [
  {
    icon: <Mic className="h-5 w-5" />, 
    title: "Realtime voice",
    desc: "Low-latency streaming in and out, feels natural and fast."
  },
  {
    icon: <Waveform className="h-5 w-5" />, 
    title: "Adaptive tone",
    desc: "Tunable persona and prosody that learns from examples."
  },
  {
    icon: <Bot className="h-5 w-5" />, 
    title: "Agent tools",
    desc: "Knowledge, actions, and guardrails to accomplish tasks."
  },
  {
    icon: <Gauge className="h-5 w-5" />, 
    title: "Analytics",
    desc: "Intent detection, turn-taking, and success metrics built-in."
  },
  {
    icon: <Shield className="h-5 w-5" />, 
    title: "Privacy-first",
    desc: "Encrypted transport and data retention controls."
  },
  {
    icon: <Sparkles className="h-5 w-5" />, 
    title: "Beautiful UI",
    desc: "A calm, modern canvas designed for focus and flow."
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Craft conversations that feel human</h2>
          <p className="mt-3 text-slate-300">Everything you need to prototype, test, and iterate on AI voice experiences.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-all">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 text-white grid place-items-center">
                {it.icon}
              </div>
              <h3 className="mt-4 text-white font-medium">{it.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
