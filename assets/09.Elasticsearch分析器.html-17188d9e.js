import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as l,a as n,b as s,d as t,e}from"./app-2793f0f0.js";const c={},r=e(`<h1 id="elasticsearch-分析器" tabindex="-1"><a class="header-anchor" href="#elasticsearch-分析器" aria-hidden="true">#</a> Elasticsearch 分析器</h1><p>文本分析是把全文本转换为一系列单词（term/token）的过程，也叫分词。在 Elasticsearch 中，分词是通过 analyzer（分析器）来完成的，不管是索引还是搜索，都需要使用 analyzer（分析器）。分析器，分为<strong>内置分析器</strong>和<strong>自定义的分析器</strong>。</p><p>分析器可以进一步细分为<strong>字符过滤器</strong>（<strong>Character Filters</strong>）、<strong>分词器</strong>（<strong>Tokenizer</strong>）和<strong>词元过滤器</strong>（<strong>Token Filters</strong>）三部分。它的执行顺序如下：</p><p><strong><em>character filters</em></strong> -&gt; <strong><em>tokenizer</em></strong> -&gt; <strong><em>token filters</em></strong></p><h2 id="字符过滤器-character-filters" tabindex="-1"><a class="header-anchor" href="#字符过滤器-character-filters" aria-hidden="true">#</a> 字符过滤器（Character Filters）</h2><p>character filter 的输入是原始的文本 text，如果配置了多个，它会按照配置的顺序执行，目前 ES 自带的 character filter 主要有如下 3 类：</p><ol><li><strong>html strip character filter</strong>：从文本中剥离 HTML 元素，并用其解码值替换 HTML 实体（如，将 <strong><em><code>＆amp;</code></em></strong> 替换为 <strong><em><code>＆</code></em></strong>）。</li><li><strong>mapping character filter</strong>：自定义一个 map 映射，可以进行一些自定义的替换，如常用的大写变小写也可以在该环节设置。</li><li><strong>pattern replace character filter</strong>：使用 java 正则表达式来匹配应替换为指定替换字符串的字符，此外，替换字符串可以引用正则表达式中的捕获组。</li></ol><h3 id="html-strip-character-filter" tabindex="-1"><a class="header-anchor" href="#html-strip-character-filter" aria-hidden="true">#</a> HTML strip character filter</h3><p>HTML strip 如下示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /_analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;tokenizer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>,
  <span class="token string">&quot;char_filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;html_strip&quot;</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;p&gt;I&amp;apos;m so &lt;b&gt;happy&lt;/b&gt;!&lt;/p&gt;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过 <strong><em><code>html_strip</code></em></strong> 字符过滤器处理后，输出如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ \\nI&#39;m so happy!\\n ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mapping-character-filter" tabindex="-1"><a class="header-anchor" href="#mapping-character-filter" aria-hidden="true">#</a> Mapping character filter</h3><p>Mapping character filter 接收键和值映射（key =&gt; value）作为配置参数，每当在预处理过程中遇到与键值映射中的键相同的字符串时，就会使用该键对应的值去替换它。</p><p>原始文本中的字符串和键值映射中的键的匹配是贪心的，在对给定的文本进行预处理过程中如果配置的键值映射存在包含关系，会优先<strong>匹配最长键</strong>。同样也可以用空字符串进行替换。</p><p>mapping char_filter 不像 html_strip 那样拆箱即可用，必须先进行配置才能使用，它有两个属性可以配置：</p><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong><em><code>mappings</code></em></strong></td><td style="text-align:left;">一组映射，每个元素的格式为 <em>key =&gt; value</em>。</td></tr><tr><td style="text-align:left;"><strong><em><code>mappings_path</code></em></strong></td><td style="text-align:left;">一个相对或者绝对的文件路径，指向一个每行包含一个 <em>key =&gt;value</em> 映射的 UTF-8 编码文本映射文件。</td></tr></tbody></table><p>mapping char_filter 示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /_analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;tokenizer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>,
  <span class="token string">&quot;char_filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mapping&quot;</span>,
      <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;٠ =&gt; 0&quot;</span>,
        <span class="token string">&quot;١ =&gt; 1&quot;</span>,
        <span class="token string">&quot;٢ =&gt; 2&quot;</span>,
        <span class="token string">&quot;٣ =&gt; 3&quot;</span>,
        <span class="token string">&quot;٤ =&gt; 4&quot;</span>,
        <span class="token string">&quot;٥ =&gt; 5&quot;</span>,
        <span class="token string">&quot;٦ =&gt; 6&quot;</span>,
        <span class="token string">&quot;٧ =&gt; 7&quot;</span>,
        <span class="token string">&quot;٨ =&gt; 8&quot;</span>,
        <span class="token string">&quot;٩ =&gt; 9&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;My license plate is ٢٥٠١٥&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ My license plate is 25015 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pattern-replace-character-filter" tabindex="-1"><a class="header-anchor" href="#pattern-replace-character-filter" aria-hidden="true">#</a> Pattern Replace character filter</h3><p>Pattern Replace character filter 支持如下三个参数：</p><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong><em><code>pattern</code></em></strong></td><td style="text-align:left;">必填参数，一个 java 的正则表达式。</td></tr><tr><td style="text-align:left;"><strong><em><code>replacement</code></em></strong></td><td style="text-align:left;">替换字符串，可以使用 <strong><em><code>$1 ... $9</code></em></strong> 语法来引用捕获组。</td></tr><tr><td style="text-align:left;"><strong><em><code>flags</code></em></strong></td><td style="text-align:left;">Java 正则表达式的标志，具体参考 java 的 java.util.regex.Pattern 类的标志属性。</td></tr></tbody></table><p>如将输入的 text 中大于一个的空格都转变为一个空格，在 settings 时，配置示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;char_filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;multi_space_2_one&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;pattern&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;[ ]+&quot;</span>,
    <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pattern_replace&quot;</span>,
    <span class="token string">&quot;replacement&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot; &quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分词器-tokenizer" tabindex="-1"><a class="header-anchor" href="#分词器-tokenizer" aria-hidden="true">#</a> 分词器（Tokenizer）</h2><p>tokenizer 即分词器，也是 analyzer 最重要的组件，它对文本进行分词；<strong>一个 analyzer 必需且只可包含一个 tokenizer</strong>。</p><p>ES 自带默认的分词器是 standard tokenizer，标准分词器提供基于语法的分词（基于 Unicode 文本分割算法），并且适用于大多数语言。</p><p>此外有很多第三方的分词插件，如中文分词界最经典的 ik 分词器，它对应的 tokenizer 分为 ik_smart 和 ik_max_word，一个是智能分词（针对搜索侧），一个是全切分词（针对索引侧）。</p>`,30),u={href:"https://github.com/medcl/elasticsearch-analysis-ik",target:"_blank",rel:"noopener noreferrer"},d=e(`<h3 id="elasticsearch-plugin-使用" tabindex="-1"><a class="header-anchor" href="#elasticsearch-plugin-使用" aria-hidden="true">#</a> elasticsearch-plugin 使用</h3><p>在安装 elasticsearch-analysis-ik 第三方之前，我们首先要了解 es 的插件管理工具 <strong><em><code>elasticsearch-plugin</code></em></strong> 的使用。</p><p>现在的 elasticsearch 安装完后，在安装目录的 bin 目录下会存在 elasticsearch-plugin 命令工具，用它来对 es 插件进行管理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bin/elasticsearch-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实该命令的是软连接，原始路径是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>libexec/bin/elasticsearch-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再进一步看脚本代码，你会发现，它是通过 <strong><em><code>elasticsearch-cli</code></em></strong> 执行 <code>libexec/lib/tools/plugin-cli/elasticsearch-plugin-cli-x.x.x.jar</code>。</p><p>但一般使用者了解 elasticsearch-plugin 命令使用就可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  安装指定的插件到当前 ES 节点中</span>
elasticsearch-plugin <span class="token function">install</span> <span class="token punctuation">{</span>plugin_url<span class="token punctuation">}</span>

<span class="token comment">#  显示当前 ES 节点已经安装的插件列表</span>
elasticsearch-plugin list

<span class="token comment">#  删除已安装的插件</span>
elasticsearch-plugin remove <span class="token punctuation">{</span>plugin_name<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在安装插件时，要保证安装的插件与 ES 版本一致。</p></blockquote><h3 id="elasticsearch-analysis-ik-安装" tabindex="-1"><a class="header-anchor" href="#elasticsearch-analysis-ik-安装" aria-hidden="true">#</a> elasticsearch-analysis-ik 安装</h3><p>在确定要安装的 ik 版本之后，执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./bin/elasticsearch-plugin <span class="token function">install</span> https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v<span class="token punctuation">{</span>X.X.X<span class="token punctuation">}</span>/elasticsearch-analysis-ik-<span class="token punctuation">{</span>X.X.X<span class="token punctuation">}</span>.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完安装命令后，我们会发现在 plugins 中多了 analysis-ik 目录，这里面主要存放的是源码 jar 包，此外，在 config 文件里也多了 analysis-ik 目录，里面主要是 ik 相关的配置，如 IKAnalyzer.cfg.xml 配置、词典文件等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  两个新增目录路径</span>
libexec/plugins/analysis-ik/
libexec/config/analysis-ik/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="elasticsearch-analysis-ik-使用" tabindex="-1"><a class="header-anchor" href="#elasticsearch-analysis-ik-使用" aria-hidden="true">#</a> elasticsearch-analysis-ik 使用</h3><p>ES 5.X 版本开始安装完的 elasticsearch-analysis-ik 提供了两个分词器，分别对应名称是 <strong><em>ik_max_word</em></strong> 和 <strong><em>ik_smart</em></strong>，ik_max_word 是索引侧的分词器，走全切模式，ik_smart 是搜索侧的分词器，走智能分词，属于搜索模式。</p><h4 id="索引-mapping-设置" tabindex="-1"><a class="header-anchor" href="#索引-mapping-设置" aria-hidden="true">#</a> 索引 mapping 设置</h4><p>安装完 elasticsearch-analysis-ik 后，我们可以指定索引及指定字段设置可用的分析器（analyzer），示例如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;qa&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;qa&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;question&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;similarity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BM25&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;search_analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;answer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;similarity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BM25&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;search_analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          ...
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上示例中，analyzer 指定 ik_max_word，即索引侧使用 ik 全切模式，search_analyzer 设置 ik_smart，即搜索侧使用 ik 智能分词模式。</p><h4 id="查看-ik-分词结果" tabindex="-1"><a class="header-anchor" href="#查看-ik-分词结果" aria-hidden="true">#</a> 查看 ik 分词结果</h4><p>es 提供了查看分词结果的 api <strong><code>analyze</code></strong>，具体示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET <span class="token punctuation">{</span>index<span class="token punctuation">}</span>/_analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;ik_smart&quot;</span>,
  <span class="token string">&quot;text&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;es 中文分词器安装&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中文&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分词器&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;安装&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="elasticsearch-analysis-ik-自定义词典" tabindex="-1"><a class="header-anchor" href="#elasticsearch-analysis-ik-自定义词典" aria-hidden="true">#</a> elasticsearch-analysis-ik 自定义词典</h4><p>elasticsearch-analysis-ik 本质是 ik 分词器，使用者根据实际需求可以扩展自定义的词典，具体主要分为如下 2 大类，每类又分为本地配置和远程配置 2 种：</p><ol><li>自定义扩展词典；</li><li>自定义扩展停用词典；</li></ol><p>elasticsearch-analysis-ik 配置文件为 <code>IKAnalyzer.cfg.xml</code>，它位于 <code>libexec/config/analysis-ik</code> 目录下，具体配置结构如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer 扩展配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--用户可以在这里配置自己的扩展字典 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
	 <span class="token comment">&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--用户可以在这里配置远程扩展字典 --&gt;</span>
	<span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_dict&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
	<span class="token comment">&lt;!--用户可以在这里配置远程扩展停止词字典--&gt;</span>
	<span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当然，如果开发者认为 ik 默认的词表有问题，也可以进行调整，文件都在 <code>libexec/config/analysis-ik</code> 下，如 main.dic 为主词典，stopword.dic 为停用词表。</p></blockquote><h2 id="词元过滤器-token-filters" tabindex="-1"><a class="header-anchor" href="#词元过滤器-token-filters" aria-hidden="true">#</a> 词元过滤器（Token Filters）</h2><p>token filters 叫词元过滤器，或词项过滤器，对 tokenizer 分出的词进行过滤处理。常用的有转小写、停用词处理、同义词处理等等。<strong>一个 analyzer 可包含 0 个或多个词项过滤器，按配置顺序进行过滤</strong>。</p><p>以同义词过滤器的使用示例，具体如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /test_index
<span class="token punctuation">{</span>
  <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;analysis&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;synonym&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;tokenizer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;standard&quot;</span>,
            <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;my_stop&quot;</span>, <span class="token string">&quot;synonym&quot;</span> <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;my_stop&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stop&quot;</span>,
            <span class="token string">&quot;stopwords&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>,
          <span class="token string">&quot;synonym&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;synonym&quot;</span>,
            <span class="token string">&quot;lenient&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;synonyms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;foo, bar =&gt; baz&quot;</span> <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同义词" tabindex="-1"><a class="header-anchor" href="#同义词" aria-hidden="true">#</a> 同义词</h3><p>Elasticsearch 同义词通过专有的同义词过滤器（synonym token filter）来进行工作，它允许在分析（analysis）过程中方便地处理同义词，一般是通过配置文件配置同义词。此外，同义词可以再建索引时（index-time synonyms）或者检索时（search-time synonyms）使用。</p><h4 id="同义词-synonym-配置语法" tabindex="-1"><a class="header-anchor" href="#同义词-synonym-配置语法" aria-hidden="true">#</a> 同义词（synonym）配置语法</h4><p>如上例子所示，es 同义词配置的 filter 语法具体如下选项：</p><ul><li><p><strong><em><code>type</code></em></strong>：指定 synonym，表示同义词 filter；</p></li><li><p><strong><em><code>synonyms_path</code></em></strong>：指定同义词配置文件路径；</p></li><li><p><strong><code>expand</code></strong>：该参数决定映射行为的模式，默认为 true，表示扩展模式，具体示例如下：</p><ul><li><p>当 <strong><code>expand == true</code></strong> 时，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipod, i-pod, i pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等价于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipod, i-pod, i pod =&gt; ipod, i-pod, i pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <strong><em><code>expand == false</code></em></strong> 时，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipod, i-pod, i pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仅映射第一个单词，等价于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipod, i-pod, i pod =&gt; ipod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p><strong><em><code>lenient</code></em></strong>：如果值为 true 时，遇到那些无法解析的同义词规则时，忽略异常。默认为 false。</p></li></ul><h4 id="同义词文档格式" tabindex="-1"><a class="header-anchor" href="#同义词文档格式" aria-hidden="true">#</a> 同义词文档格式</h4><p>elasticsearch 的同义词有如下两种形式：</p><ul><li><p>单向同义词：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipod, i-pod, i pod =&gt; ipod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>双向同义词：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>马铃薯, 土豆, potato
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>单向同义词不管索引还是检索时，箭头左侧的词都会映射成箭头右侧的词；</p><p>双向同义词是索引时，都建立同义词的倒排索引，检索时，同义词之间都会进行倒排索引的匹配。</p><blockquote><p>同义词的文档化时，需要注意的是，同一个词在不同的同义词关系中出现时，其它同义词之间不具有传递性，这点需要注意。</p></blockquote><p>假设如上示例中，如果“马铃薯”和其它两个同义词分成两行写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>马铃薯,土豆
马铃薯,potato
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，elasticsearch 中不会将“土豆”和“potato”视为同义词关系，所以多个同义词要写在一起，这往往是开发中经常容易疏忽的点。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,51),k={href:"https://www.knowledgedict.com/tutorial/elasticsearch-intro.html",target:"_blank",rel:"noopener noreferrer"};function v(m,g){const a=p("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[s("ES 默认提供的分词器 standard 对中文分词不优化，效果差，一般会安装第三方中文分词插件，通常首先 "),n("a",u,[s("elasticsearch-analysis-ik"),t(a)]),s(" 插件，它其实是 ik 针对的 ES 的定制版。")]),d,n("ul",null,[n("li",null,[n("a",k,[s("Elasticsearch 教程"),t(a)])])])])}const q=i(c,[["render",v],["__file","09.Elasticsearch分析器.html.vue"]]);export{q as default};
