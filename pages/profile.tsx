import React from 'react';
import Header from '../src/components/Header';
import { Card, CardContent } from '../src/components/ui/card';
import { Avatar, AvatarFallback } from '../src/components/ui/avatar';
import PageHeader from '../src/components/PageHeader';

const ProfilePage: React.FC = () => {
  const profileData = {
    name: '张小明',
    username: '@zhangxiaoming',
    avatar: '张',
    avatarColor: 'from-blue-600 to-blue-700',
    bio: '这是一个友好活跃的用户，经常分享生活中的点点滴滴。喜欢旅行、摄影和美食。',
    location: '北京',
    website: 'https://zhangxiaoming.com',
    joinedDate: '2022-03-15',
    lastLogin: '2小时前'
  };

  const recentActivities = [
    {
      id: 1,
      type: 'status',
      content: '今天天气真好，在公园里散步，感受春天的气息！🌸',
      timestamp: '2小时前',
      likes: 23,
      comments: 5
    },
    {
      id: 2,
      type: 'photo',
      content: '发布了新的相册：旅行记忆',
      timestamp: '1天前',
      image: 'https://picsum.photos/seed/profile1/600/400.jpg',
      likes: 45,
      comments: 12
    },
    {
      id: 3,
      type: 'blog',
      content: '《原子习惯》读后感',
      timestamp: '3天前',
      likes: 89,
      comments: 23
    }
  ];

  const stats = {
    posts: 156,
    photos: 234,
    friends: 89,
    following: 76,
    followers: 124
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header currentPage="profile" />
      
      <div className="max-w-4xl mx-auto p-4">
        {/* 个人信息卡片 */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className={`bg-gradient-to-br ${profileData.avatarColor} text-white text-2xl font-bold`}>
                  {profileData.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                <p className="text-gray-600 mb-1">{profileData.username}</p>
                <p className="text-gray-700 mb-4">{profileData.bio}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">位置:</span>
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">网站:</span>
                    <a href={profileData.website} className="text-blue-600 hover:underline">{profileData.website}</a>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">加入时间:</span>
                    <span>{profileData.joinedDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">最后登录:</span>
                    <span>{profileData.lastLogin}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 统计信息 */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">统计信息</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{stats.posts}</div>
                <div className="text-sm text-gray-600">日志</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">{stats.photos}</div>
                <div className="text-sm text-gray-600">照片</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{stats.friends}</div>
                <div className="text-sm text-gray-600">好友</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{stats.following}</div>
                <div className="text-sm text-gray-600">关注</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{stats.followers}</div>
                <div className="text-sm text-gray-600">粉丝</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 最近动态 */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">最近动态</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {activity.type === 'status' && '💭'}
                    {activity.type === 'photo' && '📷'}
                    {activity.type === 'blog' && '📝'}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-gray-800 mb-2">{activity.content}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{activity.timestamp}</span>
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center space-x-1">
                          <span>❤️</span>
                          <span>{activity.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>💬</span>
                          <span>{activity.comments}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {activity.image && (
                    <img 
                      src={activity.image} 
                      alt="Activity image" 
                      className="mt-3 rounded-lg max-w-full"
                      style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;