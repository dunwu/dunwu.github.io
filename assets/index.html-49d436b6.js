import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as t}from"./app-eab0d091.js";const e={},p=t(`<h1 id="springboot-之安全快速入门" tabindex="-1"><a class="header-anchor" href="#springboot-之安全快速入门" aria-hidden="true">#</a> SpringBoot 之安全快速入门</h1><h2 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> QuickStart</h2><p>（1）添加依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）添加配置</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.security.user.name</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token key attr-name">spring.security.user.password</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token key attr-name">spring.security.user.roles</span> <span class="token punctuation">=</span> <span class="token value attr-value">USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）启动应用后，访问任意路径，都会出现以下页面，提示你先执行登录操作。输入配置的用户名、密码（root/root）即可访问应用页面。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/image-20191118150326556.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,8),o=[p];function c(i,l){return n(),s("div",null,o)}const d=a(e,[["render",c],["__file","index.html.vue"]]);export{d as default};
