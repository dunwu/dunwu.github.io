import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as i,a as e,b as t,d as n,e as a}from"./app-dc48b2dc.js";const o={},p=e("h1",{id:"spring-访问-elasticsearch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spring-访问-elasticsearch","aria-hidden":"true"},"#"),t(" Spring 访问 Elasticsearch")],-1),d=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),t(" 简介")],-1),h={href:"https://www.elastic.co/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="通过-rest-客户端连接-elasticsearch" tabindex="-1"><a class="header-anchor" href="#通过-rest-客户端连接-elasticsearch" aria-hidden="true">#</a> 通过 REST 客户端连接 Elasticsearch</h3><p>如果在 classpath 路径下存在 <code>org.elasticsearch.client:elasticsearch-rest-client</code> jar 包，Spring Boot 会自动配置并注册一个 <code>RestClient</code> Bean，它的默认访问路径为：<code>localhost:9200</code>。</p><p>你可以使用如下方式进行定制：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.elasticsearch.rest.uris</span><span class="token punctuation">=</span><span class="token value attr-value">http://search.example.com:9200</span>
<span class="token key attr-name">spring.elasticsearch.rest.username</span><span class="token punctuation">=</span><span class="token value attr-value">user</span>
<span class="token key attr-name">spring.elasticsearch.rest.password</span><span class="token punctuation">=</span><span class="token value attr-value">secret</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以注册实现任意数量的 <code>RestClientBuilderCustomizer</code> bean，以进行更高级的定制。要完全控制注册，请定义 <code>RestClient</code> bean。</p><p>如果 classpath 路径有 <code>org.elasticsearch.client：elasticsearch-rest-high-level-client</code> jar 包，Spring Boot 将自动配置一个 <code>RestHighLevelClient</code>，它包装任何现有的 <code>RestClient</code> bean，重用其 HTTP 配置。</p><h3 id="通过-jest-连接-elasticsearch" tabindex="-1"><a class="header-anchor" href="#通过-jest-连接-elasticsearch" aria-hidden="true">#</a> 通过 Jest 连接 Elasticsearch</h3><p>如果 classpath 上有 Jest，你可以注入一个自动配置的 <code>JestClient</code>，默认情况下是 <code>localhost:9200</code>。您可以进一步调整客户端的配置方式，如以下示例所示：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.elasticsearch.jest.uris</span><span class="token punctuation">=</span><span class="token value attr-value">http://search.example.com:9200</span>
<span class="token key attr-name">spring.elasticsearch.jest.read-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">spring.elasticsearch.jest.username</span><span class="token punctuation">=</span><span class="token value attr-value">user</span>
<span class="token key attr-name">spring.elasticsearch.jest.password</span><span class="token punctuation">=</span><span class="token value attr-value">secret</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以注册实现任意数量的 <code>HttpClientConfigBuilderCustomizer</code> bean，以进行更高级的定制。以下示例调整为其他 HTTP 设置：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">HttpSettingsCustomizer</span> <span class="token keyword">implements</span> <span class="token class-name">HttpClientConfigBuilderCustomizer</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customize</span><span class="token punctuation">(</span><span class="token class-name">HttpClientConfig<span class="token punctuation">.</span>Builder</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		builder<span class="token punctuation">.</span><span class="token function">maxTotalConnection</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultMaxTotalConnectionPerRoute</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要完全控制注册，请定义 <code>JestClient</code> bean。</p><h3 id="通过-spring-data-访问-elasticsearch" tabindex="-1"><a class="header-anchor" href="#通过-spring-data-访问-elasticsearch" aria-hidden="true">#</a> 通过 Spring Data 访问 Elasticsearch</h3><p>要连接到 Elasticsearch，您必须提供一个或多个集群节点的地址。可以通过将 <code>spring.data.elasticsearch.cluster-nodes</code> 属性设置为以逗号分隔的 <code>host:port</code> 列表来指定地址。使用此配置，可以像任何其他 Spring bean 一样注入 <code>ElasticsearchTemplate</code> 或 <code>TransportClient</code>，如以下示例所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token punctuation">.</span>data<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>cluster<span class="token operator">-</span>nodes<span class="token operator">=</span>localhost<span class="token operator">:</span><span class="token number">9300</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBean</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ElasticsearchTemplate</span> template<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">MyBean</span><span class="token punctuation">(</span><span class="token class-name">ElasticsearchTemplate</span> template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>template <span class="token operator">=</span> template<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// ...</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你添加了自定义的 <code>ElasticsearchTemplate</code> 或 <code>TransportClient</code> <code>@Bean</code> ，就会替换默认的配置。</p><h3 id="elasticsearch-repositories" tabindex="-1"><a class="header-anchor" href="#elasticsearch-repositories" aria-hidden="true">#</a> Elasticsearch Repositories</h3><p>Spring Data 包含对 Elasticsearch 的 repository 支持。基本原则是根据方法名称自动为您构建查询。</p><p>事实上，Spring Data JPA 和 Spring Data Elasticsearch 共享相同的通用基础架构。</p><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>`,20),_={href:"https://github.com/dunwu/spring-boot-tutorial/tree/master/codes/spring-boot-data-elasticsearch",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>使用方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean package
<span class="token builtin class-name">cd</span> target
<span class="token function">java</span> <span class="token parameter variable">-jar</span> spring-boot-data-elasticsearch.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>Spring 和 Elasticsearch 匹配版本：</p>`,4),k=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Spring Data Elasticsearch"),e("th",{style:{"text-align":"center"}},"Elasticsearch"),e("th",{style:{"text-align":"center"}},"Spring Framework"),e("th",{style:{"text-align":"center"}},"Spring Boot")])],-1),m=e("tr",null,[e("td",{style:{"text-align":"center"}},"5.0.x"),e("td",{style:{"text-align":"center"}},"8.5.3"),e("td",{style:{"text-align":"center"}},"6.0.x"),e("td",{style:{"text-align":"center"}},"3.0.x")],-1),v=e("tr",null,[e("td",{style:{"text-align":"center"}},"4.4.x"),e("td",{style:{"text-align":"center"}},"7.17.3"),e("td",{style:{"text-align":"center"}},"5.3.x"),e("td",{style:{"text-align":"center"}},"2.7.x")],-1),b=e("tr",null,[e("td",{style:{"text-align":"center"}},"4.3.x"),e("td",{style:{"text-align":"center"}},"7.15.2"),e("td",{style:{"text-align":"center"}},"5.3.x"),e("td",{style:{"text-align":"center"}},"2.6.x")],-1),x={style:{"text-align":"center"}},f={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#_footnotedef_1",target:"_blank",rel:"noopener noreferrer"},y=e("td",{style:{"text-align":"center"}},"7.12.0",-1),E=e("td",{style:{"text-align":"center"}},"5.3.x",-1),w=e("td",{style:{"text-align":"center"}},"2.5.x",-1),C={style:{"text-align":"center"}},S={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#_footnotedef_1",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"center"}},"7.9.3",-1),B=e("td",{style:{"text-align":"center"}},"5.3.2",-1),T=e("td",{style:{"text-align":"center"}},"2.4.x",-1),D={style:{"text-align":"center"}},R={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#_footnotedef_1",target:"_blank",rel:"noopener noreferrer"},H=e("td",{style:{"text-align":"center"}},"7.6.2",-1),z=e("td",{style:{"text-align":"center"}},"5.2.12",-1),J=e("td",{style:{"text-align":"center"}},"2.3.x",-1),N={style:{"text-align":"center"}},P={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#_footnotedef_1",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"center"}},"6.8.12",-1),G=e("td",{style:{"text-align":"center"}},"5.2.12",-1),L=e("td",{style:{"text-align":"center"}},"2.2.x",-1),M={style:{"text-align":"center"}},I={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#_footnotedef_1",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"center"}},"6.2.2",-1),F=e("td",{style:{"text-align":"center"}},"5.1.19",-1),O=e("td",{style:{"text-align":"center"}},"2.1.x",-1),q={style:{"text-align":"center"}},K={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#_footnotedef_1",target:"_blank",rel:"noopener noreferrer"},Q=e("td",{style:{"text-align":"center"}},"5.5.0",-1),U=e("td",{style:{"text-align":"center"}},"5.0.13",-1),W=e("td",{style:{"text-align":"center"}},"2.0.x",-1),X={style:{"text-align":"center"}},Y={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#_footnotedef_1",target:"_blank",rel:"noopener noreferrer"},Z=e("td",{style:{"text-align":"center"}},"2.4.0",-1),$=e("td",{style:{"text-align":"center"}},"4.3.25",-1),ee=e("td",{style:{"text-align":"center"}},"1.5.x",-1),te=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),t(" 参考资料")],-1),se=e("strong",null,"官方",-1),ne={href:"https://www.elastic.co/cn/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},re={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://www.elastic.co/guide/en/elasticsearch/guide/master/index.html",target:"_blank",rel:"noopener noreferrer"},le={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-elasticsearch",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://github.com/spring-projects/spring-data-elasticsearch",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"};function pe(de,he){const s=c("ExternalLinkIcon");return l(),i("div",null,[p,d,e("p",null,[e("a",h,[t("Elasticsearch"),n(s)]),t(" 是一个开源的、分布式的搜索和分析引擎。")]),u,e("p",null,[t("完整示例："),e("a",_,[t("源码"),n(s)])]),g,e("table",null,[k,e("tbody",null,[m,v,b,e("tr",null,[e("td",x,[t("4.2.x["),e("a",f,[t("1"),n(s)]),t("]")]),y,E,w]),e("tr",null,[e("td",C,[t("4.1.x["),e("a",S,[t("1"),n(s)]),t("]")]),j,B,T]),e("tr",null,[e("td",D,[t("4.0.x["),e("a",R,[t("1"),n(s)]),t("]")]),H,z,J]),e("tr",null,[e("td",N,[t("3.2.x["),e("a",P,[t("1"),n(s)]),t("]")]),V,G,L]),e("tr",null,[e("td",M,[t("3.1.x["),e("a",I,[t("1"),n(s)]),t("]")]),A,F,O]),e("tr",null,[e("td",q,[t("3.0.x["),e("a",K,[t("1"),n(s)]),t("]")]),Q,U,W]),e("tr",null,[e("td",X,[t("2.1.x["),e("a",Y,[t("1"),n(s)]),t("]")]),Z,$,ee])])]),te,e("ul",null,[e("li",null,[se,e("ul",null,[e("li",null,[e("a",ne,[t("Elasticsearch 官网"),n(s)])]),e("li",null,[e("a",ae,[t("Elasticsearch Github"),n(s)])]),e("li",null,[e("a",re,[t("Elasticsearch 官方文档"),n(s)])]),e("li",null,[e("a",ce,[t("Elasticsearch: The Definitive Guide"),n(s)]),t(" - ElasticSearch 官方学习资料")])])]),e("li",null,[e("a",le,[t("Spring Boot 官方文档之 boot-features-elasticsearch"),n(s)])]),e("li",null,[e("a",ie,[t("Spring Data Elasticsearch Github"),n(s)])]),e("li",null,[e("a",oe,[t("Spring Data Elasticsearch 官方文档"),n(s)])])])])}const ge=r(o,[["render",pe],["__file","23.Spring访问Elasticsearch.html.vue"]]);export{ge as default};
