import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as o,a,b as e,d as n,e as d}from"./app-6ca995c0.js";const h={},l=d('<h1 id="cassandra" tabindex="-1"><a class="header-anchor" href="#cassandra" aria-hidden="true">#</a> Cassandra</h1><blockquote><p>Apache Cassandra 是一个高度可扩展的分区行存储。行被组织成具有所需主键的表。</p><p>最新版本：v4.0</p></blockquote><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><blockquote><p>先决条件</p><ul><li>JDK8+</li><li>Python 2.7</li></ul></blockquote><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Apache Cassandra 是一套开源分布式 Key-Value 存储系统。它最初由 Facebook 开发，用于储存特别大的数据。</p><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><h4 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性" aria-hidden="true">#</a> 主要特性</h4><ul><li>分布式</li><li>基于 column 的结构化</li><li>高伸展性</li></ul><p>Cassandra 的主要特点就是它不是一个数据库，而是由一堆数据库节点共同构成的一个分布式网络服务，对 Cassandra 的一个写操作，会被复制到其他节点上去，对 Cassandra 的读操作，也会被路由到某个节点上面去读取。对于一个 Cassandra 群集来说，扩展性能 是比较简单的事情，只管在群集里面添加节点就可以了。</p><h4 id="突出特性" tabindex="-1"><a class="header-anchor" href="#突出特性" aria-hidden="true">#</a> 突出特性</h4><ul><li><strong>模式灵活</strong> - 使用 Cassandra，像文档存储，不必提前解决记录中的字段。你可以在系统运行时随意的添加或移除字段。这是一个惊人的效率提升，特别是在大型部署上。</li><li><strong>真正的可扩展性</strong> - Cassandra 是纯粹意义上的水平扩展。为给集群添加更多容量，可以指向另一台电脑。你不必重启任何进程，改变应用查询，或手动迁移任何数据。</li><li><strong>多数据中心识别</strong> - 你可以调整你的节点布局来避免某一个数据中心起火，一个备用的数据中心将至少有每条记录的完全复制。</li><li><strong>范围查询</strong> - 如果你不喜欢全部的键值查询，则可以设置键的范围来查询。</li><li><strong>列表数据结构</strong> - 在混合模式可以将超级列添加到 5 维。对于每个用户的索引，这是非常方便的。</li><li><strong>分布式写操作</strong> - 有可以在任何地方任何时间集中读或写任何数据。并且不会有任何单点失败。</li></ul><h2 id="更多内容" tabindex="-1"><a class="header-anchor" href="#更多内容" aria-hidden="true">#</a> 更多内容</h2>',14),c={href:"http://cassandra.apache.org",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/apache/cassandra",target:"_blank",rel:"noopener noreferrer"},p=a("h2",{id:"🚪-传送",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),e(" 🚪 传送")],-1),_={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function f(b,g){const r=t("ExternalLinkIcon");return i(),o("div",null,[l,a("ul",null,[a("li",null,[a("a",c,[e("Cassandra 官网"),n(r)])]),a("li",null,[a("a",u,[e("Cassandra Github"),n(r)])])]),p,a("p",null,[e("◾ 💧 "),a("a",_,[e("钝悟的 IT 知识图谱"),n(r)]),e(" ◾")])])}const C=s(h,[["render",f],["__file","02.Cassandra.html.vue"]]);export{C as default};
