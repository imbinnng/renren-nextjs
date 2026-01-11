import React from 'react';
import Header from '../src/components/Header';
import PageHeader from '../src/components/PageHeader';

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
      content: '刚完成了一个新的React项目，学到了很多新知识！💪\n\n特别是在状态管理和性能优化方面有了新的理解，分享一下学习心得：\n\n1. 使用useMemo和useCallback优化渲染\n2. 合理拆分组件，提高可维护性\n3. 使用React DevTools进行性能分析',
      likes: 45,
      comments: 12,
      shares: 8,
      createdAt: '4小时前'
    },
    {
      id: 3,
      author: '王大锤',
      avatar: '王',
      content: '周末去爬山了，山顶的风景太美了！🏔️\n\n人生就像爬山，虽然过程很累，但到达山顶的那一刻，所有的辛苦都值得了。',
      imageUrl: 'https://picsum.photos/seed/share3/600/400.jpg',
      likes: 67,
      comments: 18,
      shares: 6,
      createdAt: '6小时前'
    },
    {
      id: 4,
      author: '赵小雨',
      avatar: '赵',
      content: '分享一个超赞的读书笔记：《原子习惯》\n\n这本书改变了我对习惯养成的看法。核心观点是：\n\n🎯 微小的改变带来巨大的成果\n🔥 让习惯显而易见\n🎭 让习惯有吸引力\n⏰ 让习惯简便易行\n🎉 让习惯令人愉悦\n\n推荐给想要养成好习惯的朋友们！📚',
      likes: 89,
      comments: 23,
      shares: 15,
      createdAt: '8小时前'
    },
    {
      id: 5,
      author: '刘建国',
      avatar: '刘',
      content: '今天参加了公司的技术分享会，主题是微服务架构。\n\n学到了很多关于服务拆分、数据一致性、分布式事务的知识。特别感谢主讲人的精彩分享！💡\n\n技术这东西，真的是活到老学到老。',
      likes: 34,
      comments: 8,
      shares: 4,
      createdAt: '10小时前'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header 
        currentPage="share"
      />
      
      <div className="max-w-6xl mx-auto p-4">
        <PageHeader
          title={`最新分享 (${shareItems.length})`}
          actions={
            <div className="flex items-center space-x-2">
              <select className="px-3 py-1 border border-gray-200 rounded" style={{ borderColor: 'var(--renren-border)' }}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <p className="text-gray-800 whitespace-pre-wrap">{item.content}</p>
                  {item.imageUrl && (
                    <img 
                      src={item.imageUrl} 
                      alt="Share image" 
                      className="mt-3 rounded-lg"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                  <div className="flex items-center space-x-4 mt-4">
                    <button className="text-gray-600 hover:text-blue-600">
                      ❤️ {item.likes}
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      💬 {item.comments}
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      🔄 {item.shares}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharePage;