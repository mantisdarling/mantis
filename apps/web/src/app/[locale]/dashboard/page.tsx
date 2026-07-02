import Navbar from '../../components/Navbar';

interface Expert {
  id: string;
  name: string;
  role: string;
  profile?: {
    bio: string;
    skills: string[];
    hourlyRate: number;
    rating: number;
  };
}

async function getExperts() {
  try {
    const res = await fetch('http://localhost:3001/experts', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Dashboard() {
  const experts: Expert[] = await getExperts();

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 animate-fade-in-up">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-zinc-100">Find an Expert</h1>
          <p className="text-zinc-400 mt-2">Search by skill, role, or name to find your perfect mentor.</p>
        </div>

        <div className="flex gap-4 mb-8">
          <input 
            type="text"
            placeholder="Search for 'React', 'System Design'..."
            className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
          />
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.2)]">
            Search
          </button>
        </div>

        {experts.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">
            No experts found. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert) => (
              <div key={expert.id} className="glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-all hover:translate-y-[-4px] group cursor-pointer shadow-xl shadow-black/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      {expert.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">{expert.name}</h3>
                      <p className="text-sm text-zinc-400 truncate w-40">{expert.profile?.bio || expert.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {expert.profile?.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-xs font-medium text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                  <div>
                    <span className="text-lg font-bold text-zinc-100">${expert.profile?.hourlyRate}/hr</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    {expert.profile?.rating || 'New'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
