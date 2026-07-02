import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          MANTIS
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-5 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Log In
          </Link>
          <Link href="/register" className="px-5 py-2 text-sm font-medium bg-white text-zinc-950 rounded-full hover:bg-zinc-200 transition-all active:scale-95">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Now accepting expert applications
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1]">
          Stop guessing, <br/>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            start talking.
          </span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl">
          Connect instantly with vetted industry veterans and PhD researchers. Get the 1-on-1 mentorship you need to break through your blockers.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/register?role=LEARNER" className="px-8 py-4 text-base font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all active:scale-95 shadow-[0_0_40px_rgba(79,70,229,0.3)]">
            Find a Mentor
          </Link>
          <Link href="/register?role=EXPERT" className="px-8 py-4 text-base font-medium glass-panel text-white rounded-full hover:bg-white/10 transition-all active:scale-95">
            Apply as an Expert
          </Link>
        </div>
      </main>
    </div>
  );
}
