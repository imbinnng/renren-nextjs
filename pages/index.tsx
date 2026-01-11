import React, { useState } from 'react';
import Header from '../src/components/Header';
import StatusComposer from '../src/components/home/StatusComposer';
import FeedList from '../src/components/home/FeedList';
import Sidebar from '../src/components/home/Sidebar';
import { feedData } from '../src/lib/homeData';

const HomePage: React.FC = () => {
  const [feedItems, setFeedItems] = useState(feedData);

  const handlePost = (content: string, imageUrl: string) => {
    const newItem = {
      id: feedItems.length + 1,
      author: '我',
      avatar: '我',
      avatarColor: 'from-gray-500 to-gray-600',
      content,
      imageUrl,
      likes: 0,
      comments: 0,
      shares: 0,
      createdAt: '刚刚'
    };
    setFeedItems([newItem, ...feedItems]);
  };

  const handleLike = (id: number) => {
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const handleComment = (id: number) => {
    console.log('Comment on post:', id);
  };

  const handleShare = (id: number) => {
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, shares: item.shares + 1 } : item
      )
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header 
        currentPage="index"
        actions={
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">欢迎来到人人网</span>
          </div>
        }
      />
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-6">
          {/* 左侧导航栏 */}
          {/*<Sidebar />*/}
          
          {/* 中间主内容区 */}
          <div className="flex-1">
            <div className="space-y-6">
              <StatusComposer onPost={handlePost} />
              <FeedList 
                feedItems={feedItems}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
              />
            </div>
          </div>

          {/* 右侧边栏 */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;