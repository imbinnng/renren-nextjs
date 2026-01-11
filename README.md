# 人人网 - Next.js 社交平台

🎉 基于现代技术栈构建的人人网风格社交网络平台

## ✨ 功能特性

### 🏠 核心功能
- **📱 动态发布** - 分享文字、图片、音乐、视频
- **👥 好友系统** - 好友管理、在线状态、共同好友
- **📷 相册管理** - 照片上传、相册分类、隐私设置
- **📝 博客系统** - 文章发布、分类管理、评论互动
- **🔄 内容分享** - 好友动态、热门内容推荐

### 🌟 新增功能
- **👤 个人资料页** - 完整的用户信息展示与编辑
- **💬 消息系统** - 实时对话、消息通知、聊天管理
- **⚙️ 用户设置** - 个人信息、通知偏好、隐私控制、账户安全

### 🎨 界面设计
- **人人网风格** - 经典的蓝色主题配色
- **响应式设计** - 完美适配移动端和桌面端
- **现代化UI** - 使用Tailwind CSS构建
- **流畅动画** - 悬停效果、过渡动画
- **增强导航** - 活跃状态高亮、用户下拉菜单

### 🛠️ 技术亮点
- **Next.js 14.0.0** - 现代化React全栈框架
- **TypeScript** - 类型安全的开发体验
- **组件化架构** - 可复用的UI组件库
- **模块化设计** - 清晰的代码组织结构
- **性能优化** - 快速加载和渲染

## 🚀 技术栈

### 前端框架
- **Next.js 14.0.0** - React全栈应用框架
- **React 18.3.1** - 用户界面库
- **TypeScript** - 静态类型检查
- **PostCSS** - CSS处理工具

### 样式与UI
- **Tailwind CSS v3** - 原子化CSS框架
- **自定义CSS变量** - 人人网主题色彩
- **响应式设计** - 移动端优先设计

### 开发工具
- **ESLint** - 代码质量检查
- **TypeScript Compiler** - 类型检查与编译
- **VS Code** - 推荐开发环境

## 🌐 完整页面功能

### 🏠 首页 `/`
- **状态发布器** - 文字输入、表情选择、多媒体上传
- **动态时间线** - 好友动态、点赞评论、内容分享
- **侧边栏组件** - 好友推荐、热门话题、快速链接
- **响应式布局** - 桌面端三栏、移动端单栏

### 👥 好友页面 `/friends`
- **好友网格** - 响应式好友卡片布局
- **好友搜索** - 快速查找和筛选功能
- **在线状态** - 实时状态显示
- **共同好友** - 好友关系可视化

### 📷 相册页面 `/albums`
- **相册网格** - 多种相册展示模式
- **相册管理** - 创建、编辑、删除相册
- **隐私设置** - 相册访问权限控制
- **批量操作** - 多选和管理功能

### 📝 博客页面 `/blogs`
- **文章列表** - 博客文章展示和分类
- **文章详情** - 完整的文章阅读体验
- **评论系统** - 用户互动和讨论
- **标签管理** - 内容分类和搜索

### 📤 分享页面 `/share`
- **内容分享** - 多媒体内容发布
- **互动功能** - 点赞、评论、转发
- **内容发现** - 热门内容推荐

### 👤 个人资料页 `/profile`
- **个人信息展示** - 头像、简介、统计数据
- **近期动态** - 用户活动时间线
- **编辑功能** - 个人信息实时编辑
- **统计数据** - 帖子、照片、好友、关注数

### 💬 消息页面 `/messages`
- **对话列表** - 好友和群组聊天
- **实时聊天** - 消息发送和接收
- **未读通知** - 消息提醒和状态指示
- **聊天设置** - 通知偏好和管理选项

### ⚙️ 设置页面 `/settings`
- **个人资料设置** - 基本信息编辑和隐私控制
- **通知设置** - 消息偏好和提醒管理
- **账户安全** - 密码修改、双因子认证
- **外观设置** - 主题、字体、语言偏好

## 📱 响应式设计

### 移动端 (< 768px)
- 单列布局
- 触摸友好的按钮
- 优化的导航体验
- 底部导航栏

### 平板端 (768px - 1024px)
- 两列好友布局
- 适配的组件尺寸
- 平衡的视觉效果

### 桌面端 (> 1024px)
- 多列网格布局
- 悬停交互效果
- 充分利用屏幕空间
- 侧边栏导航

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── friends/           # 好友页面
│   │   └── page.tsx
│   ├── albums/            # 相册页面
│   │   └── page.tsx
│   ├── blogs/             # 博客页面
│   │   └── page.tsx
│   ├── share/             # 分享页面
│   │   └── page.tsx
│   ├── profile/           # 个人资料页
│   │   └── page.tsx
│   ├── messages/          # 消息页面
│   │   └── page.tsx
│   └── settings/          # 设置页面
│       └── page.tsx
├── components/             # 可复用组件
│   ├── Header.tsx         # 全局导航栏
│   ├── PageHeader.tsx     # 页面头部
│   ├── UserDropdown.tsx   # 用户下拉菜单
│   ├── ui/                # UI基础组件
│   │   ├── Button.tsx     # 按钮组件
│   │   ├── Card.tsx       # 卡片组件
│   │   ├── Avatar.tsx     # 头像组件
│   │   ├── Input.tsx      # 输入框组件
│   │   └── Textarea.tsx   # 文本域组件
│   ├── home/              # 首页组件
│   │   ├── StatusComposer.tsx  # 状态发布器
│   │   ├── FeedItem.tsx        # 动态项
│   │   ├── FeedList.tsx        # 动态列表
│   │   ├── Sidebar.tsx         # 侧边栏
│   │   └── FriendRecommendations.tsx  # 好友推荐
│   ├── friends/           # 好友页面组件
│   │   ├── FriendCard.tsx     # 好友卡片
│   │   ├── FriendList.tsx     # 好友列表
│   │   └── FriendSearch.tsx   # 好友搜索
│   ├── albums/            # 相册页面组件
│   │   ├── AlbumCard.tsx      # 相册卡片
│   │   └── AlbumGrid.tsx      # 相册网格
│   ├── messages/          # 消息页面组件
│   │   ├── ConversationList.tsx  # 对话列表
│   │   └── ChatInterface.tsx     # 聊天界面
│   └── settings/          # 设置页面组件
│       ├── ProfileSettings.tsx   # 个人设置
│       ├── NotificationSettings.tsx  # 通知设置
│       ├── AccountSecurity.tsx    # 账户安全
│       └── AppearanceSettings.tsx   # 外观设置
├── lib/                   # 工具库
│   ├── data.ts            # 模拟数据
│   ├── types.ts           # TypeScript类型
│   └── utils.ts           # 工具函数
├── styles/                # 样式文件
│   └── globals.css        # 全局样式
├── next.config.js         # Next.js配置
├── tailwind.config.js     # Tailwind配置
├── tsconfig.json          # TypeScript配置
└── package.json           # 项目依赖
```

## 🛠️ 快速开始

### 环境要求
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 或 **pnpm** >= 7.0.0

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 开发环境
```bash
npm run dev
# 或
pnpm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用

### 构建生产版本
```bash
npm run build
# 或
pnpm run build
```

### 启动生产服务器
```bash
npm start
# 或
pnpm start
```

## 🎨 主题定制

### CSS变量
项目使用CSS变量定义人人网主题色彩：

```css
:root {
  --renren-blue: #005EAC;      /* 人人网经典蓝 */
  --renren-border: #e5e7eb;    /* 边框颜色 */
  --renren-bg: #f8f9fa;         /* 页面背景 */
}
```

### 组件样式
所有组件都使用Tailwind CSS构建，可以通过修改 `tailwind.config.js` 进行主题定制。

## 📦 组件库

### 基础UI组件
- **Button** - 按钮组件，多种变体和尺寸
- **Card** - 卡片组件，用于内容展示
- **Avatar** - 用户头像组件，支持默认SVG图标
- **Input** - 输入框组件
- **Textarea** - 文本域组件

### 导航组件
- **Header** - 全局导航栏，包含logo、导航菜单、用户下拉菜单
- **PageHeader** - 页面头部组件，可自定义标题和操作按钮
- **UserDropdown** - 用户下拉菜单，包含个人资料、设置等链接

### 首页组件
- **StatusComposer** - 状态发布器，支持表情和多媒体
- **FeedItem** - 动态项组件，展示单条动态内容
- **FeedList** - 动态列表，分页加载
- **Sidebar** - 侧边栏组件
- **FriendRecommendations** - 好友推荐组件

### 好友页面组件
- **FriendCard** - 好友卡片组件
- **FriendList** - 好友列表组件
- **FriendSearch** - 好友搜索组件

### 相册页面组件
- **AlbumCard** - 相册卡片组件
- **AlbumGrid** - 相册网格组件

### 消息页面组件
- **ConversationList** - 对话列表组件
- **ChatInterface** - 聊天界面组件

### 设置页面组件
- **ProfileSettings** - 个人资料设置组件
- **NotificationSettings** - 通知设置组件
- **AccountSecurity** - 账户安全组件
- **AppearanceSettings** - 外观设置组件

## 🌟 核心特性详解

### 🧭 导航系统
- **全局Header** - 一致的导航体验，活跃状态高亮
- **用户下拉菜单** - 快速访问个人资料和设置
- **页面头部** - 各页面专属的头部组件
- **响应式导航** - 移动端优化的导航体验

### 📝 StatusComposer (状态发布器)
- 支持文字输入和表情选择
- 多媒体上传（图片、音乐、视频）
- 实时字符计数
- 表情面板快速选择

### 👥 Friends (好友系统)
- 响应式网格布局
- 在线状态显示
- 共同好友统计
- 快捷操作按钮

### 📷 Albums (相册管理)
- 多种视图模式
- 隐私级别设置
- 批量操作支持
- 图片懒加载

### 💬 Messages (消息系统)
- 实时对话界面
- 消息通知和未读提示
- 聊天历史记录
- 丰富的交互功能

### ⚙️ Settings (用户设置)
- 分类设置界面
- 实时预览功能
- 数据验证和保存
- 安全性控制

## 🚀 部署指南

### Vercel部署
1. 连接GitHub仓库到Vercel
2. 设置构建命令：`npm run build`
3. 设置输出目录：`build`
4. 部署完成

### Netlify部署
1. 连接GitHub仓库到Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`build`
4. 部署完成

### 自托管部署
```bash
# 构建项目
npm run build

# 使用预览服务器
npm run preview

# 或使用其他静态服务器
npx serve build
```

## 🤝 贡献指南

### 开发流程
1. Fork 项目仓库
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -m 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 创建 Pull Request

### 代码规范
- 使用TypeScript进行类型检查
- 遵循ESLint规则
- 组件使用PascalCase命名
- 保持一致的代码风格

## 🚀 部署指南

### Vercel部署
1. 连接GitHub仓库到Vercel
2. 设置构建命令：`npm run build`
3. 设置输出目录：`.next`
4. 设置启动命令：`npm start`
5. 部署完成

### Netlify部署
1. 连接GitHub仓库到Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`out`
4. 在 `next.config.js` 中添加输出配置：
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```
5. 部署完成

### 自托管部署
```bash
# 构建项目
npm run build

# 启动生产服务器
npm start

# 或使用PM2
pm2 start npm --name "renren-social" -- start
```

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React全栈应用框架
- [React](https://react.dev/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - JavaScript超集
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架

---

**人人网重现项目** - 用现代Next.js技术栈致敬经典社交平台 🚀

如果这个项目对你有帮助，请给个 ⭐ Star！