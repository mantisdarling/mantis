import Navbar from '../../components/Navbar';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 animate-fade-in-up">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-zinc-100">Admin Control Panel</h1>
          <p className="text-zinc-400 mt-2">Manage expert verifications and platform settings.</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <h2 className="text-xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2 mb-6">Expert Verifications</h2>
          
          <table className="w-full text-left">
            <thead>
              <tr className="text-zinc-500 text-sm border-b border-zinc-800">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/30">
                <td className="py-4">Dr. Sarah Chen</td>
                <td className="py-4 text-sm">Staff ML Engineer</td>
                <td className="py-4"><span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-md">Pending</span></td>
                <td className="py-4"><button className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition-colors">Verify</button></td>
              </tr>
              <tr className="hover:bg-zinc-900/30">
                <td className="py-4">Marcus Johnson</td>
                <td className="py-4 text-sm">Senior Product Designer</td>
                <td className="py-4"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-md">Verified</span></td>
                <td className="py-4"><button className="px-4 py-1.5 border border-red-500/50 text-red-400 hover:bg-red-500/10 rounded-lg text-sm transition-colors">Revoke</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
