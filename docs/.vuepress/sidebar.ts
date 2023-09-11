import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: '归档',
      icon: "box-archive",
      link: "/article/",
    },
    {
      text: 'Java',
      icon: "coffee",
      prefix: '01.Java/',
      collapsible: true,
      children: "structure"
    },
    {
      text: '编程',
      icon: "code",
      prefix: '02.编程/',
      collapsible: true,
      children: "structure",
    },
    {
      text: '设计',
      icon: "pen-ruler",
      prefix: '03.设计/',
      collapsible: true,
      children: "structure",
    },
    {
      text: 'DevOps',
      icon: "wrench",
      prefix: '04.DevOps/',
      collapsible: true,
      children: "structure",
    },
    {
      text: '数据结构和算法',
      icon: "palette",
      prefix: '11.数据结构和算法/',
      collapsible: true,
      children: "structure",
    },
    {
      text: "数据库",
      icon: "database",
      prefix: "12.数据库/",
      collapsible: true,
      children: "structure"
    },
    {
      text: '网络',
      icon: "globe",
      prefix: '13.网络/',
      children: "structure",
      collapsible: true
    },
    {
      text: '分布式',
      icon: "share-nodes",
      prefix: '15.分布式/',
      children: "structure",
      collapsible: true
    },
    {
      text: '工作',
      icon: "briefcase",
      prefix: '96.工作/',
      children: "structure",
      collapsible: true
    },
    {
      text: '笔记',
      icon: "note-sticky",
      prefix: '99.笔记/',
      children: "structure",
      collapsible: true
    }
    // "intro",
    // "slides",
  ],
});
