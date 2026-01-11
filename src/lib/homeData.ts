export interface FeedItemData {
  id: number;
  author: string;
  avatar: string;
  avatarColor?: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}

export const feedData: FeedItemData[] = [
  {
    id: 1,
    author: '张小明',
    avatar: '张',
    avatarColor: 'from-blue-600 to-blue-700',
    content: '今天天气真好，在公园里散步，感受春天的气息！🌸\n\n生活就是这样，需要我们慢慢品味，发现身边的小确幸。',
    imageUrl: 'https://picsum.photos/seed/spring/600/400.jpg',
    likes: 23,
    comments: 5,
    shares: 2,
    createdAt: '2小时前'
  },
  {
    id: 2,
    author: '李小红',
    avatar: '李',
    avatarColor: 'from-pink-500 to-pink-600',
    content: '刚完成了一个新的React项目，学到了很多新知识！💪\n\n特别是在状态管理和性能优化方面有了新的理解，分享一下学习心得：\n\n1. 使用useMemo和useCallback优化渲染\n2. 合理拆分组件，提高可维护性\n3. 使用React DevTools进行性能分析',
    likes: 45,
    comments: 12,
    shares: 8,
    createdAt: '4小时前'
  },
  {
    id: 3,
    author: '王大锤',
    avatar: '王',
    avatarColor: 'from-green-500 to-green-600',
    content: '周末去爬山了，山顶的风景太美了！🏔️\n\n人生就像爬山，虽然过程很累，但到达山顶的那一刻，所有的辛苦都值得了。',
    imageUrl: 'https://picsum.photos/seed/mountain/600/400.jpg',
    likes: 67,
    comments: 18,
    shares: 6,
    createdAt: '6小时前'
  },
  {
    id: 4,
    author: '赵小雨',
    avatar: '赵',
    avatarColor: 'from-purple-500 to-purple-600',
    content: '分享一个超赞的读书笔记：《原子习惯》\n\n这本书改变了我对习惯养成的看法。核心观点是：\n\n🎯 微小的改变带来巨大的成果\n🔥 让习惯显而易见\n🎭 让习惯有吸引力\n⏰ 让习惯简便易行\n🎉 让习惯令人愉悦\n\n推荐给想要养成好习惯的朋友们！📚',
    likes: 89,
    comments: 23,
    shares: 15,
    createdAt: '8小时前'
  },
  {
    id: 5,
    author: '刘建国',
    avatar: '刘',
    avatarColor: 'from-red-500 to-red-600',
    content: '今天参加了公司的技术分享会，主题是微服务架构。\n\n学到了很多关于服务拆分、数据一致性、分布式事务的知识。特别感谢主讲人的精彩分享！💡\n\n技术这东西，真的是活到老学到老。',
    likes: 34,
    comments: 8,
    shares: 4,
    createdAt: '10小时前'
  },
  {
    id: 6,
    author: '陈小美',
    avatar: '陈',
    avatarColor: 'from-yellow-500 to-yellow-600',
    content: '自己做了一顿丰盛的晚餐，太有成就感了！🍽️\n\n菜单：\n- 红烧肉\n- 清炒时蔬\n- 番茄蛋汤\n- 米饭\n\n生活需要仪式感，即使是简单的日常，也要用心对待。❤️',
    imageUrl: 'https://picsum.photos/seed/dinner/600/400.jpg',
    likes: 56,
    comments: 14,
    shares: 7,
    createdAt: '12小时前'
  },
  {
    id: 7,
    author: '周强',
    avatar: '周',
    avatarColor: 'from-indigo-500 to-indigo-600',
    content: '今天陪孩子去动物园，看到了很多可爱的动物们！🦁🐘🦒\n\n孩子看到熊猫时的表情太萌了，这就是陪伴的意义吧。\n\n陪伴是最长情的告白，对孩子如此，对家人也是如此。',
    imageUrl: 'https://picsum.photos/seed/zoo/600/400.jpg',
    likes: 72,
    comments: 19,
    shares: 9,
    createdAt: '1天前'
  },
  {
    id: 8,
    author: '吴小芳',
    avatar: '吴',
    avatarColor: 'from-teal-500 to-teal-600',
    content: '坚持晨跑第30天！🏃‍♀️\n\n从一开始的呼吸困难到现在可以轻松跑5公里，见证了自己的进步。\n\n健康的生活方式真的很重要，不仅身体变好了，精神状态也提升了很多。\n\n#运动打卡 #健康生活',
    likes: 48,
    comments: 11,
    shares: 5,
    createdAt: '1天前'
  },
  {
    id: 9,
    author: '孙大明',
    avatar: '孙',
    avatarColor: 'from-orange-500 to-orange-600',
    content: '深夜emo时刻...\n\n有时候会想，我们这么努力到底是为了什么？\n\n但转念一想，努力本身可能就是意义吧。在这个过程中，我们成为更好的自己。\n\n加油，打工人！💪',
    likes: 156,
    comments: 42,
    shares: 23,
    createdAt: '2天前'
  },
  {
    id: 10,
    author: '马小云',
    avatar: '马',
    avatarColor: 'from-cyan-500 to-cyan-600',
    content: '终于拿到驾照了！🎉\n\n练车三个月，今天终于通过了考试。\n\n感谢教练的耐心指导，也感谢自己的坚持不懈。\n\n接下来就是买车的计划了，大家有什么推荐吗？🚗',
    imageUrl: 'https://picsum.photos/seed/license/600/400.jpg',
    likes: 93,
    comments: 28,
    shares: 12,
    createdAt: '2天前'
  }
];

export const friendRecommendations = [
  {
    id: 1,
    name: '林晓晓',
    avatar: '林',
    avatarColor: 'from-rose-500 to-rose-600',
    mutualFriends: 12,
    bio: '热爱生活的设计师'
  },
  {
    id: 2,
    name: '黄大力',
    avatar: '黄',
    avatarColor: 'from-amber-500 to-amber-600',
    mutualFriends: 8,
    bio: '健身爱好者'
  },
  {
    id: 3,
    name: '徐小雅',
    avatar: '徐',
    avatarColor: 'from-emerald-500 to-emerald-600',
    mutualFriends: 15,
    bio: '摄影师'
  },
  {
    id: 4,
    name: '何文静',
    avatar: '何',
    avatarColor: 'from-violet-500 to-violet-600',
    mutualFriends: 6,
    bio: '文艺青年'
  },
  {
    id: 5,
    name: '唐明轩',
    avatar: '唐',
    avatarColor: 'from-sky-500 to-sky-600',
    mutualFriends: 18,
    bio: '创业者'
  }
];