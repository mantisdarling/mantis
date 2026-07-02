import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export default function BookingPage({ params }: { params: { id: string } }) {
  // Mock data for the expert and slots
  const expert = { name: 'Dr. Sarah Chen', role: 'Staff ML Engineer', rate: '$150/hr' };
  
  // Generating some mock slots
  const slots = [
    { id: '1', time: '09:00 AM' },
    { id: '2', time: '10:00 AM' },
    { id: '3', time: '11:00 AM' },
    { id: '4', time: '01:00 PM' },
    { id: '5', time: '02:00 PM' },
    { id: '6', time: '03:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 animate-fade-in-up">
        <Link href="/dashboard" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-2 mb-8">
          &larr; Back to Experts
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expert Summary */}
          <div className="md:col-span-1 glass-panel p-6 rounded-2xl h-fit border-indigo-500/20">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-3xl shadow-inner mb-4">
                {expert.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-zinc-100">{expert.name}</h2>
              <p className="text-sm text-zinc-400 mb-6">{expert.role}</p>
              
              <div className="w-full bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-400 text-sm">Session Rate</span>
                  <span className="text-zinc-100 font-bold">{expert.rate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Duration</span>
                  <span className="text-zinc-100 font-bold">60 min</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Calendar & Slots */}
          <div className="md:col-span-2 glass-panel p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-zinc-100 mb-6">Select a Date & Time</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Fake Calendar Placeholder */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <button className="text-zinc-400 hover:text-zinc-100">&lt;</button>
                  <span className="text-zinc-100 font-medium">October 2026</span>
                  <button className="text-zinc-400 hover:text-zinc-100">&gt;</button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs text-zinc-400 mb-2">
                  <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <button 
                      key={i} 
                      className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        i === 14 
                          ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.5)]' 
                          : 'text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <h4 className="text-sm font-medium text-zinc-400 mb-4">Available Times</h4>
                <div className="flex flex-col gap-3">
                  {slots.map((slot, index) => (
                    <button 
                      key={slot.id}
                      className={`w-full py-3 rounded-xl border font-medium transition-all ${
                        index === 1 
                          ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300 ring-1 ring-indigo-500/50' 
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-600'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8">
                  <button className="w-full bg-indigo-600 text-white font-bold rounded-xl px-4 py-4 hover:bg-indigo-700 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] disabled:opacity-50">
                    Confirm & Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
