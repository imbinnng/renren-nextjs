import React from 'react';
import Header from '../src/components/Header';

const SharePage: React.FC = () => {
  const shareItems = [
    {
      id: 1,
      author: '张小明',
      avatar: '张',
      content: '今天天气真好，在公园里散步，感受春天的气息！🌸',
      imageUrl: 'https://picsum.photos/seed/share1/600/400.jpg',
      likes: 23,
      comments: 5,
      shares: 2,
      createdAt: '2小时前'
    },
    {
      id: 2,
      author: '李小红',
      avatar: '李',
      content: '周末去了趟郊外，发现了一家很棒的咖啡店，推荐给大家！☕ 环境很宜人，适合工作学习~ 📚',
      imageUrl: 'https://picsum.photos/seed/share2/600/400.jpg',
      likes: 45,
      comments: 12,
      shares: 8,
      createdAt: '3小时前'
    },
    {
      id: 3,
      author: '王大伟',
      avatar: '王',
      content: '刚完成一个有挑战性的项目，虽然过程很辛苦，但收获满满！感谢团队的支持和信任！💪',
      imageUrl: 'https://picsum.photos/seed/share3/600/400.jpg',
      likes: 88,
      comments: 23,
      shares: 15,
      createdAt: '4小时前'
    },
    {
      id: 4,
      author: '赵美丽',
      avatar: '赵',
      content: '分享一个很棒的学习方法：番茄工作法！专注25分钟，休息5分钟，效率提高很多 🍅',
      imageUrl: 'https://picsum.photos/seed/share4/600/400.jpg',
      likes: 67,
      comments: 8,
      shares: 12,
      createdAt: '5小时前'
    },
    {
      id: 5,
      author: '刘强东',
      avatar: '刘',
      content: '分享一个有趣的生活小技巧：如何让衣服更持久保持色彩鲜艳！👔',
      imageUrl: 'https://picsum.photos/seed/share5/600/400.jpg',
      likes: 34,
      comments: 6,
      shares: 5,
      createdAt: '6小时前'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header 
        title="🔄 分享新鲜事"
        actions={
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{shareItems.length} 条分享</span>
            <select className="px-3 py-2 border border-gray-200 rounded-lg" style={{ borderColor: 'var(--renren-border)' }}>
              <option value="all">全部</option>
              <option value="life">生活</option>
              <option value="work">工作</option>
              <option value="study">学习</option>
              <option value="travel">旅行</option>
              <option value="food">美食</option>
            </select>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto p-4">
        <div className="space-y-6">
          <h2 className="text-xl font-bold" style={{ color: '#111827' }}>
            最新分享
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shareItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold">{item.author}</h4>
                      <span className="text-sm text-gray-500">{item.createdAt}</span>
                    </div>
                  </div>
                </div>
                
                {item.imageUrl && (
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={item.imageUrl} 
                      alt={item.content}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <p className="text-gray-800 leading-relaxed mb-4">
                  {item.content}
                </p>
                
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                    <span>❤️</span>
                    <span>{item.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                    <span>💬</span>
                    <span>{item.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                    <span>🔄</span>
                    <span>{item.shares}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;