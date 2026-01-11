import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface StatusComposerProps {
  onRefresh?: () => void;
}

const StatusComposer: React.FC<StatusComposerProps> = ({ onRefresh }) => {
  const [content, setContent] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      console.log('发布状态:', content);
      setContent('');
      onRefresh?.();
    }
  };

  const insertEmoji = (emoji: string) => {
    setContent(prev => prev + emoji);
    setShowEmoji(false);
  };

  const commonEmojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '💯', '🎁', '🌟', '✨'];

  return (
    <div className="renren-card">
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-blue-600 text-white">我</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="分享你的新鲜事..."
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setShowEmoji(!showEmoji)}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  😊
                </button>
                {showEmoji && (
                  <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                    <div className="grid grid-cols-5 gap-1">
                      {commonEmojis.map((emoji, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => insertEmoji(emoji)}
                          className="p-1 hover:bg-gray-100 rounded text-lg"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{content.length}/200</span>
                <Button 
                  type="submit" 
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  发布
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StatusComposer;