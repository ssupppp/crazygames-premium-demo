'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-page screenshot */}
      <img
        src="/screenshots/homepage-free.jpg"
        alt="CrazyGames Homepage - Free State"
        className="w-full h-full object-cover object-top"
      />

      {/* Premium Button - Adjusted: 20px up again */}
      <Link
        href="/premium"
        className="absolute top-[8px] right-[200px] z-50 bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-full p-2.5 transition-all hover:scale-110 shadow-2xl border-4 border-red-500 group"
        title="Go Premium"
        style={{ outline: '4px solid red' }}
      >
        <div className="relative w-7 h-7 flex items-center justify-center">
          {/* Star Icon */}
          <div className="text-2xl">⭐</div>
        </div>
      </Link>
    </div>
  );
}
