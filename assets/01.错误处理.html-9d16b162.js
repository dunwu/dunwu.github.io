const e=JSON.parse('{"key":"v-0069f668","path":"/02.%E7%BC%96%E7%A8%8B/01.%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/01.%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.html","title":"错误处理","lang":"zh-CN","frontmatter":{"title":"错误处理","date":"2020-08-13T23:32:37.000Z","order":1,"category":["编程","编程范式"],"tag":["设计","编程范式"],"description":"错误处理 错误的分类 资源的错误 当我们的代码去请求一些资源时导致的错误，比如打开一个没有权限的文件，写文件时出现的写错误，发送文件到网络端发现网络故障的错误，等等。这一类错误属于程序运行环境的问题。对于这类错误，有的我们可以处理，有的我们则无法处理。比如，内存耗尽、栈溢出或是一些程序运行时关键性资源不能满足等等这些情况，我们只能停止运行，甚至退出整个程序。 程序的错误 比如：空指针、非法参数等。这类是我们自己程序的错误，我们要记录下来，写入日志，最好触发监控系统报警。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/02.%E7%BC%96%E7%A8%8B/01.%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/01.%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"错误处理"}],["meta",{"property":"og:description","content":"错误处理 错误的分类 资源的错误 当我们的代码去请求一些资源时导致的错误，比如打开一个没有权限的文件，写文件时出现的写错误，发送文件到网络端发现网络故障的错误，等等。这一类错误属于程序运行环境的问题。对于这类错误，有的我们可以处理，有的我们则无法处理。比如，内存耗尽、栈溢出或是一些程序运行时关键性资源不能满足等等这些情况，我们只能停止运行，甚至退出整个程序。 程序的错误 比如：空指针、非法参数等。这类是我们自己程序的错误，我们要记录下来，写入日志，最好触发监控系统报警。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"编程范式"}],["meta",{"property":"article:published_time","content":"2020-08-13T23:32:37.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"错误处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-13T23:32:37.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"错误的分类","slug":"错误的分类","link":"#错误的分类","children":[]},{"level":2,"title":"错误返回码和异常捕捉","slug":"错误返回码和异常捕捉","link":"#错误返回码和异常捕捉","children":[]},{"level":2,"title":"异步编程的错误处理","slug":"异步编程的错误处理","link":"#异步编程的错误处理","children":[{"level":3,"title":"callback 错误处理","slug":"callback-错误处理","link":"#callback-错误处理","children":[]},{"level":3,"title":"JavaScript 的 Promise 错误处理","slug":"javascript-的-promise-错误处理","link":"#javascript-的-promise-错误处理","children":[]},{"level":3,"title":"Java 的 Promise 模式","slug":"java-的-promise-模式","link":"#java-的-promise-模式","children":[]}]},{"level":2,"title":"错误处理的最佳实践","slug":"错误处理的最佳实践","link":"#错误处理的最佳实践","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":9.19,"words":2758},"filePathRelative":"02.编程/01.编程范式/01.错误处理.md","localizedDate":"2020年8月13日","excerpt":"<h1> 错误处理</h1>\\n<h2> 错误的分类</h2>\\n<h4> 资源的错误</h4>\\n<p>当我们的代码去请求一些资源时导致的错误，比如打开一个没有权限的文件，写文件时出现的写错误，发送文件到网络端发现网络故障的错误，等等。<strong>这一类错误属于程序运行环境的问题。对于这类错误，有的我们可以处理，有的我们则无法处理。比如，内存耗尽、栈溢出或是一些程序运行时关键性资源不能满足等等这些情况，我们只能停止运行，甚至退出整个程序。</strong></p>\\n<h4> 程序的错误</h4>\\n<p>比如：空指针、非法参数等。<strong>这类是我们自己程序的错误，我们要记录下来，写入日志，最好触发监控系统报警</strong>。</p>","autoDesc":true}');export{e as data};
