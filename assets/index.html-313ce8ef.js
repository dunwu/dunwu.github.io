import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as o,a as e,e as d,f as a}from"./app-eab0d091.js";const i={},p=a('<h1 id="elasticsearch-面试总结" tabindex="-1"><a class="header-anchor" href="#elasticsearch-面试总结" aria-hidden="true">#</a> Elasticsearch 面试总结</h1><h2 id="集群部署" tabindex="-1"><a class="header-anchor" href="#集群部署" aria-hidden="true">#</a> 集群部署</h2><p>ES 部署情况：</p><p>5 节点（配置：8 核 64 G 1T），总计 320 G，5 T。</p><p>约 10+ 索引，5 分片，每日新增数据量约为 2G，4000w 条。记录保存 30 天。</p><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="filesystem-cache" tabindex="-1"><a class="header-anchor" href="#filesystem-cache" aria-hidden="true">#</a> filesystem cache</h3><p>你往 es 里写的数据，实际上都写到磁盘文件里去了，<strong>查询的时候</strong>，操作系统会将磁盘文件里的数据自动缓存到 <code>filesystem cache</code> 里面去。</p>',8),n={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/images/es-search-process.png",target:"_blank",rel:"noopener noreferrer"},h=e("img",{src:"https://github.com/doocs/advanced-java/raw/main/docs/high-concurrency/images/es-search-process.png",alt:"es-search-process",tabindex:"0",loading:"lazy"},null,-1),l=e("figcaption",null,"es-search-process",-1),g=a('<p>es 的搜索引擎严重依赖于底层的 <code>filesystem cache</code> ，你如果给 <code>filesystem cache</code> 更多的内存，尽量让内存可以容纳所有的 <code>idx segment file</code>索引数据文件，那么你搜索的时候就基本都是走内存的，性能会非常高。</p><p>性能差距究竟可以有多大？我们之前很多的测试和压测，如果走磁盘一般肯定上秒，搜索性能绝对是秒级别的，1 秒、5 秒、10 秒。但如果是走 <code>filesystem cache</code> ，是走纯内存的，那么一般来说性能比走磁盘要高一个数量级，基本上就是毫秒级的，从几毫秒到几百毫秒不等。</p><p>这里有个真实的案例。某个公司 es 节点有 3 台机器，每台机器看起来内存很多，64G，总内存就是 <code>64 * 3 = 192G</code> 。每台机器给 es jvm heap 是 <code>32G</code> ，那么剩下来留给 <code>filesystem cache</code> 的就是每台机器才 <code>32G</code> ，总共集群里给 <code>filesystem cache</code> 的就是 <code>32 * 3 = 96G</code> 内存。而此时，整个磁盘上索引数据文件，在 3 台机器上一共占用了 <code>1T</code> 的磁盘容量，es 数据量是 <code>1T</code> ，那么每台机器的数据量是 <code>300G</code> 。这样性能好吗？ <code>filesystem cache</code> 的内存才 100G，十分之一的数据可以放内存，其他的都在磁盘，然后你执行搜索操作，大部分操作都是走磁盘，性能肯定差。</p><p>归根结底，你要让 es 性能要好，最佳的情况下，就是你的机器的内存，至少可以容纳你的总数据量的一半。</p><p>根据我们自己的生产环境实践经验，最佳的情况下，是仅仅在 es 中就存少量的数据，就是你要<strong>用来搜索的那些索引</strong>，如果内存留给 <code>filesystem cache</code> 的是 100G，那么你就将索引数据控制在 <code>100G</code> 以内，这样的话，你的数据几乎全部走内存来搜索，性能非常之高，一般可以在 1 秒以内。</p><p>比如说你现在有一行数据。 <code>id,name,age ....</code> 30 个字段。但是你现在搜索，只需要根据 <code>id,name,age</code> 三个字段来搜索。如果你傻乎乎往 es 里写入一行数据所有的字段，就会导致说 <code>90%</code> 的数据是不用来搜索的，结果硬是占据了 es 机器上的 <code>filesystem cache</code> 的空间，单条数据的数据量越大，就会导致 <code>filesystem cahce</code> 能缓存的数据就越少。其实，仅仅写入 es 中要用来检索的<strong>少数几个字段</strong>就可以了，比如说就写入 es <code>id,name,age</code> 三个字段，然后你可以把其他的字段数据存在 mysql/hbase 里，我们一般是建议用 <code>es + hbase</code> 这么一个架构。</p><p>hbase 的特点是<strong>适用于海量数据的在线存储</strong>，就是对 hbase 可以写入海量数据，但是不要做复杂的搜索，做很简单的一些根据 id 或者范围进行查询的这么一个操作就可以了。从 es 中根据 name 和 age 去搜索，拿到的结果可能就 20 个 <code>doc id</code> ，然后根据 <code>doc id</code> 到 hbase 里去查询每个 <code>doc id</code> 对应的<strong>完整的数据</strong>，给查出来，再返回给前端。</p><p>写入 es 的数据最好小于等于，或者是略微大于 es 的 filesystem cache 的内存容量。然后你从 es 检索可能就花费 20ms，然后再根据 es 返回的 id 去 hbase 里查询，查 20 条数据，可能也就耗费个 30ms，可能你原来那么玩儿，1T 数据都放 es，会每次查询都是 5~10s，现在可能性能就会很高，每次查询就是 50ms。</p><h3 id="数据预热" tabindex="-1"><a class="header-anchor" href="#数据预热" aria-hidden="true">#</a> 数据预热</h3><p>假如说，哪怕是你就按照上述的方案去做了，es 集群中每个机器写入的数据量还是超过了 <code>filesystem cache</code> 一倍，比如说你写入一台机器 60G 数据，结果 <code>filesystem cache</code> 就 30G，还是有 30G 数据留在了磁盘上。</p><p>其实可以做<strong>数据预热</strong>。</p><p>举个例子，拿微博来说，你可以把一些大 V，平时看的人很多的数据，你自己提前后台搞个系统，每隔一会儿，自己的后台系统去搜索一下热数据，刷到 <code>filesystem cache</code> 里去，后面用户实际上来看这个热数据的时候，他们就是直接从内存里搜索了，很快。</p><p>或者是电商，你可以将平时查看最多的一些商品，比如说 iphone 8，热数据提前后台搞个程序，每隔 1 分钟自己主动访问一次，刷到 <code>filesystem cache</code> 里去。</p><p>对于那些你觉得比较热的、经常会有人访问的数据，最好<strong>做一个专门的缓存预热子系统</strong>，就是对热数据每隔一段时间，就提前访问一下，让数据进入 <code>filesystem cache</code> 里面去。这样下次别人访问的时候，性能一定会好很多。</p><h3 id="冷热分离" tabindex="-1"><a class="header-anchor" href="#冷热分离" aria-hidden="true">#</a> 冷热分离</h3><p>es 可以做类似于 mysql 的水平拆分，就是说将大量的访问很少、频率很低的数据，单独写一个索引，然后将访问很频繁的热数据单独写一个索引。最好是将<strong>冷数据写入一个索引中，然后热数据写入另外一个索引中</strong>，这样可以确保热数据在被预热之后，尽量都让他们留在 <code>filesystem os cache</code> 里，<strong>别让冷数据给冲刷掉</strong>。</p><p>你看，假设你有 6 台机器，2 个索引，一个放冷数据，一个放热数据，每个索引 3 个 shard。3 台机器放热数据 index，另外 3 台机器放冷数据 index。然后这样的话，你大量的时间是在访问热数据 index，热数据可能就占总数据量的 10%，此时数据量很少，几乎全都保留在 <code>filesystem cache</code> 里面了，就可以确保热数据的访问性能是很高的。但是对于冷数据而言，是在别的 index 里的，跟热数据 index 不在相同的机器上，大家互相之间都没什么联系了。如果有人访问冷数据，可能大量数据是在磁盘上的，此时性能差点，就 10% 的人去访问冷数据，90% 的人在访问热数据，也无所谓了。</p><h3 id="document-模型设计" tabindex="-1"><a class="header-anchor" href="#document-模型设计" aria-hidden="true">#</a> document 模型设计</h3><p>对于 MySQL，我们经常有一些复杂的关联查询。在 es 里该怎么玩儿，es 里面的复杂的关联查询尽量别用，一旦用了性能一般都不太好。</p><p>最好是先在 Java 系统里就完成关联，将关联好的数据直接写入 es 中。搜索的时候，就不需要利用 es 的搜索语法来完成 join 之类的关联搜索了。</p><p>document 模型设计是非常重要的，很多操作，不要在搜索的时候才想去执行各种复杂的乱七八糟的操作。es 能支持的操作就那么多，不要考虑用 es 做一些它不好操作的事情。如果真的有那种操作，尽量在 document 模型设计的时候，写入的时候就完成。另外对于一些太复杂的操作，比如 join/nested/parent-child 搜索都要尽量避免，性能都很差的。</p><h3 id="分页性能优化" tabindex="-1"><a class="header-anchor" href="#分页性能优化" aria-hidden="true">#</a> 分页性能优化</h3><p>es 的分页是较坑的，为啥呢？举个例子吧，假如你每页是 10 条数据，你现在要查询第 100 页，实际上是会把每个 shard 上存储的前 1000 条数据都查到一个协调节点上，如果你有个 5 个 shard，那么就有 5000 条数据，接着协调节点对这 5000 条数据进行一些合并、处理，再获取到最终第 100 页的 10 条数据。</p><p>分布式的，你要查第 100 页的 10 条数据，不可能说从 5 个 shard，每个 shard 就查 2 条数据，最后到协调节点合并成 10 条数据吧？你<strong>必须</strong>得从每个 shard 都查 1000 条数据过来，然后根据你的需求进行排序、筛选等等操作，最后再次分页，拿到里面第 100 页的数据。你翻页的时候，翻的越深，每个 shard 返回的数据就越多，而且协调节点处理的时间越长，非常坑爹。所以用 es 做分页的时候，你会发现越翻到后面，就越是慢。</p><p>我们之前也是遇到过这个问题，用 es 作分页，前几页就几十毫秒，翻到 10 页或者几十页的时候，基本上就要 5~10 秒才能查出来一页数据了。</p><p>有什么解决方案吗？</p><h4 id="不允许深度分页-默认深度分页性能很差" tabindex="-1"><a class="header-anchor" href="#不允许深度分页-默认深度分页性能很差" aria-hidden="true">#</a> 不允许深度分页（默认深度分页性能很差）</h4><p>跟产品经理说，你系统不允许翻那么深的页，默认翻的越深，性能就越差。</p><h4 id="类似于-app-里的推荐商品不断下拉出来一页一页的" tabindex="-1"><a class="header-anchor" href="#类似于-app-里的推荐商品不断下拉出来一页一页的" aria-hidden="true">#</a> 类似于 app 里的推荐商品不断下拉出来一页一页的</h4><p>类似于微博中，下拉刷微博，刷出来一页一页的，你可以用 <code>scroll api</code> ，关于如何使用，自行上网搜索。</p><p>scroll 会一次性给你生成<strong>所有数据的一个快照</strong>，然后每次滑动向后翻页就是通过<strong>游标</strong> <code>scroll_id</code> 移动，获取下一页下一页这样子，性能会比上面说的那种分页性能要高很多很多，基本上都是毫秒级的。</p><p>但是，唯一的一点就是，这个适合于那种类似微博下拉翻页的，<strong>不能随意跳到任何一页的场景</strong>。也就是说，你不能先进入第 10 页，然后去第 120 页，然后又回到第 58 页，不能随意乱跳页。所以现在很多产品，都是不允许你随意翻页的，app，也有一些网站，做的就是你只能往下拉，一页一页的翻。</p><p>初始化时必须指定 <code>scroll</code> 参数，告诉 es 要保存此次搜索的上下文多长时间。你需要确保用户不会持续不断翻页翻几个小时，否则可能因为超时而失败。</p><p>除了用 <code>scroll api</code> ，你也可以用 <code>search_after</code> 来做， <code>search_after</code> 的思想是使用前一页的结果来帮助检索下一页的数据，显然，这种方式也不允许你随意翻页，你只能一页页往后翻。初始化时，需要使用一个唯一值的字段作为 sort 字段。</p><p><strong>1.1、设计阶段调优</strong></p><p>（1）根据业务增量需求，采取基于日期模板创建索引，通过 roll over API 滚动索引；</p><p>（2）使用别名进行索引管理；</p><p>（3）每天凌晨定时对索引做 force_merge 操作，以释放空间；</p><p>（4）采取冷热分离机制，热数据存储到 SSD，提高检索效率；冷数据定期进行 shrink 操作，以缩减存储；</p><p>（5）采取 curator 进行索引的生命周期管理；</p><p>（6）仅针对需要分词的字段，合理的设置分词器；</p><p>（7）Mapping 阶段充分结合各个字段的属性，是否需要检索、是否需要存储等。……..</p><p><strong>1.2、写入调优</strong></p><p>（1）写入前副本数设置为 0；</p><p>（2）写入前关闭 refresh_interval 设置为-1，禁用刷新机制；</p><p>（3）写入过程中：采取 bulk 批量写入；</p><p>（4）写入后恢复副本数和刷新间隔；</p><p>（5）尽量使用自动生成的 id。</p><p>1.3、查询调优</p><p>（1）禁用 wildcard；</p><p>（2）禁用批量 terms（成百上千的场景）；</p><p>（3）充分利用倒排索引机制，能 keyword 类型尽量 keyword；</p><p>（4）数据量大时候，可以先基于时间敲定索引再检索；</p><p>（5）设置合理的路由机制。</p><p>1.4、其他调优</p><p>部署调优，业务调优等。</p><p>上面的提及一部分，面试者就基本对你之前的实践或者运维经验有所评估了。</p><h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2><h3 id="es-写数据过程" tabindex="-1"><a class="header-anchor" href="#es-写数据过程" aria-hidden="true">#</a> es 写数据过程</h3><ul><li>客户端选择一个 node 发送请求过去，这个 node 就是 <code>coordinating node</code> （协调节点）。</li><li><code>coordinating node</code> 对 document 进行<strong>路由</strong>，将请求转发给对应的 node（有 primary shard）。</li><li>实际的 node 上的 <code>primary shard</code> 处理请求，然后将数据同步到 <code>replica node</code> 。</li><li><code>coordinating node</code> 如果发现 <code>primary node</code> 和所有 <code>replica node</code> 都搞定之后，就返回响应结果给客户端。</li></ul>',60),f={href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/images/es-write.png",target:"_blank",rel:"noopener noreferrer"},m=e("img",{src:"https://github.com/doocs/advanced-java/raw/main/docs/high-concurrency/images/es-write.png",alt:"es-write",tabindex:"0",loading:"lazy"},null,-1),u=e("figcaption",null,"es-write",-1),b=a(`<h3 id="es-读数据过程" tabindex="-1"><a class="header-anchor" href="#es-读数据过程" aria-hidden="true">#</a> es 读数据过程</h3><p>可以通过 <code>doc id</code> 来查询，会根据 <code>doc id</code> 进行 hash，判断出来当时把 <code>doc id</code> 分配到了哪个 shard 上面去，从那个 shard 去查询。</p><ul><li>客户端发送请求到<strong>任意</strong>一个 node，成为 <code>coordinate node</code> 。</li><li><code>coordinate node</code> 对 <code>doc id</code> 进行哈希路由，将请求转发到对应的 node，此时会使用 <code>round-robin</code> <strong>随机轮询算法</strong>，在 <code>primary shard</code> 以及其所有 replica 中随机选择一个，让读请求负载均衡。</li><li>接收请求的 node 返回 document 给 <code>coordinate node</code> 。</li><li><code>coordinate node</code> 返回 document 给客户端。</li></ul><h3 id="es-搜索数据过程" tabindex="-1"><a class="header-anchor" href="#es-搜索数据过程" aria-hidden="true">#</a> es 搜索数据过程</h3><p>es 最强大的是做全文检索，就是比如你有三条数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java真好玩儿啊
java好难学啊
j2ee特别牛
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你根据 <code>java</code> 关键词来搜索，将包含 <code>java</code> 的 <code>document</code> 给搜索出来。es 就会给你返回：java 真好玩儿啊，java 好难学啊。</p><ul><li>客户端发送请求到一个 <code>coordinate node</code> 。</li><li>协调节点将搜索请求转发到<strong>所有</strong>的 shard 对应的 <code>primary shard</code> 或 <code>replica shard</code> ，都可以。</li><li>query phase：每个 shard 将自己的搜索结果（其实就是一些 <code>doc id</code> ）返回给协调节点，由协调节点进行数据的合并、排序、分页等操作，产出最终结果。</li><li>fetch phase：接着由协调节点根据 <code>doc id</code> 去各个节点上<strong>拉取实际</strong>的 <code>document</code> 数据，最终返回给客户端。</li></ul><blockquote><p>写请求是写入 primary shard，然后同步给所有的 replica shard；读请求可以从 primary shard 或 replica shard 读取，采用的是随机轮询算法。</p></blockquote><h3 id="写数据底层原理" tabindex="-1"><a class="header-anchor" href="#写数据底层原理" aria-hidden="true">#</a> 写数据底层原理</h3>`,10),x={href:"https://github.com/doocs/advanced-java/blob/main/docs/high-concurrency/images/es-write-detail.png",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:"https://github.com/doocs/advanced-java/raw/master/docs/high-concurrency/images/es-write-detail.png",alt:"es-write-detail",tabindex:"0",loading:"lazy"},null,-1),_=e("figcaption",null,"es-write-detail",-1),v=a(`<p>先写入内存 buffer，在 buffer 里的时候数据是搜索不到的；同时将数据写入 translog 日志文件。</p><p>如果 buffer 快满了，或者到一定时间，就会将内存 buffer 数据 <code>refresh</code> 到一个新的 <code>segment file</code> 中，但是此时数据不是直接进入 <code>segment file</code> 磁盘文件，而是先进入 <code>os cache</code> 。这个过程就是 <code>refresh</code> 。</p><p>每隔 1 秒钟，es 将 buffer 中的数据写入一个<strong>新的</strong> <code>segment file</code> ，每秒钟会产生一个<strong>新的磁盘文件</strong> <code>segment file</code> ，这个 <code>segment file</code> 中就存储最近 1 秒内 buffer 中写入的数据。</p><p>但是如果 buffer 里面此时没有数据，那当然不会执行 refresh 操作，如果 buffer 里面有数据，默认 1 秒钟执行一次 refresh 操作，刷入一个新的 segment file 中。</p><p>操作系统里面，磁盘文件其实都有一个东西，叫做 <code>os cache</code> ，即操作系统缓存，就是说数据写入磁盘文件之前，会先进入 <code>os cache</code> ，先进入操作系统级别的一个内存缓存中去。只要 <code>buffer</code> 中的数据被 refresh 操作刷入 <code>os cache</code> 中，这个数据就可以被搜索到了。</p><p>为什么叫 es 是<strong>准实时</strong>的？ <code>NRT</code> ，全称 <code>near real-time</code> 。默认是每隔 1 秒 refresh 一次的，所以 es 是准实时的，因为写入的数据 1 秒之后才能被看到。可以通过 es 的 <code>restful api</code> 或者 <code>java api</code> ，<strong>手动</strong>执行一次 refresh 操作，就是手动将 buffer 中的数据刷入 <code>os cache</code> 中，让数据立马就可以被搜索到。只要数据被输入 <code>os cache</code> 中，buffer 就会被清空了，因为不需要保留 buffer 了，数据在 translog 里面已经持久化到磁盘去一份了。</p><p>重复上面的步骤，新的数据不断进入 buffer 和 translog，不断将 <code>buffer</code> 数据写入一个又一个新的 <code>segment file</code> 中去，每次 <code>refresh</code> 完 buffer 清空，translog 保留。随着这个过程推进，translog 会变得越来越大。当 translog 达到一定长度的时候，就会触发 <code>commit</code> 操作。</p><p>commit 操作发生第一步，就是将 buffer 中现有数据 <code>refresh</code> 到 <code>os cache</code> 中去，清空 buffer。然后，将一个 <code>commit point</code> 写入磁盘文件，里面标识着这个 <code>commit point</code> 对应的所有 <code>segment file</code> ，同时强行将 <code>os cache</code> 中目前所有的数据都 <code>fsync</code> 到磁盘文件中去。最后<strong>清空</strong> 现有 translog 日志文件，重启一个 translog，此时 commit 操作完成。</p><p>这个 commit 操作叫做 <code>flush</code> 。默认 30 分钟自动执行一次 <code>flush</code> ，但如果 translog 过大，也会触发 <code>flush</code> 。flush 操作就对应着 commit 的全过程，我们可以通过 es api，手动执行 flush 操作，手动将 os cache 中的数据 fsync 强刷到磁盘上去。</p><p>translog 日志文件的作用是什么？你执行 commit 操作之前，数据要么是停留在 buffer 中，要么是停留在 os cache 中，无论是 buffer 还是 os cache 都是内存，一旦这台机器死了，内存中的数据就全丢了。所以需要将数据对应的操作写入一个专门的日志文件 <code>translog</code> 中，一旦此时机器宕机，再次重启的时候，es 会自动读取 translog 日志文件中的数据，恢复到内存 buffer 和 os cache 中去。</p><p>translog 其实也是先写入 os cache 的，默认每隔 5 秒刷一次到磁盘中去，所以默认情况下，可能有 5 秒的数据会仅仅停留在 buffer 或者 translog 文件的 os cache 中，如果此时机器挂了，会<strong>丢失</strong> 5 秒钟的数据。但是这样性能比较好，最多丢 5 秒的数据。也可以将 translog 设置成每次写操作必须是直接 <code>fsync</code> 到磁盘，但是性能会差很多。</p><p>实际上你在这里，如果面试官没有问你 es 丢数据的问题，你可以在这里给面试官炫一把，你说，其实 es 第一是准实时的，数据写入 1 秒后可以搜索到；可能会丢失数据的。有 5 秒的数据，停留在 buffer、translog os cache、segment file os cache 中，而不在磁盘上，此时如果宕机，会导致 5 秒的<strong>数据丢失</strong>。</p><p><strong>总结一下</strong>，数据先写入内存 buffer，然后每隔 1s，将数据 refresh 到 os cache，到了 os cache 数据就能被搜索到（所以我们才说 es 从写入到能被搜索到，中间有 1s 的延迟）。每隔 5s，将数据写入 translog 文件（这样如果机器宕机，内存数据全没，最多会有 5s 的数据丢失），translog 大到一定程度，或者默认每隔 30mins，会触发 commit 操作，将缓冲区的数据都 flush 到 segment file 磁盘文件中。</p><blockquote><p>数据写入 segment file 之后，同时就建立好了倒排索引。</p></blockquote><h3 id="删除-更新数据底层原理" tabindex="-1"><a class="header-anchor" href="#删除-更新数据底层原理" aria-hidden="true">#</a> 删除/更新数据底层原理</h3><p>如果是删除操作，commit 的时候会生成一个 <code>.del</code> 文件，里面将某个 doc 标识为 <code>deleted</code> 状态，那么搜索的时候根据 <code>.del</code> 文件就知道这个 doc 是否被删除了。</p><p>如果是更新操作，就是将原来的 doc 标识为 <code>deleted</code> 状态，然后新写入一条数据。</p><p>buffer 每 refresh 一次，就会产生一个 <code>segment file</code> ，所以默认情况下是 1 秒钟一个 <code>segment file</code> ，这样下来 <code>segment file</code> 会越来越多，此时会定期执行 merge。每次 merge 的时候，会将多个 <code>segment file</code> 合并成一个，同时这里会将标识为 <code>deleted</code> 的 doc 给<strong>物理删除掉</strong>，然后将新的 <code>segment file</code> 写入磁盘，这里会写一个 <code>commit point</code> ，标识所有新的 <code>segment file</code> ，然后打开 <code>segment file</code> 供搜索使用，同时删除旧的 <code>segment file</code> 。</p><h3 id="底层-lucene" tabindex="-1"><a class="header-anchor" href="#底层-lucene" aria-hidden="true">#</a> 底层 lucene</h3><p>简单来说，lucene 就是一个 jar 包，里面包含了封装好的各种建立倒排索引的算法代码。我们用 Java 开发的时候，引入 lucene jar，然后基于 lucene 的 api 去开发就可以了。</p><p>通过 lucene，我们可以将已有的数据建立索引，lucene 会在本地磁盘上面，给我们组织索引的数据结构。</p><h3 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h3><p>在搜索引擎中，每个文档都有一个对应的文档 ID，文档内容被表示为一系列关键词的集合。例如，文档 1 经过分词，提取了 20 个关键词，每个关键词都会记录它在文档中出现的次数和出现位置。</p><p>那么，倒排索引就是<strong>关键词到文档</strong> ID 的映射，每个关键词都对应着一系列的文件，这些文件中都出现了关键词。</p><p>举个栗子。</p><p>有以下文档：</p><table><thead><tr><th>DocId</th><th>Doc</th></tr></thead><tbody><tr><td>1</td><td>谷歌地图之父跳槽 Facebook</td></tr><tr><td>2</td><td>谷歌地图之父加盟 Facebook</td></tr><tr><td>3</td><td>谷歌地图创始人拉斯离开谷歌加盟 Facebook</td></tr><tr><td>4</td><td>谷歌地图之父跳槽 Facebook 与 Wave 项目取消有关</td></tr><tr><td>5</td><td>谷歌地图之父拉斯加盟社交网站 Facebook</td></tr></tbody></table><p>对文档进行分词之后，得到以下<strong>倒排索引</strong>。</p><table><thead><tr><th>WordId</th><th>Word</th><th>DocIds</th></tr></thead><tbody><tr><td>1</td><td>谷歌</td><td>1, 2, 3, 4, 5</td></tr><tr><td>2</td><td>地图</td><td>1, 2, 3, 4, 5</td></tr><tr><td>3</td><td>之父</td><td>1, 2, 4, 5</td></tr><tr><td>4</td><td>跳槽</td><td>1, 4</td></tr><tr><td>5</td><td>Facebook</td><td>1, 2, 3, 4, 5</td></tr><tr><td>6</td><td>加盟</td><td>2, 3, 5</td></tr><tr><td>7</td><td>创始人</td><td>3</td></tr><tr><td>8</td><td>拉斯</td><td>3, 5</td></tr><tr><td>9</td><td>离开</td><td>3</td></tr><tr><td>10</td><td>与</td><td>4</td></tr><tr><td>..</td><td>..</td><td>..</td></tr></tbody></table><p>另外，实用的倒排索引还可以记录更多的信息，比如文档频率信息，表示在文档集合中有多少个文档包含某个单词。</p><p>那么，有了倒排索引，搜索引擎可以很方便地响应用户的查询。比如用户输入查询 <code>Facebook</code> ，搜索系统查找倒排索引，从中读出包含这个单词的文档，这些文档就是提供给用户的搜索结果。</p><p>要注意倒排索引的两个重要细节：</p><ul><li>倒排索引中的所有词项对应一个或多个文档；</li><li>倒排索引中的词项<strong>根据字典顺序升序排列</strong></li></ul><blockquote><p>上面只是一个简单的栗子，并没有严格按照字典顺序升序排列。</p></blockquote><h2 id="elasticsearch-的倒排索引是什么" tabindex="-1"><a class="header-anchor" href="#elasticsearch-的倒排索引是什么" aria-hidden="true">#</a> elasticsearch 的倒排索引是什么</h2><p>面试官：想了解你对基础概念的认知。</p><p>解答：通俗解释一下就可以。</p><p>传统的我们的检索是通过文章，逐个遍历找到对应关键词的位置。</p><p>而倒排索引，是通过分词策略，形成了词和文章的映射关系表，这种词典+映射表即为倒排索引。有了倒排索引，就能实现 o（1）时间复杂度的效率检索文章了，极大的提高了检索效率。</p><figure><img src="https://pic3.zhimg.com/80/v2-bf18227dc4554da0dcc7b970dbd582ae_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>学术的解答方式：</p><p>倒排索引，相反于一篇文章包含了哪些词，它从词出发，记载了这个词在哪些文档中出现过，由两部分组成——词典和倒排表。</p><p>加分项：倒排索引的底层实现是基于：FST（Finite State Transducer）数据结构。</p><p>lucene 从 4+版本后开始大量使用的数据结构是 FST。FST 有两个优点：</p><p>（1）空间占用小。通过对词典中单词前缀和后缀的重复利用，压缩了存储空间；</p><p>（2）查询速度快。O(len(str))的查询时间复杂度。</p><h2 id="_3、elasticsearch-索引数据多了怎么办-如何调优-部署" tabindex="-1"><a class="header-anchor" href="#_3、elasticsearch-索引数据多了怎么办-如何调优-部署" aria-hidden="true">#</a> 3、elasticsearch 索引数据多了怎么办，如何调优，部署</h2><p>面试官：想了解大数据量的运维能力。</p><p>解答：索引数据的规划，应在前期做好规划，正所谓“设计先行，编码在后”，这样才能有效的避免突如其来的数据激增导致集群处理能力不足引发的线上客户检索或者其他业务受到影响。</p><p>如何调优，正如问题 1 所说，这里细化一下：</p><p><strong>3.1 动态索引层面</strong></p><p>基于模板+时间+rollover api 滚动创建索引，举例：设计阶段定义：blog 索引的模板格式为：blog<em>index</em>时间戳的形式，每天递增数据。这样做的好处：不至于数据量激增导致单个索引数据量非常大，接近于上线 2 的 32 次幂-1，索引存储达到了 TB+甚至更大。</p><p>一旦单个索引很大，存储等各种风险也随之而来，所以要提前考虑+及早避免。</p><p><strong>3.2 存储层面</strong></p><p>冷热数据分离存储，热数据（比如最近 3 天或者一周的数据），其余为冷数据。</p><p>对于冷数据不会再写入新数据，可以考虑定期 force_merge 加 shrink 压缩操作，节省存储空间和检索效率。</p><p><strong>3.3 部署层面</strong></p><p>一旦之前没有规划，这里就属于应急策略。</p><p>结合 ES 自身的支持动态扩展的特点，动态新增机器的方式可以缓解集群压力，注意：如果之前主节点等规划合理，不需要重启集群也能完成动态新增的。</p><h2 id="_4、elasticsearch-是如何实现-master-选举的" tabindex="-1"><a class="header-anchor" href="#_4、elasticsearch-是如何实现-master-选举的" aria-hidden="true">#</a> 4、elasticsearch 是如何实现 master 选举的</h2><p>面试官：想了解 ES 集群的底层原理，不再只关注业务层面了。</p><p>解答：</p><p>前置前提：</p><p>（1）只有候选主节点（master：true）的节点才能成为主节点。</p><p>（2）最小主节点数（min_master_nodes）的目的是防止脑裂。</p><p>核对了一下代码，核心入口为 findMaster，选择主节点成功返回对应 Master，否则返回 null。选举流程大致描述如下：</p><p>第一步：确认候选主节点数达标，elasticsearch.yml 设置的值</p><p>discovery.zen.minimum_master_nodes；</p><p>第二步：比较：先判定是否具备 master 资格，具备候选主节点资格的优先返回；</p><p>若两节点都为候选主节点，则 id 小的值会主节点。注意这里的 id 为 string 类型。</p><p>题外话：获取节点 id 的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1GET /_cat/nodes?v&amp;h=ip,port,heapPercent,heapMax,id,name

2ip port heapPercent heapMax id name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="详细描述一下-elasticsearch-索引文档的过程" tabindex="-1"><a class="header-anchor" href="#详细描述一下-elasticsearch-索引文档的过程" aria-hidden="true">#</a> 详细描述一下 Elasticsearch 索引文档的过程</h2><p>面试官：想了解 ES 的底层原理，不再只关注业务层面了。</p><p>解答：</p><p>这里的索引文档应该理解为文档写入 ES，创建索引的过程。</p><p>文档写入包含：单文档写入和批量 bulk 写入，这里只解释一下：单文档写入流程。</p><p>记住官方文档中的这个图。</p><figure><img src="https://pic3.zhimg.com/80/v2-bf1b23846420eb4fdace5c6415ad7cf2_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>第一步：客户写集群某节点写入数据，发送请求。（如果没有指定路由/协调节点，请求的节点扮演路由节点的角色。）</p><p>第二步：节点 1 接受到请求后，使用文档_id 来确定文档属于分片 0。请求会被转到另外的节点，假定节点 3。因此分片 0 的主分片分配到节点 3 上。</p><p>第三步：节点 3 在主分片上执行写操作，如果成功，则将请求并行转发到节点 1 和节点 2 的副本分片上，等待结果返回。所有的副本分片都报告成功，节点 3 将向协调节点（节点 1）报告成功，节点 1 向请求客户端报告写入成功。</p><p>如果面试官再问：第二步中的文档获取分片的过程？</p><p>回答：借助路由算法获取，路由算法就是根据路由和文档 id 计算目标的分片 id 的过程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1shard = hash(_routing) % (num_of_primary_shards)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="详细描述一下-elasticsearch-搜索的过程" tabindex="-1"><a class="header-anchor" href="#详细描述一下-elasticsearch-搜索的过程" aria-hidden="true">#</a> 详细描述一下 Elasticsearch 搜索的过程？</h2><p>面试官：想了解 ES 搜索的底层原理，不再只关注业务层面了。</p><p>解答：</p><p>搜索拆解为“query then fetch” 两个阶段。</p><p>query 阶段的目的：定位到位置，但不取。</p><p>步骤拆解如下：</p><p>（1）假设一个索引数据有 5 主+1 副本 共 10 分片，一次请求会命中（主或者副本分片中）的一个。</p><p>（2）每个分片在本地进行查询，结果返回到本地有序的优先队列中。</p><p>（3）第 2）步骤的结果发送到协调节点，协调节点产生一个全局的排序列表。</p><p>fetch 阶段的目的：取数据。</p><p>路由节点获取所有文档，返回给客户端。</p><h2 id="elasticsearch-在部署时-对-linux-的设置有哪些优化方法" tabindex="-1"><a class="header-anchor" href="#elasticsearch-在部署时-对-linux-的设置有哪些优化方法" aria-hidden="true">#</a> Elasticsearch 在部署时，对 Linux 的设置有哪些优化方法</h2><p>面试官：想了解对 ES 集群的运维能力。</p><p>解答：</p><p>（1）关闭缓存 swap;</p><p>（2）堆内存设置为：Min（节点内存/2, 32GB）;</p><p>（3）设置最大文件句柄数；</p><p>（4）线程池+队列大小根据业务需要做调整；</p><p>（5）磁盘存储 raid 方式——存储有条件使用 RAID10，增加单节点性能以及避免单节点存储故障。</p><h2 id="lucence-内部结构是什么" tabindex="-1"><a class="header-anchor" href="#lucence-内部结构是什么" aria-hidden="true">#</a> lucence 内部结构是什么？</h2><p>面试官：想了解你的知识面的广度和深度。</p><p>解答：</p><figure><img src="https://pic1.zhimg.com/80/v2-576954e3b238870ec089d68abe0de1d4_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Lucene 是有索引和搜索的两个过程，包含索引创建，索引，搜索三个要点。可以基于这个脉络展开一些。</p><h2 id="elasticsearch-是如何实现-master-选举的" tabindex="-1"><a class="header-anchor" href="#elasticsearch-是如何实现-master-选举的" aria-hidden="true">#</a> Elasticsearch 是如何实现 Master 选举的？</h2><p>（1）Elasticsearch 的选主是 ZenDiscovery 模块负责的，主要包含 Ping（节点之间通过这个 RPC 来发现彼此）和 Unicast（单播模块包含一个主机列表以控制哪些节点需要 ping 通）这两部分；</p><p>（2）对所有可以成为 master 的节点（node.master: true）根据 nodeId 字典排序，每次选举每个节点都把自己所知道节点排一次序，然后选出第一个（第 0 位）节点，暂且认为它是 master 节点。</p><p>（3）如果对某个节点的投票数达到一定的值（可以成为 master 节点数 n/2+1）并且该节点自己也选举自己，那这个节点就是 master。否则重新选举一直到满足上述条件。</p><p>（4）补充：master 节点的职责主要包括集群、节点和索引的管理，不负责文档级别的管理；data 节点可以关闭 http 功能*。</p><h2 id="_10、elasticsearch-中的节点-比如共-20-个-其中的-10-个" tabindex="-1"><a class="header-anchor" href="#_10、elasticsearch-中的节点-比如共-20-个-其中的-10-个" aria-hidden="true">#</a> 10、Elasticsearch 中的节点（比如共 20 个），其中的 10 个</h2><p>选了一个 master，另外 10 个选了另一个 master，怎么办？</p><p>（1）当集群 master 候选数量不小于 3 个时，可以通过设置最少投票通过数量（discovery.zen.minimum_master_nodes）超过所有候选节点一半以上来解决脑裂问题；</p><p>（3）当候选数量为两个时，只能修改为唯一的一个 master 候选，其他作为 data 节点，避免脑裂问题。</p><h2 id="客户端在和集群连接时-如何选择特定的节点执行请求的" tabindex="-1"><a class="header-anchor" href="#客户端在和集群连接时-如何选择特定的节点执行请求的" aria-hidden="true">#</a> 客户端在和集群连接时，如何选择特定的节点执行请求的？</h2><p>TransportClient 利用 transport 模块远程连接一个 elasticsearch 集群。它并不加入到集群中，只是简单的获得一个或者多个初始化的 transport 地址，并以 轮询 的方式与这些地址进行通信。</p><h2 id="详细描述一下-elasticsearch-索引文档的过程。" tabindex="-1"><a class="header-anchor" href="#详细描述一下-elasticsearch-索引文档的过程。" aria-hidden="true">#</a> 详细描述一下 Elasticsearch 索引文档的过程。</h2><p>协调节点默认使用文档 ID 参与计算（也支持通过 routing），以便为路由提供合适的分片。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shard = hash(document_id) % (num_of_primary_shards)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（1）当分片所在的节点接收到来自协调节点的请求后，会将请求写入到 MemoryBuffer，然后定时（默认是每隔 1 秒）写入到 Filesystem Cache，这个从 MomeryBuffer 到 Filesystem Cache 的过程就叫做 refresh；</p><p>（2）当然在某些情况下，存在 Momery Buffer 和 Filesystem Cache 的数据可能会丢失，ES 是通过 translog 的机制来保证数据的可靠性的。其实现机制是接收到请求后，同时也会写入到 translog 中 ，当 Filesystem cache 中的数据写入到磁盘中时，才会清除掉，这个过程叫做 flush；</p><p>（3）在 flush 过程中，内存中的缓冲将被清除，内容被写入一个新段，段的 fsync 将创建一个新的提交点，并将内容刷新到磁盘，旧的 translog 将被删除并开始一个新的 translog。</p><p>（4）flush 触发的时机是定时触发（默认 30 分钟）或者 translog 变得太大（默认为 512M）时；</p><figure><img src="https://pic4.zhimg.com/80/v2-5e0c4bfbd57a4fae4895c480aaaa0a37_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>补充：关于 Lucene 的 Segement：</p><p>（1）Lucene 索引是由多个段组成，段本身是一个功能齐全的倒排索引。</p><p>（2）段是不可变的，允许 Lucene 将新的文档增量地添加到索引中，而不用从头重建索引。</p><p>（3）对于每一个搜索请求而言，索引中的所有段都会被搜索，并且每个段会消耗 CPU 的时钟周、文件句柄和内存。这意味着段的数量越多，搜索性能会越低。</p><p>（4）为了解决这个问题，Elasticsearch 会合并小段到一个较大的段，提交新的合并段到磁盘，并删除那些旧的小段。</p><h2 id="详细描述一下-elasticsearch-更新和删除文档的过程。" tabindex="-1"><a class="header-anchor" href="#详细描述一下-elasticsearch-更新和删除文档的过程。" aria-hidden="true">#</a> 详细描述一下 Elasticsearch 更新和删除文档的过程。</h2><p>（1）删除和更新也都是写操作，但是 Elasticsearch 中的文档是不可变的，因此不能被删除或者改动以展示其变更；</p><p>（2）磁盘上的每个段都有一个相应的.del 文件。当删除请求发送后，文档并没有真的被删除，而是在.del 文件中被标记为删除。该文档依然能匹配查询，但是会在结果中被过滤掉。当段合并时，在.del 文件中被标记为删除的文档将不会被写入新段。</p><p>（3）在新的文档被创建时，Elasticsearch 会为该文档指定一个版本号，当执行更新时，旧版本的文档在.del 文件中被标记为删除，新版本的文档被索引到一个新段。旧版本的文档依然能匹配查询，但是会在结果中被过滤掉。</p><h2 id="详细描述一下-elasticsearch-搜索的过程。" tabindex="-1"><a class="header-anchor" href="#详细描述一下-elasticsearch-搜索的过程。" aria-hidden="true">#</a> 详细描述一下 Elasticsearch 搜索的过程。</h2><p>（1）搜索被执行成一个两阶段过程，我们称之为 Query Then Fetch；</p><p>（2）在初始查询阶段时，查询会广播到索引中每一个分片拷贝（主分片或者副本分片）。 每个分片在本地执行搜索并构建一个匹配文档的大小为 from + size 的优先队列。</p><p>PS：在搜索的时候是会查询 Filesystem Cache 的，但是有部分数据还在 MemoryBuffer，所以搜索是近实时的。</p><p>（3）每个分片返回各自优先队列中 所有文档的 ID 和排序值 给协调节点，它合并这些值到自己的优先队列中来产生一个全局排序后的结果列表。</p><p>（4）接下来就是 取回阶段，协调节点辨别出哪些文档需要被取回并向相关的分片提交多个 GET 请求。每个分片加载并 丰 富 文档，如果有需要的话，接着返回文档给协调节点。一旦所有的文档都被取回了，协调节点返回结果给客户端。</p><p>（5）补充：Query Then Fetch 的搜索类型在文档相关性打分的时候参考的是本分片的数据，这样在文档数量较少的时候可能不够准确，DFS Query Then Fetch 增加了一个预查询的处理，询问 Term 和 Document frequency，这个评分更准确，但是性能会变差。*</p><figure><img src="https://pic2.zhimg.com/80/v2-4c25616e623de2aee23bd63ec22a5bfd_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="在-elasticsearch-中-是怎么根据一个词找到对应的倒排索引的" tabindex="-1"><a class="header-anchor" href="#在-elasticsearch-中-是怎么根据一个词找到对应的倒排索引的" aria-hidden="true">#</a> 在 Elasticsearch 中，是怎么根据一个词找到对应的倒排索引的？</h2><p>（1）Lucene 的索引过程，就是按照全文检索的基本过程，将倒排表写成此文件格式的过程。</p><p>（2）Lucene 的搜索过程，就是按照此文件格式将索引进去的信息读出来，然后计算每篇文档打分(score)的过程。</p><h2 id="elasticsearch-在部署时-对-linux-的设置有哪些优化方法-1" tabindex="-1"><a class="header-anchor" href="#elasticsearch-在部署时-对-linux-的设置有哪些优化方法-1" aria-hidden="true">#</a> Elasticsearch 在部署时，对 Linux 的设置有哪些优化方法？</h2><p>（1）64 GB 内存的机器是非常理想的， 但是 32 GB 和 16 GB 机器也是很常见的。少于 8 GB 会适得其反。</p><p>（2）如果你要在更快的 CPUs 和更多的核心之间选择，选择更多的核心更好。多个内核提供的额外并发远胜过稍微快一点点的时钟频率。</p><p>（3）如果你负担得起 SSD，它将远远超出任何旋转介质。 基于 SSD 的节点，查询和索引性能都有提升。如果你负担得起，SSD 是一个好的选择。</p><p>（4）即使数据中心们近在咫尺，也要避免集群跨越多个数据中心。绝对要避免集群跨越大的地理距离。</p><p>（5）请确保运行你应用程序的 JVM 和服务器的 JVM 是完全一样的。 在 Elasticsearch 的几个地方，使用 Java 的本地序列化。</p><p>（6）通过设置 gateway.recover_after_nodes、gateway.expected_nodes、gateway.recover_after_time 可以在集群重启的时候避免过多的分片交换，这可能会让数据恢复从数个小时缩短为几秒钟。</p><p>（7）Elasticsearch 默认被配置为使用单播发现，以防止节点无意中加入集群。只有在同一台机器上运行的节点才会自动组成集群。最好使用单播代替组播。</p><p>（8）不要随意修改垃圾回收器（CMS）和各个线程池的大小。</p><p>（9）把你的内存的（少于）一半给 Lucene（但不要超过 32 GB！），通过 ES_HEAP_SIZE 环境变量设置。</p><p>（10）内存交换到磁盘对服务器性能来说是致命的。如果内存交换到磁盘上，一个 100 微秒的操作可能变成 10 毫秒。 再想想那么多 10 微秒的操作时延累加起来。 不难看出 swapping 对于性能是多么可怕。</p><p>（11）Lucene 使用了大 量 的文件。同时，Elasticsearch 在节点和 HTTP 客户端之间进行通信也使用了大量的套接字。 所有这一切都需要足够的文件描述符。你应该增加你的文件描述符，设置一个很大的值，如 64,000。</p><p>补充：索引阶段性能提升方法</p><p>（1）使用批量请求并调整其大小：每次批量数据 5–15 MB 大是个不错的起始点。</p><p>（2）存储：使用 SSD</p><p>（3）段和合并：Elasticsearch 默认值是 20 MB/s，对机械磁盘应该是个不错的设置。如果你用的是 SSD，可以考虑提高到 100–200 MB/s。如果你在做批量导入，完全不在意搜索，你可以彻底关掉合并限流。另外还可以增加 index.translog.flush_threshold_size 设置，从默认的 512 MB 到更大一些的值，比如 1 GB，这可以在一次清空触发的时候在事务日志里积累出更大的段。</p><p>（4）如果你的搜索结果不需要近实时的准确度，考虑把每个索引的 index.refresh_interval 改到 30s。</p><p>（5）如果你在做大批量导入，考虑通过设置 index.number_of_replicas: 0 关闭副本。</p><h2 id="对于-gc-方面-在使用-elasticsearch-时要注意什么" tabindex="-1"><a class="header-anchor" href="#对于-gc-方面-在使用-elasticsearch-时要注意什么" aria-hidden="true">#</a> 对于 GC 方面，在使用 Elasticsearch 时要注意什么？</h2><p>（1）倒排词典的索引需要常驻内存，无法 GC，需要监控 data node 上 segmentmemory 增长趋势。</p><p>（2）各类缓存，field cache, filter cache, indexing cache, bulk queue 等等，要设置合理的大小，并且要应该根据最坏的情况来看 heap 是否够用，也就是各类缓存全部占满的时候，还有 heap 空间可以分配给其他任务吗？避免采用 clear cache 等“自欺欺人”的方式来释放内存。</p><p>（3）避免返回大量结果集的搜索与聚合。确实需要大量拉取数据的场景，可以采用 scan &amp; scroll api 来实现。</p><p>（4）cluster stats 驻留内存并无法水平扩展，超大规模集群可以考虑分拆成多个集群通过 tribe node 连接。</p><p>（5）想知道 heap 够不够，必须结合实际应用场景，并对集群的 heap 使用情况做持续的监控。</p><p>（6）根据监控数据理解内存需求，合理配置各类 circuit breaker，将内存溢出风险降低到最低</p><h2 id="_18、elasticsearch-对于大数据量-上亿量级-的聚合如何实现" tabindex="-1"><a class="header-anchor" href="#_18、elasticsearch-对于大数据量-上亿量级-的聚合如何实现" aria-hidden="true">#</a> 18、Elasticsearch 对于大数据量（上亿量级）的聚合如何实现？</h2><p>Elasticsearch 提供的首个近似聚合是 cardinality 度量。它提供一个字段的基数，即该字段的 distinct 或者 unique 值的数目。它是基于 HLL 算法的。HLL 会先对我们的输入作哈希运算，然后根据哈希运算的结果中的 bits 做概率估算从而得到基数。其特点是：可配置的精度，用来控制内存的使用（更精确 ＝ 更多内存）；小的数据集精度是非常高的；我们可以通过配置参数，来设置去重需要的固定内存使用量。无论数千还是数十亿的唯一值，内存使用量只与你配置的精确度相关。</p><h2 id="_19、在并发情况下-elasticsearch-如果保证读写一致" tabindex="-1"><a class="header-anchor" href="#_19、在并发情况下-elasticsearch-如果保证读写一致" aria-hidden="true">#</a> 19、在并发情况下，Elasticsearch 如果保证读写一致？</h2><p>（1）可以通过版本号使用乐观并发控制，以确保新版本不会被旧版本覆盖，由应用层来处理具体的冲突；</p><p>（2）另外对于写操作，一致性级别支持 quorum/one/all，默认为 quorum，即只有当大多数分片可用时才允许写操作。但即使大多数可用，也可能存在因为网络等原因导致写入副本失败，这样该副本被认为故障，分片将会在一个不同的节点上重建。</p><p>（3）对于读操作，可以设置 replication 为 sync(默认)，这使得操作在主分片和副本分片都完成后才会返回；如果设置 replication 为 async 时，也可以通过设置搜索请求参数_preference 为 primary 来查询主分片，确保文档是最新版本。</p><h2 id="_20、如何监控-elasticsearch-集群状态" tabindex="-1"><a class="header-anchor" href="#_20、如何监控-elasticsearch-集群状态" aria-hidden="true">#</a> 20、如何监控 Elasticsearch 集群状态？</h2><p>Marvel 让你可以很简单的通过 Kibana 监控 Elasticsearch。你可以实时查看你的集群健康状态和性能，也可以分析过去的集群、索引和节点指标。</p><h2 id="_21、介绍下你们电商搜索的整体技术架构。" tabindex="-1"><a class="header-anchor" href="#_21、介绍下你们电商搜索的整体技术架构。" aria-hidden="true">#</a> 21、介绍下你们电商搜索的整体技术架构。</h2><figure><img src="https://pic1.zhimg.com/80/v2-5bdbe7ada0ddee9d8b2f03c0a379e0d4_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="介绍一下你们的个性化搜索方案" tabindex="-1"><a class="header-anchor" href="#介绍一下你们的个性化搜索方案" aria-hidden="true">#</a> 介绍一下你们的个性化搜索方案？</h2><p>基于 word2vec 和 Elasticsearch 实现个性化搜索</p><p>（1）基于 word2vec、Elasticsearch 和自定义的脚本插件，我们就实现了一个个性化的搜索服务，相对于原有的实现，新版的点击率和转化率都有大幅的提升；</p><p>（2）基于 word2vec 的商品向量还有一个可用之处，就是可以用来实现相似商品的推荐；</p><p>（3）使用 word2vec 来实现个性化搜索或个性化推荐是有一定局限性的，因为它只能处理用户点击历史这样的时序数据，而无法全面的去考虑用户偏好，这个还是有很大的改进和提升的空间；</p><h2 id="是否了解字典树" tabindex="-1"><a class="header-anchor" href="#是否了解字典树" aria-hidden="true">#</a> 是否了解字典树？</h2><p>常用字典数据结构如下所示：</p><figure><img src="https://pic2.zhimg.com/80/v2-8bb844c5b8fb944111fa8cecdb0e12d5_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Trie 的核心思想是空间换时间，利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。它有 3 个基本性质：</p><p>1）根节点不包含字符，除根节点外每一个节点都只包含一个字符。</p><p>2）从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串。</p><p>3）每个节点的所有子节点包含的字符都不相同。</p><figure><img src="https://pic4.zhimg.com/80/v2-26a48882a8f09a50dfeb79cc25045fcf_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（1）可以看到，trie 树每一层的节点数是 26^i 级别的。所以为了节省空间，我们还可以用动态链表，或者用数组来模拟动态。而空间的花费，不会超过单词数 × 单词长度。</p><p>（2）实现：对每个结点开一个字母集大小的数组，每个结点挂一个链表，使用左儿子右兄弟表示法记录这棵树；</p><p>（3）对于中文的字典树，每个节点的子节点用一个哈希表存储，这样就不用浪费太大的空间，而且查询速度上可以保留哈希的复杂度 O(1)。</p><h2 id="拼写纠错是如何实现的" tabindex="-1"><a class="header-anchor" href="#拼写纠错是如何实现的" aria-hidden="true">#</a> 拼写纠错是如何实现的？</h2><p>（1）拼写纠错是基于编辑距离来实现；编辑距离是一种标准的方法，它用来表示经过插入、删除和替换操作从一个字符串转换到另外一个字符串的最小操作步数；</p><p>（2）编辑距离的计算过程：比如要计算 batyu 和 beauty 的编辑距离，先创建一个 7×8 的表（batyu 长度为 5，coffee 长度为 6，各加 2），接着，在如下位置填入黑色数字。其他格的计算过程是取以下三个值的最小值：</p><p>如果最上方的字符等于最左方的字符，则为左上方的数字。否则为左上方的数字+1。（对于 3,3 来说为 0）</p><p>左方数字+1（对于 3,3 格来说为 2）</p><p>上方数字+1（对于 3,3 格来说为 2）</p><p>最终取右下角的值即为编辑距离的值 3。</p><figure><img src="https://pic4.zhimg.com/80/v2-66f01f0d578c83274e90a7ddf704b633_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>对于拼写纠错，我们考虑构造一个度量空间（Metric Space），该空间内任何关系满足以下三条基本条件：</p><p>d(x,y) = 0 -- 假如 x 与 y 的距离为 0，则 x=y</p><p>d(x,y) = d(y,x) -- x 到 y 的距离等同于 y 到 x 的距离</p><p>d(x,y) + d(y,z) &gt;= d(x,z) -- 三角不等式</p><p>（1）根据三角不等式，则满足与 query 距离在 n 范围内的另一个字符转 B，其与 A 的距离最大为 d+n，最小为 d-n。</p><p>（2）BK 树的构造就过程如下：每个节点有任意个子节点，每条边有个值表示编辑距离。所有子节点到父节点的边上标注 n 表示编辑距离恰好为 n。比如，我们有棵树父节点是”book”和两个子节点”cake”和”books”，”book”到”books”的边标号 1，”book”到”cake”的边上标号 4。从字典里构造好树后，无论何时你想插入新单词时，计算该单词与根节点的编辑距离，并且查找数值为 d(neweord, root)的边。递归得与各子节点进行比较，直到没有子节点，你就可以创建新的子节点并将新单词保存在那。比如，插入”boo”到刚才上述例子的树中，我们先检查根节点，查找 d(“book”, “boo”) = 1 的边，然后检查标号为 1 的边的子节点，得到单词”books”。我们再计算距离 d(“books”, “boo”)=2，则将新单词插在”books”之后，边标号为 2。</p><p>（3）查询相似词如下：计算单词与根节点的编辑距离 d，然后递归查找每个子节点标号为 d-n 到 d+n（包含）的边。假如被检查的节点与搜索单词的距离 d 小于 n，则返回该节点并继续查询。比如输入 cape 且最大容忍距离为 1，则先计算和根的编辑距离 d(“book”, “cape”)=4，然后接着找和根节点之间编辑距离为 3 到 5 的，这个就找到了 cake 这个节点，计算 d(“cake”, “cape”)=1，满足条件所以返回 cake，然后再找和 cake 节点编辑距离是 0 到 2 的，分别找到 cape 和 cart 节点，这样就得到 cape 这个满足条件的结果。</p><figure><img src="https://pic4.zhimg.com/80/v2-79f2a89041e546d9feccf55e4ff1c0d7_720w.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,215);function k(E,w){const c=s("ExternalLinkIcon");return t(),o("div",null,[p,e("figure",null,[e("a",n,[h,d(c)]),l]),g,e("figure",null,[e("a",f,[m,d(c)]),u]),b,e("figure",null,[e("a",x,[y,d(c)]),_]),v])}const z=r(i,[["render",k],["__file","index.html.vue"]]);export{z as default};
