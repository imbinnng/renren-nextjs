import React, { useState } from 'react';
import Button from '../ui/button';
import { Avatar } from '../ui/avatar';

interface StatusComposerProps {
  onPost?: (content: string, imageUrl: string) => void;
}

export default function StatusComposer({ onPost }: StatusComposerProps) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const commonEmojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '💯', '🎁', '🌟', '✨', '🎨', '🎭', '🍅', '🥳', '🚗'];

  const handlePost = () => {
    if (content.trim() || imageUrl) {
      onPost?.(content, imageUrl);
      setContent('');
      setImageUrl('');
      setShowEmoji(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">分享你的新鲜事...</h2>
      
      <div className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="说点什么吧..."
          className="w-full p-3 border rounded-lg resize-none"
          style={{ borderColor: 'var(--renren-border)' }}
          rows={4}
        />
        
        {imageUrl && (
          <div className="mt-2">
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="max-w-full h-48 object-cover rounded-lg"
              style={{ border: '1px solid var(--renren-border)' }}
            />
            <Button 
              size="sm" 
              onClick={() => setImageUrl('')}
              className="mt-2"
            >
              删除图片
            </Button>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="relative">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setShowEmoji(!showEmoji)}
                className="text-lg"
              >
                😊
              </Button>
              
              {showEmoji && (
                <div className="absolute top-10 left-0 bg-white border border-gray-200 w-80 rounded-lg shadow-lg p-3 z-10">
                  <div className="grid grid-cols-5 gap-1">
                    {commonEmojis.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => setContent(content + emoji)}
                        className="text-xl p-1 hover:bg-gray-100 rounded"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Button variant="outline" size="sm">📷</Button>
            <Button variant="outline" size="sm">🎵</Button>
            <Button variant="outline" size="sm">🔗</Button>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              onClick={handlePost}
              disabled={!content.trim() && !imageUrl}
              className="px-6"
            >
              发布
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}