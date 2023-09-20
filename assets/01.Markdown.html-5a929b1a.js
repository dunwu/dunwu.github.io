import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as s,b as a,d as t,e as l}from"./app-fcc32256.js";const d={},p=l(`<h1 id="markdown-极简教程" tabindex="-1"><a class="header-anchor" href="#markdown-极简教程" aria-hidden="true">#</a> Markdown 极简教程</h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><p>Markdown 支持六个级别的标题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本样式" tabindex="-1"><a class="header-anchor" href="#文本样式" aria-hidden="true">#</a> 文本样式</h2><blockquote><p>💡 粗体、斜体、删除线可以混合使用。</p><p>在 Markdown 中，粗体文本、斜体文本可以使用 <code>*</code> 或 <code>_</code> 符号标记。建议统一风格，始终只用一种符号。</p></blockquote><table><thead><tr><th>语法</th><th>效果</th></tr></thead><tbody><tr><td>普通文本</td><td>普通文本</td></tr><tr><td><code>*斜体文本*</code> <code>_斜体文本_</code></td><td><em>斜体文本</em> <em>斜体文本</em></td></tr><tr><td><code>**粗体文本**</code> <code>__粗体文本__</code></td><td><strong>粗体文本</strong> <strong>粗体文本</strong></td></tr><tr><td><code>~~删除文本~~</code></td><td><s>删除文本</s></td></tr><tr><td><code>***粗斜体文本***</code> <code>___粗斜体文本___</code></td><td><strong><em>粗斜体文本</em></strong> <strong><em>粗斜体文本</em></strong></td></tr></tbody></table><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3><ul><li>RED</li><li>YELLOW</li><li>BLUE</li></ul><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><ol><li>第一步</li><li>第二步</li><li>第三步</li></ol><h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 完成任务</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划任务</label></li></ul><h3 id="多级列表" tabindex="-1"><a class="header-anchor" href="#多级列表" aria-hidden="true">#</a> 多级列表</h3><ul><li>数据结构 <ul><li>线性表 <ul><li>顺序表</li><li>链表 <ul><li>单链表</li><li>双链表</li></ul></li></ul></li><li>树 <ul><li>二叉树 <ul><li>二叉平衡树</li></ul></li></ul></li></ul></li></ul><h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h2><p><code>***</code>、<code>---</code>、<code>___</code> 都可以作为分割线。</p><hr><hr><hr><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2><h3 id="普通链接" tabindex="-1"><a class="header-anchor" href="#普通链接" aria-hidden="true">#</a> 普通链接</h3><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[钝悟的博客](https://dunwu.github.io/waterdrop/)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>[]</code> 中标记链接名。类似 HTML 中 <code>&lt;a&gt;</code> 元素的 <code>title</code> 属性。</li><li><code>()</code> 中标记链接的 url，也支持相对路径（前提是资源可以访问）。类似 HTML 中 <code>&lt;a&gt;</code> 元素的 <code>href</code> 属性。</li></ul><p>效果：</p>`,28),h={href:"https://dunwu.github.io/waterdrop/",title:"blog",target:"_blank",rel:"noopener noreferrer"},m=l(`<h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3><p>Markdown 引用图片的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![alt](url title)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>alt 和 title 即对应 HTML 中 img 元素的 alt 和 title 属性（都可省略）：</p><ul><li><p>alt - 表示图片显示失败时的替换文本。</p></li><li><p>title - 表示鼠标悬停在图片时的显示文本（注意这里要加引号）</p></li><li><p>url - 即图片的 url 地址</p></li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/common/dunwu-logo.png" alt="logo" tabindex="0" loading="lazy"><figcaption>logo</figcaption></figure><h3 id="图片链接" tabindex="-1"><a class="header-anchor" href="#图片链接" aria-hidden="true">#</a> 图片链接</h3><p>可以将图片和链接混合使用。</p>`,8),u={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"},g=s("img",{src:"https://raw.githubusercontent.com/dunwu/images/dev/common/dunwu-logo.png",alt:"logo",tabindex:"0",loading:"lazy"},null,-1),x=s("figcaption",null,"logo",-1),b=l('<h3 id="锚点" tabindex="-1"><a class="header-anchor" href="#锚点" aria-hidden="true">#</a> 锚点</h3><p>其实呢，每一个标题都是一个锚点，和 HTML 的锚点（<code>#</code>）类似，比如：<a href="#Markdown-%E5%BA%94%E7%94%A8%E6%8C%87%E5%8D%97">回到顶部</a></p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>普通引用：</p>',4),k=s("p",null,[a("❓ 什么是 "),s("code",null,"Markdown")],-1),v=s("strong",null,"Markdown",-1),w={href:"https://zh.wikipedia.org/wiki/%E8%BD%BB%E9%87%8F%E7%BA%A7%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zh.wikipedia.org/wiki/%E7%B4%84%E7%BF%B0%C2%B7%E6%A0%BC%E9%AD%AF%E4%BC%AF",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.wikipedia.org/wiki/XHTML",target:"_blank",rel:"noopener noreferrer"},_={href:"https://zh.wikipedia.org/wiki/HTML",target:"_blank",rel:"noopener noreferrer"},M={href:"https://zh.wikipedia.org/wiki/Markdown#cite_note-md-4",target:"_blank",rel:"noopener noreferrer"},z={href:"https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},L=l(`<p>嵌套引用：</p><blockquote><p>数据结构</p><blockquote><p>树</p><blockquote><p>二叉树</p><blockquote><p>平衡二叉树</p><blockquote><p>满二叉树</p></blockquote></blockquote></blockquote></blockquote></blockquote><h2 id="代码高亮" tabindex="-1"><a class="header-anchor" href="#代码高亮" aria-hidden="true">#</a> 代码高亮</h2><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h3><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`Markdown\` \`Doc\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果：</p><p><code>Markdown</code>, <code>Doc</code></p><h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3><p>语法一：在文本前后都使用三个反引号进行标记。【✔️ 推荐】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这是一个文本块。
这是一个文本块。
这是一个文本块。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法二：在连续几行的文本开头加入 1 个 Tab 或者 4 个空格。【❌ 不推荐】</p><pre><code>这是一个文本块。
这是一个文本块。
这是一个文本块。
</code></pre><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>在三个反引号后面加上编程语言的名字，另起一行开始写代码，最后一行再加上三个反引号。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[]args){} //Java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>echo &quot;hello GitHub&quot; #Bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myH1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;Welcome to my Homepage&#39;</span> <span class="token comment">//javascipt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string <span class="token operator">&amp;</span><span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> string<span class="token operator">&amp;</span> A<span class="token punctuation">,</span><span class="token keyword">const</span> string<span class="token operator">&amp;</span> B<span class="token punctuation">)</span> <span class="token comment">//cpp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><p>一般表格：</p><table><thead><tr><th>表头 1</th><th>表头 2</th></tr></thead><tbody><tr><td>表格单元</td><td>表格单元</td></tr><tr><td>表格单元</td><td>表格单元</td></tr></tbody></table><p>表格可以指定对齐方式：</p><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:left;">商品</th><th style="text-align:right;">价格</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">电脑</td><td style="text-align:right;">6000.0</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">鼠标</td><td style="text-align:right;">100.0</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">键盘</td><td style="text-align:right;">200.0</td></tr></tbody></table><h2 id="emoji-表情" tabindex="-1"><a class="header-anchor" href="#emoji-表情" aria-hidden="true">#</a> Emoji 表情</h2><blockquote><p>💡 注意：部分 Markdown 引擎支持 Emoji。</p></blockquote><p>合理使用 Emoji 表情，往往可以使得文章内容更加丰富生动。例如：✔️ ❌ 💡 🔔 ❗ ❓</p>`,28),E=s("p",null,"更多 Emoji 表情请参考：",-1),B={href:"http://emojihomepage.com/",target:"_blank",rel:"noopener noreferrer"},q={href:"http://www.emoji-cheat-sheet.com",target:"_blank",rel:"noopener noreferrer"},$=l('<h2 id="注脚" tabindex="-1"><a class="header-anchor" href="#注脚" aria-hidden="true">#</a> 注脚</h2><blockquote><p>💡 注意：部分 Markdown 引擎支持注脚。</p></blockquote><p>一个具有注脚的文本。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="数学公式" tabindex="-1"><a class="header-anchor" href="#数学公式" aria-hidden="true">#</a> 数学公式</h2><blockquote><p>💡 注意：部分 Markdown 引擎支持 Latex。</p></blockquote><p>很多文档中，需要引入一些数学符号、特殊符号，其排版问题比较头疼。这种问题，可以用 Latex 来解决，大部分 Markdown 引擎都支持 Latex。</p><p>Latex 可以使用 <code>$</code> 符号来标记 Latex 表达式，下面是一个数学公式示例：</p>',7),T=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"Γ"),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("msubsup",null,[s("mo",null,"∫"),s("mn",null,"0"),s("mi",{mathvariant:"normal"},"∞")]),s("msup",null,[s("mi",null,"t"),s("mrow",null,[s("mi",null,"z"),s("mo",null,"−"),s("mn",null,"1")])]),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mo",null,"−"),s("mi",null,"t")])]),s("mi",null,"d"),s("mi",null,"t"),s("mtext",null," "),s("mi",{mathvariant:"normal"},".")]),s("annotation",{encoding:"application/x-tex"}," \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,. ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"Γ"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3262em","vertical-align":"-0.9119em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol large-op",style:{"margin-right":"0.44445em",position:"relative",top:"-0.0011em"}},"∫"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4143em"}},[s("span",{style:{top:"-1.7881em","margin-left":"-0.4445em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])]),s("span",{style:{top:"-3.8129em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"∞")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9119em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8436em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"t")])])])])])])])]),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},".")])])])])],-1),j=s("p",null,"列举一些常用数学符号：",-1),A=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"符号"),s("th",null,"语法"),s("th",null,"描述")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"≤")]),s("annotation",{encoding:"application/x-tex"},"\\leq")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),s("span",{class:"mrel"},"≤")])])])]),s("td",null,[s("code",null,"$\\leq$")]),s("td",null,"小于等于")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"≥")]),s("annotation",{encoding:"application/x-tex"},"\\geq")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),s("span",{class:"mrel"},"≥")])])])]),s("td",null,[s("code",null,"$\\geq$")]),s("td",null,"大于等于")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{mathvariant:"normal"},"≠")]),s("annotation",{encoding:"application/x-tex"},"\\neq")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mrel"},[s("span",{class:"mrel"},[s("span",{class:"mord vbox"},[s("span",{class:"thinbox"},[s("span",{class:"rlap"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"inner"},[s("span",{class:"mord"},[s("span",{class:"mrel"},"")])]),s("span",{class:"fix"})])])])]),s("span",{class:"mrel"},"=")])])])])]),s("td",null,[s("code",null,"$\\neq$")]),s("td",null,"不等于")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"≈")]),s("annotation",{encoding:"application/x-tex"},"\\approx")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4831em"}}),s("span",{class:"mrel"},"≈")])])])]),s("td",null,[s("code",null,"$\\approx$")]),s("td",null,"约等于")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∞")]),s("annotation",{encoding:"application/x-tex"},"\\infty")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord"},"∞")])])])]),s("td",null,[s("code",null,"$\\infty$")]),s("td",null,"无穷")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mo",null,"∏"),s("mi",null,"x"),s("mi",null,"y")])]),s("annotation",{encoding:"application/x-tex"},"\\prod_{x}^{y}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.104em","vertical-align":"-0.2997em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∏"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8043em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])])])])])]),s("td",null,[s("code",null,"$\\prod_{x}^{y}$")]),s("td",null,"累乘")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"0")]),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"\\sum_{i=0}^n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.104em","vertical-align":"-0.2997em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8043em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"0")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])])])])])]),s("td",null,[s("code",null,"$\\sum_{i=0}^n$")]),s("td",null,"求和")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"∫")]),s("annotation",{encoding:"application/x-tex"},"\\int")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1111em","vertical-align":"-0.3061em"}}),s("span",{class:"mop op-symbol small-op",style:{"margin-right":"0.19445em",position:"relative",top:"-0.0006em"}},"∫")])])])]),s("td",null,[s("code",null,"$\\int$")]),s("td",null,"积分")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"∬")]),s("annotation",{encoding:"application/x-tex"},"\\iint")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.111em","vertical-align":"-0.306em"}}),s("span",{class:"mop op-symbol small-op",style:{"margin-right":"0.19445em",position:"relative",top:"-0.0005em"}},"∬")])])])]),s("td",null,[s("code",null,"$\\iint$")]),s("td",null,"双重积分")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mi",null,"x")]),s("mi",null,"y")]),s("annotation",{encoding:"application/x-tex"},"\\log_x{y}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9386em","vertical-align":"-0.2441em"}}),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.0573em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])])])])]),s("td",null,[s("code",null,"$\\log_x{y}$")]),s("td",null,"对数")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"x"),s("mrow",null,[s("mi",null,"y"),s("mo",null,"+"),s("mn",null,"1")])])]),s("annotation",{encoding:"application/x-tex"},"x^{y+1}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mbin mtight"},"+"),s("span",{class:"mord mtight"},"1")])])])])])])])])])])])]),s("td",null,[s("code",null,"$x^{y+1}$")]),s("td",null,"上标")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"x"),s("mrow",null,[s("mi",null,"y"),s("mo",null,"+"),s("mn",null,"1")])])]),s("annotation",{encoding:"application/x-tex"},"x_{y+1}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7167em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mbin mtight"},"+"),s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])])]),s("td",null,[s("code",null,"$x_{y+1}$")]),s("td",null,"下标")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mi",null,"x"),s("mi",null,"y")])]),s("annotation",{encoding:"application/x-tex"},"\\frac{x}{y}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1765em","vertical-align":"-0.4811em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.4811em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])]),s("td",null,[s("code",null,"$\\frac{x}{y}$")]),s("td",null,"分数")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mroot",null,[s("mi",null,"x"),s("mi",null,"y")])]),s("annotation",{encoding:"application/x-tex"},"\\sqrt[y]{x}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.04em","vertical-align":"-0.2397em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"root"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5516em"}},[s("span",{style:{top:"-2.8363em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size6 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])])])])])]),s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8003em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord mathnormal"},"x")])]),s("span",{style:{top:"-2.7603em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2397em"}},[s("span")])])])])])])])]),s("td",null,[s("code",null,"$\\sqrt[y]{x}$")]),s("td",null,"开方")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"sin"),s("mo",null,"⁡")]),s("annotation",{encoding:"application/x-tex"},"\\sin")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6679em"}}),s("span",{class:"mop"},"sin")])])])]),s("td",null,[s("code",null,"$\\sin$")]),s("td",null,"正弦")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"cos"),s("mo",null,"⁡")]),s("annotation",{encoding:"application/x-tex"},"\\cos")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mop"},"cos")])])])]),s("td",null,[s("code",null,"$\\cos$")]),s("td",null,"余弦")]),s("tr",null,[s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"tan"),s("mo",null,"⁡")]),s("annotation",{encoding:"application/x-tex"},"\\tan")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6151em"}}),s("span",{class:"mop"},"tan")])])])]),s("td",null,[s("code",null,"$\\tan$")]),s("td",null,"正切")])])],-1),D=s("p",null,"更多数学符号支持请参考：",-1),F={href:"https://github.com/luong-komorebi/Begin-Latex-in-minutes",target:"_blank",rel:"noopener noreferrer"},J={href:"https://blog.csdn.net/Katherine_hsr/article/details/79179622",target:"_blank",rel:"noopener noreferrer"},S=l(`<h2 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> Diff</h2><blockquote><p>💡 注意：部分 Markdown 引擎支持 Diff。</p></blockquote><p>版本控制的系统中都少不了 diff 的功能，即展示一个文件内容的增加与删除。<br> GFM 中可以显示的展示 diff 效果。可以用 <code>+</code> 开头表示新增，<code>-</code> 开头表示删除。</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> 新增内容
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> 删除内容
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uml-图" tabindex="-1"><a class="header-anchor" href="#uml-图" aria-hidden="true">#</a> UML 图</h2>`,5),H={href:"https://mermaid-js.github.io/mermaid/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://mermaid-js.github.io/mermaid/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://mermaidjs.github.io/",target:"_blank",rel:"noopener noreferrer"},V=s("h3",{id:"流程图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),a(" 流程图")],-1),R=s("h3",{id:"时序图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#时序图","aria-hidden":"true"},"#"),a(" 时序图")],-1),I=s("h3",{id:"甘特图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#甘特图","aria-hidden":"true"},"#"),a(" 甘特图")],-1),Q=l('<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><p>有些 Markdown 引擎支持在文档中嵌入的 html 元素。</p><p>有些 Markdown 语法所不支持的特性，可以使用 html 元素来支持。</p><h3 id="折叠" tabindex="-1"><a class="header-anchor" href="#折叠" aria-hidden="true">#</a> 折叠</h3><details><summary>折叠内容一</summary><p>展开才能看到的内容</p></details><details><summary>折叠内容二</summary><p>展开才能看到的内容</p></details><h3 id="居中" tabindex="-1"><a class="header-anchor" href="#居中" aria-hidden="true">#</a> 居中</h3><div align="center"><p>居中显示的文本</p></div><h3 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸" aria-hidden="true">#</a> 图片尺寸</h3><div align="center"><img width="100px" src="https://raw.githubusercontent.com/dunwu/images/dev/common/dunwu-logo.png"></div><h2 id="编辑器" tabindex="-1"><a class="header-anchor" href="#编辑器" aria-hidden="true">#</a> 编辑器</h2><p>推荐 Markdown 编辑器</p>',12),Y={href:"https://www.typora.io/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/microsoft/vscode",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/marktext/marktext",target:"_blank",rel:"noopener noreferrer"},G={href:"https://stackedit.io/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://pandao.github.io/editor.md/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://maxiang.io/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://zhuanlan.zhihu.com/p/69210764",target:"_blank",rel:"noopener noreferrer"},C=s("h2",{id:"参考资料",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),Z={href:"https://zh.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},ss={href:"https://github.com/guodongxiaren/README",target:"_blank",rel:"noopener noreferrer"},as={href:"https://github.com/tchapi/markdown-cheatsheet",target:"_blank",rel:"noopener noreferrer"},ts={href:"https://github.com/luong-komorebi/Begin-Latex-in-minutes",target:"_blank",rel:"noopener noreferrer"},es={href:"https://github.com/mermaid-js/mermaid",target:"_blank",rel:"noopener noreferrer"},ls=l('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>注脚的解释 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function ns(is,rs){const e=i("ExternalLinkIcon"),n=i("Mermaid");return o(),c("div",null,[p,s("ul",null,[s("li",null,[s("a",h,[a("钝悟的博客"),t(e)])])]),m,s("figure",null,[s("a",u,[g,t(e)]),x]),b,s("blockquote",null,[k,s("p",null,[v,a("是一种"),s("a",w,[a("轻量级标记语言"),t(e)]),a("，创始人为"),s("a",y,[a("约翰·格鲁伯"),t(e)]),a("（英语：John Gruber）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的"),s("a",f,[a("XHTML"),t(e)]),a("（或者"),s("a",_,[a("HTML"),t(e)]),a("）文档”。["),s("a",M,[a("4]"),t(e)]),a("这种语言吸收了很多在"),s("a",z,[a("电子邮件"),t(e)]),a("中已有的纯文本标记的特性。 —— 摘自 Wiki")])]),L,s("blockquote",null,[E,s("ul",null,[s("li",null,[s("a",B,[a("http://emojihomepage.com/"),t(e)])]),s("li",null,[s("a",q,[a("http://www.emoji-cheat-sheet.com"),t(e)])])])]),$,T,j,A,s("blockquote",null,[D,s("ul",null,[s("li",null,[s("a",F,[a("Begin-Latex-in-minutes"),t(e)])]),s("li",null,[s("a",J,[a("Markdown 数学符号&公式"),t(e)])])])]),S,s("blockquote",null,[s("p",null,[a("💡 注意：部分 Markdown 引擎支持 "),s("a",H,[a("mermaid"),t(e)]),a("。")]),s("p",null,[s("a",U,[a("mermaid"),t(e)]),a(" 提供了多种 UML 图。详情请参考："),s("a",W,[a("mermaid 文档"),t(e)])])]),V,t(n,{id:"mermaid-755",code:"eJxLL0osyFDwCeJSAALHaI/EohSF1JT01FgFXV27Gp/MvGyFktSKkhoFJ42g/NI8iKQmWLUTSImCc7VLanJmcWZ+Xi1Y1Bms0T8vtUbBJTootbg0p0QhPy81FkkypDy/RsEVJllSnh/LBQCp/yib"}),R,t(n,{id:"mermaid-759",code:"eJxtjDEOwjAQBHtesSUFfCBFEAgQFRUfOJJLbNn4gs9RyO9xjESVbe5Wmh3l98ih4bOlPtJrg5yjtw3v6/okzwo39l6Q3x2MTKDImGU8FJB8glWobVzpSzKZp0VR4S4JKuhFWlTbwrBXXkZT9q6Prszehh5dZDXw1jEILVmdf4LQlitDwuWTIiFzgwTldd3DUHCKTiJIXRb/LV8Wa0pp"}),I,t(n,{id:"mermaid-763",code:"eJyVk8FuwjAMhu88hR+gSBTYxLghENOksROXHb3GQLY2QYmZxtvPaUlpKUwjp0D6f/b/x9miYe5BtRQyLa0rkAHeZfVXq/5iEU9Zc04wU0qbLTzP3tZrUBq3DgvYHEzG2hrMNR+BLRQkFK16UeupPIdZ3MWDuS32OTEpYPRfpz/LNVXWUFK2RT5NYDhIx/1B2h88JvV2EjEzgX5ThxEwWB4JSDDDBuYpgZGK+uWBD+66vt6JfpQAbpjcifVwTT/8Qz9u6IUl+suA5k6zzjAvUf5GStoA7wiy+G2uDcE0/EygSq0Z1ngXMS+BUpBh2KPz0gYaBZ/aS91zv01M3WzIvzY7dySDAkyePWysi7SW7QoTw7+etPhoe2iLz/F2Kjoyilyr5vTcoMxoYwgvLjR+nnbDX9jsEOLB5oQuyEs7HwTlUwF/lPOfW0OGElQztLPv0FNFiI9GOlRUWElve3I+raSYAoQrrO8taNFYuXPh3lDLc8nq4hVhPNl1LL6iFw/tN/g/h5Wrssidru51Evr+BbIWP2c="}),Q,s("ul",null,[s("li",null,[s("a",Y,[a("Typora"),t(e)]),a(" - 个人认为是功能最强的 Markdown 编辑器。")]),s("li",null,[s("a",P,[a("Visual Studio Code"),t(e)]),a(" - 可以通过安装插件，量身打造 Markdown 编辑器。")]),s("li",null,[s("a",X,[a("marktext"),t(e)]),a(" - 一款简单优雅的 Markdown 编辑器。")]),s("li",null,[s("a",G,[a("StackEdit"),t(e)]),a(" - 在线 Markdown 编辑器。")]),s("li",null,[s("a",N,[a("Editor.md"),t(e)]),a(" - 在线 Markdown 编辑器。")]),s("li",null,[s("a",K,[a("Marxico"),t(e)]),a(" - 一款专为印象笔记（Evernote）打造的 Markdown 编辑器。")])]),s("blockquote",null,[s("p",null,[a("想了解更多 Markdown 编辑器可以参考："),s("a",O,[a("主流 Markdown 编辑器推荐"),t(e)])])]),C,s("ul",null,[s("li",null,[s("a",Z,[a("https://zh.wikipedia.org/wiki/Markdown"),t(e)])]),s("li",null,[s("a",ss,[a("https://github.com/guodongxiaren/README"),t(e)])]),s("li",null,[s("a",as,[a("markdown-cheatsheet"),t(e)])]),s("li",null,[s("a",ts,[a("Begin-Latex-in-minutes"),t(e)])]),s("li",null,[s("a",es,[a("https://github.com/mermaid-js/mermaid"),t(e)])])]),ls])}const ds=r(d,[["render",ns],["__file","01.Markdown.html.vue"]]);export{ds as default};
