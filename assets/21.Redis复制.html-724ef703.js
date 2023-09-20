import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as n,a as e,b as a,d,e as o}from"./app-9f0b185d.js";const l={},c=o('<h1 id="redis-复制" tabindex="-1"><a class="header-anchor" href="#redis-复制" aria-hidden="true">#</a> Redis 复制</h1><blockquote><p>在 Redis 中，<strong>可以通过执行 <code>SLAVEOF</code> 命令或设置 <code>slaveof</code> 选项，让一个服务器去复制（replicate）另一个服务器</strong>，其中，后者叫主服务器（master），前者叫从服务器（slave）。</p><p>Redis 2.8 以前的复制不能高效处理断线后重复制的情况，而 Redis 2.8 新添的部分重同步可以解决这个问题。</p><p>关键词：<code>SLAVEOF</code>、<code>SYNC</code>、<code>PSYNC</code>、<code>命令传播</code>、<code>心跳</code></p></blockquote><h2 id="复制简介" tabindex="-1"><a class="header-anchor" href="#复制简介" aria-hidden="true">#</a> 复制简介</h2><p>Redis 通过 <code>slaveof host port</code> 命令来让一个服务器成为另一个服务器的从服务器。</p><p><strong>一个主服务器可以有多个从服务器</strong>。不仅主服务器可以有从服务器，从服务器也可以有自己的从服务器， 多个从服务器之间可以构成一个主从链。</p><p><strong>一个从服务器只能有一个主服务器，并且不支持主主复制</strong>。</p><p>可以通过复制功能来让主服务器免于执行持久化操作： 只要关闭主服务器的持久化功能， 然后由从服务器去执行持久化操作即可。</p><p>在使用 Redis 复制功能时的设置中，强烈建议在 master 和在 slave 中启用持久化。当不启用时，例如由于非常慢的磁盘性能而导致的延迟问题，<strong>应该配置实例来避免重置后自动重启</strong>。</p><p>从 Redis 2.6 开始， 从服务器支持只读模式， 并且该模式为从服务器的默认模式。</p>',9),h=e("code",null,"redis.conf",-1),p=e("code",null,"slave-read-only",-1),u={href:"http://redisdoc.com/configure/config_set.html#config-set",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"只读从服务器会拒绝执行任何写命令， 所以不会出现因为操作失误而将数据不小心写入到了从服务器的情况。",-1),m=o(`<h2 id="旧版复制" tabindex="-1"><a class="header-anchor" href="#旧版复制" aria-hidden="true">#</a> 旧版复制</h2><blockquote><p>Redis 2.8 版本以前实现方式：<code>SYNC</code> 命令</p></blockquote><p>Redis 的复制功能分为同步（sync）和命令传播（command propagate）两个操作：</p><ul><li><strong><code>同步（sync）</code></strong> - 用于将从服务器的数据库状态更新至主服务器当前的数据库状态。</li><li><strong><code>命令传播（command propagate）</code></strong> - 当主服务器的数据库状态被修改，导致主从数据库状态不一致时，让主从服务器的数据库重新回到一致状态。</li></ul><h3 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h3><p><code>SYNC</code> 命令的执行步骤：</p><ol><li>从服务器向主服务器发送 <code>SYNC</code> 命令。</li><li>收到 <code>SYNC</code> 命令的主服务器执行 <code>BGSAVE</code> 命令，在后台生成一个 RDB 文件，并使用一个缓冲区记录从现在开始执行的所有写命令。</li><li>主服务器执行 <code>BGSAVE</code> 完毕后，主服务器会将生成的 RDB 文件发送给从服务器。从服务器接收并载入 RDB 文件，更新自己的数据库状态。</li><li>主服务器将记录在缓冲区中的所有写命令发送给从服务器，从服务器执行这些写命令，更新自己的数据库状态。</li></ol><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202309172035716.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="命令传播" tabindex="-1"><a class="header-anchor" href="#命令传播" aria-hidden="true">#</a> 命令传播</h3><p>同步操作完成后，主从数据库的数据库状态将达到一致。每当主服务器执行客户端发送的写命令时，主从数据库状态不再一致。需要将写命令发送给从服务器执行，使得二者的数据库状态重新达到一致。</p><h3 id="旧版复制的缺陷" tabindex="-1"><a class="header-anchor" href="#旧版复制的缺陷" aria-hidden="true">#</a> 旧版复制的缺陷</h3><p>从服务器对主服务器的复制存在两种情况：</p><ul><li><strong>初次复制</strong> - 从服务器以前没有复制过将要复制的主服务器。</li><li><strong>断线后重复制</strong> - 处于命令传播阶段的主从服务器因为网络原因而中断了复制，当从服务器通过自动重连重新连上了主服务器后，继续复制主服务器。</li></ul><p>对于初次复制，旧版复制功能可用很好完成任务；但是<strong>对于断线后重复制，由于每次任然需要生成 RDB 并传输，效率很低</strong>。</p><blockquote><p>🔔 注意：<strong>SYNC 命令是一个非常耗费资源的操作。</strong></p><ul><li>主服务器执行 <code>BGSAVE</code> 命令生成 RDB 文件，这个操作会耗费主服务器大量的 CPU、内存和磁盘 I/O 资源。</li><li>主服务器传输 RDB 文件给从服务器，这个操作会耗费主从服务器大量的网络资源，并对主服务器响应时延产生影响。</li><li>从服务器载入 RDB 文件期间，会阻塞其他命令请求。</li></ul></blockquote><h2 id="新版复制" tabindex="-1"><a class="header-anchor" href="#新版复制" aria-hidden="true">#</a> 新版复制</h2><blockquote><p>Redis 2.8 版本以后的新实现方式：使用 <code>PSYNC</code> 命令替代 <code>SYNC</code> 命令。</p></blockquote><p><code>PSYNC</code> 命令具有完整重同步和部分重同步两种模式：</p><ul><li><strong><code>完整重同步（full resychronization）</code></strong> - 用于初次复制。执行步骤与 <code>SYNC</code> 命令基本一致。</li><li><strong><code>部分重同步（partial resychronization）</code></strong> - 用于断线后重复制。<strong>如果条件允许，主服务器可以将主从服务器连接断开期间执行的写命令发送给从服务器</strong>，从服务器只需接收并执行这些写命令，即可将主从服务器的数据库状态保持一致。</li></ul><h3 id="部分重同步" tabindex="-1"><a class="header-anchor" href="#部分重同步" aria-hidden="true">#</a> 部分重同步</h3><p>部分重同步功能实现由三个部分构成：</p><ul><li>主从服务器的<strong>复制偏移量（replication offset）</strong></li><li>主服务器的<strong>复制积压缓冲区（replication backlog）</strong></li><li><strong>服务器的运行 ID</strong></li></ul><h4 id="复制偏移量" tabindex="-1"><a class="header-anchor" href="#复制偏移量" aria-hidden="true">#</a> 复制偏移量</h4><p>主服务器和从服务器会分别维护一个复制偏移量。</p><ul><li>如果主从服务器的复制偏移量相同，则说明二者的数据库状态一致；</li><li>反之，则说明二者的数据库状态不一致。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202309172031325.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="复制积压缓冲区" tabindex="-1"><a class="header-anchor" href="#复制积压缓冲区" aria-hidden="true">#</a> 复制积压缓冲区</h4><p><strong>复制积压缓冲区是主服务器维护的一个固定长度的先进先出（FIFO）队列</strong>，默认大小为 <code>1MB</code>。</p><p>复制积压缓冲区会保存一部分最近传播的写命令，并且复制积压缓冲区会为队列中的每个字节记录相应的复制偏移量。</p><p>当从服务器断线重连主服务时，从服务器会通过 <code>PSYNC</code> 命令将自己的复制偏移量 offset 发送给主服务器，主服务器会根据这个复制偏移量来决定对从服务器执行何种同步操作。</p><ul><li>如果 offset 之后的数据仍然在复制积压缓冲区，则主服务器对从服务器执行部分重同步操作。</li><li>反之，则主服务器对从服务器执行完整重同步操作。</li></ul><blockquote><p>🔔 注意：<strong>合理调整复制积压缓冲区的大小</strong></p><ul><li><p>Redis 复制积压缓冲区默认大小为 <code>1MB</code>。</p></li><li><p>复制积压缓冲区的最小大小可以根据公式 <code>second * write_size_per_second</code> 估算。</p></li></ul></blockquote><h4 id="服务器的运行-id" tabindex="-1"><a class="header-anchor" href="#服务器的运行-id" aria-hidden="true">#</a> 服务器的运行 ID</h4><ul><li>每个 Redis 服务器，都有运行 ID，用于唯一识别身份。</li><li>运行 ID 在服务器启动时自动生成，由 40 个随机的十六进制字符组成。例如：132e358005e29741f8d7b0a42d666aace286edda</li></ul><p>从服务器对主服务器进行初次复制时，主服务器会将自己的运行 ID 传送给从服务器，从服务器会将这个运行 ID 保存下来。</p><p>当从服务器断线重连一个主服务器时，从服务器会发送之前保存的运行 ID：</p><ul><li>如果保存的运行 ID 和当前主服务器的运行 ID 一致，则说明从服务器断线之前连接的就是这个主服务器，主服务器可以继续尝试执行部分重同步操作；</li><li>反之，若运行 ID 不一致，则说明从服务器断线之前连接的不是这个主服务器，主服务器将对从服务器执行完整重同步操作。</li></ul><h3 id="psync-命令" tabindex="-1"><a class="header-anchor" href="#psync-命令" aria-hidden="true">#</a> PSYNC 命令</h3><p>了解了部分重同步的实现，PSYNC 的实现就很容易理解了，它的基本工作原理大致如下：</p><p>当从服务接收到 <code>SLAVEOF</code> 命令时，先判断从服务器以前是否执行过复制操作。</p><ul><li>如果没有复制过任何主服务器，向要复制的主服务器<strong>发送 <code>PSYNC ? -1</code> 命令，主动请求进行完整重同步</strong>。</li><li>反之，向要复制的主服务器发送 <code>PSYNC &lt;runid&gt; &lt;offset&gt;</code> 命令。 <ul><li><code>runid</code> 是上一次复制的主服务器的运行 ID。</li><li><code>offset</code> 是复制偏移量。</li></ul></li></ul><p>接收到 <code>PSYNC &lt;runid&gt; &lt;offset&gt;</code> 命令的主服务会进行分析：</p><ul><li>假如主从服务器的 <strong>master run id 相同</strong>，并且<strong>指定的偏移量（offset）在内存缓冲区中还有效</strong>，复制就会从上次中断的点开始继续。</li><li>如果其中一个条件不满足，就会进行完全重新同步（在 2.8 版本之前就是直接进行完全重新同步）。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/202309172030499.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="心跳检测" tabindex="-1"><a class="header-anchor" href="#心跳检测" aria-hidden="true">#</a> 心跳检测</h2><p>在<strong>命令传播</strong>阶段，从服务器默认会以<strong>每秒一次</strong>的频率，向主服务器发送命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REPLCONF ACK &lt;replication_offset&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>replication_offset</code> 是从服务器当前的复制偏移量。</p><p>发送 <code>REPLCONF ACK</code> 命令对于主从服务器有三个作用：</p><ul><li>检测主从服务器的网络连接状态。</li><li>辅助实现 min-slaves 选项。</li><li>检测命令丢失。</li></ul><h3 id="检测主从连接状态" tabindex="-1"><a class="header-anchor" href="#检测主从连接状态" aria-hidden="true">#</a> 检测主从连接状态</h3><p><strong>可以通过发送和接收 <code>REPLCONF ACK</code> 命令来检查主从服务器之间的网络连接</strong>是否正常：如果主服务器超过一秒没有收到从服务器发来的 <code>REPLCONF ACK</code> 命令，那么主服务器就知道主从服务器之间的连接出现问题了。</p><p>可以通过向主服务器发送 <code>INFO replication</code> 命令，在列出的从服务器列表的 lag 一栏中，可以看到从服务器向主服务器发送 <code>REPLCONF ACK</code> 命令已经过去多少秒。</p><h3 id="辅助实现-min-slaves-选项" tabindex="-1"><a class="header-anchor" href="#辅助实现-min-slaves-选项" aria-hidden="true">#</a> 辅助实现 min-slaves 选项</h3><p>Redis 的 <strong><code>min-slaves-to-write</code> 和 <code>min-slaves-max-lag</code> 两个选项可以防止主服务器在不安全的情况下执行写命令</strong>。</p><p>【示例】min-slaves 配置项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>min-slaves-to-write 3
min-slaves-max-lag 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置表示：从服务器小于 3 个，或三个从服务器的延迟（lag）都大于等于 10 秒时，主服务器将拒绝执行写命令。</p><h3 id="检测命令丢失" tabindex="-1"><a class="header-anchor" href="#检测命令丢失" aria-hidden="true">#</a> 检测命令丢失</h3><p>如果因为网络故障，主服务传播给从服务器的写命令丢失，那么从服务器定时向主服务器发送 <code>REPLCONF ACK</code> 命令时，主服务器将发觉从服务器的复制偏移量少于自己的。然后，主服务器就会根据从服务器提交的复制偏移量，在复制积压缓冲区中找到从服务器缺少的数据，并将这些数据重新发送给从服务器。</p><h2 id="复制的流程" tabindex="-1"><a class="header-anchor" href="#复制的流程" aria-hidden="true">#</a> 复制的流程</h2><p>通过向从服务器发送如下 SLAVEOF 命令，可以让一个从服务器去复制一个主服务器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SLAVEOF &lt;master_ip&gt; &lt;master_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="步骤-1-设置主从服务器" tabindex="-1"><a class="header-anchor" href="#步骤-1-设置主从服务器" aria-hidden="true">#</a> 步骤 1. 设置主从服务器</h3><p>配置一个从服务器非常简单， 只要在配置文件中增加以下的这一行就可以了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>slaveof 127.0.0.1 6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然， 你需要将代码中的 <code>127.0.0.1</code> 和 <code>6379</code> 替换成你的主服务器的 IP 和端口号。</p>`,67),f={href:"http://redisdoc.com/replication/slaveof.html#slaveof",target:"_blank",rel:"noopener noreferrer"},v=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; SLAVEOF 127.0.0.1 10086
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤-2-主从服务器建立-tcp-连接。" tabindex="-1"><a class="header-anchor" href="#步骤-2-主从服务器建立-tcp-连接。" aria-hidden="true">#</a> 步骤 2. 主从服务器建立 TCP 连接。</h3><h3 id="步骤-3-发送-ping-检查通信状态。" tabindex="-1"><a class="header-anchor" href="#步骤-3-发送-ping-检查通信状态。" aria-hidden="true">#</a> 步骤 3. 发送 PING 检查通信状态。</h3><h3 id="步骤-4-身份验证。" tabindex="-1"><a class="header-anchor" href="#步骤-4-身份验证。" aria-hidden="true">#</a> 步骤 4. 身份验证。</h3><p>如果主服务器没有设置 <code>requirepass</code> ，从服务器没有设置 <code>masterauth</code>，则不进行身份验证；反之，则需要进行身份验证。如果身份验证失败，则放弃执行复制工作。</p><p>如果主服务器通过 <code>requirepass</code> 选项设置了密码， 那么为了让从服务器的同步操作可以顺利进行， 我们也必须为从服务器进行相应的身份验证设置。</p><p>对于一个正在运行的服务器， 可以使用客户端输入以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config set masterauth &lt;password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要永久地设置这个密码， 那么可以将它加入到配置文件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>masterauth &lt;password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外还有几个选项， 它们和主服务器执行部分重同步时所使用的复制流缓冲区有关， 详细的信息可以参考 Redis 源码中附带的 <code>redis.conf</code> 示例文件。</p><h3 id="步骤-5-发送端口信息。" tabindex="-1"><a class="header-anchor" href="#步骤-5-发送端口信息。" aria-hidden="true">#</a> 步骤 5. 发送端口信息。</h3><p>从服务器执行 <code>REPLCONF listening-port &lt;port-number&gt;</code> ，向主服务器发送从服务器的监听端口号。</p><h3 id="步骤-6-同步。" tabindex="-1"><a class="header-anchor" href="#步骤-6-同步。" aria-hidden="true">#</a> 步骤 6. 同步。</h3><p>前文已介绍，此处不赘述。</p><h3 id="步骤-7-命令传播。" tabindex="-1"><a class="header-anchor" href="#步骤-7-命令传播。" aria-hidden="true">#</a> 步骤 7. 命令传播。</h3><p>在命令传播阶段，从服务器默认会以每秒一次的频率，向主服务发送命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REPLCONF ACK &lt;replication_coffset&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令的作用：</p><ul><li>检测主从服务器的网络连接状态。</li><li>辅助实现 min-slave 选项。</li><li>检测命令丢失。</li></ul><h2 id="复制的配置项" tabindex="-1"><a class="header-anchor" href="#复制的配置项" aria-hidden="true">#</a> 复制的配置项</h2><p>从 Redis 2.8 开始， 为了保证数据的安全性， 可以通过配置， 让主服务器只在有至少 N 个当前已连接从服务器的情况下， 才执行写命令。</p><p>不过， 因为 Redis 使用异步复制， 所以主服务器发送的写数据并不一定会被从服务器接收到， 因此， 数据丢失的可能性仍然是存在的。</p><p>以下是这个特性的运作原理：</p><ul><li>从服务器以每秒一次的频率 PING 主服务器一次， 并报告复制流的处理情况。</li><li>主服务器会记录各个从服务器最后一次向它发送 PING 的时间。</li><li>用户可以通过配置， 指定网络延迟的最大值 <code>min-slaves-max-lag</code> ， 以及执行写操作所需的至少从服务器数量 <code>min-slaves-to-write</code> 。</li></ul><p>如果至少有 <code>min-slaves-to-write</code> 个从服务器， 并且这些服务器的延迟值都少于 <code>min-slaves-max-lag</code>秒， 那么主服务器就会执行客户端请求的写操作。</p><p>你可以将这个特性看作 CAP 理论中的 C 的条件放宽版本： 尽管不能保证写操作的持久性， 但起码丢失数据的窗口会被严格限制在指定的秒数中。</p><p>另一方面， 如果条件达不到 <code>min-slaves-to-write</code> 和 <code>min-slaves-max-lag</code> 所指定的条件， 那么写操作就不会被执行， 主服务器会向请求执行写操作的客户端返回一个错误。</p><p>以下是这个特性的两个选项和它们所需的参数：</p><ul><li><code>min-slaves-to-write &lt;number of slaves&gt;</code></li><li><code>min-slaves-max-lag &lt;number of seconds&gt;</code></li></ul><p>详细的信息可以参考 Redis 源码中附带的 <code>redis.conf</code> 示例文件。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,32),b={href:"https://redis.io/docs/management/replication/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"};function _(C,R){const i=t("ExternalLinkIcon");return s(),n("div",null,[c,e("ul",null,[e("li",null,[a("只读模式由 "),h,a(" 文件中的 "),p,a(" 选项控制， 也可以通过 "),e("a",u,[a("CONFIG SET parameter value"),d(i)]),a(" 命令来开启或关闭这个模式。")]),g]),m,e("p",null,[a("另外一种方法是调用 "),e("a",f,[a("SLAVEOF host port"),d(i)]),a(" 命令， 输入主服务器的 IP 和端口， 然后同步就会开始：")]),v,e("ul",null,[e("li",null,[e("a",b,[a("Redis 官方文档之复制"),d(i)])]),e("li",null,[e("a",x,[a("《Redis 设计与实现》"),d(i)])])])])}const P=r(l,[["render",_],["__file","21.Redis复制.html.vue"]]);export{P as default};
