import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as s,a as e,b as a,d as i,e as n}from"./app-4f05975a.js";const d={},c=e("h1",{id:"jmeter-快速入门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jmeter-快速入门","aria-hidden":"true"},"#"),a(" JMeter 快速入门")],-1),h={href:"https://github.com/apache/jmeter",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"🎁 本文编辑时的最新版本为：5.1.1",-1),g=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),p={href:"https://github.com/apache/jmeter",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#特性","aria-hidden":"true"},"#"),a(" 特性")],-1),f=e("p",null,"Jmeter 能够加载和性能测试许多不同的应用程序/服务器/协议类型：",-1),b={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"SOAP / REST Web 服务",-1),x=e("li",null,"FTP 文件",-1),w=e("li",null,"通过 JDBC 的数据库",-1),v=e("li",null,"LDAP",-1),T=e("li",null,"通过 JMS 的面向消息的中间件(MOM)",-1),P=e("li",null,"邮件-SMTP(S)，POP3(S)和 IMAP(S)",-1),j=e("li",null,"本机命令或 Shell 脚本",-1),J=e("li",null,"TCP 协议",-1),k=e("li",null,"Java 对象",-1),S=n('<h3 id="工作流" tabindex="-1"><a class="header-anchor" href="#工作流" aria-hidden="true">#</a> 工作流</h3><p>Jmeter 的工作原理是仿真用户向服务器发送请求，并收集服务器应答信息并计算统计信息。</p><p>Jmeter 的工作流如下图所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/technology/test/jmeter-workflow.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="主要元素" tabindex="-1"><a class="header-anchor" href="#主要元素" aria-hidden="true">#</a> 主要元素</h3><p>Jmeter 的主要元素如下：</p><ul><li><strong><code>测试计划(Test Plan)</code></strong> - 可以将测试计划视为 JMeter 的测试脚本 。测试计划由测试元素组成，例如线程组，逻辑控制器，样本生成控制器，监听器，定时器，断言和配置元素。</li><li><strong><code>线程组(Thread Group)</code></strong> - 线程组的作用是：模拟大量用户负载的运行场景。 <ul><li>设置线程数</li><li>设置加速期</li><li>设置执行测试的次数</li></ul></li><li><strong><code>控制器(Controllers)</code></strong> - 可以分为两大类： <ul><li><strong><code>采样器（Sampler）</code></strong> - 采样器的作用是模拟用户对目标服务器发送请求。 采样器是必须将组件添加到测试计划中的，因为它只能让 JMeter 知道需要将哪种类型的请求发送到服务器。 请求可以是 HTTP，HTTP(s)，FTP，TCP，SMTP，SOAP 等。</li><li><strong><code>逻辑控制器</code></strong> - 逻辑控制器的作用是：控制多个请求发送的循环次数及顺序等。</li></ul></li><li><strong><code>监听器(Listeners)</code></strong> - 监听器的作用是：收集测试结果信息。如查看结果树、汇总报告等。</li><li><strong><code>计时器(Timers)</code></strong> - 计时器的作用是：控制多个请求发送的时间频次。</li><li><strong><code>配置元素(Configuration Elements)</code></strong> - 配置元素的工作与采样器的工作类似。但是，它不发送请求，而是提供预备的数据等，如 CSV、函数助手。</li><li><strong><code>预处理器元素(Pre-Processor Elements)</code></strong> - 预处理器元素在采样器发出请求之前执行，如果预处理器附加到采样器元素，那么它将在该采样器元素运行之前执行。预处理器元素用于在运行之前准备环境及参数。</li><li><strong><code>后处理器元素(Post-Processor Elements)</code></strong> - 后处理器元素是在发送采样器请求之后执行的元素，常用于处理响应数据。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javaweb/technology/test/jmeter-elements.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>📌 提示：</p><p>Jmeter 元素的数量关系大致如下：</p><ol><li>脚本中最多只能有一个测试计划。</li><li>测试计划中至少要有一个线程组。</li><li>线程组中至少要有一个取样器。</li><li>线程组中至少要有一个监听器。</li></ol></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h3>',11),y=e("li",null,[e("p",null,"必要的。Jmeter 基于 JDK8 开发，所以必须运行在 JDK8 环境。"),e("ul",null,[e("li",null,"JDK8")])],-1),q=e("p",null,[a("可选的。有些 jar 包不是 Jmeter 提供的，如果需要相应的功能，需要自行下载并置于 "),e("code",null,"lib"),a(" 目录。")],-1),H=e("li",null,"JDBC",-1),z=e("li",null,"JMS",-1),C={href:"http://www.bouncycastle.org/test_releases.html",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),a(" 下载")],-1),E={href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"Jmeter 官网下载地址",-1),N=n(`<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><p>解压 Jmeter 压缩包，进入 bin 目录</p><p>Unix 类系统运行 <code>jmeter</code> ；Windows 系统运行 <code>jmeter.bat</code></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024104517721.png" alt="image-20191024104517721" tabindex="0" loading="lazy"><figcaption>image-20191024104517721</figcaption></figure><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="创建测试计划" tabindex="-1"><a class="header-anchor" href="#创建测试计划" aria-hidden="true">#</a> 创建测试计划</h3><blockquote><p>🔔 注意：</p><ul><li><p>在运行整个测试计划之前，应保存测试计划。</p></li><li><p>JMeter 的测试计划以 <code>.jmx</code> 扩展文件的形式保存。</p></li></ul></blockquote><h4 id="创建线程组" tabindex="-1"><a class="header-anchor" href="#创建线程组" aria-hidden="true">#</a> 创建线程组</h4><ul><li><p>在“测试计划”上右键 【添加】=&gt;【线程（用户）】=&gt;【线程组】。</p></li><li><p>设置线程数和循环次数</p></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024105545736.png" alt="image-20191024105545736" tabindex="0" loading="lazy"><figcaption>image-20191024105545736</figcaption></figure><h4 id="配置原件" tabindex="-1"><a class="header-anchor" href="#配置原件" aria-hidden="true">#</a> 配置原件</h4><ul><li><p>在新建的线程组上右键 【添加】=&gt;【配置元件】=&gt;【HTTP 请求默认值】。</p></li><li><p>填写协议、服务器名称或 IP、端口号</p></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024110016264.png" alt="image-20191024110016264" tabindex="0" loading="lazy"><figcaption>image-20191024110016264</figcaption></figure><h4 id="构造-http-请求" tabindex="-1"><a class="header-anchor" href="#构造-http-请求" aria-hidden="true">#</a> 构造 HTTP 请求</h4><ul><li><p>在“线程组”上右键 【添加-】=&gt;【取样器】=&gt;【HTTP 请求】。</p></li><li><p>填写协议、服务器名称或 IP、端口号（如果配置了 HTTP 请求默认值可以忽略）</p></li><li><p>填写方法、路径</p></li><li><p>填写参数、消息体数据、文件上传</p></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024110953063.png" alt="image-20191024110953063" tabindex="0" loading="lazy"><figcaption>image-20191024110953063</figcaption></figure><h4 id="添加-http-请求头" tabindex="-1"><a class="header-anchor" href="#添加-http-请求头" aria-hidden="true">#</a> 添加 HTTP 请求头</h4><ul><li>在“线程组”上右键 【添加】=&gt;【配置元件】=&gt;【HTTP 信息头管理器】</li><li>由于我的测试例中传输的数据为 json 形式，所以设置键值对 <code>Content-Type</code>：<code>application/json</code></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024111825226.png" alt="image-20191024111825226" tabindex="0" loading="lazy"><figcaption>image-20191024111825226</figcaption></figure><h4 id="添加断言" tabindex="-1"><a class="header-anchor" href="#添加断言" aria-hidden="true">#</a> 添加断言</h4><ul><li>在“线程组”上右键 【添加】=&gt;【断言】=&gt;【 响应断言 】</li><li>在我的案例中，以 HTTP 应答状态码为 200 来判断请求是否成功</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024112335130.png" alt="image-20191024112335130" tabindex="0" loading="lazy"><figcaption>image-20191024112335130</figcaption></figure><h4 id="添加察看结果树" tabindex="-1"><a class="header-anchor" href="#添加察看结果树" aria-hidden="true">#</a> 添加察看结果树</h4><ul><li>在“线程组”上右键 【添加】=&gt;【监听器】=&gt;【察看结果树】</li><li>直接点击运行，就可以查看测试结果</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024113849270.png" alt="image-20191024113849270" tabindex="0" loading="lazy"><figcaption>image-20191024113849270</figcaption></figure><h4 id="添加汇总报告" tabindex="-1"><a class="header-anchor" href="#添加汇总报告" aria-hidden="true">#</a> 添加汇总报告</h4><ul><li>在“线程组”上右键 【添加】=&gt;【监听器】=&gt;【汇总报告】</li><li>直接点击运行，就可以查看测试结果</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024114016424.png" alt="image-20191024114016424" tabindex="0" loading="lazy"><figcaption>image-20191024114016424</figcaption></figure><h4 id="保存测试计划" tabindex="-1"><a class="header-anchor" href="#保存测试计划" aria-hidden="true">#</a> 保存测试计划</h4><p>执行测试计划前，GUI 会提示先保存配置为 <code>jmx</code> 文件。</p><h3 id="执行测试计划" tabindex="-1"><a class="header-anchor" href="#执行测试计划" aria-hidden="true">#</a> 执行测试计划</h3><p>官方建议不要直接使用 GUI 来执行测试计划，这种模式指适用于创建测试计划和 debug。</p><p>执行测试计划应该使用命令行模式，语法形式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jmeter <span class="token parameter variable">-n</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token punctuation">[</span>Path to web report folder<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行测试计划后，在 <code>-e -o</code> 参数后指定的 web 报告目录下，可以找到测试报告内容。在浏览器中打开 <code>index.html</code> 文件，可以看到如下报告：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/jmeter/image-20191024120233058.png" alt="image-20191024120233058" tabindex="0" loading="lazy"><figcaption>image-20191024120233058</figcaption></figure><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><h3 id="如何读取本地-txt-csv-文件作为请求参数" tabindex="-1"><a class="header-anchor" href="#如何读取本地-txt-csv-文件作为请求参数" aria-hidden="true">#</a> 如何读取本地 txt/csv 文件作为请求参数</h3>`,38),A={href:"https://www.jianshu.com/p/3b2d3b643415",target:"_blank",rel:"noopener noreferrer"},B=n('<p>（1）依次点击【添加】=&gt;【配置元件】=&gt;【CSV 数据文件设置】</p><p>配置如下所示：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/image-20191127175820747.png" alt="image-20191127175820747" tabindex="0" loading="lazy"><figcaption>image-20191127175820747</figcaption></figure><p>重要配置说明（其他配置根据实际情况填）：</p><ul><li>文件名：输入需要导入的数据文件位置。</li><li>文件编码：设为 UTF-8，避免乱码。</li><li>变量名称：使用 <code>,</code> 分隔输入变量列表。如截图中设置了两个变量 <code>a</code> 和 <code>b</code></li></ul><p>（2）在 HTTP 请求的消息体数据中配置参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[{&quot;a&quot;:&quot;${a}&quot;,&quot;b&quot;:&quot;${b}&quot;}]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如何有序发送数据" tabindex="-1"><a class="header-anchor" href="#如何有序发送数据" aria-hidden="true">#</a> 如何有序发送数据</h3><p>依次点击【添加】=&gt;【逻辑控制器】=&gt;【事务控制器】</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',10),D={href:"https://jmeter.apache.org/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/apache/jmeter",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.cnblogs.com/TankXiao/p/4045439.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.yiibai.com/jmeter",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.jianshu.com/p/3b2d3b643415",target:"_blank",rel:"noopener noreferrer"};function U(F,K){const t=l("ExternalLinkIcon");return o(),s("div",null,[c,e("blockquote",null,[e("p",null,[e("a",h,[a("Jmeter"),i(t)]),a(" 是一款基于 Java 开发的功能和性能测试软件。")]),u]),g,e("p",null,[e("a",p,[a("Jmeter"),i(t)]),a(" 是一款使用 Java 开发的功能和性能测试软件。")]),m,f,e("ul",null,[e("li",null,[a("网络 - HTTP，HTTPS(Java，NodeJS，PHP，"),e("a",b,[a("ASP.NET"),i(t)]),a(" 等)")]),_,x,w,v,T,P,j,J,k]),S,e("ul",null,[y,e("li",null,[q,e("ul",null,[H,z,e("li",null,[e("a",C,[a("Bouncy Castle"),i(t)])])])])]),M,e("p",null,[a("进入 "),e("a",E,[I,i(t)]),a(" 选择需要版本进行下载。")]),N,e("p",null,[a("参考："),e("a",A,[a("Jmeter 读取本地 txt/csv 文件作为请求参数，实现接口自动化"),i(t)])]),B,e("ul",null,[e("li",null,[e("a",D,[a("Jmeter 官网"),i(t)])]),e("li",null,[e("a",V,[a("Jmeter Github"),i(t)])]),e("li",null,[e("a",G,[a("Jmeter 性能测试入门"),i(t)])]),e("li",null,[e("a",L,[a("易百教程 - Jmeter 教程"),i(t)])]),e("li",null,[e("a",O,[a("Jmeter 读取本地 txt/csv 文件作为请求参数，实现接口自动化"),i(t)])])])])}const R=r(d,[["render",U],["__file","03.Jmeter.html.vue"]]);export{R as default};
