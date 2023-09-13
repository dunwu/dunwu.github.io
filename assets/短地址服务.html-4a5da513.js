import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,b as e,d as t,e as a}from"./app-ee97b13a.js";const p={},d={id:"设计-pastebin-com-或者-bit-ly",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#设计-pastebin-com-或者-bit-ly","aria-hidden":"true"},"#",-1),c={href:"http://Pastebin.com",target:"_blank",rel:"noopener noreferrer"},h={href:"http://Bit.ly",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README-zh-Hans.md",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E4%B8%BB%E9%A2%98%E7%9A%84%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},b={href:"http://Bit.ly",target:"_blank",rel:"noopener noreferrer"},g=a('<h2 id="步骤一、需求分析" tabindex="-1"><a class="header-anchor" href="#步骤一、需求分析" aria-hidden="true">#</a> 步骤一、需求分析</h2><blockquote><p>收集这个问题的需求和范畴。<br> 问相关问题来明确用例和约束。<br> 讨论一些假设。</p></blockquote><h3 id="用例" tabindex="-1"><a class="header-anchor" href="#用例" aria-hidden="true">#</a> 用例</h3><h4 id="问题范围" tabindex="-1"><a class="header-anchor" href="#问题范围" aria-hidden="true">#</a> 问题范围</h4><ul><li><strong>用户</strong> 输入一段文本，然后得到一个随机生成的链接 <ul><li>过期设置 <ul><li>默认的设置是不会过期的</li><li>可以选择设置一个过期的时间</li></ul></li></ul></li><li><strong>用户</strong> 输入一个 paste 的 url 后，可以看到它存储的内容</li><li><strong>用户</strong> 是匿名的</li><li><strong>Service</strong> 跟踪页面分析 <ul><li>一个月的访问统计</li></ul></li><li><strong>Service</strong> 删除过期的 pastes</li><li><strong>Service</strong> 需要高可用</li></ul><h4 id="超出范畴的用例" tabindex="-1"><a class="header-anchor" href="#超出范畴的用例" aria-hidden="true">#</a> 超出范畴的用例</h4><ul><li><strong>用户</strong> 可以注册一个账户 <ul><li><strong>用户</strong> 通过验证邮箱</li></ul></li><li><strong>用户</strong> 可以用注册的账户登录 <ul><li><strong>用户</strong> 可以编辑文档</li></ul></li><li><strong>用户</strong> 可以设置可见性</li><li><strong>用户</strong> 可以设置短链接</li></ul><h3 id="约束和假设" tabindex="-1"><a class="header-anchor" href="#约束和假设" aria-hidden="true">#</a> 约束和假设</h3><h4 id="状态假设" tabindex="-1"><a class="header-anchor" href="#状态假设" aria-hidden="true">#</a> 状态假设</h4><ul><li>访问流量不是均匀分布的</li><li>打开一个短链接应该是很快的</li><li>pastes 只能是文本</li><li>页面访问分析数据可以不用实时</li><li>一千万的用户量</li><li>每个月一千万的 paste 写入量</li><li>每个月一亿的 paste 读取量</li><li>读写比例在 10:1</li></ul><h4 id="性能估算" tabindex="-1"><a class="header-anchor" href="#性能估算" aria-hidden="true">#</a> 性能估算</h4><ul><li>每个 paste 的大小 <ul><li>每一个 paste 1 KB</li><li><code>shortlink</code> - 7 bytes</li><li><code>expiration_length_in_minutes</code> - 4 bytes</li><li><code>created_at</code> - 5 bytes</li><li><code>paste_path</code> - 255 bytes</li><li>总共 = ~1.27 KB</li></ul></li><li>每个月新的 paste 内容在 12.7GB <ul><li>(1.27 * 10000000)KB / 月的 paste</li><li>三年内将近 450GB 的新 paste 内容</li><li>三年内 3.6 亿短链接</li><li>假设大部分都是新的 paste，而不是需要更新已存在的 paste</li></ul></li><li>平均 4paste/s 的写入速度</li><li>平均 40paste/s 的读取速度</li></ul><p>简单的转换指南:</p><ul><li>2.5 百万 req/s</li><li>1 req/s = 2.5 百万 req/month</li><li>40 req/s = 1 亿 req/month</li><li>400 req/s = 10 亿 req/month</li></ul><h2 id="步骤二、顶层设计" tabindex="-1"><a class="header-anchor" href="#步骤二、顶层设计" aria-hidden="true">#</a> 步骤二、顶层设计</h2><blockquote><p>概述一个包括所有重要的组件的高层次设计</p></blockquote><figure><img src="http://i.imgur.com/BKsBnmG.png" alt="Imgur" tabindex="0" loading="lazy"><figcaption>Imgur</figcaption></figure><h2 id="步骤三、核心组件设计" tabindex="-1"><a class="header-anchor" href="#步骤三、核心组件设计" aria-hidden="true">#</a> 步骤三、核心组件设计</h2><blockquote><p>深入每一个核心组件的细节</p></blockquote><h3 id="用例-用户输入一段文本-然后得到一个随机生成的链接" tabindex="-1"><a class="header-anchor" href="#用例-用户输入一段文本-然后得到一个随机生成的链接" aria-hidden="true">#</a> 用例：用户输入一段文本，然后得到一个随机生成的链接</h3>',20),_={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9Frdbms",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"对象存储",-1),A={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E9%94%AE-%E5%80%BC%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-%E8%BF%98%E6%98%AF-nosql",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"客户端",-1),D={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86web-%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"Web 服务器",-1),q=a("<li><strong>Web 服务器</strong> 转发请求给 <strong>写接口</strong> 服务器</li><li><strong>写接口</strong> 服务器执行如下操作： <ul><li>生成一个唯一的 url <ul><li>检查这个 url 在 <strong>SQL 数据库</strong> 里面是否是唯一的</li><li>如果这个 url 不是唯一的，生成另外一个 url</li><li>如果我们支持自定义 url，我们可以使用用户提供的 url（也需要检查是否重复）</li></ul></li><li>把生成的 url 存储到 <strong>SQL 数据库</strong> 的 <code>pastes</code> 表里面</li><li>存储 paste 的内容数据到 <strong>对象存储</strong> 里面</li><li>返回生成的 url</li></ul></li>",2),R=a(`<p><strong>向面试官阐明你需要写多少代码</strong></p><p><code>pastes</code> 表可以有如下结构：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>shortlink <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
expiration_length_in_minutes <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
created_at <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
paste_path <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>shortlink<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),M=n("code",null,"shortlink",-1),H=n("code",null,"created_at",-1),z={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%BD%BF%E7%94%A8%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},x=n("sup",null,[n("a",{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数"}," 1")],-1),F=n("p",null,"为了生成唯一的 url，我们可以：",-1),C={href:"https://en.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"},S=n("strong",null,"MD5",-1),L=n("ul",null,[n("li",null,"MD5 是一个普遍用来生成一个 128-bit 长度的哈希值的一种哈希方法"),n("li",null,"MD5 是一致分布的"),n("li",null,"或者我们也可以用 MD5 哈希一个随机生成的数据")],-1),w={href:"https://www.kerstner.at/2012/07/shortening-strings-using-base-62-encoding/",target:"_blank",rel:"noopener noreferrer"},N=n("strong",null,"Base 62",-1),Q=n("li",null,[e("对于 urls，使用 Base 62 编码 "),n("code",null,"[a-zA-Z0-9]"),e(" 是比较合适的")],-1),P=n("li",null,"对于每一个原始输入只会有一个 hash 结果，Base 62 是确定的（不涉及随机性）",-1),T=n("li",null,[e("Base 64 是另外一个流行的编码方案，但是对于 urls，会因为额外的 "),n("code",null,"+"),e(" 和 "),n("code",null,"-"),e(" 字符串而产生一些问题")],-1),W={href:"http://stackoverflow.com/questions/742013/how-to-code-a-url-shortener",target:"_blank",rel:"noopener noreferrer"},I=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">base_encode</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> base<span class="token operator">=</span><span class="token number">62</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    digits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> num <span class="token operator">&gt;</span> <span class="token number">0</span>
      remainder <span class="token operator">=</span> modulo<span class="token punctuation">(</span>num<span class="token punctuation">,</span> base<span class="token punctuation">)</span>
      digits<span class="token punctuation">.</span>push<span class="token punctuation">(</span>remainder<span class="token punctuation">)</span>
      num <span class="token operator">=</span> divide<span class="token punctuation">(</span>num<span class="token punctuation">,</span> base<span class="token punctuation">)</span>
    digits <span class="token operator">=</span> digits<span class="token punctuation">.</span>reverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>取输出的前 7 个字符，结果会有 62^7 个可能的值，应该足以满足在 3 年内处理 3.6 亿个短链接的约束：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> base_encode<span class="token punctuation">(</span>md5<span class="token punctuation">(</span>ip_address<span class="token operator">+</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span>URL_LENGTH<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),G={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%A1%A8%E8%BF%B0%E6%80%A7%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BBrest",target:"_blank",rel:"noopener noreferrer"},j=n("strong",null,"REST 风格接口",-1),O=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;expiration_length_in_minutes&quot;:&quot;60&quot;, \\&quot;paste_contents&quot;:&quot;Hello World!&quot;}&#39;</span> https://pastebin.com/api/v1/paste
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Response:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;shortlink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foobar&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Y={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%BF%9C%E7%A8%8B%E8%BF%87%E7%A8%8B%E8%B0%83%E7%94%A8%E5%8D%8F%E8%AE%AErpc",target:"_blank",rel:"noopener noreferrer"},K=a(`<h3 id="用例-用户输入一个-paste-的-url-后可以看到它存储的内容" tabindex="-1"><a class="header-anchor" href="#用例-用户输入一个-paste-的-url-后可以看到它存储的内容" aria-hidden="true">#</a> 用例：用户输入一个 paste 的 url 后可以看到它存储的内容</h3><ul><li><strong>客户端</strong> 发送一个获取 paste 请求到 <strong>Web Server</strong></li><li><strong>Web Server</strong> 转发请求给 <strong>读取接口</strong> 服务器</li><li><strong>读取接口</strong> 服务器执行如下操作： <ul><li>在 <strong>SQL 数据库</strong> 检查这个生成的 url <ul><li>如果这个 url 在 <strong>SQL 数据库</strong> 里面，则从 <strong>对象存储</strong> 获取这个 paste 的内容</li><li>否则，返回一个错误页面给用户</li></ul></li></ul></li></ul><p>REST API：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://pastebin.com/api/v1/paste?shortlink<span class="token operator">=</span>foobar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Response:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;paste_contents&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:MM:SS&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;expiration_length_in_minutes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用例-服务跟踪分析页面" tabindex="-1"><a class="header-anchor" href="#用例-服务跟踪分析页面" aria-hidden="true">#</a> 用例： 服务跟踪分析页面</h3><p>因为实时分析不是必须的，所以我们可以简单的 <strong>MapReduce</strong> <strong>Web Server</strong> 的日志，用来生成点击次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">HitCounts</span><span class="token punctuation">(</span>MRJob<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">extract_url</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> line<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Extract the generated url from the log line.&quot;&quot;&quot;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">extract_year_month</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> line<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Return the year and month portions of the timestamp.&quot;&quot;&quot;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">mapper</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> _<span class="token punctuation">,</span> line<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Parse each log line, extract and transform relevant lines.

        Emit key value pairs of the form:

        (2016-01, url0), 1
        (2016-01, url0), 1
        (2016-01, url1), 1
        &quot;&quot;&quot;</span>
        url <span class="token operator">=</span> self<span class="token punctuation">.</span>extract_url<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        period <span class="token operator">=</span> self<span class="token punctuation">.</span>extract_year_month<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        <span class="token keyword">yield</span> <span class="token punctuation">(</span>period<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">reducer</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Sum values for each key.

        (2016-01, url0), 2
        (2016-01, url1), 1
        &quot;&quot;&quot;</span>
        <span class="token keyword">yield</span> key<span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用例-服务删除过期的-pastes" tabindex="-1"><a class="header-anchor" href="#用例-服务删除过期的-pastes" aria-hidden="true">#</a> 用例： 服务删除过期的 pastes</h3><p>为了删除过期的 pastes，我们可以直接搜索 <strong>SQL 数据库</strong> 中所有的过期时间比当前时间更早的记录，<br> 所有过期的记录将从这张表里面删除（或者将其标记为过期）。</p><h2 id="步骤四、扩展设计" tabindex="-1"><a class="header-anchor" href="#步骤四、扩展设计" aria-hidden="true">#</a> 步骤四、扩展设计</h2><blockquote><p>给定约束条件，识别和解决瓶颈。</p></blockquote><figure><img src="http://i.imgur.com/4edXG0T.png" alt="Imgur" tabindex="0" loading="lazy"><figcaption>Imgur</figcaption></figure><p><strong>重要提示: 不要简单的从最初的设计直接跳到最终的设计</strong></p><p>说明您将迭代地执行这样的操作：1)<strong>Benchmark/Load 测试</strong>，2)<strong>Profile</strong> 出瓶颈，3)在评估替代方案和权衡时解决瓶颈，4)重复前面，可以参考在 AWS 上设计一个可以支持百万用户的系统这个用来解决如何迭代地扩展初始设计的例子。</p><p>重要的是讨论在初始设计中可能遇到的瓶颈，以及如何解决每个瓶颈。比如，在多个 <strong>Web 服务器</strong> 上添加 <strong>负载平衡器</strong> 可以解决哪些问题？ <strong>CDN</strong> 解决哪些问题？<strong>Master-Slave Replicas</strong> 解决哪些问题? 替代方案是什么和怎么对每一个替代方案进行权衡比较？</p><p>我们将介绍一些组件来完成设计，并解决可伸缩性问题。内部的负载平衡器并不能减少杂乱。</p>`,18),U=n("strong",null,"为了避免重复的讨论",-1),V={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E4%B8%BB%E9%A2%98%E7%9A%84%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%86%85%E5%AE%B9%E5%88%86%E5%8F%91%E7%BD%91%E7%BB%9Ccdn",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%B0%B4%E5%B9%B3%E6%89%A9%E5%B1%95",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86web-%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},en={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%BA%94%E7%94%A8%E5%B1%82",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9Frdbms",target:"_blank",rel:"noopener noreferrer"},an={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%95%85%E9%9A%9C%E5%88%87%E6%8D%A2",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6",target:"_blank",rel:"noopener noreferrer"},on={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%B8%80%E8%87%B4%E6%80%A7%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%8F%AF%E7%94%A8%E6%80%A7%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},pn=a("<p><strong>分析存储数据库</strong> 可以用比如 Amazon Redshift 或者 Google BigQuery 这样的数据仓库解决方案。</p><p>一个像 Amazon S3 这样的 <strong>对象存储</strong>，可以轻松处理每月 12.7 GB 的新内容约束。</p><p>要处理 <em>平均</em> 每秒 40 读请求(峰值更高)，其中热点内容的流量应该由 <strong>内存缓存</strong> 处理，而不是数据库。<strong>内存缓存</strong> 对于处理分布不均匀的流量和流量峰值也很有用。只要副本没有陷入复制写的泥潭，<strong>SQL Read Replicas</strong> 应该能够处理缓存丢失。</p><p>对于单个 <strong>SQL Write Master-Slave</strong>，<em>平均</em> 每秒 4paste 写入 (峰值更高) 应该是可以做到的。否则，我们需要使用额外的 SQL 扩展模式:</p>",4),dn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%81%94%E5%90%88",target:"_blank",rel:"noopener noreferrer"},un={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%88%86%E7%89%87",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E9%9D%9E%E8%A7%84%E8%8C%83%E5%8C%96",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#SQL%E8%B0%83%E4%BC%98",target:"_blank",rel:"noopener noreferrer"},mn=n("p",null,[e("我们还应该考虑将一些数据移动到 "),n("strong",null,"NoSQL 数据库"),e("。")],-1),En=n("h2",{id:"额外的话题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#额外的话题","aria-hidden":"true"},"#"),e(" 额外的话题")],-1),bn=n("blockquote",null,[n("p",null,"是否更深入探讨额外主题，取决于问题的范围和面试剩余的时间。")],-1),gn=n("h3",{id:"nosql",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nosql","aria-hidden":"true"},"#"),e(" NoSQL")],-1),_n={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E9%94%AE-%E5%80%BC%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"},An={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%88%97%E5%9E%8B%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%9B%BE%E6%95%B0%E6%8D%AE%E5%BA%93",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-%E8%BF%98%E6%98%AF-nosql",target:"_blank",rel:"noopener noreferrer"},vn=n("h3",{id:"缓存",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#缓存","aria-hidden":"true"},"#"),e(" 缓存")],-1),Dn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},yn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cdn-%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},qn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#web-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},Mn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%BA%94%E7%94%A8%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},Hn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9F%A5%E8%AF%A2%E7%BA%A7%E5%88%AB%E7%9A%84%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},zn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%AF%B9%E8%B1%A1%E7%BA%A7%E5%88%AB%E7%9A%84%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%BC%93%E5%AD%98%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},Fn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%9B%B4%E5%86%99%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%9B%9E%E5%86%99%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},Sn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%88%B7%E6%96%B0",target:"_blank",rel:"noopener noreferrer"},Ln=n("h3",{id:"异步和微服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#异步和微服务","aria-hidden":"true"},"#"),e(" 异步和微服务")],-1),wn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97",target:"_blank",rel:"noopener noreferrer"},Nn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%83%8C%E5%8E%8B",target:"_blank",rel:"noopener noreferrer"},Pn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%BE%AE%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"},Tn=n("h3",{id:"通信",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通信","aria-hidden":"true"},"#"),e(" 通信")],-1),Wn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%A1%A8%E8%BF%B0%E6%80%A7%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BBrest",target:"_blank",rel:"noopener noreferrer"},In={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%BF%9C%E7%A8%8B%E8%BF%87%E7%A8%8B%E8%B0%83%E7%94%A8%E5%8D%8F%E8%AE%AErpc",target:"_blank",rel:"noopener noreferrer"},Gn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"},jn=n("h3",{id:"安全",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安全","aria-hidden":"true"},"#"),e(" 安全")],-1),On={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%AE%89%E5%85%A8",target:"_blank",rel:"noopener noreferrer"},Yn=n("h3",{id:"延迟数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#延迟数字","aria-hidden":"true"},"#"),e(" 延迟数字")],-1),Kn={href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%AF%8F%E4%B8%AA%E7%A8%8B%E5%BA%8F%E5%91%98%E9%83%BD%E5%BA%94%E8%AF%A5%E7%9F%A5%E9%81%93%E7%9A%84%E5%BB%B6%E8%BF%9F%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},Un=n("h3",{id:"持续进行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#持续进行","aria-hidden":"true"},"#"),e(" 持续进行")],-1),Vn=n("ul",null,[n("li",null,"继续对系统进行基准测试和监控，以在瓶颈出现时解决它们"),n("li",null,"扩展是一个迭代的过程")],-1);function Xn(Jn,Zn){const s=o("ExternalLinkIcon");return l(),i("div",null,[n("h1",d,[u,e(" 设计 "),n("a",c,[e("Pastebin.com"),t(s)]),e(" (或者 "),n("a",h,[e("Bit.ly"),t(s)]),e(")")]),n("blockquote",null,[n("p",null,[e("本文搬运自 "),n("a",m,[e("设计 Pastebin.com (或者 Bit.ly)"),t(s)])])]),n("p",null,[n("strong",null,[e("注意: 为了避免重复，当前文档会直接链接到"),n("a",E,[e("系统设计主题"),t(s)]),e("的相关区域，请参考链接内容以获得综合的讨论点、权衡和替代方案。")])]),n("p",null,[n("strong",null,[e("设计 "),n("a",b,[e("Bit.ly"),t(s)])]),e(" - 是一个类似的问题，区别是 pastebin 需要存储的是 paste 的内容，而不是原始的未短化的 url。")]),g,n("p",null,[e("我们可以用一个 "),n("a",_,[e("关系型数据库"),t(s)]),e("作为一个大的哈希表，用来把生成的 url 映射到一个包含 paste 文件的文件服务器和路径上。")]),n("p",null,[e("为了避免托管一个文件服务器，我们可以用一个托管的"),k,e("，比如 Amazon 的 S3 或者"),n("a",A,[e("NoSQL 文档类型存储"),t(s)]),e("。")]),n("p",null,[e("作为一个大的哈希表的关系型数据库的替代方案，我们可以用"),n("a",B,[e("NoSQL 键值存储"),t(s)]),e("。我们需要讨论"),n("a",f,[e("选择 SQL 或 NoSQL 之间的权衡"),t(s)]),e("。下面的讨论是使用关系型数据库方法。")]),n("ul",null,[n("li",null,[v,e(" 发送一个创建 paste 的请求到作为一个"),n("a",D,[e("反向代理"),t(s)]),e("启动的 "),y,e("。")]),q]),R,n("p",null,[e("我们将在 "),M,e(" 字段和 "),H,e(" 字段上创建一个"),n("a",z,[e("数据库索引"),t(s)]),e("，用来提高查询的速度（避免因为扫描全表导致的长时间查询）并将数据保存在内存中，从内存里面顺序读取 1MB 的数据需要大概 250 微秒，而从 SSD 上读取则需要花费 4 倍的时间，从硬盘上则需要花费 80 倍的时间。"),x]),F,n("ul",null,[n("li",null,[e("使用 "),n("a",C,[S,t(s)]),e(" 来哈希用户的 IP 地址 + 时间戳 "),L]),n("li",null,[e("用 "),n("a",w,[N,t(s)]),e(" 编码 MD5 哈希值 "),n("ul",null,[Q,P,T,n("li",null,[e("以下 "),n("a",W,[e("Base 62 伪代码"),t(s)]),e(" 执行的时间复杂度是 O(k)，k 是数字的数量 = 7：")])])])]),I,n("p",null,[e("我们将会用一个公开的 "),n("a",G,[j,t(s)]),e("：")]),O,n("p",null,[e("用于内部通信，我们可以用 "),n("a",Y,[e("RPC"),t(s)]),e("。")]),K,n("p",null,[U,e("， 参考以下"),n("a",V,[e("系统设计主题"),t(s)]),e("获取主要讨论要点、权衡和替代方案：")]),n("ul",null,[n("li",null,[n("a",X,[e("DNS"),t(s)])]),n("li",null,[n("a",J,[e("CDN"),t(s)])]),n("li",null,[n("a",Z,[e("负载均衡器"),t(s)])]),n("li",null,[n("a",$,[e("水平扩展"),t(s)])]),n("li",null,[n("a",nn,[e("反向代理（web 服务器）"),t(s)])]),n("li",null,[n("a",en,[e("应用层"),t(s)])]),n("li",null,[n("a",sn,[e("缓存"),t(s)])]),n("li",null,[n("a",tn,[e("关系型数据库管理系统 (RDBMS)"),t(s)])]),n("li",null,[n("a",an,[e("SQL write master-slave failover"),t(s)])]),n("li",null,[n("a",rn,[e("主从复制"),t(s)])]),n("li",null,[n("a",on,[e("一致性模式"),t(s)])]),n("li",null,[n("a",ln,[e("可用性模式"),t(s)])])]),pn,n("ul",null,[n("li",null,[n("a",dn,[e("联合"),t(s)])]),n("li",null,[n("a",un,[e("分片"),t(s)])]),n("li",null,[n("a",cn,[e("非规范化"),t(s)])]),n("li",null,[n("a",hn,[e("SQL 调优"),t(s)])])]),mn,En,bn,gn,n("ul",null,[n("li",null,[n("a",_n,[e("键值存储"),t(s)])]),n("li",null,[n("a",kn,[e("文档存储"),t(s)])]),n("li",null,[n("a",An,[e("列型存储"),t(s)])]),n("li",null,[n("a",Bn,[e("图数据库"),t(s)])]),n("li",null,[n("a",fn,[e("sql 还是 nosql"),t(s)])])]),vn,n("ul",null,[n("li",null,[e("在哪缓存 "),n("ul",null,[n("li",null,[n("a",Dn,[e("客户端缓存"),t(s)])]),n("li",null,[n("a",yn,[e("CDN 缓存"),t(s)])]),n("li",null,[n("a",qn,[e("Web 服务器缓存"),t(s)])]),n("li",null,[n("a",Rn,[e("数据库缓存"),t(s)])]),n("li",null,[n("a",Mn,[e("应用缓存"),t(s)])])])]),n("li",null,[e("缓存什么 "),n("ul",null,[n("li",null,[n("a",Hn,[e("数据库查询级别的缓存"),t(s)])]),n("li",null,[n("a",zn,[e("对象级别的缓存"),t(s)])])])]),n("li",null,[e("何时更新缓存 "),n("ul",null,[n("li",null,[n("a",xn,[e("缓存模式"),t(s)])]),n("li",null,[n("a",Fn,[e("直写模式"),t(s)])]),n("li",null,[n("a",Cn,[e("回写模式"),t(s)])]),n("li",null,[n("a",Sn,[e("刷新"),t(s)])])])])]),Ln,n("ul",null,[n("li",null,[n("a",wn,[e("消息队列"),t(s)])]),n("li",null,[n("a",Nn,[e("任务队列"),t(s)])]),n("li",null,[n("a",Qn,[e("背压"),t(s)])]),n("li",null,[n("a",Pn,[e("微服务"),t(s)])])]),Tn,n("ul",null,[n("li",null,[e("讨论权衡: "),n("ul",null,[n("li",null,[e("跟客户端之间的外部通信 - "),n("a",Wn,[e("HTTP APIs following REST"),t(s)])]),n("li",null,[e("内部通信 - "),n("a",In,[e("RPC"),t(s)])])])]),n("li",null,[n("a",Gn,[e("服务发现"),t(s)])])]),jn,n("p",null,[e("参考"),n("a",On,[e("安全"),t(s)]),e("。")]),Yn,n("p",null,[e("见"),n("a",Kn,[e("每个程序员都应该知道的延迟数"),t(s)]),e("。")]),Un,Vn])}const ee=r(p,[["render",Xn],["__file","短地址服务.html.vue"]]);export{ee as default};
