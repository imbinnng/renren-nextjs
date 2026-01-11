import React from 'react';
import FeedItem from './FeedItem';

interface FeedItemData {
  id: number;
  author: string;
  avatar: string;
  avatarColor?: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}

interface FeedListProps {
  feedItems: FeedItemData[];
  onLike?: (id: number) => void;
  onComment?: (id: number) => void;
  onShare?: (id: number) => void;
}

export default function FeedList({
  feedItems,
  onLike,
  onComment,
  onShare
}: FeedListProps) {
  return (
    <div className="space-y-4">
      {feedItems.map((item) => (
        <FeedItem
          key={item.id}
          {...item}
          onLike={onLike}
          onComment={onComment}
          onShare={onShare}
        />
      ))}
    </div>
  );
}