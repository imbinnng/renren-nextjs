import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import Header from '../src/components/Header';
import PageHeader from '../src/components/PageHeader';

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
    content: '在工作中遇到的一些挑战和收获。每个人都有自己的成长路径，重要的是保持学习的心态...',
    category: '工作',
    tags: ['职业发展', '团队协作', '项目管理'],
    likes: 28,
    comments: 4,
    shares: 1,
    createdAt: '2023-12-24',
    readTime: '3分钟'
  },
  {
    id: 3,
    title: '生活记录',
    content: '记录生活中的点点滴滴，发现美好。平凡的日子也能过得很精彩...',
    category: '生活',
    tags: ['日常', '感悟', '生活'],
    likes: 56,
    comments: 12,
    shares: 4,
    createdAt: '2023-12-23',
    readTime: '4分钟'
  },
  {
    id: 4,
    title: '美食分享',
    content: '今天做了一道新菜，分享一下制作过程。食材很简单，但味道很棒...',
    category: '美食',
    tags: ['菜谱', '烹饪', '家常菜'],
    likes: 34,
    comments: 7,
    shares: 2,
    createdAt: '2023-12-22',
    readTime: '3分钟'
  },
  {
    id: 5,
    title: '读书笔记',
    content: '《原子习惯》读后感。这本书改变了我对习惯养成的看法...',
    category: '读书',
    tags: ['读书', '书评', '成长'],
    likes: 89,
    comments: 15,
    shares: 8,
    createdAt: '2023-12-21',
    readTime: '6分钟'
  },
  {
    id: 6,
    title: '旅行见闻',
    content: '去了一趟说走就走的旅行，路上遇到的人和事都很有趣...',
    category: '旅行',
    tags: ['旅行', '见闻', '自由'],
    likes: 67,
    comments: 11,
    shares: 5,
    createdAt: '2023-12-20',
    readTime: '5分钟'
  },
  {
    id: 7,
    title: '技术分享',
    content: '分享一个很实用的React Hook，可以大大简化状态管理...',
    category: '技术',
    tags: ['React', 'Hooks', '状态管理'],
    likes: 45,
    comments: 9,
    shares: 6,
    createdAt: '2023-12-19',
    readTime: '4分钟'
  },
  {
    id: 8,
    title: '电影评论',
    content: '最近看了一部很不错的电影，分享一下观后感...',
    category: '娱乐',
    tags: ['电影', '评论', '观后感'],
    likes: 23,
    comments: 6,
    shares: 3,
    createdAt: '2023-12-18',
    readTime: '3分钟'
  },
  {
    id: 9,
    title: '健身日记',
    content: '坚持运动第100天！分享一下这100天来的变化和心得...',
    category: '运动',
    tags: ['健身', '运动', '健康'],
    likes: 78,
    comments: 14,
    shares: 7,
    createdAt: '2023-12-17',
    readTime: '4分钟'
  },
  {
    id: 10,
    title: '摄影技巧',
    content: '分享一些手机摄影的技巧，用普通的手机也能拍出大片效果...',
    category: '摄影',
    tags: ['摄影', '技巧', '手机摄影'],
    likes: 92,
    comments: 18,
    shares: 9,
    createdAt: '2023-12-16',
    readTime: '5分钟'
  }
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    '技术': 'bg-blue-100 text-blue-600',
    '工作': 'bg-green-100 text-green-600',
    '生活': 'bg-yellow-100 text-yellow-600',
    '美食': 'bg-red-100 text-red-600',
    '读书': 'bg-purple-100 text-purple-600',
    '旅行': 'bg-indigo-100 text-indigo-600',
    '娱乐': 'bg-pink-100 text-pink-600',
    '运动': 'bg-orange-100 text-orange-600',
    '摄影': 'bg-teal-100 text-teal-600'
  };
  return colors[category] || 'bg-gray-100 text-gray-600';
};

const BlogsPage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header 
        currentPage="blogs"
      />
      
      <div className="max-w-6xl mx-auto p-4">
        <PageHeader
          title={`最新日志 (${blogs.length})`}
          actions={
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2 items-center">
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
                </select>
              </div>
              <input
                type="text"
                placeholder="搜索日志..."
                className="px-3 py-1 border border-gray-200 rounded"
                style={{ borderColor: 'var(--renren-border)' }}
              />
            </div>
          }
        />
        
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
                <p className="text-gray-600 mb-3 line-clamp-2">{blog.content}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👍 {blog.likes}</span>
                  <span>💬 {blog.comments}</span>
                  <span>🔄 {blog.shares}</span>
                  <span>⏱️ {blog.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;