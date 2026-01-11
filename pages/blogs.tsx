import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';

const BlogsPage: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: '技术学习之路',
      content: '最近在深入学习React和Next.js，发现很多有趣的设计模式和最佳实践。分享一下学习心得...',
      category: '技术',
      tags: ['React', 'Next.js', '前端开发'],
      likes: 42,
      comments: 8,
      shares: 3,
      createdAt: '2023-12-25',
      readTime: '5分钟'
    },
    {
      id: 2,
      title: '工作感悟',
      content: '创业一年来，遇到了很多挑战和困难，但也收获了宝贵的经验。团队建设和产品打磨是永恒的主题...',
      category: '生活',
      tags: ['创业', '感悟', '成长'],
      likes: 88,
      comments: 15,
      shares: 6,
      createdAt: '2023-12-24',
      readTime: '3分钟'
    },
    {
      id: 3,
      title: '生活随笔',
      content: '生活中的小确幸往往被我们忽略。今天喝到一杯暖暖的咖啡，看到窗外的阳光，突然觉得这就是幸福...',
      category: '生活',
      tags: ['随笔', '感悟', '生活'],
      likes: 26,
      comments: 4,
      shares: 1,
      createdAt: '2023-12-23',
      readTime: '2分钟'
    },
    {
      id: 4,
      title: '电影推荐',
      content: '最近看了几部不错的电影，推荐给大家。《肖申克的救赎》确实经典，《盗梦空间》的配乐也很惊艳...',
      category: '娱乐',
      tags: ['电影', '推荐', '娱乐'],
      likes: 156,
      comments: 28,
      shares: 12,
      createdAt: '2023-12-22',
      readTime: '4分钟'
    },
    {
      id: 5,
      title: '美食探店',
      content: '周末发现了一家超赞的小店，秘制红烧牛肉面很有特色。老板说是祖传三代的手艺...',
      category: '美食',
      tags: ['美食', '探店', '生活'],
      likes: 92,
      comments: 18,
      shares: 8,
      createdAt: '2023-12-21',
      readTime: '6分钟'
    },
    {
      id: 6,
      title: '读书笔记',
      content: '重读《人间词话》有感，钱钟书的文字还是那么犀利又幽默。整理了一些经典语录分享给大家...',
      category: '读书',
      tags: ['读书', '笔记', '文学'],
      likes: 34,
      comments: 6,
      shares: 2,
      createdAt: '2023-12-20',
      readTime: '7分钟'
    },
    {
      id: 7,
      title: '旅行攻略',
      content: '整理了去年去云南的旅行攻略，包括路线、住宿、美食推荐。希望能帮到计划旅行的朋友们...',
      category: '旅行',
      tags: ['旅行', '攻略', '分享'],
      likes: 128,
      comments: 22,
      shares: 15,
      createdAt: '2023-12-19',
      readTime: '8分钟'
    },
    {
      id: 8,
      title: '摄影技巧',
      content: '分享一些手机摄影技巧，用普通的手机也能拍出大片效果。构图、光线、后期处理都有实用建议...',
      category: '摄影',
      tags: ['摄影', '技巧', '手机摄影'],
      likes: 67,
      comments: 11,
      shares: 5,
      createdAt: '2023-12-18',
      readTime: '6分钟'
    },
    {
      id: 9,
      title: '健身心得',
      content: '坚持健身三个月，身体状态明显改善。分享一些实用的锻炼方法和饮食建议...',
      category: '健身',
      tags: ['健身', '运动', '健康'],
      likes: 89,
      comments: 16,
      shares: 4,
      createdAt: '2023-12-17',
      readTime: '5分钟'
    },
    {
      id: 10,
      title: '音乐分享',
      content: '推荐一些最近很喜欢的歌曲，有流行音乐也有经典老歌。音乐真的是生活的调味剂...',
      category: '音乐',
      tags: ['音乐', '推荐', '分享'],
      likes: 45,
      comments: 9,
      shares: 3,
      createdAt: '2023-12-16',
      readTime: '4分钟'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '技术': return 'bg-blue-100 text-blue-600';
      case '生活': return 'bg-green-100 text-green-600';
      case '娱乐': return 'bg-purple-100 text-purple-600';
      case '美食': return 'bg-orange-100 text-orange-600';
      case '旅行': return 'bg-cyan-100 text-cyan-600';
      case '读书': return 'bg-pink-100 text-pink-600';
      case '摄影': return 'bg-gray-100 text-gray-600';
      case '健身': return 'bg-red-100 text-red-600';
      case '音乐': return 'bg-indigo-100 text-indigo-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <header className="bg-white border-b border-gray-200" style={{ borderColor: 'var(--renren-border)' }}>
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 返回首页
            </a>
            <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>
              📝 我的日志
            </h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                写新日志
              </button>
              <select className="px-3 py-2 border border-gray-200 rounded-lg" style={{ borderColor: 'var(--renren-border)' }}>
                <option>最新发布</option>
                <option>最多浏览</option>
                <option>最多评论</option>
              </select>
              <input
                type="text"
                placeholder="搜索日志..."
                className="px-3 py-2 border border-gray-200 rounded-lg"
                style={{ borderColor: 'var(--renren-border)' }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold" style={{ color: '#111827' }}>
              最新日志 ({blogs.length})
            </h2>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <span className="text-sm text-gray-500">分类：</span>
                <select className="px-3 py-1 border border-gray-200 rounded" style={{ borderColor: 'var(--renren-border)' }}>
                  <option value="">全部分类</option>
                  <option value="技术">技术</option>
                  <option value="生活">生活</option>
                  <option value="娱乐">娱乐</option>
                  <option value="美食">美食</option>
                  <option value="旅行">旅行</option>
                  <option value="读书">读书</option>
                  <option value="摄影">摄影</option>
                  <option value="健身">健身</option>
                  <option value="音乐">音乐</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="renren-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(blog.category)}`}>
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">{blog.createdAt}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-1 mb-2">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 line-clamp-3 mb-4 leading-relaxed">
                    {blog.content}
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                      <span>❤️</span>
                      <span>{blog.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                      <span>💬</span>
                      <span>{blog.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                      <span>🔄</span>
                      <span>{blog.shares}</span>
                    </div>
                    <div className="text-sm text-gray-400 flex-1">
                      阅读时间：{blog.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="text-sm px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">
                      编辑
                    </button>
                    <button className="text-sm px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">
                      删除
                    </button>
                    <button className="text-sm px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white">
                      分享
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50" style={{ borderColor: 'var(--renren-border)' }}>
            查看更多日志
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;