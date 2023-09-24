import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as _,c as d,a as e,b as t,d as n,e as o}from"./app-9cc2d019.js";const s={},i=o('<h1 id="freemark-快速入门" tabindex="-1"><a class="header-anchor" href="#freemark-快速入门" aria-hidden="true">#</a> Freemark 快速入门</h1><blockquote><p>FreeMarker 是一款模板引擎： 即一种基于模板和要改变的数据， 并用来生成输出文本(HTML 网页，电子邮件，配置文件，源代码等)的通用工具。 它不是面向最终用户的，而是一个 Java 类库，是一款程序员可以嵌入他们所开发产品的组件。</p></blockquote><h2 id="freemark-简介" tabindex="-1"><a class="header-anchor" href="#freemark-简介" aria-hidden="true">#</a> Freemark 简介</h2><p>Freemark 模板编写为 FreeMarker Template Language (FTL)。它是简单的，专用的语言， <em>不是</em> 像 PHP 那样成熟的编程语言。在模板中，你可以专注于如何展现数据， 而在模板之外可以专注于要展示什么数据。</p><figure><img src="http://freemarker.foofun.cn/figures/overview.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',5),c={href:"http://freemarker.foofun.cn/gloss.html#gloss.MVC",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[t("Freemark 模板一句话概括就是："),e("strong",null,[e("em",null,[e("code",null,"模板 + 数据模型 = 输出")])])],-1),h=e("h2",{id:"总体结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总体结构","aria-hidden":"true"},"#"),t(" 总体结构")],-1),p=e("li",null,[e("strong",null,"文本"),t("：文本会照着原样来输出。")],-1),f=e("strong",null,"插值",-1),m=e("code",null,"${",-1),g=e("code",null,"}",-1),x=e("code",null,"#{",-1),k=e("code",null,"}",-1),b={href:"http://freemarker.foofun.cn/ref_depr_numerical_interpolation.html",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[e("strong",null,"FTL 标签"),t("：FTL 标签和 HTML 标签很相似，但是它们却是给 FreeMarker 的指示， 而且不会打印在输出内容中。")],-1),y=e("li",null,[e("strong",null,"注释"),t("：注释和 HTML 的注释也很相似，但它们是由 "),e("code",null,"<#--"),t(" 和 "),e("code",null,"-->"),t("来分隔的。注释会被 FreeMarker 直接忽略， 更不会在输出内容中显示。")],-1),F=o('<figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/ftl-template.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>🔔 注意：</p><ul><li>FTL 是区分大小写的。</li><li><code>插值</code> 仅仅可以在 <code>文本</code> 中使用。</li><li><code>FTL 标签</code> 不可以在其他 <code>FTL 标签</code> 和 <code>插值</code> 中使用。</li><li><code>注释</code> 可以放在 <code>FTL 标签</code> 和 <code>插值</code> 中。</li></ul></blockquote><h3 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h3>',3),q={href:"http://freemarker.foofun.cn/gloss.html#gloss.predefinedDirective",target:"_blank",rel:"noopener noreferrer"},L={href:"http://freemarker.foofun.cn/gloss.html#gloss.userDefinedDirective",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"@",-1),M=e("code",null,"#",-1),w=e("p",null,"🔔 注意：",-1),H=e("li",null,"FreeMarker 仅仅关心 FTL 标签的嵌套而不关心 HTML 标签的嵌套。 它只会把 HTML 看做是文本，不会来解释 HTML。",-1),$=e("li",null,"如果你尝试使用一个不存在的指令(比如，输错了指令的名称)， FreeMarker 就会拒绝执行模板，同时抛出错误信息。",-1),C={href:"http://freemarker.foofun.cn/gloss.html#gloss.whiteSpace",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"表达式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#表达式","aria-hidden":"true"},"#"),t(" 表达式")],-1),V={href:"http://freemarker.foofun.cn/dgui_template_exp.html",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"这里",-1),D={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct",target:"_blank",rel:"noopener noreferrer"},E={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_string",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,'"Foo"',-1),B=e("code",null,"'Foo'",-1),U=e("code",null,`"It's \\"quoted\\""`,-1),z=e("code",null,`'It\\'s "quoted"'`,-1),J=e("code",null,'r"C:\\raw\\string"',-1),P={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_number",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"123.45",-1),A={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_boolean",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"true",-1),W=e("code",null,"false",-1),K={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_seuqence",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,'["foo", "bar", 123.45]',-1),Q=e("code",null,"0..9",-1),R=e("code",null,"0..<10",-1),X=e("code",null,"0..!10",-1),Y=e("code",null,"0..",-1),Z={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_hash",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,'{"name":"green mouse", "price":150}',-1),te={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var",target:"_blank",rel:"noopener noreferrer"},le={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_toplevel",target:"_blank",rel:"noopener noreferrer"},ne=e("code",null,"user",-1),oe={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_hash",target:"_blank",rel:"noopener noreferrer"},re=e("code",null,"user.name",-1),ae=e("code",null,'user["name"]',-1),_e={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_sequence",target:"_blank",rel:"noopener noreferrer"},de=e("code",null,"products[5]",-1),se={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_special",target:"_blank",rel:"noopener noreferrer"},ie=e("code",null,".main",-1),ce={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop",target:"_blank",rel:"noopener noreferrer"},ue={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop_interpolation",target:"_blank",rel:"noopener noreferrer"},he=e("code",null,'"Hello ${user}!"',-1),pe=e("code",null,'"Hello " + user + "!"',-1),fe={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_get_character",target:"_blank",rel:"noopener noreferrer"},me=e("code",null,"name[0]",-1),ge={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop_slice",target:"_blank",rel:"noopener noreferrer"},xe=e("code",null,"name[0..4]",-1),ke=e("code",null,"name[0..<5]",-1),be=e("code",null,"name[0..*5]",-1),ve=e("code",null,"name[5..]",-1),ye={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_sequenceop",target:"_blank",rel:"noopener noreferrer"},Fe={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_sequenceop_cat",target:"_blank",rel:"noopener noreferrer"},qe=e("code",null,'users + ["guest"]',-1),Le={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_seqenceop_slice",target:"_blank",rel:"noopener noreferrer"},Te=e("code",null,"products[20..29]",-1),Me=e("code",null,"products[20..<30]",-1),we=e("code",null,"products[20..*10]",-1),He=e("code",null,"products[20..]",-1),$e={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_hashop",target:"_blank",rel:"noopener noreferrer"},Ce={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_hashop_cat",target:"_blank",rel:"noopener noreferrer"},Ie=e("code",null,'passwords + { "joe": "secret42" }',-1),Ve={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_arit",target:"_blank",rel:"noopener noreferrer"},Ne=e("code",null,"(x * 1.5 + 10) / 2 - y % 100",-1),De={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_comparison",target:"_blank",rel:"noopener noreferrer"},Ee=e("code",null,"x == y",-1),Se=e("code",null,"x != y",-1),Be=e("code",null,"x < y",-1),Ue=e("code",null,"x > y",-1),ze=e("code",null,"x >= y",-1),Je=e("code",null,"x <= y",-1),Pe=e("code",null,"x lt y",-1),je=e("code",null,"x lte y",-1),Ae=e("code",null,"x gt y",-1),Ge=e("code",null,"x gte y",-1),We={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_logicalop",target:"_blank",rel:"noopener noreferrer"},Ke=e("code",null,"!registered && (firstVisit || fromEurope)",-1),Oe={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_builtin",target:"_blank",rel:"noopener noreferrer"},Qe=e("code",null,"name?upper_case",-1),Re=e("code",null,"path?ensure_starts_with('/')",-1),Xe={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_methodcall",target:"_blank",rel:"noopener noreferrer"},Ye=e("code",null,'repeat("What", 3)',-1),Ze={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing",target:"_blank",rel:"noopener noreferrer"},et={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing_default",target:"_blank",rel:"noopener noreferrer"},tt=e("code",null,'name!"unknown"',-1),lt=e("code",null,'(user.name)!"unknown"',-1),nt=e("code",null,"name!",-1),ot=e("code",null,"(user.name)!",-1),rt={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing_test",target:"_blank",rel:"noopener noreferrer"},at=e("code",null,"name??",-1),_t=e("code",null,"(user.name)??",-1),dt={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_assignment",target:"_blank",rel:"noopener noreferrer"},st=e("code",null,"=",-1),it=e("code",null,"+=",-1),ct=e("code",null,"-=",-1),ut=e("code",null,"*=",-1),ht=e("code",null,"/=",-1),pt=e("code",null,"%=",-1),ft=e("code",null,"++",-1),mt=e("code",null,"--",-1),gt=e("h3",{id:"变量",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#变量","aria-hidden":"true"},"#"),t(" 变量")],-1),xt=e("em",null,"仅仅",-1),kt={href:"http://freemarker.foofun.cn/dgui_template_overallstructure.html",target:"_blank",rel:"noopener noreferrer"},bt=e("code",null,"<h1>Hello ${name}!</h1>",-1),vt={href:"http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_string",target:"_blank",rel:"noopener noreferrer"},yt=o(`<p>正确示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;#include &quot;/footer/\${company}.html&quot;&gt;
&lt;#if big&gt;...&lt;/#if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>错误示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;#if \${big}&gt;...&lt;/#if&gt;
&lt;#if &quot;\${big}&quot;&gt;...&lt;/#if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>Freemark 支持的类型有：</p><h3 id="标量" tabindex="-1"><a class="header-anchor" href="#标量" aria-hidden="true">#</a> 标量</h3><p>字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${&quot;Hello \${user}&quot;}
\${&quot;I can escape with \\\\ \${user}&quot;}
\${r&quot;Now I can read dollar signs $&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hello deister
I can escape with \\ deister
Now I can read dollar signs $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数字</p><p>布尔值</p><p>日期/时间 (日期，时间或日期时间)</p><h3 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h3><ul><li>哈希表</li><li>序列</li><li>集合</li></ul><h3 id="子程序" tabindex="-1"><a class="header-anchor" href="#子程序" aria-hidden="true">#</a> 子程序</h3>`,17),Ft={href:"http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_method",target:"_blank",rel:"noopener noreferrer"},qt={href:"http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_userdefdir",target:"_blank",rel:"noopener noreferrer"},Lt=e("h3",{id:"其它",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其它","aria-hidden":"true"},"#"),t(" 其它")],-1),Tt={href:"http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_node",target:"_blank",rel:"noopener noreferrer"},Mt=e("h2",{id:"转义符",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#转义符","aria-hidden":"true"},"#"),t(" 转义符")],-1),wt=e("p",null,"FTL 支持的所有转义字符：",-1),Ht=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"转义序列"),e("th",{style:{"text-align":"left"}},"含义")])],-1),$t=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,'\\"')]),e("td",{style:{"text-align":"left"}},"引号 (u0022)")],-1),Ct=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\'")]),e("td",{style:{"text-align":"left"}},"单引号(又称为撇号) (u0027)")],-1),It=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\{")]),e("td",{style:{"text-align":"left"}},[t("起始花括号："),e("code",null,"{")])],-1),Vt=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\\\")]),e("td",{style:{"text-align":"left"}},"反斜杠 (u005C)")],-1),Nt=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\n")]),e("td",{style:{"text-align":"left"}},"换行符 (u000A)")],-1),Dt=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\r")]),e("td",{style:{"text-align":"left"}},"回车 (u000D)")],-1),Et=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\t")]),e("td",{style:{"text-align":"left"}},"水平制表符(又称为 tab) (u0009)")],-1),St=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\b")]),e("td",{style:{"text-align":"left"}},"退格 (u0008)")],-1),Bt=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\f")]),e("td",{style:{"text-align":"left"}},"换页 (u000C)")],-1),Ut=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\l")]),e("td",{style:{"text-align":"left"}},[t("小于号："),e("code",null,"<")])],-1),zt=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\g")]),e("td",{style:{"text-align":"left"}},[t("大于号："),e("code",null,">")])],-1),Jt=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"\\a")]),e("td",{style:{"text-align":"left"}},[t("&符："),e("code",null,"&")])],-1),Pt=e("td",{style:{"text-align":"left"}},[e("code",null,"\\xCode")],-1),jt={style:{"text-align":"left"}},At={href:"http://freemarker.foofun.cn/gloss.html#gloss.unicode",target:"_blank",rel:"noopener noreferrer"},Gt={href:"http://freemarker.foofun.cn/gloss.html#gloss.UCS",target:"_blank",rel:"noopener noreferrer"},Wt=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),t(" 参考资料")],-1),Kt={href:"https://github.com/apache/freemarker",target:"_blank",rel:"noopener noreferrer"},Ot={href:"http://freemarker.foofun.cn/",target:"_blank",rel:"noopener noreferrer"},Qt={href:"https://try.freemarker.apache.org/",target:"_blank",rel:"noopener noreferrer"};function Rt(Xt,Yt){const l=a("ExternalLinkIcon");return _(),d("div",null,[i,e("p",null,[t("这种方式通常被称为 "),e("a",c,[t("MVC (模型 视图 控制器) 模式"),n(l)]),t("，对于动态网页来说，是一种特别流行的模式。 它帮助从开发人员(Java 程序员)中分离出网页设计师(HTML 设计师)。设计师无需面对模板中的复杂逻辑， 在没有程序员来修改或重新编译代码时，也可以修改页面的样式。")]),u,h,e("ul",null,[p,e("li",null,[f,t("：这部分的输出会被计算的值来替换。插值由 "),m,t(" and "),g,t(" 所分隔(或者 "),x,t(" and "),k,t("，这种风格已经不建议再使用了；"),e("a",b,[t("点击查看更多"),n(l)]),t(")。")]),v,y]),F,e("p",null,[t("FTL 指令有两种类型： "),e("a",q,[t("预定义指令"),n(l)]),t(" 和 "),e("a",L,[t("用户自定义指令"),n(l)]),t("。 对于用户自定义的指令使用 "),T,t(" 来代替 "),M,t("。")]),e("blockquote",null,[w,e("ul",null,[H,$,e("li",null,[t("FreeMarker 会忽略 FTL 标签中多余的 "),e("a",C,[t("空白标记"),n(l)]),t("。")])])]),I,e("p",null,[t("以下为快速浏览清单，如果需要了解更多细节，请参考"),e("a",V,[N,n(l)]),t("。")]),e("ul",null,[e("li",null,[e("a",D,[t("直接指定值"),n(l)]),e("ul",null,[e("li",null,[e("a",E,[t("字符串"),n(l)]),t("： "),S,t(" 或者 "),B,t(" 或者 "),U,t(" 或者 "),z,t(" 或者 "),J]),e("li",null,[e("a",P,[t("数字"),n(l)]),t("： "),j]),e("li",null,[e("a",A,[t("布尔值"),n(l)]),t("： "),G,t("， "),W]),e("li",null,[e("a",K,[t("序列"),n(l)]),t("： "),O,t("； 值域： "),Q,t(", "),R,t(" (或 "),X,t("), "),Y]),e("li",null,[e("a",Z,[t("哈希表"),n(l)]),t("： "),ee])])]),e("li",null,[e("a",te,[t("检索变量"),n(l)]),e("ul",null,[e("li",null,[e("a",le,[t("顶层变量"),n(l)]),t("： "),ne]),e("li",null,[e("a",oe,[t("从哈希表中检索数据"),n(l)]),t("： "),re,t("， "),ae]),e("li",null,[e("a",_e,[t("从序列中检索数据"),n(l)]),t("： "),de]),e("li",null,[e("a",se,[t("特殊变量"),n(l)]),t("： "),ie])])]),e("li",null,[e("a",ce,[t("字符串操作"),n(l)]),e("ul",null,[e("li",null,[e("a",ue,[t("插值(或连接)"),n(l)]),t("： "),he,t(" (或 "),pe,t(")")]),e("li",null,[e("a",fe,[t("获取一个字符"),n(l)]),t("： "),me]),e("li",null,[e("a",ge,[t("字符串切分："),n(l)]),t(" 包含结尾： "),xe,t("，不包含结尾： "),ke,t("，基于长度(宽容处理)： "),be,t("，去除开头："),ve])])]),e("li",null,[e("a",ye,[t("序列操作"),n(l)]),e("ul",null,[e("li",null,[e("a",Fe,[t("连接"),n(l)]),t("： "),qe]),e("li",null,[e("a",Le,[t("序列切分"),n(l)]),t("：包含结尾： "),Te,t("， 不包含结尾： "),Me,t("，基于长度(宽容处理)："),we,t("，去除开头： "),He])])]),e("li",null,[e("a",$e,[t("哈希表操作"),n(l)]),e("ul",null,[e("li",null,[e("a",Ce,[t("连接"),n(l)]),t("： "),Ie])])]),e("li",null,[e("a",Ve,[t("算术运算"),n(l)]),t("： "),Ne]),e("li",null,[e("a",De,[t("比较运算"),n(l)]),t("： "),Ee,t("， "),Se,t("， "),Be,t("， "),Ue,t("， "),ze,t("， "),Je,t("， "),Pe,t("， "),je,t("， "),Ae,t("， "),Ge,t("， 等等。。。。。。")]),e("li",null,[e("a",We,[t("逻辑操作"),n(l)]),t("： "),Ke]),e("li",null,[e("a",Oe,[t("内建函数"),n(l)]),t("： "),Qe,t(", "),Re]),e("li",null,[e("a",Xe,[t("方法调用"),n(l)]),t("： "),Ye]),e("li",null,[e("a",Ze,[t("处理不存在的值"),n(l)]),e("ul",null,[e("li",null,[e("a",et,[t("默认值"),n(l)]),t("： "),tt,t(" 或者 "),lt,t(" 或者 "),nt,t(" 或者 "),ot]),e("li",null,[e("a",rt,[t("检测不存在的值"),n(l)]),t("： "),at,t(" 或者 "),_t])])]),e("li",null,[e("a",dt,[t("赋值操作"),n(l)]),t("： "),st,t(", "),it,t(", "),ct,t(", "),ut,t(", "),ht,t(", "),pt,t(", "),ft,t(", "),mt])]),gt,e("p",null,[t("注意：变量 "),xt,t(" 在 "),e("a",kt,[t("文本区"),n(l)]),t(" (比如 "),bt,t(") 和 "),e("a",vt,[t("字符串"),n(l)]),t(" 中起作用。")]),yt,e("ul",null,[e("li",null,[e("a",Ft,[t("方法和函数"),n(l)])]),e("li",null,[e("a",qt,[t("用户自定义指令"),n(l)])])]),Lt,e("ul",null,[e("li",null,[e("a",Tt,[t("结点"),n(l)])])]),Mt,wt,e("table",null,[Ht,e("tbody",null,[$t,Ct,It,Vt,Nt,Dt,Et,St,Bt,Ut,zt,Jt,e("tr",null,[Pt,e("td",jt,[t("字符的 16 进制 "),e("a",At,[t("Unicode"),n(l)]),t(" 码 ("),e("a",Gt,[t("UCS"),n(l)]),t(" 码)")])])])]),Wt,e("ul",null,[e("li",null,[e("a",Kt,[t("Freemark Github"),n(l)])]),e("li",null,[e("a",Ot,[t("Freemark 中文教程"),n(l)])]),e("li",null,[e("a",Qt,[t("在线 Freemark 工具"),n(l)])])])])}const tl=r(s,[["render",Rt],["__file","01.Freemark.html.vue"]]);export{tl as default};
