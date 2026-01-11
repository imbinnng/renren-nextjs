import React from 'react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  backUrl?: string;
  actions?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ 
  title = '人人网', 
  showBack = false, 
  backUrl = '/',
  actions 
}) => {
  return (
    <header className="bg-white border-b border-gray-200" style={{ borderColor: 'var(--renren-border)' }}>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center space-x-4">
          {showBack && (
            <a href={backUrl} className="text-blue-600 hover:text-blue-800 font-medium">
              ← 返回首页
            </a>
          )}
          
          <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>
            {title}
          </h1>
          
          {actions && (
            <div className="flex items-center space-x-4 ml-auto">
              {actions}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;