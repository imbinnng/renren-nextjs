import React from 'react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface Feed {
  id: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

interface FeedDetailProps {
  feed: Feed;
}

const mockComments = [
  { id: '1', author: '赵六', content: '说得好！支持！', timestamp: '2分钟前' },
  { id: '2', author: '钱七', content: '感同身受，加油！', timestamp: '5分钟前' },
  { id: '3', author: '孙八', content: '期待下次分享～', timestamp: '8分钟前' }
];

const FeedDetail: React.FC<FeedDetailProps> = ({ feed }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="renren-card">
        <CardContent className="p-6">
          {/* 头部信息 */}
          <div className="flex items-start space-x-3 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-lg">
                {feed.author.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-lg font-medium text-gray-900">{feed.author.name}</h3>
                <span className="text-gray-500">@{feed.author.username}</span>
                <span className="text-gray-500">{feed.timestamp}</span>
              </div>
              <div className="text-gray-800 leading-relaxed text-base">
                {feed.content}
              </div>
            </div>
          </div>

          {/* 互动统计 */}
          <div className="flex items-center space-x-6 mb-4 pb-4 border-b border-gray-100">
            <button className="flex items-center space-x-1 text-red-500 hover:text-red-600">
              <span>❤️</span>
              <span className="text-sm">{feed.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
              <span>💬</span>
              <span className="text-sm">{feed.comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-green-500 hover:text-green-600">
              <span>🔄</span>
              <span className="text-sm">{feed.shares}</span>
            </button>
          </div>

          {/* 评论区域 */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900">评论 {feed.comments}</h4>
            
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gray-500 text-white text-sm">
                    {comment.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-800">{comment.content}</p>
                </div>
              </div>
            ))}

            {/* 发表评论 */}
            <div className="flex items-start space-x-3 mt-4">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-600 text-white text-sm">我</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex-1">
                <textarea
                  placeholder="发表你的评论..."
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    评论
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedDetail;