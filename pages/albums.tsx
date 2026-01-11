import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import Header from '../src/components/Header';

const AlbumsPage: React.FC = () => {
  const albums = [
    {
      id: 1,
      title: '旅行记忆',
      description: '2023年的美好时光',
      cover: 'https://picsum.photos/seed/album1/400/300.jpg',
      photos: 12,
      createdAt: '2023-12-25',
      author: '张小明'
    },
    {
      id: 2,
      title: '美食分享',
      description: '记录生活中的美味瞬间',
      cover: 'https://picsum.photos/seed/album2/400/300.jpg',
      photos: 8,
      createdAt: '2023-12-20',
      author: '李小红'
    },
    {
      id: 3,
      title: '技术学习',
      description: '编程路上的点点滴滴',
      cover: 'https://picsum.photos/seed/album3/400/300.jpg',
      photos: 15,
      createdAt: '2023-12-18',
      author: '王大伟'
    },
    {
      id: 4,
      title: '生活随笔',
      description: '文字记录生活感悟',
      cover: 'https://picsum.photos/seed/album4/400/300.jpg',
      photos: 6,
      createdAt: '2023-12-15',
      author: '赵美丽'
    },
    {
      id: 5,
      title: '工作日常',
      description: '创业路上的风景',
      cover: 'https://picsum.photos/seed/album5/400/300.jpg',
      photos: 10,
      createdAt: '2023-12-22',
      author: '刘强东'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header 
        title="📷 我的相册"
        actions={
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
              上传照片
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              创建相册
            </button>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold" style={{ color: '#111827' }}>
              全部相册 ({albums.length})
            </h2>
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-gray-200 rounded-lg" style={{ borderColor: 'var(--renren-border)' }}>
                <option>最新创建</option>
                <option>最多照片</option>
                <option>最多访问</option>
              </select>
              <input
                type="text"
                placeholder="搜索相册..."
                className="px-3 py-2 border border-gray-200 rounded-lg"
                style={{ borderColor: 'var(--renren-border)' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Card key={album.id} className="renren-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={album.cover} 
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                      <h3 className="text-white font-semibold text-lg">{album.title}</h3>
                      <p className="text-white text-sm opacity-90">{album.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{album.photos} 张照片</span>
                      <span className="text-xs text-gray-400">• 创建于 {album.createdAt}</span>
                    </div>
                    <span className="text-sm text-gray-600">by {album.author}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded">
                      查看相册
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-200 hover:bg-gray-50 rounded">
                      编辑
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-200 hover:bg-gray-50 rounded">
                      删除
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumsPage;