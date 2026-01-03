'use client';

export default function PremiumHomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-page screenshot - same as homepage but we'll show a premium badge */}
      <img
        src="/screenshots/homepage-free.jpg"
        alt="CrazyGames Homepage - Premium State"
        className="w-full h-full object-cover object-top"
      />

      {/* Premium Badge Overlay - Top Right */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl">
        <span className="text-2xl">👑</span>
        <div>
          <div className="text-sm font-bold">PREMIUM ACTIVE</div>
          <div className="text-xs opacity-90">Ad-Free Experience</div>
        </div>
      </div>

      {/* Success Message Overlay - Center */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-[#1E1E2D] border-2 border-[#EAB308] rounded-2xl p-12 max-w-md text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to Premium!
          </h2>
          <p className="text-text-secondary mb-6">
            You now have access to all premium features:
          </p>
          <ul className="text-left text-white space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>No ads</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>All exclusive games unlocked</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>2x coin rewards on every game</span>
            </li>
          </ul>
          <a
            href="/"
            className="block w-full bg-[#EAB308] hover:bg-[#CA8A04] text-black text-center py-3 rounded-lg font-bold transition-all"
          >
            Start Playing
          </a>
        </div>
      </div>
    </div>
  );
}
