const e=JSON.parse('{"key":"v-4cfecd6b","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/05.Mysql%E9%94%81.html","title":"Mysql 锁","lang":"zh-CN","frontmatter":{"icon":"logos:mysql","title":"Mysql 锁","cover":"https://raw.githubusercontent.com/dunwu/images/master/snap/202310162345947.png","date":"2020-09-07T07:54:19.000Z","order":5,"category":["数据库","关系型数据库","Mysql"],"tag":["数据库","关系型数据库","Mysql","锁","读写锁","悲观锁","乐观锁"],"description":"Mysql 锁 不同存储引擎对于锁的支持粒度是不同的，由于 InnoDB 是 Mysql 的默认存储引擎，所以本文以 InnoDB 对于锁的支持进行阐述。 锁的分类","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/03.%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/02.Mysql/05.Mysql%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Mysql 锁"}],["meta",{"property":"og:description","content":"Mysql 锁 不同存储引擎对于锁的支持粒度是不同的，由于 InnoDB 是 Mysql 的默认存储引擎，所以本文以 InnoDB 对于锁的支持进行阐述。 锁的分类"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dunwu/images/master/snap/202310162345947.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-25T23:24:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Mysql 锁"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:tag","content":"锁"}],["meta",{"property":"article:tag","content":"读写锁"}],["meta",{"property":"article:tag","content":"悲观锁"}],["meta",{"property":"article:tag","content":"乐观锁"}],["meta",{"property":"article:published_time","content":"2020-09-07T07:54:19.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T23:24:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 锁\\",\\"image\\":[\\"https://raw.githubusercontent.com/dunwu/images/master/snap/202310162345947.png\\"],\\"datePublished\\":\\"2020-09-07T07:54:19.000Z\\",\\"dateModified\\":\\"2023-10-25T23:24:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"锁的分类","slug":"锁的分类","link":"#锁的分类","children":[{"level":3,"title":"独享锁和共享锁","slug":"独享锁和共享锁","link":"#独享锁和共享锁","children":[]},{"level":3,"title":"悲观锁和乐观锁","slug":"悲观锁和乐观锁","link":"#悲观锁和乐观锁","children":[]},{"level":3,"title":"全局锁、表级锁、行级锁","slug":"全局锁、表级锁、行级锁","link":"#全局锁、表级锁、行级锁","children":[]}]},{"level":2,"title":"全局锁","slug":"全局锁","link":"#全局锁","children":[]},{"level":2,"title":"表级锁","slug":"表级锁","link":"#表级锁","children":[{"level":3,"title":"表锁","slug":"表锁","link":"#表锁","children":[]},{"level":3,"title":"元数据锁（MDL）","slug":"元数据锁-mdl","link":"#元数据锁-mdl","children":[]},{"level":3,"title":"意向锁（Intention Lock）","slug":"意向锁-intention-lock","link":"#意向锁-intention-lock","children":[]},{"level":3,"title":"自增锁（AUTO-INC）","slug":"自增锁-auto-inc","link":"#自增锁-auto-inc","children":[]}]},{"level":2,"title":"行锁","slug":"行锁","link":"#行锁","children":[{"level":3,"title":"记录锁（Record Lock）","slug":"记录锁-record-lock","link":"#记录锁-record-lock","children":[]},{"level":3,"title":"间隙锁（Gap Lock）","slug":"间隙锁-gap-lock","link":"#间隙锁-gap-lock","children":[]},{"level":3,"title":"临键锁（Next-Key Lock）","slug":"临键锁-next-key-lock","link":"#临键锁-next-key-lock","children":[]},{"level":3,"title":"插入意向锁","slug":"插入意向锁","link":"#插入意向锁","children":[]}]},{"level":2,"title":"死锁","slug":"死锁","link":"#死锁","children":[{"level":3,"title":"死锁的原因","slug":"死锁的原因","link":"#死锁的原因","children":[]},{"level":3,"title":"避免死锁","slug":"避免死锁","link":"#避免死锁","children":[]},{"level":3,"title":"解决死锁","slug":"解决死锁","link":"#解决死锁","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1695308094000,"updatedTime":1698276292000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":6}]},"readingTime":{"minutes":26.96,"words":8089},"filePathRelative":"12.数据库/03.关系型数据库/02.Mysql/05.Mysql锁.md","localizedDate":"2020年9月7日","excerpt":"<h1> Mysql 锁</h1>\\n<blockquote>\\n<p>不同存储引擎对于锁的支持粒度是不同的，由于 InnoDB 是 Mysql 的默认存储引擎，所以本文以 InnoDB 对于锁的支持进行阐述。</p>\\n</blockquote>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/202310162345947.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2> 锁的分类</h2>","autoDesc":true}');export{e as data};
