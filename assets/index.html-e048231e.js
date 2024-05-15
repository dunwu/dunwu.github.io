import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as n,a as e,b as s,d,e as u}from"./app-d70a109d.js";const c={},h=u('<h1 id="uml-行为建模图" tabindex="-1"><a class="header-anchor" href="#uml-行为建模图" aria-hidden="true">#</a> UML 行为建模图</h1><blockquote><p>行为图用来记录在一个模型内部，随时间的变化，模型执行的交互变化和瞬间的状态；并跟踪系统在真实环境下如何表现，以及观察系统对一个操作或事件的反应，以及它的结果。</p><p>关键词：<code>活动图</code>, <code>状态机图</code>, <code>用例图</code>, <code>通信图</code>, <code>交互概述图</code>, <code>时序图</code>, <code>时间图</code></p></blockquote><h2 id="活动图" tabindex="-1"><a class="header-anchor" href="#活动图" aria-hidden="true">#</a> 活动图</h2><blockquote><p>UML 中，活动图用来展示活动的顺序。<strong>显示了从起始点到终点的工作流，描述了活动图中存在于事件进程的判断路径</strong>。活动图可以用来详细阐述某些活动执行中发生并行处理的情况。活动图对业务建模也比较有用，用来详细描述发生在业务活动中的过程。<br> 一个活动图的示例如下所示。</p></blockquote><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-diagram.gif"></div><p>下面描述组成活动图的元素。</p><h3 id="活动" tabindex="-1"><a class="header-anchor" href="#活动" aria-hidden="true">#</a> 活动</h3><p>活动是行为参数化顺序的规范。活动被表示为圆角矩形，内含全部的动作，工作流和其他组成活动的元素。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity.gif"></div><h3 id="动作" tabindex="-1"><a class="header-anchor" href="#动作" aria-hidden="true">#</a> 动作</h3><p>一个动作代表活动中的一个步骤。动作用圆角矩形表示。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-action.gif"></div><h3 id="动作约束" tabindex="-1"><a class="header-anchor" href="#动作约束" aria-hidden="true">#</a> 动作约束</h3><p>动作可以附带约束，下图显示了一个带前置条件和后置条件的动作。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-conditions.gif"></div><h3 id="控制流" tabindex="-1"><a class="header-anchor" href="#控制流" aria-hidden="true">#</a> 控制流</h3><p>控制流显示一个动作到下一个动作的流。表示为带箭头实线</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-edge.gif"></div><h3 id="初始节点" tabindex="-1"><a class="header-anchor" href="#初始节点" aria-hidden="true">#</a> 初始节点</h3><p>一个开始或起始点用大黑圆点表示，如下图。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-initial.gif"></div><h3 id="结束节点" tabindex="-1"><a class="header-anchor" href="#结束节点" aria-hidden="true">#</a> 结束节点</h3><p>结束节点有两种类型：活动结束节点和流结束节点。活动结束节点表示为中心带黑点的圆环。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-final.gif"></div><p>流结束节点表示为内部为叉号的圆环。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-flow-final.gif"></div><p>这两种不同类型节点的区别为：流结束节点表明单独的控制流的终点。活动结束终点是活动图内所有控制流的结束。</p><h3 id="对象和对象流" tabindex="-1"><a class="header-anchor" href="#对象和对象流" aria-hidden="true">#</a> 对象和对象流</h3><p>对象流是对象和数据转递的通道。对象显示为矩形。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-object.gif"></div><p>对象流显示为带箭头的连接器，表明方向和通过的对象。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-object-flow.gif"></div><p>一个对象流在它的至少一个终端有一个对象。在上图中，可以采用带输入输出引脚的速记标柱表示。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-object-flow-alt.gif"></div><p>数据存储显示为带 «datastore» 关键字的对象。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-data-store.gif"></div><h3 id="判断节点和合并节点" tabindex="-1"><a class="header-anchor" href="#判断节点和合并节点" aria-hidden="true">#</a> 判断节点和合并节点</h3><p>判断节点和合并节点是相同标注：菱形。它们可以被命名。从判断节点出来的控制流有监护条件，当监护条件满足时，可以对流控制。下图显示了判断节点和合并节点的使用。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-decision-or-merge.gif"></div><h3 id="分叉和结合节点" tabindex="-1"><a class="header-anchor" href="#分叉和结合节点" aria-hidden="true">#</a> 分叉和结合节点</h3><p>分叉和结合节点有同样的标柱：垂直或水平条（方向取决于工作流从左到右，还是从上到下）。它们说明了控制的并发线程的起始和终点，下图显示他们的使用示例。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-fork-and-join.gif"></div><p>结合节点与合并节点不同之处在于：结合节点同步两个输入量，产生一个单独的输出量。来自结合节点的输出量要接收到所有的输入量后才能执行。合并节点直接将控制流传递通过。如果两个或更多的输入量到达合并节点。则它的输出流指定的动作会被执行两次或更多次。</p><h3 id="扩展域" tabindex="-1"><a class="header-anchor" href="#扩展域" aria-hidden="true">#</a> 扩展域</h3><p>扩展域是会执行多次的结构活动域。输入输出扩展节点表示为一组“3 厢” ，代表多个选择项。关键词 &quot;iterative&quot;， &quot;parallel&quot; 或 &quot;stream&quot;显示在区域的左上角</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-expansion-region.gif"></div><h3 id="异常处理器" tabindex="-1"><a class="header-anchor" href="#异常处理器" aria-hidden="true">#</a> 异常处理器</h3><p>异常处理器在活动图中可以建模。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-exception-handler.gif"></div><h3 id="可中断活动区" tabindex="-1"><a class="header-anchor" href="#可中断活动区" aria-hidden="true">#</a> 可中断活动区</h3><p>可中断活动区环绕一组可以中断的动作。在下面非常简单的例子中： 当控制被传递到结束订单 &quot;Close Order&quot; 动作，定单处理&quot;Process Order&quot; 动作会执行直到完成，除非&quot;Cancel Request&quot;取消请求中断被接受，这会将控制传递给&quot;Cancel Order&quot;动作。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-interruptible-activity-region.gif"></div><h3 id="分割" tabindex="-1"><a class="header-anchor" href="#分割" aria-hidden="true">#</a> 分割</h3><p>一个活动分割显示为垂直或水平泳道。在下图中，分割被用来在活动图中分隔动作，有在 &quot;accounting department&quot;中执行的，有在 &quot;customer&quot;中执行的。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-activity-partitions.gif"></div><h2 id="状态机图" tabindex="-1"><a class="header-anchor" href="#状态机图" aria-hidden="true">#</a> 状态机图</h2><blockquote><p><strong>状态机图（state-machine-diagram）对一个单独对象的行为建模，指明对象在它的整个生命周期里，响应不同事件时，执行相关事件的顺序。</strong></p></blockquote><p>如下示例， 下列的状态机图显示了门在它的整个生命周期里如何运作。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-diagram.gif"></div><p>门可以处于以下的三种状态之一： &quot;Opened&quot;打开状态， &quot;Closed&quot;关闭状态，或者&quot;Locked&quot;锁定状态。 它分别响应事件：“Open”开门， “Close”关门， “Lock”锁门 和 “Unlock”解锁。 注意：不是所有的事件，在所有的状态下都是有效的。如：一个门打开的时候是不可能锁定的，除非你关上门。并且，状态转移可能有附加监护条件：假设门是开的，如果“doorWay-&gt;isEmpty”（门是空的）被满足，那么它只能响应关门事件。状态机图使用的语法和约定将在下面的部分进行讨论。</p><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3><p>状态被表示为圆角矩形，状态名写在里面。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state.gif"></div><h3 id="起始和结束状态" tabindex="-1"><a class="header-anchor" href="#起始和结束状态" aria-hidden="true">#</a> 起始和结束状态</h3><p>初始状态表示为实心黑圆环，可以标注名称。结束状态表示为中心带黑点圆环，也可以被标注名称。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-initial-and-final.gif"></div><h3 id="转移" tabindex="-1"><a class="header-anchor" href="#转移" aria-hidden="true">#</a> 转移</h3><p>一个状态到下一个状态的转移表示为带箭头实线。转移可以有一个“Trigger”触发器，一个“Guard”监护条件和一个“effect”效果。如下所示：</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-transition.gif"></div><p>&quot;Trigger&quot;触发器是转移的起因，它可以是某个条件下的一个信号，一个事件，一个变化或一个时间通路。&quot;Guard&quot;监护是一个条件，而且必须为真，以便于让触发器引起转移。效果&quot;Effect&quot;是直接作用到对象上的一个动作，该对象具有做为转移结果的状态机。</p><h3 id="状态活动" tabindex="-1"><a class="header-anchor" href="#状态活动" aria-hidden="true">#</a> 状态活动</h3><p>在上面的状态转移示例中，一个效果与该转移相关联。如果目标状态有多个转移到达，并且每一个转移都有相同的效果与它相关联，那最好将该效果与目标状态相关联，而不与转移相关联。你可以通过为这个状态定义初始动作来实现。下图显示了一个带入口动作和出口动作的状态。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-entry-and-exit.gif"></div><p>可以定义发生在事件上的动作或一直发生的动作。每一种类型的动作是可以定义任意数量的。</p><h3 id="自转移" tabindex="-1"><a class="header-anchor" href="#自转移" aria-hidden="true">#</a> 自转移</h3><p>一个状态可能有一个返回到自身的转移，如下图。效果与转移关联是十分有帮助。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-self-transition.gif"></div><h3 id="复合状态" tabindex="-1"><a class="header-anchor" href="#复合状态" aria-hidden="true">#</a> 复合状态</h3><p>一个状态机图可以有子状态机图，如下图所示：</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-compound.gif"></div><p>可选择不同方式显示相同信息，如下图所示：</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-composite.gif"></div><p>上面版本的标注说明&quot;Check PIN&quot;的子状态机图显示在单独的图中。</p><h3 id="入口点" tabindex="-1"><a class="header-anchor" href="#入口点" aria-hidden="true">#</a> 入口点</h3><p>有时，你不想在正常的初始状态进入子状态机。例如下面的子状态机，它通常从&quot;初始化&quot;状态开始，但是如果因为某些原因，它不必执行初始化，可能靠转移到指定的入口点来从 &quot;Ready&quot; 状态开始。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-entry-point.gif"></div><p>下图显示了状态机的上一层。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-entry-point-higher.gif"></div><h3 id="出口点" tabindex="-1"><a class="header-anchor" href="#出口点" aria-hidden="true">#</a> 出口点</h3><p>有与入口点相类似的方式，它可能也指定可选择的出口点。下图给出了主处理状态执行后，所执行状态的去向将取决于该状态转移时所使用的路径。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-exit-point.gif"></div><h3 id="选择伪状态" tabindex="-1"><a class="header-anchor" href="#选择伪状态" aria-hidden="true">#</a> 选择伪状态</h3><p>选择伪状态显示为菱形，有一个转移输入，两个或多个输出。下图显示不管到达哪一个状态，经过选择伪状态后的去向，取决于在伪状态中执行时所选择的消息格式。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-choice.gif"></div><h3 id="连接伪状态" tabindex="-1"><a class="header-anchor" href="#连接伪状态" aria-hidden="true">#</a> 连接伪状态</h3><p>连接伪状态用来将多个状态转移链接在一起。一个单独的连接伪状态可以有一个或多个输入和一个或多个输出，监护可能应用于每一个转移，连接是没有语义的。连接可以把一个输入转移分成多个输出转移来实现一个静态分支。与之对照的是选择伪状态实现一个动态条件分支。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-junction.gif"></div><h3 id="终止伪状态" tabindex="-1"><a class="header-anchor" href="#终止伪状态" aria-hidden="true">#</a> 终止伪状态</h3><p>进入终止伪状态是指状态机生命线已经终止。终止伪状态表示为叉号。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-terminate.gif"></div><h3 id="历史状态" tabindex="-1"><a class="header-anchor" href="#历史状态" aria-hidden="true">#</a> 历史状态</h3><p>历史状态用来当状态机中断时，恢复状态机之前状态。下面例图说明了历史状态的使用。这个例子是关于洗衣机的状态机。</p><p>在这个状态机中，当洗衣机运行时，它会按照&quot;Washing&quot; 到 Rinsing&quot;再到&quot;Spinning&quot;来进行。如果电源被切断 ，洗衣机会停止运行并进入&quot;Power Off&quot; 状态。当电源恢复，运行状态在&quot;History State&quot;符号处进入，表示它会从上次离开的地方恢复。</p><h3 id="并发区" tabindex="-1"><a class="header-anchor" href="#并发区" aria-hidden="true">#</a> 并发区</h3><p>一个状态可以被分成几个不同的区，包含同时存在和执行的子状态。下面的例子显示状态 &quot;Applying Brakes&quot;， &quot;front brake&quot;和&quot;rear brakes&quot; 将同时独立运作。注意使用了分叉和结合伪状态而不是选择和合并伪状态。这些符号用来同步并发的线程。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-concurrent-regions.gif"></div><h2 id="用例图" tabindex="-1"><a class="header-anchor" href="#用例图" aria-hidden="true">#</a> 用例图</h2><blockquote><p><strong>用例图用来记录系统的需求，它提供系统与用户及其他参与者的一种通信手段。</strong></p></blockquote><h3 id="执行者" tabindex="-1"><a class="header-anchor" href="#执行者" aria-hidden="true">#</a> 执行者</h3><p>用例图显示了系统和系统外实体之间的交互。这些实体被引用为执行者。执行者代表角色，可以包括：用户，外部硬件和其他系统。执行者往往被画成简笔画小人。也可以用带«actor»关键字的类矩形表示。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-actor.gif"></div><p>在下图中，执行者可以详细的泛化其他执行者:</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-generalize.gif"></div><h3 id="用例" tabindex="-1"><a class="header-anchor" href="#用例" aria-hidden="true">#</a> 用例</h3><p>用例是有意义的单独工作单元。它向系统外部的人或事提供一个易于观察的高层次行为视图。 用例的标注符号是一个椭圆。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case.gif"></div><p>使用用例的符号是带可选择箭头的连接线，箭头显示控制的方向。下图说明执行者 &quot;Customer&quot;使用 &quot;Withdraw&quot;用例。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-use.gif"></div><p>用途连接器（uses connector）可以有选择性的在每一个端点有多重性值，如下图，显示客户一次可能只执行一次取款交易。但是银行可以同时执行许多取款交易。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-multiplicity-use.gif"></div><h3 id="用例定义" tabindex="-1"><a class="header-anchor" href="#用例定义" aria-hidden="true">#</a> 用例定义</h3><p>一个典型的用例包括:</p><ul><li><strong>名称和描述</strong> - 用例通常用一个动词词组定义，而且有一个简短的文字说明。</li><li><strong>需求</strong> - 需求定义了一个用例必须提供给终端用户的正式功能性需求。它们符合构造方法建立的功能性规范。一个需求是用例将执行一个动作或提供多个值给系统的约定或承诺。</li><li><strong>约束</strong> - 一个约束是一个用例运行的条件或限制。它包括：前置条件，后置条件和不变化条件 。前置条件指明了用例在发生之前需要符合的条件。后置条件用来说明在用例执行之后一些条件必须为&quot;真&quot;。不变化条件说明用例整个执行过程中该条件始终为&quot;真&quot;。</li><li><strong>情形</strong> - 情形是用例的实例在执行过程中，事件发生流程的形式描述。它定义了系统和外部执行者之间的事件指定顺序。通常用文本方式来表示，并对应时序图中的文字描述。</li><li><strong>情形图</strong></li><li><strong>附加信息</strong></li></ul><h3 id="包含用例" tabindex="-1"><a class="header-anchor" href="#包含用例" aria-hidden="true">#</a> 包含用例</h3><p>用例可能包含其他用例的功能来作为它正常处理的一部分。通常它假设，任何被包含的用例在基本程序运行时每一次都会被调用。下面例子：用例“卡的确认”<code>&lt;Card Identification&gt;</code> 在运行时，被用例“取钱”<code>&lt;Withdraw&gt;</code>当作一个子部分。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-include.gif"></div><p>用例可以被一个或多个用例包含。通过提炼通用的行为，将它变成可以多次重复使用的用例。有助于降低功能重复级别。</p><h3 id="扩展用例" tabindex="-1"><a class="header-anchor" href="#扩展用例" aria-hidden="true">#</a> 扩展用例</h3><p>一个用例可以被用来扩展另一个用例的行为，通常使用在特别情况下。例如：假设在修改一个特别类型的客户订单之前，用户必须得到某种更高级别的许可，然后“获得许可”<code>&lt;Get Approval&gt;</code>用例将有选择的扩展常规的“修改订单”<code>&lt;Modify Order&gt;</code>用例。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-extend.gif"></div><p><strong>扩展点</strong> - 扩展用例的加入点被定义为扩展点。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-extend-with-condition.gif"></div><p><strong>系统边界</strong> - 它用来显示用例在系统内部，执行者在系统的外部。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-use-case-system-boundary.gif"></div><h2 id="通信图" tabindex="-1"><a class="header-anchor" href="#通信图" aria-hidden="true">#</a> 通信图</h2><blockquote><p>通信图，以前称之为协作图，是一种交互图，<strong>所显示消息与时序图相似，但是它更侧重于对象间的联系</strong>。</p></blockquote><p>在通信图中，对象之间显示关联连接器。消息附加到这些关联上，显示短箭头指向消息流的方向。消息的顺序通过编号码显示。</p><p>下面的两个图用通信图和时序图分别显示相同的信息。尽管我们可能从通信图的编号码得到消息顺序，但它不是立即可见的。通信图十分清楚的显示了邻近对象间全部完整的消息传递。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-communications-diagram.gif"></div><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-diagram.gif"></div><h2 id="交互概述图" tabindex="-1"><a class="header-anchor" href="#交互概述图" aria-hidden="true">#</a> 交互概述图</h2><blockquote><p><strong>一个交互概览图是活动图的一种形式，它的节点代表交互图。交互图包含时序图，通信图，交互概览图和时间图。 大多数交互概览图标注与活动图一样。例如：起始，结束，判断，合并，分叉和结合节点是完全相同。并且，交互概览图介绍了两种新的元素：交互发生和交互元素。</strong></p></blockquote><h3 id="交互发生" tabindex="-1"><a class="header-anchor" href="#交互发生" aria-hidden="true">#</a> 交互发生</h3><p>交互发生引用现有的交互图。显示为一个引用框，左上角显示 &quot;ref&quot; 。被引用的图名显示在框的中央。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-interaction-overview-01.gif"></div><h3 id="交互元素" tabindex="-1"><a class="header-anchor" href="#交互元素" aria-hidden="true">#</a> 交互元素</h3><p>交互元素与交互发生相似之处在于都是在一个矩形框中显示一个现有的交互图。不同之处在内部显示参考图的内容不同。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-interaction-overview-02.gif"></div><h3 id="将它们放在一起" tabindex="-1"><a class="header-anchor" href="#将它们放在一起" aria-hidden="true">#</a> 将它们放在一起</h3><p>所有的活动图控件，都可以相同地被使用于交互概览图，如：分叉，结合，合并等等。它把控制逻辑放入较低一级的图中。下面的例子就说明了一个典型的销售过程。子过程是从交互发生抽象而来。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-interaction-overview-diagram.gif"></div><h2 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图" aria-hidden="true">#</a> 时序图</h2><blockquote><p><strong>时序图是交互图的一种形式，它显示对象沿生命线发展，对象之间随时间的交互表示为从源生命线指向目标生命线的消息。时序图能很好地显示那些对象与其它那些对象通信，什么消息触发了这些通信，时序图不能很好显示复杂过程的逻辑。</strong></p></blockquote><h3 id="生命线" tabindex="-1"><a class="header-anchor" href="#生命线" aria-hidden="true">#</a> 生命线</h3><p>一条生命线在时序图中代表一个独立的参与者。表示为包含对象名的矩形，如果它的名字是&quot;self&quot;，则说明该生命线代表控制带时序图的类元。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-lifelines.gif"></div><p>有时，时序图会包含一个顶端是执行者的生命线。这情况说明掌握这个时序图的是用例。健壮图中的边界，控制和实体元素也可以有生命线。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-more-lifelines.gif"></div><h3 id="消息" tabindex="-1"><a class="header-anchor" href="#消息" aria-hidden="true">#</a> 消息</h3><p>消息显示为箭头。消息可以完成传输，也可能丢失和找回，它可以是同步的，也可以是异步的，即可以是调用，也可以是信号。在下图中，第一条消息是同步消息(标为实箭头)完成传输，并隐含一条返回消息。第二条消息是异步消息 (标为实线箭头)，第三条是异步返回消息(标为虚线)。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-messages.gif"></div><h3 id="执行发生" tabindex="-1"><a class="header-anchor" href="#执行发生" aria-hidden="true">#</a> 执行发生</h3><p>向下延伸的细条状矩形表示执行事件或控制焦点的激活。在上图中有三个执行事件。第一个是源对象发送两条消息和收到两条回复。第二个是目标对象收到一条同步消息并返回一条回复。第三个是目标对象收到一条异步消息并返回一条回复。</p><h3 id="内部通信" tabindex="-1"><a class="header-anchor" href="#内部通信" aria-hidden="true">#</a> 内部通信</h3><p>内部消息表现为一个操作的递归调用，或一个方法调用属于同一个对象的其他方法。显示为生命线上执行事件的嵌套控制焦点。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-recursion.gif"></div><h3 id="迷路消息和拾取消息" tabindex="-1"><a class="header-anchor" href="#迷路消息和拾取消息" aria-hidden="true">#</a> 迷路消息和拾取消息</h3><p>迷路消息是那些发送了却没有到达指定接收者，或者到达的接收者不再当前图中。拾取消息是收到来自那些未知的发送者，或者来自没有显示在当前图的发送者的消息。它们都表明是去往或来自一个终点元素。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-lost-and-found.gif"></div><h3 id="生命线开始与结束" tabindex="-1"><a class="header-anchor" href="#生命线开始与结束" aria-hidden="true">#</a> 生命线开始与结束</h3><p>生命线可以在时序图时间刻度范围内创建和销毁，在下面的例子中，生命线被停止符号（叉号）终止。在前面的例子中，生命线顶端的符号（Child）显示在比创建它的对象符号（parent）沿页面要低的位置上。下图显示创建和终止对象。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-lost-and-found.gif"></div><h3 id="时间和期限约束" tabindex="-1"><a class="header-anchor" href="#时间和期限约束" aria-hidden="true">#</a> 时间和期限约束</h3><p>消息默认显示为水平线。因为生命线显示为沿屏幕向下的时间通道，所以当给实时系统建模，或是有时间约束的业务过程建模，考虑执行动作所需时间长度是很重要的。因此可以给消息设置一个期限约束，这样的消息显示为下斜线。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-time.gif"></div><h3 id="复合片段" tabindex="-1"><a class="header-anchor" href="#复合片段" aria-hidden="true">#</a> 复合片段</h3><p>如前面所说，时序图不适合表达复杂的过程逻辑。在一种情况下，有许多机制允许把一定程度的过程逻辑加入到图中，并把它们放到复合片段的标题下。复合片段是一个或多个处理顺序被包含在一个框架中，并在指定名称的环境下执行。片段可以是:</p><ul><li>选择性片段 (显示 “alt”) 为 if…then…else 结构建模。</li><li>选项片段 (显示 “opt”) 为 &quot;switch&quot;(开关) 结构建模。</li><li>中断片段对被处理事件的可选择顺序建模，而不是该图的其他部分。</li><li>并行片段(显示 “par”) 为并发处理建模。</li><li>弱顺序片段 (显示 “seq”) 包含了一组消息，这组消息必须在后继片段开始之前被处理。但不会把片段内消息的先后顺序强加到不共享同一条生命线的消息上。</li><li>严格顺序片段 (显示 “strict”) 包含了一系列需要按照给定顺序处理的消息。</li><li>非片段 (显示 “neg”) 包含了一系列不可用的消息。</li><li>关键片段 具有关键部分。</li><li>忽略片段 声明一个没有意义的消息，如果它出现在当前上下文中。</li><li>考虑片段与忽略片段相反，不包含在考虑片段内的消息都应该被忽略。</li><li>断言片段 (显示 “assert”)标明任何没有显示为声明操作数的顺序都是无效的。</li><li>循环片段 包含一系列被重复的消息。</li></ul><p>下图显示的是循环片段：</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-fragment.gif"></div><p>这也是一个类似于复合片段的交互发生。 交互发生被其他图参考，显示为左上角带&quot;ref&quot;，将被参考图名显示在方框的中间。</p><h3 id="门" tabindex="-1"><a class="header-anchor" href="#门" aria-hidden="true">#</a> 门</h3><p>门是连接片段内消息和片段外消息的连接点。 在 EA 中，门显示为片段框架上的小正方形。作用为时序图与页面外的连接器。 用来表示进来的消息源，或者出去消息的终点。下面两个图显示它们在实践中的使用。注意：&quot; top level diagram&quot;中的门用消息箭头指向参考片段，在这里没有必要把它画成方块。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-top-level-diagram.gif"></div><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-nested-diagram.gif"></div><h3 id="部分分解" tabindex="-1"><a class="header-anchor" href="#部分分解" aria-hidden="true">#</a> 部分分解</h3><p>一个对象可以引出多条生命线，使得对象内部和对象之间的消息显示在同一图上。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-part-decomposition.gif"></div><h3 id="状态常量-延续" tabindex="-1"><a class="header-anchor" href="#状态常量-延续" aria-hidden="true">#</a> 状态常量/延续</h3><p>状态常量是生命线的约束，运行时始终为&quot;真&quot;。显示为两侧半圆的矩形，如下图：</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-sequence-state-invariant.gif"></div><p>延续虽与状态常量有同样的标注，但是被用于复合片段，并可以延伸跨越多条生命线。</p><h2 id="时间图" tabindex="-1"><a class="header-anchor" href="#时间图" aria-hidden="true">#</a> 时间图</h2><blockquote><p><strong>UML 时间图被用来显示随时间变化，一个或多个元素的值或状态的更改。也显示时控事件之间的交互和管理它们的时间和期限约束。</strong></p></blockquote><h3 id="状态生命线" tabindex="-1"><a class="header-anchor" href="#状态生命线" aria-hidden="true">#</a> 状态生命线</h3><p>状态生命线显示随时间变化，一个单项状态的改变。不论时间单位如何选择，X 轴显示经过的时间，Y 轴被标为给出状态的列表。状态生命线如下所示：</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-state-lifeline.gif"></div><h3 id="值生命线" tabindex="-1"><a class="header-anchor" href="#值生命线" aria-hidden="true">#</a> 值生命线</h3><p>值生命线显示随时间变化，一个单项的值的变化。X 轴显示经过的时间，时间单位为任意，和状态生命线一样。平行线之间显示值，每次值变化，平行线交叉。如下图所示。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-value-lifeline.gif"></div><h3 id="将它们放在一起-1" tabindex="-1"><a class="header-anchor" href="#将它们放在一起-1" aria-hidden="true">#</a> 将它们放在一起</h3><p>状态和值的生命线能叠加组合。它们必须有相同的 X 轴。 消息可以从一个生命线传递到另一个。每一个状态和值的变换能有一个定义的事件，一个时间限制是指一个事件何时必须发生，和一个期限限制说明状态或值多长时间必须有效。一旦这些已经被应用，其时间图可能显示如下。</p><div align="center"><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/design/uml/uml-timing-diagram.gif"></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',204),o={href:"https://sparxsystems.cn/resources/uml2_tutorial/index.html",target:"_blank",rel:"noopener noreferrer"};function g(m,l){const i=a("ExternalLinkIcon");return r(),n("div",null,[h,e("ul",null,[e("li",null,[e("a",o,[s("https://sparxsystems.cn/resources/uml2_tutorial/index.html"),d(i)])])])])}const v=t(c,[["render",g],["__file","index.html.vue"]]);export{v as default};
