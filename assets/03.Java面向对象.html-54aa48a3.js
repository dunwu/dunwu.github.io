import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as p,a,b as n,d as s,w as d,e as t}from"./app-ee97b13a.js";const r={},u=a("h1",{id:"java-面向对象",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java-面向对象","aria-hidden":"true"},"#"),n(" Java 面向对象")],-1),v=a("h2",{id:"面向对象",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#面向对象","aria-hidden":"true"},"#"),n(" 面向对象")],-1),k=a("p",null,"每种编程语言，都有自己的操纵内存中元素的方式。",-1),h={href:"https://dunwu.github.io/blog/pages/55d693/",target:"_blank",rel:"noopener noreferrer"},m=a("p",null,"有了自定义类型，那么数据类型自然会千变万化，所以，必须要有一定的机制，使得它们仍然保持一些必要的、通用的特性。",-1),b=a("p",null,"Java 世界有一句名言：一切皆为对象。这句话，你可能第一天学 Java 时，就听过了。这不仅仅是一句口号，也体现在 Java 的设计上。",-1),g=a("li",null,[n("首先，所有 Java 类都继承自 "),a("code",null,"Object"),n(" 类（从这个名字，就可见一斑）。")],-1),f=a("code",null,"new",-1),w={href:"https://dunwu.github.io/blog/pages/55d693/",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 下面两</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>String s</code> 定义了一个名为 s 的引用，它指向一个 <code>String</code> 类型的对象，而实际的对象是 <code>“abc”</code> 字符串。这就像是，使用遥控器（引用）来操纵电视机（对象）。</p><p>与 C/C++ 这类语言不同，程序员只需要通过 <code>new</code> 创建一个对象，但不必负责销毁或结束一个对象。负责运行 Java 程序的 Java 虚拟机有一个垃圾回收器，它会监视 <code>new</code> 创建的对象，一旦发现对象不再被引用，则会释放对象的内存空间。</p><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3><p><strong>封装（Encapsulation）是指一种将抽象性函式接口的实现细节部份包装、隐藏起来的方法。</strong></p><p>封装最主要的作用在于我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段。</p><p>适当的封装可以让程式码更容易理解与维护，也加强了程式码的安全性。</p><p>封装的优点：</p><ul><li>良好的封装能够减少耦合。</li><li>类内部的结构可以自由修改。</li><li>可以对成员变量进行更精确的控制。</li><li>隐藏信息，实现细节。</li></ul><p>实现封装的步骤：</p><ol><li>修改属性的可见性来限制对属性的访问（一般限制为 private）。</li><li>对每个值属性提供对外的公共方法访问，也就是创建一对赋取值方法，用于对私有属性的访问。</li></ol><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>继承是 java 面向对象编程技术的一块基石，因为它允许创建分等级层次的类。</p><p>继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。</p><p>现实中的例子：</p><p>狗和鸟都是动物。如果将狗、鸟作为类，它们可以继承动物类。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/1552641712126.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>类的继承形式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> 父类 <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> 子类 <span class="token keyword">extends</span> 父类 <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继承类型" tabindex="-1"><a class="header-anchor" href="#继承类型" aria-hidden="true">#</a> 继承类型</h4><figure><img src="http://www.runoob.com/wp-content/uploads/2013/12/types_of_inheritance.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="继承的特性" tabindex="-1"><a class="header-anchor" href="#继承的特性" aria-hidden="true">#</a> 继承的特性</h4><ul><li>子类可以继承父类的属性和方法。需要注意的是，构造方法除外，构造方法只能被调用，而不能被继承。</li><li>子类可以拥有自己的属性和方法，即子类可以对父类进行扩展。</li><li>子类可以用自己的方式实现父类的方法。</li><li>Java 的继承是单继承，但是可以多重继承，单继承就是一个子类只能继承一个父类，多重继承就是，例如 A 类继承 B 类，B 类继承 C 类，所以按照关系就是 C 类是 B 类的父类，B 类是 A 类的父类，这是 Java 继承区别于 C++ 继承的一个特性。</li><li>提高了类之间的耦合性（继承的缺点，耦合度高就会造成代码之间的联系越紧密，代码独立性越差）。</li></ul><h4 id="继承关键字" tabindex="-1"><a class="header-anchor" href="#继承关键字" aria-hidden="true">#</a> 继承关键字</h4><p>继承可以使用 <code>extends</code> 和 <code>implements</code> 这两个关键字来实现继承，而且所有的类都是继承于 <code>java.lang.Object</code>，当一个类没有继承的两个关键字，则默认继承 <code>Object</code>（这个类在 <strong><code>java.lang</code></strong> 包中，所以不需要 <strong><code>import</code></strong>）祖先类。</p><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><p>刚开始学习面向对象编程时，容易被各种术语弄得云里雾里。所以，很多人会死记硬背书中对于术语的定义。</p><p>但是，随着应用和理解的深入，应该会渐渐有更进一步的认识，将其融汇贯通的理解。</p><p>学习类之前，先让我们思考一个问题：Java 中为什么要引入类机制，设计的初衷是什么？</p><p>Java 中提供的基本数据类型，只能表示单一的数值，这用于数值计算，还 OK。但是，如果要抽象模拟现实中更复杂的事物，则无法做到。</p><p>试想，如果要让你抽象狗的数据模型，怎么做？狗有眼耳口鼻等器官，有腿，狗有大小，毛色，这些都是它的状态，狗会跑、会叫、会吃东西，这些是它的行为。</p><p>类的引入，就是为了抽象这种相对复杂的事物。</p><p>对象是用于计算机语言对问题域中事物的描述。<strong>对象通过方法和属性来分别描述事物所具有的行为和状态。</strong></p><p><strong>类是用于描述同一类的对象的一个抽象的概念，类中定义了这一类对象所具有的行为和状态。</strong></p><p>类可以看成是创建 Java 对象的模板。</p>`,35),x={href:"https://www.zhihu.com/question/20275578/answer/26577791",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><p>与大多数面向对象编程语言一样，Java 使用 <code>class</code> （类）关键字来表示自定义类型。自定义类型是为了更容易抽象现实事物。</p><p>在一个类中，可以设置一静一动两种元素：属性（静）和方法（动）。</p><ul><li><strong>属性（有的人喜欢称为成员、字段）</strong> - 属性抽象的是事物的状态。类属性可以是任何类型的对象。</li><li><strong>方法（有的人喜欢称为函数）</strong> - 方法抽象的是事物的行为。</li></ul><p>类的形式如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/1552640231731.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="方法定义" tabindex="-1"><a class="header-anchor" href="#方法定义" aria-hidden="true">#</a> 方法定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修饰符 返回值类型 方法名(参数类型 参数名){
    ...
    方法体
    ...
    return 返回值;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法包含一个方法头和一个方法体。下面是一个方法的所有部分：</p><ul><li>**修饰符：**修饰符，这是可选的，告诉编译器如何调用该方法。定义了该方法的访问类型。</li><li>**返回值类型 ：**方法可能有返回值。如果没有返回值，这种情况下，返回值类型应设为 void。</li><li>**方法名：**是方法的实际名称。方法名和参数表共同构成方法签名。</li><li>**参数类型：**参数像是一个占位符。当方法被调用时，传递值给参数。这个值被称为实参或变量。参数列表是指方法的参数类型、顺序和参数的个数。参数是可选的，方法可以不包含任何参数。</li><li>**方法体：**方法体包含具体的语句，定义该方法的功能。</li></ul><p>示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法调用" tabindex="-1"><a class="header-anchor" href="#方法调用" aria-hidden="true">#</a> 方法调用</h3><p>Java 支持两种调用方法的方式，根据方法是否返回值来选择。</p><p>当程序调用一个方法时，程序的控制权交给了被调用的方法。当被调用方法的返回语句执行或者到达方法体闭括号时候交还控制权给程序。</p><p>当方法返回一个值的时候，方法调用通常被当做一个值。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int larger = max(30, 40);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果方法返回值是 void，方法调用一定是一条语句。例如，方法 println 返回 void。下面的调用是个语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>System.out.println(&quot;Hello World&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p>每个类都有构造方法。如果没有显式地为类定义任何构造方法，Java 编译器将会为该类提供一个默认构造方法。</p><p>在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Puppy</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Puppy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Puppy</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 这个构造器仅有一个参数：name</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>Java 支持的变量类型有：</p><ul><li><code>局部变量</code> - 类方法中的变量。</li><li><code>实例变量（也叫成员变量）</code> - 类方法外的变量，不过没有 <code>static</code> 修饰。</li><li><code>类变量（也叫静态变量）</code> - 类方法外的变量，用 <code>static</code> 修饰。</li></ul><p>特性对比：</p><table><thead><tr><th>局部变量</th><th>实例变量（也叫成员变量）</th><th>类变量（也叫静态变量）</th></tr></thead><tbody><tr><td>局部变量声明在方法、构造方法或者语句块中。</td><td>实例变量声明在方法、构造方法和语句块之外。</td><td>类变量声明在方法、构造方法和语句块之外。并且以 static 修饰。</td></tr><tr><td>局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁。</td><td>实例变量在对象创建的时候创建，在对象被销毁的时候销毁。</td><td>类变量在第一次被访问时创建，在程序结束时销毁。</td></tr><tr><td>局部变量没有默认值，所以必须经过初始化，才可以使用。</td><td>实例变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。</td><td>类变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。</td></tr><tr><td>对于局部变量，如果是基本类型，会把值直接存储在栈；如果是引用类型，会把其对象存储在堆，而把这个对象的引用（指针）存储在栈。</td><td>实例变量存储在堆。</td><td>类变量存储在静态存储区。</td></tr><tr><td>访问修饰符不能用于局部变量。</td><td>访问修饰符可以用于实例变量。</td><td>访问修饰符可以用于类变量。</td></tr><tr><td>局部变量只在声明它的方法、构造方法或者语句块中可见。</td><td>实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见。</td><td>与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。</td></tr><tr><td></td><td>实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。</td><td>静态变量可以通过：ClassName.VariableName 的方式访问。</td></tr><tr><td></td><td></td><td>无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。</td></tr><tr><td></td><td></td><td>类变量除了被声明为常量外很少使用。</td></tr></tbody></table><h3 id="变量修饰符" tabindex="-1"><a class="header-anchor" href="#变量修饰符" aria-hidden="true">#</a> 变量修饰符</h3><ul><li>访问级别修饰符 - 如果变量是实例变量或类变量，可以添加访问级别修饰符（public/protected/private）</li><li>静态修饰符 - 如果变量是类变量，需要添加 static 修饰</li><li>final - 如果变量使用 final 修饰符，就表示这是一个常量，不能被修改。</li></ul><h3 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h3><p>对象是根据类创建的。在 Java 中，使用关键字 new 来创建一个新的对象。创建对象需要以下三步：</p><ul><li><strong>声明</strong>：声明一个对象，包括对象名称和对象类型。</li><li><strong>实例化</strong>：使用关键字 new 来创建一个对象。</li><li><strong>初始化</strong>：使用 new 创建对象时，会调用构造方法初始化对象。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Puppy{
   public Puppy(String name){
      //这个构造器仅有一个参数：name
      System.out.println(&quot;小狗的名字是 : &quot; + name );
   }
   public static void main(String[] args){
      // 下面的语句将创建一个Puppy对象
      Puppy myPuppy = new Puppy( &quot;tommy&quot; );
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问实例变量和方法" tabindex="-1"><a class="header-anchor" href="#访问实例变量和方法" aria-hidden="true">#</a> 访问实例变量和方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 实例化对象 */
ObjectReference = new Constructor();
/* 访问类中的变量 */
ObjectReference.variableName;
/* 访问类中的方法 */
ObjectReference.methodName();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问权限控制" tabindex="-1"><a class="header-anchor" href="#访问权限控制" aria-hidden="true">#</a> 访问权限控制</h2><h3 id="代码组织" tabindex="-1"><a class="header-anchor" href="#代码组织" aria-hidden="true">#</a> 代码组织</h3><p><strong>当编译一个 .java 文件时，在 .java 文件中的每个类都会输出一个与类同名的 .class 文件。</strong></p><p>MultiClassDemo.java 示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MultiClass1</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MultiClass2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MultiClass3</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MultiClassDemo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>javac MultiClassDemo.java</code> 命令，本地会生成 MultiClass1.class、MultiClass2.class、MultiClass3.class、MultiClassDemo.class 四个文件。</p><p><strong>Java 可运行程序是由一组 .class 文件打包并压缩成的一个 .jar 文件</strong>。Java 解释器负责这些文件的查找、装载和解释。<strong>Java 类库实际上是一组类文件（.java 文件）。</strong></p><ul><li><strong>其中每个文件允许有一个 public 类，以及任意数量的非 public 类</strong>。</li><li><strong>public 类名必须和 .java 文件名完全相同，包括大小写。</strong></li></ul><p>程序一般不止一个人编写，会调用系统提供的代码、第三方库中的代码、项目中其他人写的代码等，不同的人因为不同的目的可能定义同样的类名/接口名，这就是命名冲突。</p><p>Java 中为了解决命名冲突问题，提供了包（<code>package</code>）和导入（<code>import</code>）机制。</p><h4 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> package</h4><p>包（<code>package</code>）的原则：</p>`,49),j=a("li",null,[n("包类似于文件夹，文件放在文件夹中，类和接口则放在包中。为了便于组织，文件夹一般是一个"),a("strong",null,"有层次的树形结构"),n("，包也类似。")],-1),J=a("li",null,[a("strong",null,[n("包名以逗号 "),a("code",null,"."),n(" 分隔，表示层次结构。")])],-1),C={href:"http://apache.org",target:"_blank",rel:"noopener noreferrer"},S=a("li",null,[n("**包名和文件目录结构必须完全匹配。**Java 解释器运行过程如下： "),a("ul",null,[a("li",null,"找出环境变量 CLASSPATH，作为 .class 文件的根目录。"),a("li",null,[n("从根目录开始，获取包名称，并将逗号 "),a("code",null,"."),n(" 替换为文件分隔符（反斜杠 "),a("code",null,"/"),n("），通过这个路径名称去查找 Java 类。")])])],-1),E=t(`<h4 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h4><p>同一个包下的类之间互相引用是不需要包名的，可以直接使用。但如果类不在同一个包内，则必须要知道其所在的包，使用有两种方式：</p><ul><li>通过类的完全限定名</li><li>通过 import 将用到的类引入到当前类</li></ul><p>通过类的完全限定名示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PackageDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> main <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>import</code> 导入其它包的类到当前类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PackageDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：以上两个示例比较起来，显然是 <code>import</code> 方式，代码更加整洁。</p></blockquote>`,8),q={href:"https://www.cnblogs.com/swiftma/p/5628762.html",target:"_blank",rel:"noopener noreferrer"},B=t(`<h3 id="访问权限修饰关键字" tabindex="-1"><a class="header-anchor" href="#访问权限修饰关键字" aria-hidden="true">#</a> 访问权限修饰关键字</h3><p>访问权限控制的等级，从最大权限到最小权限依次为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public &gt; protected &gt; 包访问权限（没有任何关键字）&gt; private
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>public</code> - 表示任何类都可以访问；</li><li><code>包访问权限</code> - 包访问权限，没有任何关键字。它表示当前包中的所有其他类都可以访问，但是其它包的类无法访问。</li><li><code>protected</code> - 表示子类可以访问，此外，同一个包内的其他类也可以访问，即使这些类不是子类。</li><li><code>private</code> - 表示其它任何类都无法访问。</li></ul><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>接口是对行为的抽象，它是抽象方法的集合，利用接口可以达到 API 定义和实现分离的目的。</p><p>接口，不能实例化；不能包含任何非常量成员，任何 field 都是隐含着 <code>public static final</code> 的意义；同时，没有非静态方法实现，也就是说要么是抽象方法，要么是静态方法。</p><p>Java 标准类库中，定义了非常多的接口，比如 <code>java.util.List</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h2><p>抽象类是不能实例化的类，用 <code>abstract</code> 关键字修饰 <code>class</code>，其目的主要是代码重用。除了不能实例化，形式上和一般的 Java 类并没有太大区别，可以有一个或者多个抽象方法，也可以没有抽象方法。抽象类大多用于抽取相关 Java 类的共用方法实现或者是共同成员变量，然后通过继承的方式达到代码复用的目的。</p><p>Java 标准库中，比如 <code>collection</code> 框架，很多通用部分就被抽取成为抽象类，例如 <code>java.util.AbstractList</code>。</p><ol><li>抽象类不能被实例化(初学者很容易犯的错)，如果被实例化，就会报错，编译无法通过。只有抽象类的非抽象子类可以创建对象。</li><li>抽象类中不一定包含抽象方法，但是有抽象方法的类必定是抽象类。</li><li>抽象类中的抽象方法只是声明，不包含方法体，就是不给出方法的具体实现也就是方法的具体功能。</li><li>构造方法，类方法（用 static 修饰的方法）不能声明为抽象方法。</li><li>抽象类的子类必须给出抽象类中的抽象方法的具体实现，除非该子类也是抽象类。</li></ol><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,14),P={href:"https://book.douban.com/subject/2130190/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://book.douban.com/subject/3146174/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://book.douban.com/subject/4496038/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.zhihu.com/question/20275578/answer/26577791",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.cnblogs.com/swiftma/p/5628762.html",target:"_blank",rel:"noopener noreferrer"};function O(L,R){const i=l("RouterLink"),e=l("ExternalLinkIcon");return o(),p("div",null,[u,a("blockquote",null,[a("p",null,[n("在"),s(i,{to:"/01.Java/01.JavaSE/01.%E5%9F%BA%E7%A1%80%E7%89%B9%E6%80%A7/02.Java%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"},{default:d(()=>[n("Java 基本数据类型")]),_:1}),n(" 中我们了解 Java 中支持的基本数据类型（值类型）。本文开始讲解 Java 中重要的引用类型——类。")])]),v,k,a("p",null,[n("Java 中提供了"),a("a",h,[n("基本数据类型"),s(e)]),n("，但这还不能满足编写程序时，需要抽象更加复杂数据类型的需要。因此，Java 中，允许开发者通过类（类的机制下面会讲到）创建自定义类型。")]),m,b,a("ul",null,[g,a("li",null,[n("几乎所有 Java 对象初始化时，都要使用 "),f,n(" 创建对象（"),a("a",w,[n("基本数据类型"),s(e)]),n("、String、枚举特殊处理），对象存储在堆中。")])]),_,a("p",null,[n("什么是方法？扩展阅读："),a("a",x,[n("面向对象编程的弊端是什么？ - invalid s 的回答"),s(e)])]),y,a("ul",null,[j,J,a("li",null,[n("Java 中命名包名的一个惯例是使用域名作为前缀，因为域名是唯一的，一般按照域名的反序来定义包名，比如，域名是："),a("a",C,[n("apache.org"),s(e)]),n("，包名就以 org.apache 开头。")]),S]),E,a("blockquote",null,[a("p",null,[n("扩展阅读："),a("a",q,[n("https://www.cnblogs.com/swiftma/p/5628762.html"),s(e)])])]),B,a("ul",null,[a("li",null,[n("书籍 "),a("ul",null,[a("li",null,[a("a",P,[n("Java 编程思想"),s(e)])]),a("li",null,[a("a",A,[n("Java 核心技术（卷 1）"),s(e)])]),a("li",null,[a("a",D,[n("Head First Java"),s(e)])])])]),a("li",null,[n("文章 "),a("ul",null,[a("li",null,[a("a",M,[n("面向对象编程的弊端是什么？ - invalid s 的回答"),s(e)])]),a("li",null,[a("a",N,[n("https://www.cnblogs.com/swiftma/p/5628762.html"),s(e)])])])])])])}const T=c(r,[["render",O],["__file","03.Java面向对象.html.vue"]]);export{T as default};
