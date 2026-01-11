import React from 'react';
import Button from '../ui/button';
import FriendRecommendations from './FriendRecommendations';
import { friendRecommendations } from '../../lib/homeData';

interface SidebarProps {
  onAppClick?: (appName: string) => void;
}

export default function Sidebar({ onAppClick }: SidebarProps) {
  const apps = [
    { name: '抢车位', icon: '🚗' },
    { name: '朋友买卖', icon: '💰' },
    { name: '天天农场', icon: '🌾' },
    { name: '阳光牧场', icon: '🐄' }
  ];

  const memories = [
    { year: 2023, text: '发布了新的相册' },
    { year: 2022, text: '加入了人人网' },
    { year: 2021, text: '添加了5个好友' },
    { year: 2020, text: '发布了第一条状态' }
  ];

  return (
    <div className="w-80 hidden lg:block space-y-4">
      {/* 热门应用 */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-bold mb-3">热门应用</h3>
        <div className="grid grid-cols-2 gap-2">
          {apps.map((app) => (
            <Button
              key={app.name}
              size="sm"
              variant="outline"
              onClick={() => onAppClick?.(app.name)}
              className="text-xs p-2 h-auto flex items-center justify-center space-x-1"
            >
              <span>{app.icon}</span>
              <span>{app.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <FriendRecommendations 
        friends={friendRecommendations}
        onAddFriend={(id) => console.log('Add friend:', id)}
        onViewProfile={(id) => console.log('View profile:', id)}
      />

      {/* 过去的今天 */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-bold mb-3">过去的今天</h3>
        <div className="space-y-3">
          {memories.map((memory, index) => (
            <div key={index} className="text-sm">
              <div className="text-gray-500 mb-1 text-xs">{memory.year}年的今天</div>
              <div className="text-gray-700">{memory.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}