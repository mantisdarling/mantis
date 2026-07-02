import Link from 'next/link';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Background gradients */}
      <div className="absolute top-[0%] right-[0%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[0%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md glass-panel p-8 rounded-2xl relative z-10 animate-fade-in-up">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block mb-2">
            MANTIS
          </Link>
          <h2 className="text-xl font-semibold text-zinc-100">Create an account</h2>
          <p className="text-sm text-zinc-400 mt-1">Start your mentorship journey today</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-2">
            <button type="button" className="py-2 border border-indigo-500/50 bg-indigo-500/10 rounded-lg text-sm font-medium text-indigo-300 transition-colors">
              I'm a Learner
            </button>
            <button type="button" className="py-2 border border-zinc-800 bg-zinc-900/30 rounded-lg text-sm font-medium text-zinc-400 hover:border-zinc-700 transition-colors">
              I'm an Expert
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="name">Full Name</label>
            <input 
              id="name"
              type="text" 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
              placeholder="Alice Walker"
              aria-label="Full Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
              placeholder="alice@example.com"
              aria-label="Email address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
              placeholder="••••••••"
              aria-label="Password"
              required
            />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 mt-4 hover:bg-indigo-700 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.2)]">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account? <Link href="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">Log in</Link>
        </p>
      </div>
    </div>
  );
}
