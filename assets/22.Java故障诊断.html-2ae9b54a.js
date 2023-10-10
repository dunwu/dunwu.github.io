import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as i,a,b as n,d as s,w as l,e as t}from"./app-207caadd.js";const d={},u=t(`<h1 id="java-故障诊断" tabindex="-1"><a class="header-anchor" href="#java-故障诊断" aria-hidden="true">#</a> Java 故障诊断</h1><h2 id="故障定位思路" tabindex="-1"><a class="header-anchor" href="#故障定位思路" aria-hidden="true">#</a> 故障定位思路</h2><p>Java 应用出现线上故障，如何进行诊断？</p><p>我们在定位线上问题时要有一个整体的思路，顺藤摸瓜，才能较快的找到问题原因。</p><p>一般来说，服务器故障诊断的整体思路如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200309181645.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>应用故障诊断思路：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200309181831.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="cpu-问题" tabindex="-1"><a class="header-anchor" href="#cpu-问题" aria-hidden="true">#</a> CPU 问题</h2><p>一、<strong>CPU 使用率过高</strong>：往往是由于程序逻辑问题导致的。常见导致 CPU 飙升的问题场景如：死循环，无限递归、频繁 GC、线程上下文切换过多。</p><p>二、<strong>CPU 始终升不上去</strong>：往往是由于程序中存在大量 IO 操作并且时间很长（数据库读写、日志等）。</p><h3 id="查找-cpu-占用率较高的进程、线程" tabindex="-1"><a class="header-anchor" href="#查找-cpu-占用率较高的进程、线程" aria-hidden="true">#</a> 查找 CPU 占用率较高的进程、线程</h3><p>线上环境的 Java 应用可能有多个进程、线程，所以，要先找到 CPU 占用率较高的进程、线程。</p><p>（1）使用 <code>ps</code> 命令查看 xxx 应用的进程 ID（PID）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用 <code>jps</code> 命令来查看。</p><p>（2）如果应用有多个进程，可以用 <code>top</code> 命令查看哪个占用 CPU 较高。</p><p>（3）用 <code>top -Hp pid</code> 来找到 CPU 使用率比较高的一些线程。</p><p>（4）将占用 CPU 最高的 PID 转换为 16 进制，使用 <code>printf &#39;%x\\n&#39; pid</code> 得到 <code>nid</code></p><p>（5）使用 <code>jstack pic | grep &#39;nid&#39; -C5</code> 命令，查看堆栈信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ jstack <span class="token number">7129</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;0x1c23&#39;</span> <span class="token parameter variable">-C5</span>
        at java.lang.Object.wait<span class="token punctuation">(</span>Object.java:502<span class="token punctuation">)</span>
        at java.lang.ref.Reference.tryHandlePending<span class="token punctuation">(</span>Reference.java:191<span class="token punctuation">)</span>
        - locked <span class="token operator">&lt;</span>0x00000000b5383ff<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token punctuation">(</span>a java.lang.ref.Reference<span class="token variable">$Lock</span><span class="token punctuation">)</span>
        at java.lang.ref.Reference<span class="token variable">$ReferenceHandler</span>.run<span class="token punctuation">(</span>Reference.java:153<span class="token punctuation">)</span>

<span class="token string">&quot;main&quot;</span> <span class="token comment">#1 prio=5 os_prio=0 tid=0x00007f4df400a800 nid=0x1c23 in Object.wait() [0x00007f4dfdec8000]</span>
   java.lang.Thread.State: WAITING <span class="token punctuation">(</span>on object monitor<span class="token punctuation">)</span>
        at java.lang.Object.wait<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
        - waiting on <span class="token operator">&lt;</span>0x00000000b538401<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span> <span class="token punctuation">(</span>a org.apache.felix.framework.util.ThreadGate<span class="token punctuation">)</span>
        at org.apache.felix.framework.util.ThreadGate.await<span class="token punctuation">(</span>ThreadGate.java:79<span class="token punctuation">)</span>
        - locked <span class="token operator">&lt;</span>0x00000000b538401<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span> <span class="token punctuation">(</span>a org.apache.felix.framework.util.ThreadGate<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（6）更常见的操作是用 <code>jstack</code> 生成堆栈快照，然后基于快照文件进行分析。生成快照命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jstack <span class="token parameter variable">-F</span> <span class="token parameter variable">-l</span> pid <span class="token operator">&gt;&gt;</span> threaddump.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）分析堆栈信息</p><p>一般来说，状态为 <code>WAITING</code>、<code>TIMED_WAITING</code> 、<code>BLOCKED</code> 的线程更可能出现问题。可以执行以下命令查看线程状态统计：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat threaddump.log | grep &quot;java.lang.Thread.State&quot; | sort -nr | uniq -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果存在大量 <code>WAITING</code>、<code>TIMED_WAITING</code> 、<code>BLOCKED</code> ，那么多半是有问题啦。</p><h3 id="是否存在频繁-gc" tabindex="-1"><a class="header-anchor" href="#是否存在频繁-gc" aria-hidden="true">#</a> 是否存在频繁 GC</h3><p>如果应用频繁 GC，也可能导致 CPU 飙升。为何频繁 GC 可以使用 <code>jstack</code> 来分析问题（分析和解决频繁 GC 问题，在后续讲解）。</p><p>那么，如何判断 Java 进程 GC 是否频繁？</p><p>可以使用 <code>jstat -gc pid 1000</code> 命令来观察 GC 状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ jstat <span class="token parameter variable">-gc</span> <span class="token number">29527</span> <span class="token number">200</span> <span class="token number">5</span>
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT
<span class="token number">22528.0</span> <span class="token number">22016.0</span>  <span class="token number">0.0</span>   <span class="token number">21388.2</span> <span class="token number">4106752.0</span> <span class="token number">921244.7</span> <span class="token number">5592576.0</span>  <span class="token number">2086826.5</span>  <span class="token number">110716.0</span> <span class="token number">103441.1</span> <span class="token number">12416.0</span> <span class="token number">11167.7</span>   <span class="token number">3189</span>   <span class="token number">90.057</span>  <span class="token number">10</span>      <span class="token number">2.140</span>   <span class="token number">92.197</span>
<span class="token number">22528.0</span> <span class="token number">22016.0</span>  <span class="token number">0.0</span>   <span class="token number">21388.2</span> <span class="token number">4106752.0</span> <span class="token number">921244.7</span> <span class="token number">5592576.0</span>  <span class="token number">2086826.5</span>  <span class="token number">110716.0</span> <span class="token number">103441.1</span> <span class="token number">12416.0</span> <span class="token number">11167.7</span>   <span class="token number">3189</span>   <span class="token number">90.057</span>  <span class="token number">10</span>      <span class="token number">2.140</span>   <span class="token number">92.197</span>
<span class="token number">22528.0</span> <span class="token number">22016.0</span>  <span class="token number">0.0</span>   <span class="token number">21388.2</span> <span class="token number">4106752.0</span> <span class="token number">921244.7</span> <span class="token number">5592576.0</span>  <span class="token number">2086826.5</span>  <span class="token number">110716.0</span> <span class="token number">103441.1</span> <span class="token number">12416.0</span> <span class="token number">11167.7</span>   <span class="token number">3189</span>   <span class="token number">90.057</span>  <span class="token number">10</span>      <span class="token number">2.140</span>   <span class="token number">92.197</span>
<span class="token number">22528.0</span> <span class="token number">22016.0</span>  <span class="token number">0.0</span>   <span class="token number">21388.2</span> <span class="token number">4106752.0</span> <span class="token number">921244.7</span> <span class="token number">5592576.0</span>  <span class="token number">2086826.5</span>  <span class="token number">110716.0</span> <span class="token number">103441.1</span> <span class="token number">12416.0</span> <span class="token number">11167.7</span>   <span class="token number">3189</span>   <span class="token number">90.057</span>  <span class="token number">10</span>      <span class="token number">2.140</span>   <span class="token number">92.197</span>
<span class="token number">22528.0</span> <span class="token number">22016.0</span>  <span class="token number">0.0</span>   <span class="token number">21388.2</span> <span class="token number">4106752.0</span> <span class="token number">921244.7</span> <span class="token number">5592576.0</span>  <span class="token number">2086826.5</span>  <span class="token number">110716.0</span> <span class="token number">103441.1</span> <span class="token number">12416.0</span> <span class="token number">11167.7</span>   <span class="token number">3189</span>   <span class="token number">90.057</span>  <span class="token number">10</span>      <span class="token number">2.140</span>   <span class="token number">92.197</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否存在频繁上下文切换" tabindex="-1"><a class="header-anchor" href="#是否存在频繁上下文切换" aria-hidden="true">#</a> 是否存在频繁上下文切换</h3><p>针对频繁上下文切换问题，可以使用 <code>vmstat pid</code> 命令来进行查看。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vmstat</span> <span class="token number">7129</span>
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   <span class="token function">free</span>   buff  cache   si   so    bi    bo   <span class="token keyword">in</span>   cs us sy <span class="token function">id</span> wa st
 <span class="token number">1</span>  <span class="token number">0</span>   <span class="token number">6836</span> <span class="token number">737532</span>   <span class="token number">1588</span> <span class="token number">3504956</span>    <span class="token number">0</span>    <span class="token number">0</span>     <span class="token number">1</span>     <span class="token number">4</span>    <span class="token number">5</span>    <span class="token number">3</span>  <span class="token number">0</span>  <span class="token number">0</span> <span class="token number">100</span>  <span class="token number">0</span>  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>cs</code> 一列代表了上下文切换的次数。</p><p>【解决方法】</p><p>如果，线程上下文切换很频繁，可以考虑在应用中针对线程进行优化，方法有：</p><ul><li><strong>无锁并发</strong>：多线程竞争时，会引起上下文切换，所以多线程处理数据时，可以用一些办法来避免使用锁，如将数据的 ID 按照 Hash 取模分段，不同的线程处理不同段的数据；</li><li><strong>CAS 算法</strong>：Java 的 Atomic 包使用 CAS 算法来更新数据，而不需要加锁；</li><li><strong>最少线程</strong>：避免创建不需要的线程，比如任务很少，但是创建了很多线程来处理，这样会造成大量线程都处于等待状态；</li><li><strong>使用协程</strong>：在单线程里实现多任务的调度，并在单线程里维持多个任务间的切换；</li></ul><h2 id="内存问题" tabindex="-1"><a class="header-anchor" href="#内存问题" aria-hidden="true">#</a> 内存问题</h2><p>内存问题诊断起来相对比 CPU 麻烦一些，场景也比较多。主要包括 OOM、GC 问题和堆外内存。一般来讲，我们会先用 <code>free</code> 命令先来检查一发内存的各种情况。</p><p>诊断内存问题，一般首先会用 <code>free</code> 命令查看一下机器的物理内存使用情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">free</span>
              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:        <span class="token number">8011164</span>     <span class="token number">3767900</span>      <span class="token number">735364</span>        <span class="token number">8804</span>     <span class="token number">3507900</span>     <span class="token number">3898568</span>
Swap:       <span class="token number">5242876</span>        <span class="token number">6836</span>     <span class="token number">5236040</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="磁盘问题" tabindex="-1"><a class="header-anchor" href="#磁盘问题" aria-hidden="true">#</a> 磁盘问题</h2><h3 id="查看磁盘空间使用率" tabindex="-1"><a class="header-anchor" href="#查看磁盘空间使用率" aria-hidden="true">#</a> 查看磁盘空间使用率</h3><p>可以使用 <code>df -hl</code> 命令查看磁盘空间使用率。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ df -hl
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        494M     0  494M   0% /dev
tmpfs           504M     0  504M   0% /dev/shm
tmpfs           504M   58M  447M  12% /run
tmpfs           504M     0  504M   0% /sys/fs/cgroup
/dev/sda2        20G  5.7G   13G  31% /
/dev/sda1       380M  142M  218M  40% /boot
tmpfs           101M     0  101M   0% /run/user/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看磁盘读写性能" tabindex="-1"><a class="header-anchor" href="#查看磁盘读写性能" aria-hidden="true">#</a> 查看磁盘读写性能</h3><p>可以使用 <code>iostat</code> 命令查看磁盘读写性能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iostat -d -k -x
Linux 3.10.0-327.el7.x86_64 (elk-server)        03/07/2020      _x86_64_        (4 CPU)

Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
sda               0.00     0.14    0.01    1.63     0.42   157.56   193.02     0.00    2.52   11.43    2.48   0.60   0.10
scd0              0.00     0.00    0.00    0.00     0.00     0.00     8.00     0.00    0.27    0.27    0.00   0.27   0.00
dm-0              0.00     0.00    0.01    1.78     0.41   157.56   177.19     0.00    2.46   12.09    2.42   0.59   0.10
dm-1              0.00     0.00    0.00    0.00     0.00     0.00    16.95     0.00    1.04    1.04    0.00   1.02   0.00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看具体的文件读写情况" tabindex="-1"><a class="header-anchor" href="#查看具体的文件读写情况" aria-hidden="true">#</a> 查看具体的文件读写情况</h3><p>可以使用 <code>lsof -p pid</code> 命令</p><h2 id="网络问题" tabindex="-1"><a class="header-anchor" href="#网络问题" aria-hidden="true">#</a> 网络问题</h2><h3 id="无法连接" tabindex="-1"><a class="header-anchor" href="#无法连接" aria-hidden="true">#</a> 无法连接</h3><p>可以通过 <code>ping</code> 命令，查看是否能连通。</p><p>通过 <code>netstat -nlp | grep &lt;port&gt;</code> 命令，查看服务端口是否在工作。</p><h3 id="网络超时" tabindex="-1"><a class="header-anchor" href="#网络超时" aria-hidden="true">#</a> 网络超时</h3><p>网络超时问题大部分出在应用层面。超时大体可以分为连接超时和读写超时，某些使用连接池的客户端框架还会存在获取连接超时和空闲连接清理超时。</p><ul><li>读写超时。readTimeout/writeTimeout，有些框架叫做 so_timeout 或者 socketTimeout，均指的是数据读写超时。注意这边的超时大部分是指逻辑上的超时。soa 的超时指的也是读超时。读写超时一般都只针对客户端设置。</li><li>连接超时。connectionTimeout，客户端通常指与服务端建立连接的最大时间。服务端这边 connectionTimeout 就有些五花八门了，jetty 中表示空闲连接清理时间，tomcat 则表示连接维持的最大时间。</li><li>其他。包括连接获取超时 connectionAcquireTimeout 和空闲连接清理超时 idleConnectionTimeout。多用于使用连接池或队列的客户端或服务端框架。</li></ul><p>我们在设置各种超时时间中，需要确认的是尽量保持客户端的超时小于服务端的超时，以保证连接正常结束。</p><p>在实际开发中，我们关心最多的应该是接口的读写超时了。</p><p>如何设置合理的接口超时是一个问题。如果接口超时设置的过长，那么有可能会过多地占用服务端的 tcp 连接。而如果接口设置的过短，那么接口超时就会非常频繁。</p><p>服务端接口明明 rt 降低，但客户端仍然一直超时又是另一个问题。这个问题其实很简单，客户端到服务端的链路包括网络传输、排队以及服务处理等，每一个环节都可能是耗时的原因。</p><h3 id="tcp-队列溢出" tabindex="-1"><a class="header-anchor" href="#tcp-队列溢出" aria-hidden="true">#</a> TCP 队列溢出</h3><p>tcp 队列溢出是个相对底层的错误，它可能会造成超时、rst 等更表层的错误。因此错误也更隐蔽，所以我们单独说一说。<br><img src="https://fredal-blog.oss-cn-hangzhou.aliyuncs.com/2019-11-04-083827.jpg" alt="img" loading="lazy"></p><p>如上图所示，这里有两个队列：syns queue(半连接队列）、accept queue（全连接队列）。三次握手，在 server 收到 client 的 syn 后，把消息放到 syns queue，回复 syn+ack 给 client，server 收到 client 的 ack，如果这时 accept queue 没满，那就从 syns queue 拿出暂存的信息放入 accept queue 中，否则按 tcp_abort_on_overflow 指示的执行。</p><p>tcp_abort_on_overflow 0 表示如果三次握手第三步的时候 accept queue 满了那么 server 扔掉 client 发过来的 ack。tcp_abort_on_overflow 1 则表示第三步的时候如果全连接队列满了，server 发送一个 rst 包给 client，表示废掉这个握手过程和这个连接，意味着日志里可能会有很多<code>connection reset / connection reset by peer</code>。</p><p>那么在实际开发中，我们怎么能快速定位到 tcp 队列溢出呢？</p><p><strong>netstat 命令，执行 netstat -s | egrep &quot;listen|LISTEN&quot;</strong><br><img src="https://fredal-blog.oss-cn-hangzhou.aliyuncs.com/2019-11-04-83828.jpg" alt="img" loading="lazy"><br> 如上图所示，overflowed 表示全连接队列溢出的次数，sockets dropped 表示半连接队列溢出的次数。</p><p><strong>ss 命令，执行 ss -lnt</strong><br><img src="https://fredal-blog.oss-cn-hangzhou.aliyuncs.com/2019-11-04-083828.jpg" alt="img" loading="lazy"><br> 上面看到 Send-Q 表示第三列的 listen 端口上的全连接队列最大为 5，第一列 Recv-Q 为全连接队列当前使用了多少。</p><p>接着我们看看怎么设置全连接、半连接队列大小吧：</p><p>全连接队列的大小取决于 min(backlog, somaxconn)。backlog 是在 socket 创建的时候传入的，somaxconn 是一个 os 级别的系统参数。而半连接队列的大小取决于 max(64, /proc/sys/net/ipv4/tcp_max_syn_backlog)。</p><p>在日常开发中，我们往往使用 servlet 容器作为服务端，所以我们有时候也需要关注容器的连接队列大小。在 tomcat 中 backlog 叫做<code>acceptCount</code>，在 jetty 里面则是<code>acceptQueueSize</code>。</p><h3 id="rst-异常" tabindex="-1"><a class="header-anchor" href="#rst-异常" aria-hidden="true">#</a> RST 异常</h3><p>RST 包表示连接重置，用于关闭一些无用的连接，通常表示异常关闭，区别于四次挥手。</p><p>在实际开发中，我们往往会看到<code>connection reset / connection reset by peer</code>错误，这种情况就是 RST 包导致的。</p><p><strong>端口不存在</strong></p><p>如果像不存在的端口发出建立连接 SYN 请求，那么服务端发现自己并没有这个端口则会直接返回一个 RST 报文，用于中断连接。</p><p><strong>主动代替 FIN 终止连接</strong></p><p>一般来说，正常的连接关闭都是需要通过 FIN 报文实现，然而我们也可以用 RST 报文来代替 FIN，表示直接终止连接。实际开发中，可设置 SO_LINGER 数值来控制，这种往往是故意的，来跳过 TIMED_WAIT，提供交互效率，不闲就慎用。</p><p><strong>客户端或服务端有一边发生了异常，该方向对端发送 RST 以告知关闭连接</strong></p><p>我们上面讲的 tcp 队列溢出发送 RST 包其实也是属于这一种。这种往往是由于某些原因，一方无法再能正常处理请求连接了(比如程序崩了，队列满了)，从而告知另一方关闭连接。</p><p><strong>接收到的 TCP 报文不在已知的 TCP 连接内</strong></p><p>比如，一方机器由于网络实在太差 TCP 报文失踪了，另一方关闭了该连接，然后过了许久收到了之前失踪的 TCP 报文，但由于对应的 TCP 连接已不存在，那么会直接发一个 RST 包以便开启新的连接。</p><p><strong>一方长期未收到另一方的确认报文，在一定时间或重传次数后发出 RST 报文</strong></p><p>这种大多也和网络环境相关了，网络环境差可能会导致更多的 RST 报文。</p><p>之前说过 RST 报文多会导致程序报错，在一个已关闭的连接上读操作会报<code>connection reset</code>，而在一个已关闭的连接上写操作则会报<code>connection reset by peer</code>。通常我们可能还会看到<code>broken pipe</code>错误，这是管道层面的错误，表示对已关闭的管道进行读写，往往是在收到 RST，报出<code>connection reset</code>错后继续读写数据报的错，这个在 glibc 源码注释中也有介绍。</p><p>我们在诊断故障时候怎么确定有 RST 包的存在呢？当然是使用 tcpdump 命令进行抓包，并使用 wireshark 进行简单分析了。<code>tcpdump -i en0 tcp -w xxx.cap</code>，en0 表示监听的网卡。<br><img src="https://fredal-blog.oss-cn-hangzhou.aliyuncs.com/2019-11-04-083829.jpg" alt="img" loading="lazy"></p><p>接下来我们通过 wireshark 打开抓到的包，可能就能看到如下图所示，红色的就表示 RST 包了。<br><img src="https://fredal-blog.oss-cn-hangzhou.aliyuncs.com/2019-11-04-083830.jpg" alt="img" loading="lazy"></p><h3 id="time-wait-和-close-wait" tabindex="-1"><a class="header-anchor" href="#time-wait-和-close-wait" aria-hidden="true">#</a> TIME_WAIT 和 CLOSE_WAIT</h3><p>TIME_WAIT 和 CLOSE_WAIT 是啥意思相信大家都知道。<br> 在线上时，我们可以直接用命令<code>netstat -n | awk &#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39;</code>来查看 time-wait 和 close_wait 的数量</p><p>用 ss 命令会更快<code>ss -ant | awk &#39;{++S[$1]} END {for(a in S) print a, S[a]}&#39;</code></p><figure><img src="https://fredal-blog.oss-cn-hangzhou.aliyuncs.com/2019-11-04-083830.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="time-wait" tabindex="-1"><a class="header-anchor" href="#time-wait" aria-hidden="true">#</a> TIME_WAIT</h4><p>time_wait 的存在一是为了丢失的数据包被后面连接复用，二是为了在 2MSL 的时间范围内正常关闭连接。它的存在其实会大大减少 RST 包的出现。</p><p>过多的 time_wait 在短连接频繁的场景比较容易出现。这种情况可以在服务端做一些内核参数调优:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#表示开启重用。允许将<span class="token constant">TIME</span><span class="token operator">-</span><span class="token constant">WAIT</span> sockets重新用于新的<span class="token constant">TCP</span>连接，默认为<span class="token number">0</span>，表示关闭
net<span class="token punctuation">.</span>ipv4<span class="token punctuation">.</span>tcp_tw_reuse <span class="token operator">=</span> <span class="token number">1</span>
#表示开启<span class="token constant">TCP</span>连接中<span class="token constant">TIME</span><span class="token operator">-</span><span class="token constant">WAIT</span> sockets的快速回收，默认为<span class="token number">0</span>，表示关闭
net<span class="token punctuation">.</span>ipv4<span class="token punctuation">.</span>tcp_tw_recycle <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然我们不要忘记在 NAT 环境下因为时间戳错乱导致数据包被拒绝的坑了，另外的办法就是改小<code>tcp_max_tw_buckets</code>，超过这个数的 time_wait 都会被干掉，不过这也会导致报<code>time wait bucket table overflow</code>的错。</p><h4 id="close-wait" tabindex="-1"><a class="header-anchor" href="#close-wait" aria-hidden="true">#</a> CLOSE_WAIT</h4><p>close_wait 往往都是因为应用程序写的有问题，没有在 ACK 后再次发起 FIN 报文。close_wait 出现的概率甚至比 time_wait 要更高，后果也更严重。往往是由于某个地方阻塞住了，没有正常关闭连接，从而渐渐地消耗完所有的线程。</p><p>想要定位这类问题，最好是通过 jstack 来分析线程堆栈来诊断问题，具体可参考上述章节。这里仅举一个例子。</p><p>开发同学说应用上线后 CLOSE_WAIT 就一直增多，直到挂掉为止，jstack 后找到比较可疑的堆栈是大部分线程都卡在了<code>countdownlatch.await</code>方法，找开发同学了解后得知使用了多线程但是确没有 catch 异常，修改后发现异常仅仅是最简单的升级 sdk 后常出现的<code>class not found</code>。</p><h2 id="gc-问题" tabindex="-1"><a class="header-anchor" href="#gc-问题" aria-hidden="true">#</a> GC 问题</h2><p>GC 问题除了影响 CPU 也会影响内存，诊断思路也是一致的。</p><p>（1）通常，先使用 <code>jstat</code> 来查看分代变化情况，比如 <strong>minor gc</strong> 或 <strong>full gc</strong> 次数是不是太频繁、耗时太久。</p><p>线程量太大，且不被及时 GC 也会引发 OOM，大部分就是之前说的 <code>unable to create new native thread</code>。除了 jstack 细细分析 dump 文件外，我们一般先会看下总体线程。</p><p>可以执行以下命令中任意一个，没来查看当前进程创建的总线程数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstreee <span class="token parameter variable">-p</span> pid <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /proc/pid/task <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>堆内内存泄漏总是和 GC 异常相伴。不过 GC 问题不只是和内存问题相关，还有可能引起 CPU 负载、网络问题等系列并发症，只是相对来说和内存联系紧密些，所以我们在此单独总结一下 GC 相关问题。</p><p>我们在 cpu 章介绍了使用 jstat 来获取当前 GC 分代变化信息。而更多时候，我们是通过 GC 日志来诊断问题的，在启动参数中加上<code>-verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps</code>来开启 GC 日志。<br> 常见的 Minor GC、Full GC 日志含义在此就不做赘述了。</p><p>针对 gc 日志，我们就能大致推断出 Minor GC 与 fullGC 是否过于频繁或者耗时过长，从而对症下药。我们下面将对 G1 垃圾收集器来做分析，这边也建议大家使用 G1<code>-XX:+UseG1GC</code>。</p><h3 id="oom" tabindex="-1"><a class="header-anchor" href="#oom" aria-hidden="true">#</a> OOM</h3><p>查看 GC 日志，如果有明显提示 OOM 问题，那就可以根据提示信息，较为快速的定位问题。</p>`,113),m=t(`<h3 id="minor-gc" tabindex="-1"><a class="header-anchor" href="#minor-gc" aria-hidden="true">#</a> Minor GC</h3><h4 id="minor-gc-过频" tabindex="-1"><a class="header-anchor" href="#minor-gc-过频" aria-hidden="true">#</a> Minor GC 过频</h4><p><strong>Minor GC 频繁一般是短周期的 Java 小对象较多</strong>。</p><p>（1）先考虑是不是 Eden 区/新生代设置的太小了，看能否通过调整 <code>-Xmn、-XX:SurvivorRatio</code> 等参数设置来解决问题。</p><p>（2）如果参数正常，但是 Minor GC 频率还是太高，就需要使用 <code>jmap</code> 和 <code>MAT</code> 对 dump 文件进行进一步诊断了。</p><h4 id="minor-gc-耗时过长" tabindex="-1"><a class="header-anchor" href="#minor-gc-耗时过长" aria-hidden="true">#</a> Minor GC 耗时过长</h4><p>Minor GC 耗时过长问题就要看 GC 日志里耗时耗在哪一块了。</p><p>以 G1 GC 日志为例，可以关注 Root Scanning、Object Copy、Ref Proc 等阶段。Ref Proc 耗时长，就要注意引用相关的对象。Root Scanning 耗时长，就要注意线程数、跨代引用。Object Copy 则需要关注对象生存周期。而且耗时分析它需要横向比较，就是和其他项目或者正常时间段的耗时比较。</p><h3 id="full-gc-过频" tabindex="-1"><a class="header-anchor" href="#full-gc-过频" aria-hidden="true">#</a> Full GC 过频</h3><p>G1 中更多的还是 mixedGC，但 mixedGC 可以和 Minor GC 思路一样去诊断。触发 fullGC 了一般都会有问题，G1 会退化使用 Serial 收集器来完成垃圾的清理工作，暂停时长达到秒级别，可以说是半跪了。</p><p>fullGC 的原因可能包括以下这些，以及参数调整方面的一些思路：</p><ul><li>并发阶段失败：在并发标记阶段，MixGC 之前老年代就被填满了，那么这时候 G1 就会放弃标记周期。这种情况，可能就需要增加堆大小，或者调整并发标记线程数<code>-XX:ConcGCThreads</code>。</li><li>晋升失败：在 GC 的时候没有足够的内存供存活/晋升对象使用，所以触发了 Full GC。这时候可以通过<code>-XX:G1ReservePercent</code>来增加预留内存百分比，减少<code>-XX:InitiatingHeapOccupancyPercent</code>来提前启动标记，<code>-XX:ConcGCThreads</code>来增加标记线程数也是可以的。</li><li>大对象分配失败：大对象找不到合适的 region 空间进行分配，就会进行 fullGC，这种情况下可以增大内存或者增大<code>-XX:G1HeapRegionSize</code>。</li><li>程序主动执行 System.gc()：不要随便写就对了。</li></ul><p>另外，我们可以在启动参数中配置<code>-XX:HeapDumpPath=/xxx/dump.hprof</code>来 dump fullGC 相关的文件，并通过 jinfo 来进行 gc 前后的 dump</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>jinfo <span class="token operator">-</span>flag <span class="token operator">+</span><span class="token class-name">HeapDumpBeforeFullGC</span> pid
jinfo <span class="token operator">-</span>flag <span class="token operator">+</span><span class="token class-name">HeapDumpAfterFullGC</span> pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样得到 2 份 dump 文件，对比后主要关注被 gc 掉的问题对象来定位问题。</p><h2 id="常用-linux-命令" tabindex="-1"><a class="header-anchor" href="#常用-linux-命令" aria-hidden="true">#</a> 常用 Linux 命令</h2><p>在故障排查时，有一些 Linux 命令十分有用，建议掌握。</p><h3 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h3><p>top 命令可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。</p><p>通常，会使用 <code>top -Hp pid</code> 查看具体线程使用系统资源情况。</p>`,20),b={href:"http://man.linuxde.net/top",target:"_blank",rel:"noopener noreferrer"},h=t('<h3 id="vmstat" tabindex="-1"><a class="header-anchor" href="#vmstat" aria-hidden="true">#</a> vmstat</h3><p>vmstat 是一款指定采样周期和次数的功能性监测工具，我们可以看到，它不仅可以统计内存的使用情况，还可以观测到 CPU 的使用率、swap 的使用情况。但 vmstat 一般很少用来查看内存的使用情况，而是经常被用来观察进程的上下文切换。</p><ul><li>r：等待运行的进程数；</li><li>b：处于非中断睡眠状态的进程数；</li><li>swpd：虚拟内存使用情况；</li><li>free：空闲的内存；</li><li>buff：用来作为缓冲的内存数；</li><li>si：从磁盘交换到内存的交换页数量；</li><li>so：从内存交换到磁盘的交换页数量；</li><li>bi：发送到块设备的块数；</li><li>bo：从块设备接收到的块数；</li><li>in：每秒中断数；</li><li>cs：每秒上下文切换次数；</li><li>us：用户 CPU 使用时间；</li><li>sy：内核 CPU 系统使用时间；</li><li>id：空闲时间；</li><li>wa：等待 I/O 时间；</li><li>st：运行虚拟机窃取的时间。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),k={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"},v={href:"https://fredal.xin/java-error-check",target:"_blank",rel:"noopener noreferrer"},g={href:"https://tech.meituan.com/2017/12/29/jvm-optimize.html",target:"_blank",rel:"noopener noreferrer"};function f(C,x){const c=p("RouterLink"),e=p("ExternalLinkIcon");return r(),i("div",null,[u,a("blockquote",null,[a("p",null,[n("OOM 定位可以参考："),s(c,{to:"/01.Java/01.JavaSE/06.JVM/02.JVM%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html#OutOfMemoryError"},{default:l(()=>[n("JVM 内存区域之 OutOfMemoryError")]),_:1})])]),m,a("blockquote",null,[a("p",null,[n("命令详情参考："),a("a",b,[n("http://man.linuxde.net/top"),s(e)])])]),h,a("ul",null,[a("li",null,[a("a",k,[n("《Java 性能调优实战》"),s(e)])]),a("li",null,[a("a",v,[n("JAVA 线上故障诊断全套路"),s(e)])]),a("li",null,[a("a",g,[n("从实际案例聊聊 Java 应用的 GC 优化"),s(e)])])])])}const T=o(d,[["render",f],["__file","22.Java故障诊断.html.vue"]]);export{T as default};
