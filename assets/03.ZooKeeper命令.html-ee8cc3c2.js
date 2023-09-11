import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,a as n,b as a,d as e,e as t}from"./app-64c8372a.js";const c={},d=t(`<h1 id="zookeeper-命令" tabindex="-1"><a class="header-anchor" href="#zookeeper-命令" aria-hidden="true">#</a> ZooKeeper 命令</h1><blockquote><p>ZooKeeper 命令用于在 ZooKeeper 服务上执行操作。</p></blockquote><h2 id="启动服务和启动命令行" tabindex="-1"><a class="header-anchor" href="#启动服务和启动命令行" aria-hidden="true">#</a> 启动服务和启动命令行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
bin/zkServer.sh start

<span class="token comment"># 启动命令行，不指定服务地址则默认连接到localhost:2181</span>
bin/zkCli.sh <span class="token parameter variable">-server</span> hadoop001:2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看节点列表" tabindex="-1"><a class="header-anchor" href="#查看节点列表" aria-hidden="true">#</a> 查看节点列表</h2><h3 id="ls-命令" tabindex="-1"><a class="header-anchor" href="#ls-命令" aria-hidden="true">#</a> <code>ls</code> 命令</h3><p><code>ls</code> 命令用于查看某个路径下目录列表。</p><p>【语法】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明：</p><ul><li><strong>path</strong>：代表路径。</li></ul></blockquote><p>【示例】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[zk: localhost:2181(CONNECTED) 0] ls /
[cluster, controller_epoch, brokers, storm, zookeeper, admin,  ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ls2-命令" tabindex="-1"><a class="header-anchor" href="#ls2-命令" aria-hidden="true">#</a> <code>ls2</code> 命令</h3><p><code>ls2</code> 命令用于查看某个路径下目录列表，它比 ls 命令列出更多的详细信息。</p><p>【语法】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ls2 path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明：</p><ul><li><strong>path</strong>：代表路径。</li></ul></blockquote><p>【示例】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> ls2 /
<span class="token punctuation">[</span>cluster, controller_epoch, brokers, storm, zookeeper, admin, <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">]</span>
cZxid <span class="token operator">=</span> 0x0
ctime <span class="token operator">=</span> Thu Jan 01 08:00:00 CST <span class="token number">1970</span>
mZxid <span class="token operator">=</span> 0x0
mtime <span class="token operator">=</span> Thu Jan 01 08:00:00 CST <span class="token number">1970</span>
pZxid <span class="token operator">=</span> 0x130
cversion <span class="token operator">=</span> <span class="token number">19</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">0</span>
numChildren <span class="token operator">=</span> <span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节点的增删改查" tabindex="-1"><a class="header-anchor" href="#节点的增删改查" aria-hidden="true">#</a> 节点的增删改查</h2><h3 id="get-命令" tabindex="-1"><a class="header-anchor" href="#get-命令" aria-hidden="true">#</a> <code>get</code> 命令</h3><p><code>get</code> 命令用于获取节点数据和状态信息。</p><p>【语法】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>get path [watch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明：</p><ul><li><strong>path</strong>：代表路径。</li><li><strong>[watch]</strong>：对节点进行事件监听。</li></ul></blockquote><p>【示例】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">31</span><span class="token punctuation">]</span> get /hadoop
<span class="token number">123456</span>   <span class="token comment">#节点数据</span>
cZxid <span class="token operator">=</span> 0x14b
ctime <span class="token operator">=</span> Fri May <span class="token number">24</span> <span class="token number">17</span>:03:06 CST <span class="token number">2019</span>
mZxid <span class="token operator">=</span> 0x14b
mtime <span class="token operator">=</span> Fri May <span class="token number">24</span> <span class="token number">17</span>:03:06 CST <span class="token number">2019</span>
pZxid <span class="token operator">=</span> 0x14b
cversion <span class="token operator">=</span> <span class="token number">0</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">6</span>
numChildren <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：</p><p>节点各个属性如下表。其中一个重要的概念是 Zxid(ZooKeeper Transaction Id)，ZooKeeper 节点的每一次更改都具有唯一的 Zxid，如果 Zxid1 小于 Zxid2，则 Zxid1 的更改发生在 Zxid2 更改之前。</p><table><thead><tr><th><strong>状态属性</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>cZxid</td><td>数据节点创建时的事务 ID</td></tr><tr><td>ctime</td><td>数据节点创建时的时间</td></tr><tr><td>mZxid</td><td>数据节点最后一次更新时的事务 ID</td></tr><tr><td>mtime</td><td>数据节点最后一次更新时的时间</td></tr><tr><td>pZxid</td><td>数据节点的子节点最后一次被修改时的事务 ID</td></tr><tr><td>cversion</td><td>子节点的更改次数</td></tr><tr><td>dataVersion</td><td>节点数据的更改次数</td></tr><tr><td>aclVersion</td><td>节点的 ACL 的更改次数</td></tr><tr><td>ephemeralOwner</td><td>如果节点是临时节点，则表示创建该节点的会话的 SessionID；如果节点是持久节点，则该属性值为 0</td></tr><tr><td>dataLength</td><td>数据内容的长度</td></tr><tr><td>numChildren</td><td>数据节点当前的子节点个数</td></tr></tbody></table></blockquote><h3 id="stat-命令" tabindex="-1"><a class="header-anchor" href="#stat-命令" aria-hidden="true">#</a> <code>stat</code> 命令</h3><p><code>stat</code> 命令用于查看节点状态信息。它的返回值和 <code>get</code> 命令类似，但不会返回节点数据。</p><p>【语法】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stat path [watch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>path</strong>：代表路径。</li><li><strong>[watch]</strong>：对节点进行事件监听。</li></ul><p>【示例】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">32</span><span class="token punctuation">]</span> <span class="token function">stat</span> /hadoop
cZxid <span class="token operator">=</span> 0x14b
ctime <span class="token operator">=</span> Fri May <span class="token number">24</span> <span class="token number">17</span>:03:06 CST <span class="token number">2019</span>
mZxid <span class="token operator">=</span> 0x14b
mtime <span class="token operator">=</span> Fri May <span class="token number">24</span> <span class="token number">17</span>:03:06 CST <span class="token number">2019</span>
pZxid <span class="token operator">=</span> 0x14b
cversion <span class="token operator">=</span> <span class="token number">0</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">6</span>
numChildren <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-命令" tabindex="-1"><a class="header-anchor" href="#create-命令" aria-hidden="true">#</a> <code>create</code> 命令</h3><p><code>create</code> 命令用于创建节点并赋值。</p><p>【语法】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e<span class="token punctuation">]</span> path data acl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明：</p><ul><li><strong>[-s][-e]</strong>：-s 和 -e 都是可选的，-s 代表顺序节点，-e 代表临时节点，注意其中 -s 和 -e 可以同时使用的，并且临时节点不能再创建子节点。 <ul><li>默认情况下，所有 znode 都是持久的。</li><li>顺序节点保证 znode 路径将是唯一的。</li><li>临时节点会在会话过期或客户端断开连接时被自动删除。</li></ul></li><li><strong>path</strong>：指定要创建节点的路径，比如 <strong>/hadoop</strong>。</li><li><strong>data</strong>：要在此节点存储的数据。</li><li><strong>acl</strong>：访问权限相关，默认是 world，相当于全世界都能访问。</li></ul></blockquote><p>【示例】创建持久节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">4</span><span class="token punctuation">]</span> create /hadoop <span class="token number">123456</span>
Created /hadoop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】创建有序节点，此时创建的节点名为指定节点名 + 自增序号：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">23</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /a  <span class="token string">&quot;aaa&quot;</span>
Created /a0000000022
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">24</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /b  <span class="token string">&quot;bbb&quot;</span>
Created /b0000000023
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">25</span><span class="token punctuation">]</span> create <span class="token parameter variable">-s</span> /c  <span class="token string">&quot;ccc&quot;</span>
Created /c0000000024
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】创建临时节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">26</span><span class="token punctuation">]</span> create <span class="token parameter variable">-e</span> /tmp  <span class="token string">&quot;tmp&quot;</span>
Created /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-命令" tabindex="-1"><a class="header-anchor" href="#set-命令" aria-hidden="true">#</a> <code>set</code> 命令</h3><p><code>set</code> 命令用于修改节点存储的数据。</p><p>【语法】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set path data [version]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明：</p><ul><li><strong>path</strong>：节点路径。</li><li><strong>data</strong>：需要存储的数据。</li><li><strong>[version]</strong>：可选项，版本号(可用作乐观锁)。</li></ul></blockquote><p>【示例】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">33</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /hadoop <span class="token number">345</span>
cZxid <span class="token operator">=</span> 0x14b
ctime <span class="token operator">=</span> Fri May <span class="token number">24</span> <span class="token number">17</span>:03:06 CST <span class="token number">2019</span>
mZxid <span class="token operator">=</span> 0x14c
mtime <span class="token operator">=</span> Fri May <span class="token number">24</span> <span class="token number">17</span>:13:05 CST <span class="token number">2019</span>
pZxid <span class="token operator">=</span> 0x14b
cversion <span class="token operator">=</span> <span class="token number">0</span>
dataVersion <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 注意更改后此时版本号为 1，默认创建时为 0</span>
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> 0x0
dataLength <span class="token operator">=</span> <span class="token number">3</span>
numChildren <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以基于版本号进行更改，此时类似于乐观锁机制，当你传入的数据版本号 (dataVersion) 和当前节点的数据版本号不符合时，zookeeper 会拒绝本次修改：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">34</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /hadoop <span class="token number">678</span> <span class="token number">0</span>
version No is not valid <span class="token builtin class-name">:</span> /hadoop    <span class="token comment">#无效的版本号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-命令" tabindex="-1"><a class="header-anchor" href="#delete-命令" aria-hidden="true">#</a> <code>delete</code> 命令</h3><p><code>delete</code> 命令用于删除某节点。</p><p>【语法】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delete path [version]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明：</p><ul><li><strong>path</strong>：节点路径。</li><li><strong>[version]</strong>：可选项，版本号（同 set 命令）。和更新节点数据一样，也可以传入版本号，当你传入的数据版本号 (dataVersion) 和当前节点的数据版本号不符合时，zookeeper 不会执行删除操作。</li></ul></blockquote><p>【示例】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">36</span><span class="token punctuation">]</span> delete /hadoop <span class="token number">0</span>
version No is not valid <span class="token builtin class-name">:</span> /hadoop   <span class="token comment">#无效的版本号</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">37</span><span class="token punctuation">]</span> delete /hadoop <span class="token number">1</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">38</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>delete</code> 命令不能删除带有子节点的节点。如果想要删除节点及其子节点，可以使用 <code>deleteall path</code></p><h2 id="监听器" tabindex="-1"><a class="header-anchor" href="#监听器" aria-hidden="true">#</a> 监听器</h2><p>针对每个节点的操作，都会有一个监听者（watcher）。</p><ul><li>当监听的某个对象（znode）发生了变化，则触发监听事件。</li><li>zookeeper 中的监听事件是一次性的，触发后立即销毁。</li><li>父节点，子节点的增删改都能够触发其监听者（watcher）</li><li>针对不同类型的操作，触发的 watcher 事件也不同： <ul><li>父节点 Watcher 事件 <ul><li>创建父节点触发：NodeCreated</li><li>修改节点数据触发：NodeDatachanged</li><li>删除节点数据触发：NodeDeleted</li></ul></li><li>子节点 Watcher 事件 <ul><li>创建子节点触发：NodeChildrenChanged</li><li>删除子节点触发：NodeChildrenChanged</li><li>修改子节点不触发事件</li></ul></li></ul></li></ul><h3 id="get-path" tabindex="-1"><a class="header-anchor" href="#get-path" aria-hidden="true">#</a> get path</h3><p>使用 <code>get path -w</code> 注册的监听器能够在节点内容发生改变的时候，向客户端发出通知。需要注意的是 zookeeper 的触发器是一次性的 (One-time trigger)，即触发一次后就会立即失效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">4</span><span class="token punctuation">]</span> get /hadoop <span class="token parameter variable">-w</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /hadoop <span class="token number">45678</span>
WATCHER::
WatchedEvent state:SyncConnected type:NodeDataChanged path:/hadoop  <span class="token comment">#节点值改变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>get path [watch] 在当前版本已废弃</p></blockquote><h3 id="stat-path" tabindex="-1"><a class="header-anchor" href="#stat-path" aria-hidden="true">#</a> stat path</h3><p>使用 <code>stat path -w</code> 注册的监听器能够在节点状态发生改变的时候，向客户端发出通知。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">7</span><span class="token punctuation">]</span> <span class="token function">stat</span> path <span class="token parameter variable">-w</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token builtin class-name">set</span> /hadoop <span class="token number">112233</span>
WATCHER::
WatchedEvent state:SyncConnected type:NodeDataChanged path:/hadoop  <span class="token comment">#节点值改变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>stat path [watch] 在当前版本已废弃</p></blockquote><h3 id="ls-ls2-path" tabindex="-1"><a class="header-anchor" href="#ls-ls2-path" aria-hidden="true">#</a> ls\\ls2 path</h3><p>使用 <code>ls path -w</code> 或 <code>ls2 path -w</code> 注册的监听器能够监听该节点下所有<strong>子节点</strong>的增加和删除操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">9</span><span class="token punctuation">]</span> <span class="token function">ls</span> /hadoop <span class="token parameter variable">-w</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">10</span><span class="token punctuation">]</span> create  /hadoop/yarn <span class="token string">&quot;aaa&quot;</span>
WATCHER::
WatchedEvent state:SyncConnected type:NodeChildrenChanged path:/hadoop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ls path [watch] 和 ls2 path [watch] 在当前版本已废弃</p></blockquote><h2 id="辅助命令" tabindex="-1"><a class="header-anchor" href="#辅助命令" aria-hidden="true">#</a> 辅助命令</h2><p>使用 <code>help</code> 可以查看所有命令帮助信息。</p><p>使用 <code>history</code> 可以查看最近 10 条历史记录。</p><h2 id="zookeeper-四字命令" tabindex="-1"><a class="header-anchor" href="#zookeeper-四字命令" aria-hidden="true">#</a> zookeeper 四字命令</h2><table><thead><tr><th>命令</th><th>功能描述</th></tr></thead><tbody><tr><td>conf</td><td>打印服务配置的详细信息。</td></tr><tr><td>cons</td><td>列出连接到此服务器的所有客户端的完整连接/会话详细信息。包括接收/发送的数据包数量，会话 ID，操作延迟，上次执行的操作等信息。</td></tr><tr><td>dump</td><td>列出未完成的会话和临时节点。这只适用于 Leader 节点。</td></tr><tr><td>envi</td><td>打印服务环境的详细信息。</td></tr><tr><td>ruok</td><td>测试服务是否处于正确状态。如果正确则返回“imok”，否则不做任何相应。</td></tr><tr><td>stat</td><td>列出服务器和连接客户端的简要详细信息。</td></tr><tr><td>wchs</td><td>列出所有 watch 的简单信息。</td></tr><tr><td>wchc</td><td>按会话列出服务器 watch 的详细信息。</td></tr><tr><td>wchp</td><td>按路径列出服务器 watch 的详细信息。</td></tr></tbody></table>`,83),r={href:"https://zookeeper.apache.org/doc/current/zookeeperAdmin.html",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>使用前需要使用 <code>yum install nc</code> 安装 nc 命令，使用示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop001 bin<span class="token punctuation">]</span><span class="token comment"># echo stat | nc localhost 2181</span>
Zookeeper version: <span class="token number">3.4</span>.13-2d71af4dbe22557fda74f9a9b4309b15a7487f03,
built on 06/29/2018 04:05 GMT
Clients:
 /0:0:0:0:0:0:0:1:50584<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span>queued<span class="token operator">=</span><span class="token number">0</span>,recved<span class="token operator">=</span><span class="token number">371</span>,sent<span class="token operator">=</span><span class="token number">371</span><span class="token punctuation">)</span>
 /0:0:0:0:0:0:0:1:50656<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span>queued<span class="token operator">=</span><span class="token number">0</span>,recved<span class="token operator">=</span><span class="token number">1</span>,sent<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
Latency min/avg/max: <span class="token number">0</span>/0/19
Received: <span class="token number">372</span>
Sent: <span class="token number">371</span>
Connections: <span class="token number">2</span>
Outstanding: <span class="token number">0</span>
Zxid: 0x150
Mode: standalone
Node count: <span class="token number">167</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,3),b={href:"https://www.runoob.com/w3cnote/zookeeper-bs-command.html",target:"_blank",rel:"noopener noreferrer"};function m(h,v){const s=p("ExternalLinkIcon");return l(),i("div",null,[d,n("blockquote",null,[n("p",null,[a("更多四字命令可以参阅官方文档："),n("a",r,[a("https://zookeeper.apache.org/doc/current/zookeeperAdmin.html"),e(s)])])]),u,n("ul",null,[n("li",null,[n("a",b,[a("Zookeeper 客户端基础命令使用"),e(s)])])])])}const x=o(c,[["render",m],["__file","03.ZooKeeper命令.html.vue"]]);export{x as default};
