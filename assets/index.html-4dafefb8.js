import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as r,a as n,b as e,d as s,e as t}from"./app-d70a109d.js";const c={},d=t(`<h1 id="springboot-之-banner-定制" tabindex="-1"><a class="header-anchor" href="#springboot-之-banner-定制" aria-hidden="true">#</a> SpringBoot 之 banner 定制</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Spring Boot 启动时默认会显示以下 LOGO：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  .   ____          _            __ _ _
 /\\\\ / ___&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | &#39;_ | &#39;_| | &#39;_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  &#39;  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.1.1.RELEASE)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，Spring Boot 支持自定义 logo 的功能。</p><p>让我们来看看如何实现的。</p><p>只要你在 <code>resources</code> 目录下放置名为 <code>banner.txt</code>、<code>banner.gif</code> 、<code>banner.jpg</code> 或 <code>banner.png</code> 的文件，Spring Boot 会自动加载，将其作为启动时打印的 logo。</p><ul><li>对于文本文件，Spring Boot 会将其直接输出。</li><li>对于图像文件（ <code>banner.gif</code> 、<code>banner.jpg</code> 或 <code>banner.png</code> ），Spring Boot 会将图像转为 ASCII 字符，然后输出。</li></ul><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>banner.txt 文件中还可以使用变量来设置字体、颜色、版本号。</p>`,10),_=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"变量"),n("th",null,"描述")])],-1),p=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"${application.version}")]),n("td",null,[n("code",null,"MANIFEST.MF"),e(" 中定义的版本。如："),n("code",null,"1.0")])],-1),u=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"${application.formatted-version}")]),n("td",null,[n("code",null,"MANIFEST.MF"),e(" 中定义的版本，并添加一个 "),n("code",null,"v"),e(" 前缀。如："),n("code",null,"v1.0")])],-1),v=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"${spring-boot.version}")]),n("td",null,[e("Spring Boot 版本。如："),n("code",null,"2.1.1.RELEASE"),e(".")])],-1),m=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"${spring-boot.formatted-version}")]),n("td",null,[e("Spring Boot 版本，并添加一个 "),n("code",null,"v"),e(" 前缀。如："),n("code",null,"v2.1.1.RELEASE")])],-1),b=n("td",{style:{"text-align":"left"}},[n("code",null,"${Ansi.NAME}"),e(" (or "),n("code",null,"${AnsiColor.NAME}"),e(", "),n("code",null,"${AnsiBackground.NAME}"),e(", "),n("code",null,"${AnsiStyle.NAME}"),e(")")],-1),g={href:"https://github.com/spring-projects/spring-boot/tree/v2.1.1.RELEASE/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/ansi/AnsiPropertySource.java",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"AnsiPropertySource",-1),k=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"${application.title}")]),n("td",null,[n("code",null,"MANIFEST.MF"),e(" 中定义的应用名。")])],-1),f=t(`<p>示例：</p><p>在 Spring Boot 项目中的 <code>resources</code> 目录下添加一个名为 banner.txt 的文件，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${AnsiColor.BRIGHT_YELLOW}\${AnsiStyle.BOLD}
 ________  ___  ___  ________   ___       __   ___  ___
|\\   ___ \\|\\  \\|\\  \\|\\   ___  \\|\\  \\     |\\  \\|\\  \\|\\  \\
\\ \\  \\_|\\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\    \\ \\  \\ \\  \\\\\\  \\
 \\ \\  \\ \\\\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\  __\\ \\  \\ \\  \\\\\\  \\
  \\ \\  \\_\\\\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\|\\__\\_\\  \\ \\  \\\\\\  \\
   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\____________\\ \\_______\\
    \\|_______|\\|_______|\\|__| \\|__|\\|____________|\\|_______|
\${AnsiBackground.WHITE}\${AnsiColor.RED}\${AnsiStyle.UNDERLINE}
:: Spring Boot ::             (v\${spring-boot.version})
:: Spring Boot Tutorial ::    (v1.0.0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：<code>\${}</code> 设置字体颜色的变量之间不能换行或空格分隔，否则会导致除最后一个变量外，都不生效。</p></blockquote><p>启动应用后，控制台将打印如下 logo：</p><p><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20181221231330.png" alt="img" loading="lazy"><br> 推荐两个生成字符画的网站，可以将生成的字符串放入这个<code>banner.txt</code> 文件：</p>`,6),x={href:"http://www.network-science.de/ascii/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://patorjk.com/software/taag/",target:"_blank",rel:"noopener noreferrer"},S=t(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><code>application.properties</code> 中与 Banner 相关的配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># banner 模式。有三种模式：console/log/off</span>
<span class="token comment"># console 打印到控制台（通过 System.out）</span>
<span class="token comment"># log - 打印到日志中</span>
<span class="token comment"># off - 关闭打印</span>
<span class="token key attr-name">spring.main.banner-mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">off</span>
<span class="token comment"># banner 文件编码</span>
<span class="token key attr-name">spring.banner.charset</span> <span class="token punctuation">=</span> <span class="token value attr-value">UTF-8</span>
<span class="token comment"># banner 文本文件路径</span>
<span class="token key attr-name">spring.banner.location</span> <span class="token punctuation">=</span> <span class="token value attr-value">classpath:banner.txt</span>
<span class="token comment"># banner 图像文件路径（可以选择 png,jpg,gif 文件）</span>
<span class="token key attr-name">spring.banner.image.location</span> <span class="token punctuation">=</span> <span class="token value attr-value">classpath:banner.gif</span>
used).
<span class="token comment"># 图像 banner 的宽度（字符数）</span>
<span class="token key attr-name">spring.banner.image.width</span> <span class="token punctuation">=</span> <span class="token value attr-value">76</span>
<span class="token comment"># 图像 banner 的高度（字符数）</span>
<span class="token key attr-name">spring.banner.image.height</span> <span class="token value attr-value">=</span>
<span class="token comment"># 图像 banner 的左边界（字符数）</span>
<span class="token key attr-name">spring.banner.image.margin</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>
<span class="token comment"># 是否将图像转为黑色控制台主题</span>
<span class="token key attr-name">spring.banner.image.invert</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，你也可以在 YAML 文件中配置，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">main</span><span class="token punctuation">:</span>
    <span class="token key atrule">banner-mode</span><span class="token punctuation">:</span> off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编程" tabindex="-1"><a class="header-anchor" href="#编程" aria-hidden="true">#</a> 编程</h2><p>默认，Spring Boot 会注册一个 <code>SpringBootBanner</code> 的单例 Bean，用来负责打印 Banner。</p><p>如果想完全个人定制 Banner，可以这么做：先实现 <code>org.springframework.boot.Banner#printBanner</code> 接口来自己定制 Banner。在将这个 Banner 通过 <code>SpringApplication.setBanner(…)</code> 方法注入 Spring Boot。</p><h2 id="示例源码" tabindex="-1"><a class="header-anchor" href="#示例源码" aria-hidden="true">#</a> 示例源码</h2>`,9),y={href:"https://github.com/dunwu/spring-boot-tutorial/tree/master/codes/spring-boot-banner",target:"_blank",rel:"noopener noreferrer"},E=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),e(" 参考资料")],-1),A={href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-banner",target:"_blank",rel:"noopener noreferrer"};function w($,N){const a=o("ExternalLinkIcon");return i(),r("div",null,[d,n("table",null,[_,n("tbody",null,[p,u,v,m,n("tr",null,[b,n("td",null,[e("ANSI 颜色、字体。更多细节，参考："),n("a",g,[h,s(a)]),e("。")])]),k])]),f,n("ul",null,[n("li",null,[n("a",x,[e("http://www.network-science.de/ascii/"),s(a)])]),n("li",null,[n("a",B,[e("http://patorjk.com/software/taag/"),s(a)])])]),S,n("blockquote",null,[n("p",null,[e("示例源码："),n("a",y,[e("spring-boot-banner"),s(a)])])]),E,n("ul",null,[n("li",null,[n("a",A,[e("Spring Boot 官方文档之 Customizing the Banner"),s(a)])])])])}const M=l(c,[["render",w],["__file","index.html.vue"]]);export{M as default};