import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as a,d as e,e as l}from"./app-c2b0a364.js";const i={},u=l(`<h1 id="jvm-和-java-特性" tabindex="-1"><a class="header-anchor" href="#jvm-和-java-特性" aria-hidden="true">#</a> JVM 和 Java 特性</h1><h2 id="jvm-如何执行方法调用" tabindex="-1"><a class="header-anchor" href="#jvm-如何执行方法调用" aria-hidden="true">#</a> JVM 如何执行方法调用</h2><p>在 Java 程序里，如果同一个类中出现多个名字相同，并且参数类型相同的方法，那么它无法通过编译。如果我们想要在同一个类中定义名字相同的方法，那么它们的参数类型必须不同。这些方法之间的关系，我们称之为重载。</p><p>重载的方法在编译过程中即可完成识别。具体到每一个方法调用，Java 编译器会根据所传入参数的声明类型（注意与实际类型区分）来选取重载方法。选取的过程共分为三个阶段：</p><ol><li>在不考虑对基本类型自动装拆箱（auto-boxing，auto-unboxing），以及可变长参数的情况下选取重载方法；</li><li>如果在第 1 个阶段中没有找到适配的方法，那么在允许自动装拆箱，但不允许可变长参数的情况下选取重载方法；</li><li>如果在第 2 个阶段中没有找到适配的方法，那么在允许自动装拆箱以及可变长参数的情况下选取重载方法。</li></ol><h3 id="静态绑定和动态绑定" tabindex="-1"><a class="header-anchor" href="#静态绑定和动态绑定" aria-hidden="true">#</a> 静态绑定和动态绑定</h3><p>Java 虚拟机识别方法的关键在于类名、方法名以及方法描述符（method descriptor）。方法描述符，它是由方法的参数类型以及返回类型所构成。</p><p>Java 虚拟机中关于方法重写的判定同样基于方法描述符。也就是说，如果子类定义了与父类中非私有、非静态方法同名的方法，那么只有当这两个方法的参数类型以及返回类型一致，Java 虚拟机才会判定为重写。</p><p>由于对重载方法的区分在编译阶段已经完成，我们可以认为 Java 虚拟机不存在重载这一概念。因此，在某些文章中，重载也被称为<strong>静态绑定（static binding）</strong>，或者编译时多态（compile-time polymorphism）；而重写则被称为<strong>动态绑定（dynamic binding）</strong>。</p><p>确切地说，Java 虚拟机中的静态绑定指的是在解析时便能够直接识别目标方法的情况，而动态绑定则指的是需要在运行过程中根据调用者的动态类型来识别目标方法的情况。</p><p>具体来说，Java 字节码中与调用相关的指令共有五种。</p><ol><li><code>invokestatic</code>：用于调用静态方法。</li><li><code>invokespecial</code>：用于调用私有实例方法、构造器，以及使用 <code>super</code> 关键字调用父类的实例方法或构造器，和所实现接口的默认方法。</li><li><code>invokevirtual</code>：用于调用非私有实例方法。</li><li><code>invokeinterface</code>：用于调用接口方法。</li><li><code>invokedynamic</code>：用于调用动态方法。</li></ol><p>【示例】</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> 客户 <span class="token punctuation">{</span>
  <span class="token keyword">boolean</span> <span class="token function">isVIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> 商户 <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span> 折后价格 <span class="token punctuation">(</span><span class="token keyword">double</span> 原价<span class="token punctuation">,</span> 客户 某客户<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> 原价 <span class="token operator">*</span> <span class="token number">0.8d</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> 奸商 <span class="token keyword">extends</span> 商户 <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span> 折后价格 <span class="token punctuation">(</span><span class="token keyword">double</span> 原价<span class="token punctuation">,</span> 客户 某客户<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>某客户<span class="token punctuation">.</span><span class="token function">isVIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                         <span class="token comment">// invokeinterface</span>
      <span class="token keyword">return</span> 原价 <span class="token operator">*</span> 价格歧视 <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">// invokestatic</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span> 折后价格 <span class="token punctuation">(</span>原价<span class="token punctuation">,</span> 某客户<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// invokespecial</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> 价格歧视 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 咱们的杀熟算法太粗暴了，应该将客户城市作为随机数生成器的种子。</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">// invokespecial</span>
           <span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                         <span class="token comment">// invokevirtual</span>
           <span class="token operator">+</span> <span class="token number">0.8d</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用指令的符号引用" tabindex="-1"><a class="header-anchor" href="#调用指令的符号引用" aria-hidden="true">#</a> 调用指令的符号引用</h3><p>在编译过程中，我们并不知道目标方法的具体内存地址。因此，Java 编译器会暂时用符号引用来表示该目标方法。这一符号引用包括目标方法所在的类或接口的名字，以及目标方法的方法名和方法描述符。</p><p>符号引用存储在 class 文件的常量池之中。根据目标方法是否为接口方法，这些引用可分为接口符号引用和非接口符号引用。</p><p>对于可以静态绑定的方法调用而言，实际引用是一个指向方法的指针。对于需要动态绑定的方法调用而言，实际引用则是一个方法表的索引。</p><h3 id="虚方法调用" tabindex="-1"><a class="header-anchor" href="#虚方法调用" aria-hidden="true">#</a> 虚方法调用</h3><p>Java 里所有非私有实例方法调用都会被编译成 invokevirtual 指令，而接口方法调用都会被编译成 invokeinterface 指令。这两种指令，均属于 Java 虚拟机中的虚方法调用。</p><p>在 Java 虚拟机中，静态绑定包括用于调用静态方法的 invokestatic 指令，和用于调用构造器、私有实例方法以及超类非私有实例方法的 invokespecial 指令。如果虚方法调用指向一个标记为 final 的方法，那么 Java 虚拟机也可以静态绑定该虚方法调用的目标方法。</p><h3 id="方法表" tabindex="-1"><a class="header-anchor" href="#方法表" aria-hidden="true">#</a> 方法表</h3><p>方法表是 Java 虚拟机实现动态绑定的关键所在。</p><p>方法表本质上是一个数组，每个数组元素指向一个当前类及其祖先类中非私有的实例方法。</p><p>这些方法可能是具体的、可执行的方法，也可能是没有相应字节码的抽象方法。方法表满足两个特质：其一，子类方法表中包含父类方法表中的所有方法；其二，子类方法在方法表中的索引值，与它所重写的父类方法的索引值相同。</p><p>在执行过程中，Java 虚拟机将获取调用者的实际类型，并在该实际类型的虚方法表中，根据索引值获得目标方法。这个过程便是动态绑定。</p><h3 id="内联缓存" tabindex="-1"><a class="header-anchor" href="#内联缓存" aria-hidden="true">#</a> 内联缓存</h3><p>内联缓存是一种加快动态绑定的优化技术。它能够缓存虚方法调用中调用者的动态类型，以及该类型所对应的目标方法。在之后的执行过程中，如果碰到已缓存的类型，内联缓存便会直接调用该类型所对应的目标方法。如果没有碰到已缓存的类型，内联缓存则会退化至使用基于方法表的动态绑定。</p><h2 id="jvm-如何处理异常" tabindex="-1"><a class="header-anchor" href="#jvm-如何处理异常" aria-hidden="true">#</a> JVM 如何处理异常</h2><h3 id="jvm-如何捕获异常" tabindex="-1"><a class="header-anchor" href="#jvm-如何捕获异常" aria-hidden="true">#</a> JVM 如何捕获异常</h3><p>在编译生成的字节码中，每个方法都附带一个异常表。异常表中的每一个条目代表一个异常处理器，并且由 from 指针、to 指针、target 指针以及所捕获的异常类型构成。这些指针的值是字节码索引（bytecode index，bci），用以定位字节码。</p><p>其中，from 指针和 to 指针标示了该异常处理器所监控的范围，例如 try 代码块所覆盖的范围。target 指针则指向异常处理器的起始位置，例如 catch 代码块的起始位置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">mayThrowException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 对应的 Java 字节码</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Code</span><span class="token operator">:</span>
    <span class="token number">0</span><span class="token operator">:</span> invokestatic mayThrowException<span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">V</span>
    <span class="token number">3</span><span class="token operator">:</span> <span class="token keyword">goto</span> <span class="token number">11</span>
    <span class="token number">6</span><span class="token operator">:</span> astore_1
    <span class="token number">7</span><span class="token operator">:</span> aload_1
    <span class="token number">8</span><span class="token operator">:</span> invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Exception</span><span class="token punctuation">.</span>printStackTrace
   <span class="token number">11</span><span class="token operator">:</span> <span class="token keyword">return</span>
  <span class="token class-name">Exception</span> table<span class="token operator">:</span>
    from  <span class="token keyword">to</span> <span class="token namespace">target</span> type
      <span class="token number">0</span>   <span class="token number">3</span>   <span class="token number">6</span>  <span class="token class-name">Class</span> java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Exception</span>  <span class="token comment">// 异常表条目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：编译过后，该方法的异常表拥有一个条目。其 from 指针和 to 指针分别为 0 和 3，代表它的监控范围从索引为 0 的字节码开始，到索引为 3 的字节码结束（不包括 3）。该条目的 target 指针是 6，代表这个异常处理器从索引为 6 的字节码开始。条目的最后一列，代表该异常处理器所捕获的异常类型正是 Exception。</p><p>当程序触发异常时，Java 虚拟机会从上至下遍历异常表中的所有条目。当触发异常的字节码的索引值在某个异常表条目的监控范围内，Java 虚拟机会判断所抛出的异常和该条目想要捕获的异常是否匹配。如果匹配，Java 虚拟机会将控制流转移至该条目 target 指针指向的字节码。</p><p>如果遍历完所有异常表条目，Java 虚拟机仍未匹配到异常处理器，那么它会弹出当前方法对应的 Java 栈帧，并且在调用者（caller）中重复上述操作。在最坏情况下，Java 虚拟机需要遍历当前线程 Java 栈上所有方法的异常表。</p><h3 id="java-7-的-supressed-异常以及语法糖" tabindex="-1"><a class="header-anchor" href="#java-7-的-supressed-异常以及语法糖" aria-hidden="true">#</a> Java 7 的 Supressed 异常以及语法糖</h3><p>如果 catch 代码块捕获了异常，并且触发了另一个异常，那么 finally 捕获并且重抛的异常是哪个呢？答案是后者。也就是说原本的异常便会被忽略掉，这对于代码调试来说十分不利。</p><p>Java 7 引入了 Supressed 异常来解决这个问题。这个新特性允许开发人员将一个异常附于另一个异常之上。因此，抛出的异常可以附带多个异常的信息。</p><p>Java 7 专门构造了一个名为 try-with-resources 的语法糖，在字节码层面自动使用 Supressed 异常。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">implements</span> <span class="token class-name">AutoCloseable</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Foo</span> foo0 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">&quot;Foo0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// try-with-resources</span>
         <span class="token class-name">Foo</span> foo1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">&quot;Foo1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">Foo</span> foo2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">&quot;Foo2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Initial&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 运行结果：</span>
<span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>RuntimeException</span><span class="token operator">:</span> <span class="token class-name">Initial</span>
        at <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">)</span>
        <span class="token class-name">Suppressed</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>RuntimeException</span><span class="token operator">:</span> <span class="token class-name">Foo2</span>
                at <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">13</span><span class="token punctuation">)</span>
                at <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">)</span>
        <span class="token class-name">Suppressed</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>RuntimeException</span><span class="token operator">:</span> <span class="token class-name">Foo1</span>
                at <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">13</span><span class="token punctuation">)</span>
                at <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">)</span>
        <span class="token class-name">Suppressed</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>RuntimeException</span><span class="token operator">:</span> <span class="token class-name">Foo0</span>
                at <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">13</span><span class="token punctuation">)</span>
                at <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">Foo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 try-with-resources 语法糖之外，Java 7 还支持在同一 catch 代码块中捕获多种异常。实际实现非常简单，生成多个异常表条目即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 在同一 catch 代码块中捕获多种异常
try {
  ...
} catch (SomeException | OtherException e) {
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jvm-如何实现反射" tabindex="-1"><a class="header-anchor" href="#jvm-如何实现反射" aria-hidden="true">#</a> JVM 如何实现反射</h2><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,45),r={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://time.geekbang.org/column/intro/100010301",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=t("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("《深入理解 Java 虚拟机》"),e(s)])]),n("li",null,[n("a",k,[a("深入拆解 Java 虚拟机"),e(s)])])])])}const y=p(i,[["render",d],["__file","jvm-and-java.html.vue"]]);export{y as default};
