const e=JSON.parse('{"key":"v-c8f0b1d2","path":"/pages/d7cd88/","title":"数据结构与数据库索引","lang":"zh-CN","frontmatter":{"title":"数据结构与数据库索引","date":"2022-03-27T23:39:10.000Z","order":2,"permalink":"/pages/d7cd88/","category":["数据库","数据库综合"],"tag":["数据库","综合","数据结构","索引"],"description":"数据结构与数据库索引 关键词：链表、数组、散列表、红黑树、B+ 树、LSM 树、跳表 引言 数据库是“按照 数据结构 来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、可共享的、统一管理的大量数据的集合。 ——上面这句定义对数据库的定义来自百度百科。通过这个定义，我们也能明显看出数据结构是实现数据库的基石。 从本质来看，数据库只负责两件事：读数据、写数据；而数据结构研究的是如何合理组织数据，尽可能提升读、写数据的效率，这恰好是数据库的核心问题。因此，数据结构与数据库这两个领域有非常多的交集。其中，数据库索引最能体现二者的紧密关联。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/d7cd88/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"数据结构与数据库索引"}],["meta",{"property":"og:description","content":"数据结构与数据库索引 关键词：链表、数组、散列表、红黑树、B+ 树、LSM 树、跳表 引言 数据库是“按照 数据结构 来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、可共享的、统一管理的大量数据的集合。 ——上面这句定义对数据库的定义来自百度百科。通过这个定义，我们也能明显看出数据结构是实现数据库的基石。 从本质来看，数据库只负责两件事：读数据、写数据；而数据结构研究的是如何合理组织数据，尽可能提升读、写数据的效率，这恰好是数据库的核心问题。因此，数据结构与数据库这两个领域有非常多的交集。其中，数据库索引最能体现二者的紧密关联。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:46:25.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"综合"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:tag","content":"索引"}],["meta",{"property":"article:published_time","content":"2022-03-27T23:39:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:46:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据结构与数据库索引\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-27T23:39:10.000Z\\",\\"dateModified\\":\\"2024-05-15T22:46:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"数组和链表","slug":"数组和链表","link":"#数组和链表","children":[]},{"level":2,"title":"哈希索引","slug":"哈希索引","link":"#哈希索引","children":[]},{"level":2,"title":"B-Tree 索引","slug":"b-tree-索引","link":"#b-tree-索引","children":[{"level":3,"title":"二叉搜索树","slug":"二叉搜索树","link":"#二叉搜索树","children":[]},{"level":3,"title":"B+Tree 索引","slug":"b-tree-索引-1","link":"#b-tree-索引-1","children":[]}]},{"level":2,"title":"LSM 树","slug":"lsm-树","link":"#lsm-树","children":[]},{"level":2,"title":"倒排索引","slug":"倒排索引","link":"#倒排索引","children":[]},{"level":2,"title":"索引的维护","slug":"索引的维护","link":"#索引的维护","children":[{"level":3,"title":"创建索引","slug":"创建索引","link":"#创建索引","children":[]},{"level":3,"title":"更新索引","slug":"更新索引","link":"#更新索引","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1715813185000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":6}]},"readingTime":{"minutes":19.94,"words":5983},"filePathRelative":"12.数据库/01.数据库综合/02.数据结构与数据库索引.md","localizedDate":"2022年3月27日","excerpt":"<h1> 数据结构与数据库索引</h1>\\n<blockquote>\\n<p>关键词：链表、数组、散列表、红黑树、B+ 树、LSM 树、跳表</p>\\n</blockquote>\\n<h2> 引言</h2>\\n<p><strong>数据库</strong>是“按照 <strong>数据结构</strong> 来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、可共享的、统一管理的大量数据的集合。</p>\\n<p>——上面这句定义对数据库的定义来自百度百科。通过这个定义，我们也能明显看出数据结构是实现数据库的基石。</p>\\n<p>从本质来看，数据库只负责两件事：读数据、写数据；而数据结构研究的是如何合理组织数据，尽可能提升读、写数据的效率，这恰好是数据库的核心问题。因此，数据结构与数据库这两个领域有非常多的交集。其中，数据库索引最能体现二者的紧密关联。</p>","autoDesc":true}');export{e as data};
