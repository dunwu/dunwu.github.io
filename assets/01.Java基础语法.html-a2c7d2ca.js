import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as d,a,b as t,d as n,e as s}from"./app-9db88853.js";const l={},c=s(`<h1 id="java-基础语法特性" tabindex="-1"><a class="header-anchor" href="#java-基础语法特性" aria-hidden="true">#</a> Java 基础语法特性</h1><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>空白行，或者注释的内容，都会被 Java 编译器忽略掉。</p><p>Java 支持多种注释方式，下面的示例展示了各种注释的使用方式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
     * JavaDoc 注释
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 单行注释</span>
        <span class="token comment">/* 多行注释：
           1. 注意点a
           2. 注意点b
         */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java基本数据类型.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,7),u={href:"https://dunwu.github.io/waterdrop/pages/55d693/",target:"_blank",rel:"noopener noreferrer"},g=s('<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>Java 支持的变量类型有：</p><ul><li><code>局部变量</code> - 类方法中的变量。</li><li><code>实例变量（也叫成员变量）</code> - 类方法外的变量，不过没有 <code>static</code> 修饰。</li><li><code>类变量（也叫静态变量）</code> - 类方法外的变量，用 <code>static</code> 修饰。</li></ul><p>特性对比：</p><table><thead><tr><th>局部变量</th><th>实例变量（也叫成员变量）</th><th>类变量（也叫静态变量）</th></tr></thead><tbody><tr><td>局部变量声明在方法、构造方法或者语句块中。</td><td>实例变量声明在方法、构造方法和语句块之外。</td><td>类变量声明在方法、构造方法和语句块之外。并且以 static 修饰。</td></tr><tr><td>局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁。</td><td>实例变量在对象创建的时候创建，在对象被销毁的时候销毁。</td><td>类变量在第一次被访问时创建，在程序结束时销毁。</td></tr><tr><td>局部变量没有默认值，所以必须经过初始化，才可以使用。</td><td>实例变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。</td><td>类变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。</td></tr><tr><td>对于局部变量，如果是基本类型，会把值直接存储在栈；如果是引用类型，会把其对象存储在堆，而把这个对象的引用（指针）存储在栈。</td><td>实例变量存储在堆。</td><td>类变量存储在静态存储区。</td></tr><tr><td>访问修饰符不能用于局部变量。</td><td>访问修饰符可以用于实例变量。</td><td>访问修饰符可以用于类变量。</td></tr><tr><td>局部变量只在声明它的方法、构造方法或者语句块中可见。</td><td>实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见。</td><td>与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。</td></tr><tr><td></td><td>实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。</td><td>静态变量可以通过：ClassName.VariableName 的方式访问。</td></tr><tr><td></td><td></td><td>无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。</td></tr><tr><td></td><td></td><td>类变量除了被声明为常量外很少使用。</td></tr></tbody></table><p><strong>变量修饰符</strong></p><ul><li><strong>访问级别修饰符</strong><ul><li>如果变量是实例变量或类变量，可以添加访问级别修饰符（public/protected/private）</li></ul></li><li><strong>静态修饰符</strong><ul><li>如果变量是类变量，需要添加 static 修饰</li></ul></li><li><strong>final</strong><ul><li>如果变量使用 <code>final</code> 修饰符，就表示这是一个常量，不能被修改。</li></ul></li></ul><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java数组.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',9),p={href:"https://dunwu.github.io/waterdrop/pages/155518/",target:"_blank",rel:"noopener noreferrer"},h=a("h2",{id:"枚举",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#枚举","aria-hidden":"true"},"#"),t(" 枚举")],-1),m=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java枚举.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),v={href:"https://dunwu.github.io/waterdrop/pages/979887/",target:"_blank",rel:"noopener noreferrer"},b=a("h2",{id:"操作符",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#操作符","aria-hidden":"true"},"#"),t(" 操作符")],-1),f=a("p",null,"Java 中支持的操作符类型如下：",-1),_=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java操作符.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),w={href:"http://www.runoob.com/java/java-operators.html",target:"_blank",rel:"noopener noreferrer"},k=a("h2",{id:"方法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),t(" 方法")],-1),x=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20220125072221.png",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),j={href:"https://dunwu.github.io/waterdrop/pages/7a3ffc/",target:"_blank",rel:"noopener noreferrer"},J=a("h2",{id:"控制语句",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#控制语句","aria-hidden":"true"},"#"),t(" 控制语句")],-1),y=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java控制语句.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),z={href:"https://dunwu.github.io/waterdrop/pages/fb4f8c/",target:"_blank",rel:"noopener noreferrer"},q=a("h2",{id:"异常",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#异常","aria-hidden":"true"},"#"),t(" 异常")],-1),N=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java异常框架.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),V=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java异常.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),B={href:"https://dunwu.github.io/waterdrop/pages/37415c/",target:"_blank",rel:"noopener noreferrer"},E=a("h2",{id:"泛型",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#泛型","aria-hidden":"true"},"#"),t(" 泛型")],-1),S=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java泛型.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),C={href:"https://dunwu.github.io/waterdrop/pages/33a820/",target:"_blank",rel:"noopener noreferrer"},H=a("h2",{id:"反射",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#反射","aria-hidden":"true"},"#"),t(" 反射")],-1),I=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java反射.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),L=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java代理.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),W={href:"https://dunwu.github.io/waterdrop/pages/0d066a/",target:"_blank",rel:"noopener noreferrer"},D=s('<h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/注解简介.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/元注解.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/内置注解.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/自定义注解.svg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',5),O={href:"https://dunwu.github.io/waterdrop/pages/ecc011/",target:"_blank",rel:"noopener noreferrer"},R=a("h2",{id:"序列化",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#序列化","aria-hidden":"true"},"#"),t(" 序列化")],-1),T=a("figure",null,[a("img",{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/xmind/Java序列化.svg",alt:"img",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img")],-1),A={href:"https://dunwu.github.io/waterdrop/pages/2b2f0f/",target:"_blank",rel:"noopener noreferrer"};function F(G,K){const e=r("ExternalLinkIcon");return o(),d("div",null,[c,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",u,[t("深入理解 Java 基本数据类型"),n(e)])])]),g,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",p,[t("深入理解 Java 数组"),n(e)])])]),h,m,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",v,[t("深入理解 Java 枚举"),n(e)])])]),b,f,_,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",w,[t("Java 操作符"),n(e)])])]),k,x,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",j,[t("深入理解 Java 方法"),n(e)])])]),J,y,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",z,[t("Java 控制语句"),n(e)])])]),q,N,V,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",B,[t("深入理解 Java 异常"),n(e)])])]),E,S,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",C,[t("深入理解 Java 泛型"),n(e)])])]),H,I,L,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",W,[t("深入理解 Java 反射和动态代理"),n(e)])])]),D,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",O,[t("深入理解 Java 注解"),n(e)])])]),R,T,a("blockquote",null,[a("p",null,[t("👉 扩展阅读："),a("a",A,[t("Java 序列化"),n(e)])])])])}const Q=i(l,[["render",F],["__file","01.Java基础语法.html.vue"]]);export{Q as default};
