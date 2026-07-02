import Navbar from '../../components/Navbar';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-100">Admin Command Center</h1>
            <p className="text-zinc-400 mt-2">Platform analytics and expert verification.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            Generate Report
          </button>
        </div>
        
        <DashboardCharts />
        
        <div className="mt-8 glass-panel p-6 rounded-xl">
          <h3 className="text-lg font-bold text-zinc-100 mb-6">Pending Expert Verifications</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-sm text-zinc-400">
                  <th className="pb-3 px-4 font-medium">Expert Name</th>
                  <th className="pb-3 px-4 font-medium">Expertise</th>
                  <th className="pb-3 px-4 font-medium">Applied Date</th>
                  <th className="pb-3 px-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-zinc-200">Dr. Sarah Chen</td>
                  <td className="py-4 px-4 text-zinc-400">Machine Learning</td>
                  <td className="py-4 px-4 text-zinc-400">Oct 24, 2023</td>
                  <td className="py-4 px-4 text-right space-x-2">
                    <button className="text-green-400 hover:text-green-300 transition-colors font-medium">Approve</button>
                    <button className="text-red-400 hover:text-red-300 transition-colors font-medium ml-4">Reject</button>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-zinc-200">James Wilson</td>
                  <td className="py-4 px-4 text-zinc-400">Frontend Engineering</td>
                  <td className="py-4 px-4 text-zinc-400">Oct 25, 2023</td>
                  <td className="py-4 px-4 text-right space-x-2">
                    <button className="text-green-400 hover:text-green-300 transition-colors font-medium">Approve</button>
                    <button className="text-red-400 hover:text-red-300 transition-colors font-medium ml-4">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
