import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as s,a as e,b as r,d as i,e as d}from"./app-fcc32256.js";const h={},l=d('<h1 id="读写分离基本原理" tabindex="-1"><a class="header-anchor" href="#读写分离基本原理" aria-hidden="true">#</a> 读写分离基本原理</h1><p><strong>读写分离的基本原理是：主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作</strong>。</p><h2 id="_1-为何要读写分离" tabindex="-1"><a class="header-anchor" href="#_1-为何要读写分离" aria-hidden="true">#</a> 1. 为何要读写分离</h2><ul><li><strong>有效减少锁竞争</strong> - 主服务器只负责写，从服务器只负责读，能够有效的避免由数据更新导致的行锁竞争，使得整个系统的查询性能得到极大的改善。</li><li><strong>提高查询吞吐量</strong> - 通过一主多从的配置方式，可以将查询请求均匀的分散到多个数据副本，能够进一步的提升系统的处理能力。</li><li><strong>提升数据库可用性</strong> - 使用多主多从的方式，不但能够提升系统的吞吐量，还能够提升数据库的可用性，可以达到在任何一个数据库宕机，甚至磁盘物理损坏的情况下仍然不影响系统的正常运行。</li></ul><h2 id="_2-读写分离的原理" tabindex="-1"><a class="header-anchor" href="#_2-读写分离的原理" aria-hidden="true">#</a> 2. 读写分离的原理</h2><p>读写分离的实现是根据 SQL 语义分析，将读操作和写操作分别路由至主库与从库。</p><figure><img src="https://shardingsphere.apache.org/document/current/img/read-write-split/read-write-split.png" alt="读写分离" tabindex="0" loading="lazy"><figcaption>读写分离</figcaption></figure><p>读写分离的基本实现是：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/database/mysql/master-slave-proxy.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>数据库服务器搭建主从集群，一主一从、一主多从都可以。</li><li>数据库主机负责读写操作，从机只负责读操作。</li><li>数据库主机通过复制将数据同步到从机，每台数据库服务器都存储了全量数据。</li><li>业务服务器将写操作发给数据库主机，将读操作发给数据库从机。</li><li>主机会记录请求的二进制日志，然后推送给从库，从库解析并执行日志中的请求，完成主从复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。</li></ul><h2 id="_3-读写分离的问题" tabindex="-1"><a class="header-anchor" href="#_3-读写分离的问题" aria-hidden="true">#</a> 3. 读写分离的问题</h2><p>读写分离存在两个问题：<strong>数据一致性</strong>和<strong>分发机制</strong>。</p><h3 id="_3-1-数据一致性" tabindex="-1"><a class="header-anchor" href="#_3-1-数据一致性" aria-hidden="true">#</a> 3.1. 数据一致性</h3><p>读写分离产生了主库与从库之间的数据一致性的问题。</p><figure><img src="https://shardingsphere.apache.org/document/current/img/read-write-split/sharding-read-write-split.png" alt="数据分片 + 读写分离" tabindex="0" loading="lazy"><figcaption>数据分片 + 读写分离</figcaption></figure><h3 id="_3-2-分发机制" tabindex="-1"><a class="header-anchor" href="#_3-2-分发机制" aria-hidden="true">#</a> 3.2. 分发机制</h3><p>数据库读写分离后，一个 SQL 请求具体分发到哪个数据库节点？一般有两种分发方式：客户端分发和中间件代理分发。</p><p>客户端分发，是基于程序代码，自行控制数据分发到哪个数据库节点。更细一点来说，一般程序中建立多个数据库的连接，根据一定的算法，选择合适的连接去发起 SQL 请求。这种方式也被称为客户端中间件，代表有：jdbc-sharding。</p><p>中间件代理分发，指的是独立一套系统出来，实现读写操作分离和数据库服务器连接的管理。中间件对业务服务器提供 SQL 兼容的协议，业务服务器无须自己进行读写分离。对于业务服务器来说，访问中间件和访问数据库没有区别，事实上在业务服务器看来，中间件就是一个数据库服务器。代表有：Mycat。</p><h2 id="_4-参考资料" tabindex="-1"><a class="header-anchor" href="#_4-参考资料" aria-hidden="true">#</a> 4. 参考资料</h2>',20),c={href:"https://time.geekbang.org/column/intro/100046801",target:"_blank",rel:"noopener noreferrer"},g={href:"https://shardingsphere.apache.org/document/current/cn/overview/",target:"_blank",rel:"noopener noreferrer"};function p(_,u){const a=n("ExternalLinkIcon");return o(),s("div",null,[l,e("ul",null,[e("li",null,[e("a",c,[r("后端存储实战课"),i(a)])]),e("li",null,[e("a",g,[r("ShardingSphere 官方文档"),i(a)])])])])}const b=t(h,[["render",p],["__file","02.读写分离.html.vue"]]);export{b as default};
