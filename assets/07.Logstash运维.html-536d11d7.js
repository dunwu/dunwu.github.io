const t=JSON.parse('{"key":"v-3943b9e0","path":"/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/02.Elastic/07.Logstash%E8%BF%90%E7%BB%B4.html","title":"Logstash 运维","lang":"zh-CN","frontmatter":{"title":"Logstash 运维","date":"2020-06-16T07:10:44.000Z","order":7,"category":["数据库","搜索引擎数据库","Elastic"],"tag":["数据库","搜索引擎数据库","Elastic","Logstash"],"description":"Logstash 运维 Logstash 是开源的服务器端数据处理管道，能够同时从多个来源采集数据，转换数据，然后将数据发送到您最喜欢的“存储库”中。 1. 安装 1.1. 安装步骤 安装步骤如下： （1）在 logstash 官方下载地址下载所需版本包并解压到本地。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/12.%E6%95%B0%E6%8D%AE%E5%BA%93/07.%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%95%B0%E6%8D%AE%E5%BA%93/02.Elastic/07.Logstash%E8%BF%90%E7%BB%B4.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Logstash 运维"}],["meta",{"property":"og:description","content":"Logstash 运维 Logstash 是开源的服务器端数据处理管道，能够同时从多个来源采集数据，转换数据，然后将数据发送到您最喜欢的“存储库”中。 1. 安装 1.1. 安装步骤 安装步骤如下： （1）在 logstash 官方下载地址下载所需版本包并解压到本地。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"搜索引擎数据库"}],["meta",{"property":"article:tag","content":"Elastic"}],["meta",{"property":"article:tag","content":"Logstash"}],["meta",{"property":"article:published_time","content":"2020-06-16T07:10:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Logstash 运维\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-16T07:10:44.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装","slug":"_1-安装","link":"#_1-安装","children":[{"level":3,"title":"1.1. 安装步骤","slug":"_1-1-安装步骤","link":"#_1-1-安装步骤","children":[]}]},{"level":2,"title":"2. 配置","slug":"_2-配置","link":"#_2-配置","children":[{"level":3,"title":"2.1. 设置文件","slug":"_2-1-设置文件","link":"#_2-1-设置文件","children":[]},{"level":3,"title":"2.2. logstash.yml 设置项","slug":"_2-2-logstash-yml-设置项","link":"#_2-2-logstash-yml-设置项","children":[]}]},{"level":2,"title":"3. 启动","slug":"_3-启动","link":"#_3-启动","children":[{"level":3,"title":"3.1. 命令行","slug":"_3-1-命令行","link":"#_3-1-命令行","children":[]},{"level":3,"title":"3.2. 配置文件","slug":"_3-2-配置文件","link":"#_3-2-配置文件","children":[]}]},{"level":2,"title":"4. 插件","slug":"_4-插件","link":"#_4-插件","children":[{"level":3,"title":"4.1. input","slug":"_4-1-input","link":"#_4-1-input","children":[]},{"level":3,"title":"4.2. filter","slug":"_4-2-filter","link":"#_4-2-filter","children":[]},{"level":3,"title":"4.3. output","slug":"_4-3-output","link":"#_4-3-output","children":[]},{"level":3,"title":"4.4. codec","slug":"_4-4-codec","link":"#_4-4-codec","children":[]}]},{"level":2,"title":"5. 实战","slug":"_5-实战","link":"#_5-实战","children":[{"level":3,"title":"5.1. 传输控制台数据","slug":"_5-1-传输控制台数据","link":"#_5-1-传输控制台数据","children":[]},{"level":3,"title":"5.2. 传输 logback 日志","slug":"_5-2-传输-logback-日志","link":"#_5-2-传输-logback-日志","children":[]},{"level":3,"title":"5.3. 传输文件","slug":"_5-3-传输文件","link":"#_5-3-传输文件","children":[]}]},{"level":2,"title":"6. 小技巧","slug":"_6-小技巧","link":"#_6-小技巧","children":[{"level":3,"title":"6.1. 启动、终止应用","slug":"_6-1-启动、终止应用","link":"#_6-1-启动、终止应用","children":[]}]},{"level":2,"title":"7. 参考资料","slug":"_7-参考资料","link":"#_7-参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":11.62,"words":3485},"filePathRelative":"12.数据库/07.搜索引擎数据库/02.Elastic/07.Logstash运维.md","localizedDate":"2020年6月16日","excerpt":"<h1> Logstash 运维</h1>\\n<blockquote>\\n<p><a href=\\"https://github.com/elastic/logstash\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Logstash</a> 是开源的服务器端数据处理管道，能够同时从多个来源采集数据，转换数据，然后将数据发送到您最喜欢的“存储库”中。</p>\\n</blockquote>\\n<h2> 1. 安装</h2>\\n<h3> 1.1. 安装步骤</h3>\\n<p>安装步骤如下：</p>\\n<p>（1）在 <a href=\\"https://www.elastic.co/downloads/logstash\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">logstash 官方下载地址</a>下载所需版本包并解压到本地。</p>","autoDesc":true}');export{t as data};
