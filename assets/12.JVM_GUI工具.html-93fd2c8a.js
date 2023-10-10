import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a,b as e,d as n,e as r}from"./app-207caadd.js";const h={},c=r(`<h1 id="jvm-gui-工具" tabindex="-1"><a class="header-anchor" href="#jvm-gui-工具" aria-hidden="true">#</a> JVM GUI 工具</h1><blockquote><p>Java 程序员免不了故障排查工作，所以经常需要使用一些 JVM 工具。</p><p>本文系统性的介绍一下常用的 JVM GUI 工具。</p></blockquote><h2 id="jconsole" tabindex="-1"><a class="header-anchor" href="#jconsole" aria-hidden="true">#</a> jconsole</h2><blockquote><p>jconsole 是 JDK 自带的 GUI 工具。<strong>jconsole(Java Monitoring and Management Console) 是一种基于 JMX 的可视化监视与管理工具</strong>。</p><p>jconsole 的管理功能是针对 JMX MBean 进行管理，由于 MBean 可以使用代码、中间件服务器的管理控制台或所有符合 JMX 规范的软件进行访问。</p></blockquote><p>注意：使用 jconsole 的前提是 Java 应用开启 JMX。</p><h3 id="开启-jmx" tabindex="-1"><a class="header-anchor" href="#开启-jmx" aria-hidden="true">#</a> 开启 JMX</h3><p>Java 应用开启 JMX 后，可以使用 <code>jconsole</code> 或 <code>jvisualvm</code> 进行监控 Java 程序的基本信息和运行情况。</p><p>开启方法是，在 java 指令后，添加以下参数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Dcom</span><span class="token punctuation">.</span>sun<span class="token punctuation">.</span>management<span class="token punctuation">.</span>jmxremote<span class="token operator">=</span><span class="token boolean">true</span>
<span class="token operator">-</span><span class="token class-name">Dcom</span><span class="token punctuation">.</span>sun<span class="token punctuation">.</span>management<span class="token punctuation">.</span>jmxremote<span class="token punctuation">.</span>ssl<span class="token operator">=</span><span class="token boolean">false</span>
<span class="token operator">-</span><span class="token class-name">Dcom</span><span class="token punctuation">.</span>sun<span class="token punctuation">.</span>management<span class="token punctuation">.</span>jmxremote<span class="token punctuation">.</span>authenticate<span class="token operator">=</span><span class="token boolean">false</span>
<span class="token operator">-</span><span class="token class-name">Djava</span><span class="token punctuation">.</span>rmi<span class="token punctuation">.</span>server<span class="token punctuation">.</span>hostname<span class="token operator">=</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
<span class="token operator">-</span><span class="token class-name">Dcom</span><span class="token punctuation">.</span>sun<span class="token punctuation">.</span>management<span class="token punctuation">.</span>jmxremote<span class="token punctuation">.</span>port<span class="token operator">=</span><span class="token number">18888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-Djava.rmi.server.hostname</code> - 指定 Java 程序运行的服务器</li><li><code>-Dcom.sun.management.jmxremote.port</code> - 指定 JMX 服务监听端口</li></ul><h3 id="连接-jconsole" tabindex="-1"><a class="header-anchor" href="#连接-jconsole" aria-hidden="true">#</a> 连接 jconsole</h3><p>如果是本地 Java 进程，jconsole 可以直接绑定连接。</p><p>如果是远程 Java 进程，需要连接 Java 进程的 JMX 端口。</p><figure><img src="https://docs.oracle.com/javase/8/docs/technotes/guides/management/figures/connectadv.gif" alt="Connecting to a JMX Agent Using the JMX Service URL" tabindex="0" loading="lazy"><figcaption>Connecting to a JMX Agent Using the JMX Service URL</figcaption></figure><h3 id="jconsole-界面" tabindex="-1"><a class="header-anchor" href="#jconsole-界面" aria-hidden="true">#</a> jconsole 界面</h3><p>进入 jconsole 应用后，可以看到以下 tab 页面。</p><ul><li><code>概述</code> - 显示有关 Java VM 和监视值的概述信息。</li><li><code>内存</code> - 显示有关内存使用的信息。内存页相当于可视化的 <code>jstat</code> 命令。</li><li><code>线程</code> - 显示有关线程使用的信息。</li><li><code>类</code> - 显示有关类加载的信息。</li><li><code>VM 摘要</code> - 显示有关 Java VM 的信息。</li><li><code>MBean</code> - 显示有关 MBean 的信息。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200730151422.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="jvisualvm" tabindex="-1"><a class="header-anchor" href="#jvisualvm" aria-hidden="true">#</a> jvisualvm</h2><blockquote><p>jvisualvm 是 JDK 自带的 GUI 工具。<strong>jvisualvm(All-In-One Java Troubleshooting Tool) 是多合一故障处理工具</strong>。它支持运行监视、故障处理、性能分析等功能。</p></blockquote><p>个人觉得 jvisualvm 比 jconsole 好用。</p><h3 id="jvisualvm-概述页面" tabindex="-1"><a class="header-anchor" href="#jvisualvm-概述页面" aria-hidden="true">#</a> jvisualvm 概述页面</h3><p>jvisualvm 概述页面可以查看当前 Java 进程的基本信息，如：JDK 版本、Java 进程、JVM 参数等。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200730150147.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="jvisualvm-监控页面" tabindex="-1"><a class="header-anchor" href="#jvisualvm-监控页面" aria-hidden="true">#</a> jvisualvm 监控页面</h3><p>在 jvisualvm 监控页面，可以看到 Java 进程的 CPU、内存、类加载、线程的实时变化。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200730150254.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="jvisualvm-线程页面" tabindex="-1"><a class="header-anchor" href="#jvisualvm-线程页面" aria-hidden="true">#</a> jvisualvm 线程页面</h3><p>jvisualvm 线程页面展示了当前的线程状态。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200730150416.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>jvisualvm 还可以生成线程 Dump 文件，帮助进一步分析线程栈信息。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200730150830.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="jvisualvm-抽样器页面" tabindex="-1"><a class="header-anchor" href="#jvisualvm-抽样器页面" aria-hidden="true">#</a> jvisualvm 抽样器页面</h3><p>jvisualvm 可以对 CPU、内存进行抽样，帮助我们进行性能分析。</p><h2 id="mat" tabindex="-1"><a class="header-anchor" href="#mat" aria-hidden="true">#</a> MAT</h2>`,35),p={href:"https://www.eclipse.org/mat/",target:"_blank",rel:"noopener noreferrer"},d=a("p",null,[e("MAT 本身也能够获取堆的二进制快照。该功能将借助 "),a("code",null,"jps"),e(" 列出当前正在运行的 Java 进程，以供选择并获取快照。由于 "),a("code",null,"jps"),e(" 会将自己列入其中，因此你会在列表中发现一个已经结束运行的 "),a("code",null,"jps"),e(" 进程。")],-1),u={href:"http://www.eclipse.org/mat/downloads.php",target:"_blank",rel:"noopener noreferrer"},g=r(`<h3 id="mat-配置" tabindex="-1"><a class="header-anchor" href="#mat-配置" aria-hidden="true">#</a> MAT 配置</h3><p>MAT 解压后，安装目录下有个 <code>MemoryAnalyzer.ini</code> 文件。</p><p><code>MemoryAnalyzer.ini</code> 中有个重要的参数 <code>Xmx</code> 表示最大内存，默认为：<code>-vmargs -Xmx1024m</code></p><p>如果试图用 MAT 导入的 dump 文件超过 1024 M，会报错：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>An internal error occurred during: <span class="token string">&quot;Parsing heap dump from XXX&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，可以适当调整 <code>Xmx</code> 大小。如果设置的 <code>Xmx</code> 数值过大，本机内存不足以支撑，启动 MAT 会报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Failed to create the Java Virtual Machine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mat-分析" tabindex="-1"><a class="header-anchor" href="#mat-分析" aria-hidden="true">#</a> MAT 分析</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200308092746.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>点击 Leak Suspects 可以进入内存泄漏页面。</p><p>（1）首先，可以查看饼图了解内存的整体消耗情况</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200308150556.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（2）缩小范围，寻找问题疑似点</p><figure><img src="https://img-blog.csdn.net/20160223202154818" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以点击进入详情页面，在详情页面 Shortest Paths To the Accumulation Point 表示 GC root 到内存消耗聚集点的最短路径，如果某个内存消耗聚集点有路径到达 GC root，则该内存消耗聚集点不会被当做垃圾被回收。</p><p>为了找到内存泄露，我获取了两个堆转储文件，两个文件获取时间间隔是一天（因为内存只是小幅度增长，短时间很难发现问题）。对比两个文件的对象，通过对比后的结果可以很方便定位内存泄露。</p><p>MAT 同时打开两个堆转储文件，分别打开 Histogram，如下图。在下图中方框 1 按钮用于对比两个 Histogram，对比后在方框 2 处选择 Group By package，然后对比各对象的变化。不难发现 heap3.hprof 比 heap6.hprof 少了 64 个 eventInfo 对象，如果对代码比较熟悉的话想必这样一个结果是能够给程序员一定的启示的。而我也是根据这个启示差找到了最终内存泄露的位置。<br><img src="https://img-blog.csdn.net/20160223203226362" alt="img" loading="lazy"></p><h2 id="jprofile" tabindex="-1"><a class="header-anchor" href="#jprofile" aria-hidden="true">#</a> JProfile</h2>`,18),m={href:"https://www.ej-technologies.com/products/jprofiler/overview.html",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,"由于它是收费的，所以我本人使用较少。但是，它确实功能强大，且方便使用，还可以和 Intellij Idea 集成。",-1),_=a("h2",{id:"arthas",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas","aria-hidden":"true"},"#"),e(" Arthas")],-1),f={href:"https://github.com/alibaba/arthas",target:"_blank",rel:"noopener noreferrer"},v=a("p",null,[e("Arthas 支持 JDK 6+，支持 Linux/Mac/Windows，采用命令行交互模式，同时提供丰富的 "),a("code",null,"Tab"),e(" 自动补全功能，进一步方便进行问题的定位和诊断。")],-1),k=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200730145030.png",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),j=a("h3",{id:"arthas-基础命令",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-基础命令","aria-hidden":"true"},"#"),e(" Arthas 基础命令")],-1),x=a("li",null,"help——查看命令帮助信息",-1),J={href:"https://alibaba.github.io/arthas/cat.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://alibaba.github.io/arthas/echo.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://alibaba.github.io/arthas/grep.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://alibaba.github.io/arthas/tee.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://alibaba.github.io/arthas/pwd.html",target:"_blank",rel:"noopener noreferrer"},V=a("li",null,"cls——清空当前屏幕区域",-1),X=a("li",null,"session——查看当前会话的信息",-1),T={href:"https://alibaba.github.io/arthas/reset.html",target:"_blank",rel:"noopener noreferrer"},z=a("li",null,"version——输出当前目标 Java 进程所加载的 Arthas 版本号",-1),D=a("li",null,"history——打印命令历史",-1),I=a("li",null,"quit——退出当前 Arthas 客户端，其他 Arthas 客户端不受影响",-1),q=a("li",null,"stop——关闭 Arthas 服务端，所有 Arthas 客户端全部退出",-1),U={href:"https://alibaba.github.io/arthas/keymap.html",target:"_blank",rel:"noopener noreferrer"},C=a("h3",{id:"arthas-jvm-相关命令",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-jvm-相关命令","aria-hidden":"true"},"#"),e(" Arthas jvm 相关命令")],-1),G={href:"https://alibaba.github.io/arthas/dashboard.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://alibaba.github.io/arthas/thread.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://alibaba.github.io/arthas/jvm.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://alibaba.github.io/arthas/sysprop.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://alibaba.github.io/arthas/sysenv.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://alibaba.github.io/arthas/vmoption.html",target:"_blank",rel:"noopener noreferrer"},K={href:"https://alibaba.github.io/arthas/perfcounter.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://alibaba.github.io/arthas/logger.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://alibaba.github.io/arthas/getstatic.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://alibaba.github.io/arthas/ognl.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://alibaba.github.io/arthas/mbean.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://alibaba.github.io/arthas/heapdump.html",target:"_blank",rel:"noopener noreferrer"},W=a("h3",{id:"arthas-class-classloader-相关命令",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-class-classloader-相关命令","aria-hidden":"true"},"#"),e(" Arthas class/classloader 相关命令")],-1),Q={href:"https://alibaba.github.io/arthas/sc.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://alibaba.github.io/arthas/sm.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://alibaba.github.io/arthas/jad.html",target:"_blank",rel:"noopener noreferrer"},$={href:"https://alibaba.github.io/arthas/mc.html",target:"_blank",rel:"noopener noreferrer"},aa=a("code",null,".java",-1),ea=a("code",null,".class",-1),ta={href:"https://alibaba.github.io/arthas/redefine.html",target:"_blank",rel:"noopener noreferrer"},na=a("code",null,".class",-1),ra={href:"https://alibaba.github.io/arthas/dump.html",target:"_blank",rel:"noopener noreferrer"},sa={href:"https://alibaba.github.io/arthas/classloader.html",target:"_blank",rel:"noopener noreferrer"},oa=a("h3",{id:"arthas-monitor-watch-trace-相关命令",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-monitor-watch-trace-相关命令","aria-hidden":"true"},"#"),e(" Arthas monitor/watch/trace 相关命令")],-1),la=a("blockquote",null,[a("p",null,[e("请注意，这些命令，都通过字节码增强技术来实现的，会在指定类的方法中插入一些切面来实现数据统计和观测，因此在线上、预发使用时，请尽量明确需要观测的类、方法以及条件，诊断结束要执行 "),a("code",null,"stop"),e(" 或将增强过的类执行 "),a("code",null,"reset"),e(" 命令。")])],-1),ia={href:"https://alibaba.github.io/arthas/monitor.html",target:"_blank",rel:"noopener noreferrer"},ha={href:"https://alibaba.github.io/arthas/watch.html",target:"_blank",rel:"noopener noreferrer"},ca={href:"https://alibaba.github.io/arthas/trace.html",target:"_blank",rel:"noopener noreferrer"},pa={href:"https://alibaba.github.io/arthas/stack.html",target:"_blank",rel:"noopener noreferrer"},da={href:"https://alibaba.github.io/arthas/tt.html",target:"_blank",rel:"noopener noreferrer"},ua=a("h2",{id:"参考资料",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),e(" 参考资料")],-1),ga={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},ma={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"},ba={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"},_a={href:"https://www.cnblogs.com/kongzhongqijing/articles/3621441.html",target:"_blank",rel:"noopener noreferrer"},fa={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/visualvm/index.html",target:"_blank",rel:"noopener noreferrer"},va={href:"https://blog.csdn.net/a19881029/article/details/8432368",target:"_blank",rel:"noopener noreferrer"},ka={href:"https://blog.csdn.net/wanghuiqi2008/article/details/50724676",target:"_blank",rel:"noopener noreferrer"};function ja(xa,Ja){const t=o("ExternalLinkIcon");return l(),i("div",null,[c,a("p",null,[a("a",p,[e("MAT"),n(t)]),e(" 即 Eclipse Memory Analyzer Tool 的缩写。")]),d,a("p",null,[e("MAT 可以独立安装（"),a("a",u,[e("官方下载地址"),n(t)]),e("），也可以作为 Eclipse IDE 的插件安装。")]),g,a("p",null,[a("a",m,[e("JProfiler"),n(t)]),e(" 是一款性能分析工具。")]),b,_,a("p",null,[a("a",f,[e("Arthas"),n(t)]),e(" 是 Alibaba 开源的 Java 诊断工具，深受开发者喜爱。在线排查问题，无需重启；动态跟踪 Java 代码；实时监控 JVM 状态。")]),v,k,j,a("ul",null,[x,a("li",null,[a("a",J,[e("cat"),n(t)]),e("——打印文件内容，和 linux 里的 cat 命令类似")]),a("li",null,[a("a",M,[e("echo"),n(t)]),e("–打印参数，和 linux 里的 echo 命令类似")]),a("li",null,[a("a",w,[e("grep"),n(t)]),e("——匹配查找，和 linux 里的 grep 命令类似")]),a("li",null,[a("a",A,[e("tee"),n(t)]),e("——复制标准输入到标准输出和指定的文件，和 linux 里的 tee 命令类似")]),a("li",null,[a("a",y,[e("pwd"),n(t)]),e("——返回当前的工作目录，和 linux 命令类似")]),V,X,a("li",null,[a("a",T,[e("reset"),n(t)]),e("——重置增强类，将被 Arthas 增强过的类全部还原，Arthas 服务端关闭时会重置所有增强过的类")]),z,D,I,q,a("li",null,[a("a",U,[e("keymap"),n(t)]),e("——Arthas 快捷键列表及自定义快捷键")])]),C,a("ul",null,[a("li",null,[a("a",G,[e("dashboard"),n(t)]),e("——当前系统的实时数据面板")]),a("li",null,[a("a",B,[e("thread"),n(t)]),e("——查看当前 JVM 的线程堆栈信息")]),a("li",null,[a("a",P,[e("jvm"),n(t)]),e("——查看当前 JVM 的信息")]),a("li",null,[a("a",E,[e("sysprop"),n(t)]),e("——查看和修改 JVM 的系统属性")]),a("li",null,[a("a",L,[e("sysenv"),n(t)]),e("——查看 JVM 的环境变量")]),a("li",null,[a("a",S,[e("vmoption"),n(t)]),e("——查看和修改 JVM 里诊断相关的 option")]),a("li",null,[a("a",K,[e("perfcounter"),n(t)]),e("——查看当前 JVM 的 Perf Counter 信息")]),a("li",null,[a("a",N,[e("logger"),n(t)]),e("——查看和修改 logger")]),a("li",null,[a("a",R,[e("getstatic"),n(t)]),e("——查看类的静态属性")]),a("li",null,[a("a",H,[e("ognl"),n(t)]),e("——执行 ognl 表达式")]),a("li",null,[a("a",F,[e("mbean"),n(t)]),e("——查看 Mbean 的信息")]),a("li",null,[a("a",O,[e("heapdump"),n(t)]),e("——dump java heap, 类似 jmap 命令的 heap dump 功能")])]),W,a("ul",null,[a("li",null,[a("a",Q,[e("sc"),n(t)]),e("——查看 JVM 已加载的类信息")]),a("li",null,[a("a",Y,[e("sm"),n(t)]),e("——查看已加载类的方法信息")]),a("li",null,[a("a",Z,[e("jad"),n(t)]),e("——反编译指定已加载类的源码")]),a("li",null,[a("a",$,[e("mc"),n(t)]),e("——内存编译器，内存编译"),aa,e("文件为"),ea,e("文件")]),a("li",null,[a("a",ta,[e("redefine"),n(t)]),e("——加载外部的"),na,e("文件，redefine 到 JVM 里")]),a("li",null,[a("a",ra,[e("dump"),n(t)]),e("——dump 已加载类的 byte code 到特定目录")]),a("li",null,[a("a",sa,[e("classloader"),n(t)]),e("——查看 classloader 的继承树，urls，类加载信息，使用 classloader 去 getResource")])]),oa,la,a("ul",null,[a("li",null,[a("a",ia,[e("monitor"),n(t)]),e("——方法执行监控")]),a("li",null,[a("a",ha,[e("watch"),n(t)]),e("——方法执行数据观测")]),a("li",null,[a("a",ca,[e("trace"),n(t)]),e("——方法内部调用路径，并输出方法路径上的每个节点上耗时")]),a("li",null,[a("a",pa,[e("stack"),n(t)]),e("——输出当前方法被调用的调用路径")]),a("li",null,[a("a",da,[e("tt"),n(t)]),e("——方法执行数据的时空隧道，记录下指定方法每次调用的入参和返回信息，并能对这些不同的时间下调用进行观测")])]),ua,a("ul",null,[a("li",null,[a("a",ga,[e("《深入理解 Java 虚拟机》"),n(t)])]),a("li",null,[a("a",ma,[e("《Java 性能调优实战》"),n(t)])]),a("li",null,[a("a",ba,[e("jconsole 官方文档"),n(t)])]),a("li",null,[a("a",_a,[e("jconsole 工具使用"),n(t)])]),a("li",null,[a("a",fa,[e("jvisualvm 官方文档"),n(t)])]),a("li",null,[a("a",va,[e("Java jvisualvm 简要说明"),n(t)])]),a("li",null,[a("a",ka,[e("利用内存分析工具（Memory Analyzer Tool，MAT）分析 java 项目内存泄露"),n(t)])])])])}const Aa=s(h,[["render",ja],["__file","12.JVM_GUI工具.html.vue"]]);export{Aa as default};
