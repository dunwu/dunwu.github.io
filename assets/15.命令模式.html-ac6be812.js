import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as s,d as e,e as i}from"./app-d8d56f9e.js";const l={},u=i(`<h1 id="设计模式之命令模式" tabindex="-1"><a class="header-anchor" href="#设计模式之命令模式" aria-hidden="true">#</a> 设计模式之命令模式</h1><h2 id="意图" tabindex="-1"><a class="header-anchor" href="#意图" aria-hidden="true">#</a> 意图</h2><p><strong>命令模式</strong>（Command） 是一种行为设计模式， 它可将请求转换为一个包含与请求相关的所有信息的独立对象。 该转换让你能根据不同的请求将方法参数化、 延迟请求执行或将其放入队列中， 且能实现可撤销操作。</p><h3 id="命令模式的交互" tabindex="-1"><a class="header-anchor" href="#命令模式的交互" aria-hidden="true">#</a> 命令模式的交互</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200726110040.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>Client 创建一个 ConcreteCommand 对象并指定他的 Receiver 对象。</li><li>某个 Invoker 对象存储该 ConcreteCommand 对象。</li><li>该 Invoker 通过调用 Command 对象的 Execute 操作来提交一个请求。若该命令是可撤销的，ConcreteCommand 就在执行 Execute 操作之前存储当前状态以用于取消该命令。</li><li>ConcreteCommand 对象对调用它的 Receiver 的一些操作以执行该请求。</li></ul><h3 id="命令模式的要点" tabindex="-1"><a class="header-anchor" href="#命令模式的要点" aria-hidden="true">#</a> 命令模式的要点</h3><ul><li>命令模式的本质是对命令进行封装，将发出命令的责任和执行命令的责任分割开。</li><li>每一个命令都是一个操作：请求的一方发出请求，要求执行一个操作；接收的一方收到请求，并执行操作。</li><li>命令模式允许请求的一方和接收的一方独立开来，使得请求的一方不必知道接收请求的一方的接口，更不必知道请求是怎么被接收，以及操作是否被执行、何时被执行，以及是怎么被执行的。</li><li>命令模式使请求本身成为一个对象，这个对象和其他对象一样可以被存储和传递。</li><li>命令模式的关键在于引入了抽象命令接口，且发送者针对抽象命令接口编程，只有实现了抽象命令接口的具体命令才能与接收者相关联。</li></ul><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>如果你需要通过操作来参数化对象， 可使用命令模式。</li><li>如果你想要将操作放入队列中、 操作的执行或者远程执行操作， 可使用命令模式。</li><li>如果你想要实现操作回滚功能， 可使用命令模式。</li></ul><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210519150619.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="结构说明" tabindex="-1"><a class="header-anchor" href="#结构说明" aria-hidden="true">#</a> 结构说明</h3><ol><li><p><strong>发送者</strong> （Sender）——亦称 “触发者 （Invoker）”——类负责对请求进行初始化， 其中必须包含一个成员变量来存储对于命令对象的引用。 发送者触发命令， 而不向接收者直接发送请求。 注意， 发送者并不负责创建命令对象： 它通常会通过构造函数从客户端处获得预先生成的命令。</p></li><li><p><strong>命令</strong> （Command） 接口通常仅声明一个执行命令的方法。</p></li><li><p><strong>具体命令</strong> （Concrete Commands） 会实现各种类型的请求。 具体命令自身并不完成工作， 而是会将调用委派给一个业务逻辑对象。 但为了简化代码， 这些类可以进行合并。</p><p>接收对象执行方法所需的参数可以声明为具体命令的成员变量。 你可以将命令对象设为不可变， 仅允许通过构造函数对这些成员变量进行初始化。</p></li><li><p><strong>接收者</strong> （Receiver） 类包含部分业务逻辑。 几乎任何对象都可以作为接收者。 绝大部分命令只处理如何将请求传递到接收者的细节， 接收者自己会完成实际的工作。</p></li><li><p><strong>客户端</strong> （Client） 会创建并配置具体命令对象。 客户端必须将包括接收者实体在内的所有请求参数传递给命令的构造函数。 此后， 生成的命令就可以与一个或多个发送者相关联了。</p></li></ol><h3 id="结构代码范式" tabindex="-1"><a class="header-anchor" href="#结构代码范式" aria-hidden="true">#</a> 结构代码范式</h3><p><strong>Command</strong> : 用来声明执行操作的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Receiver</span> receiver<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token class-name">Receiver</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token operator">=</span> receiver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ConcreteCommand</strong> : 将一个接收者对象绑定一个动作，调用接收者相应的操作，以实现 Execute。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConcreteCommand</span><span class="token punctuation">(</span><span class="token class-name">Receiver</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">receiver<span class="token punctuation">.</span></span>Action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Invoker</strong> : 要求该命令执行这个请求。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Invoker</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Command</span> command<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Invoker</span><span class="token punctuation">(</span><span class="token class-name">Command</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> command<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">ExecuteCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">command<span class="token punctuation">.</span></span>Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Receiver</strong> : 知道如何实施与执行一个与请求相关的操作，任何类都可能作为一个接收者。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Receiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Client</strong> : 创建一个具体命令对象并设定它的接受者。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommandPattern</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Receiver</span> receiver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Receiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Command</span> cmd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteCommand</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Invoker</span> invoker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Invoker</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">invoker<span class="token punctuation">.</span></span>ExecuteCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h2><p>在本例中， <strong>命令</strong>模式会记录已执行操作的历史记录， 以在需要时撤销操作。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210519151632.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>有些命令会改变编辑器的状态 （例如剪切和粘贴）， 它们可在执行相关操作前对编辑器的状态进行备份。 命令执行后会和当前点备份的编辑器状态一起被放入命令历史 （命令对象栈）。 此后， 如果用户需要进行回滚操作， 程序可从历史记录中取出最近的命令， 读取相应的编辑器状态备份， 然后进行恢复。</p><p>客户端代码 （GUI 元素和命令历史等） 没有和具体命令类相耦合， 因为它通过命令接口来使用命令。 这使得你能在无需修改已有代码的情况下在程序中增加新的命令。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 命令基类会为所有具体命令定义通用接口。</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Command</span> is
    <span class="token keyword">protected</span> field app<span class="token operator">:</span> <span class="token class-name">Application</span>
    <span class="token keyword">protected</span> field editor<span class="token operator">:</span> <span class="token class-name">Editor</span>
    <span class="token keyword">protected</span> field backup<span class="token operator">:</span> text

    constructor <span class="token class-name">Command</span><span class="token punctuation">(</span>app<span class="token operator">:</span> <span class="token class-name">Application</span><span class="token punctuation">,</span> editor<span class="token operator">:</span> <span class="token class-name">Editor</span><span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> app
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor

    <span class="token comment">// 备份编辑器状态。</span>
    method <span class="token function">saveBackup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        backup <span class="token operator">=</span> editor<span class="token punctuation">.</span>text

    <span class="token comment">// 恢复编辑器状态。</span>
    method <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        editor<span class="token punctuation">.</span>text <span class="token operator">=</span> backup

    <span class="token comment">// 执行方法被声明为抽象以强制所有具体命令提供自己的实现。该方法必须根</span>
    <span class="token comment">// 据命令是否更改编辑器的状态返回 true 或 false。</span>
    <span class="token keyword">abstract</span> method <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 这里是具体命令。</span>
<span class="token keyword">class</span> <span class="token class-name">CopyCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> is
    <span class="token comment">// 复制命令不会被保存到历史记录中，因为它没有改变编辑器的状态。</span>
    method <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        app<span class="token punctuation">.</span>clipboard <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token keyword">class</span> <span class="token class-name">CutCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> is
    <span class="token comment">// 剪切命令改变了编辑器的状态，因此它必须被保存到历史记录中。只要方法</span>
    <span class="token comment">// 返回 true，它就会被保存。</span>
    method <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token function">saveBackup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        app<span class="token punctuation">.</span>clipboard <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        editor<span class="token punctuation">.</span><span class="token function">deleteSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>

<span class="token keyword">class</span> <span class="token class-name">PasteCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> is
    method <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token function">saveBackup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        editor<span class="token punctuation">.</span><span class="token function">replaceSelection</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>clipboard<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>

<span class="token comment">// 撤销操作也是一个命令。</span>
<span class="token keyword">class</span> <span class="token class-name">UndoCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> is
    method <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        app<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>


<span class="token comment">// 全局命令历史记录就是一个堆桟。</span>
<span class="token keyword">class</span> <span class="token class-name">CommandHistory</span> is
    <span class="token keyword">private</span> field history<span class="token operator">:</span> array of <span class="token class-name">Command</span>

    <span class="token comment">// 后进...</span>
    method <span class="token function">push</span><span class="token punctuation">(</span>c<span class="token operator">:</span> <span class="token class-name">Command</span><span class="token punctuation">)</span> is
        <span class="token comment">// 将命令压入历史记录数组的末尾。</span>

    <span class="token comment">// ...先出</span>
    method <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Command</span> is
        <span class="token comment">// 从历史记录中取出最近的命令。</span>


<span class="token comment">// 编辑器类包含实际的文本编辑操作。它会担任接收者的角色：最后所有命令都会</span>
<span class="token comment">// 将执行工作委派给编辑器的方法。</span>
<span class="token keyword">class</span> <span class="token class-name">Editor</span> is
    field text<span class="token operator">:</span> string

    method <span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 返回选中的文字。</span>

    method <span class="token function">deleteSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// 删除选中的文字。</span>

    method <span class="token function">replaceSelection</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> is
        <span class="token comment">// 在当前位置插入剪贴板中的内容。</span>

<span class="token comment">// 应用程序类会设置对象之间的关系。它会担任发送者的角色：当需要完成某些工</span>
<span class="token comment">// 作时，它会创建并执行一个命令对象。</span>
<span class="token keyword">class</span> <span class="token class-name">Application</span> is
    field clipboard<span class="token operator">:</span> string
    field editors<span class="token operator">:</span> array of <span class="token class-name">Editors</span>
    field activeEditor<span class="token operator">:</span> <span class="token class-name">Editor</span>
    field history<span class="token operator">:</span> <span class="token class-name">CommandHistory</span>

    <span class="token comment">// 将命令分派给 UI 对象的代码可能会是这样的。</span>
    method <span class="token function">createUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// ...</span>
        copy <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">executeCommand</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">CopyCommand</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> activeEditor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        copyButton<span class="token punctuation">.</span><span class="token function">setCommand</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span>
        shortcuts<span class="token punctuation">.</span><span class="token function">onKeyPress</span><span class="token punctuation">(</span><span class="token string">&quot;Ctrl+C&quot;</span><span class="token punctuation">,</span> copy<span class="token punctuation">)</span>

        cut <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">executeCommand</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">CutCommand</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> activeEditor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        cutButton<span class="token punctuation">.</span><span class="token function">setCommand</span><span class="token punctuation">(</span>cut<span class="token punctuation">)</span>
        shortcuts<span class="token punctuation">.</span><span class="token function">onKeyPress</span><span class="token punctuation">(</span><span class="token string">&quot;Ctrl+X&quot;</span><span class="token punctuation">,</span> cut<span class="token punctuation">)</span>

        paste <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">executeCommand</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">PasteCommand</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> activeEditor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        pasteButton<span class="token punctuation">.</span><span class="token function">setCommand</span><span class="token punctuation">(</span>paste<span class="token punctuation">)</span>
        shortcuts<span class="token punctuation">.</span><span class="token function">onKeyPress</span><span class="token punctuation">(</span><span class="token string">&quot;Ctrl+V&quot;</span><span class="token punctuation">,</span> paste<span class="token punctuation">)</span>

        undo <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">executeCommand</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">UndoCommand</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> activeEditor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        undoButton<span class="token punctuation">.</span><span class="token function">setCommand</span><span class="token punctuation">(</span>undo<span class="token punctuation">)</span>
        shortcuts<span class="token punctuation">.</span><span class="token function">onKeyPress</span><span class="token punctuation">(</span><span class="token string">&quot;Ctrl+Z&quot;</span><span class="token punctuation">,</span> undo<span class="token punctuation">)</span>

    <span class="token comment">// 执行一个命令并检查它是否需要被添加到历史记录中。</span>
    method <span class="token function">executeCommand</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>command<span class="token punctuation">.</span>execute<span class="token punctuation">)</span>
            history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span>

    <span class="token comment">// 从历史记录中取出最近的命令并运行其 undo（撤销）方法。请注意，你并</span>
    <span class="token comment">// 不知晓该命令所属的类。但是我们不需要知晓，因为命令自己知道如何撤销</span>
    <span class="token comment">// 其动作。</span>
    method <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        command <span class="token operator">=</span> history<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            command<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与其他模式的关系" tabindex="-1"><a class="header-anchor" href="#与其他模式的关系" aria-hidden="true">#</a> 与其他模式的关系</h2>`,32),r={href:"https://refactoringguru.cn/design-patterns/chain-of-responsibility",target:"_blank",rel:"noopener noreferrer"},d={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},k={href:"https://refactoringguru.cn/design-patterns/mediator",target:"_blank",rel:"noopener noreferrer"},m={href:"https://refactoringguru.cn/design-patterns/observer",target:"_blank",rel:"noopener noreferrer"},v=n("ul",null,[n("li",null,[n("em",null,"责任链"),s("按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。")]),n("li",null,[n("em",null,"命令"),s("在发送者和请求者之间建立单向连接。")]),n("li",null,[n("em",null,"中介者"),s("清除了发送者和请求者之间的直接连接， 强制它们通过一个中介对象进行间接沟通。")]),n("li",null,[n("em",null,"观察者"),s("允许接收者动态地订阅或取消接收请求。")])],-1),b={href:"https://refactoringguru.cn/design-patterns/chain-of-responsibility",target:"_blank",rel:"noopener noreferrer"},h={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),f=n("em",null,"命令",-1),_={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},y={href:"https://refactoringguru.cn/design-patterns/memento",target:"_blank",rel:"noopener noreferrer"},w={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},C={href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"},x=n("ul",null,[n("li",null,[s("你可以使用"),n("em",null,"命令"),s("来将任何操作转换为对象。 操作的参数将成为对象的成员变量。 你可以通过转换来延迟操作的执行、 将操作放入队列、 保存历史命令或者向远程服务发送命令等。")]),n("li",null,[s("另一方面， "),n("em",null,"策略"),s("通常可用于描述完成某件事的不同方式， 让你能够在同一个上下文类中切换算法。")])],-1),j={href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"},E={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},I={href:"https://refactoringguru.cn/design-patterns/visitor",target:"_blank",rel:"noopener noreferrer"},R={href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"},S=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),q=n("p",null,[n("strong",null,"使用示例"),s("：命令模式在 Java 代码中很常见。 大部分情况下， 它被用于代替包含行为的参数化 UI 元素的回调函数， 此外还被用于对任务进行排序和记录操作历史记录等。")],-1),B=n("p",null,"以下是在核心 Java 程序库中的一些示例：",-1),A={href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"java.lang.Runnable",-1),U={href:"http://docs.oracle.com/javase/8/docs/api/javax/swing/Action.html",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"javax.swing.Action",-1),K=n("p",null,[n("strong",null,"识别方法："),s(" 命令模式可以通过抽象或接口类型 （发送者） 中的行为方法来识别， 该类型调用另一个不同的抽象或接口类型 （接收者） 实现中的方法， 该实现则是在创建时由命令模式的实现封装。 命令类通常仅限于一些特殊行为。")],-1),N=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),z={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"};function L(F,G){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("责任链模式"),e(a)]),s("、 "),n("a",d,[s("命令模式"),e(a)]),s("、 "),n("a",k,[s("中介者模式"),e(a)]),s("和"),n("a",m,[s("观察者模式"),e(a)]),s("用于处理请求发送者和接收者之间的不同连接方式： "),v]),n("li",null,[n("a",b,[s("责任链"),e(a)]),s("的管理者可使用"),n("a",h,[s("命令模式"),e(a)]),s("实现。 在这种情况下， 你可以对由请求代表的同一个上下文对象执行许多不同的操作。"),g,s(" 还有另外一种实现方式， 那就是请求自身就是一个"),f,s("对象。 在这种情况下， 你可以对由一系列不同上下文连接而成的链执行相同的操作。")]),n("li",null,[s("你可以同时使用"),n("a",_,[s("命令"),e(a)]),s("和"),n("a",y,[s("备忘录模式"),e(a)]),s("来实现 “撤销”。 在这种情况下， 命令用于对目标对象执行各种不同的操作， 备忘录用来保存一条命令执行前该对象的状态。")]),n("li",null,[n("a",w,[s("命令"),e(a)]),s("和"),n("a",C,[s("策略模式"),e(a)]),s("看上去很像， 因为两者都能通过某些行为来参数化对象。 但是， 它们的意图有非常大的不同。 "),x]),n("li",null,[n("a",j,[s("原型模式"),e(a)]),s("可用于保存"),n("a",E,[s("命令"),e(a)]),s("的历史记录。")]),n("li",null,[s("你可以将"),n("a",I,[s("访问者模式"),e(a)]),s("视为"),n("a",R,[s("命令模式"),e(a)]),s("的加强版本， 其对象可对不同类的多种对象执行操作。")])]),S,q,B,n("ul",null,[n("li",null,[n("a",A,[P,e(a)]),s(" 的所有实现")]),n("li",null,[n("a",U,[V,e(a)]),s(" 的所有实现")])]),K,N,n("ul",null,[n("li",null,[n("a",z,[s("《Head First 设计模式》"),e(a)])]),n("li",null,[n("a",H,[s("《大话设计模式》"),e(a)])]),n("li",null,[n("a",J,[s("设计模式教程"),e(a)])])])])}const X=t(l,[["render",L],["__file","15.命令模式.html.vue"]]);export{X as default};
