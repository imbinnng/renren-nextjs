import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import { Card, CardContent } from '../../src/components/ui/card';
import { Avatar, AvatarFallback } from '../../src/components/ui/avatar';
import PageHeader from '../../src/components/PageHeader';
import { blogData } from '../../src/lib/blogData';

const BlogDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [blog, setBlog] = useState<any>(null);
  const [comments, setComments] = useState<Array<{author: string, content: string, time: string}>>([]);
  const [newComment, setNewComment] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [copiedBlock, setCopiedBlock] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (id) {
      const blogId = parseInt(id as string);
      const selectedBlog = blogData[blogId as keyof typeof blogData];
      if (selectedBlog) {
        setBlog(selectedBlog);
        setLikeCount(selectedBlog.likes);
        
        // 模拟评论数据
        setComments([
          {
            author: '技术爱好者',
            content: '写得很详细，对我的学习很有帮助！',
            time: '2小时前'
          },
          {
            author: '前端新手',
            content: '感谢分享，期待更多这样的文章。',
            time: '5小时前'
          }
        ]);
      }
    }
  }, [id]);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    }
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        author: '我',
        content: newComment,
        time: '刚刚'
      };
      setComments(prev => [comment, ...prev]);
      setNewComment('');
    }
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentBlock: string[] = [];
    let inCodeBlock = false;
    let blockLanguage = '';

    lines.forEach((line, index) => {
      // 检测代码块开始
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          // 代码块开始
          inCodeBlock = true;
          blockLanguage = line.trim().replace('```', '');
        } else {
          // 代码块结束
          inCodeBlock = false;
          
          // 渲染代码块
          elements.push(
            <div key={`code-${index}`} className="relative mb-6">
              <div className="flex items-center justify-between bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono rounded-t-lg border-t border-l border-r border-gray-700">
                <span className="text-xs font-semibold">{blockLanguage || 'plaintext'}</span>
                <button
                  onClick={() => {
                    const codeToCopy = currentBlock.join('\n');
                    navigator.clipboard.writeText(codeToCopy);
                    setCopiedBlock(`code-${index}`);
                    setTimeout(() => setCopiedBlock(null), 2000);
                  }}
                  className={`text-xs px-2 py-1 rounded transition-all text-gray-300 ${
                    copiedBlock === `code-${index}` 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {copiedBlock === `code-${index}` ? '已复制!' : '复制代码'}
                </button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto border-b border-l border-r border-gray-700">
                <code className="text-sm font-mono leading-relaxed block">
                  {currentBlock.map((codeLine, lineIndex) => (
                    <div key={lineIndex} className="flex">
                      <span className="text-gray-500 mr-4 select-none text-right" style={{ minWidth: '2rem' }}>
                        {lineIndex + 1}
                      </span>
                      <span className="flex-1">{codeLine || ' '}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          );
          
          currentBlock = [];
          blockLanguage = '';
        }
      } else if (inCodeBlock) {
        // 代码块内容
        currentBlock.push(line);
      } else if (line.trim() === '') {
        // 空行
        elements.push(<div key={`br-${index}`} className="h-4" />);
      } else {
        // 普通段落，支持内联代码
        const processedLine = line.split(/(`+[^`]+`+)/).map((part, partIndex) => {
          if (part.startsWith('`') && part.endsWith('`')) {
            // 内联代码
            return (
              <code key={`inline-${partIndex}`} className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">
                {part.replace(/`/g, '')}
              </code>
            );
          } else {
            // 普通文本
            return part;
          }
        });

        elements.push(
          <p key={`p-${index}`} className="mb-4 leading-relaxed text-gray-700">
            {processedLine}
          </p>
        );
      }
    });

    return elements;
  };

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

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--renren-bg)' }}>
        <div>加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header currentPage="blogs" />
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <button 
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
          >
            <span>← 返回博客列表</span>
          </button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded text-sm ${getCategoryColor(blog.category)}`}>
                {blog.category}
              </span>
              <span className="text-sm text-gray-500">{blog.createdAt}</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className={`bg-gradient-to-br ${blog.author.avatarColor} text-white`}>
                    {blog.author.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{blog.author.name}</div>
                  <div className="text-sm text-gray-500">阅读时间: {blog.readTime}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleLike}
                  className={`flex items-center space-x-1 ${isLiked ? 'text-red-600' : 'text-gray-600'}`}
                >
                  <span>{isLiked ? '❤️' : '🤍'}</span>
                  <span>{mounted ? likeCount : '---'}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <span>💬</span>
                  <span>{comments.length}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <span>🔄</span>
                  <span>{mounted ? blog.shares : '---'}</span>
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-pink-600 prose-pre:bg-gray-900">
              {renderContent(blog.content)}
            </div>
          </CardContent>
        </Card>

        {/* 评论区域 */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">评论 ({comments.length})</h3>
            
            {/* 发表评论表单 */}
            <form onSubmit={handleComment} className="mb-6">
              <div className="flex space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    我
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="写下你的评论..."
                    className="w-full p-3 border rounded-lg resize-none"
                    rows={3}
                    style={{ borderColor: 'var(--renren-border)' }}
                  />
                  <div className="flex justify-end mt-2">
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      发表评论
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* 评论列表 */}
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="flex space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-br from-gray-400 to-gray-500 text-white text-sm">
                      {comment.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-sm">{comment.author}</span>
                      <span className="text-xs text-gray-500">{comment.time}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetailPage;