import { Friend } from '../components/friends/FriendList';

export const friendsData: Friend[] = [
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
    status: 'online',
    mutualFriends: 12,
    bio: '热爱生活，喜欢旅行和摄影。用镜头记录世界的美好...'
  },
  {
    id: 3,
    name: '王大锤',
    username: '@wangdachui',
    avatar: '王',
    avatarColor: 'from-green-500 to-green-600',
    status: 'offline',
    mutualFriends: 8,
    bio: '技术宅，喜欢编程和游戏。正在学习人工智能和机器学习...'
  },
  {
    id: 4,
    name: '赵小雨',
    username: '@zhaoxiaoyu',
    avatar: '赵',
    avatarColor: 'from-purple-500 to-purple-600',
    status: 'away',
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