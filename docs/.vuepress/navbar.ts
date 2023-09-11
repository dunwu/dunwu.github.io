import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '归档',
    icon: "box-archive",
    link: "/article/",
  },
  {
    text: 'Java',
    icon: "coffee",
    prefix: '/01.Java/',
    children: [
      { text: 'JavaSE', link: '01.JavaSE/' },
      { text: 'JavaEE', link: '02.JavaEE/' },
      { text: '软件', link: '11.软件/' },
      { text: '工具', link: '12.工具/' },
      { text: '框架', link: '13.框架/' },
      { text: '中间件', link: '14.中间件/' }
    ]
  },
  {
    text: '编程',
    icon: "code",
    link: '/02.编程/'
  },
  {
    text: '设计',
    icon: "pen-ruler",
    prefix: '/03.设计/',
    children: [
      {
        text: '架构',
        prefix: '01.架构/',
        children: [
          { text: '综合', link: '00.综合/' },
          { text: '微服务', link: '01.微服务/' },
          { text: '安全', link: '02.安全/' },
          { text: '解决方案', link: '99.解决方案/' }
        ]
      },
      { text: '设计模式', link: '02.设计模式/' },
      { text: '重构', link: '03.重构/' },
      { text: 'DDD', link: '04.DDD/' },
      { text: 'UML', link: '05.UML/' }
    ]
  },
  {
    text: 'DevOps',
    icon: "wrench",
    link: '/04.DevOps/'
  },
  {
    text: '数据结构和算法',
    icon: "palette",
    link: '/11.数据结构和算法/'
  },
  {
    text: '数据库',
    icon: "database",
    prefix: "/12.数据库/",
    children: [
      { text: '数据库综合', link: '01.数据库综合' },
      { text: '数据库中间件', link: '02.数据库中间件' },
      {
        text: '关系型数据库',
        prefix: '03.关系型数据库/',
        children: [
          { text: '综合', link: '01.综合' },
          { text: 'Mysql', link: '02.Mysql' },
          { text: '其他', link: '99.其他' }
        ]
      },
      {
        text: '文档数据库',
        prefix: '04.文档数据库/',
        children: [{ text: 'MongoDB', link: '01.MongoDB' }]
      },
      {
        text: 'KV数据库',
        prefix: '05.KV数据库/',
        children: [{ text: 'Redis', link: '01.Redis' }]
      },
      {
        text: '列式数据库',
        prefix: '06.列式数据库/',
        children: [{ text: 'HBase', link: '01.HBase' }]
      },
      {
        text: '搜索引擎数据库',
        prefix: '07.搜索引擎数据库/',
        children: [
          { text: 'Elasticsearch', link: '01.Elasticsearch' },
          { text: 'Elastic技术栈', link: '02.Elastic' }
        ]
      }
    ],
  },
  {
    text: '网络',
    icon: "globe",
    link: '/13.网络/'
  },
  {
    text: '分布式',
    icon: "share-nodes",
    prefix: '/15.分布式/',
    children: [
      { text: '分布式理论', link: '01.分布式理论/' },
      { text: '分布式协同', link: '11.分布式协同/' },
      { text: '分布式调度', link: '12.分布式调度/' },
      { text: '分布式通信', link: '21.分布式通信/' },
      { text: '分布式存储', link: '22.分布式存储/' }
    ]
  },
  {
    text: '工作',
    icon: "briefcase",
    link: '/96.工作/'
  },
  {
    text: '笔记',
    icon: "note-sticky",
    link: '/99.笔记/'
  }
]);
