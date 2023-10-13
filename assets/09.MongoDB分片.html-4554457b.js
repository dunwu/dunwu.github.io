import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as i,a as e,b as o,d as r,e as t}from"./app-dc48b2dc.js";const c={},d=t('<h1 id="mongodb-分片" tabindex="-1"><a class="header-anchor" href="#mongodb-分片" aria-hidden="true">#</a> MongoDB 分片</h1><h2 id="分片集群简介" tabindex="-1"><a class="header-anchor" href="#分片集群简介" aria-hidden="true">#</a> 分片集群简介</h2><p>当 MongoDB 需要存储海量数据时，单节点不足以存储全量数据，且可能无法提供令人满意的吞吐量。所以，可以通过 MongoDB 分片机制来支持水平扩展。</p><h3 id="分片集群特点" tabindex="-1"><a class="header-anchor" href="#分片集群特点" aria-hidden="true">#</a> 分片集群特点</h3><p>对应用完全透明</p><p>数据自动均衡</p><p>动态扩容</p><p>提供三种分片方式</p><h3 id="分片集群组件" tabindex="-1"><a class="header-anchor" href="#分片集群组件" aria-hidden="true">#</a> 分片集群组件</h3><p>MongoDB 分片集群含以下组件：</p>',10),h={href:"https://docs.mongodb.com/manual/core/sharded-cluster-shards/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.mongodb.com/manual/core/sharded-cluster-query-router/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://docs.mongodb.com/manual/core/sharded-cluster-query-router/#mongos-hedged-reads",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.mongodb.com/manual/core/sharded-cluster-config-servers/",target:"_blank",rel:"noopener noreferrer"},p=t('<figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200920210057.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="分片集群的分布" tabindex="-1"><a class="header-anchor" href="#分片集群的分布" aria-hidden="true">#</a> 分片集群的分布</h3><p><strong>MongoDB 复制集以 collection 为单位</strong>，将数据分布在集群中的各个分片上。最多允许 1024 个分片。</p><p>MongoDB 复制集的分片之间数据不重复，只有当所有分片都正常时，才能完整工作。</p><p>MongoDB 数据库可以同时包含分片和未分片的集合的 collection。分片 collection 会分布在集群中各节点上。而未分片的 collection 存储在主节点上。每个数据库都有其自己的主节点。</p><p>分片和未分片的 collection：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200920212159.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="路由节点-mongos" tabindex="-1"><a class="header-anchor" href="#路由节点-mongos" aria-hidden="true">#</a> 路由节点 mongos</h3>',8),_={href:"https://docs.mongodb.com/manual/reference/glossary/#term-sharded-cluster",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.mongodb.com/manual/reference/glossary/#term-mongos",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"mongos",-1),y={href:"https://docs.mongodb.com/manual/reference/program/mongos/#bin.mongos",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"mongos",-1),K={href:"https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"mongod",-1),D={href:"https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"mongo",-1),x={href:"https://docs.mongodb.com/drivers/?jump=docs",target:"_blank",rel:"noopener noreferrer"},w=t('<figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200920212157.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>路由节点的作用：</p><ul><li>提供集群的单一入口</li><li>转发应用端请求</li><li>选择合适数据节点进行读写</li><li>合并多个数据节点的返回</li></ul><p>一般，路由节点 mongos 建议至少 2 个。</p><h2 id="分片-key" tabindex="-1"><a class="header-anchor" href="#分片-key" aria-hidden="true">#</a> 分片 Key</h2><p>MongoDB 使用分片 Key 在各个分片之间分发 collection 的 document。分片 Key 由 document 中的一个或多个字段组成。</p><ul><li><p>从 MongoDB 4.4 开始，分片 collection 中的 document 可能缺少分片 Key 字段。在跨分片分布文档时，缺少分片 Key 字段将被视为具有空值，但在路由查询时则不会。</p></li><li><p>在 MongoDB 4.2 及更早版本中，分片 Key 字段必须在每个 document 中存在一个分片 collection。</p></li></ul><p>在分片 collection 时选择分片 Key。</p><ul><li>从 MongoDB 4.4 开始，您可以通过在现有 Key 中添加一个或多个后缀字段来优化 collection 的分片 Key。</li><li>在 MongoDB 4.2 和更低版本中，无法在分片后更改分片 Key 的选择。</li></ul><p>document 的分片键值决定了其在各个分片中的分布</p><ul><li>从 MongoDB 4.2 开始，除非您的分片 Key 字段是不可变的_id 字段，否则您可以更新 document 的分片键值。</li><li>在 MongoDB 4.0 及更低版本中，文档的分片 Key 字段值是不可变的。</li></ul><p>分片 Key 索引：要对已填充的 collection 进行分片，该 collection 必须具有以分片 Key 开头的索引。分片一个空 collection 时，如果该 collection 还没有针对指定分片 Key 的适当索引，则 MongoDB 会创建支持索引。</p><p>分片 Key 策略：分片 Key 的选择会影响分片集群的性能，效率和可伸缩性。分片 Key 及其后备索引的选择也会影响集群可以使用的分片策略。</p><p>MongoDB 分区将数据分片。每个分块都有基于分片 Key 的上下限。</p><p>为了在整个集群中的所有分片上实现块的均匀分布，均衡器在后台运行，并在各分片上迁移块。</p><h2 id="分片策略" tabindex="-1"><a class="header-anchor" href="#分片策略" aria-hidden="true">#</a> 分片策略</h2><p>MongoDB 支持两种分片策略：Hash 分片和范围分片。</p><h3 id="hash-分片" tabindex="-1"><a class="header-anchor" href="#hash-分片" aria-hidden="true">#</a> Hash 分片</h3>',18),v={href:"https://docs.mongodb.com/manual/reference/glossary/#term-chunk",target:"_blank",rel:"noopener noreferrer"},z=e("blockquote",null,[e("p",null,"注意：使用哈希索引解析查询时，MongoDB 会自动计算哈希值，应用程序不需要计算哈希。")],-1),H=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200920213343.svg",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),N={href:"https://docs.mongodb.com/manual/reference/glossary/#term-chunk",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"但是，Hash 分片意味着对分片 Key 做范围查询时不太可能针对单个分片，从而导致更多的集群范围内的广播操作。",-1),q=e("h3",{id:"范围分片",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#范围分片","aria-hidden":"true"},"#"),o(" 范围分片")],-1),E={href:"https://docs.mongodb.com/manual/reference/glossary/#term-chunk",target:"_blank",rel:"noopener noreferrer"},I=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200920213345.svg",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),L={href:"https://docs.mongodb.com/manual/reference/glossary/#term-chunk",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"分片集群中的区域",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分片集群中的区域","aria-hidden":"true"},"#"),o(" 分片集群中的区域")],-1),C=e("p",null,"区域可以提高跨多个数据中心的分片集群的数据局部性。",-1),G={href:"https://docs.mongodb.com/manual/reference/glossary/#term-zone",target:"_blank",rel:"noopener noreferrer"},S={href:"https://docs.mongodb.com/manual/reference/glossary/#term-chunk",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"每个区域覆盖一个或多个分片 Key 值范围。区域覆盖的每个范围始终包括其上下边界。",-1),A=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200920214854.svg",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),F=e("p",null,"在定义要覆盖的区域的新范围时，必须使用分片 Key 中包含的字段。如果使用复合分片 Key，则范围必须包含分片 Key 的前缀。",-1),J=e("p",null,"选择分片 Key 时，应考虑将来可能使用的区域。",-1),O=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),o(" 参考资料")],-1),P=e("strong",null,"官方",-1),Q={href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"},U={href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},W=e("strong",null,"教程",-1),X={href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://time.geekbang.org/course/intro/100040001",target:"_blank",rel:"noopener noreferrer"};function Z($,ee){const n=l("ExternalLinkIcon");return s(),i("div",null,[d,e("ul",null,[e("li",null,[e("a",h,[o("shard"),r(n)]),o("：每个分片包含分片数据的子集。每个分片都可以部署为副本集。")]),e("li",null,[e("a",g,[o("mongos"),r(n)]),o("：mongos 充当查询路由器，在客户端应用程序和分片集群之间提供接口。从 MongoDB 4.4 开始，mongos 可以支持 "),e("a",u,[o("hedged reads"),r(n)]),o(" 以最大程度地减少延迟。")]),e("li",null,[e("a",m,[o("config servers"),r(n)]),o("：提供集群元数据存储和分片数据分布的映射。")])]),p,e("p",null,[o("要连接 "),e("a",_,[o("MongoDB 分片集群"),r(n)]),o("，必须连接到 "),e("a",f,[b,r(n)]),o(" 路由器。这包括分片和未分片的 collection。客户端不应该连接到单个分片节点进行读写操作。")]),e("p",null,[o("连接 "),e("a",y,[k,r(n)]),o(" 的方式和连接 "),e("a",K,[B,r(n)]),o(" 相同，例如通过 "),e("a",D,[M,r(n)]),o(" shell 或 "),e("a",x,[o("MongoDB 驱动程序"),r(n)]),o("。")]),w,e("p",null,[o("Hash 分片策略会先计算分片 Key 字段值的哈希值；然后，根据分片键值为每个 "),e("a",v,[o("chunk"),r(n)]),o(" 分配一个范围。")]),z,H,e("p",null,[o("尽管分片 Key 范围可能是“接近”的，但它们的哈希值不太可能在同一 "),e("a",N,[o("chunk"),r(n)]),o(" 上。基于 Hash 的数据分发有助于更均匀的数据分布，尤其是在分片 Key 单调更改的数据集中。")]),V,q,e("p",null,[o("范围分片根据分片 Key 值将数据划分为多个范围。然后，根据分片 Key 值为每个 "),e("a",E,[o("chunk"),r(n)]),o(" 分配一个范围。")]),I,e("p",null,[o("值比较近似的一系列分片 Key 更有可能驻留在同一 "),e("a",L,[o("chunk"),r(n)]),o(" 上。范围分片的效率取决于选择的分片 Key。分片 Key 考虑不周全会导致数据分布不均，这可能会削弱分片的某些优势或导致性能瓶颈。")]),j,C,e("p",null,[o("在分片集群中，可以基于分片 Key 创建分片数据"),e("a",G,[o("区域"),r(n)]),o("。可以将每个区域与集群中的一个或多个分片关联。分片可以与任意数量的区域关联。在平衡的集群中，MongoDB 仅将区域覆盖的 "),e("a",S,[o("chunk"),r(n)]),o(" 迁移到与该区域关联的分片。")]),T,A,F,J,O,e("ul",null,[e("li",null,[P,e("ul",null,[e("li",null,[e("a",Q,[o("MongoDB 官网"),r(n)])]),e("li",null,[e("a",R,[o("MongoDB Github"),r(n)])]),e("li",null,[e("a",U,[o("MongoDB 官方免费教程"),r(n)])])])]),e("li",null,[W,e("ul",null,[e("li",null,[e("a",X,[o("MongoDB 教程"),r(n)])]),e("li",null,[e("a",Y,[o("MongoDB 高手课"),r(n)])])])])])])}const re=a(c,[["render",Z],["__file","09.MongoDB分片.html.vue"]]);export{re as default};
