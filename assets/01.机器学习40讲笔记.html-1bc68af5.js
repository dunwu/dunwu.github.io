import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,e as i}from"./app-e12ad880.js";const t={},n=i('<h1 id="《机器学习-40-讲》笔记" tabindex="-1"><a class="header-anchor" href="#《机器学习-40-讲》笔记" aria-hidden="true">#</a> 《机器学习 40 讲》笔记</h1><h2 id="开篇词-打通修炼机器学习的任督二脉" tabindex="-1"><a class="header-anchor" href="#开篇词-打通修炼机器学习的任督二脉" aria-hidden="true">#</a> 开篇词 | 打通修炼机器学习的任督二脉</h2><p>“机器学习”分为 3 个模块</p><ul><li><strong>机器学习概观</strong>：介绍机器学习中超脱于具体模型和方法之上的一些共性问题</li><li><strong>统计学习（频率学派）</strong>：利用不同的模型去拟合数据背后的规律；用拟合出的规律去推断和预测未知的结果</li><li><strong>符号学习（贝叶斯学派）</strong>：即概率图模型，它计算的是变量间的相关关系，每个遍历的先验分布和大量复杂的积分技巧。</li></ul><h2 id="_01-丨频率视角下的机器学习" tabindex="-1"><a class="header-anchor" href="#_01-丨频率视角下的机器学习" aria-hidden="true">#</a> 01 丨频率视角下的机器学习</h2><p>频率学派认为概率是随机事件发生频率的极限值；</p><p>频率学派执行参数估计时，视参数为确定取值，视数据为随机变量；</p><p>频率学派主要使用最大似然估计法，让数据在给定参数下的似然概率最大化；</p><p>频率学派对应机器学习中的统计学习，以经验风险最小化作为模型选择的准则。</p><h2 id="_02-贝叶斯视角下的机器学习" tabindex="-1"><a class="header-anchor" href="#_02-贝叶斯视角下的机器学习" aria-hidden="true">#</a> 02 | 贝叶斯视角下的机器学习</h2><p>贝叶斯学派认为概率是事件的可信程度或主体对事件的信任程度；</p><p>贝叶斯学派执行参数估计时，视参数为随机变量，视数据为确定取值；</p><p>贝叶斯学派主要使用最大后验概率法，让参数在先验信息和给定数据下的后验概率最大化；</p><p>贝叶斯学派对应机器学习中的概率图模型，可以在模型预测和选择中提供更加完整的信息。</p><h2 id="_03-丨学什么与怎么学" tabindex="-1"><a class="header-anchor" href="#_03-丨学什么与怎么学" aria-hidden="true">#</a> 03 丨学什么与怎么学</h2><p>什么样的问题才能通过机器学习来解决呢？</p><p>首先，问题不能是完全随机的，需要具备一定的模式；</p><p>其次，问题本身不能通过纯计算的方法解决；</p><p>再次，有大量的数据可供使用。</p><p>机器学习的任务，就是使用数据计算出与目标函数最接近的假设，或者说拟合出最精确的模型 。</p><p>输入特征类型</p><ul><li>具体特征（concrete feature）</li><li>原始特征（raw feature）</li><li>抽象特征（abstract feature）</li></ul><p>机器学习方法类型</p><ul><li>分类算法（classification）</li><li>回归算法（regression）</li><li>标注算法（tagging）</li></ul><p>如果训练数据中的每组输入都有其对应的输出结果，这类学习任务就是<strong>监督学习（supervised learning）</strong>，对没有输出的数据进行学习则是<strong>无监督学习（unsupervised learning）</strong>。监督学习具有更好的预测精度，无监督学习则可以发现数据中隐含的结构特性，起到的也是分类的作用，只不过没有给每个类别赋予标签而已。无监督学习可以用于对数据进行聚类或者密度估计，也可以完成异常检测这类监督学习中的预处理操作。直观地看，监督学习适用于预测任务，无监督学习适用于描述任务。</p><h2 id="_04-丨计算学习理论" tabindex="-1"><a class="header-anchor" href="#_04-丨计算学习理论" aria-hidden="true">#</a> 04 丨计算学习理论</h2>',26),s=[n];function l(h,p){return a(),r("div",null,s)}const c=e(t,[["render",l],["__file","01.机器学习40讲笔记.html.vue"]]);export{c as default};
