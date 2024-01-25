const e=JSON.parse('{"key":"v-4d78d8d6","path":"/01.Java/01.JavaSE/03.%E5%AE%B9%E5%99%A8/04.Java%E5%AE%B9%E5%99%A8%E4%B9%8BSet.html","title":"Java 容器之 Set","lang":"zh-CN","frontmatter":{"title":"Java 容器之 Set","date":"2019-12-29T21:49:58.000Z","order":4,"category":["Java","JavaSE","容器"],"tag":["Java","JavaSE","容器"],"description":"Java 容器之 Set Set 简介 Set 家族成员简介： Set 继承了 Collection 的接口。实际上 Set 就是 Collection，只是行为略有不同：Set 集合不允许有重复元素。 SortedSet 继承了 Set 的接口。SortedSet 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。 NavigableSet 继承了 SortedSet 的接口。它提供了丰富的查找方法：如\\"获取大于/等于某值的元素\\"、“获取小于/等于某值的元素”等等。 AbstractSet 是一个抽象类，它继承于 AbstractCollection，AbstractCollection 实现了 Set 中的绝大部分方法，为实现 Set 的实例类提供了便利。 HashSet 类依赖于 HashMap，它实际上是通过 HashMap 实现的。HashSet 中的元素是无序的、散列的。 TreeSet 类依赖于 TreeMap，它实际上是通过 TreeMap 实现的。TreeSet 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。 LinkedHashSet 是按插入顺序排序的 Set。 EnumSet 是只能存放 Emum 枚举类型的 Set。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/03.%E5%AE%B9%E5%99%A8/04.Java%E5%AE%B9%E5%99%A8%E4%B9%8BSet.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Java 容器之 Set"}],["meta",{"property":"og:description","content":"Java 容器之 Set Set 简介 Set 家族成员简介： Set 继承了 Collection 的接口。实际上 Set 就是 Collection，只是行为略有不同：Set 集合不允许有重复元素。 SortedSet 继承了 Set 的接口。SortedSet 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。 NavigableSet 继承了 SortedSet 的接口。它提供了丰富的查找方法：如\\"获取大于/等于某值的元素\\"、“获取小于/等于某值的元素”等等。 AbstractSet 是一个抽象类，它继承于 AbstractCollection，AbstractCollection 实现了 Set 中的绝大部分方法，为实现 Set 的实例类提供了便利。 HashSet 类依赖于 HashMap，它实际上是通过 HashMap 实现的。HashSet 中的元素是无序的、散列的。 TreeSet 类依赖于 TreeMap，它实际上是通过 TreeMap 实现的。TreeSet 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。 LinkedHashSet 是按插入顺序排序的 Set。 EnumSet 是只能存放 Emum 枚举类型的 Set。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T23:58:37.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"容器"}],["meta",{"property":"article:published_time","content":"2019-12-29T21:49:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T23:58:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 容器之 Set\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-29T21:49:58.000Z\\",\\"dateModified\\":\\"2024-01-24T23:58:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Set 简介","slug":"set-简介","link":"#set-简介","children":[{"level":3,"title":"Set 接口","slug":"set-接口","link":"#set-接口","children":[]},{"level":3,"title":"SortedSet 接口","slug":"sortedset-接口","link":"#sortedset-接口","children":[]},{"level":3,"title":"NavigableSet 接口","slug":"navigableset-接口","link":"#navigableset-接口","children":[]},{"level":3,"title":"AbstractSet 抽象类","slug":"abstractset-抽象类","link":"#abstractset-抽象类","children":[]}]},{"level":2,"title":"HashSet 类","slug":"hashset-类","link":"#hashset-类","children":[{"level":3,"title":"HashSet 要点","slug":"hashset-要点","link":"#hashset-要点","children":[]},{"level":3,"title":"HashSet 原理","slug":"hashset-原理","link":"#hashset-原理","children":[]}]},{"level":2,"title":"TreeSet 类","slug":"treeset-类","link":"#treeset-类","children":[{"level":3,"title":"TreeSet 要点","slug":"treeset-要点","link":"#treeset-要点","children":[]},{"level":3,"title":"TreeSet 源码","slug":"treeset-源码","link":"#treeset-源码","children":[]}]},{"level":2,"title":"LinkedHashSet 类","slug":"linkedhashset-类","link":"#linkedhashset-类","children":[{"level":3,"title":"LinkedHashSet 要点","slug":"linkedhashset-要点","link":"#linkedhashset-要点","children":[]},{"level":3,"title":"LinkedHashSet 原理","slug":"linkedhashset-原理","link":"#linkedhashset-原理","children":[]}]},{"level":2,"title":"EnumSet 类","slug":"enumset-类","link":"#enumset-类","children":[{"level":3,"title":"EnumSet 要点","slug":"enumset-要点","link":"#enumset-要点","children":[]}]},{"level":2,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1706140717000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":3}]},"readingTime":{"minutes":5.85,"words":1756},"filePathRelative":"01.Java/01.JavaSE/03.容器/04.Java容器之Set.md","localizedDate":"2019年12月29日","excerpt":"<h1> Java 容器之 Set</h1>\\n<h2> Set 简介</h2>\\n<div align=\\"center\\">\\n<img src=\\"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/container/Set-diagrams.png\\" width=\\"400\\">\\n</div>\\n<p>Set 家族成员简介：</p>\\n<ul>\\n<li><code>Set</code> 继承了 <code>Collection</code> 的接口。实际上 <code>Set</code> 就是 <code>Collection</code>，只是行为略有不同：<code>Set</code> 集合不允许有重复元素。</li>\\n<li><code>SortedSet</code> 继承了 <code>Set</code> 的接口。<code>SortedSet</code> 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。</li>\\n<li><code>NavigableSet</code> 继承了 <code>SortedSet</code> 的接口。它提供了丰富的查找方法：如\\"获取大于/等于某值的元素\\"、“获取小于/等于某值的元素”等等。</li>\\n<li><code>AbstractSet</code> 是一个抽象类，它继承于 <code>AbstractCollection</code>，<code>AbstractCollection</code> 实现了 Set 中的绝大部分方法，为实现 <code>Set</code> 的实例类提供了便利。</li>\\n<li><code>HashSet</code> 类依赖于 <code>HashMap</code>，它实际上是通过 <code>HashMap</code> 实现的。<code>HashSet</code> 中的元素是无序的、散列的。</li>\\n<li><code>TreeSet</code> 类依赖于 <code>TreeMap</code>，它实际上是通过 <code>TreeMap</code> 实现的。<code>TreeSet</code> 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。</li>\\n<li><code>LinkedHashSet</code> 是按插入顺序排序的 Set。</li>\\n<li><code>EnumSet</code> 是只能存放 Emum 枚举类型的 Set。</li>\\n</ul>","autoDesc":true}');export{e as data};
