import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o,c as s,a as e,b as t,d as i,e as n}from"./app-ab18ad7c.js";const c={},d=n('<h1 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h1><p>在计算机科学中，一个图就是一些<em>顶点</em>的集合，这些顶点通过一系列<em>边</em>结对（连接）。顶点用圆圈表示，边就是这些圆圈之间的连线。顶点之间通过边连接。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/data-structure/graph/graph.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="什么是图" tabindex="-1"><a class="header-anchor" href="#什么是图" aria-hidden="true">#</a> 什么是图</h2>',4),h=e("li",null,[e("strong",null,"阶（Order）"),t(" - 图 G 中点集 V 的大小称作图 G 的阶。")],-1),u=e("li",null,[e("strong",null,"子图（Sub-Graph）"),t(" - 当图 G'=(V',E')其中 V‘包含于 V，E’包含于 E，则 G'称作图 G=(V,E)的子图。每个图都是本身的子图。")],-1),g=e("li",null,"生成子图（Spanning Sub-Graph） - 指满足条件 V(G') = V(G)的 G 的子图 G'。",-1),_={href:"https://baike.baidu.com/item/%E9%9D%9E%E7%A9%BA%E5%AD%90%E9%9B%86/10180460",target:"_blank",rel:"noopener noreferrer"},p=n("<li><strong>有向图</strong> - 如果给图的每条边规定一个方向，那么得到的图称为有向图。</li><li><strong>无向图</strong> - 边没有方向的图称为无向图。</li><li><strong>度（Degree）</strong> - 一个顶点的度是指与该顶点相关联的边的条数，顶点 v 的度记作 d(v)。</li><li><strong>入度（In-degree）<strong>和</strong>出度（Out-degree）</strong> - 对于有向图来说，一个顶点的度可细分为入度和出度。一个顶点的入度是指与其关联的各边之中，以其为终点的边数；出度则是相对的概念，指以该顶点为起点的边数。</li><li><strong>自环（Loop）</strong> - 若一条边的两个顶点为同一顶点，则此边称作自环。</li>",5),m={href:"https://baike.baidu.com/item/%E9%A1%B6%E7%82%B9",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,[e("strong",null,"行迹（Trace）"),t(" - 如果路径 P(u,v)中的边各不相同，则该路径称为 u 到 v 的一条行迹。闭的行迹称作回路（Circuit）。")],-1),G=e("li",null,[e("strong",null,"轨迹（Track）"),t(" - 如果路径 P(u,v)中的顶点各不相同，则该路径称为 u 到 v 的一条轨迹。闭的轨迹称作圈（Cycle）。")],-1),v=e("strong",null,"桥（Bridge）",-1),b={href:"https://baike.baidu.com/item/%E6%A1%A5",target:"_blank",rel:"noopener noreferrer"},V=n('<p>如果图的边没有方向性，则被成为无向图。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220314093554.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="图的基本操作" tabindex="-1"><a class="header-anchor" href="#图的基本操作" aria-hidden="true">#</a> 图的基本操作</h2><ul><li>创建一个图结构 - CreateGraph(G)</li><li>检索给定顶点 - LocateVex(G,elem)</li><li>获取图中某个顶点 - GetVex(G,v)</li><li>为图中顶点赋值 - PutVex(G,v,value)</li><li>返回第一个邻接点 - FirstAdjVex(G,v)</li><li>返回下一个邻接点 - NextAdjVex(G,v,w)</li><li>插入一个顶点 - InsertVex(G,v)</li><li>删除一个顶点 - DeleteVex(G,v)</li><li>插入一条边 - InsertEdge(G,v,w)</li><li>删除一条边 - DeleteEdge(G,v,w)</li><li>遍历图 - Traverse(G,v)</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',5),E={href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"};function x(k,A){const r=a("ExternalLinkIcon");return o(),s("div",null,[d,e("ul",null,[h,u,g,e("li",null,[t("导出子图（Induced Subgraph） - 以图 G 的顶点集 V 的"),e("a",_,[t("非空子集"),i(r)]),t("V1 为顶点集，以两端点均在 V1 中的全体边为边集的 G 的子图，称为 V1 导出的导出子图；以图 G 的边集 E 的非空子集 E1 为边集，以 E1 中边关联的顶点的全体为顶点集的 G 的子图，称为 E1 导出的导出子图。")]),p,e("li",null,[t("路径（Path） - 从 u 到 v 的一条路径是指一个序列 v0,e1,v1,e2,v2,...ek,vk，其中 ei 的顶点为 vi 及 vi - 1，k 称作路径的长度。如果它的起止顶点相同，该路径是“闭”的，反之，则称为“开”的。一条路径称为一简单路径(simple path)，如果路径中除起始与终止"),e("a",m,[t("顶点"),i(r)]),t("可以重合外，所有顶点两两不等。")]),f,G,e("li",null,[v,t(" - 若去掉一条边，便会使得整个图不连通，该边称为"),e("a",b,[t("桥"),i(r)]),t("。")])]),V,e("ul",null,[e("li",null,[e("a",E,[t("数据结构与算法之美"),i(r)])])])])}const I=l(c,[["render",x],["__file","05.图.html.vue"]]);export{I as default};
