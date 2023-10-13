import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as d,a,b as n,d as e,e as s}from"./app-dc48b2dc.js";const o={},c=s('<h1 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池" aria-hidden="true">#</a> 数据库连接池</h1><blockquote><p>数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个；释放空闲时间超过最大空闲时间的数据库连接来避免因为没有释放数据库连接而引起的数据库连接遗漏。这项技术能明显提高对数据库操作的性能。——摘自百度百科</p></blockquote><h2 id="什么是数据库连接池" tabindex="-1"><a class="header-anchor" href="#什么是数据库连接池" aria-hidden="true">#</a> 什么是数据库连接池</h2><p>数据库连接是一种关键的有限的昂贵的资源，这一点在多用户的网页应用程序中体现得尤为突出。 一个数据库连接对象均对应一个物理数据库连接，每次操作都打开一个物理连接，使用完都关闭连接，这样造成系统的 性能低下。 数据库连接池的解决方案是在应用程序启动时建立足够的数据库连接，并讲这些连接组成一个连接池(简单说：在一个“池”里放了好多半成品的数据库联接对象)，由应用程序动态地对池中的连接进行申请、使用和释放。对于多于连接池中连接数的并发请求，应该在请求队列中排队等待。并且应用程序可以根据池中连接的使用率，动态增加或减少池中的连接数。 连接池技术尽可能多地重用了消耗内存地资源，大大节省了内存，提高了服务器地服务效率，能够支持更多的客户服务。通过使用连接池，将大大提高程序运行效率，同时，我们可以通过其自身的管理机制来监视数据库连接的数量、使用情况等。</p><h2 id="为什么需要数据库连接池" tabindex="-1"><a class="header-anchor" href="#为什么需要数据库连接池" aria-hidden="true">#</a> 为什么需要数据库连接池</h2><h3 id="不使用数据库连接池" tabindex="-1"><a class="header-anchor" href="#不使用数据库连接池" aria-hidden="true">#</a> 不使用数据库连接池</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220921231353.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不使用数据库连接池的<strong>步骤</strong>：</p><ol><li>TCP 建立连接的三次握手</li><li>MySQL 认证的三次握手</li><li>真正的 SQL 执行</li><li>MySQL 的关闭</li><li>TCP 的四次握手关闭</li></ol><p>不使用数据库连接池的特性：</p><ul><li><strong>优点</strong>：实现简单</li><li><strong>缺点</strong>： <ul><li>网络 IO 较多</li><li>数据库的负载较高</li><li>响应时间较长及 QPS 较低</li><li>应用频繁的创建连接和关闭连接，导致临时对象较多，GC 频繁</li><li>在关闭连接后，会出现大量 TIME_WAIT 的 TCP 状态（在 2 个 MSL 之后关闭）</li></ul></li></ul><h3 id="使用数据库连接池" tabindex="-1"><a class="header-anchor" href="#使用数据库连接池" aria-hidden="true">#</a> 使用数据库连接池</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20220921231500.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用数据库连接池的步骤：只有第一次访问的时候，需要建立连接。 但是之后的访问，均会<strong>复用</strong>之前创建的连接，直接执行 SQL 语句。</p><p>使用数据库连接池的<strong>优点</strong>：</p><ul><li>减少了网络开销</li><li>系统的性能会有一个实质的提升</li><li>没有了 TIME_WAIT 状态</li></ul><h2 id="数据库连接池如何工作" tabindex="-1"><a class="header-anchor" href="#数据库连接池如何工作" aria-hidden="true">#</a> 数据库连接池如何工作</h2><p>数据库连接池工作的核心在于以下几点：</p><ol><li><p><strong>创建连接池</strong>：与线程池等池化对象类似，数据库连接池会在进程启动之初，根据配置初始化，并在池中创建了几个连接对象，以便使用时能从连接池中获取。连接池中的连接不能随意创建和关闭，以避免创建、关闭所带来的系统开销。</p></li><li><p><strong>使用、管理连接池中</strong>：连接池管理策略是连接池机制的核心，连接池内连接的分配和释放对系统的性能有很大的影响。合理的策略可以保证数据库连接的有效复用，避免频繁的建立、释放连接所带来的系统资源开销。通常，数据库连接池的管理策略如下：</p><ol><li>当请求数据库连接时，首先查看连接池中是否有空闲连接。</li><li>如果存在空闲连接，则将连接分配给客户使用。</li><li>如果没有空闲连接，则查看当前所开的连接数是否已经达到最大连接数。若未达到，就重新创建一个连接，并分配给请求的客户；如果达到，就按设定的最大等待时间进行等待，若超出最大等待时间，则抛出异常给客户。</li><li>当客户释放数据库连接时，先判断该连接的引用次数是否超过了规定值。如果超过，就从连接池中删除该连接；否则保留为其他客户服务。</li></ol></li><li><p><strong>关闭连接池</strong>：当应用程序退出时，关闭连接池中所有的连接，释放连接池相关的资源，该过程正好与创建相反。</p></li></ol><h2 id="数据库连接池的核心参数" tabindex="-1"><a class="header-anchor" href="#数据库连接池的核心参数" aria-hidden="true">#</a> 数据库连接池的核心参数</h2><p>使用数据库连接池，需要为其配置一些参数，以控制其工作。</p><p>通常，数据库连接池都会包含以下核心参数：</p><ul><li><strong>最小连接数</strong>：是连接池一直保持的数据库连接,所以如果应用程序对数据库连接的使用量不大,将会有大量的数据库连接资源被浪费.</li><li><strong>最大连接数</strong>：是连接池能申请的最大连接数,如果数据库连接请求超过次数,后面的数据库连接请求将被加入到等待队列中,这会影响以后的数据库操作</li><li>最大空闲时间</li><li>获取连接超时时间</li><li>超时重试连接次数</li></ul><h2 id="数据库连接池的问题" tabindex="-1"><a class="header-anchor" href="#数据库连接池的问题" aria-hidden="true">#</a> 数据库连接池的问题</h2><p><strong>并发问题</strong>：为了保证连接管理服务具有最大的通用性，必须考虑多线程环境，即并发问题。</p><p><strong>事务处理</strong>：我们知道，事务具有原子性，此时要求对数据库的操作符合“ALL-OR-NOTHING”原则,即对于一组 SQL 语句要么全做，要么全不做。我们知道当 2 个线程共用一个连接 Connection 对象，而且各自都有自己的事务要处理时候，对于连接池是一个很头疼的问题，因为即使 Connection 类提供了相应的事务支持，可是我们仍然不能确定那个数据库操作是对应那个事务的，这是由于我们有２个线程都在进行事务操作而引起的。为此我们可以使用每一个事务独占一个连接来实现，虽然这种方法有点浪费连接池资源但是可以大大降低事务管理的复杂性。</p><p><strong>连接池的分配与释放</strong>：连接池的分配与释放，对系统的性能有很大的影响。合理的分配与释放，可以提高连接的复用度，从而降低建立新连接的开销，同时还可以加快用户的访问速度。 对于连接的管理可使用一个 List。即把已经创建的连接都放入 List 中去统一管理。每当用户请求一个连接时，系统检查这个 List 中有没有可以分配的连接。如果有就把那个最合适的连接分配给他；如果没有就抛出一个异常给用户。</p><p><strong>连接池的配置与维护</strong>：连接池中到底应该放置多少连接，才能使系统的性能最佳？系统可采取设置最小连接数（minConnection）和最大连接数（maxConnection）等参数来控制连接池中的连接。比方说，最小连接数是系统启动时连接池所创建的连接数。如果创建过多，则系统启动就慢，但创建后系统的响应速度会很快；如果创建过少，则系统启动的很快，响应起来却慢。这样，可以在开发时，设置较小的最小连接数，开发起来会快，而在系统实际使用时设置较大的，因为这样对访问客户来说速度会快些。最大连接数是连接池中允许连接的最大数目，具体设置多少，要看系统的访问量，可通过软件需求上得到。 如何确保连接池中的最小连接数呢？有动态和静态两种策略。动态即每隔一定时间就对连接池进行检测，如果发现连接数量小于最小连接数，则补充相应数量的新连接,以保证连接池的正常运转。静态是发现空闲连接不够时再去检查。</p><h2 id="数据库连接池技术选型" tabindex="-1"><a class="header-anchor" href="#数据库连接池技术选型" aria-hidden="true">#</a> 数据库连接池技术选型</h2><p>常见的数据库连接池：</p>',30),p={href:"https://github.com/brettwooldridge/HikariCP",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/apache/druid",target:"_blank",rel:"noopener noreferrer"},m={href:"https://commons.apache.org/proper/commons-dbcp/",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"commons-dbcp2",-1),v=a("code",null,"commons-pool2",-1),h={href:"https://github.com/swaldman/c3p0",target:"_blank",rel:"noopener noreferrer"},g=a("li",null,"Tomcat-jdbc：Tomcat 在 7.0 以前使用 DBCP 做为连接池组件，从 7.0 后新增了 Tomcat jdbc pool 模块，基于 Tomcat JULI，使用 Tomcat 日志框架，完全兼容 dbcp，通过异步方式获取连接，支持高并发应用环境，超级简单核心文件只有 8 个，支持 JMX，支持 XA Connection。",-1),b={href:"https://github.com/alibaba/druid/wiki/Druid%E8%BF%9E%E6%8E%A5%E6%B1%A0%E4%BB%8B%E7%BB%8D%EF%BC%89%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},_=s(`<table><thead><tr><th>功能类别</th><th>功能</th><th>Druid</th><th>HikariCP</th><th>DBCP</th><th>Tomcat-jdbc</th><th>C3P0</th></tr></thead><tbody><tr><td>性能</td><td>PSCache</td><td>是</td><td>否</td><td>是</td><td>是</td><td>是</td></tr><tr><td>LRU</td><td>是</td><td>否</td><td>是</td><td>是</td><td>是</td><td></td></tr><tr><td>SLB 负载均衡支持</td><td>是</td><td>否</td><td>否</td><td>否</td><td>否</td><td></td></tr><tr><td>稳定性</td><td>ExceptionSorter</td><td>是</td><td>否</td><td>否</td><td>否</td><td>否</td></tr><tr><td>扩展</td><td>扩展</td><td>Filter</td><td></td><td></td><td>JdbcIntercepter</td><td></td></tr><tr><td>监控</td><td>监控方式</td><td>jmx/log/http</td><td>jmx/metrics</td><td>jmx</td><td>jmx</td><td>jmx</td></tr><tr><td>支持 SQL 级监控</td><td>是</td><td>否</td><td>否</td><td>否</td><td>否</td><td></td></tr><tr><td>Spring/Web 关联监控</td><td>是</td><td>否</td><td>否</td><td>否</td><td>否</td><td></td></tr><tr><td></td><td>诊断支持</td><td>LogFilter</td><td>否</td><td>否</td><td>否</td><td>否</td></tr><tr><td>连接泄露诊断</td><td>logAbandoned</td><td>否</td><td>否</td><td>否</td><td>否</td><td></td></tr><tr><td>安全</td><td>SQL 防注入</td><td>是</td><td>无</td><td>无</td><td>无</td><td>无</td></tr><tr><td>支持配置加密</td><td>是</td><td>否</td><td>否</td><td>否</td><td>否</td><td></td></tr></tbody></table><p>从数据库连接池最重要的性能角度来看：HikariCP 应该性能最好；Druid 也不错，并且有更多、更久的生产实践，更为可靠；而其他常见的数据库连接池性能远远不如。</p><p>从功能角度来看：Druid 功能最全面，除基本的数据库连接池能力以外，还支持 sql 级监控、扩展、SQL 防注入以及监控等功能。</p><p>综合来看：HikariCP 是 Spring Boot 首选数据库连接池，对于 Spring Boot 项目来说，无疑适配性最好。而非 Spring Boot 项目，可以优先考虑 Druid，在国内有大规模应用，中文社区支持良好。</p><h2 id="hikaricp" tabindex="-1"><a class="header-anchor" href="#hikaricp" aria-hidden="true">#</a> HikariCP</h2><p>HiKariCP 号称是跑的最快的连接池，并且是 SpringBoot 框架的默认连接池。</p><p>HiKariCP 为了提升性能，做了很多细节上的优化，例如：</p><ul><li>使用 FastList 替代 ArrayList，通过初始化的默认值，减少了越界检查的操作</li><li>优化并精简了字节码，通过使用 Javassist，减少了动态代理的性能损耗，比如使用 invokestatic 指令代替 invokevirtual 指令</li><li>实现了无锁的 ConcurrentBag，减少了并发场景下的锁竞争</li></ul><p>HikariCP 关键配置：</p><ul><li><code>maximum-pool-size</code>：池中最大连接数（包括空闲和正在使用的连接）。默认值是 10，这个一般预估应用的最大连接数，后期根据监测得到一个最大值的一个平均值。要知道，最大连接并不是越多越好，一个 connection 会占用系统的带宽和存储。但是 当连接池没有空闲连接并且已经到达最大值，新来的连接池请求（HikariPool#getConnection）会被阻塞直到<code>connectionTimeout</code>（毫秒），超时后便抛出 SQLException。</li><li><code>minimum-idle</code>：池中最小空闲连接数量。默认值 10，小于池中最大连接数，一般根据系统大部分情况下的数据库连接情况取一个平均值。Hikari 会尽可能、尽快地将空闲连接数维持在这个数量上。如果为了获得最佳性能和对峰值需求的响应能力，我们也不妨让他和最大连接数保持一致，使得 HikariCP 成为一个固定大小的数据库连接池。</li><li><code>connection-timeout</code>：连接超时时间。默认值为 30s，可以接收的最小超时时间为 250ms。但是连接池请求也可以自定义超时时间（com.zaxxer.hikari.pool.HikariPool#getConnection(long)）。</li><li><code>idle-timeout</code>：空闲连接存活最大时间，默认 600000（十分钟）</li><li><code>max-lifetime</code>：连接池中连接的最大生命周期。当连接一致处于闲置状态时，超过 8 小时数据库会主动断开连接。为了防止大量的同一时间处于空闲连接因为数据库方的闲置超时策略断开连接（可以理解为连接雪崩），一般将这个值设置的比数据库的“闲置超时时间”小几秒，以便这些连接断开后，HikariCP 能迅速的创建新一轮的连接。</li><li><code>pool-name</code>：连接池的名字。一般会出现在日志和 JMX 控制台中。默认值：auto-genenrated。建议取一个合适的名字，便于监控。</li><li><code>auto-commit</code>：是否自动提交池中返回的连接。默认值为 true。一般是有必要自动提交上一个连接中的事物的。如果为 false，那么就需要应用层手动提交事物。</li></ul><p>参考配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 连接池名称</span>
<span class="token key attr-name">spring.datasource.hikari.pool-name</span> <span class="token punctuation">=</span> <span class="token value attr-value">SpringTutorialHikariPool</span>
<span class="token comment"># 最大连接数，小于等于 0 会被重置为默认值 10；大于零小于 1 会被重置为 minimum-idle 的值</span>
<span class="token key attr-name">spring.datasource.hikari.maximum-pool-size</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token comment"># 最小空闲连接，默认值10，小于 0 或大于 maximum-pool-size，都会重置为 maximum-pool-size</span>
<span class="token key attr-name">spring.datasource.hikari.minimum-idle</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token comment"># 连接超时时间（单位：毫秒），小于 250 毫秒，会被重置为默认值 30 秒</span>
<span class="token key attr-name">spring.datasource.hikari.connection-timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">60000</span>
<span class="token comment"># 空闲连接超时时间，默认值 600000（10分钟），大于等于 max-lifetime 且 max-lifetime&gt;0，会被重置为0；不等于 0 且小于 10 秒，会被重置为 10 秒</span>
<span class="token comment"># 只有空闲连接数大于最大连接数且空闲时间超过该值，才会被释放</span>
<span class="token key attr-name">spring.datasource.hikari.idle-timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">600000</span>
<span class="token comment"># 连接最大存活时间，不等于 0 且小于 30 秒，会被重置为默认值 30 分钟。该值应该比数据库所设置的超时时间短</span>
<span class="token key attr-name">spring.datasource.hikari.max-lifetime</span> <span class="token punctuation">=</span> <span class="token value attr-value">1800000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h2><p>Druid 是阿里巴巴开源的数据库连接池。Druid 连接池为监控而生，内置强大的监控功能，监控特性不影响性能。功能强大，能防 SQL 注入，内置 Loging 能诊断 Hack 应用行为。</p><p>Druid 关键配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 数据库访问配置</span>
<span class="token comment"># 主数据源，默认的</span>
<span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/druid</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>

<span class="token comment"># 下面为连接池的补充设置，应用到上面所有数据源中</span>
<span class="token comment"># 初始化大小，最小，最大</span>
<span class="token key attr-name">spring.datasource.initialSize</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.datasource.minIdle</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.datasource.maxActive</span><span class="token punctuation">=</span><span class="token value attr-value">20</span>
<span class="token comment"># 配置获取连接等待超时的时间</span>
<span class="token key attr-name">spring.datasource.maxWait</span><span class="token punctuation">=</span><span class="token value attr-value">60000</span>
<span class="token comment"># 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒</span>
<span class="token key attr-name">spring.datasource.timeBetweenEvictionRunsMillis</span><span class="token punctuation">=</span><span class="token value attr-value">60000</span>
<span class="token comment"># 配置一个连接在池中最小生存的时间，单位是毫秒</span>
<span class="token key attr-name">spring.datasource.minEvictableIdleTimeMillis</span><span class="token punctuation">=</span><span class="token value attr-value">300000</span>
<span class="token key attr-name">spring.datasource.validationQuery</span><span class="token punctuation">=</span><span class="token value attr-value">SELECT 1 FROM DUAL</span>
<span class="token key attr-name">spring.datasource.testWhileIdle</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.datasource.testOnBorrow</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.datasource.testOnReturn</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># 打开PSCache，并且指定每个连接上PSCache的大小</span>
<span class="token key attr-name">spring.datasource.poolPreparedStatements</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.datasource.maxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">=</span><span class="token value attr-value">20</span>
<span class="token comment"># 配置监控统计拦截的filters，去掉后监控界面sql无法统计，&#39;wall&#39;用于防火墙</span>
<span class="token key attr-name">spring.datasource.filters</span><span class="token punctuation">=</span><span class="token value attr-value">stat,wall,log4j</span>
<span class="token comment"># 通过connectProperties属性来打开mergeSql功能；慢SQL记录</span>
<span class="token key attr-name">spring.datasource.connectionProperties</span><span class="token punctuation">=</span><span class="token value attr-value">druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000</span>
<span class="token comment"># 合并多个DruidDataSource的监控数据</span>
<span class="token comment">#spring.datasource.useGlobalDataSourceStat=true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,17),f={href:"https://blog.csdn.net/crankz/article/details/82874158",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s?__biz=MzI3MzEzMDI1OQ==&mid=2651814835&idx=1&sn=cb775d3926ce39d12fa420a292c1f83d&scene=0#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/brettwooldridge/HikariCP",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/apache/druid",target:"_blank",rel:"noopener noreferrer"};function y(P,D){const t=r("ExternalLinkIcon");return l(),d("div",null,[c,a("ul",null,[a("li",null,[a("a",p,[n("HikariCP"),e(t)]),n("：HiKariCP 号称是跑的最快的连接池，并且是 SpringBoot 框架的默认连接池。")]),a("li",null,[a("a",u,[n("Druid"),e(t)]),n("：Druid 是阿里巴巴开源的数据库连接池。Druid 内置强大的监控功能，监控特性不影响性能。功能强大，能防 SQL 注入，内置 Loging 能诊断 Hack 应用行为。")]),a("li",null,[a("a",m,[n("DBCP"),e(t)]),n("： 由 Apache 开发的一个 Java 数据库连接池。"),k,n(" 基于 "),v,n(" 来实现底层的对象池机制。单线程，性能较差，适用于小型系统。官方自 2021 年后没有再更新。")]),a("li",null,[a("a",h,[n("C3P0"),e(t)]),n("：开源的 JDBC 连接池，实现了数据源和 JNDI 绑定，支持 JDBC3 规范和 JDBC2 的标准扩展。单线程，性能较差，适用于小型系统。官方自 2019 年后再没有更新。")]),g]),a("p",null,[n("来自 Druid 的竞品对比（"),a("a",b,[n("https://github.com/alibaba/druid/wiki/Druid连接池介绍）："),e(t)])]),_,a("ul",null,[a("li",null,[a("a",f,[n("数据库连接池学习笔记（一）：原理介绍+常用连接池介绍"),e(t)])]),a("li",null,[a("a",x,[n("高性能数据库连接池的内幕"),e(t)])]),a("li",null,[a("a",C,[n("HikariCP"),e(t)])]),a("li",null,[a("a",S,[n("druid"),e(t)])])])])}const E=i(o,[["render",y],["__file","01.数据库连接池.html.vue"]]);export{E as default};
