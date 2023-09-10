import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as n,c as r,a,b as d,d as o,e as s}from"./app-afc5da4f.js";const h={},l=s('<h1 id="《软件工程之美》笔记" tabindex="-1"><a class="header-anchor" href="#《软件工程之美》笔记" aria-hidden="true">#</a> 《软件工程之美》笔记</h1><h2 id="到底应该怎样理解软件工程" tabindex="-1"><a class="header-anchor" href="#到底应该怎样理解软件工程" aria-hidden="true">#</a> 到底应该怎样理解软件工程？</h2><p><strong>软件产品危机</strong>：软件产品质量低劣、软件维护工作量大、成本不断上升、进度不可控、程序人员无限度地增加。</p><p>软件工程，它是为研究和克服软件危机而生。</p><p><strong>软件工程的本质</strong>：用工程化方法去规范软件开发，让项目可以按时完成、成本可控、质量有保证。</p><p><strong>软件工程的核心</strong>：是围绕软件项目开发，对开发过程的组织，对方法的运用，对工具的使用。</p><p><strong>软件工程 = 过程 + 方法 + 工具。</strong></p><h2 id="工程思维-把每件事都当作一个项目来推进" tabindex="-1"><a class="header-anchor" href="#工程思维-把每件事都当作一个项目来推进" aria-hidden="true">#</a> 工程思维：把每件事都当作一个项目来推进</h2><p><strong>有目的、有计划、有步骤地解决问题的方法就是工程方法。</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712132650.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>工程方法通常会分成六个阶段：想法、概念、计划、设计、开发和发布。</p><ul><li>**想法：**想法阶段通常是想要解决问题。最开始问题通常是模糊的，所以需要清晰地定义好问题，研究其可行性，检查是否有可行的解决方案。</li><li>**概念：**概念阶段就是用图纸、草图、模型等方式，提出一些概念性的解决方案。这些方案可能有多个，最终会确定一个解决方案。</li><li>**计划：**计划阶段是关于如何实施的计划，通常会包含人员、任务、任务持续时间、任务的依赖关系，以及完成项目所需要的预算。</li><li>**设计：**设计阶段就是要针对产品需求，将解决方案进一步细化，设计整体架构和划分功能模块，作为分工合作和开发实施的一个依据和参考。</li><li>**开发：**开发阶段就是根据设计方案，将解决方案构建实施。开发阶段通常是一个迭代的过程，这个阶段通常会有构建、测试、调试和重新设计的迭代。</li><li>**发布：**将最终结果包括文档发布。</li></ul><h2 id="瀑布模型-像工厂流水线一样把软件开发分层化" tabindex="-1"><a class="header-anchor" href="#瀑布模型-像工厂流水线一样把软件开发分层化" aria-hidden="true">#</a> 瀑布模型：像工厂流水线一样把软件开发分层化</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712133102.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>瀑布模型把整个项目过程分成了六个主要阶段：</p><ul><li><strong>问题的定义及规划</strong>：这个阶段是需求方和开发方共同确定软件开发目标，同时还要做可行性研究，以确定项目可行。这个阶段会产生需求文档和可行性研究报告。</li><li><strong>需求分析</strong>：对需求方提出的所有需求，进行详细的分析。这个阶段一般需要和客户反复确认，以保证能充分理解客户需求。最终会形成需求分析文档。</li><li><strong>软件设计</strong>：根据需求分析的结果，对整个软件系统进行抽象和设计，如系统框架设计，数据库设计等等。最后会形成架构设计文档。</li><li><strong>程序编码</strong>：将架构设计和界面设计的结果转换成计算机能运行的程序代码。</li><li><strong>软件测试</strong>：在编码完成后，对可运行的结果对照需求分析文档进行严密的测试。如果测试发现问题，需要修复。最终测试完成后，形成测试报告。</li><li><strong>运行维护</strong>：在软件开发完成，正式运行投入使用。后续需要继续维护，修复错误和增加功能。交付时需要提供使用说明文档。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712133357.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="瀑布模型之外-还有哪些开发模型" tabindex="-1"><a class="header-anchor" href="#瀑布模型之外-还有哪些开发模型" aria-hidden="true">#</a> 瀑布模型之外，还有哪些开发模型？</h2><h3 id="快速原型模型" tabindex="-1"><a class="header-anchor" href="#快速原型模型" aria-hidden="true">#</a> 快速原型模型</h3><p><strong>快速原型模型，就是为了要解决客户的需求不明确和需求多变的问题。</strong></p><p>先迅速建造一个可以运行的软件原型，然后收集用户反馈，再反复修改确认，使开发出的软件能真正反映用户需求，这种开发模型就叫快速原型模型，也叫原型模型。</p><p>原型模型因为能快速修改，所以能快速对用户的反馈和变更作出响应，同时原型模型注重和客户的沟通，所以最终开发出来的软件能够真正反映用户的需求。</p><p>但这种快速原型开发往往是以牺牲质量为代价的。</p><h3 id="增量模型" tabindex="-1"><a class="header-anchor" href="#增量模型" aria-hidden="true">#</a> 增量模型</h3><p>增量模型是把待开发的软件系统模块化，然后在每个小模块的开发过程中，应用一个小瀑布模型，对这个模块进行需求分析、设计、编码和测试。相对瀑布模型而言，增量模型周期更短，不需要一次性把整个软件产品交付给客户，而是分批次交付。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712134154.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因为增量模型的根基是模块化，所以，**如果系统不能模块化，那么将很难采用增量模型的模式来开发。**另外，对模块的划分很抽象，这本身对于系统架构的水平是要求很高的。</p><p>基于这样的特点，增量模型主要适用于：<strong>需求比较清楚，能模块化的软件系统，并且可以按模块分批次交付。</strong></p><h3 id="迭代模型" tabindex="-1"><a class="header-anchor" href="#迭代模型" aria-hidden="true">#</a> 迭代模型</h3><p>迭代模型每次只设计和实现产品的一部分，然后逐步完成更多功能。每次设计和实现一个阶段叫做一个迭代。</p><p>在迭代模型中，整个项目被拆分成一系列小的迭代。通常一个迭代的时间都是固定的，不会太长，例如 2-4 周。每次迭代只实现一部分功能，做能在这个周期内完成的功能。</p><p>在一个迭代中都会包括需求分析、设计、实现和测试，类似于一个小瀑布模型。<strong>迭代结束时要完成一个可以运行的交付版本。</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712134329.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>增量模型是按照功能模块来拆分；而迭代模型则是按照时间来拆分，看单位时间内能完成多少功能。</strong></p><h3 id="v-模型" tabindex="-1"><a class="header-anchor" href="#v-模型" aria-hidden="true">#</a> V 模型</h3><p>V 模型适合外包项目。V 模型本质上还是瀑布模型，只不过它是更重视对每个阶段验收测试的过程模型。</p><p>针对从需求定义一直到编码阶段，每个阶段都有对应的测试验收。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712134518.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="螺旋模型" tabindex="-1"><a class="header-anchor" href="#螺旋模型" aria-hidden="true">#</a> 螺旋模型</h3><p>如果你现在要做一个风险很高的项目，客户可能随时不给你钱了。这种情况下，如果采用传统瀑布模型，无疑风险很高，可能做完的时候才发现客户给不了钱，损失就很大了！</p><p>这种情况，基于增量模型或者迭代模型进行开发，就可以有效降低风险。你需要注意的是，在每次交付的时候，要同时做一个风险评估，如果风险过大就不继续后续开发了，及时止损。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712134638.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这种强调风险，以风险驱动的方式完善项目的开发模型就是螺旋模型。</p><h2 id="敏捷开发到底是想解决什么问题" tabindex="-1"><a class="header-anchor" href="#敏捷开发到底是想解决什么问题" aria-hidden="true">#</a> 敏捷开发到底是想解决什么问题？</h2><p>敏捷开发是一套价值观和原则。</p><p>瀑布模型面向的是过程，而敏捷开发面向的是人。</p><h2 id="大厂都在用哪些敏捷方法-上" tabindex="-1"><a class="header-anchor" href="#大厂都在用哪些敏捷方法-上" aria-hidden="true">#</a> 大厂都在用哪些敏捷方法？（上）</h2><h3 id="一切工作任务围绕-ticket-开展" tabindex="-1"><a class="header-anchor" href="#一切工作任务围绕-ticket-开展" aria-hidden="true">#</a> 一切工作任务围绕 Ticket 开展</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220712135814.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>每一个任务的状态都可以被跟踪起来：什么时候开始做的，谁在做，做完没有。</li><li>整个团队在做什么一目了然。</li><li>Ticket 和敏捷开发中的 Backlog（任务清单）正好结合起来，通过 Ticket 可以收集管理整个项目的 Backlog 和当前 Sprint（迭代）的 Backlog。</li></ul><h3 id="基于-git-和-ci-的开发流程" tabindex="-1"><a class="header-anchor" href="#基于-git-和-ci-的开发流程" aria-hidden="true">#</a> 基于 Git 和 CI 的开发流程</h3><p>Git 本来只是源代码管理工具，但是其强大的分支管理和灵活的权限控制，结合一定的开发流程，却可以帮助你很好的控制代码质量。</p><h3 id="站立会议" tabindex="-1"><a class="header-anchor" href="#站立会议" aria-hidden="true">#</a> 站立会议</h3><ul><li>每个人轮流介绍一下，昨天干了什么事情，今天计划做什么事情，工作上有没有障碍无法推进。有问题，记录到“问题停车场”。</li><li>检查最近的 Ticket，甄别一下优先级。有需要讨论的先收集到问题停车场。</li><li>针对未讨论的问题展开讨论，能在会议时间内解决的问题，就马上解决，不能解决的会后再私下讨论或者再组织会议。</li></ul><h2 id="大厂都在用哪些敏捷方法-下" tabindex="-1"><a class="header-anchor" href="#大厂都在用哪些敏捷方法-下" aria-hidden="true">#</a> 大厂都在用哪些敏捷方法？（下）</h2><p>在分工上：</p><ul><li>产品经理：写需求设计文档，将需求整理成 Ticket，随时和项目成员沟通确认需求；</li><li>开发人员：每天从看板上按照优先级从高到低领取 Ticket，完成日常开发任务；</li><li>测试人员：测试已经部署到测试环境的程序，如果发现 Bug，提交 Ticket；</li><li>项目经理：保障日常工作流程正常执行，让团队成员可以专注工作，提供必要的帮助，解决问题。</li></ul><p>如何完成需求和修复 Bug？</p><p>日常工作，是围绕 Ticket 来开展的。所有的需求、Bug、任务都作为 Ticket 提交到项目的 Backlog，每个 Sprint 的任务都以看板的形式展现出来。</p><p>每个人手头事情忙完后，就可以去看板上的“To Do”栏，按照优先级从高到低选取新的 Ticket。选取后移动到“In Progress”栏。</p><p>每周一部署生产环境</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',62),c={href:"https://time.geekbang.org/column/intro/100023701",target:"_blank",rel:"noopener noreferrer"};function g(p,u){const i=t("ExternalLinkIcon");return n(),r("div",null,[l,a("ul",null,[a("li",null,[a("a",c,[d("软件工程之美"),o(i)])])])])}const m=e(h,[["render",g],["__file","index.html.vue"]]);export{m as default};
