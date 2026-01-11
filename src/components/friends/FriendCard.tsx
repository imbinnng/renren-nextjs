import React from 'react';
import { Card, CardContent } from '../ui/card';
import Button from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface Friend {
  id: number;
  name: string;
  username: string;
  avatar: string;
  avatarColor?: string;
  status: 'online' | 'offline' | 'away';
  mutualFriends: number;
  bio: string;
}

interface FriendCardProps {
  friend: Friend;
  onMessage?: (id: number) => void;
  onViewProfile?: (id: number) => void;
  onAddFriend?: (id: number) => void;
  showAddButton?: boolean;
}

export default function FriendCard({
  friend,
  onMessage,
  onViewProfile,
  onAddFriend,
  showAddButton = false
}: FriendCardProps) {
  const getStatusColor = () => {
    switch (friend.status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <Card className="mb-4 pt-4">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="relative">
            <Avatar className="w-12 h-12">
              <AvatarFallback className={`bg-gradient-to-br ${friend.avatarColor || 'from-blue-600 to-blue-700'} text-white`}>
                {friend.avatar}
              </AvatarFallback>
            </Avatar>
            <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor()} rounded-full border-2 border-white`}></div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{friend.name}</h3>
                <p className="text-sm text-gray-500">{friend.username}</p>
              </div>
              <span className="text-xs text-gray-500">{friend.mutualFriends} 个共同好友</span>
            </div>
            
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{friend.bio}</p>
            
            <div className="flex gap-2 mt-3">
              <Button 
                size="sm" 
                onClick={() => onMessage?.(friend.id)}
                className="px-3 py-1 text-sm"
              >
                发消息
              </Button>
              <Button 
                size="sm"
                onClick={() => onViewProfile?.(friend.id)}
                className="px-3 py-1 text-sm"
                variant="outline"
              >
                查看资料
              </Button>
              {showAddButton && (
                <Button 
                  size="sm"
                  onClick={() => onAddFriend?.(friend.id)}
                  className="px-3 py-1 text-sm"
                >
                  加好友
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}