import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as s,a as e,b as o,d as t,e as n}from"./app-ee97b13a.js";const c={},d=n('<h1 id="hbase-数据模型" tabindex="-1"><a class="header-anchor" href="#hbase-数据模型" aria-hidden="true">#</a> HBase 数据模型</h1><p>HBase 是一个面向 <code>列</code> 的数据库管理系统，这里更为确切的而说，HBase 是一个面向 <code>列族</code> 的数据库管理系统。表 schema 仅定义列族，表具有多个列族，每个列族可以包含任意数量的列，列由多个单元格（cell）组成，单元格可以存储多个版本的数据，多个版本数据以时间戳进行区分。</p><h2 id="hbase-逻辑存储结构" tabindex="-1"><a class="header-anchor" href="#hbase-逻辑存储结构" aria-hidden="true">#</a> HBase 逻辑存储结构</h2><ul><li><strong><code>Table</code></strong>：Table 由 Row 和 Column 组成。</li><li><strong><code>Row</code></strong>：Row 是列族（Column Family）的集合。</li><li><strong><code>Row Key</code></strong>：<strong><code>Row Key</code> 是用来检索记录的主键</strong>。 <ul><li><code>Row Key</code> 是未解释的字节数组，所以理论上，任何数据都可以通过序列化表示成字符串或二进制，从而存为 HBase 的键值。</li><li>表中的行，是按照 <code>Row Key</code> 的字典序进行排序。这里需要注意以下两点： <ul><li>因为字典序对 Int 排序的结果是 1,10,100,11,12,13,14,15,16,17,18,19,2,20,21,…,9,91,92,93,94,95,96,97,98,99。如果你使用整型的字符串作为行键，那么为了保持整型的自然序，行键必须用 0 作左填充。</li><li>行的一次读写操作是原子性的 (不论一次读写多少列)。</li></ul></li><li>所有对表的访问都要通过 Row Key，有以下三种方式： <ul><li>通过指定的 <code>Row Key</code> 进行访问；</li><li>通过 <code>Row Key</code> 的 range 进行访问，即访问指定范围内的行；</li><li>进行全表扫描。</li></ul></li></ul></li><li><strong><code>Column Family</code></strong>：即列族。HBase 表中的每个列，都归属于某个列族。列族是表的 Schema 的一部分，所以列族需要在创建表时进行定义。 <ul><li>一个表的列族必须作为表模式定义的一部分预先给出，但是新的列族成员可以随后按需加入。</li><li>同一个列族的所有成员具有相同的前缀，例如 <code>info:format</code>，<code>info:geo</code> 都属于 <code>info</code> 这个列族。</li></ul></li><li><strong><code>Column Qualifier</code></strong>：列限定符。可以理解为是具体的列名，例如 <code>info:format</code>，<code>info:geo</code> 都属于 <code>info</code> 这个列族，它们的列限定符分别是 <code>format</code> 和 <code>geo</code>。列族和列限定符之间始终以冒号分隔。需要注意的是列限定符不是表 Schema 的一部分，你可以在插入数据的过程中动态创建列。</li><li><strong><code>Column</code></strong>：HBase 中的列由列族和列限定符组成，由 <code>:</code>(冒号) 进行分隔，即一个完整的列名应该表述为 <code>列族名 ：列限定符</code>。</li><li><strong><code>Cell</code></strong>：<code>Cell</code> 是行，列族和列限定符的组合，并包含值和时间戳。HBase 中通过 <code>row key</code> 和 <code>column</code> 确定的为一个存储单元称为 <code>Cell</code>，你可以等价理解为关系型数据库中由指定行和指定列确定的一个单元格，但不同的是 HBase 中的一个单元格是由多个版本的数据组成的，每个版本的数据用时间戳进行区分。 <ul><li><code>Cell</code> 由行和列的坐标交叉决定，是有版本的。默认情况下，版本号是自动分配的，为 HBase 插入 <code>Cell</code> 时的时间戳。<code>Cell</code> 的内容是未解释的字节数组。</li><li></li></ul></li><li><strong><code>Timestamp</code></strong>：<code>Cell</code> 的版本通过时间戳来索引，时间戳的类型是 64 位整型，时间戳可以由 HBase 在数据写入时自动赋值，也可以由客户显式指定。每个 <code>Cell</code> 中，不同版本的数据按照时间戳倒序排列，即最新的数据排在最前面。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/bigdata/hbase/1551164224778.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="hbase-物理存储结构" tabindex="-1"><a class="header-anchor" href="#hbase-物理存储结构" aria-hidden="true">#</a> HBase 物理存储结构</h2><p>HBase 自动将表水平划分成区域（Region）。每个 Region 由表中 Row 的子集构成。每个 Region 由它所属的表的起始范围来表示（包含的第一行和最后一行）。初始时，一个表只有一个 Region，随着 Region 膨胀，当超过一定阈值时，会在某行的边界上分裂成两个大小基本相同的新 Region。在第一次划分之前，所有加载的数据都放在原始 Region 所在的那台服务器上。随着表变大，Region 个数也会逐渐增加。Region 是在 HBase 集群上分布数据的最小单位。</p><h2 id="hbase-数据模型示例" tabindex="-1"><a class="header-anchor" href="#hbase-数据模型示例" aria-hidden="true">#</a> HBase 数据模型示例</h2><p>下图为 HBase 中一张表的：</p><ul><li>RowKey 为行的唯一标识，所有行按照 RowKey 的字典序进行排序；</li><li>该表具有两个列族，分别是 personal 和 office;</li><li>其中列族 personal 拥有 name、city、phone 三个列，列族 office 拥有 tel、addres 两个列。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200601172926.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',11),h=e("em",null,"图片引用自 : HBase 是列式存储数据库吗",-1),g={href:"https://www.iteblog.com/archives/2498.html",target:"_blank",rel:"noopener noreferrer"},u=n('<h2 id="hbase-表特性" tabindex="-1"><a class="header-anchor" href="#hbase-表特性" aria-hidden="true">#</a> HBase 表特性</h2><p>Hbase 的表具有以下特点：</p><ul><li><strong>容量大</strong>：一个表可以有数十亿行，上百万列；</li><li><strong>面向列</strong>：数据是按照列存储，每一列都单独存放，数据即索引，在查询时可以只访问指定列的数据，有效地降低了系统的 I/O 负担；</li><li><strong>稀疏性</strong>：空 (null) 列并不占用存储空间，表可以设计的非常稀疏 ；</li><li><strong>数据多版本</strong>：每个单元中的数据可以有多个版本，按照时间戳排序，新的数据在最上面；</li><li><strong>存储类型</strong>：所有数据的底层存储格式都是字节数组 (byte[])。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),_=e("strong",null,"官方",-1),b={href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://hbase.apache.org/book.html",target:"_blank",rel:"noopener noreferrer"},p={href:"http://abloz.com/hbase/book.html",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"书籍",-1),w={href:"https://book.douban.com/subject/27600204/",target:"_blank",rel:"noopener noreferrer"},B=e("strong",null,"文章",-1),H={href:"https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/bigtable-osdi06.pdf",target:"_blank",rel:"noopener noreferrer"},R={href:"https://mapr.com/blog/in-depth-look-hbase-architecture",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"教程",-1),y={href:"https://github.com/heibaiying/BigData-Notes",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.cloudduggu.com/hbase/introduction/",target:"_blank",rel:"noopener noreferrer"};function x(K,v){const l=i("ExternalLinkIcon");return r(),s("div",null,[d,e("blockquote",null,[e("p",null,[h,o(),e("em",null,[e("a",g,[o("https://www.iteblog.com/archives/2498.html"),t(l)])])])]),u,e("ul",null,[e("li",null,[_,e("ul",null,[e("li",null,[e("a",b,[o("HBase 官网"),t(l)])]),e("li",null,[e("a",m,[o("HBase 官方文档"),t(l)])]),e("li",null,[e("a",p,[o("HBase 官方文档中文版"),t(l)])])])]),e("li",null,[f,e("ul",null,[e("li",null,[e("a",w,[o("Hadoop 权威指南"),t(l)])])])]),e("li",null,[B,e("ul",null,[e("li",null,[e("a",H,[o("Bigtable: A Distributed Storage System for Structured Data"),t(l)])]),e("li",null,[e("a",R,[o("An In-Depth Look at the HBase Architecture"),t(l)])])])]),e("li",null,[k,e("ul",null,[e("li",null,[e("a",y,[o("https://github.com/heibaiying/BigData-Notes"),t(l)])]),e("li",null,[e("a",C,[o("https://www.cloudduggu.com/hbase/introduction/"),t(l)])])])])])])}const D=a(c,[["render",x],["__file","02.HBase数据模型.html.vue"]]);export{D as default};
