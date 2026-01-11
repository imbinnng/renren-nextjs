import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto py-6 px-4">
        <div className="space-y-6">
          <div className="text-2xl font-bold text-gray-900 mb-2">人人网</div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">首页</a>
            <a href="/friends" className="text-gray-600 hover:text-blue-800">好友</a>
            <a href="/albums" className="text-gray-600 hover:text-blue-800">相册</a>
            <a href="/blogs" className="text-gray-600 hover:text-blue-800">日志</a>
            <a href="/share" className="text-gray-600 hover:text-blue-800">分享</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          <Card className="renren-card">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://picsum.photos/seed/user1/100/100.jpg" alt="张小明" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold">张</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg truncate">张小明</CardTitle>
                  <CardDescription>@zhangxiaoming</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500">在线</span>
                <span className="text-xs text-gray-500">15 个共同好友</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 line-clamp-2">
                这是一个友好活跃的用户，经常分享生活中的点点滴滴...
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2 w-full">
                <Button size="sm" variant="outline" className="flex-1">发消息</Button>
                <Button size="sm" variant="outline" className="flex-1">查看主页</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">添加好友</Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="renren-card">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://picsum.photos/seed/user2/100/100.jpg" alt="李小红" />
                  <AvatarFallback className="bg-gradient-to-br from-pink-500 to-pink-600 text-white font-bold">李</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg truncate">李小红</CardTitle>
                  <CardDescription>@lixiaohong</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500">离线</span>
                <span className="text-xs text-gray-500">8 个共同好友</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 line-clamp-2">
                热爱生活，喜欢旅行和摄影。记录美好的瞬间，分享快乐的心情...
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2 w-full">
                <Button size="sm" variant="outline" className="flex-1">发消息</Button>
                <Button size="sm" variant="outline" className="flex-1">查看主页</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">添加好友</Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="renren-card">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://picsum.photos/seed/user3/100/100.jpg" alt="王大伟" />
                  <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white font-bold">王</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg truncate">王大伟</CardTitle>
                  <CardDescription>@wangdawei</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500">在线</span>
                <span className="text-xs text-gray-500">12 个共同好友</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 line-clamp-2">
                技术爱好者，喜欢编程和开源项目。正在学习新的技术栈...
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2 w-full">
                <Button size="sm" variant="outline" className="flex-1">发消息</Button>
                <Button size="sm" variant="outline" className="flex-1">查看主页</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">添加好友</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HomePage;