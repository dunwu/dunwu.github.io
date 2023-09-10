import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as d,a as e,b as a,d as s,e as t}from"./app-afc5da4f.js";const r={},c=t('<h1 id="代码工程规范" tabindex="-1"><a class="header-anchor" href="#代码工程规范" aria-hidden="true">#</a> 代码工程规范</h1><blockquote><p>软件项目开发规范。</p></blockquote><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><p>以下为项目根目录下的文件和目录的组织结构：</p><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><p><strong>codes</strong> - 代码目录。<br><strong>configurations</strong> - 配置目录。一般存放项目相关的配置文件。如 maven 的 settings.xml，nginx 的 nginx.conf 等。<br><strong>demos</strong> - 示例目录。<br><strong>docs</strong> - 文档目录。<br><strong>libs</strong> - 第三方库文件。<br><strong>scripts</strong> - 脚本目录。一般存放用于启动、构建项目的可执行脚本文件。<br><strong>packages</strong> - 打包文件目录。Java 项目中可能是 jar、war 等；前端项目中可能是 zip、rar 等；电子书项目中可能是 pdf 等。</p><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h3>',7),p=e("strong",null,".gitignore",-1),u=e("br",null,null,-1),g=e("strong",null,".gitattributes",-1),m=e("br",null,null,-1),v=e("strong",null,".editorconfig",-1),b=e("br",null,null,-1),h={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),x=e("strong",null,"LICENSE",-1),_=t(`<h2 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h2><h3 id="目录名" tabindex="-1"><a class="header-anchor" href="#目录名" aria-hidden="true">#</a> 目录名</h3><p>目录名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。</p><p>目录名建议只使用小写字母，不使用大写字母。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不佳： Test
正确： test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>目录名可以使用数字，但不应该是首字符。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不佳： 1-demo
正确： demo1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>目录名包含多个单词时，单词之间建议使用半角的连词线（<code>-</code>）分隔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不佳： common_demo
正确： common-demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件名" tabindex="-1"><a class="header-anchor" href="#文件名" aria-hidden="true">#</a> 文件名</h3><p>文档的文件名不得含有空格。</p><p>文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>错误： 名词解释.md
正确： glossary.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>文件名建议只使用小写字母，不使用大写字母。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>错误：TroubleShooting.md
正确：troubleshooting.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了醒目，某些说明文件的文件名，可以使用大写字母，比如<code>README</code>、<code>LICENSE</code>。</p><p>一些约定俗成的习惯可以保持传统写法，如：Java 的文件名一般使用驼峰命名法，且首字母大写；配置文件 <code>applicationContext.xml</code> ；React 中的 JSX 组件文件名一般使用驼峰命名法，且首字母大写等。</p><p>文件名包含多个单词时，单词之间建议使用半角的连词线（<code>-</code>）分隔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不佳：advanced_usage.md
正确：advanced-usage.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-日志规范" tabindex="-1"><a class="header-anchor" href="#java-日志规范" aria-hidden="true">#</a> Java 日志规范</h2>`,20),f={href:"https://yq.aliyun.com/attachment/download/?id=4942",target:"_blank",rel:"noopener noreferrer"},w=t(`<ol><li>【强制】应用中不可直接使用日志系统（Log4j、Logback）中的 API，而应依赖使用日志框架 SLF4J 中的 API，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">Abc</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>【强制】日志文件推荐至少保存 <code>30</code> 天，因为有些异常具备以“周”为频次发生的特点。</p></li><li><p>【强制】应用中的扩展日志（如打点、临时监控、访问日志等）命名方式：<code>appName_logType_logName.log</code>。logType:日志类型，推荐分类有 stats/desc/monitor/visit 等；logName:日志描述。这种命名的好处：通过文件名就可知道日志文件属于什么应用，什么类型，什么目的，也有利于归类查找。</p></li></ol><p><strong>正例</strong>：mppserver 应用中单独监控时区转换异常，如：<code>mppserver_monitor_timeZoneConvert.log</code></p><p><strong>说明</strong>：推荐对日志进行分类，如将错误日志和业务日志分开存放，便于开发人员查看，也便于通过日志对系统进行及时监控。</p><ol start="4"><li>【强制】对 <code>trace/debug/info</code> 级别的日志输出，必须使用条件输出形式或者使用占位符的方式。</li></ol><p>说明：<code>logger.debug(&quot;Processing trade with id: &quot; + id + &quot; and symbol: &quot; + symbol);</code> 如果日志级别是 warn，上述日志不会打印，但是会执行字符串拼接操作，如果 symbol 是对象，会执行 toString()方法，浪费了系统资源，执行了上述操作，最终日志却没有打印。</p><p><strong>正例：（条件）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (logger.isDebugEnabled()) {
logger.debug(&quot;Processing trade with id: &quot; + id + &quot; and symbol: &quot; + symbol);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正例：（占位符）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logger.debug(&quot;Processing trade with id: {} and symbol : {} &quot;, id, symbol);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>【强制】避免重复打印日志，浪费磁盘空间。务必在 <code>log4j.xml</code> 或 <code>logback.xml</code> 中设置 <code>additivity=false</code>。</li></ol><p><strong>正例</strong>：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.taobao.dubbo.config<span class="token punctuation">&quot;</span></span> <span class="token attr-name">additivity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>【强制】异常信息应该包括两类信息：案发现场信息和异常堆栈信息。如果不处理，那么通过关键字 throws 往上抛出。</li></ol><p><strong>正例</strong>：logger.error(各类参数或者对象 toString + &quot;_&quot; + e.getMessage(), e);</p><ol start="9"><li>【强制】日志格式遵循如下格式：</li></ol><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javalib/log/logback/log-pattern.png"></div><p>打印出的日志信息如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2018-03-29 15:06:57.277 [javalib] [main] [TRACE] i.g.dunwu.javalib.log.LogbackDemo#main - 这是一条 trace 日志记录
2018-03-29 15:06:57.282 [javalib] [main] [DEBUG] i.g.dunwu.javalib.log.LogbackDemo#main - 这是一条 debug 日志记录
2018-03-29 15:06:57.282 [javalib] [main] [INFO] i.g.dunwu.javalib.log.LogbackDemo#main - 这是一条 info 日志记录
2018-03-29 15:06:57.282 [javalib] [main] [WARN] i.g.dunwu.javalib.log.LogbackDemo#main - 这是一条 warn 日志记录
2018-03-29 15:06:57.282 [javalib] [main] [ERROR] i.g.dunwu.javalib.log.LogbackDemo#main - 这是一条 error 日志记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>【参考】slf4j 支持的日志级别，按照级别从低到高，分别为：<code>trace &lt; debug &lt; info &lt; warn &lt; error</code>。</li></ol><p>建议只使用 <code>debug &lt; info &lt; warn &lt; error</code> 四个级别。</p><ul><li><code>error</code> 日志级别只记录系统逻辑出错、异常等重要的错误信息。如非必要，请不要在此场景打出 error 级别。</li><li><code>warn</code> 日志级别记录用户输入参数错误的情况，避免用户投诉时，无所适从。</li><li><code>info</code> 日志级别记录业务逻辑中一些重要步骤信息。</li><li><code>debug</code> 日志级别记录一些用于调试的信息。</li></ul><ol start="10"><li>【参考】有一些第三方框架或库的日志对于排查问题具有一定的帮助，如 Spring、Dubbo、Mybatis 等。这些框架所使用的日志库未必和本项目一样，为了避免出现日志无法输出的问题，请引入对应的桥接 jar 包。</li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,25),y={href:"https://yq.aliyun.com/attachment/download/?id=4942",target:"_blank",rel:"noopener noreferrer"};function j(q,E){const n=i("ExternalLinkIcon");return l(),d("div",null,[c,e("p",null,[p,a(" - git 忽略规则。"),u,g,a(" - git 属性规则。"),m,v,a(" - 编辑器书写规则。"),b,e("strong",null,[e("a",h,[a("README.md"),s(n)])]),a(" - 项目说明文件。"),k,x,a(" - 开源协议。如果项目是开源文件，需要添加。")]),_,e("blockquote",null,[e("p",null,[a("这里基于"),e("a",f,[a("阿里巴巴 Java 开发手册"),s(n)]),a("日志规约章节，结合自己的开发经验做了一些增删和调整。")])]),w,e("ul",null,[e("li",null,[e("a",y,[a("阿里巴巴 Java 开发手册"),s(n)]),a("日志规约章节")])])])}const N=o(r,[["render",j],["__file","index.html.vue"]]);export{N as default};
