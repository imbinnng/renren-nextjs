import React from 'react';
import { Avatar, AvatarFallback } from '../avatar';
import { Button } from '../button';
import { Card, CardContent } from '../card';

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

interface FeedListProps {
  onOpenFeed: (feed: Feed) => void;
}

const mockFeeds: Feed[] = [
  {
    id: '1',
    author: {
      name: '张小明',
      avatar: '张',
      username: 'zhangxiaoming'
    },
    content: '今天天气真好，心情也格外美丽！分享一下工作中的小确幸，希望大家都开开心心~ ☀️',
    timestamp: '5分钟前',
    likes: 42,
    comments: 8,
    shares: 2
  },
  {
    id: '2',
    author: {
      name: '李小红',
      avatar: '李',
      username: 'lixiaohong'
    },
    content: '周末去了趟郊外，空气清新，风景宜人。推荐大家也多出去走走，放松心情，远离城市喧嚣～ 🌿',
    timestamp: '1小时前',
    likes: 88,
    comments: 15,
    shares: 5
  },
  {
    id: '3',
    author: {
      name: '王大伟',
      avatar: '王',
      username: 'wangdawei'
    },
    content: '刚完成一个很有挑战的项目，虽然过程很辛苦，但收获满满。感谢团队的支持和信任！继续加油！💪',
    timestamp: '3小时前',
    likes: 156,
    comments: 23,
    shares: 12
  }
];

const FeedList: React.FC<FeedListProps> = ({ onOpenFeed }) => {
  return (
    <div className="space-y-4">
      {mockFeeds.map((feed) => (
        <Card key={feed.id} className="renren-card">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  {feed.author.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-gray-900">{feed.author.name}</h4>
                  <span className="text-sm text-gray-500">@{feed.author.username}</span>
                  <span className="text-sm text-gray-500">{feed.timestamp}</span>
                </div>
                <div className="text-gray-800 mb-4 leading-relaxed">
                  {feed.content}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                      <span>❤️</span>
                      <span className="text-sm">{feed.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <span>💬</span>
                      <span className="text-sm">{feed.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                      <span>🔄</span>
                      <span className="text-sm">{feed.shares}</span>
                    </button>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onOpenFeed(feed)}
                  >
                    查看详情
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeedList;