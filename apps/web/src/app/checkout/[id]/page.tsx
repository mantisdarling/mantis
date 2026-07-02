import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export default function CheckoutPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 animate-fade-in-up">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-zinc-100">Secure Checkout</h1>
          <p className="text-zinc-400 mt-2">Complete your booking with Dr. Sarah Chen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="glass-panel p-6 rounded-2xl h-fit">
            <h2 className="text-xl font-semibold text-zinc-100 mb-6">Order Summary</h2>
            
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800">
              <div>
                <p className="text-zinc-100 font-medium">1-on-1 Mentorship Session</p>
                <p className="text-sm text-zinc-400">October 14, 2026 at 10:00 AM</p>
              </div>
              <span className="text-zinc-100 font-bold">$150.00</span>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Platform Fee</span>
              <span className="text-zinc-100">$5.00</span>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
              <span className="text-lg font-bold text-zinc-100">Total</span>
              <span className="text-2xl font-bold text-indigo-400">$155.00</span>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Funds are held securely in escrow until session completes.
            </div>
          </div>

          {/* Payment Form Placeholder */}
          <div className="glass-panel p-6 rounded-2xl h-fit border-indigo-500/20">
            <h2 className="text-xl font-semibold text-zinc-100 mb-6">Payment Details</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Card Information</label>
                <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-zinc-400 flex items-center justify-center">
                  [ Stripe Elements Placeholder ]
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Name on Card</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Alice Walker"
                />
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white font-bold rounded-xl px-4 py-4 mt-6 hover:bg-indigo-700 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                Pay $155.00
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
