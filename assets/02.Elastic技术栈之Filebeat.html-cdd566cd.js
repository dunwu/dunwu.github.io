import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as p,a as e,b as a,d as s,e as t}from"./app-4c6ca41d.js";const c={},r=t('<h1 id="elastic-技术栈之-filebeat" tabindex="-1"><a class="header-anchor" href="#elastic-技术栈之-filebeat" aria-hidden="true">#</a> Elastic 技术栈之 Filebeat</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Beats 是安装在服务器上的数据中转代理。</p><p>Beats 可以将数据直接传输到 Elasticsearch 或传输到 Logstash 。</p><figure><img src="https://www.elastic.co/guide/en/beats/libbeat/current/images/beats-platform.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Beats 有多种类型，可以根据实际应用需要选择合适的类型。</p><p>常用的类型有：</p><ul><li>**Packetbeat：**网络数据包分析器，提供有关您的应用程序服务器之间交换的事务的信息。</li><li>**Filebeat：**从您的服务器发送日志文件。</li><li>**Metricbeat：**是一个服务器监视代理程序，它定期从服务器上运行的操作系统和服务收集指标。</li><li>**Winlogbeat：**提供 Windows 事件日志。</li></ul>',8),u=e("p",null,[e("strong",null,"参考")],-1),d={href:"https://www.elastic.co/guide/en/beats/libbeat/current/community-beats.html",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("strong",null,"说明")],-1),h=e("p",null,"由于本人工作中只应用了 FileBeat，所以后面内容仅介绍 FileBeat 。",-1),m=t(`<h3 id="filebeat-的作用" tabindex="-1"><a class="header-anchor" href="#filebeat-的作用" aria-hidden="true">#</a> FileBeat 的作用</h3><p>相比 Logstash，FileBeat 更加轻量化。</p><p>在任何环境下，应用程序都有停机的可能性。 Filebeat 读取并转发日志行，如果中断，则会记住所有事件恢复联机状态时所在位置。</p><p>Filebeat 带有内部模块（auditd，Apache，Nginx，System 和 MySQL），可通过一个指定命令来简化通用日志格式的收集，解析和可视化。</p><p>FileBeat 不会让你的管道超负荷。FileBeat 如果是向 Logstash 传输数据，当 Logstash 忙于处理数据，会通知 FileBeat 放慢读取速度。一旦拥塞得到解决，FileBeat 将恢复到原来的速度并继续传播。</p><figure><img src="https://www.elastic.co/guide/en/beats/filebeat/current/images/filebeat.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>Unix / Linux 系统建议使用下面方式安装，因为比较通用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.1.1-linux-x86_64.tar.gz
tar -zxf filebeat-6.1.1-linux-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=e("p",null,[e("strong",null,"参考")],-1),g={href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation.html",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),a(" 配置")],-1),f=e("h3",{id:"配置文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置文件","aria-hidden":"true"},"#"),a(" 配置文件")],-1),_=e("p",null,[a("首先，需要知道的是："),e("code",null,"filebeat.yml"),a(" 是 filebeat 的配置文件。配置文件的路径会因为你安装方式的不同而变化。")],-1),y={href:"http://www.yaml.org/",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>filebeat.yml 部分配置示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">filebeat</span><span class="token punctuation">:</span>
  <span class="token key atrule">prospectors</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /var/log/<span class="token important">*.log</span>
      <span class="token key atrule">multiline</span><span class="token punctuation">:</span>
        <span class="token key atrule">pattern</span><span class="token punctuation">:</span> <span class="token string">&#39;^[&#39;</span>
        <span class="token key atrule">match</span><span class="token punctuation">:</span> after
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),w=e("p",null,[e("strong",null,"参考")],-1),q={href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuring-howto-filebeat.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.elastic.co/guide/en/beats/libbeat/6.1/config-file-format.html",target:"_blank",rel:"noopener noreferrer"},B=t(`<h3 id="重要配置项" tabindex="-1"><a class="header-anchor" href="#重要配置项" aria-hidden="true">#</a> 重要配置项</h3><h4 id="filebeat-prospectors" tabindex="-1"><a class="header-anchor" href="#filebeat-prospectors" aria-hidden="true">#</a> filebeat.prospectors</h4><p>（文件监视器）用于指定需要关注的文件。</p><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">filebeat.prospectors</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/log/<span class="token important">*.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="output-elasticsearch" tabindex="-1"><a class="header-anchor" href="#output-elasticsearch" aria-hidden="true">#</a> output.elasticsearch</h4><p>如果你希望使用 filebeat 直接向 elasticsearch 输出数据，需要配置 output.elasticsearch 。</p><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">output.elasticsearch</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;192.168.1.42:9200&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="output-logstash" tabindex="-1"><a class="header-anchor" href="#output-logstash" aria-hidden="true">#</a> output.logstash</h4><p>如果你希望使用 filebeat 向 logstash 输出数据，然后由 logstash 再向 elasticsearch 输出数据，需要配置 output.logstash。</p><blockquote><p><strong>注意</strong></p><p>相比于向 elasticsearch 输出数据，个人更推荐向 logstash 输出数据。</p><p>因为 logstash 和 filebeat 一起工作时，如果 logstash 忙于处理数据，会通知 FileBeat 放慢读取速度。一旦拥塞得到解决，FileBeat 将恢复到原来的速度并继续传播。这样，可以减少管道超负荷的情况。</p></blockquote><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setup-kibana" tabindex="-1"><a class="header-anchor" href="#setup-kibana" aria-hidden="true">#</a> setup.kibana</h4><p>如果打算使用 Filebeat 提供的 Kibana 仪表板，需要配置 setup.kibana 。</p><p><strong>示例</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">setup.kibana</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost:5601&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setup-template-settings" tabindex="-1"><a class="header-anchor" href="#setup-template-settings" aria-hidden="true">#</a> setup.template.settings</h4>`,21),E={href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.1/indices-templates.html",target:"_blank",rel:"noopener noreferrer"},L=e("p",null,"在 Filebeat 中，setup.template.settings 用于配置索引模板。",-1),M=e("p",null,"Filebeat 推荐的索引模板文件由 Filebeat 软件包安装。如果您接受 filebeat.yml 配置文件中的默认配置，Filebeat 在成功连接到 Elasticsearch 后自动加载模板。",-1),N=e("p",null,"您可以通过在 Filebeat 配置文件中配置模板加载选项来禁用自动模板加载，或加载自己的模板。您还可以设置选项来更改索引和索引模板的名称。",-1),z=e("p",null,[e("strong",null,"参考")],-1),S={href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-template.html",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,[e("strong",null,"说明")],-1),A=e("p",null,"如无必要，使用 Filebeat 配置文件中的默认索引模板即可。",-1),K=t(`<h4 id="setup-dashboards" tabindex="-1"><a class="header-anchor" href="#setup-dashboards" aria-hidden="true">#</a> setup.dashboards</h4><p>Filebeat 附带了示例 Kibana 仪表板。在使用仪表板之前，您需要创建索引模式 <code>filebeat- *</code>，并将仪表板加载到 Kibana 中。为此，您可以运行 <code>setup</code> 命令或在 <code>filebeat.yml</code> 配置文件中配置仪表板加载。</p><p>为了在 Kibana 中加载 Filebeat 的仪表盘，需要在 <code>filebeat.yml</code> 配置中启动开关：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setup.dashboards.enabled: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),V=e("p",null,[e("strong",null,"参考")],-1),C={href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-dashboards.html",target:"_blank",rel:"noopener noreferrer"},I=t(`<h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>filebeat 提供了一系列命令来完成各种功能。</p><p>执行命令方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./filebeat COMMAND
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),Q=e("p",null,[e("strong",null,"参考")],-1),T={href:"https://www.elastic.co/guide/en/beats/filebeat/current/command-line-options.html",target:"_blank",rel:"noopener noreferrer"},W=t(`<p><strong>说明</strong></p><p>个人认为命令行没有必要一一掌握，因为绝大部分功能都可以通过配置来完成。且通过命令行指定功能这种方式要求每次输入同样参数，不利于固化启动方式。</p><p>最重要的当然是启动命令 run 了。</p><p><strong>示例</strong> 指定配置文件启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./filebeat run <span class="token parameter variable">-e</span> <span class="token parameter variable">-c</span> filebeat.yml <span class="token parameter variable">-d</span> <span class="token string">&quot;publish&quot;</span>
./filebeat <span class="token parameter variable">-e</span> <span class="token parameter variable">-c</span> filebeat.yml <span class="token parameter variable">-d</span> <span class="token string">&quot;publish&quot;</span> <span class="token comment"># run 可以省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),D=t(`<h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><p>Filebeat 提供了一套预构建的模块，让您可以快速实施和部署日志监视解决方案，并附带示例仪表板和数据可视化。这些模块支持常见的日志格式，例如 Nginx，Apache2 和 MySQL 等。</p><h3 id="运行模块的步骤" tabindex="-1"><a class="header-anchor" href="#运行模块的步骤" aria-hidden="true">#</a> 运行模块的步骤</h3><ul><li>配置 elasticsearch 和 kibana</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output.elasticsearch:
  hosts: [&quot;myEShost:9200&quot;]
  username: &quot;elastic&quot;
  password: &quot;elastic&quot;
setup.kibana:
  host: &quot;mykibanahost:5601&quot;
  username: &quot;elastic&quot;
  password: &quot;elastic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>username 和 password 是可选的，如果不需要认证则不填。</p></blockquote><ul><li>初始化环境</li></ul><p>执行下面命令，filebeat 会加载推荐索引模板。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./filebeat setup -e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>指定模块</li></ul><p>执行下面命令，指定希望加载的模块。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./filebeat -e --modules system,nginx,mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),O=e("p",null,[e("strong",null,"参考")],-1),P={href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-filebeat-modules.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html",target:"_blank",rel:"noopener noreferrer"},j=t(`<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>Filebeat 有两个主要组件：</p><p>harvester：负责读取一个文件的内容。它会逐行读取文件内容，并将内容发送到输出目的地。</p><p>prospector：负责管理 harvester 并找到所有需要读取的文件源。比如类型是日志，prospector 就会遍历制定路径下的所有匹配要求的文件。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">filebeat.prospectors</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/log/<span class="token important">*.log</span>
      <span class="token punctuation">-</span> /var/path2/<span class="token important">*.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Filebeat 保持每个文件的状态，并经常刷新注册表文件中的磁盘状态。状态用于记住 harvester 正在读取的最后偏移量，并确保发送所有日志行。</p><p>Filebeat 将每个事件的传递状态存储在注册表文件中。所以它能保证事件至少传递一次到配置的输出，没有数据丢失。</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2>`,8),G={href:"https://www.elastic.co/guide/en/beats/libbeat/current/index.html",target:"_blank",rel:"noopener noreferrer"};function H(J,R){const n=i("ExternalLinkIcon");return o(),p("div",null,[r,e("blockquote",null,[u,e("p",null,[a("更多 Beats 类型可以参考："),e("a",d,[a("community-beats"),s(n)])]),b,h]),m,e("blockquote",null,[v,e("p",null,[a("更多内容可以参考："),e("a",g,[a("filebeat-installation"),s(n)])])]),k,f,_,e("p",null,[a("Beat 所有系列产品的配置文件都基于 "),e("a",y,[a("YAML"),s(n)]),a(" 格式，FileBeat 当然也不例外。")]),x,e("blockquote",null,[w,e("p",null,[a("更多 filebeat 配置内容可以参考："),e("a",q,[a("配置 filebeat"),s(n)])]),e("p",null,[a("更多 filebeat.yml 文件格式内容可以参考："),e("a",F,[a("filebeat.yml 文件格式"),s(n)])])]),B,e("p",null,[a("在 Elasticsearch 中，"),e("a",E,[a("索引模板"),s(n)]),a("用于定义设置和映射，以确定如何分析字段。")]),L,M,N,e("blockquote",null,[z,e("p",null,[a("更多内容可以参考："),e("a",S,[a("filebeat-template"),s(n)])]),Y,A]),K,e("blockquote",null,[V,e("p",null,[a("更多内容可以参考："),e("a",C,[a("configuration-dashboards"),s(n)])])]),I,e("blockquote",null,[Q,e("p",null,[a("更多内容可以参考："),e("a",T,[a("command-line-options"),s(n)])]),W]),D,e("blockquote",null,[O,e("p",null,[a("更多内容可以参考： "),e("a",P,[a("配置 filebeat 模块"),s(n)]),a(" | "),e("a",U,[a("filebeat 支持模块"),s(n)])])]),j,e("p",null,[e("a",G,[a("Beats 官方文档"),s(n)])])])}const $=l(c,[["render",H],["__file","02.Elastic技术栈之Filebeat.html.vue"]]);export{$ as default};
