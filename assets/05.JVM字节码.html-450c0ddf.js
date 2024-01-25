import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as n,c as l,a,b as e,d as s,e as i}from"./app-ab18ad7c.js";const d={},h=i('<h1 id="java-字节码" tabindex="-1"><a class="header-anchor" href="#java-字节码" aria-hidden="true">#</a> Java 字节码</h1><h2 id="字节码简介" tabindex="-1"><a class="header-anchor" href="#字节码简介" aria-hidden="true">#</a> 字节码简介</h2><h3 id="什么是字节码" tabindex="-1"><a class="header-anchor" href="#什么是字节码" aria-hidden="true">#</a> 什么是字节码</h3><p>Java 字节码是Java虚拟机执行的一种指令格式。之所以被称之为字节码，是因为：<strong>Java 字节码文件（<code>.class</code>）是一种以 8 位字节为基础单位的二进制流文件</strong>，各个数据项严格按照顺序紧凑地排列在 .class 文件中，中间没有添加任何分隔符。<strong>整个 .class 文件本质上就是一张表</strong>。</p><p>Java 能做到 “<strong>一次编译，到处运行</strong>”，一是因为 JVM 针对各种操作系统、平台都进行了定制；二是因为无论在什么平台，都可以编译生成固定格式的Java 字节码文件（<code>.class</code>）。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230419203137.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="字节码文件结构" tabindex="-1"><a class="header-anchor" href="#字节码文件结构" aria-hidden="true">#</a> 字节码文件结构</h3><p>一个 Java 类编译后生成的 .class 文件内容如下图所示，是一堆十六进制数。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230419141404.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',9),c={href:"https://tech.meituan.com/2019/09/05/java-bytecode-enhancement.html",target:"_blank",rel:"noopener noreferrer"},p=i('<p>字节码看似杂乱无序，实际上是由严格的格式要求组成的。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20230419154033.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="魔数" tabindex="-1"><a class="header-anchor" href="#魔数" aria-hidden="true">#</a> 魔数</h4><p>每个 <code>.class</code> 文件的头 4 个字节称为 <strong><code>魔数（magic_number）</code></strong>，它的唯一作用是确定这个文件是否为一个能被虚拟机接收的 <code>.class</code> 文件。魔数的固定值为：<code>0xCAFEBABE</code>。</p><h4 id="版本号" tabindex="-1"><a class="header-anchor" href="#版本号" aria-hidden="true">#</a> 版本号</h4><p>版本号（version）有 4 个字节，<strong>前两个字节表示次版本号（Minor Version），后两个字节表示主版本号（Major Version）</strong>。</p><p>举例来说，如果版本号为：“00 00 00 34”。那么，次版本号转化为十进制为 0，主版本号转化为十进制为 52，在 Oracle 官网中查询序号 52 对应的主版本号为 1.8，所以编译该文件的 Java 版本号为 1.8.0。</p><h4 id="常量池" tabindex="-1"><a class="header-anchor" href="#常量池" aria-hidden="true">#</a> 常量池</h4><p>紧接着主版本号之后的字节为常量池（constant_pool），常量池可以理解为 .class 文件中的资源仓库。</p><p>常量池整体上分为两部分：常量池计数器以及常量池数据区</p><ul><li><p><strong>常量池计数器（constant_pool_count）</strong> - 由于常量的数量不固定，所以需要先放置两个字节来表示常量池容量计数值。</p></li><li><p><strong>常量池数据区</strong> - 数据区的每一项常量都是一个表，且结构各不相同。</p></li></ul><p>常量池主要存放两类常量：</p><ul><li><strong>字面量</strong> - 如文本字符串、声明为 <code>final</code> 的常量值。</li><li><strong>符号引用</strong><ul><li>类和接口的全限定名</li><li>字段的名称和描述符</li><li>方法的名称和描述符</li></ul></li></ul><h4 id="访问标志" tabindex="-1"><a class="header-anchor" href="#访问标志" aria-hidden="true">#</a> 访问标志</h4><p>紧接着常量池的 2 个字节代表访问标志（access_flags），这个标志<strong>用于识别一些类或者接口的访问信息</strong>，描述该 Class 是类还是接口，以及是否被 <code>public</code>、<code>abstract</code>、<code>final</code> 等修饰符修饰。</p><h4 id="类索引、父类索引、接口索引" tabindex="-1"><a class="header-anchor" href="#类索引、父类索引、接口索引" aria-hidden="true">#</a> 类索引、父类索引、接口索引</h4><p>类索引（this_class）和父类索引都是一个 u2 类型的数据，而接口索引集合是一组 u2 类型的数据的集合。.class 文件中由这 3 项数据来确定这个类的继承关系。</p><h4 id="字段表" tabindex="-1"><a class="header-anchor" href="#字段表" aria-hidden="true">#</a> 字段表</h4><p>字段表用于描述类和接口中声明的变量。包含类级变量以及实例级变量，但是不包含方法内部声明的局部变量。</p><p>字段表也分为两部分，第一部分为两个字节，描述字段个数；第二部分是每个字段的详细信息 fields_info。</p><h4 id="方法表" tabindex="-1"><a class="header-anchor" href="#方法表" aria-hidden="true">#</a> 方法表</h4><p>字段表结束后为方法表，方法表的结构如同字段表一样，依次包括了访问标志、名称索引、描述符索引、属性表集合几项。</p><h4 id="属性表集合" tabindex="-1"><a class="header-anchor" href="#属性表集合" aria-hidden="true">#</a> 属性表集合</h4><p>属性表集合存放了在该文件中类或接口所定义属性的基本信息。</p><h3 id="字节码指令" tabindex="-1"><a class="header-anchor" href="#字节码指令" aria-hidden="true">#</a> 字节码指令</h3><p>字节码指令由一个字节长度的、代表着某种特定操作含义的数字（称为操作码，Opcode）以及跟随其后的零到多个代表此操作所需参数（Operands）而构成。由于 JVM 采用面向操作数栈架构而不是寄存器架构，所以大多数的指令都不包括操作数，只有一个操作码。</p><p>JVM 操作码的长度为 1 个字节，因此指令集的操作码最多只有 256 个。</p><p>字节码操作大致分为 9 类：</p><ul><li>加载和存储指令</li><li>运算指令</li><li>类型转换指令</li><li>对象创建与访问指令</li><li>操作数栈管理指令</li><li>控制转移指令</li><li>方法调用和返回指令</li><li>异常处理指令</li><li>同步指令</li></ul><h2 id="字节码增强" tabindex="-1"><a class="header-anchor" href="#字节码增强" aria-hidden="true">#</a> 字节码增强</h2><h3 id="asm" tabindex="-1"><a class="header-anchor" href="#asm" aria-hidden="true">#</a> Asm</h3><p>对于需要手动操纵字节码的需求，可以使用 Asm，它可以直接生产 <code>.class</code>字节码文件，也可以在类被加载入 JVM 之前动态修改类行为（如下图 17 所示）。</p><p>Asm 的应用场景有 AOP（Cglib 就是基于 Asm）、热部署、修改其他 jar 包中的类等。当然，涉及到如此底层的步骤，实现起来也比较麻烦。</p><p>Asm 有两类 API：核心 API 和树形 API</p><h4 id="核心-api" tabindex="-1"><a class="header-anchor" href="#核心-api" aria-hidden="true">#</a> 核心 API</h4><p>Asm Core API 可以类比解析 XML 文件中的 SAX 方式，不需要把这个类的整个结构读取进来，就可以用流式的方法来处理字节码文件。好处是非常节约内存，但是编程难度较大。然而出于性能考虑，一般情况下编程都使用 Core API。在 Core API 中有以下几个关键类：</p><ul><li>ClassReader：用于读取已经编译好的.class 文件。</li><li>ClassWriter：用于重新构建编译后的类，如修改类名、属性以及方法，也可以生成新的类的字节码文件。</li><li>各种 Visitor 类：如上所述，CoreAPI 根据字节码从上到下依次处理，对于字节码文件中不同的区域有不同的 Visitor，比如用于访问方法的 MethodVisitor、用于访问类变量的 FieldVisitor、用于访问注解的 AnnotationVisitor 等。为了实现 AOP，重点要使用的是 MethodVisitor。</li></ul><h4 id="树形-api" tabindex="-1"><a class="header-anchor" href="#树形-api" aria-hidden="true">#</a> 树形 API</h4><p>Asm Tree API 可以类比解析 XML 文件中的 DOM 方式，把整个类的结构读取到内存中，缺点是消耗内存多，但是编程比较简单。TreeApi 不同于 CoreAPI，TreeAPI 通过各种 Node 类来映射字节码的各个区域，类比 DOM 节点，就可以很好地理解这种编程方式。</p><h3 id="javassist" tabindex="-1"><a class="header-anchor" href="#javassist" aria-hidden="true">#</a> Javassist</h3><p>利用 Javassist 实现字节码增强时，可以无须关注字节码刻板的结构，其优点就在于编程简单。直接使用 java 编码的形式，而不需要了解虚拟机指令，就能动态改变类的结构或者动态生成类。</p><p>其中最重要的是 ClassPool、CtClass、CtMethod、CtField 这四个类：</p><ul><li><code>CtClass（compile-time class）</code> - 编译时类信息，它是一个 class 文件在代码中的抽象表现形式，可以通过一个类的全限定名来获取一个 CtClass 对象，用来表示这个类文件。</li><li><code>ClassPool</code> - 从开发视角来看，ClassPool 是一张保存 CtClass 信息的 HashTable，key 为类名，value 为类名对应的 CtClass 对象。当我们需要对某个类进行修改时，就是通过 pool.getCtClass(&quot;className&quot;)方法从 pool 中获取到相应的 CtClass。</li><li><code>CtMethod</code>、<code>CtField</code> - 这两个比较好理解，对应的是类中的方法和属性。</li></ul><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>',44),u={href:"https://plugins.jetbrains.com/plugin/9248-jclasslib-bytecode-viewer",target:"_blank",rel:"noopener noreferrer"},g=a("h2",{id:"参考资料",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),e(" 参考资料")],-1),f={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://tech.meituan.com/2019/09/05/java-bytecode-enhancement.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jianshu.com/p/252f381a6bc4",target:"_blank",rel:"noopener noreferrer"},m={href:"https://asm.ow2.io/asm4-guide.pdf",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/jboss-javassist/javassist",target:"_blank",rel:"noopener noreferrer"};function x(v,A){const r=o("ExternalLinkIcon");return n(),l("div",null,[h,a("p",null,[e("图来自 "),a("a",c,[e("字节码增强技术探索"),s(r)])]),p,a("p",null,[a("a",u,[e("jclasslib"),s(r)]),e(" - IDEA 插件，可以直观查看当前字节码文件的类信息、常量池、方法区等信息。")]),g,a("ul",null,[a("li",null,[a("a",f,[e("《深入理解 Java 虚拟机》"),s(r)])]),a("li",null,[a("a",_,[e("字节码增强技术探索"),s(r)])]),a("li",null,[a("a",b,[e("一文让你明白 Java 字节码"),s(r)])]),a("li",null,[a("a",m,[e("Asm 4.0 官方文档"),s(r)])]),a("li",null,[a("a",C,[e("Javassist Github"),s(r)])])])])}const j=t(d,[["render",x],["__file","05.JVM字节码.html.vue"]]);export{j as default};
