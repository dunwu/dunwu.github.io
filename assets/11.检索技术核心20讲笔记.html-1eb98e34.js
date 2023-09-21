const l=JSON.parse('{"key":"v-0cdae17a","path":"/99.%E7%AC%94%E8%AE%B0/12.%E6%95%B0%E6%8D%AE%E5%BA%93/11.%E6%A3%80%E7%B4%A2%E6%8A%80%E6%9C%AF%E6%A0%B8%E5%BF%8320%E8%AE%B2%E7%AC%94%E8%AE%B0.html","title":"《检索技术核心 20 讲》笔记","lang":"zh-CN","frontmatter":{"title":"《检索技术核心 20 讲》笔记","date":"2022-03-04T20:03:00.000Z","order":11,"category":["笔记","数据库"],"tag":["架构"],"description":"《检索技术核心 20 讲》笔记 伸缩性架构是指不需要改变系统的软硬件设计，仅通过改变部署服务器数量就可以扩大或缩小系统的服务处理能力。 线性结构检索 检索的核心思想：合理组织数据，尽可能快速减少查询范围，可以提升检索效率。 数组和链表的比较 存储方式 数组用 连续 的内存空间来存储数据。 链表用 不连续 的内存空间来存储数据；并通过一个指针按顺序将这些空间串起来，形成一条链。 访问方式 数组支持随机访问。根据下标随机访问的时间复杂度为 O(1) 链表不支持随机访问，只能顺序访问。 空间大小 数组空间大小固定，扩容只能采用复制数组的方式。 链表空间大小不固定，扩容灵活。 效率比较 数组的 查找 效率高于链表。 链表的 添加、删除 效率高于数组。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/99.%E7%AC%94%E8%AE%B0/12.%E6%95%B0%E6%8D%AE%E5%BA%93/11.%E6%A3%80%E7%B4%A2%E6%8A%80%E6%9C%AF%E6%A0%B8%E5%BF%8320%E8%AE%B2%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《检索技术核心 20 讲》笔记"}],["meta",{"property":"og:description","content":"《检索技术核心 20 讲》笔记 伸缩性架构是指不需要改变系统的软硬件设计，仅通过改变部署服务器数量就可以扩大或缩小系统的服务处理能力。 线性结构检索 检索的核心思想：合理组织数据，尽可能快速减少查询范围，可以提升检索效率。 数组和链表的比较 存储方式 数组用 连续 的内存空间来存储数据。 链表用 不连续 的内存空间来存储数据；并通过一个指针按顺序将这些空间串起来，形成一条链。 访问方式 数组支持随机访问。根据下标随机访问的时间复杂度为 O(1) 链表不支持随机访问，只能顺序访问。 空间大小 数组空间大小固定，扩容只能采用复制数组的方式。 链表空间大小不固定，扩容灵活。 效率比较 数组的 查找 效率高于链表。 链表的 添加、删除 效率高于数组。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"架构"}],["meta",{"property":"article:published_time","content":"2022-03-04T20:03:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《检索技术核心 20 讲》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-04T20:03:00.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"线性结构检索","slug":"线性结构检索","link":"#线性结构检索","children":[]},{"level":2,"title":"非线性结构检索","slug":"非线性结构检索","link":"#非线性结构检索","children":[]},{"level":2,"title":"哈希检索","slug":"哈希检索","link":"#哈希检索","children":[]},{"level":2,"title":"状态检索","slug":"状态检索","link":"#状态检索","children":[]},{"level":2,"title":"倒排索引","slug":"倒排索引","link":"#倒排索引","children":[]},{"level":2,"title":"B+ 树检索","slug":"b-树检索","link":"#b-树检索","children":[]},{"level":2,"title":"LSM 树检索","slug":"lsm-树检索","link":"#lsm-树检索","children":[]},{"level":2,"title":"索引构建","slug":"索引构建","link":"#索引构建","children":[]},{"level":2,"title":"索引更新","slug":"索引更新","link":"#索引更新","children":[{"level":3,"title":"Double Buffer（双缓冲）机制","slug":"double-buffer-双缓冲-机制","link":"#double-buffer-双缓冲-机制","children":[]},{"level":3,"title":"全量索引和增量索引","slug":"全量索引和增量索引","link":"#全量索引和增量索引","children":[]},{"level":3,"title":"如何处理增量索引空间的持续增长","slug":"如何处理增量索引空间的持续增长","link":"#如何处理增量索引空间的持续增长","children":[]}]},{"level":2,"title":"索引拆分","slug":"索引拆分","link":"#索引拆分","children":[]},{"level":2,"title":"TOP K 检索","slug":"top-k-检索","link":"#top-k-检索","children":[{"level":3,"title":"TF-IDF 算法","slug":"tf-idf-算法","link":"#tf-idf-算法","children":[]},{"level":3,"title":"BM25 算法","slug":"bm25-算法","link":"#bm25-算法","children":[]},{"level":3,"title":"机器学习打分","slug":"机器学习打分","link":"#机器学习打分","children":[]},{"level":3,"title":"根据打分结果快速 TOP K 检索","slug":"根据打分结果快速-top-k-检索","link":"#根据打分结果快速-top-k-检索","children":[]}]},{"level":2,"title":"非精准 TOP K 检索","slug":"非精准-top-k-检索","link":"#非精准-top-k-检索","children":[]},{"level":2,"title":"空间检索","slug":"空间检索","link":"#空间检索","children":[]},{"level":2,"title":"最近邻检索","slug":"最近邻检索","link":"#最近邻检索","children":[]},{"level":2,"title":"存储系统","slug":"存储系统","link":"#存储系统","children":[{"level":3,"title":"数据在内存中如何高效检索？","slug":"数据在内存中如何高效检索","link":"#数据在内存中如何高效检索","children":[]},{"level":3,"title":"数据是如何高效地从内存转移到磁盘的？","slug":"数据是如何高效地从内存转移到磁盘的","link":"#数据是如何高效地从内存转移到磁盘的","children":[]},{"level":3,"title":"数据如何合并","slug":"数据如何合并","link":"#数据如何合并","children":[]},{"level":3,"title":"数据如何检索","slug":"数据如何检索","link":"#数据如何检索","children":[]}]},{"level":2,"title":"搜索系统","slug":"搜索系统","link":"#搜索系统","children":[]},{"level":2,"title":"广告系统","slug":"广告系统","link":"#广告系统","children":[]},{"level":2,"title":"推荐引擎","slug":"推荐引擎","link":"#推荐引擎","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":22.9,"words":6871},"filePathRelative":"99.笔记/12.数据库/11.检索技术核心20讲笔记.md","localizedDate":"2022年3月4日","excerpt":"<h1> 《检索技术核心 20 讲》笔记</h1>\\n<blockquote>\\n<p>伸缩性架构是指不需要改变系统的软硬件设计，仅通过改变部署服务器数量就可以扩大或缩小系统的服务处理能力。</p>\\n</blockquote>\\n<h2> 线性结构检索</h2>\\n<p>检索的核心思想：合理组织数据，尽可能快速减少查询范围，可以提升检索效率。</p>\\n<p><strong><em>数组和链表的比较</em></strong></p>\\n<ul>\\n<li><strong>存储方式</strong>\\n<ul>\\n<li>数组用 <strong>连续</strong> 的内存空间来存储数据。</li>\\n<li>链表用 <strong>不连续</strong> 的内存空间来存储数据；并通过一个指针按顺序将这些空间串起来，形成一条链。</li>\\n</ul>\\n</li>\\n<li><strong>访问方式</strong>\\n<ul>\\n<li>数组<strong>支持随机访问</strong>。根据下标随机访问的时间复杂度为 <code>O(1)</code></li>\\n<li>链表<strong>不支持随机访问</strong>，只能顺序访问。</li>\\n</ul>\\n</li>\\n<li><strong>空间大小</strong>\\n<ul>\\n<li>数组空间<strong>大小固定</strong>，扩容只能采用复制数组的方式。</li>\\n<li>链表空间<strong>大小不固定</strong>，扩容灵活。</li>\\n</ul>\\n</li>\\n<li><strong>效率比较</strong>\\n<ul>\\n<li>数组的 <strong>查找</strong> 效率高于链表。</li>\\n<li>链表的 <strong>添加</strong>、<strong>删除</strong> 效率高于数组。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};
