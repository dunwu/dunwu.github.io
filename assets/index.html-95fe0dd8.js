import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as t,a,b as i,d as r,e as l}from"./app-afc5da4f.js";const s={},o=l('<h1 id="设计一个低代码平台" tabindex="-1"><a class="header-anchor" href="#设计一个低代码平台" aria-hidden="true">#</a> 设计一个低代码平台</h1><blockquote><p>本文目标是设计一个用于提高开发人员开发效率的低代码平台，这里会采用系统解决方案设计的一般思路来逐步探寻设计方案。</p></blockquote><h2 id="业务分析" tabindex="-1"><a class="header-anchor" href="#业务分析" aria-hidden="true">#</a> 业务分析</h2><h3 id="低代码平台是什么" tabindex="-1"><a class="header-anchor" href="#低代码平台是什么" aria-hidden="true">#</a> 低代码平台是什么</h3><p>广义上的低代码平台包括低代码平台和零代码平台，它们都属于 APaaS（Application Platform as a Service 应用平台即服务），两者的主要区别在于对代码的依赖程度：</p><ul><li><strong>低代码平台</strong>：通过自动代码生成和可视化编程，只需要少量代码，即可快速搭建各种应用。</li><li><strong>零代码平台</strong>：零开发经验的业务人员通过拖拽等方式，无需编写代码，即可快速搭建各种应用。</li></ul><h3 id="技术路线" tabindex="-1"><a class="header-anchor" href="#技术路线" aria-hidden="true">#</a> 技术路线</h3><h4 id="基于-ide-框架的快速开发平台" tabindex="-1"><a class="header-anchor" href="#基于-ide-框架的快速开发平台" aria-hidden="true">#</a> 基于 IDE 框架的快速开发平台</h4><p>该方案将传统的集成开发环境（IDE）充分可视化，开发者对前端界面组件、数据源绑定方式、数据模型、业务逻辑和工作流等都可以自由定义，平台将自动生成代码，开发者也可以添加自己的代码，对程序具有较强的控制能力，因此该方案具备更高的灵活性，可以设计出定制化程度高、逻辑复杂的软件。</p><p>由于该方案仍涉及代码开发、部署等技术工作，所以它仍然是一个技术开发平台，需要较高的学习成本，主要价值是提高开发效率，减少重复劳动。</p><p>Outsystems 就是采用该方案的典型产品，如下为产品截图：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210506193447.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="基于模型驱动的应用平台" tabindex="-1"><a class="header-anchor" href="#基于模型驱动的应用平台" aria-hidden="true">#</a> 基于模型驱动的应用平台</h4><p>用户通过可视化方式构建数据模型、视图、权限、工作流等，即可在平台提供的环境中运行，无需编译部署，更像一种傻瓜式的应用搭建平台。平台对各类组件、业务逻辑做了较高层级的封装，因此用户无法随心所欲修改界面风格、交互方式、处理逻辑等。</p><p>该方案可以实现完全零代码，对使用者技术要求不高，但需要具备业务抽象、建模能力。主要价值是降低开发门槛、快速适应变化。</p><p>明道云、伙伴云等都是此类方案的典型产品，如下为明道云的产品截图：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210506193656.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="核心要素" tabindex="-1"><a class="header-anchor" href="#核心要素" aria-hidden="true">#</a> 核心要素</h3><p>绝大部分的企业软件由以下四个部分组成：</p><ul><li><strong>业务实体</strong>：即操作对象，如客户、订单</li><li><strong>业务活动</strong>：即进行何种操作，如采购申请、合同审批</li><li><strong>业务权限</strong>：即何种人拥有何种权限，包括数据查看权限和数据操作权限，如部门经理可以管理所有下属的客户信息，而员工只能管理自己的客户信息</li><li><strong>统计报表</strong>：即从哪些方面量化企业活动情况，如客户增长率、各月销售额趋势</li></ul><p>低代码平台将以上进行抽象，支持数据模型、业务流程、用户权限、统计图表，因此可以作为更通用的企业软件解决方案，这四类能力也是任何一个低代码平台都必须具备的核心要素。</p><h4 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h4><p>建立数据模型就是提取业务实体的数据特征，抽象为数据表，建立表间关系。制作 ER 图的过程就是数据建模。市面上常见的低代码平台均提供了丰富的控件，可以拖拽完成数据模型搭建。此外，数据模型搭建与表单展示合二为一，每完成一个数据表的创建，就自动生成了该表的增删改查功能及相关页面，进而隐藏了数据库设计、前端开发这些专业技术。其实，这也就是我们常说的表单引擎。</p><p>这里顺便提一下，虽然很多低代码平台将数据建模与表单展示合二为一，但通过这种方式自动生成的表单只能实现最基础的增删改查页面，用户对界面展示内容及形式的控制程度很低，无法满足大部分企业软件的需求，所以低代码平台一般还会提供自定义页面功能，用户可根据需要在页面上配置按钮、图表等元素，满足个性化需求。</p><h4 id="业务流程" tabindex="-1"><a class="header-anchor" href="#业务流程" aria-hidden="true">#</a> 业务流程</h4><p>业务流程指为了实现某项目标，由多人合作，按照一定的规则、顺序进行的一系列活动，在软件中，业务流程的参与者可以是人，也可以是程序。低代码平台实现了可视化流程配置，用户对触发条件、处理节点、节点参与者进行配置，实现自定义业务流程。</p><h4 id="用户权限" tabindex="-1"><a class="header-anchor" href="#用户权限" aria-hidden="true">#</a> 用户权限</h4><p>大部分的低代码平台都采用了非常经典的 RBAC（Role-Based Access Control ）模型管理用户权限，简单来说就是将拥有相同权限的用户添加为相同角色，通过为角色分配权限，实现了“用户——角色——权限”的授权模式。由于企业是一个组织，一般都会有部门的概念，所以也可以将部门添加到某个角色，实现“用户——部门——角色——权限”的授权模式。</p><h4 id="统计图表" tabindex="-1"><a class="header-anchor" href="#统计图表" aria-hidden="true">#</a> 统计图表</h4><p>统计图表可以类比 Excel 中的透视图，统计图表由数据源、统计规则、展示形式定义，低代码平台也正是遵循这种方式，实现统计图表的可视化配置。</p><h3 id="流行产品" tabindex="-1"><a class="header-anchor" href="#流行产品" aria-hidden="true">#</a> 流行产品</h3><h4 id="outsystems" tabindex="-1"><a class="header-anchor" href="#outsystems" aria-hidden="true">#</a> OutSystems</h4><p>OutSystems 是快速应用开发的头号低代码平台，并且是 2018 年 Gartner 高生产力平台的领导者。OutSystems 号称将低代码功能与高级移动功能相结合的唯一解决方案，它支持整个应用程序组合的可视化开发，可轻松与现有系统集成。</p><h4 id="mendix" tabindex="-1"><a class="header-anchor" href="#mendix" aria-hidden="true">#</a> Mendix</h4><p>Mendix 帮助企业改善创新方式。通过使用可视化模型，在 Mendix 上构建应用程序非常简单，快速且直观，可使开发人员和业务分析人员等众多人员构建强大的应用程序，而无需编写代码。借助模型驱动开发，业务领导者和 IT 部门可以共享语言来快速构建应用程序。</p><h2 id="顶层设计" tabindex="-1"><a class="header-anchor" href="#顶层设计" aria-hidden="true">#</a> 顶层设计</h2><p>由于系统的用户群体是有一定技术基础的开发人员。所以，系统定位是低代码平台，而非零代码平台。</p><p>其次，由于系统主要是用于简化基本的页面开发，所以技术路线应该选择：基于模型驱动的应用平台。</p><p>最后，由于生成的代码是应用于 Java Web 框架。生成的后端代码是 java 代码；前端代码是基于 vue + element-ui 生态的前端代码。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210506200045.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>代码生成规则对应的数据建模：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20210506200704.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>自动生成前后端代码。</p><ul><li>后端代码 <ul><li>Controller</li><li>Service</li><li>ServiceImpl</li><li>Daomybatis</li><li>DaoImpl</li><li>Mapper</li><li>Query</li><li>Dto</li><li>Entity</li><li>xml</li></ul></li><li>前端代码 <ul><li>List</li><li>Form</li><li>Api</li></ul></li></ul><h2 id="组件设计" tabindex="-1"><a class="header-anchor" href="#组件设计" aria-hidden="true">#</a> 组件设计</h2><h3 id="列表页" tabindex="-1"><a class="header-anchor" href="#列表页" aria-hidden="true">#</a> 列表页</h3><h4 id="搜索栏" tabindex="-1"><a class="header-anchor" href="#搜索栏" aria-hidden="true">#</a> 搜索栏</h4><h4 id="操作栏" tabindex="-1"><a class="header-anchor" href="#操作栏" aria-hidden="true">#</a> 操作栏</h4><h4 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h4><h4 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h4><h3 id="表单页" tabindex="-1"><a class="header-anchor" href="#表单页" aria-hidden="true">#</a> 表单页</h3><h4 id="表单组件" tabindex="-1"><a class="header-anchor" href="#表单组件" aria-hidden="true">#</a> 表单组件</h4><h4 id="校验器" tabindex="-1"><a class="header-anchor" href="#校验器" aria-hidden="true">#</a> 校验器</h4><h2 id="扩展设计" tabindex="-1"><a class="header-anchor" href="#扩展设计" aria-hidden="true">#</a> 扩展设计</h2><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',55),c={href:"http://www.woshipm.com/it/4391545.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://zhuanlan.zhihu.com/p/182211043",target:"_blank",rel:"noopener noreferrer"};function u(g,f){const e=n("ExternalLinkIcon");return d(),t("div",null,[o,a("ul",null,[a("li",null,[a("a",c,[i("低代码平台：10 分钟从入门到原理"),r(e)])]),a("li",null,[a("a",p,[i("浅谈低代码平台涉及的一些技术选型"),r(e)])])])])}const b=h(s,[["render",u],["__file","index.html.vue"]]);export{b as default};
