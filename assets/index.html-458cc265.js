const e=JSON.parse('{"key":"v-663ca38e","path":"/pages/e5b79f/","title":"Maven 快速入门","lang":"zh-CN","frontmatter":{"title":"Maven 快速入门","date":"2020-02-07T23:04:47.000Z","category":["Java","软件","构建","Maven"],"tag":["Java","构建","Maven"],"permalink":"/pages/e5b79f/","description":"Maven 快速入门 Maven 简介 Maven 是什么 Maven 是一个项目管理工具。它负责管理项目开发过程中的几乎所有的东西。 版本 - maven 有自己的版本定义和规则。 构建 - maven 支持许多种的应用程序类型，对于每一种支持的应用程序类型都定义好了一组构建规则和工具集。 输出物管理 - maven 可以管理项目构建的产物，并将其加入到用户库中。这个功能可以用于项目组和其他部门之间的交付行为。 依赖关系 - maven 对依赖关系的特性进行细致的分析和划分，避免开发过程中的依赖混乱和相互污染行为 文档和构建结果 - maven 的 site 命令支持各种文档信息的发布，包括构建过程的各种输出，javadoc，产品文档等。 项目关系 - 一个大型的项目通常有几个小项目或者模块组成，用 maven 可以很方便地管理。 移植性管理 - maven 可以针对不同的开发场景，输出不同种类的输出结果。","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/e5b79f/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Maven 快速入门"}],["meta",{"property":"og:description","content":"Maven 快速入门 Maven 简介 Maven 是什么 Maven 是一个项目管理工具。它负责管理项目开发过程中的几乎所有的东西。 版本 - maven 有自己的版本定义和规则。 构建 - maven 支持许多种的应用程序类型，对于每一种支持的应用程序类型都定义好了一组构建规则和工具集。 输出物管理 - maven 可以管理项目构建的产物，并将其加入到用户库中。这个功能可以用于项目组和其他部门之间的交付行为。 依赖关系 - maven 对依赖关系的特性进行细致的分析和划分，避免开发过程中的依赖混乱和相互污染行为 文档和构建结果 - maven 的 site 命令支持各种文档信息的发布，包括构建过程的各种输出，javadoc，产品文档等。 项目关系 - 一个大型的项目通常有几个小项目或者模块组成，用 maven 可以很方便地管理。 移植性管理 - maven 可以针对不同的开发场景，输出不同种类的输出结果。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T10:35:58.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"构建"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:published_time","content":"2020-02-07T23:04:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T10:35:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven 快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-07T23:04:47.000Z\\",\\"dateModified\\":\\"2023-09-10T10:35:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Maven 简介","slug":"maven-简介","link":"#maven-简介","children":[{"level":3,"title":"Maven 是什么","slug":"maven-是什么","link":"#maven-是什么","children":[]},{"level":3,"title":"Maven 的生命周期","slug":"maven-的生命周期","link":"#maven-的生命周期","children":[]},{"level":3,"title":"Maven 的标准工程结构","slug":"maven-的标准工程结构","link":"#maven-的标准工程结构","children":[]},{"level":3,"title":"Maven 的\\"约定优于配置\\"","slug":"maven-的-约定优于配置","link":"#maven-的-约定优于配置","children":[]},{"level":3,"title":"Maven 的版本规范","slug":"maven-的版本规范","link":"#maven-的版本规范","children":[]}]},{"level":2,"title":"Maven 安装","slug":"maven-安装","link":"#maven-安装","children":[{"level":3,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":3,"title":"下载解压","slug":"下载解压","link":"#下载解压","children":[]},{"level":3,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]},{"level":3,"title":"检测安装成功","slug":"检测安装成功","link":"#检测安装成功","children":[]},{"level":3,"title":"Maven 配置文件","slug":"maven-配置文件","link":"#maven-配置文件","children":[]}]},{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[{"level":3,"title":"创建 Maven 工程","slug":"创建-maven-工程","link":"#创建-maven-工程","children":[]},{"level":3,"title":"在 Intellij 中创建 Maven 工程","slug":"在-intellij-中创建-maven-工程","link":"#在-intellij-中创建-maven-工程","children":[]},{"level":3,"title":"在 Eclipse 中创建 Maven 工程","slug":"在-eclipse-中创建-maven-工程","link":"#在-eclipse-中创建-maven-工程","children":[]}]},{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[{"level":3,"title":"如何添加依赖","slug":"如何添加依赖","link":"#如何添加依赖","children":[]},{"level":3,"title":"如何寻找 jar 包","slug":"如何寻找-jar-包","link":"#如何寻找-jar-包","children":[]},{"level":3,"title":"如何使用 Maven 插件(Plugin)","slug":"如何使用-maven-插件-plugin","link":"#如何使用-maven-插件-plugin","children":[]},{"level":3,"title":"如何一次编译多个工程","slug":"如何一次编译多个工程","link":"#如何一次编译多个工程","children":[]},{"level":3,"title":"常用 Maven 插件","slug":"常用-maven-插件","link":"#常用-maven-插件","children":[]},{"level":3,"title":"Maven 命令","slug":"maven-命令","link":"#maven-命令","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694342158000,"updatedTime":1694342158000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":21.13,"words":6338},"filePathRelative":"01.Java/11.软件/01.构建/01.Maven/01.Maven快速入门.md","localizedDate":"2020年2月7日","excerpt":"<h1> Maven 快速入门</h1>\\n<h2> Maven 简介</h2>\\n<h3> Maven 是什么</h3>\\n<p><a href=\\"https://github.com/apache/maven\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Maven</a> 是一个项目管理工具。它负责管理项目开发过程中的几乎所有的东西。</p>\\n<ul>\\n<li><strong>版本</strong> - maven 有自己的版本定义和规则。</li>\\n<li><strong>构建</strong> - maven 支持许多种的应用程序类型，对于每一种支持的应用程序类型都定义好了一组构建规则和工具集。</li>\\n<li><strong>输出物管理</strong> - maven 可以管理项目构建的产物，并将其加入到用户库中。这个功能可以用于项目组和其他部门之间的交付行为。</li>\\n<li><strong>依赖关系</strong> - maven 对依赖关系的特性进行细致的分析和划分，避免开发过程中的依赖混乱和相互污染行为</li>\\n<li><strong>文档和构建结果</strong> - maven 的 site 命令支持各种文档信息的发布，包括构建过程的各种输出，javadoc，产品文档等。</li>\\n<li><strong>项目关系</strong> - 一个大型的项目通常有几个小项目或者模块组成，用 maven 可以很方便地管理。</li>\\n<li><strong>移植性管理</strong> - maven 可以针对不同的开发场景，输出不同种类的输出结果。</li>\\n</ul>","autoDesc":true}');export{e as data};
