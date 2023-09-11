const e=JSON.parse('{"key":"v-110c6be4","path":"/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/01.Spring%E6%A0%B8%E5%BF%83/23.Spring%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html","title":"Spring 类型转换","lang":"zh-CN","frontmatter":{"title":"Spring 类型转换","date":"2022-12-22T19:43:59.000Z","order":23,"category":["Java","框架","Spring","Spring核心"],"tag":["Java","框架","Spring"],"description":"Spring 类型转换 Spring 类型转换的实现 基于 JavaBeans 接口的类型转换实现 基于 java.beans.PropertyEditor 接口扩展 Spring 3.0+ 通用类型转换实现 使用场景 场景 基于 JavaBeans 接口的类型转换实现 Spring 3.0+ 通用类型转换实现 数据绑定 YES YES BeanWrapper YES YES Bean 属性类型转换 YES YES 外部化属性类型转换 NO YES","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/01.Java/13.%E6%A1%86%E6%9E%B6/01.Spring/01.Spring%E6%A0%B8%E5%BF%83/23.Spring%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"Spring 类型转换"}],["meta",{"property":"og:description","content":"Spring 类型转换 Spring 类型转换的实现 基于 JavaBeans 接口的类型转换实现 基于 java.beans.PropertyEditor 接口扩展 Spring 3.0+ 通用类型转换实现 使用场景 场景 基于 JavaBeans 接口的类型转换实现 Spring 3.0+ 通用类型转换实现 数据绑定 YES YES BeanWrapper YES YES Bean 属性类型转换 YES YES 外部化属性类型转换 NO YES"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2022-12-22T19:43:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 类型转换\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-22T19:43:59.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Spring 类型转换的实现","slug":"spring-类型转换的实现","link":"#spring-类型转换的实现","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"基于 JavaBeans 接口的类型转换","slug":"基于-javabeans-接口的类型转换","link":"#基于-javabeans-接口的类型转换","children":[]},{"level":2,"title":"Spring 內建 PropertyEditor 扩展","slug":"spring-內建-propertyeditor-扩展","link":"#spring-內建-propertyeditor-扩展","children":[]},{"level":2,"title":"自定义 PropertyEditor 扩展","slug":"自定义-propertyeditor-扩展","link":"#自定义-propertyeditor-扩展","children":[]},{"level":2,"title":"Spring PropertyEditor 的设计缺陷","slug":"spring-propertyeditor-的设计缺陷","link":"#spring-propertyeditor-的设计缺陷","children":[]},{"level":2,"title":"Spring 3 通用类型转换接口","slug":"spring-3-通用类型转换接口","link":"#spring-3-通用类型转换接口","children":[]},{"level":2,"title":"Spring 內建类型转换器","slug":"spring-內建类型转换器","link":"#spring-內建类型转换器","children":[]},{"level":2,"title":"Converter 接口的局限性","slug":"converter-接口的局限性","link":"#converter-接口的局限性","children":[]},{"level":2,"title":"GenericConverter 接口","slug":"genericconverter-接口","link":"#genericconverter-接口","children":[]},{"level":2,"title":"优化 GenericConverter 接口","slug":"优化-genericconverter-接口","link":"#优化-genericconverter-接口","children":[]},{"level":2,"title":"扩展 Spring 类型转换器","slug":"扩展-spring-类型转换器","link":"#扩展-spring-类型转换器","children":[]},{"level":2,"title":"统一类型转换服务","slug":"统一类型转换服务","link":"#统一类型转换服务","children":[]},{"level":2,"title":"ConversionService 作为依赖","slug":"conversionservice-作为依赖","link":"#conversionservice-作为依赖","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"01.Java/13.框架/01.Spring/01.Spring核心/23.Spring类型转换.md","localizedDate":"2022年12月22日","excerpt":"<h1> Spring 类型转换</h1>\\n<h2> Spring 类型转换的实现</h2>\\n<ul>\\n<li>基于 JavaBeans 接口的类型转换实现\\n<ul>\\n<li>基于 java.beans.PropertyEditor 接口扩展</li>\\n</ul>\\n</li>\\n<li>Spring 3.0+ 通用类型转换实现</li>\\n</ul>\\n<h2> 使用场景</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>场景</th>\\n<th>基于 JavaBeans 接口的类型转换实现</th>\\n<th>Spring 3.0+ 通用类型转换实现</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>数据绑定</td>\\n<td>YES</td>\\n<td>YES</td>\\n</tr>\\n<tr>\\n<td>BeanWrapper</td>\\n<td>YES</td>\\n<td>YES</td>\\n</tr>\\n<tr>\\n<td>Bean 属性类型转换</td>\\n<td>YES</td>\\n<td>YES</td>\\n</tr>\\n<tr>\\n<td>外部化属性类型转换</td>\\n<td>NO</td>\\n<td>YES</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{e as data};
