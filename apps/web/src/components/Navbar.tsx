import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full glass-panel sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          MANTIS
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/dashboard" className="text-zinc-100 hover:text-indigo-400 transition-colors">Find Experts</Link>
          <Link href="/appointments" className="text-zinc-400 hover:text-zinc-100 transition-colors">My Sessions</Link>
          <Link href="/messages" className="text-zinc-400 hover:text-zinc-100 transition-colors">Messages</Link>
          
          <div className="relative cursor-pointer" title="Notifications">
            <svg className="w-6 h-6 text-zinc-400 hover:text-zinc-100 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-zinc-950 animate-pulse"></span>
          </div>

          <Link href="/profile" className="h-8 w-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-300 hover:bg-indigo-500/40 transition-colors">
            A
          </Link>
        </div>
      </div>
    </nav>
  );
}
