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
          <Link href="/dashboard/sessions" className="text-zinc-400 hover:text-zinc-100 transition-colors">My Sessions</Link>
          <Link href="/dashboard/wallet" className="text-zinc-400 hover:text-zinc-100 transition-colors">Wallet</Link>
          <div className="h-8 w-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-300">
            A
          </div>
        </div>
      </div>
    </nav>
  );
}
