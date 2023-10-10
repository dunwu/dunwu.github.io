import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as l,e as n}from"./app-207caadd.js";const i={},r=n('<h1 id="flume" tabindex="-1"><a class="header-anchor" href="#flume" aria-hidden="true">#</a> Flume</h1><blockquote><p><strong>Sqoop 是一个主要在 Hadoop 和关系数据库之间进行批量数据迁移的工具。</strong></p></blockquote><h2 id="flume-简介" tabindex="-1"><a class="header-anchor" href="#flume-简介" aria-hidden="true">#</a> Flume 简介</h2><h3 id="什么是-flume" tabindex="-1"><a class="header-anchor" href="#什么是-flume" aria-hidden="true">#</a> 什么是 Flume ？</h3><p>Flume 是一个分布式海量数据采集、聚合和传输系统。</p><p>特点</p><ul><li>基于事件的海量数据采集</li><li>数据流模型：Source -&gt; Channel -&gt; Sink</li><li>事务机制：支持重读重写，保证消息传递的可靠性</li><li>内置丰富插件：轻松与各种外部系统集成</li><li>高可用：Agent 主备切换</li><li>Java 实现：开源，优秀的系统设计</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><h2 id="flume-原理" tabindex="-1"><a class="header-anchor" href="#flume-原理" aria-hidden="true">#</a> Flume 原理</h2><h3 id="flume-基本概念" tabindex="-1"><a class="header-anchor" href="#flume-基本概念" aria-hidden="true">#</a> Flume 基本概念</h3><ul><li>Event：事件，最小数据传输单元，由 Header 和 Body 组成。</li><li>Agent：代理，JVM 进程，最小运行单元，由 Source、Channel、Sink 三个基本组件构成，负责将外部数据源产生的数据以 Event 的形式传输到目的地 <ul><li>Source：负责对接各种外部数据源，将采集到的数据封装成 Event，然后写入 Channel</li><li>Channel：Event 暂存容器，负责保存 Source 发送的 Event，直至被 Sink 成功读取</li><li>Sink：负责从 Channel 读取 Event，然后将其写入外部存储，或传输给下一阶段的 Agent</li><li>映射关系：1 个 Source -&gt; 多个 Channel，1 个 Channel -&gt; 多个 Sink，1 个 Sink -&gt; 1 个 Channel</li></ul></li></ul><h3 id="flume-基本组件" tabindex="-1"><a class="header-anchor" href="#flume-基本组件" aria-hidden="true">#</a> Flume 基本组件</h3><h4 id="source-组件" tabindex="-1"><a class="header-anchor" href="#source-组件" aria-hidden="true">#</a> Source 组件</h4><ul><li>对接各种外部数据源，将采集到的数据封装成 Event，然后写入 Channel</li><li>一个 Source 可向多个 Channel 发送 Event</li><li>Flume 内置类型丰富的 Source，同时用户可自定义 Source</li></ul><h4 id="channel-组件" tabindex="-1"><a class="header-anchor" href="#channel-组件" aria-hidden="true">#</a> Channel 组件</h4><ul><li>Event 中转暂存区，存储 Source 采集但未被 Sink 读取的 Event</li><li>为了平衡 Source 采集、Sink 读取的速度，可视为 Flume 内部的消息队列</li><li>线程安全并具有事务性，支持 Source 写失败重写和 Sink 读失败重读</li></ul><h4 id="sink-组件" tabindex="-1"><a class="header-anchor" href="#sink-组件" aria-hidden="true">#</a> Sink 组件</h4><ul><li>从 Channel 读取 Event，将其写入外部存储，或传输到下一阶段的 Agent</li><li>一个 Sink 只能从一个 Channel 中读取 Event</li><li>Sink 成功读取 Event 后，向 Channel 提交事务，Event 被删除，否则 Channel 会等待 Sink 重新读取</li></ul><h3 id="flume-数据流" tabindex="-1"><a class="header-anchor" href="#flume-数据流" aria-hidden="true">#</a> Flume 数据流</h3><p>单层架构</p><p>优点：架构简单，使用方便，占用资源较少<br> 缺点<br> 如果采集的数据源或 Agent 较多，将 Event 写入到 HDFS 会产生很多小文件<br> 外部存储升级维护或发生故障，需对采集层的所有 Agent 做处理，人力成本较高，系统稳定性较差<br> 系统安全性较差<br> 数据源管理较混乱</p>',21),h=[r];function t(u,d){return a(),l("div",null,h)}const s=e(i,[["render",t],["__file","01.flume.html.vue"]]);export{s as default};
