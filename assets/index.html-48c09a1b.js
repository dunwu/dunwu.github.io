import{_ as E}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as B,c as i,a as e,d as n,w as l,b as a,e as h}from"./app-9cc2d019.js";const s={},d=h('<h1 id="java-构建" tabindex="-1"><a class="header-anchor" href="#java-构建" aria-hidden="true">#</a> Java 构建</h1><blockquote><p>Java 项目需要通过 <strong>构建工具</strong> 来管理项目依赖，完成编译、打包、发布、生成 JavaDoc 等任务。</p><ul><li>目前最主流的构建工具是 Maven，它的功能非常强大。</li><li>Gradle 号称是要替代 Maven 等构件工具，它的版本管理确实简洁，但是需要学习 Groovy，学习成本比 Maven 高。</li><li>Ant 功能比 Maven 和 Gradle 要弱，现代 Java 项目基本不用了，但也有一些传统的 Java 项目还在使用。</li></ul></blockquote><h2 id="📖-内容" tabindex="-1"><a class="header-anchor" href="#📖-内容" aria-hidden="true">#</a> 📖 内容</h2><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h3>',4),u=e("h3",{id:"ant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ant","aria-hidden":"true"},"#"),a(" Ant")],-1),c=e("h2",{id:"📚-资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),a(" 📚 资料")],-1),_=e("strong",null,"官网",-1),v={href:"https://github.com/apache/maven",target:"_blank",rel:"noopener noreferrer"},A={href:"https://maven.apache.org/ref/current",target:"_blank",rel:"noopener noreferrer"},f={href:"http://ant.apache.org/manual/index.html",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"书籍",-1),p={href:"https://book.douban.com/subject/5345682/",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"🚪-传送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),a(" 🚪 传送")],-1),b={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function x(g,k){const t=o("RouterLink"),r=o("ExternalLinkIcon");return B(),i("div",null,[d,e("ul",null,[e("li",null,[n(t,{to:"/01.Java/11.%E8%BD%AF%E4%BB%B6/01.%E6%9E%84%E5%BB%BA/01.Maven/01.Maven%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html"},{default:l(()=>[a("Maven 快速入门")]),_:1})]),e("li",null,[n(t,{to:"/01.Java/11.%E8%BD%AF%E4%BB%B6/01.%E6%9E%84%E5%BB%BA/01.Maven/02.Maven%E6%95%99%E7%A8%8B%E4%B9%8Bpom.xml%E8%AF%A6%E8%A7%A3.html"},{default:l(()=>[a("Maven 教程之 pom.xml 详解")]),_:1})]),e("li",null,[n(t,{to:"/01.Java/11.%E8%BD%AF%E4%BB%B6/01.%E6%9E%84%E5%BB%BA/01.Maven/03.Maven%E6%95%99%E7%A8%8B%E4%B9%8Bsettings.xml%E8%AF%A6%E8%A7%A3.html"},{default:l(()=>[a("Maven 教程之 settings.xml 详解")]),_:1})]),e("li",null,[n(t,{to:"/01.Java/11.%E8%BD%AF%E4%BB%B6/01.%E6%9E%84%E5%BB%BA/01.Maven/04.Maven%E5%AE%9E%E6%88%98%E9%97%AE%E9%A2%98%E5%92%8C%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.html"},{default:l(()=>[a("Maven 实战问题和最佳实践")]),_:1})]),e("li",null,[n(t,{to:"/01.Java/11.%E8%BD%AF%E4%BB%B6/01.%E6%9E%84%E5%BB%BA/01.Maven/05.Maven%E6%95%99%E7%A8%8B%E4%B9%8B%E5%8F%91%E5%B8%83jar%E5%88%B0%E7%A7%81%E6%9C%8D%E6%88%96%E4%B8%AD%E5%A4%AE%E4%BB%93%E5%BA%93.html"},{default:l(()=>[a("Maven 教程之发布 jar 到私服或中央仓库")]),_:1})]),e("li",null,[n(t,{to:"/01.Java/11.%E8%BD%AF%E4%BB%B6/01.%E6%9E%84%E5%BB%BA/01.Maven/06.Maven%E6%8F%92%E4%BB%B6%E4%B9%8B%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5.html"},{default:l(()=>[a("Maven 插件之代码检查")]),_:1})])]),u,e("ul",null,[e("li",null,[n(t,{to:"/01.Java/11.%E8%BD%AF%E4%BB%B6/01.%E6%9E%84%E5%BB%BA/02.Ant.html"},{default:l(()=>[a("Ant 简易教程")]),_:1})])]),c,e("ul",null,[e("li",null,[_,e("ul",null,[e("li",null,[e("a",v,[a("Maven Github"),n(r)])]),e("li",null,[e("a",A,[a("Maven 官方文档"),n(r)])]),e("li",null,[e("a",f,[a("Ant 官方手册"),n(r)])])])]),e("li",null,[m,e("ul",null,[e("li",null,[e("a",p,[a("《Maven 实战》"),n(r)])])])])]),M,e("p",null,[a("◾ 💧 "),e("a",b,[a("钝悟的 IT 知识图谱"),n(r)]),a(" ◾")])])}const D=E(s,[["render",x],["__file","index.html.vue"]]);export{D as default};
