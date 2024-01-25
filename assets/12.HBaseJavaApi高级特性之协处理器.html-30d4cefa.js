import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c,a as e,b as r,d as o,e as h}from"./app-ab18ad7c.js";const i={},_=h('<h1 id="hbase-java-api-高级特性之协处理器" tabindex="-1"><a class="header-anchor" href="#hbase-java-api-高级特性之协处理器" aria-hidden="true">#</a> HBase Java API 高级特性之协处理器</h1><h2 id="简述" tabindex="-1"><a class="header-anchor" href="#简述" aria-hidden="true">#</a> 简述</h2><p>在使用 HBase 时，如果你的数据量达到了数十亿行或数百万列，此时能否在查询中返回大量数据将受制于网络的带宽，即便网络状况允许，但是客户端的计算处理也未必能够满足要求。在这种情况下，协处理器（Coprocessors）应运而生。它允许你将业务计算代码放入在 RegionServer 的协处理器中，将处理好的数据再返回给客户端，这可以极大地降低需要传输的数据量，从而获得性能上的提升。同时协处理器也允许用户扩展实现 HBase 目前所不具备的功能，如权限校验、二级索引、完整性约束等。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),l={href:"https://item.jd.com/11321037.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/larsgeorge/hbase-book",target:"_blank",rel:"noopener noreferrer"};function p(f,m){const a=n("ExternalLinkIcon");return s(),c("div",null,[_,e("ul",null,[e("li",null,[e("a",l,[r("《HBase 权威指南》"),o(a)])]),e("li",null,[e("a",d,[r("《HBase 权威指南》官方源码"),o(a)])])])])}const B=t(i,[["render",p],["__file","12.HBaseJavaApi高级特性之协处理器.html.vue"]]);export{B as default};
