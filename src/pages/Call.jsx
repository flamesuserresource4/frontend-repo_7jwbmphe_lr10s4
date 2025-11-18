import { useEffect, useRef, useState } from 'react'
import { Mic, Phone, Sparkles, Volume2 } from 'lucide-react'

export default function Call() {
  const [status, setStatus] = useState('Idle')
  const [isMuted, setIsMuted] = useState(false)
  const [transcript, setTranscript] = useState([])
  const localAudio = useRef(null)
  const remoteAudio = useRef(null)

  useEffect(() => {
    // Placeholder for hooking in your real-time voice SDK
    setStatus('Ready')
  }, [])

  const toggleMute = () => setIsMuted(v => !v)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative max-w-6xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
                <Sparkles className="h-5 w-5 text-fuchsia-300" />
              </div>
            </div>
            <span className="text-white/90 text-lg font-semibold tracking-tight">Auralynx</span>
          </div>
          <span className="text-sm text-slate-400">Status: {status}</span>
        </header>

        <main className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          {/* Visualizer card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_30%,rgba(124,58,237,0.25),transparent_60%)]" />
            <div className="relative p-8">
              <h2 className="text-xl font-medium text-white/90">AI Aura</h2>
              <p className="text-slate-300 text-sm mt-1">Speak naturally. The agent responds in realtime.</p>
              <div className="mt-8 aspect-square rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 grid place-items-center">
                <div className={`h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 blur-2xl opacity-60`}></div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-medium">
                  <Phone className="h-4 w-4" /> Start Call
                </button>
                <button onClick={toggleMute} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10">
                  <Mic className="h-4 w-4" /> {isMuted ? 'Unmute' : 'Mute'}
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10">
                  <Volume2 className="h-4 w-4" /> Speaker
                </button>
              </div>

              <audio ref={localAudio} className="hidden" autoPlay muted={isMuted} />
              <audio ref={remoteAudio} className="hidden" autoPlay />
            </div>
          </div>

          {/* Transcript card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur p-8">
            <h2 className="text-xl font-medium text-white/90">Live transcript</h2>
            <div className="mt-4 space-y-4 max-h-[60vh] overflow-auto pr-2">
              {transcript.length === 0 ? (
                <p className="text-slate-400 text-sm">No messages yet. Start the call to see the dialogue appear here.</p>
              ) : (
                transcript.map((t, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className={`h-6 w-6 rounded-full ${t.role === 'user' ? 'bg-cyan-500' : 'bg-fuchsia-500'}`} />
                    <div className="max-w-[85%]">
                      <p className="text-xs uppercase tracking-wide text-slate-400">{t.role}</p>
                      <p className="text-slate-200 leading-relaxed">{t.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
