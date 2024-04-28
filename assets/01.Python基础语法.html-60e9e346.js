import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as e,e as c}from"./app-2ca3a8cf.js";const l={},r=c(`<h1 id="python-基础语法" tabindex="-1"><a class="header-anchor" href="#python-基础语法" aria-hidden="true">#</a> Python 基础语法</h1><h2 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h2><p>默认情况下，Python 3 源码文件以 <strong>UTF-8</strong> 编码，所有字符串都是 unicode 字符串。 当然你也可以为源码文件指定不同的编码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: cp-1252 -*-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>Python 中的注释有三种形式：</p><ul><li><strong>单行注释</strong>以 <code>#</code> 开头</li><li><strong>多行注释</strong>可以用 <code>&#39;&#39;&#39;</code> 或 <code>&quot;&quot;&quot;</code> 标记开始和结尾</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 单行注释</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
这是多行注释，用三个单引号
这是多行注释，用三个单引号
这是多行注释，用三个单引号
&#39;&#39;&#39;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
这是多行注释，用三个双引号
这是多行注释，用三个双引号
这是多行注释，用三个双引号
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保留字" tabindex="-1"><a class="header-anchor" href="#保留字" aria-hidden="true">#</a> 保留字</h2><p>Python 保留字意味着，不能将这些关键字用作任何标识符名称。</p><p>Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> keyword
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> keyword<span class="token punctuation">.</span>kwlist
<span class="token punctuation">[</span><span class="token string">&#39;False&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;True&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;as&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;assert&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;break&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;continue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;del&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;elif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;else&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;except&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;finally&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;for&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;from&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;global&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;if&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lambda&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;nonlocal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;not&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;or&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;raise&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;try&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;while&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;with&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yield&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>Python 中的变量不需要声明。每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。</p><p>Python 基本赋值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2.0</span>
c <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;a=</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;b=</span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;c=</span><span class="token interpolation"><span class="token punctuation">{</span>c<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment"># a=1</span>
<span class="token comment"># b=2.0</span>
<span class="token comment"># c=test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>Python3 中有六个标准的数据类型：</p><ul><li>**不可变数据（3 个）：**Number（数字）、String（字符串）、Tuple（元组）；</li><li>**可变数据（3 个）：**List（列表）、Dictionary（字典）、Set（集合）。</li></ul><h2 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h2><p>Python 语言支持以下类型的运算符:</p><ul><li>算术运算符</li><li>比较（关系）运算符</li><li>赋值运算符</li><li>逻辑运算符</li><li>位运算符</li><li>成员运算符</li><li>身份运算符</li><li>运算符优先级</li></ul><h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2><p>python 最具特色的就是使用缩进来表示代码块，不需要使用大括号 <code>{}</code> 。</p><p>缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;True&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;False&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下代码最后一行语句缩进数的空格数不一致，会导致运行错误：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;Answer&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;True&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;Answer&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;False&quot;</span><span class="token punctuation">)</span>    <span class="token comment"># 缩进不一致，会导致运行错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠 <code>\\</code> 来实现多行语句，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>total <span class="token operator">=</span> item_one <span class="token operator">+</span> \\
        item_two <span class="token operator">+</span> \\
        item_three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>[]</code>, <code>{}</code>, 或 <code>()</code> 中的多行语句，不需要使用反斜杠 <code>\\</code> ，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>total <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;item_one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;item_two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;item_three&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;item_four&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;item_five&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>像 <code>if</code>、<code>while</code>、<code>def</code> 和 <code>class</code> 这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。</p><p>我们将首行及后面的代码组称为一个子句(clause)。</p><h3 id="同一行显示多条语句" tabindex="-1"><a class="header-anchor" href="#同一行显示多条语句" aria-hidden="true">#</a> 同一行显示多条语句</h3><p>Python 可以在同一行中使用多条语句，语句之间使用分号 <strong>;</strong> 分割，以下是一个简单的实例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys<span class="token punctuation">;</span> x <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">;</span> sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment"># test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用交互式命令行执行，输出结果为：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> sys<span class="token punctuation">;</span> x <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">;</span> sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
test
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处的 5 表示字符数，<strong>test</strong> 有 4 个字符，<strong>\\n</strong> 表示一个字符，加起来 <strong>5</strong> 个字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> sys
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot; hi &quot;</span><span class="token punctuation">)</span>    <span class="token comment"># hi 前后各有 1 个空格</span>
 hi <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个语句构成代码组" tabindex="-1"><a class="header-anchor" href="#多个语句构成代码组" aria-hidden="true">#</a> 多个语句构成代码组</h3><p>缩进相同的一组语句构成一个代码块，我们称之代码组。</p><p>像 if、while、def 和 class 这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。</p><p>我们将首行及后面的代码组称为一个子句(clause)。</p><p>如下实例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> expression <span class="token punctuation">:</span>
   suite
<span class="token keyword">elif</span> expression <span class="token punctuation">:</span>
   suite
<span class="token keyword">else</span> <span class="token punctuation">:</span>
   suite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制语句" tabindex="-1"><a class="header-anchor" href="#控制语句" aria-hidden="true">#</a> 控制语句</h2><p>Python 支持三类控制语句：</p><ul><li>选择语句 - <code>if...elif...else</code>、<code>match...case</code>（Python 3.10 新增）</li><li>循环语句 - <code>while</code>、<code>for</code></li><li>中断语句 - <code>break</code>、<code>continue</code>、<code>pass</code></li></ul><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>Python 定义函数使用 def 关键字。</p><p>语法格式如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> 函数名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># do something</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>函数示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 函数定义</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 函数调用</span>
hello<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入和输出" tabindex="-1"><a class="header-anchor" href="#输入和输出" aria-hidden="true">#</a> 输入和输出</h2><h3 id="print-输出" tabindex="-1"><a class="header-anchor" href="#print-输出" aria-hidden="true">#</a> print 输出</h3><p><code>print</code> 默认输出是换行的，如果要实现不换行需要在变量末尾加上 <code>end=&quot;&quot;</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>
b <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span>
<span class="token comment"># 换行输出</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---------&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 不换行输出</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
<span class="token comment"># a</span>
<span class="token comment"># b</span>
<span class="token comment"># ---------</span>
<span class="token comment"># ab</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input-输入" tabindex="-1"><a class="header-anchor" href="#input-输入" aria-hidden="true">#</a> input 输入</h3><p>执行下面的程序在按回车键后就会等待用户输入：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\\n按下 enter 键后退出。\\n&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上代码中，一旦用户按下 <strong>enter</strong> 键时，程序将退出。</p><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><p>在 python 用 <code>import</code> 或者 <code>from...import</code> 来导入相应的模块。</p><p>将整个模块(somemodule)导入，格式为： <code>import somemodule</code></p><p>从某个模块中导入某个函数,格式为： <code>from somemodule import somefunction</code></p><p>从某个模块中导入多个函数,格式为： <code>from somemodule import firstfunc, secondfunc, thirdfunc</code></p><p>将某个模块中的全部函数导入，格式为： <code>from somemodule import *</code></p><p>【示例】导入 sys 模块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;================Python import mode==========================&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;命令行参数为:&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n python 路径为&#39;</span><span class="token punctuation">,</span> sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】导入 sys 模块的 argv,path 成员</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sys <span class="token keyword">import</span> argv<span class="token punctuation">,</span>path  <span class="token comment">#  导入特定的成员</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;================python from import===================================&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;path:&#39;</span><span class="token punctuation">,</span>path<span class="token punctuation">)</span> <span class="token comment"># 因为已经导入path成员，所以此处引用时不需要加sys.path</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行参数" tabindex="-1"><a class="header-anchor" href="#命令行参数" aria-hidden="true">#</a> 命令行参数</h2><p>很多程序可以执行一些操作来查看一些基本信息，Python 可以使用 <code>-h</code> 参数查看各参数帮助信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python <span class="token parameter variable">-h</span>
usage: python <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">..</span>. <span class="token punctuation">[</span>-c cmd <span class="token operator">|</span> <span class="token parameter variable">-m</span> mod <span class="token operator">|</span> <span class="token function">file</span> <span class="token operator">|</span> -<span class="token punctuation">]</span> <span class="token punctuation">[</span>arg<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
Options and arguments <span class="token punctuation">(</span>and corresponding environment variables<span class="token punctuation">)</span>:
<span class="token parameter variable">-c</span> cmd <span class="token builtin class-name">:</span> program passed <span class="token keyword">in</span> as string <span class="token punctuation">(</span>terminates option list<span class="token punctuation">)</span>
<span class="token parameter variable">-d</span>     <span class="token builtin class-name">:</span> debug output from parser <span class="token punctuation">(</span>also <span class="token assign-left variable">PYTHONDEBUG</span><span class="token operator">=</span>x<span class="token punctuation">)</span>
<span class="token parameter variable">-E</span>     <span class="token builtin class-name">:</span> ignore environment variables <span class="token punctuation">(</span>such as PYTHONPATH<span class="token punctuation">)</span>
<span class="token parameter variable">-h</span>     <span class="token builtin class-name">:</span> print this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>

<span class="token punctuation">[</span> etc. <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),d={href:"https://www.runoob.com/python3/python3-command-line-arguments.html",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),k={href:"https://www.runoob.com/python/python-tutorial.html",target:"_blank",rel:"noopener noreferrer"};function v(m,h){const a=p("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[s("我们在使用脚本形式执行 Python 时，可以接收命令行输入的参数，具体使用可以参照 "),n("a",d,[s("Python 3 命令行参数"),e(a)]),s("。")]),u,n("ul",null,[n("li",null,[n("a",k,[s("菜鸟-基础教程"),e(a)])])])])}const y=t(l,[["render",v],["__file","01.Python基础语法.html.vue"]]);export{y as default};
