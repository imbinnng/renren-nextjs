import React, { useState } from 'react';
import Header from '../src/components/Header';
import { Card, CardContent } from '../src/components/ui/card';
import PageHeader from '../src/components/PageHeader';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const settingsTabs = [
    { id: 'profile', label: '个人资料', icon: '👤' },
    { id: 'privacy', label: '隐私设置', icon: '🔒' },
    { id: 'notifications', label: '通知设置', icon: '🔔' },
    { id: 'account', label: '账号安全', icon: '🛡️' },
    { id: 'appearance', label: '外观设置', icon: '🎨' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header currentPage="settings" />
      
      <div className="max-w-6xl mx-auto p-4">
        <PageHeader
          title="个人设置"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">设置</h3>
                <div className="space-y-2">
                  {settingsTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gray-100'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      <div>
                        <div className="font-medium">{tab.label}</div>
                        <div className="text-sm text-gray-500">
                          {tab.id === 'profile' && '基本信息、头像设置'}
                          {tab.id === 'privacy' && '隐私权限、数据管理'}
                          {tab.id === 'notifications' && '消息通知、邮件设置'}
                          {tab.id === 'account' && '密码修改、登录安全'}
                          {tab.id === 'appearance' && '主题皮肤、界面设置'}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">个人资料</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                      <input
                        type="text"
                        defaultValue="张小明"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        style={{ borderColor: 'var(--renren-border)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">昵称</label>
                      <input
                        type="text"
                        defaultValue="@zhangxiaoming"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        style={{ borderColor: 'var(--renren-border)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                      <input
                        type="email"
                        defaultValue="zhangxiaoming@example.com"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        style={{ borderColor: 'var(--renren-border)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">手机</label>
                      <input
                        type="tel"
                        defaultValue="13800138000"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        style={{ borderColor: 'var(--renren-border)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">生日</label>
                      <input
                        type="date"
                        defaultValue="1990-01-01"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        style={{ borderColor: 'var(--renren-border)' }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;