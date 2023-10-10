import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-9db88853.js";const p={},e=t(`<h1 id="mongodb-事务" tabindex="-1"><a class="header-anchor" href="#mongodb-事务" aria-hidden="true">#</a> MongoDB 事务</h1><p>writeConcern 可以决定写操作到达多少个节点才算成功。</p><ul><li>默认：多节点复制集不做任何设定，所以是有可能丢失数据。</li><li><code>w: &quot;majority&quot;</code>：大部分节点确认，就视为写成功</li><li><code>w: &quot;all&quot;</code>：全部节点确认，才视为写成功</li></ul><p>journal 则定义如何才算成功。取值包括：</p><ul><li><code>true</code>：写操作落到 journal 文件中才算成功；</li><li><code>false</code>：写操作达到内存即算作成功。</li></ul><p>【示例】在集群中使用 writeConcern 参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">writeConcern</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token string">&#39;majoriy&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">writeConcern</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token string">&#39;4&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">writeConcern</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【示例】配置延迟节点，模拟网络延迟</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conf=rs.conf()
conf.memebers[2].slaveDelay=5
conf.memebers[2].priority=0
rs.reconfig(conf)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,r){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","04.MongoDB事务.html.vue"]]);export{k as default};
