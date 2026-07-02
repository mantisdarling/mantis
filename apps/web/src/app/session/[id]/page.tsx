import Link from 'next/link';

export default function SessionPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen bg-zinc-950 flex flex-col overflow-hidden text-zinc-100">
      {/* Session Header */}
      <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-900/50">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            MANTIS
          </Link>
          <div className="h-4 w-[1px] bg-zinc-700" />
          <span className="text-sm font-medium">Session with Dr. Sarah Chen</span>
          <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold flex items-center gap-1.5 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            LIVE
          </span>
        </div>
        <div className="text-zinc-400 font-mono text-sm">
          45:12
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Video Area */}
        <div className="flex-1 flex flex-col p-4 gap-4 relative">
          <div className="flex-1 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative shadow-2xl flex items-center justify-center">
            {/* Main Video Stream Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex flex-col items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg shadow-indigo-500/30">
                SC
              </div>
              <span className="text-lg font-medium">Dr. Sarah Chen</span>
              <span className="text-sm text-zinc-400">Speaking...</span>
            </div>
            
            {/* Self Video PIP */}
            <div className="absolute bottom-6 right-6 w-48 aspect-video bg-zinc-800 rounded-lg border-2 border-zinc-700 overflow-hidden shadow-xl flex items-center justify-center">
              <span className="text-zinc-500 text-sm">You</span>
            </div>
          </div>

          {/* Controls */}
          <div className="h-20 glass-panel rounded-2xl flex items-center justify-center gap-4 px-6">
            <button className="h-12 w-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </button>
            <button className="h-12 w-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
            <button className="h-12 px-6 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors text-white font-bold tracking-wide shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              End Session
            </button>
          </div>
        </div>

        {/* Sidebar (Chat / Notes) */}
        <div className="w-80 border-l border-zinc-800 bg-zinc-900/50 flex flex-col">
          <div className="h-12 border-b border-zinc-800 flex">
            <button className="flex-1 font-medium text-sm text-indigo-400 border-b-2 border-indigo-500">Chat</button>
            <button className="flex-1 font-medium text-sm text-zinc-400 hover:text-zinc-200">Notes</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {/* Messages */}
            <div className="bg-zinc-800/50 p-3 rounded-lg rounded-tl-none self-start max-w-[85%] border border-zinc-700/50">
              <p className="text-xs text-indigo-400 font-medium mb-1">Dr. Sarah Chen</p>
              <p className="text-sm">Hi Alice, could you share the link to your architecture diagram?</p>
            </div>
            <div className="bg-indigo-600 p-3 rounded-lg rounded-tr-none self-end max-w-[85%]">
              <p className="text-sm">Sure, pulling it up right now!</p>
            </div>
          </div>
          
          <div className="p-4 border-t border-zinc-800">
            <input 
              type="text" 
              placeholder="Type a message..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
