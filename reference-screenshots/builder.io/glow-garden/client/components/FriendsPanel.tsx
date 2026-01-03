import { X, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  online?: boolean;
}

interface FriendRequest {
  id: string;
  name: string;
  avatar: string;
}

interface FriendsPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function FriendsPanel({
  isOpen = true,
  onClose,
}: FriendsPanelProps) {
  const onlineFriends: Friend[] = [
    { id: "1", name: "Nobody's online", avatar: "👤", online: false },
  ];

  const friendRequests: FriendRequest[] = [
    { id: "1", name: "VestOnGamer", avatar: "🎮" },
    { id: "2", name: "mathematik_X", avatar: "🎓" },
    { id: "3", name: "emboecurted", avatar: "🚀" },
  ];

  if (!isOpen) return null;

  return (
    <aside className="w-80 bg-background border-l border-border flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-foreground">Friends</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Play with Friends Button */}
        <div className="p-6 border-b border-border">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            ▶ Play with Friends
          </Button>
        </div>

        {/* Share Profile */}
        <div className="p-4 border-b border-border">
          <Button variant="ghost" className="w-full text-primary justify-start">
            Share profile
          </Button>
        </div>

        {/* Online Friends */}
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">Online Friends</h3>
          {onlineFriends.map((friend) => (
            <div key={friend.id} className="text-sm text-muted-foreground">
              {friend.name}
            </div>
          ))}
        </div>

        {/* Pending Requests */}
        <div className="p-6">
          <h3 className="font-semibold text-foreground mb-4">
            Pending Requests ({friendRequests.length})
          </h3>
          <div className="space-y-3">
            {friendRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center text-sm">
                    {request.avatar}
                  </div>
                  <span className="text-sm text-foreground truncate">
                    {request.name}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-primary hover:bg-primary/10"
                  >
                    Accept
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground hover:bg-card"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
