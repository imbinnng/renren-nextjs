import React from 'react';
import Button from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface FriendRecommendation {
  id: number;
  name: string;
  avatar: string;
  avatarColor?: string;
  mutualFriends?: number;
  bio?: string;
}

interface FriendRecommendationsProps {
  friends: FriendRecommendation[];
  onAddFriend?: (id: number) => void;
  onViewProfile?: (id: number) => void;
}

export default function FriendRecommendations({
  friends,
  onAddFriend,
  onViewProfile
}: FriendRecommendationsProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold mb-4">推荐好友</h3>
      <div className="space-y-4">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className={`bg-gradient-to-br ${friend.avatarColor || 'from-blue-600 to-blue-700'} text-white`}>
                {friend.avatar}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h4 className="font-semibold text-sm">{friend.name}</h4>
              {friend.mutualFriends && (
                <p className="text-xs text-gray-500">{friend.mutualFriends} 个共同好友</p>
              )}
            </div>
            
            <div className="flex space-x-1">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onViewProfile?.(friend.id)}
                className="text-xs px-2"
              >
                查看
              </Button>
              <Button
                size="sm"
                onClick={() => onAddFriend?.(friend.id)}
                className="text-xs px-2"
              >
                添加
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="ghost" className="w-full mt-4 text-sm">
        查看更多推荐 →
      </Button>
    </div>
  );
}