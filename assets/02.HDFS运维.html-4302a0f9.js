import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as t,a,b as s,d as n,e as r}from"./app-d8d56f9e.js";const c={},o=r(`<h1 id="hdfs-运维" tabindex="-1"><a class="header-anchor" href="#hdfs-运维" aria-hidden="true">#</a> HDFS 运维</h1><h2 id="hdfs-命令" tabindex="-1"><a class="header-anchor" href="#hdfs-命令" aria-hidden="true">#</a> HDFS 命令</h2><h3 id="显示当前目录结构" tabindex="-1"><a class="header-anchor" href="#显示当前目录结构" aria-hidden="true">#</a> 显示当前目录结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前目录结构</span>
hdfs dfs <span class="token parameter variable">-ls</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
<span class="token comment"># 递归显示当前目录结构</span>
hdfs dfs <span class="token parameter variable">-ls</span> <span class="token parameter variable">-R</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
<span class="token comment"># 显示根目录下内容</span>
hdfs dfs <span class="token parameter variable">-ls</span> /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录</span>
hdfs dfs <span class="token parameter variable">-mkdir</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
<span class="token comment"># 递归创建目录</span>
hdfs dfs <span class="token parameter variable">-mkdir</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除文件</span>
hdfs dfs <span class="token parameter variable">-rm</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
<span class="token comment"># 递归删除目录和文件</span>
hdfs dfs <span class="token parameter variable">-rm</span> <span class="token parameter variable">-R</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入文件到-hdfs" tabindex="-1"><a class="header-anchor" href="#导入文件到-hdfs" aria-hidden="true">#</a> 导入文件到 HDFS</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 二选一执行即可</span>
hdfs dfs <span class="token parameter variable">-put</span> <span class="token punctuation">[</span>localsrc<span class="token punctuation">]</span> <span class="token punctuation">[</span>dst<span class="token punctuation">]</span>
hdfs dfs <span class="token parameter variable">-copyFromLocal</span> <span class="token punctuation">[</span>localsrc<span class="token punctuation">]</span> <span class="token punctuation">[</span>dst<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从-hdfs-导出文件" tabindex="-1"><a class="header-anchor" href="#从-hdfs-导出文件" aria-hidden="true">#</a> 从 HDFS 导出文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 二选一执行即可</span>
hdfs dfs <span class="token parameter variable">-get</span> <span class="token punctuation">[</span>dst<span class="token punctuation">]</span> <span class="token punctuation">[</span>localsrc<span class="token punctuation">]</span>
hdfs dfs <span class="token parameter variable">-copyToLocal</span> <span class="token punctuation">[</span>dst<span class="token punctuation">]</span> <span class="token punctuation">[</span>localsrc<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看文件内容" tabindex="-1"><a class="header-anchor" href="#查看文件内容" aria-hidden="true">#</a> 查看文件内容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 二选一执行即可</span>
hdfs dfs <span class="token parameter variable">-text</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
hdfs dfs <span class="token parameter variable">-cat</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示文件的最后一千字节" tabindex="-1"><a class="header-anchor" href="#显示文件的最后一千字节" aria-hidden="true">#</a> 显示文件的最后一千字节</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hdfs dfs <span class="token parameter variable">-tail</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
<span class="token comment"># 和Linux下一样，会持续监听文件内容变化 并显示文件的最后一千字节</span>
hdfs dfs <span class="token parameter variable">-tail</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拷贝文件" tabindex="-1"><a class="header-anchor" href="#拷贝文件" aria-hidden="true">#</a> 拷贝文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hdfs dfs <span class="token parameter variable">-cp</span> <span class="token punctuation">[</span>src<span class="token punctuation">]</span> <span class="token punctuation">[</span>dst<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hdfs dfs <span class="token parameter variable">-mv</span> <span class="token punctuation">[</span>src<span class="token punctuation">]</span> <span class="token punctuation">[</span>dst<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="统计当前目录下各文件大小" tabindex="-1"><a class="header-anchor" href="#统计当前目录下各文件大小" aria-hidden="true">#</a> 统计当前目录下各文件大小</h3><ul><li>默认单位字节</li><li>-s : 显示所有文件大小总和，</li><li>-h : 将以更友好的方式显示文件大小（例如 64.0m 而不是 67108864）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hdfs dfs -du &lt;path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="合并下载多个文件" tabindex="-1"><a class="header-anchor" href="#合并下载多个文件" aria-hidden="true">#</a> 合并下载多个文件</h3><ul><li>-nl 在每个文件的末尾添加换行符（LF）</li><li>-skip-empty-file 跳过空文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hdfs dfs -getmerge
# 示例 将HDFS上的hbase-policy.xml和hbase-site.xml文件合并后下载到本地的/usr/test.xml
hdfs dfs -getmerge -nl  /test/hbase-policy.xml /test/hbase-site.xml /usr/test.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计文件系统的可用空间信息" tabindex="-1"><a class="header-anchor" href="#统计文件系统的可用空间信息" aria-hidden="true">#</a> 统计文件系统的可用空间信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hdfs dfs -df -h /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更改文件复制因子" tabindex="-1"><a class="header-anchor" href="#更改文件复制因子" aria-hidden="true">#</a> 更改文件复制因子</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hdfs dfs -setrep [-R] [-w] &lt;numReplicas&gt; &lt;path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更改文件的复制因子。如果 path 是目录，则更改其下所有文件的复制因子</li><li>-w : 请求命令是否等待复制完成</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 示例
hdfs dfs -setrep -w 3 /user/hadoop/dir1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制" aria-hidden="true">#</a> 权限控制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 权限控制和Linux上使用方式一致
# 变更文件或目录的所属群组。 用户必须是文件的所有者或超级用户。
hdfs dfs -chgrp [-R] GROUP URI [URI ...]
# 修改文件或目录的访问权限  用户必须是文件的所有者或超级用户。
hdfs dfs -chmod [-R] &lt;MODE[,MODE]... | OCTALMODE&gt; URI [URI ...]
# 修改文件的拥有者  用户必须是超级用户。
hdfs dfs -chown [-R] [OWNER][:[GROUP]] URI [URI ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件检测" tabindex="-1"><a class="header-anchor" href="#文件检测" aria-hidden="true">#</a> 文件检测</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hdfs dfs -test - [defsz]  URI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可选选项：</p><ul><li>-d：如果路径是目录，返回 0。</li><li>-e：如果路径存在，则返回 0。</li><li>-f：如果路径是文件，则返回 0。</li><li>-s：如果路径不为空，则返回 0。</li><li>-r：如果路径存在且授予读权限，则返回 0。</li><li>-w：如果路径存在且授予写入权限，则返回 0。</li><li>-z：如果文件长度为零，则返回 0。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 示例
hdfs dfs -test -e filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hdfs-安全模式" tabindex="-1"><a class="header-anchor" href="#hdfs-安全模式" aria-hidden="true">#</a> HDFS 安全模式</h2><h3 id="什么是安全模式" tabindex="-1"><a class="header-anchor" href="#什么是安全模式" aria-hidden="true">#</a> 什么是安全模式？</h3><ul><li>安全模式是 HDFS 的一种特殊状态，在这种状态下，HDFS 只接收读数据请求，而不接收写入、删除、修改等变更请求。</li><li>安全模式是 HDFS 确保 Block 数据安全的一种保护机制。</li><li>Active NameNode 启动时，HDFS 会进入安全模式，DataNode 主动向 NameNode 汇报可用 Block 列表等信息，在系统达到安全标准前，HDFS 一直处于“只读”状态。</li></ul><h3 id="何时正常离开安全模式" tabindex="-1"><a class="header-anchor" href="#何时正常离开安全模式" aria-hidden="true">#</a> 何时正常离开安全模式</h3><ul><li>Block 上报率：DataNode 上报的可用 Block 个数 / NameNode 元数据记录的 Block 个数</li><li>当 Block 上报率 &gt;= 阈值时，HDFS 才能离开安全模式，默认阈值为 0.999</li><li>不建议手动强制退出安全模式</li></ul><h3 id="触发安全模式的原因" tabindex="-1"><a class="header-anchor" href="#触发安全模式的原因" aria-hidden="true">#</a> 触发安全模式的原因</h3><ul><li>NameNode 重启</li><li>NameNode 磁盘空间不足</li><li>Block 上报率低于阈值</li><li>DataNode 无法正常启动</li><li>日志中出现严重异常</li><li>用户操作不当，如：<strong>强制关机（特别注意！）</strong></li></ul><h3 id="故障排查" tabindex="-1"><a class="header-anchor" href="#故障排查" aria-hidden="true">#</a> 故障排查</h3><ul><li>找到 DataNode 不能正常启动的原因，重启 DataNode</li><li>清理 NameNode 磁盘</li><li>谨慎操作，有问题找星环，以免丢失数据</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,49),p={href:"http://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/caiyisen/p/7395843.html",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const e=d("ExternalLinkIcon");return l(),t("div",null,[o,a("ul",null,[a("li",null,[a("a",p,[s("HDFS 官方文档"),n(e)])]),a("li",null,[a("a",h,[s("HDFS 知识点总结"),n(e)])])])])}const g=i(c,[["render",u],["__file","02.HDFS运维.html.vue"]]);export{g as default};
