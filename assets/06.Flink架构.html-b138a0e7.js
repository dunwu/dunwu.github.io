import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as i,a as e,b as n,d as s,e as o}from"./app-05b4da95.js";const h={},c=e("h1",{id:"flink-架构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flink-架构","aria-hidden":"true"},"#"),n(" Flink 架构")],-1),d=e("h2",{id:"flink-的部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flink-的部署","aria-hidden":"true"},"#"),n(" Flink 的部署")],-1),k={href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/YARN.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mesos.apache.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"Flink 被设计为能够很好地工作在上述每个资源管理器中，这是通过资源管理器特定(resource-manager-specific)的部署模式实现的。Flink 可以采用与当前资源管理器相适应的方式进行交互。",-1),_=e("p",null,"部署 Flink 应用程序时，Flink 会根据应用程序配置的并行性自动标识所需的资源，并从资源管理器请求这些资源。在发生故障的情况下，Flink 通过请求新资源来替换发生故障的容器。提交或控制应用程序的所有通信都是通过 REST 调用进行的，这可以简化 Flink 与各种环境中的集成。",-1),u=e("h2",{id:"运行任意规模应用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行任意规模应用","aria-hidden":"true"},"#"),n(" 运行任意规模应用")],-1),b=e("p",null,"Flink 旨在任意规模上运行有状态流式应用。因此，应用程序被并行化为可能数千个任务，这些任务分布在集群中并发执行。所以应用程序能够充分利用无尽的 CPU、内存、磁盘和网络 IO。而且 Flink 很容易维护非常大的应用程序状态。其异步和增量的检查点算法对处理延迟产生最小的影响，同时保证精确一次状态的一致性。",-1),m={href:"https://flink.apache.org/zh/poweredby.html",target:"_blank",rel:"noopener noreferrer"},F=o('<ul><li>处理<strong>每天处理数万亿的事件</strong>,</li><li>应用维护<strong>几 TB 大小的状态</strong></li><li>应用<strong>在数千个内核上运行</strong></li></ul><h2 id="利用内存性能" tabindex="-1"><a class="header-anchor" href="#利用内存性能" aria-hidden="true">#</a> 利用内存性能</h2><p>有状态的 Flink 程序针对本地状态访问进行了优化。任务的状态始终保留在内存中，如果状态大小超过可用内存，则会保存在能高效访问的磁盘数据结构中。任务通过访问本地（通常在内存中）状态来进行所有的计算，从而产生非常低的处理延迟。Flink 通过定期和异步地对本地状态进行持久化存储来保证故障场景下精确一次的状态一致性。</p><figure><img src="https://flink.apache.org/img/local-state.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="flink-集群剖析" tabindex="-1"><a class="header-anchor" href="#flink-集群剖析" aria-hidden="true">#</a> Flink 集群剖析</h2><p>Flink 运行时由两种类型的进程组成：一个 <strong><code>JobManager</code></strong> 和一个或者多个 <strong><code>TaskManager</code></strong>。</p><figure><img src="https://nightlies.apache.org/flink/flink-docs-release-1.14/fig/processes.svg" alt="The processes involved in executing a Flink dataflow" tabindex="0" loading="lazy"><figcaption>The processes involved in executing a Flink dataflow</figcaption></figure><p><em>Client</em> 不是运行时和程序执行的一部分，而是用于准备数据流并将其发送给 <code>JobManager</code>。之后，客户端可以断开连接（<em>分离模式</em>），或保持连接来接收进程报告（<em>附加模式</em>）。客户端可以作为触发执行 Java/Scala 程序的一部分运行，也可以在命令行进程 <code>./bin/flink run ...</code> 中运行。</p>',8),M=e("code",null,"JobManager",-1),T=e("code",null,"TaskManager",-1),J={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/standalone/overview/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/yarn/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"TaskManager",-1),z=e("code",null,"JobManager",-1),y=o('<h3 id="jobmanager" tabindex="-1"><a class="header-anchor" href="#jobmanager" aria-hidden="true">#</a> JobManager</h3><p><strong><code>JobManager</code></strong> 具有许多与协调 Flink 应用程序的分布式执行有关的职责，它决定</p><ul><li>何时调度下一个 task（或一组 task）</li><li>对完成的 task 或执行失败做出反应</li><li>协调 checkpoint</li><li>协调从失败中恢复</li><li>等等</li></ul><p><code>JobManager</code> 由三个不同的组件组成：</p>',4),A=e("li",null,[e("p",null,[e("strong",null,"ResourceManager"),n("：负责 Flink 集群中的资源提供、回收、分配 - 它管理 "),e("strong",null,"task slots"),n("，这是 Flink 集群中资源调度的单位（请参考 "),e("a",{href:"#TaskManager"},"TaskManager"),n("。Flink 为不同的环境和资源提供者（例如 YARN、Kubernetes 和 standalone 部署）实现了对应的 ResourceManager。在 standalone 设置中，ResourceManager 只能分配可用 TaskManager 的 slots，而不能自行启动新的 TaskManager。")])],-1),E=e("li",null,[e("p",null,[e("strong",null,"Dispatcher"),n("：提供了一个 REST 接口，用来提交 Flink 应用程序执行，并为每个提交的作业启动一个新的 JobMaster。它还运行 Flink WebUI 用来提供作业执行信息。")])],-1),w=e("strong",null,"JobMaster",-1),S={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/glossary/#logical-graph",target:"_blank",rel:"noopener noreferrer"},R=e("em",null,"leader",-1),j=e("em",null,"standby",-1),K={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/ha/overview/",target:"_blank",rel:"noopener noreferrer"},B=e("h3",{id:"taskmanager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#taskmanager","aria-hidden":"true"},"#"),n(" TaskManager")],-1),N=e("p",null,[e("em",null,"TaskManager"),n("（也称为 "),e("em",null,"worker"),n("）执行作业流的 task，并且缓存和交换数据流。")],-1),V=e("em",null,"slot",-1),q={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/flink-architecture/#tasks-and-operator-chains",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"tasks-和算子链",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tasks-和算子链","aria-hidden":"true"},"#"),n(" Tasks 和算子链")],-1),H=e("em",null,"链接",-1),L=e("em",null,"tasks",-1),P={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/datastream/operators/overview/#task-chaining-and-resource-groups",target:"_blank",rel:"noopener noreferrer"},Y=o('<p>下图中样例数据流用 5 个 subtask 执行，因此有 5 个并行线程。</p><figure><img src="https://nightlies.apache.org/flink/flink-docs-release-1.14/fig/tasks_chains.svg" alt="Operator chaining into Tasks" tabindex="0" loading="lazy"><figcaption>Operator chaining into Tasks</figcaption></figure><h2 id="task-slots-和资源" tabindex="-1"><a class="header-anchor" href="#task-slots-和资源" aria-hidden="true">#</a> Task Slots 和资源</h2><p>每个 worker（TaskManager）都是一个 <em>JVM 进程</em>，可以在单独的线程中执行一个或多个 subtask。为了控制一个 TaskManager 中接受多少个 task，就有了所谓的 <strong>task slots</strong>（至少一个）。</p><p>每个 <em>task slot</em> 代表 TaskManager 中资源的固定子集。例如，具有 3 个 slot 的 TaskManager，会将其托管内存 1/3 用于每个 slot。分配资源意味着 subtask 不会与其他作业的 subtask 竞争托管内存，而是具有一定数量的保留托管内存。注意此处没有 CPU 隔离；当前 slot 仅分离 task 的托管内存。</p><p>通过调整 task slot 的数量，用户可以定义 subtask 如何互相隔离。每个 TaskManager 有一个 slot，这意味着每个 task 组都在单独的 JVM 中运行（例如，可以在单独的容器中启动）。具有多个 slot 意味着更多 subtask 共享同一 JVM。同一 JVM 中的 task 共享 TCP 连接（通过多路复用）和心跳信息。它们还可以共享数据集和数据结构，从而减少了每个 task 的开销。</p><figure><img src="https://nightlies.apache.org/flink/flink-docs-release-1.14/fig/tasks_slots.svg" alt="A TaskManager with Task Slots and Tasks" tabindex="0" loading="lazy"><figcaption>A TaskManager with Task Slots and Tasks</figcaption></figure><p>默认情况下，Flink 允许 subtask 共享 slot，即便它们是不同的 task 的 subtask，只要是来自于同一作业即可。结果就是一个 slot 可以持有整个作业管道。允许 <em>slot 共享</em>有两个主要优点：</p><ul><li>Flink 集群所需的 task slot 和作业中使用的最大并行度恰好一样。无需计算程序总共包含多少个 task（具有不同并行度）。</li><li>容易获得更好的资源利用。如果没有 slot 共享，非密集 subtask（<em>source/map()</em>）将阻塞和密集型 subtask（<em>window</em>） 一样多的资源。通过 slot 共享，我们示例中的基本并行度从 2 增加到 6，可以充分利用分配的资源，同时确保繁重的 subtask 在 TaskManager 之间公平分配。</li></ul><figure><img src="https://nightlies.apache.org/flink/flink-docs-release-1.14/fig/slot_sharing.svg" alt="TaskManagers with shared Task Slots" tabindex="0" loading="lazy"><figcaption>TaskManagers with shared Task Slots</figcaption></figure><h2 id="flink-应用程序执行" tabindex="-1"><a class="header-anchor" href="#flink-应用程序执行" aria-hidden="true">#</a> Flink 应用程序执行</h2>',11),I=e("em",null,"Flink 应用程序",-1),O=e("code",null,"main()",-1),D=e("code",null,"LocalEnvironment",-1),G=e("code",null,"RemoteEnvironment",-1),U=e("code",null,"ExecutionEnvironment",-1),Z={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/dev/datastream/overview/#anatomy-of-a-flink-program",target:"_blank",rel:"noopener noreferrer"},W={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/glossary/#flink-session-cluster",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/glossary/#flink-job-cluster",target:"_blank",rel:"noopener noreferrer"},X={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/glossary/#flink-application-cluster",target:"_blank",rel:"noopener noreferrer"},$={id:"flink-session-集群",tabindex:"-1"},ee=e("a",{class:"header-anchor",href:"#flink-session-集群","aria-hidden":"true"},"#",-1),ne={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/flink-architecture/#flink-session-%E9%9B%86%E7%BE%A4",target:"_blank",rel:"noopener noreferrer"},ae=e("ul",null,[e("li",null,[e("strong",null,"集群生命周期"),n("：在 Flink Session 集群中，客户端连接到一个预先存在的、长期运行的集群，该集群可以接受多个作业提交。即使所有作业完成后，集群（和 JobManager）仍将继续运行直到手动停止 session 为止。因此，Flink Session 集群的寿命不受任何 Flink 作业寿命的约束。")]),e("li",null,[e("strong",null,"资源隔离"),n("：TaskManager slot 由 ResourceManager 在提交作业时分配，并在作业完成时释放。由于所有作业都共享同一集群，因此在集群资源方面存在一些竞争 — 例如提交工作阶段的网络带宽。此共享设置的局限性在于，如果 TaskManager 崩溃，则在此 TaskManager 上运行 task 的所有作业都将失败；类似的，如果 JobManager 上发生一些致命错误，它将影响集群中正在运行的所有作业。")]),e("li",null,[e("strong",null,"其他注意事项"),n("：拥有一个预先存在的集群可以节省大量时间申请资源和启动 TaskManager。有种场景很重要，作业执行时间短并且启动时间长会对端到端的用户体验产生负面的影响 — 就像对简短查询的交互式分析一样，希望作业可以使用现有资源快速执行计算。")])],-1),se=e("blockquote",null,[e("p",null,[n("以前，Flink Session 集群也被称为 "),e("em",null,"session 模式"),n("下的 Flink 集群。")])],-1),oe={id:"flink-job-集群",tabindex:"-1"},re=e("a",{class:"header-anchor",href:"#flink-job-集群","aria-hidden":"true"},"#",-1),le={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/flink-architecture/#flink-job-%E9%9B%86%E7%BE%A4",target:"_blank",rel:"noopener noreferrer"},te=e("ul",null,[e("li",null,[e("strong",null,"集群生命周期"),n("：在 Flink Job 集群中，可用的集群管理器（例如 YARN）用于为每个提交的作业启动一个集群，并且该集群仅可用于该作业。在这里，客户端首先从集群管理器请求资源启动 JobManager，然后将作业提交给在这个进程中运行的 Dispatcher。然后根据作业的资源请求惰性的分配 TaskManager。一旦作业完成，Flink Job 集群将被拆除。")]),e("li",null,[e("strong",null,"资源隔离"),n("：JobManager 中的致命错误仅影响在 Flink Job 集群中运行的一个作业。")]),e("li",null,[e("strong",null,"其他注意事项"),n("：由于 ResourceManager 必须应用并等待外部资源管理组件来启动 TaskManager 进程和分配资源，因此 Flink Job 集群更适合长期运行、具有高稳定性要求且对较长的启动时间不敏感的大型作业。")])],-1),ie=e("blockquote",null,[e("p",null,[n("以前，Flink Job 集群也被称为 "),e("em",null,"job (or per-job) 模式"),n("下的 Flink 集群。")])],-1),he={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/standalone/kubernetes/#per-job-cluster-mode",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/native_kubernetes/#per-job-cluster-mode",target:"_blank",rel:"noopener noreferrer"},de={id:"flink-application-集群",tabindex:"-1"},ke=e("a",{class:"header-anchor",href:"#flink-application-集群","aria-hidden":"true"},"#",-1),ge={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/flink-architecture/#flink-application-%E9%9B%86%E7%BE%A4",target:"_blank",rel:"noopener noreferrer"},pe=o('<ul><li><strong>集群生命周期</strong>：Flink Application 集群是专用的 Flink 集群，仅从 Flink 应用程序执行作业，并且 <code>main()</code>方法在集群上而不是客户端上运行。提交作业是一个单步骤过程：无需先启动 Flink 集群，然后将作业提交到现有的 session 集群；相反，将应用程序逻辑和依赖打包成一个可执行的作业 JAR 中，并且集群入口（<code>ApplicationClusterEntryPoint</code>）负责调用 <code>main()</code>方法来提取 JobGraph。例如，这允许你像在 Kubernetes 上部署任何其他应用程序一样部署 Flink 应用程序。因此，Flink Application 集群的寿命与 Flink 应用程序的寿命有关。</li><li><strong>资源隔离</strong>：在 Flink Application 集群中，ResourceManager 和 Dispatcher 作用于单个的 Flink 应用程序，相比于 Flink Session 集群，它提供了更好的隔离。</li></ul><blockquote><p>Flink Job 集群可以看做是 Flink Application 集群”客户端运行“的替代方案。</p></blockquote><h2 id="flink-高可用" tabindex="-1"><a class="header-anchor" href="#flink-高可用" aria-hidden="true">#</a> Flink 高可用</h2><p>默认情况下，每个 Flink 集群只有一个 JobManager 实例。这会导致 <em>单点故障（SPOF）</em>：如果 JobManager 崩溃，则不能提交任何新程序，运行中的程序也会失败。</p><p>使用 JobManager 高可用模式，你可以从 JobManager 失败中恢复，从而消除单点故障。</p><h3 id="如何启用集群高可用" tabindex="-1"><a class="header-anchor" href="#如何启用集群高可用" aria-hidden="true">#</a> 如何启用集群高可用</h3><p>JobManager 高可用是指，在任何时候都有一个 <strong>JobManager Leader</strong>，如果 Leader 出现故障，则有多个备用 JobManager 来接管领导。这解决了单点故障问题，只要有备用 JobManager 担任领导者，程序就可以继续运行。</p><p>如下是一个使用三个 JobManager 实例的例子：</p><figure><img src="https://nightlies.apache.org/flink/flink-docs-release-1.14/fig/jobmanager_ha_overview.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',9),fe={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/ha/overview/#high-availability-services",target:"_blank",rel:"noopener noreferrer"},_e=o('<ul><li><strong>领导者选举</strong>：从 <code>n</code> 个候选者中选出一个领导者</li><li><strong>服务发现</strong>：检索当前领导者的地址</li><li><strong>状态持久化</strong>：继承程序恢复作业所需的持久化状态（JobGraphs、用户代码 jar、已完成的检查点）</li></ul><h3 id="flink-高可用服务" tabindex="-1"><a class="header-anchor" href="#flink-高可用服务" aria-hidden="true">#</a> Flink 高可用服务</h3><p>Flink 提供了两种高可用服务实现：</p>',3),ue={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/ha/zookeeper_ha/",target:"_blank",rel:"noopener noreferrer"},be={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/ha/kubernetes_ha/",target:"_blank",rel:"noopener noreferrer"},me=e("h3",{id:"高可用数据生命周期",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#高可用数据生命周期","aria-hidden":"true"},"#"),n(" 高可用数据生命周期")],-1),Fe=e("p",null,"为了恢复提交的作业，Flink 持久化元数据和 job 组件。高可用数据将一直保存，直到相应的作业执行成功、被取消或最终失败。当这些情况发生时，将删除所有高可用数据，包括存储在高可用服务中的元数据。",-1),Me=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),n(" 参考资料")],-1),Te={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/",target:"_blank",rel:"noopener noreferrer"};function Je(ve,xe){const a=l("ExternalLinkIcon");return t(),i("div",null,[c,d,e("p",null,[n("Apache Flink 是一个分布式系统，它需要计算资源来执行应用程序。Flink 集成了所有常见的集群资源管理器，例如 "),e("a",k,[n("Hadoop YARN"),s(a)]),n("、 "),e("a",g,[n("Apache Mesos"),s(a)]),n(" 和 "),e("a",p,[n("Kubernetes"),s(a)]),n("，但同时也可以作为独立集群运行。")]),f,_,u,b,e("p",null,[e("a",m,[n("Flink 用户报告了其生产环境中一些令人印象深刻的扩展性数字"),s(a)])]),F,e("p",null,[n("可以通过多种方式启动 "),M,n(" 和 "),T,n("：直接在机器上作为 "),e("a",J,[n("standalone 集群"),s(a)]),n("启动、在容器中启动、或者通过 "),e("a",v,[n("YARN"),s(a)]),n(" 等资源框架管理并启动。"),x,n(" 连接到 "),z,n("，宣布自己可用，并被分配工作。")]),y,e("ul",null,[A,E,e("li",null,[e("p",null,[w,n("：负责管理单个 "),e("a",S,[n("JobGraph"),s(a)]),n(" 的执行。Flink 集群中可以同时运行多个作业，每个作业都有自己的 JobMaster。")])])]),e("p",null,[n("始终至少有一个 JobManager。高可用（HA）设置中可能有多个 JobManager，其中一个始终是 "),R,n("，其他的则是 "),j,n("（请参考 "),e("a",K,[n("高可用（HA）"),s(a)]),n("）。")]),B,N,e("p",null,[n("必须始终至少有一个 TaskManager。在 TaskManager 中资源调度的最小单位是 task "),V,n("。TaskManager 中 task slot 的数量表示并发处理 task 的数量。请注意一个 task slot 中可以执行多个算子（请参考"),e("a",q,[n("Tasks 和算子链"),s(a)]),n("）。")]),C,e("p",null,[n("对于分布式执行，Flink 将算子的 subtasks "),H,n("成 "),L,n("。每个 task 由一个线程执行。将算子链接成 task 是个有用的优化：它减少线程间切换、缓冲的开销，并且减少延迟的同时增加整体吞吐量。链行为是可以配置的；请参考"),e("a",P,[n("链文档"),s(a)]),n("以获取详细信息。")]),Y,e("p",null,[I,n(" 是从其 "),O,n(" 方法产生的一个或多个 Flink 作业的任何用户程序。这些作业的执行可以在本地 JVM（"),D,n("）中进行，或具有多台机器的集群的远程设置（"),G,n("）中进行。对于每个程序，"),U,n(" 提供了一些方法来控制作业执行（例如设置并行度）并与外界交互（请参考 "),e("a",Z,[n("Flink 程序剖析"),s(a)]),n(" ）。")]),e("p",null,[n("Flink 应用程序的作业可以被提交到长期运行的 "),e("a",W,[n("Flink Session 集群"),s(a)]),n("、专用的 "),e("a",Q,[n("Flink Job 集群"),s(a)]),n(" 或 "),e("a",X,[n("Flink Application 集群"),s(a)]),n("。这些选项之间的差异主要与集群的生命周期和资源隔离保证有关。")]),e("h3",$,[ee,n(" Flink Session 集群 "),e("a",ne,[n("#"),s(a)])]),ae,se,e("h3",oe,[re,n(" Flink Job 集群 "),e("a",le,[n("#"),s(a)])]),te,ie,e("blockquote",null,[e("p",null,[n("Kubernetes 不支持 Flink Job 集群。 请参考 "),e("a",he,[n("Standalone Kubernetes"),s(a)]),n(" 和 "),e("a",ce,[n("Native Kubernetes"),s(a)]),n("。")])]),e("h3",de,[ke,n(" Flink Application 集群 "),e("a",ge,[n("#"),s(a)])]),pe,e("p",null,[n("Flink 的 "),e("a",fe,[n("高可用服务"),s(a)]),n(" 封装了所需的服务，使一切可以正常工作：")]),_e,e("ul",null,[e("li",null,[e("a",ue,[n("ZooKeeper"),s(a)]),n("：每个 Flink 集群部署都可以使用 ZooKeeper HA 服务。它们需要一个运行的 ZooKeeper 复制组（quorum）。")]),e("li",null,[e("a",be,[n("Kubernetes"),s(a)]),n("：Kubernetes HA 服务只能运行在 Kubernetes 上。")])]),me,Fe,Me,e("ul",null,[e("li",null,[e("a",Te,[n("Flink 官方文档"),s(a)])])])])}const Ae=r(h,[["render",Je],["__file","06.Flink架构.html.vue"]]);export{Ae as default};
