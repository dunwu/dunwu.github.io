import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as a,a as t,b as e,d as n,e as r}from"./app-ee97b13a.js";const h={},c=r('<h1 id="系统测试架构" tabindex="-1"><a class="header-anchor" href="#系统测试架构" aria-hidden="true">#</a> 系统测试架构</h1><blockquote><p>软件测试描述一种用来促进鉴定软件的正确性、完整性、安全性和质量的过程。软件测试的经典定义是：在规定的条件下对程序进行操作，以发现程序错误，衡量软件质量，并对其是否能满足设计要求进行评估的过程。</p><p>现代软件开发项目中，分工明确，基本上都会有研发、测试、QA 等角色。不同角色由于关注的视角不同，测试目标和测试方法也不完全相同。本文主要从研发、测试的视角去考量软件测试技术。</p><p>注意：</p><ul><li>为了方便，只有测试人员需要关注的测试点用【测试】标注；</li><li>而只有研发人员需要关注的测试点用【研发】标注；</li><li>都需要关注的测试点则不作标注。</li></ul></blockquote><h2 id="测试方法分类" tabindex="-1"><a class="header-anchor" href="#测试方法分类" aria-hidden="true">#</a> 测试方法分类</h2><h3 id="从测试设计方法分类" tabindex="-1"><a class="header-anchor" href="#从测试设计方法分类" aria-hidden="true">#</a> 从测试设计方法分类</h3><ul><li><strong>黑盒测试【测试】</strong> - 把软件系统当作一个“黑箱”，无法了解或使用系统的内部结构及知识。从软件的行为，而不是内部结构出发来设计测试。</li><li><strong>白盒测试【研发】</strong> - 设计者可以看到软件系统的内部结构，并且使用软件的内部知识来指导测试数据及方法的选择。</li><li><strong>灰盒测试</strong> - 介于黑盒和白盒之间。</li></ul><blockquote><p>小结：</p><ul><li>黑河测试通常针对的是软件的行为或功能，一般是测试人员主要关注的。</li><li>白盒测试通常则需要对软件有一定程度的了解，一般是开发人员所关注的。</li><li>灰盒测试通常是为了测试软件在特定的场景下的表现，而非主场景。</li></ul></blockquote><h3 id="从测试的目的分类" tabindex="-1"><a class="header-anchor" href="#从测试的目的分类" aria-hidden="true">#</a> 从测试的目的分类</h3><h4 id="功能测试" tabindex="-1"><a class="header-anchor" href="#功能测试" aria-hidden="true">#</a> 功能测试</h4>',8),_=t("strong",null,"单元测试（Unit Test）",-1),d={href:"https://github.com/junit-team/junit4",target:"_blank",rel:"noopener noreferrer"},u=t("strong",null,"junit4",-1),g={href:"https://github.com/junit-team/junit5",target:"_blank",rel:"noopener noreferrer"},p=t("strong",null,"junit5",-1),f={href:"https://github.com/mockito/mockito",target:"_blank",rel:"noopener noreferrer"},b=t("strong",null,"mockito",-1),m={href:"https://github.com/joel-costigliola/assertj-core",target:"_blank",rel:"noopener noreferrer"},k=t("strong",null,"assertj-core",-1),x=r("<li><strong>功能测试（Functional Test）</strong> - 验证模块的功能。【测试】</li><li><strong>集成测试（Integration Test）</strong> - 验证几个互相有依赖关系的模块的功能。【测试】</li><li><strong>场景测试（Scenario Test）</strong>- 验证几个模块是否能完成一个用户场景。【测试】</li><li><strong>系统测试（System Test）</strong> - 对于整个系统功能的测试。【测试】</li><li><strong>Alpha 测试</strong> - 软件测试人员在真实用户环境中对软件进行全面的测试。【测试】</li><li><strong>Beta 测试</strong> - 也叫公测，是真实的用户在真实的环境中进行的测试。</li>",6),j=t("h4",{id:"非功能测试",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#非功能测试","aria-hidden":"true"},"#"),e(" 非功能测试")],-1),T=t("li",null,[t("strong",null,"压力测试（Stress test）"),e(" - 验证软件在超过负载设计的情况下仍能返回正确的结果，没有崩溃")],-1),v=t("li",null,[t("strong",null,"负载测试（Load test）"),e(" - 测试软件在负载情况下能否正常工作")],-1),w=t("strong",null,"性能测试（Performance test）",-1),y={href:"https://jmeter.apache.org/",target:"_blank",rel:"noopener noreferrer"},S=t("strong",null,"JMeter",-1),q=r("<li><strong>软件辅助功能测试（Accessibility test</strong>） - 测试软件是否向残疾用户提供足够的辅助功能</li><li><strong>本地化/全球化测试（Localization/Globalization</strong>）</li><li><strong>兼容性测试（Compatibility Test）</strong></li><li><strong>配置测试（Configuration Test）</strong> - 测试软件在各种配置下能否正常工作</li><li><strong>可用性测试（Usability Test）</strong> – 测试软件是否好用</li><li><strong>安全性测试（Security Test）</strong></li>",6),B=t("h2",{id:"参考资料",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),e(" 参考资料")],-1),J={href:"https://www.cnblogs.com/TankXiao/archive/2012/02/20/2347016.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.xncoding.com/2018/01/07/java/jmh.html",target:"_blank",rel:"noopener noreferrer"};function N(V,A){const o=i("ExternalLinkIcon");return s(),a("div",null,[c,t("ul",null,[t("li",null,[_,e(" - 在最低粒度的功能/参数上验证程序的准确性，比如测试一个函数的正确性。【研发】 "),t("ul",null,[t("li",null,[e("常用技术："),t("a",d,[u,n(o)]),e("、"),t("a",g,[p,n(o)]),e("、"),t("a",f,[b,n(o)]),e("、"),t("a",m,[k,n(o)])])])]),x]),j,t("ul",null,[T,v,t("li",null,[w,e(" - 测试软件的效能，是否提供满意的服务质量。 "),t("ul",null,[t("li",null,[e("常用技术："),t("a",y,[S,n(o)]),e("、JMH。")])])]),q]),B,t("ul",null,[t("li",null,[t("a",J,[e("软件测试 (一) 软件测试方法大汇总"),n(o)])]),t("li",null,[t("a",L,[e("Java 微基准测试框架 JMH"),n(o)])])])])}const I=l(h,[["render",N],["__file","09.系统测试架构.html.vue"]]);export{I as default};
