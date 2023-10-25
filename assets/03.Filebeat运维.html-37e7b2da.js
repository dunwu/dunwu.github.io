import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as e,b as a,d as s,e as t}from"./app-2811837c.js";const r={},p=t(`<h1 id="filebeat-运维" tabindex="-1"><a class="header-anchor" href="#filebeat-运维" aria-hidden="true">#</a> Filebeat 运维</h1><blockquote><p>Beats 平台集合了多种单一用途数据采集器。它们从成百上千或成千上万台机器和系统向 Logstash 或 Elasticsearch 发送数据。</p><p>因为我只接触过 Filebeat，所有本文仅介绍 Filebeat 的日常运维。</p></blockquote><h2 id="_1-filebeat-安装" tabindex="-1"><a class="header-anchor" href="#_1-filebeat-安装" aria-hidden="true">#</a> 1. Filebeat 安装</h2><h3 id="_1-1-环境要求" tabindex="-1"><a class="header-anchor" href="#_1-1-环境要求" aria-hidden="true">#</a> 1.1. 环境要求</h3><blockquote><p>版本：Elastic Stack 7.4</p></blockquote><h3 id="_1-2-安装步骤" tabindex="-1"><a class="header-anchor" href="#_1-2-安装步骤" aria-hidden="true">#</a> 1.2. 安装步骤</h3><p>Unix / Linux 系统建议使用下面方式安装，因为比较通用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.1.1-linux-x86_64.tar.gz
tar -zxf filebeat-6.1.1-linux-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation.html",target:"_blank",rel:"noopener noreferrer"},d=e("h2",{id:"_2-filebeat-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-filebeat-配置","aria-hidden":"true"},"#"),a(" 2. Filebeat 配置")],-1),b=e("p",null,[a("首先，必须要知道的是："),e("code",null,"filebeat.yml"),a(" 是 filebeat 的配置文件。其路径会因为你安装方式而有所不同。")],-1),h={href:"http://www.yaml.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuring-howto-filebeat.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.elastic.co/guide/en/beats/libbeat/6.1/config-file-format.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>filebeat.yml 部分配置示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">filebeat</span><span class="token punctuation">:</span>
  <span class="token key atrule">prospectors</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /var/log/<span class="token important">*.log</span>
      <span class="token key atrule">multiline</span><span class="token punctuation">:</span>
        <span class="token key atrule">pattern</span><span class="token punctuation">:</span> <span class="token string">&#39;^[&#39;</span>
        <span class="token key atrule">match</span><span class="token punctuation">:</span> after
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-重要配置项" tabindex="-1"><a class="header-anchor" href="#_2-1-重要配置项" aria-hidden="true">#</a> 2.1. 重要配置项</h3>`,3),g=e("p",null,"下面我将列举 Filebeat 的较为重要的配置项。",-1),_=e("p",null,"如果想了解更多配置信息，可以参考：",-1),f={href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuring-howto-filebeat.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.elastic.co/guide/en/beats/libbeat/6.1/config-file-format.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<h4 id="_2-1-1-filebeat-prospectors" tabindex="-1"><a class="header-anchor" href="#_2-1-1-filebeat-prospectors" aria-hidden="true">#</a> 2.1.1. filebeat.prospectors</h4><p>（文件监视器）用于指定需要关注的文件。</p><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">filebeat.prospectors</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/log/<span class="token important">*.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-output-elasticsearch" tabindex="-1"><a class="header-anchor" href="#_2-1-2-output-elasticsearch" aria-hidden="true">#</a> 2.1.2. output.elasticsearch</h4><p>如果你希望使用 filebeat 直接向 elasticsearch 输出数据，需要配置 output.elasticsearch 。</p><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">output.elasticsearch</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;192.168.1.42:9200&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-output-logstash" tabindex="-1"><a class="header-anchor" href="#_2-1-3-output-logstash" aria-hidden="true">#</a> 2.1.3. output.logstash</h4><p>如果你希望使用 filebeat 向 logstash 输出数据，然后由 logstash 再向 elasticsearch 输出数据，需要配置 output.logstash。</p><blockquote><p><strong>注意</strong></p><p>相比于向 elasticsearch 输出数据，个人更推荐向 logstash 输出数据。</p><p>因为 logstash 和 filebeat 一起工作时，如果 logstash 忙于处理数据，会通知 FileBeat 放慢读取速度。一旦拥塞得到解决，FileBeat 将恢复到原来的速度并继续传播。这样，可以减少管道超负荷的情况。</p></blockquote><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;127.0.0.1:5044&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，还需要在 logstash 的配置文件（如 logstash.conf）中指定 beats input 插件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>input <span class="token punctuation">{</span>
  beats <span class="token punctuation">{</span>
    port =<span class="token punctuation">&gt;</span> 5044 <span class="token comment"># 此端口需要与 filebeat.yml 中的端口相同</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># The filter part of this file is commented out to indicate that it is</span>
<span class="token comment"># optional.</span>
<span class="token comment"># filter {</span>
<span class="token comment">#</span>
<span class="token comment"># }</span>

output <span class="token punctuation">{</span>
  elasticsearch <span class="token punctuation">{</span>
    hosts =<span class="token punctuation">&gt;</span> &quot;localhost<span class="token punctuation">:</span>9200&quot;
    manage_template =<span class="token punctuation">&gt;</span> false
    index =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span><span class="token punctuation">[</span>@metadata<span class="token punctuation">]</span><span class="token punctuation">[</span>beat<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">-</span>%<span class="token punctuation">{</span><span class="token punctuation">[</span>@metadata<span class="token punctuation">]</span><span class="token punctuation">[</span>version<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
    document_type =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span><span class="token punctuation">[</span>@metadata<span class="token punctuation">]</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">}</span>&quot;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-setup-kibana" tabindex="-1"><a class="header-anchor" href="#_2-1-4-setup-kibana" aria-hidden="true">#</a> 2.1.4. setup.kibana</h4><p>如果打算使用 Filebeat 提供的 Kibana 仪表板，需要配置 setup.kibana 。</p><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">setup.kibana</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost:5601&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-setup-template-settings" tabindex="-1"><a class="header-anchor" href="#_2-1-5-setup-template-settings" aria-hidden="true">#</a> 2.1.5. setup.template.settings</h4>`,20),w={href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.1/indices-templates.html",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"在 Filebeat 中，setup.template.settings 用于配置索引模板。",-1),F=e("p",null,"Filebeat 推荐的索引模板文件由 Filebeat 软件包安装。如果您接受 filebeat.yml 配置文件中的默认配置，Filebeat 在成功连接到 Elasticsearch 后自动加载模板。",-1),B=e("p",null,"您可以通过在 Filebeat 配置文件中配置模板加载选项来禁用自动模板加载，或加载自己的模板。您还可以设置选项来更改索引和索引模板的名称。",-1),E=e("p",null,[e("strong",null,"参考")],-1),N={href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-template.html",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,[e("strong",null,"说明")],-1),L=e("p",null,"如无必要，使用 Filebeat 配置文件中的默认索引模板即可。",-1),Y=t(`<h4 id="_2-1-6-setup-dashboards" tabindex="-1"><a class="header-anchor" href="#_2-1-6-setup-dashboards" aria-hidden="true">#</a> 2.1.6. setup.dashboards</h4><p>Filebeat 附带了示例 Kibana 仪表板。在使用仪表板之前，您需要创建索引模式 <code>filebeat- *</code>，并将仪表板加载到 Kibana 中。为此，您可以运行 <code>setup</code> 命令或在 <code>filebeat.yml</code> 配置文件中配置仪表板加载。</p><p>为了在 Kibana 中加载 Filebeat 的仪表盘，需要在 <code>filebeat.yml</code> 配置中启动开关：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setup.dashboards.enabled: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),K=e("p",null,[e("strong",null,"参考")],-1),V={href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-dashboards.html",target:"_blank",rel:"noopener noreferrer"},z=t(`<h2 id="_3-filebeat-命令" tabindex="-1"><a class="header-anchor" href="#_3-filebeat-命令" aria-hidden="true">#</a> 3. Filebeat 命令</h2><p>filebeat 提供了一系列命令来完成各种功能。</p><p>执行命令方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./filebeat COMMAND
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),A=e("p",null,[e("strong",null,"参考")],-1),I={href:"https://www.elastic.co/guide/en/beats/filebeat/current/command-line-options.html",target:"_blank",rel:"noopener noreferrer"},S=t(`<p><strong>说明</strong></p><p>个人认为命令行没有必要一一掌握，因为绝大部分功能都可以通过配置来完成。且通过命令行指定功能这种方式要求每次输入同样参数，不利于固化启动方式。</p><p>最重要的当然是启动命令 run 了。</p><p><strong>示例</strong> 指定配置文件启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./filebeat run <span class="token parameter variable">-e</span> <span class="token parameter variable">-c</span> filebeat.yml <span class="token parameter variable">-d</span> <span class="token string">&quot;publish&quot;</span>
./filebeat <span class="token parameter variable">-e</span> <span class="token parameter variable">-c</span> filebeat.yml <span class="token parameter variable">-d</span> <span class="token string">&quot;publish&quot;</span> <span class="token comment"># run 可以省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),C=e("h2",{id:"_4-filebeat-模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-filebeat-模块","aria-hidden":"true"},"#"),a(" 4. Filebeat 模块")],-1),D={href:"https://www.elastic.co/cn/products/beats/filebeat",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.elastic.co/cn/products/beats/metricbeat",target:"_blank",rel:"noopener noreferrer"},T=t(`<ul><li>配置 elasticsearch 和 kibana</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output.elasticsearch:
  hosts: [&quot;myEShost:9200&quot;]
  username: &quot;elastic&quot;
  password: &quot;elastic&quot;
setup.kibana:
  host: &quot;mykibanahost:5601&quot;
  username: &quot;elastic&quot;
  password: &quot;elastic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>username 和 password 是可选的，如果不需要认证则不填。</p></blockquote><ul><li>初始化环境</li></ul><p>执行下面命令，filebeat 会加载推荐索引模板。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./filebeat setup -e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>指定模块</li></ul><p>执行下面命令，指定希望加载的模块。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./filebeat -e --modules system,nginx,mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),O=e("p",null,"更多内容可以参考：",-1),R={href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-filebeat-modules.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html",target:"_blank",rel:"noopener noreferrer"},X=e("h2",{id:"_5-参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-参考资料","aria-hidden":"true"},"#"),a(" 5. 参考资料")],-1),j={href:"https://www.elastic.co/cn/products/beats",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/elastic/beats",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.elastic.co/guide/en/beats/libbeat/current/index.html",target:"_blank",rel:"noopener noreferrer"};function P(Q,W){const n=i("ExternalLinkIcon");return o(),c("div",null,[p,e("blockquote",null,[e("p",null,[a("更多内容可以参考："),e("a",u,[a("filebeat-installation"),s(n)])])]),d,e("blockquote",null,[b,e("p",null,[a("Beat 所有系列产品的配置文件都基于 "),e("a",h,[a("YAML"),s(n)]),a(" 格式，FileBeat 当然也不例外。")]),e("p",null,[a("更多 filebeat 配置内容可以参考："),e("a",m,[a("配置 filebeat"),s(n)])]),e("p",null,[a("更多 filebeat.yml 文件格式内容可以参考："),e("a",v,[a("filebeat.yml 文件格式"),s(n)])])]),k,e("blockquote",null,[g,_,e("p",null,[a("更多 filebeat 配置内容可以参考："),e("a",f,[a("配置 filebeat"),s(n)])]),e("p",null,[a("更多 filebeat.yml 文件格式内容可以参考："),e("a",x,[a("filebeat.yml 文件格式"),s(n)])])]),y,e("p",null,[a("在 Elasticsearch 中，"),e("a",w,[a("索引模板"),s(n)]),a("用于定义设置和映射，以确定如何分析字段。")]),q,F,B,e("blockquote",null,[E,e("p",null,[a("更多内容可以参考："),e("a",N,[a("filebeat-template"),s(n)])]),M,L]),Y,e("blockquote",null,[K,e("p",null,[a("更多内容可以参考："),e("a",V,[a("configuration-dashboards"),s(n)])])]),z,e("blockquote",null,[A,e("p",null,[a("更多内容可以参考："),e("a",I,[a("command-line-options"),s(n)])]),S]),C,e("blockquote",null,[e("p",null,[e("a",D,[a("Filebeat"),s(n)]),a(" 和 "),e("a",G,[a("Metricbeat"),s(n)]),a(" 内部集成了一系列模块，用以简化常见日志格式（例如 NGINX、Apache 或诸如 Redis 或 Docker 等系统指标）的收集、解析和可视化过程。")])]),T,e("blockquote",null,[O,e("ul",null,[e("li",null,[e("a",R,[a("配置 filebeat 模块"),s(n)])]),e("li",null,[e("a",U,[a("filebeat 支持模块"),s(n)])])])]),X,e("ul",null,[e("li",null,[e("a",j,[a("Beats 官网"),s(n)])]),e("li",null,[e("a",H,[a("Beats Github"),s(n)])]),e("li",null,[e("a",J,[a("Beats 官方文档"),s(n)])])])])}const ee=l(r,[["render",P],["__file","03.Filebeat运维.html.vue"]]);export{ee as default};
