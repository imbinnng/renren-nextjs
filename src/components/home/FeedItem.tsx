import React from 'react';
import { Card, CardContent } from '../ui/card';
import Button from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface FeedItemProps {
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
  onLike?: (id: number) => void;
  onComment?: (id: number) => void;
  onShare?: (id: number) => void;
}

export default function FeedItem({
  id,
  author,
  avatar,
  avatarColor = 'from-blue-600 to-blue-700',
  content,
  imageUrl,
  likes,
  comments,
  shares,
  createdAt,
  onLike,
  onComment,
  onShare
}: FeedItemProps) {
  return (
    <Card className="mb-4 pt-6">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback className={`bg-gradient-to-br ${avatarColor} text-white`}>
              {avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{author}</h4>
              <span className="text-xs text-gray-500">{createdAt}</span>
            </div>
            
            <p className="mt-2 text-gray-800 whitespace-pre-wrap">{content}</p>
            
            {imageUrl && (
              <div className="mt-3">
                <img 
                  src={imageUrl} 
                  alt="Post image" 
                  className="max-w-full rounded-lg"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            )}
            
            <div className="flex items-center space-x-4 mt-4">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onLike?.(id)}
                className="text-gray-600 hover:text-blue-600"
              >
                ❤️ {likes}
              </Button>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onComment?.(id)}
                className="text-gray-600 hover:text-blue-600"
              >
                💬 {comments}
              </Button>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onShare?.(id)}
                className="text-gray-600 hover:text-blue-600"
              >
                🔄 {shares}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}