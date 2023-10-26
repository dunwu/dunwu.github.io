import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c,a as e,b as i,d as o,e as n}from"./app-c2b0a364.js";const h={},l=n('<h1 id="http-缓存" tabindex="-1"><a class="header-anchor" href="#http-缓存" aria-hidden="true">#</a> Http 缓存</h1><p>HTTP 缓存分为 2 种，一种是强缓存，另一种是协商缓存。主要作用是可以加快资源获取速度，提升用户体验，减少网络传输，缓解服务端的压力。</p><h2 id="http-强缓存" tabindex="-1"><a class="header-anchor" href="#http-强缓存" aria-hidden="true">#</a> Http 强缓存</h2><p>不需要发送请求到服务端，直接读取浏览器本地缓存，在 Chrome 的 Network 中显示的 HTTP 状态码是 200 ，在 Chrome 中，强缓存又分为 Disk Cache (存放在硬盘中)和 Memory Cache (存放在内存中)，存放的位置是由浏览器控制的。是否强缓存由 <code>Expires</code>、<code>Cache-Control</code> 和 <code>Pragma</code> 3 个 Header 属性共同来控制。</p><h3 id="expires" tabindex="-1"><a class="header-anchor" href="#expires" aria-hidden="true">#</a> Expires</h3><p><code>Expires</code> 的值是一个 HTTP 日期，在浏览器发起请求时，会根据系统时间和 Expires 的值进行比较，如果系统时间超过了 Expires 的值，缓存失效。由于和系统时间进行比较，所以当系统时间和服务器时间不一致的时候，会有缓存有效期不准的问题。Expires 的优先级在三个 Header 属性中是最低的。</p><h3 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> Cache-Control</h3><p><code>Cache-Control</code> 是 HTTP/1.1 中新增的属性，在请求头和响应头中都可以使用，常用的属性值如有：</p><ul><li><code>max-age</code>：单位是秒，缓存时间计算的方式是距离发起的时间的秒数，超过间隔的秒数缓存失效</li><li><code>no-cache</code>：不使用强缓存，需要与服务器验证缓存是否新鲜</li><li><code>no-store</code>：禁止使用缓存（包括协商缓存），每次都向服务器请求最新的资源</li><li><code>private</code>：专用于个人的缓存，中间代理、CDN 等不能缓存此响应</li><li><code>public</code>：响应可以被中间代理、CDN 等缓存</li><li><code>must-revalidate</code>：在缓存过期前可以使用，过期后必须向服务器验证</li></ul><h3 id="pragma" tabindex="-1"><a class="header-anchor" href="#pragma" aria-hidden="true">#</a> Pragma</h3><p><code>Pragma</code> 只有一个属性值，就是 no-cache ，效果和 Cache-Control 中的 no-cache 一致，不使用强缓存，需要与服务器验证缓存是否新鲜，在 3 个头部属性中的优先级最高。</p><h2 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h2><p>当浏览器的强缓存失效的时候或者请求头中设置了不走强缓存，并且在请求头中设置了 If-Modified-Since 或者 If-None-Match 的时候，会将这两个属性值到服务端去验证是否命中协商缓存，如果命中了协商缓存，会返回 304 状态，加载浏览器缓存，并且响应头会设置 Last-Modified 或者 ETag 属性。</p><h3 id="etag-if-none-match" tabindex="-1"><a class="header-anchor" href="#etag-if-none-match" aria-hidden="true">#</a> ETag/If-None-Match</h3><p>Etag： 服务器响应请求时，通过此字段告诉浏览器当前资源在服务器生成的唯一标识（生成规则由服务器决定）</p><p>If-None-Match： 再次请求服务器时，浏览器的请求报文头部会包含此字段，后面的值为在缓存中获取的标识。服务器接收到次报文后发现 If-None-Match 则与被请求资源的唯一标识进行对比。</p><ol><li>不同，说明资源被改动过，则响应整个资源内容，返回状态码 200。</li><li>相同，说明资源无心修改，则响应 header，浏览器直接从缓存中获取数据信息。返回状态码 304.</li></ol><p>但是实际应用中由于 Etag 的计算是使用算法来得出的，而算法会占用服务端计算的资源，所有服务端的资源都是宝贵的，所以就很少使用 Etag 了。</p><h3 id="last-modified-if-modified-since" tabindex="-1"><a class="header-anchor" href="#last-modified-if-modified-since" aria-hidden="true">#</a> Last-Modified/If-Modified-Since</h3><p>Last-Modified： 服务器在响应请求时，会告诉浏览器资源的最后修改时间。</p><p>if-Modified-Since: 浏览器再次请求服务器的时候，请求头会包含此字段，后面跟着在缓存中获得的最后修改时间。服务端收到此请求头发现有 if-Modified-Since，则与被请求资源的最后修改时间进行对比，如果一致则返回 304 和响应报文头，浏览器只需要从缓存中获取信息即可。 从字面上看，就是说：从某个时间节点算起，是否文件被修改了</p><ol><li>如果真的被修改：那么开始传输响应一个整体，服务器返回：200 OK</li><li>如果没有被修改：那么只需传输响应 header，服务器返回：304 Not Modified</li></ol><p>if-Unmodified-Since: 从字面上看, 就是说: 从某个时间点算起, 是否文件没有被修改</p><ol><li>如果没有被修改:则开始`继续&#39;传送文件: 服务器返回: 200 OK</li><li>如果文件被修改:则不传输,服务器返回: 412 Precondition failed (预处理错误)</li></ol><p>这两个的区别是一个是修改了才下载一个是没修改才下载。 Last-Modified 说好却也不是特别好，因为如果在服务器上，一个资源被修改了，但其实际内容根本没发生改变，会因为 Last-Modified 时间匹配不上而返回了整个实体给客户端（即使客户端缓存里有个一模一样的资源）。为了解决这个问题，HTTP1.1 推出了 Etag。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',26),s={href:"https://juejin.im/post/5eb7f811f265da7bbc7cc5bd",target:"_blank",rel:"noopener noreferrer"},p={href:"https://juejin.im/post/5a1d4e546fb9a0450f21af23",target:"_blank",rel:"noopener noreferrer"},f={href:"https://juejin.im/post/5a6c87c46fb9a01ca560b4d7",target:"_blank",rel:"noopener noreferrer"};function m(_,u){const a=r("ExternalLinkIcon");return t(),c("div",null,[l,e("ul",null,[e("li",null,[e("a",s,[i("图解 HTTP 缓存"),o(a)])]),e("li",null,[e("a",p,[i("HTTP----HTTP 缓存机制"),o(a)])]),e("li",null,[e("a",f,[i("缓存详解"),o(a)])])])])}const T=d(h,[["render",m],["__file","06.Http缓存.html.vue"]]);export{T as default};
