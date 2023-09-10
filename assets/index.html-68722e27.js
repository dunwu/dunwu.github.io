const e=JSON.parse('{"key":"v-702bb860","path":"/pages/e2e047/","title":"Java锁","lang":"zh-CN","frontmatter":{"title":"Java锁","date":"2019-12-26T23:11:52.000Z","category":["Java","JavaSE","并发"],"tag":["Java","JavaSE","并发","锁"],"permalink":"/pages/e2e047/","description":"深入理解 Java 并发锁 本文先阐述 Java 中各种锁的概念。 然后，介绍锁的核心实现 AQS。 然后，重点介绍 Lock 和 Condition 两个接口及其实现。并发编程有两个核心问题：同步和互斥。 互斥，即同一时刻只允许一个线程访问共享资源； 同步，即线程之间如何通信、协作。 这两大问题，管程（sychronized）都是能够解决的。J.U.C 包还提供了 Lock 和 Condition 两个接口来实现管程，其中 Lock 用于解决互斥问题，Condition 用于解决同步问题。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/e2e047/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Java锁"}],["meta",{"property":"og:description","content":"深入理解 Java 并发锁 本文先阐述 Java 中各种锁的概念。 然后，介绍锁的核心实现 AQS。 然后，重点介绍 Lock 和 Condition 两个接口及其实现。并发编程有两个核心问题：同步和互斥。 互斥，即同一时刻只允许一个线程访问共享资源； 同步，即线程之间如何通信、协作。 这两大问题，管程（sychronized）都是能够解决的。J.U.C 包还提供了 Lock 和 Condition 两个接口来实现管程，其中 Lock 用于解决互斥问题，Condition 用于解决同步问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"并发"}],["meta",{"property":"article:tag","content":"锁"}],["meta",{"property":"article:published_time","content":"2019-12-26T23:11:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java锁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-26T23:11:52.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"并发锁简介","slug":"并发锁简介","link":"#并发锁简介","children":[{"level":3,"title":"可重入锁","slug":"可重入锁","link":"#可重入锁","children":[]},{"level":3,"title":"公平锁与非公平锁","slug":"公平锁与非公平锁","link":"#公平锁与非公平锁","children":[]},{"level":3,"title":"独享锁与共享锁","slug":"独享锁与共享锁","link":"#独享锁与共享锁","children":[]},{"level":3,"title":"悲观锁与乐观锁","slug":"悲观锁与乐观锁","link":"#悲观锁与乐观锁","children":[]},{"level":3,"title":"偏向锁、轻量级锁、重量级锁","slug":"偏向锁、轻量级锁、重量级锁","link":"#偏向锁、轻量级锁、重量级锁","children":[]},{"level":3,"title":"分段锁","slug":"分段锁","link":"#分段锁","children":[]},{"level":3,"title":"显示锁和内置锁","slug":"显示锁和内置锁","link":"#显示锁和内置锁","children":[]}]},{"level":2,"title":"Lock 和 Condition","slug":"lock-和-condition","link":"#lock-和-condition","children":[{"level":3,"title":"为何引入 Lock 和 Condition","slug":"为何引入-lock-和-condition","link":"#为何引入-lock-和-condition","children":[]},{"level":3,"title":"Lock 接口","slug":"lock-接口","link":"#lock-接口","children":[]},{"level":3,"title":"Condition","slug":"condition","link":"#condition","children":[]}]},{"level":2,"title":"ReentrantLock","slug":"reentrantlock","link":"#reentrantlock","children":[{"level":3,"title":"ReentrantLock 的特性","slug":"reentrantlock-的特性","link":"#reentrantlock-的特性","children":[]},{"level":3,"title":"ReentrantLock 的用法","slug":"reentrantlock-的用法","link":"#reentrantlock-的用法","children":[]},{"level":3,"title":"ReentrantLock 的原理","slug":"reentrantlock-的原理","link":"#reentrantlock-的原理","children":[]}]},{"level":2,"title":"ReentrantReadWriteLock","slug":"reentrantreadwritelock","link":"#reentrantreadwritelock","children":[{"level":3,"title":"ReentrantReadWriteLock 的特性","slug":"reentrantreadwritelock-的特性","link":"#reentrantreadwritelock-的特性","children":[]},{"level":3,"title":"ReentrantReadWriteLock 的用法","slug":"reentrantreadwritelock-的用法","link":"#reentrantreadwritelock-的用法","children":[]},{"level":3,"title":"ReentrantReadWriteLock 的原理","slug":"reentrantreadwritelock-的原理","link":"#reentrantreadwritelock-的原理","children":[]}]},{"level":2,"title":"StampedLock","slug":"stampedlock","link":"#stampedlock","children":[]},{"level":2,"title":"AQS","slug":"aqs","link":"#aqs","children":[{"level":3,"title":"AQS 的要点","slug":"aqs-的要点","link":"#aqs-的要点","children":[]},{"level":3,"title":"AQS 的应用","slug":"aqs-的应用","link":"#aqs-的应用","children":[]},{"level":3,"title":"AQS 的原理","slug":"aqs-的原理","link":"#aqs-的原理","children":[]}]},{"level":2,"title":"死锁","slug":"死锁","link":"#死锁","children":[{"level":3,"title":"什么是死锁","slug":"什么是死锁","link":"#什么是死锁","children":[]},{"level":3,"title":"如何定位死锁","slug":"如何定位死锁","link":"#如何定位死锁","children":[]},{"level":3,"title":"如何避免死锁","slug":"如何避免死锁","link":"#如何避免死锁","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":37.22,"words":11165},"filePathRelative":"01.Java/01.JavaSE/05.并发/04.Java锁.md","localizedDate":"2019年12月26日","excerpt":"<h1> 深入理解 Java 并发锁</h1>\\n<blockquote>\\n<p>本文先阐述 Java 中各种锁的概念。</p>\\n<p>然后，介绍锁的核心实现 AQS。</p>\\n<p>然后，重点介绍 Lock 和 Condition 两个接口及其实现。并发编程有两个核心问题：同步和互斥。</p>\\n<p><strong>互斥</strong>，即同一时刻只允许一个线程访问共享资源；</p>\\n<p><strong>同步</strong>，即线程之间如何通信、协作。</p>\\n<p>这两大问题，管程（<code>sychronized</code>）都是能够解决的。<strong>J.U.C 包还提供了 Lock 和 Condition 两个接口来实现管程，其中 Lock 用于解决互斥问题，Condition 用于解决同步问题</strong>。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
