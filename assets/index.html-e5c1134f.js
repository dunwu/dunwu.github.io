const n=JSON.parse('{"key":"v-ca5201e4","path":"/pages/d893c2/","title":"Maven 教程之 pom.xml 详解","lang":"zh-CN","frontmatter":{"title":"Maven 教程之 pom.xml 详解","date":"2019-05-14T14:57:33.000Z","category":["Java","软件","构建","Maven"],"tag":["Java","构建","Maven"],"permalink":"/pages/d893c2/","description":"Maven 教程之 pom.xml 详解 pom.xml 简介 什么是 pom POM 是 Project Object Model 的缩写，即项目对象模型。 pom.xml 就是 maven 的配置文件，用以描述项目的各种信息。 pom 配置一览 &lt;project xmlns=\\"http://maven.apache.org/POM/4.0.0\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xsi:schemaLocation=\\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\\"&gt; &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt; &lt;!-- The Basics --&gt; &lt;groupId&gt;...&lt;/groupId&gt; &lt;artifactId&gt;...&lt;/artifactId&gt; &lt;version&gt;...&lt;/version&gt; &lt;packaging&gt;...&lt;/packaging&gt; &lt;dependencies&gt;...&lt;/dependencies&gt; &lt;parent&gt;...&lt;/parent&gt; &lt;dependencyManagement&gt;...&lt;/dependencyManagement&gt; &lt;modules&gt;...&lt;/modules&gt; &lt;properties&gt;...&lt;/properties&gt; &lt;!-- Build Settings --&gt; &lt;build&gt;...&lt;/build&gt; &lt;reporting&gt;...&lt;/reporting&gt; &lt;!-- More Project Information --&gt; &lt;name&gt;...&lt;/name&gt; &lt;description&gt;...&lt;/description&gt; &lt;url&gt;...&lt;/url&gt; &lt;inceptionYear&gt;...&lt;/inceptionYear&gt; &lt;licenses&gt;...&lt;/licenses&gt; &lt;organization&gt;...&lt;/organization&gt; &lt;developers&gt;...&lt;/developers&gt; &lt;contributors&gt;...&lt;/contributors&gt; &lt;!-- Environment Settings --&gt; &lt;issueManagement&gt;...&lt;/issueManagement&gt; &lt;ciManagement&gt;...&lt;/ciManagement&gt; &lt;mailingLists&gt;...&lt;/mailingLists&gt; &lt;scm&gt;...&lt;/scm&gt; &lt;prerequisites&gt;...&lt;/prerequisites&gt; &lt;repositories&gt;...&lt;/repositories&gt; &lt;pluginRepositories&gt;...&lt;/pluginRepositories&gt; &lt;distributionManagement&gt;...&lt;/distributionManagement&gt; &lt;profiles&gt;...&lt;/profiles&gt; &lt;/project&gt;","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/d893c2/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Maven 教程之 pom.xml 详解"}],["meta",{"property":"og:description","content":"Maven 教程之 pom.xml 详解 pom.xml 简介 什么是 pom POM 是 Project Object Model 的缩写，即项目对象模型。 pom.xml 就是 maven 的配置文件，用以描述项目的各种信息。 pom 配置一览 &lt;project xmlns=\\"http://maven.apache.org/POM/4.0.0\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xsi:schemaLocation=\\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\\"&gt; &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt; &lt;!-- The Basics --&gt; &lt;groupId&gt;...&lt;/groupId&gt; &lt;artifactId&gt;...&lt;/artifactId&gt; &lt;version&gt;...&lt;/version&gt; &lt;packaging&gt;...&lt;/packaging&gt; &lt;dependencies&gt;...&lt;/dependencies&gt; &lt;parent&gt;...&lt;/parent&gt; &lt;dependencyManagement&gt;...&lt;/dependencyManagement&gt; &lt;modules&gt;...&lt;/modules&gt; &lt;properties&gt;...&lt;/properties&gt; &lt;!-- Build Settings --&gt; &lt;build&gt;...&lt;/build&gt; &lt;reporting&gt;...&lt;/reporting&gt; &lt;!-- More Project Information --&gt; &lt;name&gt;...&lt;/name&gt; &lt;description&gt;...&lt;/description&gt; &lt;url&gt;...&lt;/url&gt; &lt;inceptionYear&gt;...&lt;/inceptionYear&gt; &lt;licenses&gt;...&lt;/licenses&gt; &lt;organization&gt;...&lt;/organization&gt; &lt;developers&gt;...&lt;/developers&gt; &lt;contributors&gt;...&lt;/contributors&gt; &lt;!-- Environment Settings --&gt; &lt;issueManagement&gt;...&lt;/issueManagement&gt; &lt;ciManagement&gt;...&lt;/ciManagement&gt; &lt;mailingLists&gt;...&lt;/mailingLists&gt; &lt;scm&gt;...&lt;/scm&gt; &lt;prerequisites&gt;...&lt;/prerequisites&gt; &lt;repositories&gt;...&lt;/repositories&gt; &lt;pluginRepositories&gt;...&lt;/pluginRepositories&gt; &lt;distributionManagement&gt;...&lt;/distributionManagement&gt; &lt;profiles&gt;...&lt;/profiles&gt; &lt;/project&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"构建"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:published_time","content":"2019-05-14T14:57:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven 教程之 pom.xml 详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-14T14:57:33.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"pom.xml 简介","slug":"pom-xml-简介","link":"#pom-xml-简介","children":[{"level":3,"title":"什么是 pom","slug":"什么是-pom","link":"#什么是-pom","children":[]},{"level":3,"title":"pom 配置一览","slug":"pom-配置一览","link":"#pom-配置一览","children":[]}]},{"level":2,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[{"level":3,"title":"maven 坐标","slug":"maven-坐标","link":"#maven-坐标","children":[]}]},{"level":2,"title":"依赖配置","slug":"依赖配置","link":"#依赖配置","children":[{"level":3,"title":"dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":3,"title":"parent","slug":"parent","link":"#parent","children":[]},{"level":3,"title":"dependencyManagement","slug":"dependencymanagement","link":"#dependencymanagement","children":[]},{"level":3,"title":"modules","slug":"modules","link":"#modules","children":[]},{"level":3,"title":"properties","slug":"properties","link":"#properties","children":[]}]},{"level":2,"title":"构建配置","slug":"构建配置","link":"#构建配置","children":[{"level":3,"title":"build","slug":"build","link":"#build","children":[]},{"level":3,"title":"reporting","slug":"reporting","link":"#reporting","children":[]}]},{"level":2,"title":"项目信息","slug":"项目信息","link":"#项目信息","children":[]},{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[{"level":3,"title":"issueManagement","slug":"issuemanagement","link":"#issuemanagement","children":[]},{"level":3,"title":"ciManagement","slug":"cimanagement","link":"#cimanagement","children":[]},{"level":3,"title":"mailingLists","slug":"mailinglists","link":"#mailinglists","children":[]},{"level":3,"title":"scm","slug":"scm","link":"#scm","children":[]},{"level":3,"title":"prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"repositories","slug":"repositories","link":"#repositories","children":[]},{"level":3,"title":"pluginRepositories","slug":"pluginrepositories","link":"#pluginrepositories","children":[]},{"level":3,"title":"distributionManagement","slug":"distributionmanagement","link":"#distributionmanagement","children":[]},{"level":3,"title":"profiles","slug":"profiles","link":"#profiles","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":14.41,"words":4322},"filePathRelative":"01.Java/11.软件/01.构建/01.Maven/02.Maven教程之pom.xml详解.md","localizedDate":"2019年5月14日","excerpt":"<h1> Maven 教程之 pom.xml 详解</h1>\\n<h2> pom.xml 简介</h2>\\n<h3> 什么是 pom</h3>\\n<p><strong>POM 是 Project Object Model 的缩写，即项目对象模型。</strong></p>\\n<p>pom.xml 就是 maven 的配置文件，用以描述项目的各种信息。</p>\\n<h3> pom 配置一览</h3>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>project</span> <span class=\\"token attr-name\\">xmlns</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://maven.apache.org/POM/4.0.0<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\"><span class=\\"token namespace\\">xmlns:</span>xsi</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://www.w3.org/2001/XMLSchema-instance<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\"><span class=\\"token namespace\\">xsi:</span>schemaLocation</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://maven.apache.org/POM/4.0.0\\n                      http://maven.apache.org/xsd/maven-4.0.0.xsd<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>modelVersion</span><span class=\\"token punctuation\\">&gt;</span></span>4.0.0<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>modelVersion</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token comment\\">&lt;!-- The Basics --&gt;</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>packaging</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>packaging</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>parent</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>parent</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencyManagement</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependencyManagement</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>modules</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>modules</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>properties</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>properties</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token comment\\">&lt;!-- Build Settings --&gt;</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>build</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>build</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>reporting</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>reporting</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token comment\\">&lt;!-- More Project Information --&gt;</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>name</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>name</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>description</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>description</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>url</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>url</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>inceptionYear</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>inceptionYear</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>licenses</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>licenses</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>organization</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>organization</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>developers</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>developers</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>contributors</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>contributors</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token comment\\">&lt;!-- Environment Settings --&gt;</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>issueManagement</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>issueManagement</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ciManagement</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ciManagement</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>mailingLists</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>mailingLists</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scm</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scm</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>prerequisites</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>prerequisites</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>repositories</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>repositories</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>pluginRepositories</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>pluginRepositories</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>distributionManagement</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>distributionManagement</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>profiles</span><span class=\\"token punctuation\\">&gt;</span></span>...<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>profiles</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>project</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
