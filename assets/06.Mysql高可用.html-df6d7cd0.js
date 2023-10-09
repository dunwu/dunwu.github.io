import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as o,a as e,b as r,d as t,e as l}from"./app-1f12e18b.js";const c={},d=l('<h1 id="mysql-高可用" tabindex="-1"><a class="header-anchor" href="#mysql-高可用" aria-hidden="true">#</a> Mysql 高可用</h1><h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2><h3 id="主从复制" tabindex="-1"><a class="header-anchor" href="#主从复制" aria-hidden="true">#</a> 主从复制</h3><p>Mysql 支持两种复制：基于行的复制和基于语句的复制。</p><p>这两种方式都是在主库上记录二进制日志，然后在从库重放日志的方式来实现异步的数据复制。这意味着：复制过程存在时延，这段时间内，主从数据可能不一致。</p><p>主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。</p><ul><li><strong>binlog 线程</strong> ：负责将主服务器上的数据更改写入二进制文件（binlog）中。</li><li><strong>I/O 线程</strong> ：负责从主服务器上读取二进制日志文件，并写入从服务器的中继日志中。</li><li><strong>SQL 线程</strong> ：负责读取中继日志并重放其中的 SQL 语句。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/mysql/master-slave.png"></div><h3 id="读写分离" tabindex="-1"><a class="header-anchor" href="#读写分离" aria-hidden="true">#</a> 读写分离</h3><p>主服务器用来处理写操作以及实时性要求比较高的读操作，而从服务器用来处理读操作。</p><p>读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。</p><p>MySQL 读写分离能提高性能的原因在于：</p><ul><li>主从服务器负责各自的读和写，极大程度缓解了锁的争用；</li><li>从服务器可以配置 MyISAM 引擎，提升查询性能以及节约系统开销；</li><li>增加冗余，提高可用性。</li></ul><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/database/mysql/master-slave-proxy.png"></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',15),h={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"};function p(m,_){const a=s("ExternalLinkIcon");return i(),o("div",null,[d,e("ul",null,[e("li",null,[e("a",h,[r("《高性能 MySQL》"),t(a)])]),e("li",null,[e("a",u,[r("MySQL 实战 45 讲"),t(a)])])])])}const f=n(c,[["render",p],["__file","06.Mysql高可用.html.vue"]]);export{f as default};
