import Navbar from '../../components/Navbar';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12 animate-fade-in-up">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-zinc-100">Profile Settings</h1>
          <p className="text-zinc-400 mt-2">Manage your public expert profile and personal details.</p>
        </div>

        <form className="space-y-8 glass-panel p-8 rounded-2xl">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2">Basic Info</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                <input type="text" defaultValue="Dr. Sarah Chen" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
                <input type="email" defaultValue="sarah@example.com" disabled className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-500 cursor-not-allowed" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Headline / Role</label>
              <input type="text" defaultValue="Staff ML Engineer" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Bio</label>
              <textarea rows={4} defaultValue="Staff ML Engineer with 10 years of experience building scalable AI systems." className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"></textarea>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2">Expert Details</h2>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Hourly Rate (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-zinc-400">$</span>
                <input type="number" defaultValue={150} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-8 pr-4 py-3 text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Skills (comma separated)</label>
              <input type="text" defaultValue="Python, PyTorch, System Design" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <button type="button" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.2)]">
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
