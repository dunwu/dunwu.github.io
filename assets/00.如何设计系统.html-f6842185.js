import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as l,a as t,b as e,d as a,e as h}from"./app-ee97b13a.js";const s={},c=h('<h1 id="如何设计系统" tabindex="-1"><a class="header-anchor" href="#如何设计系统" aria-hidden="true">#</a> 如何设计系统</h1><h2 id="系统设计过程" tabindex="-1"><a class="header-anchor" href="#系统设计过程" aria-hidden="true">#</a> 系统设计过程</h2><h3 id="步骤一、约束和用例" tabindex="-1"><a class="header-anchor" href="#步骤一、约束和用例" aria-hidden="true">#</a> 步骤一、约束和用例</h3><p>对于任何系统设计，第一件应该做的事是：阐明系统的约束并确定系统需要满足哪些用例。</p><p>永远不要假设没有明确说明的事情。一定要尽力收集、理解需求，并设计一个很好地涵盖这些要求的解决方案。</p><p>例如，URL 缩短服务可能只为几千个用户提供服务，但每个用户都可能共享数百万个 URL。它可能旨在处理对缩短的 URL 的数百万次点击或数十次点击。该服务可能必须提供有关每个缩短的 URL 的大量统计信息（这会增加您的数据大小），或者可能根本不需要统计信息。</p><p>您还必须考虑预期会发生的用例。您的系统将根据其预期功能进行设计。不要忘记确保你知道面试官一开始没有告诉你的所有要求。</p><h3 id="步骤二、顶层设计" tabindex="-1"><a class="header-anchor" href="#步骤二、顶层设计" aria-hidden="true">#</a> 步骤二、顶层设计</h3><p>一旦确定了要设计的系统的范围，接下来就要做顶层设计：概述系统架构中所需的所有重要组件。</p><p>此时，应该绘制出主要组件以及它们之间的连接。通常，这种顶层设计是基于主流技术的组合。这就要求设计必须熟悉这些技术，了解其利弊以及适合使用的场景。</p><h3 id="步骤三、分析瓶颈" tabindex="-1"><a class="header-anchor" href="#步骤三、分析瓶颈" aria-hidden="true">#</a> 步骤三、分析瓶颈</h3><p>顶层设计很可能会遇到一个或多个瓶颈。这完全没问题，不要指望一个新系统可以立即处理世界上的所有负载。它只需要可扩展，以便您能够使用一些标准工具和技术对其进行改进。</p><p>现在有了顶层设计，就要考虑这些组件在系统扩展时面临的瓶颈。也许，系统需要一个负载均衡器和集群来处理用户请求。或者，由于数据容量庞大，以至于需要将数据库分库分表（分布在多台机器上）。这些方案有什么利弊，是否适用？数据库是否太慢，是否需要一些内存缓存？</p><p>通常每个解决方案都是某种权衡和取舍。改变某事会使其他事情恶化。然而，重要的是能够讨论这些权衡，并根据定义的约束和用例来衡量它们对系统的影响。</p><p>一旦分析清楚核心瓶颈，就可以着手在下一步中去解决它们。</p><h3 id="步骤四、扩展设计" tabindex="-1"><a class="header-anchor" href="#步骤四、扩展设计" aria-hidden="true">#</a> 步骤四、扩展设计</h3><p>首先，你需要了解以下技术手段：</p><ul><li>垂直扩展</li><li>水平罗占</li><li>缓存</li><li>负载均衡</li><li>数据库复制</li><li>数据库分区</li><li>异步</li><li>NoSql</li></ul><p>在系统设计方面，回顾现实中的架构非常有用。注意使用了哪些技术。继续研究每一项新技术，看看它解决了什么问题，它的替代品是什么，它擅长的地方，以及失败的地方。</p><p>一切都是权衡的结果——这是系统设计中最基本的概念之一。</p><p>一些推荐的学习资料</p>',21),d={href:"http://highscalability.com/blog/2017/10/23/one-model-at-a-time-integrating-and-running-deep-learning-mo.html",target:"_blank",rel:"noopener noreferrer"},p={href:"http://highscalability.com/blog/2016/10/12/lessons-learned-from-scaling-uber-to-2000-engineers-1000-ser.html",target:"_blank",rel:"noopener noreferrer"},_={href:"http://highscalability.com/blog/2016/6/27/how-facebook-live-streams-to-800000-simultaneous-viewers.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://highscalability.com/blog/2016/6/15/the-image-optimization-technology-that-serves-millions-of-re.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://highscalability.com/blog/2016/4/20/how-twitter-handles-3000-images-per-second.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.youtube.com/watch?v=5cKTP36HVgI",target:"_blank",rel:"noopener noreferrer"},g={href:"http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.infoq.com/presentations/Twitter-Timeline-Scalability",target:"_blank",rel:"noopener noreferrer"},w={href:"http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.youtube.com/watch?v=w5WVu624fY8",target:"_blank",rel:"noopener noreferrer"},y={href:"http://highscalability.com/youtube-architecture",target:"_blank",rel:"noopener noreferrer"},v={href:"http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html",target:"_blank",rel:"noopener noreferrer"},x={href:"http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html",target:"_blank",rel:"noopener noreferrer"},T={href:"http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html",target:"_blank",rel:"noopener noreferrer"},L=t("h2",{id:"参考资料",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),e(" 参考资料")],-1),U={href:"https://github.com/donnemartin/system-design-primer",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.hiredintech.com/courses/system-design",target:"_blank",rel:"noopener noreferrer"};function E(N,S){const r=n("ExternalLinkIcon");return i(),l("div",null,[c,t("ul",null,[t("li",null,[t("a",d,[e("生产中的深度学习"),a(r)]),e("：关于 EyeEm 如何构建在大量图像上运行多个深度学习模型的生产系统的精彩故事")]),t("li",null,[t("a",p,[e("Uber"),a(r)]),e("：一篇关于 Uber 如何快速扩展的好文章，关于将您的服务分解为分布在许多存储库中的许多微服务。")]),t("li",null,[t("a",_,[e("Facebook"),a(r)]),e("：Facebook 如何在直播中同时处理 800,000 名观众")]),t("li",null,[t("a",m,[e("Kraken.io"),a(r)]),e("：如何大规模缩放图像优化，本文将更详细地看一些具体使用的硬件方案，以及部署、监控等重要方面")]),t("li",null,[t("a",b,[e("Twitter"),a(r)]),e("：Twitter 如何处理每秒 3,000 张图片上传以及为什么它使用的旧方式现在行不通")]),t("li",null,[e("最后，Twitter 子组件的一些很好的例子：存储数据（"),t("a",f,[e("video"),a(r)]),e(" | "),t("a",g,[e("text"),a(r)]),e("）和时间轴（"),t("a",u,[e("video"),a(r)]),e(" | "),t("a",w,[e("text"),a(r)]),e("）。")]),t("li",null,[e("有关更高级的示例，请查看 Google、Youtube（"),t("a",k,[e("video"),a(r)]),e(" | "),t("a",y,[e("text"),a(r)]),e("）、"),t("a",v,[e("Tumblr"),a(r)]),e("、"),t("a",x,[e("StackOverflow"),a(r)]),e(" 和 "),t("a",T,[e("Datashift"),a(r)]),e(" 上的这些帖子。")])]),L,t("ul",null,[t("li",null,[t("a",U,[e("system-design-primer"),a(r)])]),t("li",null,[t("a",V,[e("System Design for Tech Interviews"),a(r)])])])])}const q=o(s,[["render",E],["__file","00.如何设计系统.html.vue"]]);export{q as default};
