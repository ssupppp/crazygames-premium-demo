import { Link } from "react-router-dom";
import {
  Home,
  Zap,
  TrendingUp,
  Crown,
  Users,
  Gamepad2,
  Dices,
  Utensils,
  Zap as Flash,
  Smile,
  Target,
  Puzzle,
} from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Zap, label: "New", href: "/" },
    { icon: TrendingUp, label: "Popular Games", href: "/" },
    { icon: Crown, label: "Updated", href: "/" },
    { icon: Target, label: "Trending", href: "/" },
    { icon: Users, label: "Multiplayer", href: "/" },
    { icon: Gamepad2, label: "2 Player", href: "/" },
    { icon: Target, label: "Sport", href: "/" },
    { icon: Zap, label: "Action", href: "/" },
    { icon: Puzzle, label: "Racing", href: "/" },
    { icon: Dices, label: "Clicker", href: "/" },
    { icon: Utensils, label: "Cooking", href: "/" },
    { icon: Dices, label: "Eating", href: "/" },
    { icon: Flash, label: "Flash", href: "/" },
    { icon: Smile, label: "Emoji", href: "/" },
  ];

  return (
    <aside className="w-64 h-[calc(100vh-64px)] bg-sidebar-background border-r border-sidebar-border overflow-y-auto scrollbar-hide">
      {/* Logo */}
      <div className="p-4 sm:p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-sidebar-foreground">
            Crazy
            <span className="text-primary">Games</span>
          </span>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
