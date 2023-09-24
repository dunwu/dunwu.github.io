import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as d,a as e,b as r,d as t,e as n}from"./app-9cc2d019.js";const h={},p=n('<h1 id="分库分表基本原理" tabindex="-1"><a class="header-anchor" href="#分库分表基本原理" aria-hidden="true">#</a> 分库分表基本原理</h1><h2 id="_1-为何要分库分表" tabindex="-1"><a class="header-anchor" href="#_1-为何要分库分表" aria-hidden="true">#</a> 1. 为何要分库分表</h2><p>分库分表主要基于以下理由：</p><ul><li><strong>并发连接</strong> - 单库超过每秒 2000 个并发时，而一个健康的单库最好保持在每秒 1000 个并发左右，不要太大。</li><li><strong>磁盘容量</strong> - 磁盘容量占满，会导致服务器不可用。</li><li><strong>SQL 性能</strong> - 单表数据量过大，会导致 SQL 执行效率低下。一般，单表超过 1000 万条数据，就可以考虑分表了。</li></ul><table><thead><tr><th>#</th><th>分库分表前</th><th>分库分表后</th></tr></thead><tbody><tr><td>并发支撑情况</td><td>MySQL 单机部署，扛不住高并发</td><td>MySQL 从单机到多机，能承受的并发增加了多倍</td></tr><tr><td>磁盘使用情况</td><td>MySQL 单机磁盘容量几乎撑满</td><td>拆分为多个库，数据库服务器磁盘使用率大大降低</td></tr><tr><td>SQL 执行性能</td><td>单表数据量太大，SQL 越跑越慢</td><td>单表数据量减少，SQL 执行效率明显提升</td></tr></tbody></table><h2 id="_2-分库分表原理" tabindex="-1"><a class="header-anchor" href="#_2-分库分表原理" aria-hidden="true">#</a> 2. 分库分表原理</h2><p><strong>数据分片指按照某个维度将存放在单一数据库中的数据分散地存放至多个数据库或表中以达到提升性能瓶颈以及可用性的效果</strong>。 数据分片的有效手段是对关系型数据库进行分库和分表。分库和分表均可以有效的避免由数据量超过可承受阈值而产生的查询瓶颈。 除此之外，分库还能够用于有效的分散对数据库单点的访问量；分表虽然无法缓解数据库压力，但却能够提供尽量将分布式事务转化为本地事务的可能，一旦涉及到跨库的更新操作，分布式事务往往会使问题变得复杂。 使用多主多从的分片方式，可以有效的避免数据单点，从而提升数据架构的可用性。</p><p>通过分库和分表进行数据的拆分来使得各个表的数据量保持在阈值以下，以及对流量进行疏导应对高访问量，是应对高并发和海量数据系统的有效手段。 数据分片的拆分方式又分为垂直分片和水平分片。</p><h3 id="_2-1-垂直分片" tabindex="-1"><a class="header-anchor" href="#_2-1-垂直分片" aria-hidden="true">#</a> 2.1. 垂直分片</h3><p>垂直分片有两种拆分考量：业务拆分和访问频率拆分</p><p>（1）业务拆分</p><blockquote><p>业务拆分的核心理念是<strong>专库专用</strong>。</p></blockquote><p>在拆分之前，一个数据库由多个数据表构成，每个表对应着不同的业务。而拆分之后，则是<strong>按照业务将表进行归类，分布到不同的数据库中</strong>，从而将压力分散至不同的数据库。下图展示了根据业务需要，将用户表和订单表垂直分片到不同的数据库的方案。</p><p>垂直分片往往需要对架构和设计进行调整。通常来讲，是来不及应对互联网业务需求快速变化的；而且，它也并无法真正的解决单点瓶颈。<strong>垂直拆分可以缓解数据量和访问量带来的问题，但无法根治。如果垂直拆分之后，表中的数据量依然超过单节点所能承载的阈值，则需要水平分片来进一步处理</strong>。</p><p>（2）访问频率拆分</p><blockquote><p>访问频率拆分，是 <strong>把一个有很多字段的表给拆分成多个表，或者是多个库上去</strong>。一般来说，会 <strong>将较少的、访问频率较高的字段放到一个表中</strong>，然后 <strong>将较多的、访问频率较低的字段放到另外一个表中</strong>。因为数据库是有缓存的，访问频率高的行字段越少，就可以在缓存里缓存更多的行，性能就越好。这个一般在表层面做的较多一些。</p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/image-20200114211639899.png" alt="image-20200114211639899" tabindex="0" loading="lazy"><figcaption>image-20200114211639899</figcaption></figure><p>一般来说，满足下面的条件就可以考虑扩容了：</p><ul><li>Mysql 单库超过 5000 万条记录，Oracle 单库超过 1 亿条记录，DB 压力就很大。</li><li>单库超过每秒 2000 个并发时，而一个健康的单库最好保持在每秒 1000 个并发左右，不要太大。</li></ul><p>在数据库的层面使用垂直切分将按数据库中表的密集程度部署到不同的库中，例如将原来的电商数据库垂直切分成商品数据库、用户数据库等。</p><h3 id="_2-2-水平分片" tabindex="-1"><a class="header-anchor" href="#_2-2-水平分片" aria-hidden="true">#</a> 2.2. 水平分片</h3><blockquote><p><strong>水平拆分</strong> 又称为 <strong>Sharding</strong>，它是将同一个表中的记录拆分到多个结构相同的表中。当 <strong>单表数据量太大</strong> 时，会极大影响 <strong>SQL 执行的性能</strong> 。分表是将原来一张表的数据分布到数据库集群的不同节点上，从而缓解单点的压力。</p></blockquote><p>相对于垂直分片，水平分片不再将数据根据业务逻辑分类，而是通过某个字段（或某几个字段），根据某种规则将数据分散至多个库或表中，每个分片仅包含数据的一部分。 例如：根据主键分片，偶数主键的记录放入 0 库（或表），奇数主键的记录放入 1 库（或表）。</p><p>水平分片从理论上突破了单机数据量处理的瓶颈，并且扩展相对自由，是分库分表的标准解决方案。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/image-20200114211203589.png" alt="image-20200114211203589" tabindex="0" loading="lazy"><figcaption>image-20200114211203589</figcaption></figure><p>一般来说，<strong>单表有 200 万条数据</strong> 的时候，性能就会相对差一些了，需要考虑分表了。但是，这也要视具体情况而定，可能是 100 万条，也可能是 500 万条，SQL 越复杂，就最好让单表行数越少。</p><p>读写分离的数据节点中的数据内容是一致的，而水平分片的每个数据节点的数据内容却并不相同。将水平分片和读写分离联合使用，能够更加有效的提升系统性能。</p><h3 id="_2-3-分库分表策略" tabindex="-1"><a class="header-anchor" href="#_2-3-分库分表策略" aria-hidden="true">#</a> 2.3. 分库分表策略</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200608091832.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>分库分表策略主要有两种：</p><ul><li>根据数值范围划分</li><li>根据 Hash 划分</li></ul><h4 id="_2-3-1-数值范围路由" tabindex="-1"><a class="header-anchor" href="#_2-3-1-数值范围路由" aria-hidden="true">#</a> 2.3.1. 数值范围路由</h4><p>数值范围路由，就是根据 ID、时间范围 这类具有排序性的字段来进行划分。例如：用户 Id 为 1-9999 的记录分到第一个库，10000-20000 的分到第二个库，以此类推。</p><p>按这种策略划分出来的数据，具有数据连续性。</p><p>优点：数据迁移很简单。</p><p>缺点：容易产生热点问题，大量的流量都打在最新的数据上了。</p><h4 id="_2-3-2-hash-路由" tabindex="-1"><a class="header-anchor" href="#_2-3-2-hash-路由" aria-hidden="true">#</a> 2.3.2. Hash 路由</h4><p>典型的 Hash 路由，如根据数值取模，当需要扩容时，一般以 2 的幂次方进行扩容（这样，扩容时迁移的数据量会小一些）。例如：用户 Id mod n，余数为 0 的记录放到第一个库，余数为 1 的放到第二个库，以此类推。</p><p>一般采用 <strong>预分区</strong> 的方式，提前根据 <strong>数据量</strong> 规划好 <strong>分区数</strong>，比如划分为 <code>512</code> 或 <code>1024</code> 张表，保证可支撑未来一段时间的 <strong>数据容量</strong>，再根据 <strong>负载情况</strong> 将 <strong>表</strong> 迁移到其他 <strong>数据库</strong> 中。扩容时通常采用 <strong>翻倍扩容</strong>，避免 <strong>数据映射</strong> 全部被 <strong>打乱</strong>，导致 <strong>全量迁移</strong> 的情况。</p><p>优点：数据离散分布，不存在热点问题。</p><p>缺点：数据迁移、扩容麻烦（之前的数据需要重新计算 hash 值重新分配到不同的库或表）。当 <strong>节点数量</strong> 变化时，如 <strong>扩容</strong> 或 <strong>收缩</strong> 节点，数据节点 <strong>映射关系</strong> 需要重新计算，会导致数据的 <strong>重新迁移</strong>。</p><h4 id="_2-3-3-路由表" tabindex="-1"><a class="header-anchor" href="#_2-3-3-路由表" aria-hidden="true">#</a> 2.3.3. 路由表</h4><p>这种策略，就是用一张独立的表记录路由信息。</p><p>优点：简单、灵活，尤其是在扩容、迁移时，只需要迁移指定的数据，然后修改路由表即可。</p><p>缺点：每次查询，必须先查路由表，增加了 IO 开销。并且，如果路由表本身太大，也会面临性能瓶颈，如果想对路由表再做分库分表，将出现死循环式的路由算法选择问题。</p><h2 id="_3-迁移和扩容" tabindex="-1"><a class="header-anchor" href="#_3-迁移和扩容" aria-hidden="true">#</a> 3. 迁移和扩容</h2><h3 id="_3-1-停机迁移-扩容-不推荐" tabindex="-1"><a class="header-anchor" href="#_3-1-停机迁移-扩容-不推荐" aria-hidden="true">#</a> 3.1. 停机迁移/扩容（不推荐）</h3><p>停机迁移/扩容是最暴力、最简单的迁移、扩容方案。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200601114836.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="_3-1-1-停机迁移-扩容流程" tabindex="-1"><a class="header-anchor" href="#_3-1-1-停机迁移-扩容流程" aria-hidden="true">#</a> 3.1.1. 停机迁移/扩容流程</h4><p>（0）预估停服时间，发布停服公告。</p><p>（1）停服，不允许数据访问。</p><p>（2）编写临时的数据导入程序，从老数据库中读取数据。</p><p>（3）将数据写入中间件。</p><p>（4）中间件根据分片规则，将数据分发到分库（分表）中。</p><p>（5）应用程序修改配置，重启。</p><h4 id="_3-1-2-停机迁移-扩容方案分析" tabindex="-1"><a class="header-anchor" href="#_3-1-2-停机迁移-扩容方案分析" aria-hidden="true">#</a> 3.1.2. 停机迁移/扩容方案分析</h4><p>优点：简单、没有数据一致性问题。</p><p>缺点：如果老的数据库数据量很大，则停机处理时间可能很久。比如老的数据库是已经分库分表的数据库群，数据量可能达到亿级，导入数据可能就要花费几小时。如果中间过程中出现问题，就容易引发重大事故。</p><p>点评：综上，这种方案代价太高，不可取。</p><h3 id="_3-2-双写迁移" tabindex="-1"><a class="header-anchor" href="#_3-2-双写迁移" aria-hidden="true">#</a> 3.2. 双写迁移</h3><p>双写迁移的改造方案如下：</p><ul><li>支持双写新旧两个库，并且预留热切换开关，能通过开关控制三种写状态：只写旧库、只写新库和同步双写。</li><li>支持读新旧两个库，同样预留热切换开关，控制读旧库还是新库。</li></ul><p>然后上线新版服务，这个时候服务仍然是只读写旧库，不读写新库。新版服务需要稳定运行至少一到二周的时间，期间除了验证新版服务的稳定性以外，还要验证新旧两个库中的数据是否是一致的。这个过程中，如果新版服务有问题，可以立即下线新版服务，回滚到旧版本的服务。</p><p>稳定一段时间之后，就可以开启服务的双写开关了。开启双写开关的同时，需要停掉同步程序。这里面有一个问题需要注意一下，就是这个双写的业务逻辑，一定是先写旧库，再写新库，并且以写旧库的结果为准。</p><p>旧库写成功，新库写失败，返回写成功，但这个时候要记录日志，后续我们会用到这个日志来验证新库是否还有问题。旧库写失败，直接返回失败，就不写新库了。这么做的原因是，不能让新库影响到现有业务的可用性和数据准确性。上面这个过程如果出现问题，可以关闭双写，回滚到只读写旧库的状态。</p><p>切换到双写之后，新库与旧库的数据可能会存在不一致的情况，原因有两个：一、停止同步程序和开启双写，这两个过程很难做到无缝衔接，二、双写的策略也不保证新旧库强一致，这时候我们需要上线一个对比和补偿的程序，这个程序对比旧库最近的数据变更，然后检查新库中的数据是否一致，如果不一致，还要进行补偿。</p><p>开启双写后，还需要至少稳定运行至少几周的时间，并且期间我们要不断地检查，确保不能有旧库写成功，新库写失败的情况出现。对比程序也没有发现新旧两个库的数据有不一致的情况，这个时候，我们就可以认为，新旧两个库的数据是一直保持同步的。接下来就可以用类似灰度发布的方式，把读请求一点儿一点儿地切到新库上。同样，期间如果出问题的话，可以再切回旧库。全部读请求都切换到新库上之后，这个时候其实读写请求就已经都切换到新库上了，实际的切换已经完成了，但还有后续的收尾步骤。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200601135751.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="_3-2-1-双写迁移流程" tabindex="-1"><a class="header-anchor" href="#_3-2-1-双写迁移流程" aria-hidden="true">#</a> 3.2.1. 双写迁移流程</h4><ol><li><p>修改应用程序配置，将数据同时写入老数据库和中间件。这就是所谓的<strong>双写</strong>，同时写俩库，老库和新库。</p></li><li><p>编写临时程序，读取老数据库。</p></li><li><p>将数据写入中间件。如果数据不存在，直接写入；如果数据存在，比较时间戳，只允许新数据覆盖老数据。</p></li><li><p>导入数据后，有可能数据还是存在不一致，那么就对数据进行校验，比对新老库的每条数据。如果存在差异，针对差异数据，执行（3）。循环（3）、（4）步骤，直至数据完全一致。</p></li><li><p>修改应用程序配置，将数据只写入中间件。</p></li><li><p>中间件根据分片规则，将数据分发到分库（分表）中。</p></li></ol><h3 id="_3-3-主从升级" tabindex="-1"><a class="header-anchor" href="#_3-3-主从升级" aria-hidden="true">#</a> 3.3. 主从升级</h3><p>生产环境的数据库，为了保证高可用，一般会采用主备架构。主库支持读写操作，从库支持读操作。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200601121215.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>由于主备节点数据一致，所以将从库升级为主节点，并修改分片配置，将从节点作为分库之一，就实现了扩容。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200601121400.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="_3-3-1-升级从库的流程" tabindex="-1"><a class="header-anchor" href="#_3-3-1-升级从库的流程" aria-hidden="true">#</a> 3.3.1. 升级从库的流程</h4><p>（1）解除主从关系，从库升级为主库。</p><p>（2）应用程序，修改配置，读写通过中间件。</p><p>（3）分库分表中间，修改分片配置。将数据按照新的规则分发。</p><p>（4）编写临时程序，清理冗余数据。比如：原来是一个单库，数据量为 400 万。从节点升级为分库之一后，每个分库都有 400 万数据，其中 200 万是冗余数据。清理完后，进行数据校验。</p><p>（5）为每个分库添加新的从库，保证高可用。</p><h4 id="_3-3-2-升级从库方案分析" tabindex="-1"><a class="header-anchor" href="#_3-3-2-升级从库方案分析" aria-hidden="true">#</a> 3.3.2. 升级从库方案分析</h4><p>优点：不需要停机，无需数据迁移。</p><h2 id="_4-分库分表的问题" tabindex="-1"><a class="header-anchor" href="#_4-分库分表的问题" aria-hidden="true">#</a> 4. 分库分表的问题</h2><h3 id="_4-1-分布式-id-问题" tabindex="-1"><a class="header-anchor" href="#_4-1-分布式-id-问题" aria-hidden="true">#</a> 4.1. 分布式 ID 问题</h3><p>一旦数据库被切分到多个物理结点上，我们将不能再依赖数据库自身的主键生成机制。一方面，某个分区数据库自生成的 ID 无法保证在全局上是唯一的；另一方面，应用程序在插入数据之前需要先获得 ID，以便进行 SQL 路由。</p>',87),l={href:"https://dunwu.github.io/waterdrop/pages/3ae455/",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"_4-2-分布式事务问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-2-分布式事务问题","aria-hidden":"true"},"#"),r(" 4.2. 分布式事务问题")],-1),c=e("p",null,"跨库事务也是分布式的数据库集群要面对的棘手事情。 合理采用分表，可以在降低单表数据量的情况下，尽量使用本地事务，善于使用同库不同表可有效避免分布式事务带来的麻烦。在不能避免跨库事务的场景，有些业务仍然需要保持事务的一致性。 而基于 XA 的分布式事务由于在并发度高的场景中性能无法满足需要，并未被互联网巨头大规模使用，他们大多采用最终一致性的柔性事务代替强一致事务。",-1),u={href:"https://dunwu.github.io/waterdrop/pages/e1881c/",target:"_blank",rel:"noopener noreferrer"},_=n('<h3 id="_4-3-跨节点-join-和聚合" tabindex="-1"><a class="header-anchor" href="#_4-3-跨节点-join-和聚合" aria-hidden="true">#</a> 4.3. 跨节点 Join 和聚合</h3><p>分库分表后，无法直接跨节点 <code>join</code> 、<code>count</code>、<code>order by</code>、<code>group by</code> 以及聚合。</p><p>针对这类问题，普遍做法是<strong>二次查询</strong>。</p><p>在第一次查询时，获取各个节点上的结果。</p><p>在程序中将这些结果进行合并、筛选。</p><h3 id="_4-4-跨分片的排序分页" tabindex="-1"><a class="header-anchor" href="#_4-4-跨分片的排序分页" aria-hidden="true">#</a> 4.4. 跨分片的排序分页</h3><p>一般来讲，分页时需要按照指定字段进行排序。当排序字段就是分片字段的时候，我们通过分片规则可以比较容易定位到指定的分片，而当排序字段非分片字段的时候，情况就会变得比较复杂了。为了最终结果的准确性，我们需要在不同的分片节点中将数据进行排序并返回，并将不同分片返回的结果集进行汇总和再次排序，最后再返回给用户。如下图所示：</p><figure><img src="https://upload-images.jianshu.io/upload_images/3710706-925381b9a478c8df.png?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上面图中所描述的只是最简单的一种情况（取第一页数据），看起来对性能的影响并不大。但是，如果想取出第 10 页数据，情况又将变得复杂很多，如下图所示：</p><figure><img src="https://upload-images.jianshu.io/upload_images/3710706-9a7cfbdb95bb9b70.png?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>有些读者可能并不太理解，为什么不能像获取第一页数据那样简单处理（排序取出前 10 条再合并、排序）。其实并不难理解，因为各分片节点中的数据可能是随机的，为了排序的准确性，必须把所有分片节点的前 N 页数据都排序好后做合并，最后再进行整体的排序。很显然，这样的操作是比较消耗资源的，用户越往后翻页，系统性能将会越差。</p><p>那如何解决分库情况下的分页问题呢？有以下几种办法：</p><p>如果是在前台应用提供分页，则限定用户只能看前面 n 页，这个限制在业务上也是合理的，一般看后面的分页意义不大（如果一定要看，可以要求用户缩小范围重新查询）。</p><p>如果是后台批处理任务要求分批获取数据，则可以加大 page size，比如每次获取 5000 条记录，有效减少分页数（当然离线访问一般走备库，避免冲击主库）。</p><p>分库设计时，一般还有配套大数据平台汇总所有分库的记录，有些分页查询可以考虑走大数据平台。</p><h2 id="_5-中间件" tabindex="-1"><a class="header-anchor" href="#_5-中间件" aria-hidden="true">#</a> 5. 中间件</h2><p>国内常见分库分表中间件：</p>',17),b={href:"https://github.com/alibaba/cobar",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/alibaba/tb_tddl",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/Qihoo360/Atlas",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/dangdangdotcom/sharding-jdbc",target:"_blank",rel:"noopener noreferrer"},w=e("strong",null,"可以选择的方案",-1),y={href:"http://www.mycat.org.cn/",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"技术选型建议：",-1),j=e("p",null,"建议使用的是 sharding-jdbc 和 mycat。",-1),S={href:"https://github.com/dangdangdotcom/sharding-jdbc",target:"_blank",rel:"noopener noreferrer"},L=e("strong",null,"优点在于不用部署，运维成本低，不需要代理层的二次转发请求，性能很高",-1),Q=e("strong",null,"耦合",-1),I={href:"http://www.mycat.org.cn/",target:"_blank",rel:"noopener noreferrer"},z=e("strong",null,"缺点在于需要部署",-1),D=e("strong",null,"好处在于对于各个项目是透明的",-1),q=e("p",null,"通常来说，这两个方案其实都可以选用，但是我个人建议中小型公司选用 sharding-jdbc，client 层方案轻便，而且维护成本低，不需要额外增派人手，而且中小型公司系统复杂度会低一些，项目也没那么多；但是中大型公司最好还是选用 mycat 这类 proxy 层方案，因为可能大公司系统和项目非常多，团队很大，人员充足，那么最好是专门弄个人来研究和维护 mycat，然后大量项目直接透明使用即可。",-1),M=e("h2",{id:"_6-参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-参考资料","aria-hidden":"true"},"#"),r(" 6. 参考资料")],-1),V={href:"https://time.geekbang.org/column/intro/100046801",target:"_blank",rel:"noopener noreferrer"},v={href:"https://shardingsphere.apache.org/document/current/cn/overview/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://juejin.im/post/5bf778ef5188251b8a26ed8b",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.jianshu.com/p/32b3e91aa22c",target:"_blank",rel:"noopener noreferrer"},N={href:"https://juejin.im/post/5d4b6dc1f265da03c1288332",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.cnblogs.com/barrywxx/p/11532122.html",target:"_blank",rel:"noopener noreferrer"};function E(H,T){const a=o("ExternalLinkIcon");return s(),d("div",null,[p,e("blockquote",null,[e("p",null,[r("分布式 ID 的解决方案详见："),e("a",l,[r("分布式 ID"),t(a)])])]),g,c,e("blockquote",null,[e("p",null,[r("分布式事务的解决方案详见："),e("a",u,[r("分布式事务"),t(a)])])]),_,e("ul",null,[e("li",null,[e("a",b,[r("Cobar"),t(a)]),r(" - 阿里 b2b 团队开发和开源的，属于 proxy 层方案，就是介于应用服务器和数据库服务器之间。应用程序通过 JDBC 驱动访问 cobar 集群，cobar 根据 SQL 和分库规则对 SQL 做分解，然后分发到 MySQL 集群不同的数据库实例上执行。早些年还可以用，但是最近几年都没更新了，基本没啥人用，差不多算是被抛弃的状态吧。而且不支持读写分离、存储过程、跨库 join 和分页等操作。")]),e("li",null,[e("a",f,[r("TDDL"),t(a)]),r(" - 淘宝团队开发的，属于 client 层方案。支持基本的 crud 语法和读写分离，但不支持 join、多表查询等语法。目前使用的也不多，因为还依赖淘宝的 diamond 配置管理系统。")]),e("li",null,[e("a",m,[r("Atlas"),t(a)]),r(" - 360 开源的，属于 proxy 层方案，以前是有一些公司在用的，但是确实有一个很大的问题就是社区最新的维护都在 5 年前了。所以，现在用的公司基本也很少了。")]),e("li",null,[e("a",x,[r("sharding-jdbc"),t(a)]),r(" - 当当开源的，属于 client 层方案。确实之前用的还比较多一些，因为 SQL 语法支持也比较多，没有太多限制，而且目前推出到了 2.0 版本，支持分库分表、读写分离、分布式 id 生成、柔性事务（最大努力送达型事务、TCC 事务）。而且确实之前使用的公司会比较多一些（这个在官网有登记使用的公司，可以看到从 2017 年一直到现在，是有不少公司在用的），目前社区也还一直在开发和维护，还算是比较活跃，个人认为算是一个现在也"),w,r("。")]),e("li",null,[e("a",y,[r("Mycat"),t(a)]),r(" - 基于 cobar 改造的，属于 proxy 层方案，支持的功能非常完善，而且目前应该是非常火的而且不断流行的数据库中间件，社区很活跃，也有一些公司开始在用了。但是确实相比于 sharding jdbc 来说，年轻一些，经历的锤炼少一些。")])]),k,j,e("ul",null,[e("li",null,[e("a",S,[r("sharding-jdbc"),t(a)]),r(" 这种 client 层方案的"),L,r("，但是如果遇到升级啥的需要各个系统都重新升级版本再发布，各个系统都需要"),Q,r(" sharding-jdbc 的依赖。其本质上通过配置多数据源，然后根据设定的分库分表策略，计算路由，将请求发送到计算得到的节点上。")]),e("li",null,[e("a",I,[r("Mycat"),t(a)]),r(" 这种 proxy 层方案的"),z,r("，自己运维一套中间件，运维成本高，但是"),D,r("，如果遇到升级之类的都是自己中间件那里搞就行了。")])]),q,M,e("ul",null,[e("li",null,[e("a",V,[r("后端存储实战课"),t(a)])]),e("li",null,[e("a",v,[r("ShardingSphere 官方文档"),t(a)])]),e("li",null,[e("a",B,[r('“分库分表" ？选型和流程要慎重，否则会失控'),t(a)])]),e("li",null,[e("a",C,[r("分库分表需要考虑的问题及方案"),t(a)])]),e("li",null,[e("a",N,[r("一次难得的分库分表实践"),t(a)])]),e("li",null,[e("a",A,[r("分库分表平滑扩容"),t(a)])])])])}const X=i(h,[["render",E],["__file","03.分库分表.html.vue"]]);export{X as default};
