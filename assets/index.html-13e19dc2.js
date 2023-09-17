import{_}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c,a as e,d as t,w as n,b as o}from"./app-4f05975a.js";const r={},i=e("h1",{id:"jvm-教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jvm-教程","aria-hidden":"true"},"#"),o(" JVM 教程")],-1),h=e("blockquote",null,[e("p",null,"【Java 虚拟机】总结、整理了个人对于 JVM 的学习、应用心得。")],-1),u=e("h2",{id:"📖-内容",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📖-内容","aria-hidden":"true"},"#"),o(" 📖 内容")],-1),J=e("code",null,"程序计数器",-1),E=e("code",null,"虚拟机栈",-1),f=e("code",null,"本地方法栈",-1),m=e("code",null,"堆",-1),v=e("code",null,"方法区",-1),M=e("code",null,"运行时常量池",-1),V=e("code",null,"直接内存",-1),p=e("code",null,"OutOfMemoryError",-1),b=e("code",null,"StackOverflowError",-1),B=e("code",null,"GC Roots",-1),g=e("code",null,"Serial",-1),k=e("code",null,"Parallel",-1),A=e("code",null,"CMS",-1),C=e("code",null,"G1",-1),j=e("code",null,"Minor GC",-1),x=e("code",null,"Full GC",-1),S=e("code",null,"ClassLoader",-1),w=e("code",null,"双亲委派",-1),D=e("code",null,"bytecode",-1),G=e("code",null,"asm",-1),L=e("code",null,"javassist",-1),F=e("code",null,"jps",-1),I=e("code",null,"jstat",-1),O=e("code",null,"jmap",-1),R=e("code",null,"jstack",-1),N=e("code",null,"jhat",-1),P=e("code",null,"jinfo",-1),U=e("code",null,"jconsole",-1),y=e("code",null,"jvisualvm",-1),T=e("code",null,"MAT",-1),q=e("code",null,"JProfile",-1),z=e("code",null,"Arthas",-1),H=e("code",null,"配置",-1),K=e("code",null,"调优",-1),Q=e("code",null,"CPU",-1),W=e("code",null,"内存",-1),X=e("code",null,"磁盘",-1),Y=e("code",null,"网络",-1),Z=e("code",null,"GC",-1),$=e("h2",{id:"📚-资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),o(" 📚 资料")],-1),ee={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://time.geekbang.org/column/intro/82",target:"_blank",rel:"noopener noreferrer"},te={href:"https://time.geekbang.org/column/intro/100028001",target:"_blank",rel:"noopener noreferrer"},le={href:"https://time.geekbang.org/column/intro/100047701",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://time.geekbang.org/column/intro/100010301",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://www.douban.com/doulist/2545443/",target:"_blank",rel:"noopener noreferrer"},se=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),o(" 🚪 传送")],-1),_e={href:"https://github.com/dunwu/javacore",target:"_blank",rel:"noopener noreferrer"},de={href:"https://dunwu.github.io/blog/",target:"_blank",rel:"noopener noreferrer"};function ce(re,ie){const l=s("RouterLink"),a=s("ExternalLinkIcon");return d(),c("div",null,[i,h,u,e("ul",null,[e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/01.JVM%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html"},{default:n(()=>[o("JVM 体系结构")]),_:1})]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/02.JVM%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html"},{default:n(()=>[o("JVM 内存区域")]),_:1}),o(" - 关键词："),J,o("、"),E,o("、"),f,o("、"),m,o("、"),v,o("、"),M,o("、"),V,o("、"),p,o("、"),b]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/03.JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86.html"},{default:n(()=>[o("JVM 垃圾收集")]),_:1}),o(" - 关键词："),B,o("、"),g,o("、"),k,o("、"),A,o("、"),C,o("、"),j,o("、"),x]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/04.JVM%E7%B1%BB%E5%8A%A0%E8%BD%BD.html"},{default:n(()=>[o("JVM 类加载")]),_:1}),o(" - 关键词："),S,o("、"),w]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/05.JVM%E5%AD%97%E8%8A%82%E7%A0%81.html"},{default:n(()=>[o("JVM 字节码")]),_:1}),o(" - 关键词："),D,o("、"),G,o("、"),L]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/11.JVM%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[o("JVM 命令行工具")]),_:1}),o(" - 关键词："),F,o("、"),I,o("、"),O,o(" 、"),R,o("、"),N,o("、"),P]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/12.JVM_GUI%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[o("JVM GUI 工具")]),_:1}),o(" - 关键词："),U,o("、"),y,o("、"),T,o("、"),q,o("、"),z]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/21.JVM%E5%AE%9E%E6%88%98.html"},{default:n(()=>[o("JVM 实战")]),_:1}),o(" - 关键词："),H,o("、"),K]),e("li",null,[t(l,{to:"/01.Java/01.JavaSE/06.JVM/22.Java%E6%95%85%E9%9A%9C%E8%AF%8A%E6%96%AD.html"},{default:n(()=>[o("Java 故障诊断")]),_:1}),o(" - 关键词："),Q,o("、"),W,o("、"),X,o("、"),Y,o("、"),Z])]),$,e("ul",null,[e("li",null,[e("a",ee,[o("《深入理解 Java 虚拟机》"),t(a)])]),e("li",null,[e("a",oe,[o("《Java 核心技术面试精讲》"),t(a)])]),e("li",null,[e("a",te,[o("《Java 性能调优实战》"),t(a)])]),e("li",null,[e("a",le,[o("《Java 业务开发常见错误 100 例》"),t(a)])]),e("li",null,[e("a",ne,[o("深入拆解 Java 虚拟机"),t(a)])]),e("li",null,[e("a",ae,[o("从表到里学习 JVM 实现"),t(a)])])]),se,e("p",null,[o("◾ 🏠 "),e("a",_e,[o("JAVACORE 首页"),t(a)]),o(" ◾ 🎯 "),e("a",de,[o("钝悟的博客"),t(a)]),o(" ◾")])])}const Je=_(r,[["render",ce],["__file","index.html.vue"]]);export{Je as default};
