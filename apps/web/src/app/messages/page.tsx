import Navbar from '../../components/Navbar';

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8 animate-fade-in-up flex gap-6 h-[calc(100vh-80px)]">
        
        {/* Inbox List */}
        <div className="w-1/3 glass-panel rounded-2xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-zinc-800">
            <h2 className="font-bold text-lg text-zinc-100">Messages</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 border-b border-zinc-800/50 bg-indigo-500/10 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">S</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-zinc-100 truncate">Dr. Sarah Chen</h3>
                  <p className="text-xs text-zinc-400 truncate mt-0.5">Looking forward to our session!</p>
                </div>
                <span className="text-[10px] text-zinc-500">10:42 AM</span>
              </div>
            </div>
            <div className="p-4 border-b border-zinc-800/50 hover:bg-zinc-900/50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400">M</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-zinc-100 truncate">Marcus Johnson</h3>
                  <p className="text-xs text-zinc-400 truncate mt-0.5">Thanks for the chat.</p>
                </div>
                <span className="text-[10px] text-zinc-500">Oct 12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Chat */}
        <div className="flex-1 glass-panel rounded-2xl flex flex-col overflow-hidden relative">
          <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">S</div>
            <div>
              <h2 className="font-bold text-zinc-100">Dr. Sarah Chen</h2>
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online
              </p>
            </div>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            <div className="flex justify-center">
              <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-500">Today</span>
            </div>
            
            <div className="flex flex-col gap-1 max-w-[80%] items-start">
              <div className="bg-zinc-800 text-zinc-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm">
                Hi there! Thanks for booking a session with me. Have you prepared any specific questions?
              </div>
              <span className="text-[10px] text-zinc-500 ml-1">10:42 AM</span>
            </div>
            
            <div className="flex flex-col gap-1 max-w-[80%] items-end self-end ml-auto">
              <div className="bg-indigo-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm">
                Hi Sarah, yes! I would love to go over distributed systems architecture for my upcoming interview.
              </div>
              <span className="text-[10px] text-zinc-500 mr-1">10:45 AM</span>
            </div>
          </div>

          <div className="p-4 border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
            <div className="flex gap-3">
              <input type="text" placeholder="Type a message..." className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
              <button className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
