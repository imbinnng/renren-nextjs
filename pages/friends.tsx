import React from 'react';
import { Card, CardContent } from '../src/components/ui/card';

const friendsData = [
  {
    id: 1,
    name: '张小明',
    username: '@zhangxiaoming',
    avatar: '张',
    avatarColor: 'from-blue-600 to-blue-700',
    status: 'online',
    mutualFriends: 15,
    bio: '这是一个友好活跃的用户，经常分享生活中的点点滴滴...'
  },
  {
    id: 2,
    name: '李小红',
    username: '@lixiaohong',
    avatar: '李',
    avatarColor: 'from-pink-500 to-pink-600',
    status: 'offline',
    mutualFriends: 8,
    bio: '热爱生活，喜欢旅行和摄影。记录美好的瞬间，分享快乐的心情...'
  },
  {
    id: 3,
    name: '王大伟',
    username: '@wangdawei',
    avatar: '王',
    avatarColor: 'from-green-500 to-green-600',
    status: 'online',
    mutualFriends: 12,
    bio: '技术爱好者，喜欢编程和开源项目。正在学习新的技术栈...'
  },
  {
    id: 4,
    name: '赵美丽',
    username: '@zhaomeili',
    avatar: '赵',
    avatarColor: 'from-purple-500 to-purple-600',
    status: 'online',
    mutualFriends: 6,
    bio: '文艺青年，喜欢阅读、写作和音乐。相信生活就是一场美好的旅行...'
  },
  {
    id: 5,
    name: '刘强东',
    username: '@liuqiangdong',
    avatar: '刘',
    avatarColor: 'from-red-500 to-red-600',
    status: 'offline',
    mutualFriends: 23,
    bio: '互联网创业者，热衷于电商和物流行业。致力于为用户提供更好的服务体验。'
  },
  {
    id: 6,
    name: '陈小芳',
    username: '@chenxiaofang',
    avatar: '陈',
    avatarColor: 'from-yellow-500 to-yellow-600',
    status: 'online',
    mutualFriends: 18,
    bio: '美食爱好者，喜欢烹饪和分享食谱。认为美食是连接人与人之间的最好桥梁。'
  }
];

const FriendsPage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-6">
          {/* 左侧导航 */}
          <div className="w-64 hidden lg:block">
            <Card className="p-4">
              <nav className="space-y-1">
                <a href="/" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>🏠</span>
                  <span>首页</span>
                </a>
                <button 
                  className="w-full text-left px-3 py-2 rounded flex items-center space-x-2" 
                  style={{ backgroundColor: 'var(--renren-blue)', color: 'white' }}
                >
                  <span>👥</span>
                  <span>好友</span>
                </button>
                <a href="/albums" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>📷</span>
                  <span>相册</span>
                </a>
                <a href="/blogs" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>📝</span>
                  <span>日志</span>
                </a>
                <a href="/share" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>🔄</span>
                  <span>分享</span>
                </a>
              </nav>
            </Card>

            <Card className="p-4">
              <h3 className="font-bold mb-3">好友搜索</h3>
              <input
                type="text"
                placeholder="搜索好友..."
                className="w-full p-2 border rounded-lg"
                style={{ borderColor: 'var(--renren-border)' }}
              />
            </Card>
          </div>

          {/* 右侧好友列表 */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">好友列表</h2>
              <div className="text-sm text-gray-600 mb-4">
                共 {friendsData.length} 位好友
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {friendsData.map((friend) => (
                <Card key={friend.id} className="renren-card p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                         style={{ backgroundImage: `linear-gradient(to bottom right, ${friend.avatarColor.split(' ').map(c => c.startsWith('from') ? c.replace('from', 'from').replace('to', 'to') : c).join(', ')})` }}
                    >
                      {friend.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{friend.name}</h3>
                      <p className="text-sm text-gray-500">{friend.username}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className="text-sm text-gray-500">
                          {friend.status === 'online' ? '在线' : '离线'}
                        </span>
                        <span className="text-xs text-gray-500">· {friend.mutualFriends} 个共同好友</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                        {friend.bio}
                      </p>
                      <div className="flex gap-2 mt-3">
                        <button 
                          size="sm" 
                          variant="outline"
                          className="flex-1"
                        >
                          发消息
                        </button>
                        <button 
                          size="sm" 
                          variant="outline"
                          className="flex-1"
                        >
                          查看主页
                        </button>
                        <button 
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          加好友
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;