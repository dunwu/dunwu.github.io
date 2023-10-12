import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as r,e as a}from"./app-2793f0f0.js";const e={},l=a('<h1 id="计算机网络之物理层" tabindex="-1"><a class="header-anchor" href="#计算机网络之物理层" aria-hidden="true">#</a> 计算机网络之物理层</h1><blockquote><p><strong>摘要</strong></p><p><strong>物理层（Physical Layer）</strong> - 物理层只接收和发送一串比特(bit)流，不考虑信息的意义和信息结构。</p><ul><li>数据单元：比特流。</li><li>典型设备：光纤、同轴电缆、双绞线、中继器和集线器。</li></ul></blockquote><h2 id="通信系统模型" tabindex="-1"><a class="header-anchor" href="#通信系统模型" aria-hidden="true">#</a> 通信系统模型</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/physical/数据通信系统的模型.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通信系统模型分为三大部分：源系统（包括信源和发送器）、传输系统、目的系统（包括信宿接收器）。</p><p>重要概念：</p><ul><li><strong>信源</strong> - 也叫源点。产生各类信息的实体。</li><li><strong>信道</strong> - 通信的通道，是信号传输的媒介。</li><li><strong>信宿</strong> - 传输信息的归宿。</li><li><strong>码元</strong> - 在数字通信中常常用时间间隔相同的符号来表示一个二进制数字，这样的时间间隔内的信号称为(二进制）码元。</li></ul><h2 id="通信方式" tabindex="-1"><a class="header-anchor" href="#通信方式" aria-hidden="true">#</a> 通信方式</h2><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/physical/通信方式.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>有三种通信方式：</p><ul><li>单工通信：单向传输</li><li>半双工通信：双向交替传输</li><li>全双工通信：双向同时传输</li></ul><h2 id="通信信号" tabindex="-1"><a class="header-anchor" href="#通信信号" aria-hidden="true">#</a> 通信信号</h2><p>通信的目的是传送消息。如语音、文字、图像、视频都是消息。数据时传送消息的实体。信号是数据的电气或电磁的表现。</p><p>模拟信号和数字信号</p><ul><li><strong>模拟信号</strong> - 模拟信号是连续的信号。</li><li><strong>数字信号</strong> - 数字信号是离散的信号。</li></ul><h2 id="调制解调" tabindex="-1"><a class="header-anchor" href="#调制解调" aria-hidden="true">#</a> 调制解调</h2><p>重要概念：</p><ul><li><strong>基带信号</strong> - 来自信源的信号叫做基带信号。</li><li><strong>调制</strong> - 将各种数字基带信号转换成适于信道传输的数字调制信号(已调信号或频带信号)。简单来说：调制即，数字 -&gt; 模拟。</li><li><strong>解调</strong> - 在接收端将收到的数字频带信号还原成数字基带信号。简单来说：解调即，模拟 -&gt; 数字。</li></ul><blockquote><p>📌 提示：我们上网时所用到的调制解调器（俗称“猫”），指的就是转换数字和模拟信号的机器。</p></blockquote><p>信号要在信道上传输就要经过调制。</p><p>调制分为：基带调制和带通调制</p><h3 id="基本带通调制方法" tabindex="-1"><a class="header-anchor" href="#基本带通调制方法" aria-hidden="true">#</a> 基本带通调制方法</h3><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/network/physical/基本调制方法.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果你收听过广播，一定经常听到 AM、FM 这两个关键词，这是什么意思呢？答案如下：</p><ul><li><strong>调幅（AM）</strong> - 即载波的<strong>振幅</strong>随基带数字信号而变化。</li><li><strong>调频（FM）</strong> - 即载波的<strong>频率</strong>随基带数字信号而变化。</li><li><strong>调相（PM）</strong> - 即载波的<strong>初始相位</strong>随基带数字信号而变化。</li></ul><blockquote><p>📌 提示：我们收听广播时，为了接收不同广播台的信号，就要调整 AM 或 FM，指的就是这里的调制方法。</p></blockquote><h2 id="通信媒介" tabindex="-1"><a class="header-anchor" href="#通信媒介" aria-hidden="true">#</a> 通信媒介</h2><p>通信媒介分为两大类：</p><ul><li>导引型 - 双绞线、电缆、光纤</li><li>非导引型 - 无线、红外线、大气、激光</li></ul><h2 id="信道复用" tabindex="-1"><a class="header-anchor" href="#信道复用" aria-hidden="true">#</a> 信道复用</h2><p>信道复用就是将用于传输信道的总带宽划分成若干个子频带（或称子信道），每一个子信道传输一路信号。</p><ul><li>频分复用</li><li>时分复用</li><li>波分复用</li><li>码分复用</li></ul>',32),n=[l];function o(s,g){return t(),r("div",null,n)}const d=i(e,[["render",o],["__file","11.物理层.html.vue"]]);export{d as default};
