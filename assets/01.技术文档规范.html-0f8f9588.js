import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as t,a as e,b as i,d,e as n}from"./app-103fb7a1.js";const c={},o=e("h1",{id:"技术文档规范",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#技术文档规范","aria-hidden":"true"},"#"),i(" 技术文档规范")],-1),u=e("p",null,"文档采用 Markdown 语法书写。",-1),v=e("p",null,"📚 「参考」Markdown 语法可以参考：",-1),h={href:"https://github.com/guodongxiaren/README",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/tchapi/markdown-cheatsheet",target:"_blank",rel:"noopener noreferrer"},b=n(`<h2 id="_1-标题" tabindex="-1"><a class="header-anchor" href="#_1-标题" aria-hidden="true">#</a> 1. 标题</h2><h3 id="_1-1-标题层级" tabindex="-1"><a class="header-anchor" href="#_1-1-标题层级" aria-hidden="true">#</a> 1.1. 标题层级</h3><p>标题分为四级。</p><ol><li>一级标题：文章的标题</li><li>二级标题：文章内容的大标题</li><li>三级标题：二级标题下一级的标题</li><li>四级标题：三级标题下一级的标题</li></ol><h3 id="_1-2-标题原则" tabindex="-1"><a class="header-anchor" href="#_1-2-标题原则" aria-hidden="true">#</a> 1.2. 标题原则</h3><ul><li>一篇文章中应该尽力避免同名标题。</li><li>一级标题下，不能直接出现三级标题。</li><li>标题要避免孤立编号（即同级标题只有一个）。</li><li>下级标题不重复上一级标题的内容。</li><li>谨慎使用四级标题，尽量避免出现，保持层级的简单和防止出现过于复杂的章节。如果三级标题下有并列性的内容，建议只使用项目列表（Item list）。</li></ul><h2 id="_2-文本" tabindex="-1"><a class="header-anchor" href="#_2-文本" aria-hidden="true">#</a> 2. 文本</h2><h3 id="_2-1-字间距" tabindex="-1"><a class="header-anchor" href="#_2-1-字间距" aria-hidden="true">#</a> 2.1. 字间距</h3><p>全角中文字符与半角英文字符之间，应有一个半角空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：本文介绍如何快速启动Windows系统。

正例：本文介绍如何快速启动 Windows 系统。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全角中文字符与半角阿拉伯数字之间，有没有半角空格都可，但必须保证风格统一，不能两种风格混杂。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>正例：2011年5月15日，我订购了5台笔记本电脑与10台平板电脑。

正例：2011 年 5 月 15 日，我订购了 5 台笔记本电脑与 10 台平板电脑。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>半角的百分号，视同阿拉伯数字。</p><p>英文单位若不翻译，单位前的阿拉伯数字与单位间不留空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：一部容量为 16 GB 的智能手机

正例：一部容量为 16GB 的智能手机
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>半角英文字符和半角阿拉伯数字，与全角标点符号之间不留空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：他的电脑是 MacBook Air 。

正例：他的电脑是 MacBook Air。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-句子" tabindex="-1"><a class="header-anchor" href="#_2-2-句子" aria-hidden="true">#</a> 2.2. 句子</h3><ul><li>避免使用长句。一个句子建议不超过 100 字或者正文的 3 行。</li><li>尽量使用简单句和并列句，避免使用复合句。</li></ul><h3 id="_2-3-写作风格" tabindex="-1"><a class="header-anchor" href="#_2-3-写作风格" aria-hidden="true">#</a> 2.3. 写作风格</h3><p>尽量不使用被动语态，改为使用主动语态。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：假如此软件尚未被安装，

正例：假如尚未安装这个软件，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不使用非正式的语言风格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：Lady Gaga 的演唱会真是酷毙了，从没看过这么给力的表演！！！

正例：无法参加本次活动，我深感遗憾。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用对“的”、“地”、“得”。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>她露出了开心的笑容。
（形容词＋的＋名词）

她开心地笑了。
（副词＋地＋动词）

她笑得很开心。
（动词＋得＋副词）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用代词时（比如“其”、“该”、“此”、“这”等词），必须明确指代的内容，保证只有一个含义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：从管理系统可以监视中继系统和受其直接控制的分配系统。

正例：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>名词前不要使用过多的形容词。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：此设备的使用必须在接受过本公司举办的正式的设备培训的技师的指导下进行。

正例：此设备必须在技师的指导下使用，且指导技师必须接受过由本公司举办的正式设备培训。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单个句子的长度尽量保持在 20 个字以内；20 ～ 29 个字的句子，可以接受；30 ～ 39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，在任何情况下都不能接受。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。

正例：本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样一个意思，尽量使用肯定句表达，不使用否定句表达。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：请确认没有接通装置的电源。

正例：请确认装置的电源已关闭。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>避免使用双重否定句。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：没有删除权限的用户，不能删除此文件。

正例：用户必须拥有删除权限，才能删除此文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-英文处理" tabindex="-1"><a class="header-anchor" href="#_2-4-英文处理" aria-hidden="true">#</a> 2.4. 英文处理</h3><p>英文原文如果使用了复数形式，翻译成中文时，应该将其还原为单数形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>英文：⋯information stored in random access memory (RAMs)⋯

中文：……存储在随机存取存储器（RAM）里的信息……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外文缩写可以使用半角圆点(<code>.</code>)表示缩写。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>U.S.A.
Apple, Inc.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示中文时，英文省略号（<code>⋯</code>）应改为中文省略号（<code>……</code>）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>英文：5 minutes later⋯

中文：5 分钟过去了⋯⋯
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>英文书名或电影名改用中文表达时，双引号应改为书名号。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>英文：He published an article entitled &quot;The Future of the Aviation&quot;.

中文：他发表了一篇名为《航空业的未来》的文章。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次出现英文词汇时，在括号中给出中文标注。此后再次出现时，直接使用英文缩写即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IOC（International Olympic Committee，国际奥林匹克委员会）。这样定义后，便可以直接使用“IOC”了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>专有名词中每个词第一个字母均应大写，非专有名词则不需要大写。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>“American Association of Physicists in Medicine”（美国医学物理学家协会）是专有名词，需要大写。

“online transaction processing”（在线事务处理）不是专有名词，不应大写。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-段落" tabindex="-1"><a class="header-anchor" href="#_3-段落" aria-hidden="true">#</a> 3. 段落</h2><h3 id="_3-1-段落原则" tabindex="-1"><a class="header-anchor" href="#_3-1-段落原则" aria-hidden="true">#</a> 3.1. 段落原则</h3><ul><li>一个段落只能有一个主题，或一个中心句子。</li><li>段落的中心句子放在段首，对全段内容进行概述。后面陈述的句子为核心句服务。</li><li>一个段落的长度不能超过七行，最佳段落长度小于等于四行。</li><li>段落的句子语气要使用陈述和肯定语气，避免使用感叹语气。</li><li>段落之间使用一个空行隔开。</li><li>段落开头不要留出空白字符。</li></ul><h3 id="_3-2-引用" tabindex="-1"><a class="header-anchor" href="#_3-2-引用" aria-hidden="true">#</a> 3.2. 引用</h3><p>引用第三方内容时，应注明出处。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>One man’s constant is another man’s variable. — Alan Perlis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是全篇转载，请在全文开头显著位置注明作者和出处，并链接至原文。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>本文转载自 WikiQuote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用外部图片时，必须在图片下方或文末标明来源。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>本文部分图片来自 Wikipedia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-强调" tabindex="-1"><a class="header-anchor" href="#_3-3-强调" aria-hidden="true">#</a> 3.3. 强调</h3><p>一些特殊的强调内容可以按照如下方式书写：</p><blockquote><p>🔔 『注意』</p></blockquote><blockquote><p>💡 『提示』</p></blockquote><blockquote><p>📚 『参考』</p></blockquote><h2 id="_4-数值" tabindex="-1"><a class="header-anchor" href="#_4-数值" aria-hidden="true">#</a> 4. 数值</h2><h3 id="_4-1-半角数字" tabindex="-1"><a class="header-anchor" href="#_4-1-半角数字" aria-hidden="true">#</a> 4.1. 半角数字</h3><p>数字一律使用半角形式，不得使用全角形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例： 这件商品的价格是１０００元。

正例： 这件商品的价格是 1000 元。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-千分号" tabindex="-1"><a class="header-anchor" href="#_4-2-千分号" aria-hidden="true">#</a> 4.2. 千分号</h3><p>数值为千位以上，应添加千分号（半角逗号）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>XXX 公司的实收资本为 RMB1,258,000。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于 4 ～ 6 位的数值，千分号是选用的，比如<code>1000</code>和<code>1,000</code>都可以接受。对于 7 位及以上的数值，千分号是必须的。</p><p>多位小数要从小数点后从左向右添加千分号，比如<code>4.234,345</code>。</p><h3 id="_4-3-货币" tabindex="-1"><a class="header-anchor" href="#_4-3-货币" aria-hidden="true">#</a> 4.3. 货币</h3><p>货币应为阿拉伯数字，并在数字前写出货币符号，或在数字后写出货币中文名称。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$1,000
1,000 美元
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-数值范围" tabindex="-1"><a class="header-anchor" href="#_4-4-数值范围" aria-hidden="true">#</a> 4.4. 数值范围</h3><p>表示数值范围时，用<code>～</code>连接。参见《标点符号》一节的“连接号”部分。</p><p>带有单位或百分号时，两个数字都要加上单位或百分号，不能只加后面一个。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：132～234kg
正例：132kg～234kg

反例：67～89%
正例：67%～89%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-变化程度的表示法" tabindex="-1"><a class="header-anchor" href="#_4-5-变化程度的表示法" aria-hidden="true">#</a> 4.5. 变化程度的表示法</h3><p>数字的增加要使用“增加了”、“增加到”。“了”表示增量，“到”表示定量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>增加到过去的两倍
（过去为一，现在为二）

增加了两倍
（过去为一，现在为三）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数字的减少要使用“降低了”、“降低到”。“了”表示增量，“到”表示定量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>降低到百分之八十
（定额是一百，现在是八十）

降低了百分之八十
（原来是一百，现在是二十）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不能用“降低 N 倍”或“减少 N 倍”的表示法，要用“降低百分之几”或“减少百分之几”。因为减少（或降低）一倍表示数值原来为一百，现在等于零。</p><h2 id="_5-符号" tabindex="-1"><a class="header-anchor" href="#_5-符号" aria-hidden="true">#</a> 5. 符号</h2><h3 id="_5-1-符号原则" tabindex="-1"><a class="header-anchor" href="#_5-1-符号原则" aria-hidden="true">#</a> 5.1. 符号原则</h3><ul><li>中文语句的标点符号，均应该采取全角符号，这样可以保证视觉的一致。</li><li>如果整句为英文，则该句使用英文/半角标点。</li><li>句号、问号、叹号、逗号、顿号、分号和冒号不得出现在一行之首。</li></ul><h3 id="_5-2-句号" tabindex="-1"><a class="header-anchor" href="#_5-2-句号" aria-hidden="true">#</a> 5.2. 句号</h3><p>中文语句中的结尾处应该用全角句号（<code>。</code>）。</p><p>句子末尾用括号加注时，句号应在括号之外。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：关于文件的输出，请参照第 1.3 节（见第 26 页。）

正例：关于文件的输出，请参照第 1.3 节（见第 26 页）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-逗号" tabindex="-1"><a class="header-anchor" href="#_5-3-逗号" aria-hidden="true">#</a> 5.3. 逗号</h3><p>逗号<code>，</code>表示句子内部的一般性停顿。</p><p>注意避免“一逗到底”，即整个段落除了结尾，全部停顿都使用逗号。</p><h3 id="_5-4-顿号" tabindex="-1"><a class="header-anchor" href="#_5-4-顿号" aria-hidden="true">#</a> 5.4. 顿号</h3><p>句子内部的并列词，应该用全角顿号(<code>、</code>) 分隔，而不用逗号，即使并列词是英语也是如此。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：我最欣赏的科技公司有 Google, Facebook, 腾讯, 阿里和百度等。

正例：我最欣赏的科技公司有 Google、Facebook、腾讯、阿里和百度等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>英文句子中，并列词语之间使用半角逗号（<code>,</code>）分隔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：Microsoft Office includes Word, Excel, PowerPoint, Outlook and other components.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-5-分号" tabindex="-1"><a class="header-anchor" href="#_5-5-分号" aria-hidden="true">#</a> 5.5. 分号</h3><p>分号<code>；</code>表示复句内部并列分句之间的停顿。</p><h3 id="_5-6-引号" tabindex="-1"><a class="header-anchor" href="#_5-6-引号" aria-hidden="true">#</a> 5.6. 引号</h3><p>引用时，应该使用全角双引号（<code>“ ”</code>），注意前后双引号不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：许多人都认为客户服务的核心是“友好”和“专业”。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引号里面还要用引号时，外面一层用双引号，里面一层用单引号（<code>‘ ’</code>），注意前后单引号不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：鲍勃解释道：“我要放音乐，可萨利说，‘不行！’。”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-7-圆括号" tabindex="-1"><a class="header-anchor" href="#_5-7-圆括号" aria-hidden="true">#</a> 5.7. 圆括号</h3><p>补充说明时，使用全角圆括号<code>（）</code>，括号前后不加空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：请确认所有的连接（电缆和接插件）均安装牢固。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-8-冒号" tabindex="-1"><a class="header-anchor" href="#_5-8-冒号" aria-hidden="true">#</a> 5.8. 冒号</h3><p>全角冒号（<code>：</code>）常用在需要解释的词语后边，引出解释和说明。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：请确认以下几项内容：时间、地点、活动名称，以及来宾数量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示时间时，应使用半角冒号（<code>:</code>）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：早上 8:00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-9-省略号" tabindex="-1"><a class="header-anchor" href="#_5-9-省略号" aria-hidden="true">#</a> 5.9. 省略号</h3><p>省略号<code>……</code>表示语句未完、或者语气的不连续。它占两个汉字空间、包含六个省略点，不要使用<code>。。。</code>或<code>...</code>等非标准形式。</p><p>省略号不应与“等”这个词一起使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：我们为会餐准备了香蕉、苹果、梨…等各色水果。

正例：我们为会餐准备了各色水果，有香蕉、苹果、梨……

正例：我们为会餐准备了香蕉、苹果、梨等各色水果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-感叹号" tabindex="-1"><a class="header-anchor" href="#_5-10-感叹号" aria-hidden="true">#</a> 5.10. 感叹号</h3><p>应该使用平静的语气叙述，尽量避免使用感叹号<code>！</code>。</p><p>不得多个感叹号连用，比如<code>！！</code>和<code>!!!</code>。</p><h3 id="_5-11-破折号" tabindex="-1"><a class="header-anchor" href="#_5-11-破折号" aria-hidden="true">#</a> 5.11. 破折号</h3><p>破折号<code>————</code>一般用于做进一步解释。破折号应占两个汉字的位置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：直觉————尽管它并不总是可靠的————告诉我，这事可能出了些问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-12-连接号" tabindex="-1"><a class="header-anchor" href="#_5-12-连接号" aria-hidden="true">#</a> 5.12. 连接号</h3><p>连接号用于连接两个类似的词。</p><p>以下场合应该使用直线连接号（<code>-</code>），占一个半角字符的位置。</p><ul><li>两个名词的复合</li><li>图表编号</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：氧化-还原反应

例句：图 1-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下场合应该使用波浪连接号（<code>～</code>），占一个全角字符的位置。</p><ul><li>数值范围（例如日期、时间或数字）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：2009 年～2011 年
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，波浪连接号前后两个值都应该加上单位。</p><p>波浪连接号也可以用汉字“至”代替。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：周围温度：-20°C 至 -10°C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-结构" tabindex="-1"><a class="header-anchor" href="#_6-结构" aria-hidden="true">#</a> 6. 结构</h2><h3 id="_6-1-目录结构" tabindex="-1"><a class="header-anchor" href="#_6-1-目录结构" aria-hidden="true">#</a> 6.1. 目录结构</h3><p>技术手册目录结构是一部完整的书，建议采用下面的结构。</p><ul><li><strong>简介</strong>（Introduction） - [必选][目录|文件] 提供对产品和文档本身的总体的、扼要的说明</li><li><strong>入门篇</strong>（Quickstart） - [可选][文件] 如何最快速地使用产品</li><li><strong>基础篇</strong>（Basics） - [必选][目录] 又称”使用篇“，提供初级的使用教程 <ul><li><strong>环境准备</strong>（Prerequisite） - [可选][文件] 软件使用需要满足的前置条件</li><li><strong>安装</strong>（Installation） - [可选][文件] 软件的安装方法</li><li><strong>配置</strong>（Configuration） - [可选][目录|文件] 软件的配置</li><li><strong>特性</strong>（Feature） - [必选][目录|文件] 软件的功能特性</li></ul></li><li><strong>进阶篇</strong>（Advanced） - [可选][目录] 又称”开发篇“，提供中高级的开发教程 <ul><li><strong>原理</strong>（Principle） - [可选][目录|文件] 软件的原理</li><li><strong>设计</strong>（Design） - [可选][目录|文件] 软件的设计，如：架构、设计思想等</li></ul></li><li><strong>实战篇</strong>（Action） - [可选][目录] 提供一些具有实战意义的示例说明</li><li><strong>API</strong>（API） - [可选][目录|文件] 软件 API 的逐一介绍</li><li><strong>常见问题</strong>（FAQ） - [可选][目录|文件] 常见问题解答</li><li><strong>附录</strong>（Appendix） - [可选][目录] 不属于教程本身、但对阅读教程有帮助的内容 <ul><li><strong>命令</strong>（Command） - [可选][目录] 命令</li><li><strong>资源</strong>（Resource） - [必选][文件] 资源</li><li><strong>术语</strong>（Glossary） - [可选][文件] 名词解释</li><li><strong>技巧</strong>（Recipe） - [可选][文件] 最佳实践</li><li><strong>版本</strong>（Changelog） - [可选][文件] 版本说明</li><li><strong>反馈</strong>（Feedback） - [可选][文件] 反馈方式</li></ul></li></ul><p>下面是两个真实范例，可参考。</p>`,142),p={href:"http://redux.js.org/index.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://flight-manual.atom.io/",target:"_blank",rel:"noopener noreferrer"},x=n(`<h3 id="_6-2-文件名" tabindex="-1"><a class="header-anchor" href="#_6-2-文件名" aria-hidden="true">#</a> 6.2. 文件名</h3><p>文档的文件名不得含有空格。</p><p>文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例： 名词解释.md

正例： glossary.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件名建议只使用小写字母，不使用大写字母。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：TroubleShooting.md

正例：troubleshooting.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了醒目，某些说明文件的文件名，可以使用大写字母，比如<code>README</code>、<code>LICENSE</code>。</p><p>文件名包含多个单词时，单词之间建议使用半角的连词线（<code>-</code>）分隔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反例：advanced_usage.md

正例：advanced-usage.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-emoji" tabindex="-1"><a class="header-anchor" href="#_7-emoji" aria-hidden="true">#</a> 7. Emoji</h2><p>在 markdown 文档中，普遍会使用 emoji，帮助理解内容。但是，如果滥用 emoji，可能会适得其反。</p><p>这里，将一些比较约定俗成的 emoji 表情使用场景列举一下：</p><ul><li>💡 提示 - [推荐]</li><li>🔔 注意、警告 - [推荐]</li><li>⭕ 正确 - [推荐]</li><li>❌ 错误 - [推荐]</li><li>❓ 问题 - [推荐]</li><li>⛔ 禁止 - [推荐]</li><li>🚧 未完待续、有待补充 - [推荐]</li><li>📚 参考、参考资料 - [可选]</li><li>⌨ 源码 - [可选]</li></ul><h2 id="_8-参考" tabindex="-1"><a class="header-anchor" href="#_8-参考" aria-hidden="true">#</a> 8. 参考</h2>`,14),_={href:"http://wenku.baidu.com/view/23cc1a6527d3240c8447efbf.html",target:"_blank",rel:"noopener noreferrer"},f={href:"http://docs.daocloud.io/write-docs/format",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.hitachi-tc.co.jp/company/thesis/thesis.pdf",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.lengoo.de/documents/styleguides/lengoo_styleguide_ZH.pdf",target:"_blank",rel:"noopener noreferrer"},y={href:"https://open.leancloud.cn/copywriting-style-guide.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://docs.google.com/document/d/1R8lMCPf6zCD5KEA8ekZ5knK77iw9J-vJ6vEopPemqZM/edit",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/sparanoid/chinese-copywriting-guidelines",target:"_blank",rel:"noopener noreferrer"},E={href:"http://w3c.github.io/clreq/",target:"_blank",rel:"noopener noreferrer"},M={href:"http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html",target:"_blank",rel:"noopener noreferrer"};function I(q,P){const a=s("ExternalLinkIcon");return r(),t("div",null,[o,e("blockquote",null,[u,v,e("ul",null,[e("li",null,[e("a",h,[i("https://github.com/guodongxiaren/README"),d(a)])]),e("li",null,[e("a",m,[i("https://github.com/tchapi/markdown-cheatsheet"),d(a)])])])]),b,e("ul",null,[e("li",null,[e("a",p,[i("Redux 手册"),d(a)])]),e("li",null,[e("a",g,[i("Atom 手册"),d(a)])])]),x,e("ul",null,[e("li",null,[e("a",_,[i("产品手册中文写作规范"),d(a)]),i(", by 华为")]),e("li",null,[e("a",f,[i("写作规范和格式规范"),d(a)]),i(", by DaoCloud")]),e("li",null,[e("a",k,[i("技术写作技巧在日汉翻译中的应用"),d(a)]),i(", by 刘方")]),e("li",null,[e("a",w,[i("简体中文规范指南"),d(a)]),i(", by lengoo")]),e("li",null,[e("a",y,[i("文档风格指南"),d(a)]),i(", by LeanCloud")]),e("li",null,[e("a",A,[i("豌豆荚文案风格指南"),d(a)]),i(", by 豌豆荚")]),e("li",null,[e("a",C,[i("中文文案排版指北"),d(a)]),i(", by sparanoid")]),e("li",null,[e("a",E,[i("中文排版需求"),d(a)]),i(", by W3C")]),e("li",null,[e("a",M,[i("为什么文件名要小写？"),d(a)]),i(", by 阮一峰")])])])}const j=l(c,[["render",I],["__file","01.技术文档规范.html.vue"]]);export{j as default};
