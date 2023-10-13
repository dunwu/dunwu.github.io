import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as s,b as n,d as e,e as t}from"./app-dc48b2dc.js";const l={},r=t(`<h1 id="spring-data-综合" tabindex="-1"><a class="header-anchor" href="#spring-data-综合" aria-hidden="true">#</a> Spring Data 综合</h1><p>Spring Data Repository 抽象的目标是显著减少各种访问持久化存储的样板式代码。</p><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><p>Repository 是 Spring Data 的核心接口。此接口主要用作标记接口，以捕获要使用的类型并帮助您发现扩展此接口的接口。<code>CrudRepository</code> 和 <code>ListCrudRepository</code> 接口为被管理的实体类提供复杂的 CRUD 功能。<code>ListCrudRepository</code> 提供等效方法，但它们返回 <code>List</code>，而 <code>CrudRepository</code> 方法返回 <code>Iterable</code>。</p><p><code>CrudRepository</code> 接口定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CrudRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

  <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">S</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">S</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">ID</span> primaryKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">long</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">boolean</span> <span class="token function">existsById</span><span class="token punctuation">(</span><span class="token class-name">ID</span> primaryKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// … more functionality omitted.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Spring Data 项目也提供了一些特定持久化技术的抽象接口，如：JpaRepository 或 MongoRepository。这些接口扩展了 CrudRepository 并暴露了一些持久化技术的底层功能。</p></blockquote><p>除了 <code>CrudRepository</code> 之外，还有一个 <code>PagingAndSortingRepository</code> 接口，它添加了额外的方法来简化对实体的分页访问：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PagingAndSortingRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span>  <span class="token punctuation">{</span>

  <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Sort</span> sort<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】要按页面大小 20 访问 User 的第二页，可以执行如下操作</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PagingAndSortingRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> repository <span class="token operator">=</span> <span class="token comment">// … get access to a bean</span>
<span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> repository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">PageRequest</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了查询方法之外，计数和删除时的查询也是可用的。</p><p>【示例】根据姓氏计数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">CrudRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">long</span> <span class="token function">countByLastname</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】根据姓氏删除</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">CrudRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

  <span class="token keyword">long</span> <span class="token function">deleteByLastname</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">removeByLastname</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询方法" tabindex="-1"><a class="header-anchor" href="#查询方法" aria-hidden="true">#</a> 查询方法</h2><p>使用 Spring Data 对数据库进行查询有以下四步：</p>`,18),u=t(`<li><p>声明一个扩展 <code>Repository</code> 或其子接口的接口，并指定泛型类型（实体类和 ID 类型），如以下示例所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">PersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在接口中声明查询方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">PersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByLastname</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),d={href:"https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#repositories.create-instances.java-config",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#repositories.create-instances",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableJpaRepositories</span>
<span class="token keyword">class</span> <span class="token class-name">Config</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=t(`<li><p>注入 <code>Repository</code> 实例并使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">SomeClient</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">PersonRepository</span> repository<span class="token punctuation">;</span>

  <span class="token class-name">SomeClient</span><span class="token punctuation">(</span><span class="token class-name">PersonRepository</span> repository<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>repository <span class="token operator">=</span> repository<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> persons <span class="token operator">=</span> repository<span class="token punctuation">.</span><span class="token function">findByLastname</span><span class="token punctuation">(</span><span class="token string">&quot;Matthews&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=t(`<h2 id="定义-repository" tabindex="-1"><a class="header-anchor" href="#定义-repository" aria-hidden="true">#</a> 定义 Repository</h2><p>首先需要定义一个 Repository 接口，该接口必须扩展 Repository 并且指定泛型类型（实体类和 ID 类型）。如果想为该实体暴露 CRUD 方法，可以扩展 CrudRepository 接口。</p><h3 id="微调-repository-定义" tabindex="-1"><a class="header-anchor" href="#微调-repository-定义" aria-hidden="true">#</a> 微调 Repository 定义</h3><p>Spring Data 提供了很多种 Repository 以应对不同的需求场景。</p><p><code>CrudRepository</code> 提供了 CRUD 功能。</p><p><code>ListCrudRepository</code> 和 <code>CrudRepository</code> 类似，但对于那些返回多个实体的方法，它返回一个 <code>List</code> 而不是 <code>Iterable</code>，这样使用可能更方便。</p><p>如果使用响应式框架，可以使用 <code>ReactiveCrudRepository</code> 或 <code>RxJava3CrudRepository</code>。</p><p><code>CoroutineCrudRepository</code> 支持 Kotlin 的协程特性。</p><p><code>PagingAndSortingRepository</code> 提供了分页、排序功能。</p><p>如果不想扩展 Spring Data 接口，还可以使用 <code>@RepositoryDefinition</code> 注释您的 <code>Repository</code> 接口。 扩展一个 CRUD Repository 接口，需要暴露一组完整的方法来操作实体。如果希望对暴露的方法有选择性，可以将要暴露的方法从 CRUD Repository 复制到自定义的 Repository 中。 这样做时，可以更改方法的返回类型。 如果可能，Spring Data 将遵循返回类型。 例如，对于返回多个实体的方法，可以选择 <code>Iterable&lt;T&gt;</code>、<code>List&lt;T&gt;</code>、<code>Collection&lt;T&gt;</code> 或 <code>VAVR</code> 列表。</p><p>自定义基础 <code>Repository</code> 接口，必须用 <code>@NoRepositoryBean</code> 标记。 这可以防止 Spring Data 尝试直接创建它的实例并失败，因为它无法确定该 Repository 的实体，因为它仍然包含一个通用类型变量。</p><p>以下示例显示了如何有选择地暴露 CRUD 方法（在本例中为 findById 和 save）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@NoRepositoryBean</span>
<span class="token keyword">interface</span> <span class="token class-name">MyBaseRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

  <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">ID</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">S</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">S</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">MyBaseRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token class-name">User</span> <span class="token function">findByEmailAddress</span><span class="token punctuation">(</span><span class="token class-name">EmailAddress</span> emailAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用多个-spring-数据模块" tabindex="-1"><a class="header-anchor" href="#使用多个-spring-数据模块" aria-hidden="true">#</a> 使用多个 Spring 数据模块</h3><p>有时，程序中需要使用多个 Spring Data 模块。在这种情况下，必须区分持久化技术。当检测到类路径上有多个 Repository 工厂时，Spring Data 进入严格的配置模式。</p><p>如果定义的 Repository 扩展了特定模块中的 Repository，则它是特定 Spring Data 模块的有效候选者。</p><p>如果实体类使用了特定模块的类型注解，则它是特定 Spring Data 模块的有效候选者。 Spring Data 模块接受第三方注解（例如 JPA 的 <code>@Entity</code>）或提供自己的注解（例如用于 Spring Data MongoDB 和 Spring Data Elasticsearch 的 <code>@Document</code>）。</p><p>以下示例显示了一个使用模块特定接口（在本例中为 JPA）的 Repository：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">MyRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token annotation punctuation">@NoRepositoryBean</span>
<span class="token keyword">interface</span> <span class="token class-name">MyBaseRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">MyBaseRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MyRepository 和 UserRepository 扩展了 JpaRepository。它们是 Spring Data JPA 模块的有效候选者。</p><p>以下示例显示了一个使用通用接口的 Repository</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">AmbiguousRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token annotation punctuation">@NoRepositoryBean</span>
<span class="token keyword">interface</span> <span class="token class-name">MyBaseRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">CrudRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AmbiguousUserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">MyBaseRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AmbiguousRepository 和 AmbiguousUserRepository 仅扩展了 Repository 和 CrudRepository。 虽然这在使用唯一的 Spring Data 模块时很好，但是存在多个模块时，无法区分这些 Repository 应该绑定到哪个特定的 Spring Data。</p><p>以下示例显示了一个使用带注解的实体类的 Repository</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">PersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token annotation punctuation">@Entity</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token annotation punctuation">@Document</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PersonRepository 引用 Person，它使用 JPA @Entity 注解进行标记，因此这个 Repository 显然属于 Spring Data JPA。 UserRepository 引用 User，它使用 Spring Data MongoDB 的 @Document 注解进行标记。</p><p>以下错误示例显示了一个使用带有混合注解的实体类的 Repository</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">JpaPersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MongoDBPersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>

<span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Document</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此示例中的实体类同时使用了 JPA 和 Spring Data MongoDB 的注解。示例中定义了两个 Repository：JpaPersonRepository 和 MongoDBPersonRepository。 一个用于 JPA，另一个用于 MongoDB。 Spring Data 不再能够区分 Repository，这会导致未定义的行为。</p><p>区分 Repository 的最后一种方法是确定 Repository 扫描 package 的范围。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableJpaRepositories</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.acme.repositories.jpa&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableMongoRepositories</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;com.acme.repositories.mongo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Configuration</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义查询方法" tabindex="-1"><a class="header-anchor" href="#定义查询方法" aria-hidden="true">#</a> 定义查询方法</h2><p>Repository 代理有两种方法可以从方法名称派生特定于存储的查询：</p><ul><li>通过直接从方法名称派生查询。</li><li>通过使用手动定义的查询。</li></ul><p>可用选项取决于实际存储。但是，必须有一个策略来决定创建什么实际查询。</p><h3 id="查询策略" tabindex="-1"><a class="header-anchor" href="#查询策略" aria-hidden="true">#</a> 查询策略</h3><p>以下策略可用于Repository 基础结构来解析查询。 对于 Java 配置，您可以使用 EnableJpaRepositories 注释的 queryLookupStrategy 属性。 特定数据存储可能不支持某些策略。</p><ul><li><code>CREATE</code> 尝试从查询方法名称构造特定存储的查询。</li><li><code>USE_DECLARED_QUERY</code> 尝试查找已声明的查询，如果找不到则抛出异常。</li><li><code>CREATE_IF_NOT_FOUND</code> （默认）结合了 <code>CREATE</code> 和 <code>USE_DECLARED_QUERY</code>。</li></ul><h3 id="查询创建" tabindex="-1"><a class="header-anchor" href="#查询创建" aria-hidden="true">#</a> 查询创建</h3><p>Spring Data 中有一套内置的查询构建器机制，可以自动映射符合命名和参数规则的方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">PersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByEmailAddressAndLastname</span><span class="token punctuation">(</span><span class="token class-name">EmailAddress</span> emailAddress<span class="token punctuation">,</span> <span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Enables the distinct flag for the query</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findDistinctPeopleByLastnameOrFirstname</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">,</span> <span class="token class-name">String</span> firstname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findPeopleDistinctByLastnameOrFirstname</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">,</span> <span class="token class-name">String</span> firstname<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Enabling ignoring case for an individual property</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByLastnameIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Enabling ignoring case for all suitable properties</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByLastnameAndFirstnameAllIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">,</span> <span class="token class-name">String</span> firstname<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Enabling static ORDER BY for a query</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByLastnameOrderByFirstnameAsc</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByLastnameOrderByFirstnameDesc</span><span class="token punctuation">(</span><span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析查询方法名称分为主语和谓语。第一部分 (find…By, exists…By) 定义查询的主语，第二部分构成谓词。 主语可以包含更多的表达。 <code>find</code>（或其他引入关键字）和 <code>By</code> 之间的任何文本都被认为是描述性的，除非使用其中一个结果限制关键字，例如 <code>Distinct</code> 在要创建的查询上设置不同的标志或 <code>Top</code>/<code>First</code> 限制查询结果。</p>`,42),y=s("p",null,"参考：",-1),b={href:"https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#appendix.query.method.subject",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#appendix.query.method.predicate",target:"_blank",rel:"noopener noreferrer"},R=t('<h2 id="创建-repository-实例" tabindex="-1"><a class="header-anchor" href="#创建-repository-实例" aria-hidden="true">#</a> 创建 Repository 实例</h2><h2 id="自定义-repository-实现" tabindex="-1"><a class="header-anchor" href="#自定义-repository-实现" aria-hidden="true">#</a> 自定义 Repository 实现</h2><h2 id="spring-data-扩展" tabindex="-1"><a class="header-anchor" href="#spring-data-扩展" aria-hidden="true">#</a> Spring Data 扩展</h2><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),f={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/redis/redis",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/spring-projects/spring-data-redis",target:"_blank",rel:"noopener noreferrer"},S={href:"https://docs.spring.io/spring-data/redis/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/spring-projects/spring-data-examples/",target:"_blank",rel:"noopener noreferrer"};function j(w,L){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,s("ol",null,[u,s("li",null,[s("p",null,[n("使用 "),s("a",d,[n("JavaConfig"),e(a)]),n(" 或 "),s("a",k,[n("XML 配置"),e(a)]),n("为这些接口创建代理实例")]),m]),v]),g,s("blockquote",null,[y,s("p",null,[s("a",b,[n("Spring Data 支持的查询主语关键词"),e(a)])]),s("p",null,[s("a",h,[n("Spring Data 支持的查询谓语关键词"),e(a)])])]),R,s("ul",null,[s("li",null,[s("a",f,[n("Redis 官网"),e(a)])]),s("li",null,[s("a",D,[n("Redis Github"),e(a)])]),s("li",null,[s("a",_,[n("spring-data-redis Github"),e(a)])]),s("li",null,[s("a",S,[n("Spring Data Redis 官方文档"),e(a)])]),s("li",null,[s("a",x,[n("Spring Data 官方示例"),e(a)])])])])}const C=p(l,[["render",j],["__file","20.SpringData综合.html.vue"]]);export{C as default};
