import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import Avatar from '../src/components/ui/avatar';
import Button from '../src/components/ui/button';

const SharePage: React.FC = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
    type: 'text',
    category: '生活',
    tags: [],
    emoji: ''
  });

  const [shareItems, setShareItems] = useState([
    {
      id: 1,
      author: '张小明',
      avatar: '张',
      content: '今天天气真好，在公园里散步，感受春天的气息！🌸',
      imageUrl: 'https://picsum.photos/seed/share1/600/400.jpg',
      type: 'text',
      category: '生活',
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
      type: 'text',
      category: '生活',
      likes: 45,
      comments: 12,
      shares: 8,
      createdAt: '3小时前'
    },
    {
      id: 3,
      author: '王大伟',
      avatar: '王',
      content: '刚完成了一个有挑战性的项目，虽然过程很辛苦，但收获满满！感谢团队的支持和信任 💪',
      imageUrl: 'https://picsum.photos/seed/share3/600/400.jpg',
      type: 'text',
      category: '工作',
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
      type: 'text',
      category: '学习',
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
      type: 'text',
      category: '生活',
      likes: 34,
      comments: 6,
      shares: 5,
      createdAt: '6小时前'
    }
  ]);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title.trim()) {
      const post = {
        ...newPost,
        id: Date.now(),
        author: '当前用户',
        avatar: '我',
        createdAt: '刚刚',
        likes: 0,
        comments: 0,
        shares: 0
      };
      setShareItems([post, ...shareItems]);
      setNewPost({ title: '', content: '', imageUrl: '', type: 'text', category: '生活', tags: [], emoji: '' });
    }
  };

  const commonEmojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '💯', '🌟', '✨', '🎁', '🚗', '💰', '🌾', '📝', '🔄', '📷', '🎨', '🎭', '🍅', '🥳'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <header className="bg-white border-b border-gray-200" style={{ borderColor: 'var(--renren-border)' }}>
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 返回首页
            </a>
            <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>
              🔄 分享新鲜事
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{shareItems.length} 条分享</span>
              <select 
                className="px-3 py-2 border border-gray-200 rounded-lg" 
                style={{ borderColor: 'var(--renren-border)' }}
              >
                <option value="all">全部</option>
                <option value="life">生活</option>
                <option value="work">工作</option>
                <option value="study">学习</option>
                <option value="travel">旅行</option>
                <option value="food">美食</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 发布新分享 */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>
                  发布新鲜事
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePostSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="标题"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full p-3 border rounded-lg"
                    style={{ borderColor: 'var(--renren-border)' }}
                  />
                  <textarea
                    placeholder="分享你的新鲜事..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    className="w-full p-3 border rounded-lg resize-none"
                    style={{ borderColor: 'var(--renren-border)' }}
                    rows={4}
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="图片URL(可选)"
                      value={newPost.imageUrl}
                      onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
                      className="flex-1 p-3 border rounded-lg"
                      style={{ borderColor: 'var(--renren-border)' }}
                    />
                    <label className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">类型：</span>
                      <select 
                        value={newPost.type}
                        onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
                        className="px-3 py-2 border rounded-lg"
                        style={{ borderColor: 'var(--renren-border)' }}
                      >
                        <option value="text">文字</option>
                        <option value="image">图片</option>
                        <option value="video">视频</option>
                        <option value="link">链接</option>
                      </select>
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-600">分类：</label>
                    <select 
                      value={newPost.category}
                        onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                        className="px-3 py-2 border rounded-lg"
                        style={{ borderColor: 'var(--renren-border)' }}
                      >
                        <option value="life">生活</option>
                        <option value="work">工作</option>
                        <option value="study">学习</option>
                        <option value="travel">旅行</option>
                        <option value="food">美食</option>
                        <option value="entertainment">娱乐</option>
                        <option value="tech">科技</option>
                      </select>
                    </label>
                  </div>
                  
                  <div className="mb-4">
                    <label className="text-sm text-gray-600 block mb-2">添加表情符号：</label>
                    <div className="grid grid-cols-8 gap-2">
                      {commonEmojis.map((emoji, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setNewPost({ ...newPost, emoji: `${emoji} ${newPost.emoji}` })}
                          className="p-2 hover:bg-gray-100 rounded text-lg transition-colors"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{newPost.content.length}/500</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <label className="flex items-center space-x-2 text-sm text-gray-600">
                          <input type="checkbox" checked={newPost.tags.includes('公开')} onChange={(e) => {
                            const newTags = e.target.checked 
                              ? [...newPost.tags, '公开'] 
                              : newPost.tags.filter(tag => tag !== '公开');
                            setNewPost({ ...newPost, tags: newTags });
                          }} />
                          <span>公开分享</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm text-gray-600">
                          <input type="checkbox" checked={newPost.tags.includes('置顶')} onChange={(e) => {
                            const newTags = e.target.checked 
                              ? [...newPost.tags, '置顶'] 
                              : newTags.filter(tag => tag !== '置顶');
                            setNewPost({ ...newPost, tags: newTags });
                          }} />
                          <span>置顶</span>
                        </label>
                      </div>
                      <button 
                        type="button"
                        className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50"
                        onClick={() => setNewPost({ ...newPost, tags: [...newPost.tags, '热门'] })}
                      >
                        🎯 热门
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                  >
                    发布分享
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* 分享列表 */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-6" style={{ color: '#111827' }}>
                最新分享
              </h2>
              <div className="space-y-4">
                {shareItems.map((item) => (
                  <Card key={item.id} className="renren-card">
                    <CardHeader className="flex items-start space-x-3">
                      <Avatar className="w-12 h-12">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {item.avatar}
                        </div>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold">{item.author}</h4>
                          <span className="text-sm text-gray-500">{item.createdAt}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      {item.imageUrl && (
                        <div className="w-32 h-24 rounded-lg overflow-hidden mb-3">
                          <img 
                            src={item.imageUrl} 
                            alt={item.content}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-800 leading-relaxed line-clamp-3">
                          {item.content}
                          {item.emoji && <span className="ml-1">{item.emoji}</span>}
                        </p>
                      </div>
                    </div>
                    
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;