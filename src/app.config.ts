export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/friend/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#2c2c2c',
    selectedColor: '#d81e06',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'public/tabBar/music-1.png',
        selectedIconPath: 'public/tabBar/music-1-select.png',
        text: '发现'
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'public/tabBar/music-2.png',
        selectedIconPath: 'public/tabBar/music-2-select.png',
        text: '我的'
      },
      {
        pagePath: 'pages/friend/index',
        iconPath: 'public/tabBar/mine.png',
        selectedIconPath: 'public/tabBar/mine-select.png',
        text: '关注'
      },
    ]
  }
})
