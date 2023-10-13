import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as n,d as e,b as s,e as t}from"./app-dc48b2dc.js";const i={},u=t(`<h1 id="设计模式之单例模式" tabindex="-1"><a class="header-anchor" href="#设计模式之单例模式" aria-hidden="true">#</a> 设计模式之单例模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>单例模式</strong>（Singleton）是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。</p><p><strong>单例</strong> （Singleton） 类声明了一个名为 <code>get­Instance</code> 获取实例的静态方法来返回其所属类的一个相同实例。</p><p>单例的构造函数必须对客户端 （Client） 代码隐藏。 调用 <code>get­Instance</code> 方法必须是获取单例对象的唯一方式。</p><p>所有单例的实现都包含以下两个相同的步骤：</p><ul><li><strong>将默认构造函数设为私有</strong>， 防止其他对象使用单例类的 <code>new</code>运算符。</li><li><strong>新建一个静态构建方法作为构造函数</strong>。 该函数会 “偷偷” 调用私有构造函数来创建对象， 并将其保存在一个静态成员变量中。 此后所有对于该函数的调用都将返回这一缓存对象。</li></ul><p>如果你的代码能够访问单例类， 那它就能调用单例类的静态方法。 无论何时调用该方法， 它总是会返回相同的对象。</p><p>单例模式的优点：</p><ul><li>✔️️️ 你可以保证一个类只有一个实例。</li><li>✔️️️ 你获得了一个指向该实例的全局访问节点。</li><li>✔️️️ 仅在首次请求单例对象时对其进行初始化。</li></ul><p>单例模式的缺点：</p><ul><li>❌ 违反了<em>单一职责原则</em>。 该模式同时解决了两个问题。</li><li>❌ 单例模式可能掩盖不良设计， 比如程序各组件之间相互了解过多等。</li><li>❌ 该模式在多线程环境下需要进行特殊处理， 避免多个线程多次创建单例对象。</li><li>❌ 单例的客户端代码单元测试可能会比较困难， 因为许多测试框架以基于继承的方式创建模拟对象。 由于单例类的构造函数是私有的， 而且绝大部分语言无法重写静态方法， 所以你需要想出仔细考虑模拟单例的方法。 要么干脆不编写测试代码， 或者不使用单例模式。</li></ul><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>如果程序中的某个类对于所有客户端只有一个可用的实例， 可以使用单例模式。<br> ⚡ 单例模式禁止通过除特殊构建方法以外的任何方式来创建自身类的对象。 该方法可以创建一个新对象， 但如果该对象已经被创建， 则返回已有的对象。</li><li>如果你需要更加严格地控制全局变量， 可以使用单例模式。<br> ⚡ 单例模式与全局变量不同， 它保证类只存在一个实例。 除了单例类自己以外， 无法通过任何方式替换缓存的实例。</li></ul><p>请注意， 你可以随时调整限制并设定生成单例实例的数量， 只需修改 <code>获取实例</code> 方法， 即 <code>getInstance</code> 中的代码即可实现。</p><p>举例来说，一些资源管理器常常设计成单例模式。</p><p>在计算机系统中，需要管理的资源包括软件外部资源，譬如每台计算机可以有若干个打印机，但只能有一个 Printer Spooler， 以避免两个打印作业同时输出到打印机中。</p><p>每台计算机可以有若干通信端口，系统应当集中管理这些通信端口，以避免一个通信端口同时被两个请求同时调用。任务管理器中难以启动两个相同的 task。</p><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20210517200626.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><strong>单例</strong> （Singleton） 类声明了一个名为 <code>get­Instance</code>获取实例的静态方法来返回其所属类的一个相同实例。 <ul><li>单例的构造函数必须对客户端 （Client） 代码隐藏。 调用 <code>获取实例</code>方法必须是获取单例对象的唯一方式。</li></ul></li></ol><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， 数据库连接类即是一个<strong>单例</strong>。</p><p>该类不提供公有构造函数， 因此获取该对象的唯一方式是调用 <code>获取实例</code>方法。 该方法将缓存首次生成的对象， 并为所有后续调用返回该对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 数据库类会对\`getInstance（获取实例）\`方法进行定义以让客户端在程序各处</span>
<span class="token comment">// 都能访问相同的数据库连接实例。</span>
<span class="token keyword">class</span> <span class="token class-name">Database</span> is
    <span class="token comment">// 保存单例实例的成员变量必须被声明为静态类型。</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> field instance<span class="token operator">:</span> <span class="token class-name">Database</span>

    <span class="token comment">// 单例的构造函数必须永远是私有类型，以防止使用\`new\`运算符直接调用构</span>
    <span class="token comment">// 造方法。</span>
    <span class="token keyword">private</span> constructor <span class="token class-name">Database</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 部分初始化代码（例如到数据库服务器的实际连接）。</span>
        <span class="token comment">// ...</span>

    <span class="token comment">// 用于控制对单例实例的访问权限的静态方法。</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> method <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Database</span><span class="token punctuation">.</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> then
            <span class="token function">acquireThreadLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> and then
                <span class="token comment">// 确保在该线程等待解锁时，其他线程没有初始化该实例。</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Database</span><span class="token punctuation">.</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> then
                    <span class="token class-name">Database</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Database</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token class-name">Database</span><span class="token punctuation">.</span>instance

    <span class="token comment">// 最后，任何单例都必须定义一些可在其实例上执行的业务逻辑。</span>
    <span class="token keyword">public</span> method <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span> is
        <span class="token comment">// 比如应用的所有数据库查询请求都需要通过该方法进行。因此，你可以</span>
        <span class="token comment">// 在这里添加限流或缓冲逻辑。</span>
        <span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    method <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token class-name">Database</span> foo <span class="token operator">=</span> <span class="token class-name">Database</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        foo<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT ...&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// ...</span>
        <span class="token class-name">Database</span> bar <span class="token operator">=</span> <span class="token class-name">Database</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        bar<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT ...&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 变量 \`bar\` 和 \`foo\` 中将包含同一个对象。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p><strong>使用示例：</strong> 许多开发者将单例模式视为一种反模式。 因此它在 Java 代码中的使用频率正在逐步减少。</p><p>尽管如此， Java 核心程序库中仍有相当多的单例示例：</p>`,28),r={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#getRuntime--",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"java.lang.Runtime#getRuntime()",-1),k={href:"http://docs.oracle.com/javase/8/docs/api/java/awt/Desktop.html#getDesktop--",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"java.awt.Desktop#getDesktop()",-1),m={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/System.html#getSecurityManager--",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"java.lang.System#getSecurityManager()",-1),g=t(`<p><strong>识别方法：</strong> 单例可以通过返回相同缓存对象的静态构建方法来识别。</p><h3 id="数据库连接类" tabindex="-1"><a class="header-anchor" href="#数据库连接类" aria-hidden="true">#</a> 数据库连接类</h3><p>数据库连接类即是一个<strong>单例</strong>。</p><p>该类不提供公有构造函数， 因此获取该对象的唯一方式是调用 <code>获取实例</code>方法。 该方法将缓存首次生成的对象， 并为所有后续调用返回该对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 数据库类会对\`getInstance（获取实例）\`方法进行定义以让客户端在程序各处</span>
<span class="token comment">// 都能访问相同的数据库连接实例。</span>
<span class="token keyword">class</span> <span class="token class-name">Database</span> is
    <span class="token comment">// 保存单例实例的成员变量必须被声明为静态类型。</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> field instance<span class="token operator">:</span> <span class="token class-name">Database</span>

    <span class="token comment">// 单例的构造函数必须永远是私有类型，以防止使用\`new\`运算符直接调用构</span>
    <span class="token comment">// 造方法。</span>
    <span class="token keyword">private</span> constructor <span class="token class-name">Database</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 部分初始化代码（例如到数据库服务器的实际连接）。</span>
        <span class="token comment">// ...</span>

    <span class="token comment">// 用于控制对单例实例的访问权限的静态方法。</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> method <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Database</span><span class="token punctuation">.</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> then
            <span class="token function">acquireThreadLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> and then
                <span class="token comment">// 确保在该线程等待解锁时，其他线程没有初始化该实例。</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Database</span><span class="token punctuation">.</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> then
                    <span class="token class-name">Database</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Database</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token class-name">Database</span><span class="token punctuation">.</span>instance

    <span class="token comment">// 最后，任何单例都必须定义一些可在其实例上执行的业务逻辑。</span>
    <span class="token keyword">public</span> method <span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span> is
        <span class="token comment">// 比如应用的所有数据库查询请求都需要通过该方法进行。因此，你可以</span>
        <span class="token comment">// 在这里添加限流或缓冲逻辑。</span>
        <span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    method <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token class-name">Database</span> foo <span class="token operator">=</span> <span class="token class-name">Database</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        foo<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT ...&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// ...</span>
        <span class="token class-name">Database</span> bar <span class="token operator">=</span> <span class="token class-name">Database</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        bar<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT ...&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 变量 \`bar\` 和 \`foo\` 中将包含同一个对象。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式" aria-hidden="true">#</a> 懒汉式</h3><p>懒汉式的实现思路是：你不找懒汉，懒汉根本就懒得去初始化自己。</p><p><code>instance</code> 初始时没有初始化，只有当第一次调 <code>getInstance()</code> 时才创建实例。</p><p><strong>缺点</strong>：当有两个线程调 <code>getInstance()</code> 方法，当它们同时执行到 <code>if (null == instance)</code> 这行代码，<code>instance</code> 为 <code>null</code>。</p><p>继续向下执行，会生成两个实例，违背了单例模式的初衷。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LazySingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Singleton()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">LazySingleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LazySingleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="饿汉式" tabindex="-1"><a class="header-anchor" href="#饿汉式" aria-hidden="true">#</a> 饿汉式</h3><p>懒汉式的实现思路是：饿汉根本等不及别人来找他，不管三七二十一先初始化了自身的实例，生怕自己饿着了。</p><p>类默认先直接初始化一个实例，以后调用 <code>getInstance()</code> 总是返回这个已创建好的实例。</p><p><strong>缺点</strong>：在没有必要获取实例时，已经预先产生了开销。</p><p><strong>优点</strong>：规避了懒汉式方法的线程问题，不用显示编写线程安全代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HungerSinleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">HungerSinleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Singleton()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">HungerSinleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HungerSinleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HungerSinleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双重锁的形式" tabindex="-1"><a class="header-anchor" href="#双重锁的形式" aria-hidden="true">#</a> 双重锁的形式</h3><p>如果既不想在没有调用 <code>getInstance(</code>) 方法时产生开销，又不想发生线程安全问题，就可以采用双重锁的形式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SyncSingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">SyncSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Singleton()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SyncSingleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SyncSingleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token class-name">SyncSingleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SyncSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注：在外面判断了 instance 实例是否存在，为什么在锁定后又要在内部又判断一次？</strong></p><p>这是因为，如果 <code>instance</code> 为 <code>null</code> 时有两个线程同时调用 <code>getInstance()</code>，由于 <code>synchronized</code> 机制，只允许一个线程进入，另一个需要等待。</p><p>这时如果没有第二道 <code>instance</code> 是否为 <code>null</code> 的判断，就可能发生第一个线程创建一个实例，而第二个线程又创建一个实例的情况。</p></blockquote><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,22),h={href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"},f={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},y={href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"},w={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},_=n("ol",null,[n("li",null,[s("只会有一个单例实体， 但是"),n("em",null,"享元"),s("类可以有多个实体， 各实体的内在状态也可以不同。")]),n("li",null,[n("em",null,"单例"),s("对象可以是可变的。 享元对象是不可变的。")])],-1),S={href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"},D={href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},j={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},q={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),I={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function z(C,T){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[d,e(a)])]),n("li",null,[n("a",k,[v,e(a)])]),n("li",null,[n("a",m,[b,e(a)])])]),g,n("ul",null,[n("li",null,[n("a",h,[s("外观模式"),e(a)]),s("类通常可以转换为"),n("a",f,[s("单例模式"),e(a)]),s("类， 因为在大部分情况下一个外观对象就足够了。")]),n("li",null,[s("如果你能将对象的所有共享状态简化为一个享元对象， 那么"),n("a",y,[s("享元模式"),e(a)]),s("就和"),n("a",w,[s("单例"),e(a)]),s("类似了。 但这两个模式有两个根本性的不同。 "),_]),n("li",null,[n("a",S,[s("抽象工厂模式"),e(a)]),s("、 "),n("a",D,[s("生成器模式"),e(a)]),s("和"),n("a",j,[s("原型模式"),e(a)]),s("都可以用"),n("a",q,[s("单例"),e(a)]),s("来实现。")])]),x,n("ul",null,[n("li",null,[n("a",I,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",L,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",E,[s("设计模式教程"),e(a)])])])])}const R=p(i,[["render",z],["__file","06.单例模式.html.vue"]]);export{R as default};
