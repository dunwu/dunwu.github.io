import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as o,a as e,b as n,e as l,f as s}from"./app-eab0d091.js";const h={},d=s('<h1 id="jvm-体系结构" tabindex="-1"><a class="header-anchor" href="#jvm-体系结构" aria-hidden="true">#</a> JVM 体系结构</h1><blockquote><p>JVM 能跨平台工作，主要是由于 JVM 屏蔽了与各个计算机平台相关的软件、硬件之间的差异。</p></blockquote><h2 id="jvm-简介" tabindex="-1"><a class="header-anchor" href="#jvm-简介" aria-hidden="true">#</a> JVM 简介</h2><h3 id="计算机体系结构" tabindex="-1"><a class="header-anchor" href="#计算机体系结构" aria-hidden="true">#</a> 计算机体系结构</h3><p>真实的计算机体系结构的核心部分包含：</p><ul><li>指令集</li><li>计算单元（CPU）</li><li>寻址方式</li><li>寄存器</li><li>存储单元</li></ul><h3 id="jvm-体系结构简介" tabindex="-1"><a class="header-anchor" href="#jvm-体系结构简介" aria-hidden="true">#</a> JVM 体系结构简介</h3><p>JVM 体系结构与计算机体系结构相似，它的核心部分包含：</p><ul><li>JVM 指令集</li><li>类加载器</li><li>执行引擎 - 相当于 JVM 的 CPU</li><li>内存区 - JVM 的存储</li><li>本地方法调用 - 调用 C/C++ 实现的本地方法</li></ul><h2 id="hotspot-架构" tabindex="-1"><a class="header-anchor" href="#hotspot-架构" aria-hidden="true">#</a> Hotspot 架构</h2><p>Hotspot 是最流行的 JVM。</p><p>Java 虚拟机的主要组件，包括<strong>类加载器</strong>、<strong>运行时数据区</strong>和<strong>执行引擎</strong>。</p><p>Hotspot 虚拟机拥有一个架构，它支持强大特性和能力的基础平台，支持实现高性能和强大的可伸缩性的能力。举个例子，Hotspot 虚拟机 JIT 编译器生成动态的优化，换句话说，它们在 Java 应用执行期做出优化，为底层系统架构生成高性能的本地机器指令。另外，经过它的运行时环境和多线程垃圾回收成熟的进化和连续的设计， Hotspot 虚拟机在高可用计算系统上产出了高伸缩性。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/jvm/jvm-hotspot-architecture.png"></div><h3 id="hotspot-关键组件" tabindex="-1"><a class="header-anchor" href="#hotspot-关键组件" aria-hidden="true">#</a> Hotspot 关键组件</h3><p>Java 虚拟机有三个组件关注着什么时候进行性能优化，堆空间是对象所存储的地方，这个区域被启动时选择的垃圾回收器管理，大部分调优选项与调整堆大小和根据你的情况选择最适当的垃圾收集器相关。即时编译器对性能也有很大的影响，但是使用新版本的 Java 虚拟机时很少需要调整。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/jvm/jvm-hotspot-key-components.png"></div><h3 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h3><p>Java 虚拟机的性能指标主要有两点：</p><ul><li><strong>停顿时间</strong> - 响应延迟是指一个应用回应一个请求的速度有多快。对关注响应能力的应用来说，长暂停时间是不可接受的，重点是在短的时间周期内能做出响应。 <ul><li>桌面 UI 响应事件的速度</li><li>网站返回网页的速度</li><li>数据查询返回的速度</li></ul></li><li><strong>吞吐量</strong> - 吞吐量关注在特定的时间周期内一个应用的工作量的最大值。对关注吞吐量的应用来说长暂停时间是可以接受的。由于高吞吐量的应用关注的基准在更长周期时间上，所以快速响应时间不在考虑之内。 <ul><li>给定时间内完成事务的数量</li><li>一小时内批处理程序完成的工作数量</li><li>一小时内数据查询完成的数量</li></ul></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',21),c={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"};function p(u,v){const a=i("ExternalLinkIcon");return r(),o("div",null,[d,e("ul",null,[e("li",null,[e("a",c,[n("《深入理解 Java 虚拟机》"),l(a)])])])])}const f=t(h,[["render",p],["__file","index.html.vue"]]);export{f as default};
