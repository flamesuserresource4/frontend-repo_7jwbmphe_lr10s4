import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
              <Sparkles className="h-5 w-5 text-fuchsia-300" />
            </div>
          </div>
          <span className="text-white/90 text-lg font-semibold tracking-tight">
            Auralynx
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-slate-300 hover:text-white transition-colors">How it works</a>
          <a href="/call" className="text-slate-300 hover:text-white transition-colors">Try the Call</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="/call" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition-colors">
            Launch demo
          </a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
