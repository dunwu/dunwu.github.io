import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o,c as r,a as e,b as n,d as s,e as t}from"./app-d70a109d.js";const l={},h=t('<h1 id="初识-python" tabindex="-1"><a class="header-anchor" href="#初识-python" aria-hidden="true">#</a> 初识 Python</h1><h2 id="python-简介" tabindex="-1"><a class="header-anchor" href="#python-简介" aria-hidden="true">#</a> Python 简介</h2><p>Python 是一种广泛使用的解释型、高级和通用的编程语言。Python 支持多种编程范型，包括结构化、过程式、反射式、面向对象和函数式编程。它拥有动态类型系统和垃圾回收功能，能够自动管理内存使用，并且其本身拥有一个巨大而广泛的标准库。</p><h3 id="python-历史" tabindex="-1"><a class="header-anchor" href="#python-历史" aria-hidden="true">#</a> Python 历史</h3><p>1991 年，Python 的第一个解释器诞生。</p><p>1994 年，Python 1.0 版本发布。它包含了异常处理、函数和模块等基本特性。</p>',6),p={href:"https://zh.wikipedia.org/wiki/%E5%88%97%E8%A1%A8%E6%8E%A8%E5%AF%BC%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},c=t('<p>2008 年，Python 3.0 版本发布。它进行了重大修订而不能完全后向兼容。</p><p>2020 年，Python 2.0 停止更新。</p><h3 id="python-应用" tabindex="-1"><a class="header-anchor" href="#python-应用" aria-hidden="true">#</a> Python 应用</h3><p>Python 在以下领域都有用武之地。</p><ul><li>后端开发 - Python / Java / Go / PHP</li><li>DevOps - Python / Shell / Ruby</li><li>数据采集 - Python / C++ / Java</li><li>量化交易 - Python / C++ / R</li><li>数据科学 - Python / R / Julia / Matlab</li><li>机器学习 - Python / R / C++ / Julia</li><li>自动化测试 - Python / Shell</li></ul><h2 id="python-开发环境" tabindex="-1"><a class="header-anchor" href="#python-开发环境" aria-hidden="true">#</a> Python 开发环境</h2><p>目前，Python 有两个版本，一个是 2.x 版，一个是 3.x 版，这两个版本是不兼容的。由于 3.x 版本越来越普及，所以推荐安装 3.x 版本。</p><h3 id="安装-python" tabindex="-1"><a class="header-anchor" href="#安装-python" aria-hidden="true">#</a> 安装 Python</h3><h4 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h4>',9),u={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>（1）安装依赖库（因为没有这些依赖库可能在源代码构件安装时因为缺失底层依赖库而失败）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span> gcc zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）下载 Python 源代码并解压缩到指定目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tar.xz
xz <span class="token parameter variable">-d</span> Python-3.7.6.tar.xz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> Python-3.7.6.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）切换至 Python 源代码目录并执行下面的命令进行配置和安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> Python-3.7.6
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python37 --enable-optimizations
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）修改 .bash_profile 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">vim</span> .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 PATH 环境变量并使其生效</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># ... 此处省略上面的代码 ...</span>

export PATH=<span class="token variable">$PATH</span>:<span class="token operator">/</span>usr/local/python37/bin

<span class="token comment"># ... 此处省略下面的代码 ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）激活环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> .bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h4><p>Mac 系统自带的 Python 版本是 2.7。要安装 Python 3.x，有两个方法：</p>`,14),b={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"brew install python3",-1),x=e("h4",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),n(" Windows")],-1),_={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},f=t(`<blockquote><p>注：要勾选 <code>Add Python 3.x to PATH</code> 选项，将安装路径自动添加到环境变量，否则需要自行配置。</p></blockquote><h3 id="运行-python" tabindex="-1"><a class="header-anchor" href="#运行-python" aria-hidden="true">#</a> 运行 Python</h3><p>执行以下命令可以检查 python 版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接执行 python 命令可以进入交互式环境。</p><h3 id="第一个程序" tabindex="-1"><a class="header-anchor" href="#第一个程序" aria-hidden="true">#</a> 第一个程序</h3><p>新建一个 <code>hello.py</code> 文件，内容如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在终端执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python hello.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打印如下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="python-开发工具" tabindex="-1"><a class="header-anchor" href="#python-开发工具" aria-hidden="true">#</a> Python 开发工具</h2><h3 id="pycharm" tabindex="-1"><a class="header-anchor" href="#pycharm" aria-hidden="true">#</a> PyCharm</h3><p>PyCharm 是由 JetBrains 打造的一款 Python IDE，支持 macOS、 Windows、 Linux 系统。</p>`,15),P={href:"https://www.jetbrains.com/pycharm/",target:"_blank",rel:"noopener noreferrer"},k=e("figure",null,[e("img",{src:"https://www.jetbrains.com/pycharm/img/screenshots/code-completion_animation.gif",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w=e("h3",{id:"vscode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vscode","aria-hidden":"true"},"#"),n(" VSCode")],-1),A={href:"https://github.com/microsoft/vscode",target:"_blank",rel:"noopener noreferrer"},C=t(`<h3 id="pip" tabindex="-1"><a class="header-anchor" href="#pip" aria-hidden="true">#</a> pip</h3><p>pip 是 Python 包管理工具，该工具提供了对 Python 包的查找、下载、安装、卸载的功能。</p><p>目前最新的 Python 版本已经预装了 pip。</p><p><strong>查看是否已经安装 pip</strong>，可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>下载安装包</strong>，可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install some-package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>卸载安装包</strong>，可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip uninstall some-package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看已安装的包</strong>，可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ipython" tabindex="-1"><a class="header-anchor" href="#ipython" aria-hidden="true">#</a> IPython</h3><p>IPython 是一种基于 Python 的交互式解释器。相较于原生的 Python 交互式环境，IPython 提供了更为强大的编辑和交互功能。可以通过 Python 的包管理工具 pip 安装 IPython，具体的操作如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install ipython
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip3 install ipython
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="anaconda" tabindex="-1"><a class="header-anchor" href="#anaconda" aria-hidden="true">#</a> Anaconda</h3><p>Anaconda 是一个集成的数据科学和机器学习环境，其中包括了 Python 解释器以及大量常用的数据科学库和工具。Anaconda 发行版包含了 Python。</p><p>Anaconda 包及其依赖项和环境的管理工具为 conda 命令，与传统的 Python pip 工具相比 Anaconda 的conda 可以更方便地在不同环境之间进行切换，环境管理较为简单。</p>`,19),E={href:"https://www.runoob.com/python-qt/anaconda-tutorial.html",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),I={href:"https://zh.wikipedia.org/wiki/Python",target:"_blank",rel:"noopener noreferrer"};function S(V,B){const a=d("ExternalLinkIcon");return o(),r("div",null,[h,e("p",null,[n("2000 年，Python 2.0 版本发布。它引入了新的特性，如"),e("a",p,[n("列表推导式"),s(a)]),n("、垃圾回收机制等。")]),c,e("p",null,[n("Linux 环境自带了 Python 2.x 版本，但是如果要更新到 3.x 的版本，可以在 "),e("a",u,[n("Python 官网"),s(a)]),n(" 下载 Python 的源代码并通过源代码构建安装的方式进行安装，具体的步骤如下所示（以 CentOS 为例）：")]),v,e("p",null,[n("方法一、从 "),e("a",b,[n("Python 官网"),s(a)]),n(" 下载 Python 的"),e("a",m,[n("安装程序"),s(a)]),n("，下载后双击运行并安装。")]),e("p",null,[n("方法二、如果安装了 "),e("a",y,[n("Homebrew"),s(a)]),n("，直接通过命令 "),g,n(" 安装即可。")]),x,e("p",null,[n("从 "),e("a",_,[n("Python 官网"),s(a)]),n(" 下载合适的 Windows 安装版本（64 位还是 32 位），下载后双击运行并安装。")]),f,e("p",null,[n("我认为，"),e("a",P,[n("PyCharm"),s(a)]),n(" 是最好用的 Python IDE，功能丰富，UI 很酷，缺点是正版比较贵。")]),k,w,e("p",null,[e("a",A,[n("VSCode"),s(a)]),n("（全称：Visual Studio Code）是一款由微软开发且跨平台的免费源代码编辑器，VSCode 开发环境非常简单易用。")]),C,e("p",null,[n("Anaconda详细安装与介绍参考："),e("a",E,[n("Anaconda 教程。"),s(a)])]),z,e("ul",null,[e("li",null,[e("a",I,[n("维基百科-Python"),s(a)])])])])}const L=i(l,[["render",S],["__file","index.html.vue"]]);export{L as default};
