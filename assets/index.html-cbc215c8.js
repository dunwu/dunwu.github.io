const e=JSON.parse('{"key":"v-170d9e99","path":"/pages/eb1d46/","title":"Lombok 快速入门","lang":"zh-CN","frontmatter":{"title":"Lombok 快速入门","date":"2022-02-17T22:34:30.000Z","category":["Java","工具","JavaBean"],"tag":["Java","JavaBean","Lombok"],"permalink":"/pages/eb1d46/","description":"Lombok 快速入门 Lombok 简介 Lombok 是一种 Java 实用工具，可用来帮助开发人员消除 Java 的冗长，尤其是对于简单的 Java 对象（POJO）。它通过注释实现这一目的。通过在开发环境中实现 Lombok，开发人员可以节省构建诸如 hashCode() 和 equals() 、getter / setter 这样的方法以及以往用来分类各种 accessor 和 mutator 的大量时间。 Lombok 安装 由于 Lombok 仅在编译阶段生成代码，所以使用 Lombok 注解的源代码，在 IDE 中会被高亮显示错误，针对这个问题可以通过安装 IDE 对应的插件来解决。具体的安装方式可以参考：Setting up Lombok with Eclipse and Intellij","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/pages/eb1d46/"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Lombok 快速入门"}],["meta",{"property":"og:description","content":"Lombok 快速入门 Lombok 简介 Lombok 是一种 Java 实用工具，可用来帮助开发人员消除 Java 的冗长，尤其是对于简单的 Java 对象（POJO）。它通过注释实现这一目的。通过在开发环境中实现 Lombok，开发人员可以节省构建诸如 hashCode() 和 equals() 、getter / setter 这样的方法以及以往用来分类各种 accessor 和 mutator 的大量时间。 Lombok 安装 由于 Lombok 仅在编译阶段生成代码，所以使用 Lombok 注解的源代码，在 IDE 中会被高亮显示错误，针对这个问题可以通过安装 IDE 对应的插件来解决。具体的安装方式可以参考：Setting up Lombok with Eclipse and Intellij"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-10T13:36:40.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaBean"}],["meta",{"property":"article:tag","content":"Lombok"}],["meta",{"property":"article:published_time","content":"2022-02-17T22:34:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-10T13:36:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lombok 快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-17T22:34:30.000Z\\",\\"dateModified\\":\\"2023-09-10T13:36:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Lombok 简介","slug":"lombok-简介","link":"#lombok-简介","children":[]},{"level":2,"title":"Lombok 安装","slug":"lombok-安装","link":"#lombok-安装","children":[]},{"level":2,"title":"Lombok 使用","slug":"lombok-使用","link":"#lombok-使用","children":[{"level":3,"title":"@Getter and @Setter","slug":"getter-and-setter","link":"#getter-and-setter","children":[]},{"level":3,"title":"@NonNull","slug":"nonnull","link":"#nonnull","children":[]},{"level":3,"title":"@ToString","slug":"tostring","link":"#tostring","children":[]},{"level":3,"title":"@EqualsAndHashCode","slug":"equalsandhashcode","link":"#equalsandhashcode","children":[]},{"level":3,"title":"@Data","slug":"data","link":"#data","children":[]},{"level":3,"title":"@Cleanup","slug":"cleanup","link":"#cleanup","children":[]},{"level":3,"title":"@Synchronized","slug":"synchronized","link":"#synchronized","children":[]},{"level":3,"title":"@SneakyThrows","slug":"sneakythrows","link":"#sneakythrows","children":[]},{"level":3,"title":"示例源码","slug":"示例源码","link":"#示例源码","children":[]}]},{"level":2,"title":"Lombok 使用注意点","slug":"lombok-使用注意点","link":"#lombok-使用注意点","children":[{"level":3,"title":"谨慎使用 @Builder","slug":"谨慎使用-builder","link":"#谨慎使用-builder","children":[]},{"level":3,"title":"@Data 注解和继承","slug":"data-注解和继承","link":"#data-注解和继承","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694353000000,"updatedTime":1694353000000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":5.79,"words":1738},"filePathRelative":"01.Java/12.工具/02.JavaBean/01.Lombok.md","localizedDate":"2022年2月17日","excerpt":"<h1> Lombok 快速入门</h1>\\n<h2> Lombok 简介</h2>\\n<p>Lombok 是一种 Java 实用工具，可用来帮助开发人员消除 Java 的冗长，尤其是对于简单的 Java 对象（POJO）。它通过注释实现这一目的。通过在开发环境中实现 Lombok，开发人员可以节省构建诸如 <code>hashCode()</code> 和 <code>equals()</code> 、<code>getter / setter</code> 这样的方法以及以往用来分类各种 accessor 和 mutator 的大量时间。</p>\\n<h2> Lombok 安装</h2>\\n<p>由于 Lombok 仅在编译阶段生成代码，所以使用 Lombok 注解的源代码，在 IDE 中会被高亮显示错误，针对这个问题可以通过安装 IDE 对应的插件来解决。具体的安装方式可以参考：<a href=\\"https://www.baeldung.com/lombok-ide\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Setting up Lombok with Eclipse and Intellij</a></p>","autoDesc":true}');export{e as data};
