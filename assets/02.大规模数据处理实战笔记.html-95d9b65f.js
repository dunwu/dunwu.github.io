import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as h,a,b as l,d as n,e as t}from"./app-4f05975a.js";const s={},p=t('<h1 id="《大规模数据处理实战》笔记" tabindex="-1"><a class="header-anchor" href="#《大规模数据处理实战》笔记" aria-hidden="true">#</a> 《大规模数据处理实战》笔记</h1><h2 id="_00-丨开篇词丨从这里开始-带你走上硅谷一线系统架构师之路" tabindex="-1"><a class="header-anchor" href="#_00-丨开篇词丨从这里开始-带你走上硅谷一线系统架构师之路" aria-hidden="true">#</a> 00 丨开篇词丨从这里开始，带你走上硅谷一线系统架构师之路</h2><h2 id="_01-丨为什么-mapreduce-会被硅谷一线公司淘汰" tabindex="-1"><a class="header-anchor" href="#_01-丨为什么-mapreduce-会被硅谷一线公司淘汰" aria-hidden="true">#</a> 01 丨为什么 MapReduce 会被硅谷一线公司淘汰？</h2><p>高昂的维护成本</p><p>时间性能“达不到”用户的期待</p><h2 id="_02-mapreduce-后谁主沉浮-怎样设计下一代数据处理技术" tabindex="-1"><a class="header-anchor" href="#_02-mapreduce-后谁主沉浮-怎样设计下一代数据处理技术" aria-hidden="true">#</a> 02 | MapReduce 后谁主沉浮：怎样设计下一代数据处理技术？</h2><h2 id="_03-大规模数据处理初体验-怎样实现大型电商热销榜" tabindex="-1"><a class="header-anchor" href="#_03-大规模数据处理初体验-怎样实现大型电商热销榜" aria-hidden="true">#</a> 03 | 大规模数据处理初体验：怎样实现大型电商热销榜？</h2><p>不同量级 TOP K 算法的解决方案不同：</p><p>小规模：Hash 即可</p><p>大规模：由于单机的处理量不足以处理全量数据，势必分而治之：分片统计，然后聚合（即先 map 后 reduce）</p><h2 id="_04-丨分布式系统-上-学会用服务等级协议-sla-来评估你的系统" tabindex="-1"><a class="header-anchor" href="#_04-丨分布式系统-上-学会用服务等级协议-sla-来评估你的系统" aria-hidden="true">#</a> 04 丨分布式系统（上）：学会用服务等级协议 SLA 来评估你的系统</h2><p>SLA（Service-Level Agreement），也就是服务等级协议，指的是系统服务提供者（Provider）对客户（Customer）的一个服务承诺。</p><p>可用性：大厂一般要求可用性至少达到四个 9（即 99.99%）</p><p>准确性：准确率= 正确的有效请求数 / 有效的总请求数</p><p>系统容量：通常通过 QPS （Queries Per Second）来衡量</p><p>延迟：请求和响应的时间间隔</p><h2 id="_05-丨分布式系统-下-架构师不得不知的三大指标" tabindex="-1"><a class="header-anchor" href="#_05-丨分布式系统-下-架构师不得不知的三大指标" aria-hidden="true">#</a> 05 丨分布式系统（下）：架构师不得不知的三大指标</h2><ul><li>可扩展性（Scalability） <ul><li>水平扩展（Horizontal Scaling）</li><li>垂直扩展（Vertical Scaling）</li></ul></li><li>一致性（Consistency） <ul><li>强一致性（Strong Consistency）：系统中的某个数据被成功更新后，后续任何对该数据的读取操作都将得到更新<br> 后的值。所以在任意时刻，同一系统所有节点中的数据是一样的。</li><li>弱一致性（Weak Consistency）：系统中的某个数据被更新后，后续对该数据的读取操作可能得到更新后的值，<br> 也可能是更改前的值。但经过“不一致时间窗口”这段时间后，后续对该数据的读取都是更新后的值。</li><li>最终一致性（Eventual Consistency）：是弱一致性的特殊形式。存储系统保证，在没有新的更新的条件下，最终所有的访问都是最后更新的值。</li></ul></li><li>持久性（Data Durability）：意味着数据一旦被成功存储就可以一直继续使用，即使系统中的节点下线、宕机或数据损坏也是如。</li></ul><h2 id="_06-如何区分批处理还是流处理" tabindex="-1"><a class="header-anchor" href="#_06-如何区分批处理还是流处理" aria-hidden="true">#</a> 06 | 如何区分批处理还是流处理？</h2><ul><li>无边界数据（Unbounded Data）：是一种不断增长，可以说是无限的数据集。</li><li>有边界数据（Bounded Data）：是一种有限的数据集。</li><li>事件时间（Event Time）：指的是一个数据实际产生的时间点。</li><li>处理时间（Precessing Time）：指的是处理数据的系统架构实际接收到这个数据的时间点。</li><li>批处理：绝大部分情况下，批处理的输入数据都是有边界数据，同样的，输出结果也一样是有边界数据。所以在批处理中，我们所关心的更多会是数据的事件时间。 <ul><li>应用场景： <ul><li>日志分析：日志系统是在一定时间段（日，周或年）内收集的，而日志的数据处理分析是在不同的时间内执行，以得出有关系统的一些关键性能指标。</li><li>计费应用程序：计费应用程序会计算出一段时间内一项服务的使用程度，并生成计费信息，例如银行在每个月末生成的信用卡还款单。</li><li>数据仓库：数据仓库的主要目标是根据收集好的数据事件时间，将数据信息合并为静态快照 （static snapshot），并将它们聚合为每周、每月、每季度的报告等。</li></ul></li></ul></li><li>流处理：流处理的输入数据基本上都是无边界数据。 <ul><li>应用场景 <ul><li>实时监控：捕获和分析各种来源发布的数据，如传感器，新闻源，点击网页等。</li><li>实时商业智能：智能汽车，智能家居，智能病人护理等。</li><li>销售终端（POS）系统：像是股票价格的更新，允许用户实时完成付款的系统等。</li></ul></li></ul></li></ul><h2 id="_07-workflow-设计模式-让你在大规模数据世界中君临天下" tabindex="-1"><a class="header-anchor" href="#_07-workflow-设计模式-让你在大规模数据世界中君临天下" aria-hidden="true">#</a> 07 | Workflow 设计模式：让你在大规模数据世界中君临天下</h2><p>略</p><h2 id="_08-发布-订阅模式-流处理架构中的瑞士军刀" tabindex="-1"><a class="header-anchor" href="#_08-发布-订阅模式-流处理架构中的瑞士军刀" aria-hidden="true">#</a> 08 | 发布/订阅模式：流处理架构中的瑞士军刀</h2><p>略</p><h2 id="_09-丨-cap-定理-三选二-架构师必须学会的取舍" tabindex="-1"><a class="header-anchor" href="#_09-丨-cap-定理-三选二-架构师必须学会的取舍" aria-hidden="true">#</a> 09 丨 CAP 定理：三选二，架构师必须学会的取舍</h2><p>略</p><h2 id="_10-丨-lambda-架构-twitter-亿级实时数据分析架构背后的倚天剑" tabindex="-1"><a class="header-anchor" href="#_10-丨-lambda-架构-twitter-亿级实时数据分析架构背后的倚天剑" aria-hidden="true">#</a> 10 丨 Lambda 架构：Twitter 亿级实时数据分析架构背后的倚天剑</h2><p>Lambda 架构总共由三层系统组成：批处理层（Batch Layer），速度处理层（Speed Layer），以及用于响应查询的服务层（Serving Layer）。</p><h2 id="_11-丨-kappa-架构-利用-kafka-锻造的屠龙刀" tabindex="-1"><a class="header-anchor" href="#_11-丨-kappa-架构-利用-kafka-锻造的屠龙刀" aria-hidden="true">#</a> 11 丨 Kappa 架构：利用 Kafka 锻造的屠龙刀</h2><p>略</p><h2 id="_12-我们为什么需要-spark" tabindex="-1"><a class="header-anchor" href="#_12-我们为什么需要-spark" aria-hidden="true">#</a> 12 | 我们为什么需要 Spark？</h2><p>MapReduce 的缺点：</p><ul><li>高昂的维护成本</li><li>时间性能“达不到”用户的期待</li><li>MapReduce 模型的抽象层次低</li><li>只提供 Map 和 Reduce 两个操作</li><li>在 Hadoop 中，每一个 Job 的计算结果都会存储在 HDFS 文件存储系统中，所以每一步计算都要进行硬盘的读取和写入，大大增加了系统的延迟。</li><li>只支持批处理</li></ul><p>Spark 的优点</p><ul><li>性能比 MapReduce 高很多</li><li>Spark 提供了很多对 RDD 的操作，如 Map、Filter、flatMap、groupByKey 和 Union 等等，极大地提升了对各种复杂场景的支持</li></ul><h2 id="_13-丨弹性分布式数据集-spark-大厦的地基-上" tabindex="-1"><a class="header-anchor" href="#_13-丨弹性分布式数据集-spark-大厦的地基-上" aria-hidden="true">#</a> 13 丨弹性分布式数据集：Spark 大厦的地基（上）</h2><p>Spark 最基本的数据抽象是弹性分布式数据集（Resilient Distributed Dataset）</p><p>RDD 表示已被分区、不可变的，并能够被并行操作的数据集合。</p><h2 id="_14-丨弹性分布式数据集-spark-大厦的地基-下" tabindex="-1"><a class="header-anchor" href="#_14-丨弹性分布式数据集-spark-大厦的地基-下" aria-hidden="true">#</a> 14 丨弹性分布式数据集：Spark 大厦的地基（下）</h2><h2 id="_15-丨-sparksql-spark-数据查询的利器" tabindex="-1"><a class="header-anchor" href="#_15-丨-sparksql-spark-数据查询的利器" aria-hidden="true">#</a> 15 丨 SparkSQL：Spark 数据查询的利器</h2><h2 id="_16-spark-streaming-spark-的实时流计算-api" tabindex="-1"><a class="header-anchor" href="#_16-spark-streaming-spark-的实时流计算-api" aria-hidden="true">#</a> 16 | Spark Streaming：Spark 的实时流计算 API</h2><p>Spark Streaming 用时间片拆分了无限的数据流，然后对每一个数据片用类似于批处理的方法进行处理，输出的数据也是一块一块的</p><h2 id="_17-structured-streaming-如何用-dataframe-api-进行实时数据分析" tabindex="-1"><a class="header-anchor" href="#_17-structured-streaming-如何用-dataframe-api-进行实时数据分析" aria-hidden="true">#</a> 17 | Structured Streaming：如何用 DataFrame API 进行实时数据分析?</h2><h2 id="_18-丨-wordcount-从零开始运行你的第一个-spark-应用" tabindex="-1"><a class="header-anchor" href="#_18-丨-wordcount-从零开始运行你的第一个-spark-应用" aria-hidden="true">#</a> 18 丨 WordCount：从零开始运行你的第一个 Spark 应用</h2><h2 id="_19-丨综合案例实战-处理加州房屋信息-构建线性回归模型" tabindex="-1"><a class="header-anchor" href="#_19-丨综合案例实战-处理加州房屋信息-构建线性回归模型" aria-hidden="true">#</a> 19 丨综合案例实战：处理加州房屋信息，构建线性回归模型</h2><h2 id="_20-丨流处理案例实战-分析纽约市出租车载客信息" tabindex="-1"><a class="header-anchor" href="#_20-丨流处理案例实战-分析纽约市出租车载客信息" aria-hidden="true">#</a> 20 丨流处理案例实战：分析纽约市出租车载客信息</h2><hr><p>读到此处，感觉收获甚少，暂时搁置阅读。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',49),c={href:"https://time.geekbang.org/column/intro/100025301",target:"_blank",rel:"noopener noreferrer"};function o(u,_){const e=i("ExternalLinkIcon");return d(),h("div",null,[p,a("ul",null,[a("li",null,[a("a",c,[l("大规模数据处理实战"),n(e)])])])])}const b=r(s,[["render",o],["__file","02.大规模数据处理实战笔记.html.vue"]]);export{b as default};
