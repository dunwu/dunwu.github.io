import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as r,e as p}from"./app-afc5da4f.js";const i={},h=p('<h1 id="如何学习编程语言" tabindex="-1"><a class="header-anchor" href="#如何学习编程语言" aria-hidden="true">#</a> 如何学习编程语言</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>很多人喜欢争论什么什么编程语言好，我认为这个话题如果不限定应用范围，就毫无意义。</p><p>每种编程语言必然有其优点和缺点，这也决定了它有适合的应用场景和不适合的应用场景。现代软件行业，想一门编程语言包打天下是不现实的。这中现状也造成了一种现象，一个程序员往往要掌握多种编程语言。</p><p>学习任何一门编程语言，都会面临的第一个问题都是：如何学习 XX 语言？</p><p>我不想说什么多看、多学、多写、多练之类的废话。世上事有难易乎？无他，唯手熟尔。谁不知道熟能生巧的道理？</p><p>我觉得有必要谈谈的是：如何由浅入深的学习一门编程语言？学习所有编程语言有没有一个相对统一的学习方法？</p><p>曾几何时，当我还是一名小菜鸟时，总是叹服那些大神掌握多门编程语言。后来，在多年编程工作和学习中，我陆陆续续也接触过不少编程语言：C、C++、Java、C#、Javascript、shell 等等。每次学习一门新的编程语言，掌握程度或深或浅，但是学习的曲线却大抵相似。</p><p>下面，我按照个人的学习经验总结一下，学习编程语言的基本步骤。</p><h2 id="学习编程语言的步骤" tabindex="-1"><a class="header-anchor" href="#学习编程语言的步骤" aria-hidden="true">#</a> 学习编程语言的步骤</h2><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/programming/learn-programming-language.png"></div><h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3><p>首先当然是了解语言的最基本语法。</p><p>控制台输出，如 C 的 printf，Java 的 System.out.println 等。</p><p>普通程序员的第一行代码一般都是输出 “Hello World” 吧。</p><ul><li><p>基本数据类型</p><p>不同编程语言的基本数据类型不同。基本数据类型是的申请内存空间变得方便、规范化。</p></li><li><p>变量</p><p>不同编程语言的声明变量方式有很大不同。有的如 Java 、C++ 需要明确指定变量数据类型，这种叫强类型定义语言。有的语言（主要是脚本语言），如 Javascript、Shell 等，不需要明确指定数据类型，这种叫弱类型定义语言。</p><p>还需要注意的一点是变量的作用域范围和生命周期。不同语言变量的作用域范围和生命周期不一定一样，这个需要在代码中细细体会，有时会为此埋雷。</p></li><li><p>逻辑控制语句</p><p>编程语言都会有逻辑控制语句，哪怕是汇编语言。</p><p>掌握条件语句、循环语句、中断循环语句（break、continue）、选择语句。一般区别仅仅在于关键字、语法格式略有不同。</p></li><li><p>运算符</p><p>掌握基本运算符，如算术运算符、关系运算符、逻辑运算符、赋值运算符等。</p><p>有些语言还提供位运算符、特殊运算符，视情节掌握。</p></li><li><p>注释（没啥好说的）</p></li><li><p>函数</p><p>编程语言基本都有函数。注意语法格式：是否支持出参；支持哪些数据作为入参，有些语言允许将函数作为参数传入另一个参数（即回调）；返回值；如何退出函数（如 Java、C++的 return，）。</p></li></ul><h3 id="数组、枚举、集合" tabindex="-1"><a class="header-anchor" href="#数组、枚举、集合" aria-hidden="true">#</a> 数组、枚举、集合</h3><p>枚举只有部分编程语言有，如 Java、C++、C#。</p><p>但是数组和集合（有些语言叫容器）一般编程语言都有，只是有的编程语言提供的集合比较丰富。使用方法基本类似。</p><h3 id="常用类" tabindex="-1"><a class="header-anchor" href="#常用类" aria-hidden="true">#</a> 常用类</h3><p>比较常用的类（当然有些语言中不叫类，叫对象或者其他什么，这个不重要，领会精神）请了解其 API 用法，如：字符串、日期、数学计算等等。</p><h3 id="语言特性" tabindex="-1"><a class="header-anchor" href="#语言特性" aria-hidden="true">#</a> 语言特性</h3><p>语言特性这个特字反映的就是各个编程语言自身的&quot;独特个性&quot;，这涉及的点比较多，简单列举一些。</p><p><strong>编程模式</strong></p><p>比较流行的编程模式大概有：</p><p>面向对象编程，主要是封装、继承、多态；函数式编程，主要是应用 Lambda；过程式编程，可以理解为实现需求功能的特定步骤。</p><p>每种编程模式都有一定的道理，我从不认为只有面向对象编程才是王道。</p><p>Java 是面向对象语言，从 Java8 开始也支持函数编程（引入 Lambda 表达式）；C++ 可以算是半面向对象，半面向过程式语言。</p><p><strong>语言自身特性</strong></p><p>每个语言自身都有一些重要特性需要了解。例如，学习 C、C++，你必须了解内存的申请和释放，了解指针、引用。而学习 Java，你需要了解 JVM，垃圾回收机制。学习 Javascript，你需要了解 DOM 操作等。</p><h3 id="代码组织、模块加载、库管理" tabindex="-1"><a class="header-anchor" href="#代码组织、模块加载、库管理" aria-hidden="true">#</a> 代码组织、模块加载、库管理</h3><p>一个程序一般都有很多个源代码文件。这就会引入这些问题：如何将代码文件组织起来？如何根据业务需要，选择将部分模块启动时进行加载，部分模块使用懒加载（或者热加载）？</p><p>最基本的引用文件就不提了，如 C、C++的#include，Java 的 import 等。</p><p>针对代码组织、模块加载、库管理这些问题，不同语言会有不同的解决方案。</p><p>如 Java 可以用 maven、gradle 管理项目依赖、组织代码结构；Javascript （包括 Nodejs、jquery、react 等等库）可以用 npm、yarn 管理依赖，用 webpack 等工具管理模块加载。</p><h3 id="容错处理" tabindex="-1"><a class="header-anchor" href="#容错处理" aria-hidden="true">#</a> 容错处理</h3><p>程序总难免会有 bug。</p><p>所以为了代码健壮性也好，为了方便定位问题也好，代码中需要有容错处理。常见的手段有：</p><ul><li>异常</li><li>断言</li><li>日志</li><li>调试</li><li>单元测试</li></ul><h3 id="输入输出和文件处理" tabindex="-1"><a class="header-anchor" href="#输入输出和文件处理" aria-hidden="true">#</a> 输入输出和文件处理</h3><p>这块知识比较繁杂。建议提纲挈领的学习一下，理解基本概念，比如输入输出流、管道等等。至于 API，用到的时候再查一下即可。</p><h3 id="回调机制" tabindex="-1"><a class="header-anchor" href="#回调机制" aria-hidden="true">#</a> 回调机制</h3><p>每种语言实现回调的方式有所不同，如 .Net 的 delegate （大量被用于 WinForm 程序）；Javascript 中函数天然支持回调：Javascript 函数允许传入另一个函数作为入参，然后在方法中调用它。其它语言的回调方式不一一列举。</p><h3 id="序列化和反序列化" tabindex="-1"><a class="header-anchor" href="#序列化和反序列化" aria-hidden="true">#</a> 序列化和反序列化</h3><p>首先需要了解的是，序列化和反序列化的作用是为了在不同平台之间传输对象。</p><p>其次，要知道序列化存在多种方式，不同编程语言可能有多种方案。根据应用的序列化方式，选择性了解即可。</p><h3 id="进阶特性" tabindex="-1"><a class="header-anchor" href="#进阶特性" aria-hidden="true">#</a> 进阶特性</h3><p>以下学习内容属于进阶性内容。可以根据开发需要去学习、掌握。需要注意的是，学习这些特性的态度应该是不学则已，学则死磕。因为半懂半不懂，特别容易引入问题。</p><p><em>对于半桶水的同学，我想说：放过自己，也放过别人，活着不好吗？</em></p><ul><li><p>**并发编程：**好处多多，十分重要，但是并发代码容易出错，且出错难以定位。要学习还是要花很大力气的，需要了解大量知识，如：进程、线程、同步、异步、读写锁等等。</p></li><li><p><strong>反射</strong> - 让你可以动态编程（慎用）。</p></li><li><p><strong>泛型</strong> - 集合（或者叫容器）的基石。精通泛型，能大大提高你的代码效率。</p></li><li><p><strong>元数据</strong> - 描述数据的数据。Java 中叫做注解。</p></li></ul><h3 id="库和框架" tabindex="-1"><a class="header-anchor" href="#库和框架" aria-hidden="true">#</a> 库和框架</h3><p>学习一门编程语言，难免需要用到围绕它构建的技术生态圈——库和框架。这方面知识范围太庞大，根据实际应用领域去学习吧。比如搞 JavaWeb，你多多少少肯定要用到 Spring、Mybatis、Hibernate、Shiro 等大量开发框架；如果做 Javascript 前端，你可能会用到 React、Vue、Angular 、jQuery 等库或框架。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>总结以上，编程语言学习的道路是任重而道远的，未来是光明的。</p><p>最后一句话与君共勉：路漫漫兮其修远，吾将上下而求索。</p>',55),d=[h];function n(t,l){return e(),r("div",null,d)}const o=a(i,[["render",n],["__file","index.html.vue"]]);export{o as default};
