import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function AppointmentsPage() {
  const upcomingSessions = [
    { id: '1', expert: 'Dr. Sarah Chen', time: 'Oct 14, 2026 - 10:00 AM', status: 'SCHEDULED', role: 'Learner' }
  ];

  const pastSessions = [
    { id: '2', expert: 'Marcus Johnson', time: 'Sep 28, 2026 - 2:00 PM', status: 'COMPLETED', role: 'Learner' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 animate-fade-in-up">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-zinc-100">My Appointments</h1>
            <p className="text-zinc-400 mt-2">Manage your upcoming and past mentorship sessions.</p>
          </div>
          <Link href="/dashboard" className="px-6 py-2 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 rounded-xl transition-colors text-sm font-medium">
            Book New Session
          </Link>
        </div>

        <div className="space-y-12">
          {/* Upcoming Sessions */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2 mb-6">Upcoming Sessions</h2>
            {upcomingSessions.length === 0 ? (
              <p className="text-zinc-500">No upcoming sessions scheduled.</p>
            ) : (
              <div className="space-y-4">
                {upcomingSessions.map(session => (
                  <div key={session.id} className="glass-panel p-6 rounded-2xl flex items-center justify-between border-l-4 border-indigo-500">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100">Session with {session.expert}</h3>
                      <p className="text-zinc-400 text-sm mt-1">{session.time}</p>
                    </div>
                    <div className="flex gap-3">
                      <Link href={`/session/${session.id}`} className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                        Join Room
                      </Link>
                      <button className="px-5 py-2 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-xl transition-colors font-medium">
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Past Sessions */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2 mb-6">Past Sessions</h2>
            <div className="space-y-4">
              {pastSessions.map(session => (
                <div key={session.id} className="glass-panel p-6 rounded-2xl flex items-center justify-between opacity-80">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">Session with {session.expert}</h3>
                    <p className="text-zinc-400 text-sm mt-1">{session.time}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-xs font-semibold flex items-center">
                      COMPLETED
                    </span>
                    <button className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium rounded-xl transition-colors">
                      Leave Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
