import { useState } from "react";

interface GameCardProps {
  title: string;
  image: string;
  badge?: string;
}

export default function GameCard({ title, image, badge }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="aspect-square bg-card border border-border rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
            {badge}
          </div>
        )}

        {/* Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm">
              Play Now
            </button>
          </div>
        )}
      </div>

      {/* Title */}
      <p className="mt-3 text-sm font-semibold text-foreground truncate">
        {title}
      </p>
    </div>
  );
}
