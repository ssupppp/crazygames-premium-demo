import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import FriendsPanel from "@/components/FriendsPanel";
import GameCard from "@/components/GameCard";
import { Menu, X } from "lucide-react";

export default function Index() {
  const [showFriendsPanel, setShowFriendsPanel] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  // Recently played games
  const recentlyPlayedGames = [
    { title: "Bloxd.io", image: "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=200&h=200&fit=crop" },
    { title: "Game 2", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop" },
    { title: "Game 3", image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=200&h=200&fit=crop" },
    { title: "Game 4", image: "https://images.unsplash.com/photo-1570303008586-280f8c9f5b8f?w=200&h=200&fit=crop" },
    { title: "Game 5", image: "https://images.unsplash.com/photo-1538481143235-a9b916d0c57e?w=200&h=200&fit=crop" },
    { title: "Game 6", image: "https://images.unsplash.com/photo-1552072092-7f0b2c5fcff0?w=200&h=200&fit=crop" },
    { title: "Game 7", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=200&h=200&fit=crop" },
    { title: "Game 8", image: "https://images.unsplash.com/photo-1511671782486-a01980e01a18?w=200&h=200&fit=crop" },
    { title: "Game 9", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop" },
    { title: "Game 10", image: "https://images.unsplash.com/photo-1513895795033-48899fbf91c6?w=200&h=200&fit=crop" },
  ];

  const topPicksGames = [
    {
      title: "Bloxd.io",
      image: "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=400&fit=crop",
    },
    {
      title: "Battle Arena",
      image: "https://images.unsplash.com/photo-1578482446458-6ba6132d60fc?w=400&h=400&fit=crop",
    },
    {
      title: "Pixel Quest",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb687773?w=400&h=400&fit=crop",
    },
    {
      title: "Drive Master",
      image: "https://images.unsplash.com/photo-1570303008586-280f8c9f5b8f?w=400&h=400&fit=crop",
    },
    {
      title: "Night Runner",
      image: "https://images.unsplash.com/photo-1538481143235-a9b916d0c57e?w=400&h=400&fit=crop",
    },
    {
      title: "City Racer",
      image: "https://images.unsplash.com/photo-1552072092-7f0b2c5fcff0?w=400&h=400&fit=crop",
    },
  ];

  const featuredGames = [
    {
      title: "Championship",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
    },
    {
      title: "Big Football",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
    },
    {
      title: "State of Masters",
      image: "https://images.unsplash.com/photo-1511671782486-a01980e01a18?w=400&h=400&fit=crop",
    },
    {
      title: "Snake World",
      image: "https://images.unsplash.com/photo-1513895795033-48899fbf91c6?w=400&h=400&fit=crop",
    },
    {
      title: "Tortle Quest",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop",
    },
    {
      title: "Fruit Juice",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    },
    {
      title: "Parrot Land",
      image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=400&h=400&fit=crop",
    },
    {
      title: "Magic Forest",
      image: "https://images.unsplash.com/photo-1570303008586-280f8c9f5b8f?w=400&h=400&fit=crop",
    },
  ];

  const cometGames = [
    {
      title: "Words Wonders",
      image: "https://images.unsplash.com/photo-1578482446458-6ba6132d60fc?w=400&h=400&fit=crop",
    },
    {
      title: "Taxi Driver",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb687773?w=400&h=400&fit=crop",
    },
    {
      title: "Puzzle Master",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c006ae14?w=400&h=400&fit=crop",
    },
    {
      title: "2048 Game",
      image: "https://images.unsplash.com/photo-1538481143235-a9b916d0c57e?w=400&h=400&fit=crop",
    },
    {
      title: "Outleys Battle",
      image: "https://images.unsplash.com/photo-1552072092-7f0b2c5fcff0?w=400&h=400&fit=crop",
    },
    {
      title: "Beach Fishing",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
    },
    {
      title: "Monkey Quest",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
    },
    {
      title: "Space Adventure",
      image: "https://images.unsplash.com/photo-1513895795033-48899fbf91c6?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Header onMenuClick={() => setShowSidebar(!showSidebar)} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed left-0 top-16 bottom-0 w-64 bg-sidebar-background border-r border-sidebar-border z-40 lg:hidden transform transition-transform ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="w-full">
            {/* Recently Played - Horizontal Scroll Games */}
            <section className="px-4 sm:px-6 py-6 sm:py-8 border-b border-border">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                Recently played
              </h2>
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-3 pb-4">
                  {recentlyPlayedGames.map((game, index) => (
                    <div key={index} className="flex-shrink-0 w-32 sm:w-40">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full aspect-square rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Banner - Horizontal Scroll Games */}
            <section className="px-4 sm:px-6 py-6 sm:py-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                Featured games
              </h2>
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4">
                  {featuredGames.map((game, index) => (
                    <div key={index} className="flex-shrink-0 w-40">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full aspect-square rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Top Picks for You */}
            <section className="px-4 sm:px-6 py-6 sm:py-8">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-6">
                Top picks for you
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {topPicksGames.map((game, index) => (
                  <GameCard
                    key={index}
                    title={game.title}
                    image={game.image}
                    badge={index === 0 ? "NEW" : undefined}
                  />
                ))}
              </div>
            </section>

            {/* Play on Comet */}
            <section className="px-4 sm:px-6 py-6 sm:py-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                  Play on Comet
                </h2>
                <span className="text-xs text-muted-foreground bg-card px-3 py-1 rounded">
                  Limited access
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pb-8">
                {cometGames.map((game, index) => (
                  <GameCard key={index} title={game.title} image={game.image} />
                ))}
              </div>
            </section>
          </div>
        </main>

        {/* Friends Panel - Hidden on mobile, visible on desktop */}
        {showFriendsPanel && (
          <div className="hidden xl:block">
            <FriendsPanel
              isOpen={showFriendsPanel}
              onClose={() => setShowFriendsPanel(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
