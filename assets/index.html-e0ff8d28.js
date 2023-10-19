import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as s,a as e,b as a,d as o,w as r,e as d}from"./app-a0e98cac.js";const h={},u=e("h1",{id:"java-并发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-并发","aria-hidden":"true"},"#"),a(" Java 并发")],-1),_=e("blockquote",null,[e("p",null,"Java 并发总结、整理 Java 并发编程相关知识点。"),e("p",null,"并发编程并非 Java 语言所独有，而是一种成熟的编程范式，Java 只是用自己的方式实现了并发工作模型。学习 Java 并发编程，应该先熟悉并发的基本概念，然后进一步了解并发的特性以及其特性所面临的问题。掌握了这些，当学习 Java 并发工具时，才会明白它们各自是为了解决什么问题，为什么要这样设计。通过这样由点到面的学习方式，更容易融会贯通，将并发知识形成体系化。")],-1),v=e("h2",{id:"📖-内容",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📖-内容","aria-hidden":"true"},"#"),a(" 📖 内容")],-1),E={id:"java-并发简介",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#java-并发简介","aria-hidden":"true"},"#",-1),g=d('<blockquote><p><strong>关键词：<code>进程</code>、<code>线程</code>、<code>安全性</code>、<code>活跃性</code>、<code>性能</code>、<code>死锁</code>、<code>饥饿</code>、<code>上下文切换</code></strong></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200701113445.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',2),b={id:"java-线程基础",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#java-线程基础","aria-hidden":"true"},"#",-1),B=d('<blockquote><p><strong>关键词：<code>Thread</code>、<code>Runnable</code>、<code>Callable</code>、<code>Future</code>、<code>wait</code>、<code>notify</code>、<code>notifyAll</code>、<code>join</code>、<code>sleep</code>、<code>yeild</code>、<code>线程状态</code>、<code>线程通信</code></strong></p></blockquote><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/snap/20200630221707.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/javacore/concurrent/java-thread_1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',3),J={id:"java-并发核心机制",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#java-并发核心机制","aria-hidden":"true"},"#",-1),k=e("blockquote",null,[e("p",null,[e("strong",null,[a("关键词："),e("code",null,"synchronized"),a("、"),e("code",null,"volatile"),a("、"),e("code",null,"CAS"),a("、"),e("code",null,"ThreadLocal")])])],-1),j={id:"java-并发锁",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#java-并发锁","aria-hidden":"true"},"#",-1),A=e("blockquote",null,[e("p",null,[e("strong",null,[a("关键词："),e("code",null,"AQS"),a("、"),e("code",null,"ReentrantLock"),a("、"),e("code",null,"ReentrantReadWriteLock"),a("、"),e("code",null,"Condition")])])],-1),F={id:"java-原子类",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#java-原子类","aria-hidden":"true"},"#",-1),q=e("blockquote",null,[e("p",null,[e("strong",null,[a("关键词："),e("code",null,"CAS"),a("、"),e("code",null,"Atomic")])])],-1),w={id:"java-并发容器",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#java-并发容器","aria-hidden":"true"},"#",-1),y=e("blockquote",null,[e("p",null,[e("strong",null,[a("关键词："),e("code",null,"ConcurrentHashMap"),a("、"),e("code",null,"CopyOnWriteArrayList")])])],-1),L={id:"java-线程池",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#java-线程池","aria-hidden":"true"},"#",-1),z=e("blockquote",null,[e("p",null,[e("strong",null,[a("关键词："),e("code",null,"Executor"),a("、"),e("code",null,"ExecutorService"),a("、"),e("code",null,"ThreadPoolExecutor"),a("、"),e("code",null,"Executors")])])],-1),V={id:"java-并发工具类",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#java-并发工具类","aria-hidden":"true"},"#",-1),T=e("blockquote",null,[e("p",null,[e("strong",null,[a("关键词："),e("code",null,"CountDownLatch"),a("、"),e("code",null,"CyclicBarrier"),a("、"),e("code",null,"Semaphore")])])],-1),D={id:"java-内存模型",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#java-内存模型","aria-hidden":"true"},"#",-1),H=d("<blockquote><p><strong>关键词：<code>JMM</code>、<code>volatile</code>、<code>synchronized</code>、<code>final</code>、<code>Happens-Before</code>、<code>内存屏障</code></strong></p></blockquote>",1),I={id:"forkjoin-框架",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#forkjoin-框架","aria-hidden":"true"},"#",-1),W=e("h2",{id:"📚-资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),a(" 📚 资料")],-1),P={href:"https://book.douban.com/subject/10484692/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://book.douban.com/subject/26591326/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://book.douban.com/subject/30412517/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://time.geekbang.org/column/intro/82",target:"_blank",rel:"noopener noreferrer"},X={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://time.geekbang.org/column/intro/100047701",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://time.geekbang.org/column/intro/100023901",target:"_blank",rel:"noopener noreferrer"},$=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),a(" 🚪 传送")],-1),ee={href:"https://github.com/dunwu/javacore",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function oe(te,ne){const t=c("RouterLink"),n=c("ExternalLinkIcon");return i(),s("div",null,[u,_,v,e("h3",E,[f,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/01.Java%E5%B9%B6%E5%8F%91%E7%AE%80%E4%BB%8B.html"},{default:r(()=>[a("Java 并发简介")]),_:1})]),g,e("h3",b,[p,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/02.Java%E7%BA%BF%E7%A8%8B%E5%9F%BA%E7%A1%80.html"},{default:r(()=>[a("Java 线程基础")]),_:1})]),B,e("h3",J,[m,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/03.Java%E5%B9%B6%E5%8F%91%E6%A0%B8%E5%BF%83%E6%9C%BA%E5%88%B6.html"},{default:r(()=>[a("Java 并发核心机制")]),_:1})]),k,e("h3",j,[x,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/04.Java%E9%94%81.html"},{default:r(()=>[a("Java 并发锁")]),_:1})]),A,e("h3",F,[S,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/05.Java%E5%8E%9F%E5%AD%90%E7%B1%BB.html"},{default:r(()=>[a("Java 原子类")]),_:1})]),q,e("h3",w,[C,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/06.Java%E5%B9%B6%E5%8F%91%E5%92%8C%E5%AE%B9%E5%99%A8.html"},{default:r(()=>[a("Java 并发容器")]),_:1})]),y,e("h3",L,[R,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/07.Java%E7%BA%BF%E7%A8%8B%E6%B1%A0.html"},{default:r(()=>[a("Java 线程池")]),_:1})]),z,e("h3",V,[N,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/08.Java%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7%E7%B1%BB.html"},{default:r(()=>[a("Java 并发工具类")]),_:1})]),T,e("h3",D,[M,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/09.Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html"},{default:r(()=>[a("Java 内存模型")]),_:1})]),H,e("h3",I,[O,a(),o(t,{to:"/01.Java/01.JavaSE/05.%E5%B9%B6%E5%8F%91/10.ForkJoin%E6%A1%86%E6%9E%B6.html"},{default:r(()=>[a("ForkJoin 框架")]),_:1})]),W,e("ul",null,[e("li",null,[e("a",P,[a("《Java 并发编程实战》"),o(n)])]),e("li",null,[e("a",Q,[a("《Java 并发编程的艺术》"),o(n)])]),e("li",null,[e("a",G,[a("《深入理解 Java 虚拟机》"),o(n)])]),e("li",null,[e("a",K,[a("《Effective Java》"),o(n)])]),e("li",null,[e("a",U,[a("《Java 核心技术面试精讲》"),o(n)])]),e("li",null,[e("a",X,[a("《Java 性能调优实战》"),o(n)])]),e("li",null,[e("a",Y,[a("《Java 业务开发常见错误 100 例》"),o(n)])]),e("li",null,[e("a",Z,[a("《Java 并发编程实战》"),o(n)])])]),$,e("p",null,[a("◾ 🏠 "),e("a",ee,[a("JAVACORE 首页"),o(n)]),a(" ◾ 🎯 "),e("a",ae,[a("钝悟的博客"),o(n)]),a(" ◾")])])}const ce=l(h,[["render",oe],["__file","index.html.vue"]]);export{ce as default};
