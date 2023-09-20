const e=JSON.parse('{"key":"v-8645424e","path":"/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/01.%E5%88%86%E5%B8%83%E5%BC%8F%E7%90%86%E8%AE%BA/01.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%AE%97%E6%B3%95%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0.html","title":"《分布式协议与算法实战》笔记","lang":"zh-CN","frontmatter":{"title":"《分布式协议与算法实战》笔记","date":"2022-06-27T11:49:01.000Z","order":1,"category":["笔记","分布式","分布式理论"],"tag":["分布式","理论"],"description":"《分布式协议与算法实战》笔记 拜占庭将军问题 拜占庭将军问题是由莱斯利·兰波特在其同名论文中提出的分布式对等网络通信容错问题。其实是借拜占庭将军的例子，抛出了分布式共识性问题，并探讨和论证了解决的方法。 在分布式计算中，不同的节点通过通讯交换信息达成共识而按照同一套协作策略行动。但有时候，系统中的节点可能出错而发送错误的信息，用于传递信息的通讯网络也可能导致信息损坏，使得网络中不同的成员关于全体协作的策略得出不同结论，从而破坏系统一致性。拜占庭将军问题被认为是容错性问题中最难的问题类型之一。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/99.%E7%AC%94%E8%AE%B0/15.%E5%88%86%E5%B8%83%E5%BC%8F/01.%E5%88%86%E5%B8%83%E5%BC%8F%E7%90%86%E8%AE%BA/01.%E5%88%86%E5%B8%83%E5%BC%8F%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%AE%97%E6%B3%95%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"《分布式协议与算法实战》笔记"}],["meta",{"property":"og:description","content":"《分布式协议与算法实战》笔记 拜占庭将军问题 拜占庭将军问题是由莱斯利·兰波特在其同名论文中提出的分布式对等网络通信容错问题。其实是借拜占庭将军的例子，抛出了分布式共识性问题，并探讨和论证了解决的方法。 在分布式计算中，不同的节点通过通讯交换信息达成共识而按照同一套协作策略行动。但有时候，系统中的节点可能出错而发送错误的信息，用于传递信息的通讯网络也可能导致信息损坏，使得网络中不同的成员关于全体协作的策略得出不同结论，从而破坏系统一致性。拜占庭将军问题被认为是容错性问题中最难的问题类型之一。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-20T00:08:32.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"理论"}],["meta",{"property":"article:published_time","content":"2022-06-27T11:49:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-20T00:08:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《分布式协议与算法实战》笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-27T11:49:01.000Z\\",\\"dateModified\\":\\"2023-09-20T00:08:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"拜占庭将军问题","slug":"拜占庭将军问题","link":"#拜占庭将军问题","children":[{"level":3,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]}]},{"level":2,"title":"CAP 理论","slug":"cap-理论","link":"#cap-理论","children":[]},{"level":2,"title":"ACID 理论","slug":"acid-理论","link":"#acid-理论","children":[]},{"level":2,"title":"BASE 理论","slug":"base-理论","link":"#base-理论","children":[]},{"level":2,"title":"Paxos 算法","slug":"paxos-算法","link":"#paxos-算法","children":[{"level":3,"title":"Basic Paxos 算法","slug":"basic-paxos-算法","link":"#basic-paxos-算法","children":[]},{"level":3,"title":"Multi Paxos 思想","slug":"multi-paxos-思想","link":"#multi-paxos-思想","children":[]}]},{"level":2,"title":"Raft 算法","slug":"raft-算法","link":"#raft-算法","children":[{"level":3,"title":"Raft 基础","slug":"raft-基础","link":"#raft-基础","children":[]},{"level":3,"title":"选举 Leader","slug":"选举-leader","link":"#选举-leader","children":[]},{"level":3,"title":"日志复制","slug":"日志复制","link":"#日志复制","children":[]},{"level":3,"title":"安全性","slug":"安全性","link":"#安全性","children":[]},{"level":3,"title":"日志压缩","slug":"日志压缩","link":"#日志压缩","children":[]}]},{"level":2,"title":"一致性哈希算法","slug":"一致性哈希算法","link":"#一致性哈希算法","children":[]},{"level":2,"title":"Gossip 协议","slug":"gossip-协议","link":"#gossip-协议","children":[{"level":3,"title":"Gossip 的执行过程","slug":"gossip-的执行过程","link":"#gossip-的执行过程","children":[]},{"level":3,"title":"Gossip 类型","slug":"gossip-类型","link":"#gossip-类型","children":[]},{"level":3,"title":"Gossip 的优点","slug":"gossip-的优点","link":"#gossip-的优点","children":[]},{"level":3,"title":"Gossip 的缺陷","slug":"gossip-的缺陷","link":"#gossip-的缺陷","children":[]}]},{"level":2,"title":"QuorumNWR 算法","slug":"quorumnwr-算法","link":"#quorumnwr-算法","children":[{"level":3,"title":"Quorum NWR 的三要素","slug":"quorum-nwr-的三要素","link":"#quorum-nwr-的三要素","children":[]}]},{"level":2,"title":"PBFT 算法","slug":"pbft-算法","link":"#pbft-算法","children":[]},{"level":2,"title":"PoW 算法","slug":"pow-算法","link":"#pow-算法","children":[]},{"level":2,"title":"ZAB 协议","slug":"zab-协议","link":"#zab-协议","children":[{"level":3,"title":"选举 Leader","slug":"选举-leader-1","link":"#选举-leader-1","children":[]},{"level":3,"title":"原子广播（Atomic Broadcast）","slug":"原子广播-atomic-broadcast","link":"#原子广播-atomic-broadcast","children":[]}]},{"level":2,"title":"InfluxDB 企业版一致性实现剖析","slug":"influxdb-企业版一致性实现剖析","link":"#influxdb-企业版一致性实现剖析","children":[]},{"level":2,"title":"Hashicorp Raft","slug":"hashicorp-raft","link":"#hashicorp-raft","children":[]},{"level":2,"title":"基于 Raft 的分布式 KV 系统开发实战","slug":"基于-raft-的分布式-kv-系统开发实战","link":"#基于-raft-的分布式-kv-系统开发实战","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1695168512000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":2}]},"readingTime":{"minutes":39.57,"words":11870},"filePathRelative":"99.笔记/15.分布式/01.分布式理论/01.分布式协议与算法实战笔记.md","localizedDate":"2022年6月27日","excerpt":"<h1> 《分布式协议与算法实战》笔记</h1>\\n<h2> 拜占庭将军问题</h2>\\n<blockquote>\\n<p>拜占庭将军问题是由<a href=\\"https://zh.wikipedia.org/wiki/%E8%8E%B1%E6%96%AF%E5%88%A9%C2%B7%E5%85%B0%E6%B3%A2%E7%89%B9\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">莱斯利·兰波特</a>在其同名论文中提出的<a href=\\"https://zh.wikipedia.org/wiki/%E5%AF%B9%E7%AD%89%E7%BD%91%E7%BB%9C\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">分布式对等网络</a>通信容错问题。其实是借拜占庭将军的例子，抛出了分布式共识性问题，并探讨和论证了解决的方法。</p>\\n<p>在<a href=\\"https://zh.wikipedia.org/wiki/%E5%88%86%E5%B8%83%E5%BC%8F%E8%A8%88%E7%AE%97\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">分布式计算</a>中，不同的节点通过通讯交换信息达成共识而按照同一套协作策略行动。但有时候，系统中的节点可能出错而发送错误的信息，用于传递信息的通讯网络也可能导致信息损坏，使得网络中不同的成员关于全体协作的策略得出不同结论，从而破坏系统一致性。拜占庭将军问题被认为是容错性问题中最难的问题类型之一。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
