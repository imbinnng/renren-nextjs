import React from 'react';
import UserDropdown from './ui/UserDropdown';

interface HeaderProps {
  currentPage?: string;
  actions?: React.ReactNode;
  showUserDropdown?: boolean;
}

export default function Header({ currentPage = '', actions, showUserDropdown = true }: HeaderProps) {
  const navItems = [
    { name: 'Friends', href: '/friends', label: '朋友' },
    { name: 'Albums', href: '/albums', label: '相册' },
    { name: 'Blogs', href: '/blogs', label: '日志' },
    { name: 'Share', href: '/share', label: '分享' }
  ];

  return (
    <header className="renren-header">
      <div className="header-content">
        <div className="header-left">
          <a href="/" className="logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">人人网</span>
          </a>
          <nav className="nav-menu">
            {navItems.map((item) => (
               <a
                key={item.name}
                href={item.href}
              className={`nav-item ${
                currentPage === item.name.toLowerCase() || currentPage.includes(item.name.toLowerCase())
                    ? 'active' 
                    : ''
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="header-actions">
          {actions && (
            <div className="flex items-center space-x-4 mr-4">
              {actions}
            </div>
          )}
          <UserDropdown />
        </div>
      </div>
      <style jsx>{`
        .renren-header {
          background: white;
          border-bottom: 1px solid #e5e5e5;
          padding: 16px 0;
          margin-bottom: 20px;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .header-content {
          // max-width: 960px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 24px;
          font-weight: 600;
          color: #333;
          transition: color 0.2s;
        }
        
        .logo:hover {
          color: var(--renren-blue, #005EAC);
        }
        
        .logo-icon {
          font-size: 28px;
        }
        
        .logo-text {
          color: inherit;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        .nav-item {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 4px;
          transition: all 0.2s;
          position: relative;
        }
        
        .nav-item:hover {
          color: var(--renren-blue, #005EAC);
          background-color: rgba(0, 94, 172, 0.1);
        }
        
        .nav-item.active {
          color: var(--renren-blue, #005EAC);
          background-color: rgba(0, 94, 172, 0.1);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        @media (max-width: 768px) {
          .header-content {
            padding: 0 16px;
          }
          
          .header-left {
            gap: 16px;
          }
          
          .logo {
            font-size: 20px;
          }
          
          .logo-icon {
            font-size: 24px;
          }
          
          .nav-menu {
            gap: 16px;
          }
          
          .nav-item {
            padding: 6px 8px;
            font-size: 14px;
          }
          
          .nav-item.active::after {
            width: 30px;
            bottom: -14px;
          }
          
          .header-actions {
            gap: 8px;
          }
        }
      `}</style>
    </header>
  );
}