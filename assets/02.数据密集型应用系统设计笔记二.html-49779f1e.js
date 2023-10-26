import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as h,o as n,c as t,a,b as e,d,e as i}from"./app-c2b0a364.js";const o={},s=i('<h1 id="《数据密集型应用系统设计》笔记二之数据系统基础" tabindex="-1"><a class="header-anchor" href="#《数据密集型应用系统设计》笔记二之数据系统基础" aria-hidden="true">#</a> 《数据密集型应用系统设计》笔记二之数据系统基础</h1><h2 id="第-1-章-可靠、可扩展与可维护的应用系统" tabindex="-1"><a class="header-anchor" href="#第-1-章-可靠、可扩展与可维护的应用系统" aria-hidden="true">#</a> 第 1 章 可靠、可扩展与可维护的应用系统</h2><h3 id="认识数据系统" tabindex="-1"><a class="header-anchor" href="#认识数据系统" aria-hidden="true">#</a> 认识数据系统</h3><p>很多应用系统都包含以下数据处理系统：</p><ul><li>数据库：用以存储数据，这样之后应用可以再次面问。</li><li>高速缓存： 缓存那些复杂或操作代价昂贵的结果，以加快下一次访问。</li><li>索引： 用户可以按关键字搜索数据井支持各种过掳。</li><li>流式处理：持续发送消息至另一个进程，处理采用异步方式。</li><li>批处理： 定期处理大量的累积数据。</li></ul><p>设计数据系统或数据服务时，需要考虑很多因素，其中最重要的三个问题：</p><ul><li><strong>可靠性（Reliability）</strong>：当出现意外情况如硬件、软件故障、人为失误等，系统应可以继续正常运转：虽然性能可能有所降低，但确保功能正确。</li><li><strong>可扩展性（Scalability）</strong>：随着规模的增长，例如数据量、流量或复杂性，系统应以合理的方式来匹配这种增长。</li><li><strong>可维护性（Maintainability）</strong>：随着时间的推移，许多新的人员参与到系统开发和运维， 以维护现有功能或适配新场景等，系统都应高效运转。</li></ul><h3 id="可靠性" tabindex="-1"><a class="header-anchor" href="#可靠性" aria-hidden="true">#</a> 可靠性</h3><p>可靠性意味着：即时发生了某些错误，系统仍然可以继续正常工作。</p><p>系统可应对错误则称为容错（fault tolerant）或者弹性（resilient）。</p><p>常见的故障类型：</p><ul><li>硬件故障：通常是随机的，如：硬盘崩溃、内存故障、电网停电、断网等。常见应对策略：使用集群去冗余。</li><li>软件故障：各种难以预料的 bug。</li><li>人为故障：如操作不当。</li></ul><h3 id="可扩展性" tabindex="-1"><a class="header-anchor" href="#可扩展性" aria-hidden="true">#</a> 可扩展性</h3><p>可扩展性是指负载增加时， 有效保持系统性能的相关技术策略。</p><p>吞吐量：每秒可处理的记录数</p><p>响应时间：中位数指标比平均响应时间更适合描述等待时间。</p><p>如何应对负载：垂直扩展（升级硬件）和水平扩展（集群、分布式）</p><h3 id="可维护性" tabindex="-1"><a class="header-anchor" href="#可维护性" aria-hidden="true">#</a> 可维护性</h3><ul><li>可运维性：方便运营团队来保持系统平稳运行。</li><li>简单性：简化系统复杂性，使新工程师能够轻松理解系统。</li><li>可演化性：后续工程师能够轻松地对系统进行改进，井根据需求变化将其适配到非典型场景，也称为可延伸性、易修改性或可塑性。</li></ul><p>主要措施：</p><ul><li>良好的抽象可以帮助降低复杂性， 井使系统更易于修改和适配新场景。</li><li>良好的可操作性意味着对系统健康状况有良好的可观测性和有效的管理方战。</li></ul><h2 id="第-2-章-数据模型与查询语言" tabindex="-1"><a class="header-anchor" href="#第-2-章-数据模型与查询语言" aria-hidden="true">#</a> 第 2 章 数据模型与查询语言</h2><p>复杂的应用程序可能会有更多的中间层，每层都通过提供一个简洁的数据模型来隐藏下层的复杂性。</p><p>如果数据大多是一对多关系（树结构数据）或者记录之间没有关系，那么文档模型是最合适的。</p><p>关系模型能够处理简单的多对多关系，但是随着数据之间的关联越来越复杂，将数据建模转化为图模型会更加自然。</p><h2 id="第-3-章-数据存储与检索" tabindex="-1"><a class="header-anchor" href="#第-3-章-数据存储与检索" aria-hidden="true">#</a> 第 3 章 数据存储与检索</h2><p>从最基本的层面看，数据库只需做两件事情：存储和检索。</p><h3 id="数据库核心-数据结构" tabindex="-1"><a class="header-anchor" href="#数据库核心-数据结构" aria-hidden="true">#</a> 数据库核心：数据结构</h3><p>为了高效地查找数据库中特定键的值， 需要新的数据结构： 索引。</p><p>存储系统的设计权衡：适当的索引可以加速读取查询，但每个索引都会减慢写速度。数据库通常不会对所有内容进行索引。</p><p>索引类型：</p><ul><li>哈希索引</li><li>B+ 树</li><li>LSM 树</li><li>等等</li></ul>',32),c={href:"https://time.geekbang.org/column/intro/100048401",target:"_blank",rel:"noopener noreferrer"},p=i('<h3 id="事务处理与分析处理" tabindex="-1"><a class="header-anchor" href="#事务处理与分析处理" aria-hidden="true">#</a> 事务处理与分析处理</h3><h3 id="列式存储" tabindex="-1"><a class="header-anchor" href="#列式存储" aria-hidden="true">#</a> 列式存储</h3><p>如果表中有数以万亿行、PB 大小的数据，则适合用于存储在列式存储中。</p><h2 id="第-4-章-数据编码与演化" tabindex="-1"><a class="header-anchor" href="#第-4-章-数据编码与演化" aria-hidden="true">#</a> 第 4 章 数据编码与演化</h2><p>本章节主要介绍各种序列化、反序列化方式。略</p>',5);function _(u,f){const r=h("ExternalLinkIcon");return n(),t("div",null,[s,a("blockquote",null,[a("p",null,[e("扩展阅读："),a("a",c,[e("检索技术核心 20 讲"),d(r)])])]),p])}const m=l(o,[["render",_],["__file","02.数据密集型应用系统设计笔记二.html.vue"]]);export{m as default};
