import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as c,c as d,a as e,b as a,d as i,e as r}from"./app-29bcd084.js";const o={},u=r('<h1 id="uml-结构建模图" tabindex="-1"><a class="header-anchor" href="#uml-结构建模图" aria-hidden="true">#</a> UML 结构建模图</h1><blockquote><p>结构图定义了一个模型的静态架构。它们通常被用来对那些构成模型的‘要素&#39;建模，诸如：类，对象，接口和物理组件。另外，它们也被用来对元素间关联和依赖关系进行建模。</p><p>关键词：<code>部署图</code>, <code>组件图</code>, <code>包图</code>, <code>类图</code>, <code>复合结构图</code>, <code>对象图</code></p></blockquote><h2 id="部署图" tabindex="-1"><a class="header-anchor" href="#部署图" aria-hidden="true">#</a> 部署图</h2><blockquote><p><strong>部署图（Deployment Diagram）用于对系统的物理结构建模</strong>。部署图将显示系统中的软件组件和硬件组件之间的关系以及处理工作的物理分布。</p></blockquote><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-deployment-diagram-example.png"></div><h3 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点</h3><p>节点既可以是硬件元素，也可以是软件元素。它显示为一个立方体，如下图所示。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-node.gif"></div><h3 id="节点实例" tabindex="-1"><a class="header-anchor" href="#节点实例" aria-hidden="true">#</a> 节点实例</h3><p>图可以显示节点实例，实例与节点的区分是：实例的名称带下划线，冒号放在它的基本节点类型之前。实例在冒号之前可以有名称，也可以没有名称。下图显示了一个具名的计算机实例。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-node-instance.gif"></div><h3 id="节点构造型" tabindex="-1"><a class="header-anchor" href="#节点构造型" aria-hidden="true">#</a> 节点构造型</h3><p>为节点提供了许多标准的构造型，分别命名为 «cdrom»， «cd-rom»， «computer»， «disk array»， «pc»， «pc client»， «pc server»， «secure»， «server»， «storage»， «unix server»， «user pc»。 并在节点符号的右上角显示适当的图标。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-node-stereotype.gif"></div><h3 id="工件" tabindex="-1"><a class="header-anchor" href="#工件" aria-hidden="true">#</a> 工件</h3>',15),h={href:"http://www.sparxsystems.cn/platforms/software_development.html",target:"_blank",rel:"noopener noreferrer"},g=r('<p>工件表示为带有工件名称的矩形，并显示«artifact»关键字和文档符号。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-artifact.gif"></div><h3 id="关联" tabindex="-1"><a class="header-anchor" href="#关联" aria-hidden="true">#</a> 关联</h3><p>在部署图的上下文联系中，关联代表节点间的联系通道。下图显示了一个网络系统的部署图，描述了网络协议为构造型和关联终端的多重性，</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-network-model.gif"></div><h3 id="作为容器的节点" tabindex="-1"><a class="header-anchor" href="#作为容器的节点" aria-hidden="true">#</a> 作为容器的节点</h3><p>节点可以包含其他元素，如组件和工件。下图显示了一个嵌入式系统某个部分的部署图。描写了一个被主板节点包含的可执行工件。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-embedded-model.gif"></div><h2 id="组件图" tabindex="-1"><a class="header-anchor" href="#组件图" aria-hidden="true">#</a> 组件图</h2><blockquote><p><strong>组件图（Component Diagram）描绘了组成一个软件系统的模块和嵌入控件</strong>。组件图比类图具有更高层次的抽象－通常运行时一个组件被一个或多个类（或对象）实现。它们象积木那样使得组件能最终构成系统的绝大部分。</p></blockquote><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-component-diagram.gif"></div><p>上图演示了一些组件和它们的内部关系。装配连接器（Assembly connectors）“连接”由&quot;Product&quot;和&quot;Customer&quot;的提供接口到由 &quot;Order&quot;指定的需求接口。 一个依赖关系映射了客户相关的帐户信息到“Order”需要的 &quot;Payment&quot;需求接口。</p><p>实际上，组件图同包图很相似，它们都有明确的界限，把元素分组到逻辑结构中。他们之间的不同是：组件图提供了语义更丰富的分组机制，在组件图中，所有的模型元素都是私有的，而包图只显示公有的成员。</p><h3 id="表现组件" tabindex="-1"><a class="header-anchor" href="#表现组件" aria-hidden="true">#</a> 表现组件</h3><p>组件可表示为带关键字 «component»的矩形类元；也可用右上角有组件图标的矩形表示。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-representing-components.gif"></div><h3 id="装配连接器" tabindex="-1"><a class="header-anchor" href="#装配连接器" aria-hidden="true">#</a> 装配连接器</h3><p>装配连接器在组件 “Component1”的需求接口和另一个组件 “Component2”的提供接口之间建立桥梁; 这个桥梁使得一个组件能提供另一个组件所需要的服务。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-required-interfaces.gif"></div><h3 id="带端口组件" tabindex="-1"><a class="header-anchor" href="#带端口组件" aria-hidden="true">#</a> 带端口组件</h3><p>使用端口的组件图允许在它的环境指定一个服务和行为，同时这个服务和行为也是组件需要的。当端口进行双向操作的时候，它可以指定输入和输出。下图详述了用于在线服务的带端口组件，它有两个提供接口 “order entry”和 “tracking”，也有 “payment” 需求接口。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-component-with-ports.gif"></div><h2 id="包图" tabindex="-1"><a class="header-anchor" href="#包图" aria-hidden="true">#</a> 包图</h2><blockquote><p><strong>包图（Package Diagram）用来表现包和它所包含元素的组织</strong>。当用来代表类元素时，包图提供了命名空间的可视化。包图最常用的用途是用来组织用例图和类图，尽管它不局限于这些 UML 元素。</p></blockquote><p>下面是一个包图的例子。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-package-diagram.gif"></div><p>包中的元素共享相同的命名空间，因此，一个指定命名空间的元素必须有唯一的名称。</p><p>包可以用来代表物理或逻辑关系。选择把类包括在指定的包里，有助于在同一个包里赋予这些类相同继承层次。通常认为把通过复合相关联的类，以及与它们相协作的类放在同一个包里。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-package.gif"></div><p>在 UML2.5 中，包用文件夹来表示，包中的元素共享同一个命名空间，并且必须是可识别的，因此要有唯一的名称或类型。包必须显示包名，在附属方框部分有选择的显示包内的元素。</p><ul><li><strong>包的合并</strong> - 包之间的合并连接符«merge»定义了源包元素与目标包同名元素之间的泛化关系。源包元素的定义被扩展来包含目标包元素定义。当源包元素与目标包内没有同名元素时，目标包元素的定义不受影响。</li><li><strong>包的导入</strong> - 导入连接符 «import»表明目标包的元素，在该例中是一个类 ，在源包中被引用要用非限定修饰名。源包的命名空间获得目标类的接口，目标包的命名空间则不受影响。</li><li><strong>嵌套连接符</strong> - 源包和目标包间的嵌套连接符说明目标包完全包含源包。</li></ul><h2 id="类图" tabindex="-1"><a class="header-anchor" href="#类图" aria-hidden="true">#</a> 类图</h2><blockquote><p><strong>类图（Class Diagram）展示了面向对象系统的构造模块</strong>。描绘了模型或部分模型的静态视图，显示它包含的属性和行为，而不是详细描述操作的功能或完善方法。类图最常用来表达多个类和接口之间的关系。泛化（Generalizations），聚合（aggregations）和关联（associations）分别是类之间继承，复合或应用，及连接的表现。</p></blockquote><p>下面的图显示了类之间的聚合关系。弱聚合（浅色箭头）表现在类 &quot;Account&quot; 使用 &quot;AddressBook&quot;，但是不必要包含它的一个实例。强聚合（图中的黑色箭头）表示了目标类包含源类，例如，&quot;Contact&quot; 和 &quot;ContactGroup&quot;值被包含在 &quot;AddressBook&quot;中。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-class-diagram.png"></div><h3 id="类-classes" tabindex="-1"><a class="header-anchor" href="#类-classes" aria-hidden="true">#</a> 类（Classes）</h3><p>类是定义对象所具有的属性和行为的元素。行为用类能理解的合适消息和适合每条消息的操作来描述。 类中也可能定义约束，标记值，构造型。</p><h3 id="类的标柱-class-notation" tabindex="-1"><a class="header-anchor" href="#类的标柱-class-notation" aria-hidden="true">#</a> 类的标柱（Class Notation）</h3><p>类用矩形表示。除类的名称外，还可以选择性地显示属性和操作。 分栏分别用来显示类的名称，属性和操作。</p><p>在下面图中，类的类名显示在最上面的分栏，它下面的分栏显示详细属性，如：&quot;center&quot; 属性显示初始化的值。最后面的分栏显示操作，如： setWidth，setLength 和 setPosition 以及他们的参数。 属性和操作名前的标注表示了该属性或操作的可见性: 如果使用 &quot;+&quot;号，这个属性或操作是公共的 ; &quot;-&quot; 号则代表这个属性或操作是私有的。 &quot;#&quot;号是这个属性或操作被定义为保护的，&quot; ~&quot; 号代表包的可见性。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-class.gif"></div><h3 id="接口-interfaces" tabindex="-1"><a class="header-anchor" href="#接口-interfaces" aria-hidden="true">#</a> 接口（Interfaces）</h3><p>接口是实施者同意满足的行为规范，是一种约定。实现一个接口，类必需支持其要求的行为，使系统按照同样的方式，即公共的接口，处理不相关的元素。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-class-interface.gif"></div><p>接口有相似于类的外形风格，含有指定的操作，如下图所示。如果没有明确的详细操作，也可以画成一个圆环。当画成圆环的时候，到这个环形标柱的实现连接没有目标箭头。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-interface.gif"></div><h3 id="表-tables" tabindex="-1"><a class="header-anchor" href="#表-tables" aria-hidden="true">#</a> 表（Tables）</h3><p>表尽管不是基本 UML 的一部分，仍然是“图型”能完成的实例用。在右上角画一个表的小图标来表示。表属性用“图型” «column»表示。 绝大多数表单有一个主键，是由一个或几个字段组成的一个唯一的字码组合加主键操作来访问表格，主键操作“图型”为«PK»。 一些表有一个或多个外键，使用一个或多个字段加一个外键操作，映射到相关表的主键上去，外键操作“图型”为«FK»。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-table.gif"></div><h3 id="关联-associations" tabindex="-1"><a class="header-anchor" href="#关联-associations" aria-hidden="true">#</a> 关联（Associations）</h3><p>关联表明两个模型元素之间有关系，通常用在一个类中被实现为一个实例变量。连接符可以包含两端的命名的角色，基数性，方向和约束。关联是元素之间普通的关系。如果多于两个元素，也可以使用菱形的关联关系。当从类图生成代码时，关联末端的对象将变成目标类中实例变量。见下图示例 &quot;playsFor&quot; 将变成&quot;Player&quot;类中的实例变量。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-associations.gif"></div><h3 id="泛化-generalizations" tabindex="-1"><a class="header-anchor" href="#泛化-generalizations" aria-hidden="true">#</a> 泛化（Generalizations）</h3><p>泛化被用来说明继承关系。连接从特定类元到一般类元。泛化的含义是源类继承了目标类的特性。下图的图显示了一个父类泛化一个子类， 类“Circle”的一个实例将会有属性 “ x_position”，“ y_position” ， “radius” 和 方法 “display()”。 注意：类 &quot;Shape&quot; 是抽象的，类名显示为斜体。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-generalizations.gif"></div><p>下图显示了与上图相同信息的视图。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-generalizations-02.gif"></div><h3 id="聚合-aggregations" tabindex="-1"><a class="header-anchor" href="#聚合-aggregations" aria-hidden="true">#</a> 聚合（Aggregations）</h3><p>聚合通常被用来描述由更小的组件所构成的元素。聚合关系表示为白色菱形箭头指向目标类或父类。</p><p>聚合的更强形式 -组合聚合（强聚合） - 显示为黑色菱形箭头，用来组合每次最大化的包含组件。如果一个组合聚合的父类被删除，通常与他相关的所有部分都会被删除，但是，如果一个部件从组合中去掉，将不用删除整个组合。组合是可迁，非对称的关系和递归的。</p><p>下面的图示：显示了弱聚合和强聚合的不同。“ address book” 由许多 “contacts” 和 “contact groups”组成。 “contact group” 是一个“contacts”的虚分组; “contact”可以被包含在不止一个 “ contact group”。 如果你删除一个“ address book”，所有的 “contacts” 和 “contact groups” 也将会被删除；如果你删除“ contact group”， 没有 “contacts”会被删除。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-aggregations.gif"></div><h3 id="关联类-association-classes" tabindex="-1"><a class="header-anchor" href="#关联类-association-classes" aria-hidden="true">#</a> 关联类（Association Classes）</h3><p>关联类是一个允许关联连接有属性和操作的构造。下面的示例：显示了远不止简单连接两个类的连接，如给“employee”分配项目。“ employee”在项目中所起的作用是一个复杂的实体，既有自身的也有不属于“employee” 或 “project” 类的细节。 例如，“ employee”可以同时为几个项目工作，有不同的职务头衔和对应的安全权限。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-association-classes.gif"></div><h3 id="依赖-dependencies" tabindex="-1"><a class="header-anchor" href="#依赖-dependencies" aria-hidden="true">#</a> 依赖（Dependencies）</h3><p>依赖被用来描述模型元素间广泛的依赖关系。通常在设计过程早期显示两个元素之间存在某种关系，因为是初期而不能确定具体是什么关系，在设计过程末期，该继承关系会被归入已有构造型 (构造型 可以是实例化 «instantiate»，跟踪 «trace»，导入 «import»， 和其它的关系)，或被替换成一个更明确类型的连接符。</p><h3 id="跟踪-traces" tabindex="-1"><a class="header-anchor" href="#跟踪-traces" aria-hidden="true">#</a> 跟踪（Traces）</h3><p>跟踪关系是一种特殊化的依赖关系。连接模型元素或跨模型但是具有相同概念的模型元素集。跟踪被经常用来追踪需求和模型的变化。由于变化是双向的，这种依赖关系的顺序通常被忽略。这种关系的属性可以被指定为单向映射，但跟踪是双向的，非正式的和很少可计算的。</p><h3 id="实现-realizations" tabindex="-1"><a class="header-anchor" href="#实现-realizations" aria-hidden="true">#</a> 实现（Realizations）</h3><p>是源对象执行或实现目标，实现被用来表达模型的可跟踪性和完整性－业务模型或需求被一个或多个用例实现，用例则被类实现，类被组件实现，等等。这种实现贯穿于系统设计的映射需求和类等，直至抽象建模水平级。从而确保整个系统的一张宏图，它也反映系统的所有微小组成，以及约束和定义它的细节。实现关系用带虚线的实箭头表示。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-realizations.gif"></div><h3 id="嵌套-nestings" tabindex="-1"><a class="header-anchor" href="#嵌套-nestings" aria-hidden="true">#</a> 嵌套（Nestings）</h3><p>嵌套连接符用来表示源元素嵌套在目标元素中。下图显示“ inner class”的定义，尽管在 EA 中，更多地按照着他们在项目层次视图中的位置来显示这种关系。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-nestings.gif"></div><h2 id="复合结构图" tabindex="-1"><a class="header-anchor" href="#复合结构图" aria-hidden="true">#</a> 复合结构图</h2><blockquote><p><strong>复合结构图显示类的内部结构，包括它与系统其他部分的交互点。也显示各部分的配置与关系，这些部分一起执行类元的行为。</strong></p></blockquote><p>类元素已经在类图部分被详细地阐述，这部分用来说明类表现复合元素的方式，如：暴露接口，包含端口和部件。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-composite-structure-diagram.gif"></div><h3 id="部件" tabindex="-1"><a class="header-anchor" href="#部件" aria-hidden="true">#</a> 部件</h3><p>部件是代表一组（一个或多个）实例的元素，这组实例的拥有者是一类元实例，例如：如果一个图的实例有一组图形元素，则这些图形元素可以被表示为部件，并可以对他们之间的某种关系建模。注意：一个部件可以在它的父类被删除之前从父类中被去掉，这样部件就不会被同时删除了。<br> 部件在类或组件内部显示为不加修饰的方框。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-part.gif"></div><h3 id="端口" tabindex="-1"><a class="header-anchor" href="#端口" aria-hidden="true">#</a> 端口</h3><p>端口是类型化的元素，代表一个包含类元实例的外部可视的部分。端口定义了类元和它的环境之间的交互。端口显示在包含它的部件，类或组合结构的边缘上。端口指定了类元提供的服务，以及类元要求环境提供的服务。<br> 端口显示为所属类元边界指定的方框。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-port.gif"></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><p>接口与类相似，但是有一些限制，所有的接口操作都是公共和抽象的，不提供任何默认的实现。所有的接口属性都必须是常量。然而，当一个类从一个单独的超级类继承而来，它可以实现多个接口。<br> 当一个接口在图中单列出来，它既可以显示为类元素的方框，带 «interface» 关键字和表明它是抽象的斜体名称，也可以显示为圆环。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-interface.gif"></div><p>注意：圆环标注不显示接口操作。当接口显示为类所有的接口，它们会被当作暴露接口引用。暴露接口可以定义为是提供的，还是需求的。提供接口确认包含它的类元提供指定接口元素定义的操作，可通过类和接口间实现的连接来定义。需求接口说明该类元能与其他类元进行通信，这些类元提供了指定接口元素所定义的操作。需求接口可通过在类和接口间建立依赖连接来定义。<br> 提供接口显示为“带棒球体”，依附在类元边缘。需求接口显示为“带棒杯体”，也是依附在类元边缘。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-interface-02.gif"></div><h3 id="委托" tabindex="-1"><a class="header-anchor" href="#委托" aria-hidden="true">#</a> 委托</h3><p>委托连接器用来定义组件外部端口和接口的内部工作方式。委托连接器表示为带有 «delegate» 关键字的箭头。它连接组件的外部约定，表现为它的端口，到组件部件行为的内部实现。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-delegate.gif"></div><h3 id="协作" tabindex="-1"><a class="header-anchor" href="#协作" aria-hidden="true">#</a> 协作</h3><p>协作定义了一系列共同协作的角色，它们集体展示一个指定的设计功能。协作图应仅仅显示完成指定任务或功能的角色与属性。隔离主要角色是用来简化结构和澄清行为，也用于重用。一个协作通常实现一个模式。<br> 协作元素显示为椭圆。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-collaboration.gif"></div><h3 id="角色绑定" tabindex="-1"><a class="header-anchor" href="#角色绑定" aria-hidden="true">#</a> 角色绑定</h3><p>角色绑定连接器是一条从连接协作到所要完成该任务类元的连线。它显示为虚线，并在类元端显示作用名。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-role-binding.gif"></div><h3 id="表现" tabindex="-1"><a class="header-anchor" href="#表现" aria-hidden="true">#</a> 表现</h3><p>表现连接器用于连接协作到类元来表示此类元中使用了该协作。显示为带关键字 «represents»的虚线箭头。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-represent.gif"></div><p>发生<br> 发生连接器用于连接协作到类元来表示此协作表现了（同原文）该类元；显示为带关键字«occurrence»的虚线箭头。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-occurrence.gif"></div><h2 id="对象图" tabindex="-1"><a class="header-anchor" href="#对象图" aria-hidden="true">#</a> 对象图</h2><blockquote><p><strong>对象图（Object Diagram）可以认为是类图的特殊情形，是类图元素子集，被用来及时强调在某些点，类的实例间的关系</strong>。这对理解类图很有帮助。他们在构造上与类图显示没有不同，但是反映出多样性和作用。</p></blockquote><h3 id="类和对象元素" tabindex="-1"><a class="header-anchor" href="#类和对象元素" aria-hidden="true">#</a> 类和对象元素</h3><p>下面的图显示了类元素和对象元素外观上的不同。注意：类元素包括三个部分，分别是名字栏，属性栏和操作栏；对象元素默认为没有分栏。名称显示也有不同：对象名称有下划线，并可能显示该对象实例化所用类元的名称。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-object.gif"></div><h3 id="运行状态" tabindex="-1"><a class="header-anchor" href="#运行状态" aria-hidden="true">#</a> 运行状态</h3><p>类元元素可以有任意数量的属性和操作。在对象实例中不会被显示出来。但可能定义对象的运行状态，显示特殊实例的属性设置值。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-run-time-state.gif"></div><h3 id="类和对象图示例" tabindex="-1"><a class="header-anchor" href="#类和对象图示例" aria-hidden="true">#</a> 类和对象图示例</h3><p>下图是一个对象图，其中插入了类定义图。它例示如何用对象图来测试类图中任务多重性的方法。“car” 类对 “wheel” 类有“1 对多” 的多重性，但是如果已经选择用“1 对 4” 来替代，那样就不会在对象图显示“3 个轮子”的汽车。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-object-diagram.gif"></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',116),m={href:"https://sparxsystems.cn/resources/uml2_tutorial/index.html",target:"_blank",rel:"noopener noreferrer"},l={href:"http://www.cnblogs.com/ywqu/category/223486.html",target:"_blank",rel:"noopener noreferrer"};function p(b,f){const t=n("ExternalLinkIcon");return c(),d("div",null,[u,e("p",null,[a("工件是"),e("a",h,[a("软件开发"),i(t)]),a("过程中的产品。包括过程模型（如：用例模型，设计模型等），源文件，执行文件，设计文档，测试报告，构造型，用户手册等等。")]),g,e("ul",null,[e("li",null,[e("a",m,[a("https://sparxsystems.cn/resources/uml2_tutorial/index.html"),i(t)])]),e("li",null,[e("a",l,[a("http://www.cnblogs.com/ywqu/category/223486.html"),i(t)])])])])}const x=s(o,[["render",p],["__file","02.UML结构建模图.html.vue"]]);export{x as default};
