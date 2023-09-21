const t=JSON.parse('{"key":"v-78ab03a6","path":"/15.%E5%88%86%E5%B8%83%E5%BC%8F/01.%E5%88%86%E5%B8%83%E5%BC%8F%E7%90%86%E8%AE%BA/12.Raft%E7%AE%97%E6%B3%95.html","title":"深入剖析共识性算法 Raft","lang":"zh-CN","frontmatter":{"title":"深入剖析共识性算法 Raft","date":"2020-02-01T22:07:00.000Z","order":12,"category":["分布式","分布式理论"],"tag":["分布式","理论","算法","共识性","Raft"],"description":"深入剖析共识性算法 Raft img Raft 简介 Raft 是一种为了管理日志复制的分布式共识性算法。从本质上说，Raft 算法是通过一切以领导者为准的方式，实现一系列值的共识和各节点日志的一致。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/15.%E5%88%86%E5%B8%83%E5%BC%8F/01.%E5%88%86%E5%B8%83%E5%BC%8F%E7%90%86%E8%AE%BA/12.Raft%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"深入剖析共识性算法 Raft"}],["meta",{"property":"og:description","content":"深入剖析共识性算法 Raft img Raft 简介 Raft 是一种为了管理日志复制的分布式共识性算法。从本质上说，Raft 算法是通过一切以领导者为准的方式，实现一系列值的共识和各节点日志的一致。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T14:54:54.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"理论"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"共识性"}],["meta",{"property":"article:tag","content":"Raft"}],["meta",{"property":"article:published_time","content":"2020-02-01T22:07:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T14:54:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入剖析共识性算法 Raft\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-01T22:07:00.000Z\\",\\"dateModified\\":\\"2023-09-21T14:54:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Raft 简介","slug":"raft-简介","link":"#raft-简介","children":[{"level":3,"title":"分布式共识性","slug":"分布式共识性","link":"#分布式共识性","children":[]},{"level":3,"title":"复制状态机","slug":"复制状态机","link":"#复制状态机","children":[]},{"level":3,"title":"RAFT 应用","slug":"raft-应用","link":"#raft-应用","children":[]}]},{"level":2,"title":"Raft 基础","slug":"raft-基础","link":"#raft-基础","children":[{"level":3,"title":"服务器角色","slug":"服务器角色","link":"#服务器角色","children":[]},{"level":3,"title":"任期","slug":"任期","link":"#任期","children":[]},{"level":3,"title":"RPC","slug":"rpc","link":"#rpc","children":[]}]},{"level":2,"title":"选举 Leader","slug":"选举-leader","link":"#选举-leader","children":[{"level":3,"title":"选举规则","slug":"选举规则","link":"#选举规则","children":[]},{"level":3,"title":"单 Candidate 选举","slug":"单-candidate-选举","link":"#单-candidate-选举","children":[]},{"level":3,"title":"多 Candidate 选举","slug":"多-candidate-选举","link":"#多-candidate-选举","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"日志复制","slug":"日志复制","link":"#日志复制","children":[{"level":3,"title":"日志格式","slug":"日志格式","link":"#日志格式","children":[]},{"level":3,"title":"日志复制流程","slug":"日志复制流程","link":"#日志复制流程","children":[]},{"level":3,"title":"日志一致性","slug":"日志一致性","link":"#日志一致性","children":[]}]},{"level":2,"title":"安全性","slug":"安全性","link":"#安全性","children":[{"level":3,"title":"选举限制","slug":"选举限制","link":"#选举限制","children":[]},{"level":3,"title":"提交旧任期的日志条目","slug":"提交旧任期的日志条目","link":"#提交旧任期的日志条目","children":[]}]},{"level":2,"title":"日志压缩","slug":"日志压缩","link":"#日志压缩","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695308094000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":20.49,"words":6147},"filePathRelative":"15.分布式/01.分布式理论/12.Raft算法.md","localizedDate":"2020年2月1日","excerpt":"<h1> 深入剖析共识性算法 Raft</h1>\\n<figure><img src=\\"https://raw.githubusercontent.com/dunwu/images/master/snap/20200201221202.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<h2> Raft 简介</h2>\\n<p><strong><a href=\\"https://ramcloud.atlassian.net/wiki/download/attachments/6586375/raft.pdf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Raft</a> 是一种为了管理日志复制的分布式共识性算法</strong>。从本质上说，<strong>Raft 算法是通过一切以领导者为准的方式，实现一系列值的共识和各节点日志的一致</strong>。</p>","autoDesc":true}');export{t as data};
