import React, { useState } from 'react';
import { Card } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import Avatar from '../src/components/ui/avatar';
import Header from '../src/components/Header';

const HomePage: React.FC = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const commonEmojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '💯', '🎁', '🌟', '✨', '🎨', '🎭', '🍅', '🥳', '🚗'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header 
        title="🏠 人人网"
        actions={
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">欢迎来到人人网</span>
          </div>
        }
      />
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-6">
          {/* 左侧导航栏 */}
          <div className="w-64 hidden lg:block">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <nav className="space-y-1">
                <button 
                  className="w-full text-left px-3 py-2 rounded flex items-center space-x-2" 
                  style={{ backgroundColor: 'var(--renren-blue)', color: 'white' }}
                >
                  <span>🏠</span>
                  <span>首页</span>
                </button>
                <a href="/friends" className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center space-x-2 block">
                  <span>👥</span>
                  <span>好友</span>
                </a>
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
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold mb-3">应用</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🚗 抢车位</button>
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">💰 朋友买卖</button>
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🌾 天天农场</button>
                <button className="text-xs p-2 h-auto bg-white border border-gray-200 rounded hover:bg-gray-50">🐄 阳光牧场</button>
              </div>
            </div>
          </div>

          {/* 中间主内容区 */}
          <div className="flex-1">
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold mb-4">分享你的新鲜事...</h2>
                <div className="space-y-4">
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="说点什么吧..."
                    className="w-full p-3 border rounded-lg resize-none"
                    style={{ borderColor: 'var(--renren-border)' }}
                    rows={4}
                  />
                  
                  <div className="flex flex-col space-y-3">
                    <input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      type="text"
                      placeholder="图片URL (可选)"
                      className="w-full p-3 border rounded-lg"
                      style={{ borderColor: 'var(--renren-border)' }}
                    />
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => setShowEmoji(!showEmoji)}
                          className="px-3 py-2 border border-gray-200 rounded hover:bg-gray-50"
                          style={{ borderColor: 'var(--renren-border)' }}
                        >
                          😊
                        </button>
                        {showEmoji && (
                          <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                            <div className="grid grid-cols-5 gap-1">
                              {commonEmojis.map((emoji, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => setContent(content + emoji)}
                                  className="p-1 hover:bg-gray-100 rounded text-lg"
                                >
                                  {emoji}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <button className="px-3 py-2 border border-gray-200 rounded hover:bg-gray-50" style={{ borderColor: 'var(--renren-border)' }}>
                        🖼️ 图片
                      </button>
                      <button className="px-3 py-2 border border-gray-200 rounded hover:bg-gray-50" style={{ borderColor: 'var(--renren-border)' }}>
                        🎥 视频
                      </button>
                      <button className="px-3 py-2 border border-gray-200 rounded hover:bg-gray-50" style={{ borderColor: 'var(--renren-border)' }}>
                        🔗 链接
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{content.length}/500</span>
                    <button 
                      className="px-6 py-2 rounded-lg text-white"
                      style={{ backgroundColor: 'var(--renren-blue)' }}
                    >
                      发布
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold mb-4">动态列表</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">张</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">张小明</div>
                      <div className="text-xs text-gray-500">@zhangxiaoming</div>
                      <div className="text-gray-800 mb-4">今天天气真好，心情也格外美丽！分享一下工作中的小确幸，希望大家都开开心心~ ☀️</div>
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                          <span>❤️</span>
                          <span>42</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                          <span>💬</span>
                          <span>8</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                          <span>🔄</span>
                          <span>2</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">李</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">李小红</div>
                      <div className="text-xs text-gray-500">@lixiaohong</div>
                      <div className="text-gray-800 mb-4">周末去了趟郊外，空气清新，风景宜人。推荐大家也多出去走走，放松心情，远离城市喧嚣～ 🌿</div>
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                          <span>❤️</span>
                          <span>88</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                          <span>💬</span>
                          <span>15</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                          <span>🔄</span>
                          <span>5</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">王</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">王大伟</div>
                      <div className="text-xs text-gray-500">@wangdawei</div>
                      <div className="text-gray-800 mb-4">刚完成一个很有挑战性的项目，虽然过程很辛苦，但收获满满。感谢团队的支持和信任！继续加油！💪</div>
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                          <span>❤️</span>
                          <span>156</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                          <span>💬</span>
                          <span>23</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                          <span>🔄</span>
                          <span>12</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">赵</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">赵美丽</div>
                      <div className="text-xs text-gray-500">@zhaomeili</div>
                      <div className="text-gray-800 mb-4">文艺青年，喜欢阅读、写作和音乐。相信生活就是一场美好的旅行，记录每一个感动瞬间 📚</div>
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                          <span>❤️</span>
                          <span>26</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                          <span>💬</span>
                          <span>4</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                          <span>🔄</span>
                          <span>8</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">刘</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">刘强东</div>
                      <div className="text-xs text-gray-500">@liuqiangdong</div>
                      <div className="text-gray-800 mb-4">互联网创业者，热衷于电商和物流行业。致力于为用户提供更好的服务体验，推动行业创新发展 🚀</div>
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                          <span>❤️</span>
                          <span>34</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                          <span>💬</span>
                          <span>16</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                          <span>🔄</span>
                          <span>4</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="w-64 hidden xl:block">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4" style={{ marginBottom: '1.5rem' }}>
              <h3 className="font-bold">热门应用</h3>
              <div className="space-y-3">
                <a href="/albums" className="block text-sm hover:underline text-blue-600">抢车位</a>
                <a href="/" className="block text-sm hover:underline text-blue-600">朋友买卖</a>
                <a href="/" className="block text-sm hover:underline text-blue-600">天天农场</a>
                <a href="/" className="block text-sm hover:underline text-blue-600">阳光牧场</a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold mb-4">可能认识的人</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">王</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">王小明</div>
                    <div className="text-xs text-gray-500">5个共同好友</div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">加好友</Button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">李</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">李美丽</div>
                    <div className="text-xs text-gray-500">3个共同好友</div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">加好友</Button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">陈</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">陈小军</div>
                    <div className="text-xs text-gray-500">8个共同好友</div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">加好友</Button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">周</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">周丽娜</div>
                    <div className="text-xs text-gray-500">4个共同好友</div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">加好友</Button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">吴</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">吴晓明</div>
                    <div className="text-xs text-gray-500">6个共同好友</div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">加好友</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;