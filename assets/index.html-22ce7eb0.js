import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as o}from"./app-d70a109d.js";const r={},t=o('<h1 id="sqoop" tabindex="-1"><a class="header-anchor" href="#sqoop" aria-hidden="true">#</a> Sqoop</h1><blockquote><p><strong>Sqoop 是一个主要在 Hadoop 和关系数据库之间进行批量数据迁移的工具。</strong></p></blockquote><h2 id="sqoop-简介" tabindex="-1"><a class="header-anchor" href="#sqoop-简介" aria-hidden="true">#</a> Sqoop 简介</h2><p><strong>Sqoop 是一个主要在 Hadoop 和关系数据库之间进行批量数据迁移的工具。</strong></p><ul><li>Hadoop：HDFS、Hive、HBase、Inceptor、Hyperbase</li><li>面向大数据集的批量导入导出</li><li>将输入数据集分为 N 个切片，然后启动 N 个 Map 任务并行传输</li><li>支持全量、增量两种传输方式</li></ul><h3 id="提供多种-sqoop-连接器" tabindex="-1"><a class="header-anchor" href="#提供多种-sqoop-连接器" aria-hidden="true">#</a> 提供多种 Sqoop 连接器</h3><h4 id="内置连接器" tabindex="-1"><a class="header-anchor" href="#内置连接器" aria-hidden="true">#</a> 内置连接器</h4><ul><li>经过优化的专用 RDBMS 连接器：MySQL、PostgreSQL、Oracle、DB2、SQL Server、Netzza 等</li><li>通用的 JDBC 连接器：支持 JDBC 协议的数据库</li></ul><h4 id="第三方连接器" tabindex="-1"><a class="header-anchor" href="#第三方连接器" aria-hidden="true">#</a> 第三方连接器</h4><ul><li>数据仓库：Teradata</li><li>NoSQL 数据库：Couchbase</li></ul><h3 id="sqoop-版本" tabindex="-1"><a class="header-anchor" href="#sqoop-版本" aria-hidden="true">#</a> Sqoop 版本</h3><h4 id="sqoop-1-优缺点" tabindex="-1"><a class="header-anchor" href="#sqoop-1-优缺点" aria-hidden="true">#</a> Sqoop 1 优缺点</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/Sqoop/sqoop-architecture.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>优点</p><ul><li>架构简单</li><li>部署简单</li><li>功能全面</li><li>稳定性较高</li><li>速度较快</li></ul><p>缺点</p><ul><li>访问方式单一</li><li>命令行方式容易出错，格式紧耦合</li><li>安全机制不够完善，存在密码泄露风险</li></ul><h4 id="sqoop-2-优缺点" tabindex="-1"><a class="header-anchor" href="#sqoop-2-优缺点" aria-hidden="true">#</a> Sqoop 2 优缺点</h4><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/Sqoop/sqoop-v2-architecture.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>优点</p><ul><li>访问方式多样</li><li>集中管理连接器</li><li>安全机制较完善</li><li>支持多用户</li></ul><p>缺点</p><ul><li>架构较复杂</li><li>部署较繁琐</li><li>稳定性一般</li><li>速度一般</li></ul><h2 id="sqoop-原理" tabindex="-1"><a class="header-anchor" href="#sqoop-原理" aria-hidden="true">#</a> Sqoop 原理</h2><h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/Sqoop/sqoop-import.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/bigdata/Sqoop/sqoop-export.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',28),l=[t];function s(n,d){return a(),e("div",null,l)}const p=i(r,[["render",s],["__file","index.html.vue"]]);export{p as default};
