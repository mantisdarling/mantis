'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2) {
        setIsSearching(true);
        try {
          // Adjust URL as needed for prod
          const res = await fetch(`http://localhost:3001/api/experts/search?q=${encodeURIComponent(query)}`);
          if (res.ok) {
            const data = await res.json();
            setResults(data);
            setIsOpen(true);
          }
        } catch (error) {
          console.error(error);
        }
        setIsSearching(false);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto my-8">
      <div className="relative flex items-center">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (results.length > 0) setIsOpen(true) }}
          placeholder="Search by skill or name (e.g., 'Machine Learning', 'AWS')..." 
          className="w-full bg-zinc-900/80 border border-zinc-700/50 rounded-full py-4 px-8 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)] text-lg"
        />
        {isSearching && (
          <div className="absolute right-6 w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-3 w-full bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden z-50">
          <div className="p-2 flex flex-col gap-1 max-h-80 overflow-y-auto">
            {results.map((expert) => (
              <Link key={expert.id} href={`/dashboard?expert=${expert.id}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-zinc-800 transition-colors">
                <div>
                  <div className="font-bold text-white text-lg">{expert.name}</div>
                  <div className="text-sm text-zinc-400 line-clamp-1">{expert.profile?.headline || expert.profile?.bio || 'Expert'}</div>
                </div>
                <div className="text-base font-bold text-indigo-400 whitespace-nowrap ml-4 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  ${expert.profile?.hourlyRate}/hr
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {isOpen && query.length > 2 && results.length === 0 && !isSearching && (
        <div className="absolute top-full mt-3 w-full bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-6 text-center text-zinc-400 z-50">
          No experts found matching "<span className="text-white font-medium">{query}</span>"
        </div>
      )}
    </div>
  );
}
