import React from 'react';
import { Avatar, AvatarFallback } from '../ui/avatar';

export interface UserDropdownProps {
  username?: string;
  avatar?: string;
}

export default function UserDropdown({ username = '用户', avatar = '用' }: UserDropdownProps) {
  const menuItems = [
    { name: '我的主页', icon: '👤', href: '/profile' },
    { name: '消息中心', icon: '💬', href: '/messages' },
    { name: '个人设置', icon: '⚙️', href: '/settings' }
  ];

  return (
    <div className="relative group">
      <div className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-white">
            👤
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
        
        <div className="border-t border-gray-200 my-2"></div>
        
        <a
          href="/logout"
          className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          <span>🚪</span>
          <span>退出登录</span>
        </a>
      </div>
    </div>
  );
}