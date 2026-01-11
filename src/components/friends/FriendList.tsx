import React from 'react';
import FriendCard from './FriendCard';

export interface Friend {
  id: number;
  name: string;
  username: string;
  avatar: string;
  avatarColor?: string;
  status: 'online' | 'offline' | 'away';
  mutualFriends: number;
  bio: string;
}

interface FriendListProps {
  friends: Friend[];
  onMessage?: (id: number) => void;
  onViewProfile?: (id: number) => void;
  onAddFriend?: (id: number) => void;
  showAddButton?: boolean;
}

export default function FriendList({
  friends,
  onMessage,
  onViewProfile,
  onAddFriend,
  showAddButton = false
}: FriendListProps) {
  return (
    <div className="space-y-4">
      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          friend={friend}
          onMessage={onMessage}
          onViewProfile={onViewProfile}
          onAddFriend={onAddFriend}
          showAddButton={showAddButton}
        />
      ))}
    </div>
  );
}