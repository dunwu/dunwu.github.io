const t=JSON.parse('{"key":"v-268388d2","path":"/01.Java/01.JavaSE/06.JVM/11.JVM%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html","title":"JVM 命令行工具","lang":"zh-CN","frontmatter":{"title":"JVM 命令行工具","date":"2020-07-30T17:56:33.000Z","order":11,"category":["Java","JavaSE","JVM"],"tag":["Java","JavaSE","JVM","命令行"],"description":"JVM 命令行工具 Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。 JDK 自带了一些实用的命令行工具来监控、分析 JVM 信息，掌握它们，非常有助于 TroubleShooting。 以下是较常用的 JDK 命令行工具： 名称 描述 jps JVM 进程状态工具。显示系统内的所有 JVM 进程。 jstat JVM 统计监控工具。监控虚拟机运行时状态信息，它可以显示出 JVM 进程中的类装载、内存、GC、JIT 编译等运行数据。 jmap JVM 堆内存分析工具。用于打印 JVM 进程对象直方图、类加载统计。并且可以生成堆转储快照（一般称为 heapdump 或 dump 文件）。 jstack JVM 栈查看工具。用于打印 JVM 进程的线程和锁的情况。并且可以生成线程快照（一般称为 threaddump 或 javacore 文件）。 jhat 用来分析 jmap 生成的 dump 文件。 jinfo JVM 信息查看工具。用于实时查看和调整 JVM 进程参数。 jcmd JVM 命令行调试 工具。用于向 JVM 进程发送调试命令。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/01.JavaSE/06.JVM/11.JVM%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"JVM 命令行工具"}],["meta",{"property":"og:description","content":"JVM 命令行工具 Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。 JDK 自带了一些实用的命令行工具来监控、分析 JVM 信息，掌握它们，非常有助于 TroubleShooting。 以下是较常用的 JDK 命令行工具： 名称 描述 jps JVM 进程状态工具。显示系统内的所有 JVM 进程。 jstat JVM 统计监控工具。监控虚拟机运行时状态信息，它可以显示出 JVM 进程中的类装载、内存、GC、JIT 编译等运行数据。 jmap JVM 堆内存分析工具。用于打印 JVM 进程对象直方图、类加载统计。并且可以生成堆转储快照（一般称为 heapdump 或 dump 文件）。 jstack JVM 栈查看工具。用于打印 JVM 进程的线程和锁的情况。并且可以生成线程快照（一般称为 threaddump 或 javacore 文件）。 jhat 用来分析 jmap 生成的 dump 文件。 jinfo JVM 信息查看工具。用于实时查看和调整 JVM 进程参数。 jcmd JVM 命令行调试 工具。用于向 JVM 进程发送调试命令。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:tag","content":"命令行"}],["meta",{"property":"article:published_time","content":"2020-07-30T17:56:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM 命令行工具\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-30T17:56:33.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"jps","slug":"jps","link":"#jps","children":[{"level":3,"title":"jps 命令用法","slug":"jps-命令用法","link":"#jps-命令用法","children":[]},{"level":3,"title":"jps 使用示例","slug":"jps-使用示例","link":"#jps-使用示例","children":[]}]},{"level":2,"title":"jstat","slug":"jstat","link":"#jstat","children":[{"level":3,"title":"jstat 命令用法","slug":"jstat-命令用法","link":"#jstat-命令用法","children":[]},{"level":3,"title":"jstat 使用示例","slug":"jstat-使用示例","link":"#jstat-使用示例","children":[]}]},{"level":2,"title":"jmap","slug":"jmap","link":"#jmap","children":[{"level":3,"title":"jmap 命令用法","slug":"jmap-命令用法","link":"#jmap-命令用法","children":[]},{"level":3,"title":"jstat 使用示例","slug":"jstat-使用示例-1","link":"#jstat-使用示例-1","children":[]}]},{"level":2,"title":"jstack","slug":"jstack","link":"#jstack","children":[{"level":3,"title":"jstack 命令用法","slug":"jstack-命令用法","link":"#jstack-命令用法","children":[]},{"level":3,"title":"thread dump 文件","slug":"thread-dump-文件","link":"#thread-dump-文件","children":[]},{"level":3,"title":"系统线程状态","slug":"系统线程状态","link":"#系统线程状态","children":[]},{"level":3,"title":"jstack 使用示例","slug":"jstack-使用示例","link":"#jstack-使用示例","children":[]}]},{"level":2,"title":"jinfo","slug":"jinfo","link":"#jinfo","children":[]},{"level":2,"title":"jhat","slug":"jhat","link":"#jhat","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":25.38,"words":7615},"filePathRelative":"01.Java/01.JavaSE/06.JVM/11.JVM命令行工具.md","localizedDate":"2020年7月30日","excerpt":"<h1> JVM 命令行工具</h1>\\n<blockquote>\\n<p>Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。</p>\\n<p>JDK 自带了一些实用的命令行工具来监控、分析 JVM 信息，掌握它们，非常有助于 TroubleShooting。</p>\\n</blockquote>\\n<p>以下是较常用的 JDK 命令行工具：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>jps</code></td>\\n<td>JVM 进程状态工具。显示系统内的所有 JVM 进程。</td>\\n</tr>\\n<tr>\\n<td><code>jstat</code></td>\\n<td>JVM 统计监控工具。监控虚拟机运行时状态信息，它可以显示出 JVM 进程中的类装载、内存、GC、JIT 编译等运行数据。</td>\\n</tr>\\n<tr>\\n<td><code>jmap</code></td>\\n<td>JVM 堆内存分析工具。用于打印 JVM 进程对象直方图、类加载统计。并且可以生成堆转储快照（一般称为 heapdump 或 dump 文件）。</td>\\n</tr>\\n<tr>\\n<td><code>jstack</code></td>\\n<td>JVM 栈查看工具。用于打印 JVM 进程的线程和锁的情况。并且可以生成线程快照（一般称为 threaddump 或 javacore 文件）。</td>\\n</tr>\\n<tr>\\n<td><code>jhat</code></td>\\n<td>用来分析 jmap 生成的 dump 文件。</td>\\n</tr>\\n<tr>\\n<td><code>jinfo</code></td>\\n<td>JVM 信息查看工具。用于实时查看和调整 JVM 进程参数。</td>\\n</tr>\\n<tr>\\n<td><code>jcmd</code></td>\\n<td>JVM 命令行调试 工具。用于向 JVM 进程发送调试命令。</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
