module.exports = {
  title: "朝雨箜尘",
  description: "Day Day No Bug",
  theme: "reco",
  base: "/notes/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    logo: "/yinu.jpg",
    authorAvatar: "/yinu.jpg",
    type: "blog",
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      {
        text: "其他",
        items: [
          {
            text: "掘金",
            link: "https://juejin.cn/user/1451824821580487",
            icon: "reco-juejin",
          },
          {
            text: "Github",
            link: "https://github.com/yinuuu/notes",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/dashboard",
            icon: "reco-mayun",
          },
          {
            text: "力扣",
            link: "https://leetcode.cn/",
            icon: "reco-coding",
          },
          {
            text: "bilibili",
            link: "https://www.bilibili.com",
            icon: "reco-bilibili",
          },
        ],
        icon: "reco-other",
      },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认4
        text: "标签", // 默认文案 “标签”
      },
    },
  },
  plugins: [
    [
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: "circle", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为 false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "hibiki",
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    ["vuepress-plugin-code-copy", true],
  ],
};
