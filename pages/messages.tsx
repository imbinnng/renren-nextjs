import React, { useEffect, useState } from 'react';
import Header from '../src/components/Header';
import { Card, CardContent } from '../src/components/ui/card';
import { Avatar, AvatarFallback } from '../src/components/ui/avatar';
import PageHeader from '../src/components/PageHeader';

const MessagesPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const conversations = [
    {
      id: 1,
      sender: {
        name: '李小红',
        avatar: '李',
        avatarColor: 'from-pink-500 to-pink-600'
      },
      content: '今天天气真好，一起去公园走走吗？🌸',
      timestamp: '10:30',
      unread: true
    },
    {
      id: 2,
      sender: {
        name: '王大锤',
        avatar: '王',
        avatarColor: 'from-blue-600 to-blue-700'
      },
      content: '周末有空吗？想约大家一起聚餐！🍽️',
      timestamp: '昨天',
      unread: true
    },
    {
      id: 3,
      sender: {
        name: '赵小雨',
        avatar: '赵',
        avatarColor: 'from-purple-500 to-purple-600'
      },
      content: '项目文档已经更新了，请大家查看。',
      timestamp: '2小时前',
      unread: false
    },
    {
      id: 4,
      sender: {
        name: '刘建国',
        avatar: '刘',
        avatarColor: 'from-green-500 to-green-600'
      },
      content: '明天上午10点开会，请大家准时参加。💼',
      timestamp: '3小时前',
      unread: false
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header currentPage="messages" />
      
      <div className="max-w-6xl mx-auto p-4">
        <PageHeader
          title="消息中心"
          subtitle="3 条未读消息"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">对话</h3>
            {conversations.map((conversation) => (
              <Card key={conversation.id} className={`cursor-pointer hover:shadow-lg transition-shadow ${conversation.unread ? 'ring-2 ring-blue-500' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3 space-y-2">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className={`bg-gradient-to-br ${conversation.sender.avatarColor} text-white`}>
                        {conversation.sender.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <h4 className="font-semibold text-gray-900">{conversation.sender.name}</h4>
                          {conversation.unread && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 mt-2">{conversation.content}</p>
                  <div className="flex justify-end mt-2 items-center space-x-4 text-sm text-gray-500">
                    {mounted ? (
                      <>
                        <span>❤️ {Math.floor(Math.random() * 50) + 20}</span>
                        <span>💬 {Math.floor(Math.random() * 20) + 5}</span>
                        <span>🔄 {Math.floor(Math.random() * 10) + 2}</span>
                      </>
                    ) : (
                      <>
                        <span>❤️ --</span>
                        <span>💬 --</span>
                        <span>🔄 --</span>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">与李小红聊天</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded hover:bg-gray-100">📞 语音</button>
                    <button className="p-2 rounded hover:bg-gray-100">📹 视频</button>
                    <button className="p-2 rounded hover:bg-gray-100">📷 图片</button>
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex justify-start">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-br from-pink-500 to-pink-600 text-white text-sm">
                          李
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">李小红</div>
                        <div className="text-xs text-gray-500">10:30</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg max-w-xs">
                      今天天气真好，一起去公园走走吗？🌸
                    </div>
                    
                    <div className="flex justify-start mt-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-sm">
                          我
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3 flex-1">
                        <div className="text-sm font-medium text-gray-900">我</div>
                        <div className="text-xs text-gray-500">10:32</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                      好啊，看起来天气确实不错！🌤
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center space-x-2 p-4 border-t">
                    <input
                      type="text"
                      placeholder="输入消息..."
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm"
                      style={{ borderColor: 'var(--renren-border)' }}
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                      发送
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;