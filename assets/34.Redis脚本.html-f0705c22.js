import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as e,b as t,d as r,e as s}from"./app-dc48b2dc.js";const l={},u=s('<h1 id="redis-脚本" tabindex="-1"><a class="header-anchor" href="#redis-脚本" aria-hidden="true">#</a> Redis 脚本</h1><blockquote><p>Redis 脚本使用 Lua 解释器来执行脚本。 Redis 2.6 版本通过内嵌支持 Lua 环境。</p><p>关键词：<code>Lua</code></p></blockquote><h2 id="为什么使用-lua" tabindex="-1"><a class="header-anchor" href="#为什么使用-lua" aria-hidden="true">#</a> 为什么使用 Lua</h2><p>Lua 是一种轻量小巧的脚本语言，用标准 C 语言编写并以源代码形式开放， 其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。</p><p>在 Redis 中，执行单一命令是原子性操作，所以不会出现并发问题。但有的业务场景下，需要执行多个命令，同时确保不出现并发问题，这就需要用到 Lua 脚本了。</p><p><strong>Redis 执行 Lua 是原子操作</strong>。因为 Redis 使用串行化的方式来执行 Redis 命令， 所以在任何特定时间里， 最多都只会有一个脚本能够被放进 Lua 环境里面运行， 因此， 整个 Redis 服务器只需要创建一个 Lua 环境即可。</p><p>由于，Redis 执行 Lua 具有原子性，所以常被用于需要原子性执行多命令的场景。</p><h2 id="redis-脚本命令" tabindex="-1"><a class="header-anchor" href="#redis-脚本命令" aria-hidden="true">#</a> Redis 脚本命令</h2><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>EVAL</code></td><td><code>EVAL</code> 命令为客户端输入的脚本在 Lua 环境中定义一个函数， 并通过调用这个函数来执行脚本。</td></tr><tr><td><code>EVALSHA</code></td><td><code>EVALSHA</code> 命令通过直接调用 Lua 环境中已定义的函数来执行脚本。</td></tr><tr><td><code>SCRIPT_FLUSH</code></td><td><code>SCRIPT_FLUSH</code> 命令会清空服务器 <code>lua_scripts</code> 字典中保存的脚本， 并重置 Lua 环境。</td></tr><tr><td><code>SCRIPT_EXISTS</code></td><td><code>SCRIPT_EXISTS</code> 命令接受一个或多个 SHA1 校验和为参数， 并通过检查 <code>lua_scripts</code> 字典来确认校验和对应的脚本是否存在。</td></tr><tr><td><code>SCRIPT_LOAD</code></td><td><code>SCRIPT_LOAD</code> 命令接受一个 Lua 脚本为参数， 为该脚本在 Lua 环境中创建函数， 并将脚本保存到 <code>lua_scripts</code> 字典中。</td></tr><tr><td><code>SCRIPT_KILL</code></td><td><code>SCRIPT_KILL</code> 命令用于停止正在执行的脚本。</td></tr></tbody></table><h2 id="redis-执行-lua-的工作流程" tabindex="-1"><a class="header-anchor" href="#redis-执行-lua-的工作流程" aria-hidden="true">#</a> Redis 执行 Lua 的工作流程</h2><p>为了在 Redis 服务器中执行 Lua 脚本， Redis 在服务器内嵌了一个 Lua 环境（environment）， 并对这个 Lua 环境进行了一系列修改， 从而确保这个 Lua 环境可以满足 Redis 服务器的需要。</p><p>Redis 服务器创建并修改 Lua 环境的整个过程由以下步骤组成：</p><ol><li>创建一个基础的 Lua 环境， 之后的所有修改都是针对这个环境进行的。</li><li>载入多个函数库到 Lua 环境里面， 让 Lua 脚本可以使用这些函数库来进行数据操作。</li><li>创建全局表格 <code>redis</code> ， 这个表格包含了对 Redis 进行操作的函数， 比如用于在 Lua 脚本中执行 Redis 命令的 <code>redis.call</code> 函数。</li><li>使用 Redis 自制的随机函数来替换 Lua 原有的带有副作用的随机函数， 从而避免在脚本中引入副作用。</li><li>创建排序辅助函数， Lua 环境使用这个辅佐函数来对一部分 Redis 命令的结果进行排序， 从而消除这些命令的不确定性。</li><li>创建 <code>redis.pcall</code> 函数的错误报告辅助函数， 这个函数可以提供更详细的出错信息。</li><li>对 Lua 环境里面的全局环境进行保护， 防止用户在执行 Lua 脚本的过程中， 将额外的全局变量添加到了 Lua 环境里面。</li><li>将完成修改的 Lua 环境保存到服务器状态的 <code>lua</code> 属性里面， 等待执行服务器传来的 Lua 脚本。</li></ol><h2 id="redis-执行-lua-的要点" tabindex="-1"><a class="header-anchor" href="#redis-执行-lua-的要点" aria-hidden="true">#</a> Redis 执行 Lua 的要点</h2><ul><li>Redis 服务器专门使用一个伪客户端来执行 Lua 脚本中包含的 Redis 命令。</li><li>Redis 使用脚本字典来保存所有被 <code>EVAL</code> 命令执行过， 或者被 <code>SCRIPT_LOAD</code> 命令载入过的 Lua 脚本， 这些脚本可以用于实现 <code>SCRIPT_EXISTS</code> 命令， 以及实现脚本复制功能。</li><li>服务器在执行脚本之前， 会为 Lua 环境设置一个超时处理钩子， 当脚本出现超时运行情况时， 客户端可以通过向服务器发送 <code>SCRIPT_KILL</code> 命令来让钩子停止正在执行的脚本， 或者发送 <code>SHUTDOWN nosave</code> 命令来让钩子关闭整个服务器。</li><li>主服务器复制 <code>EVAL</code> 、 <code>SCRIPT_FLUSH</code> 、 <code>SCRIPT_LOAD</code> 三个命令的方法和复制普通 Redis 命令一样 —— 只要将相同的命令传播给从服务器就可以了。</li><li>主服务器在复制 <code>EVALSHA</code> 命令时， 必须确保所有从服务器都已经载入了 <code>EVALSHA</code> 命令指定的 SHA1 校验和所对应的 Lua 脚本， 如果不能确保这一点的话， 主服务器会将 <code>EVALSHA</code> 命令转换成等效的 <code>EVAL</code> 命令， 并通过传播 <code>EVAL</code> 命令来获得相同的脚本执行效果。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',16),L={href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"};function n(h,R){const d=o("ExternalLinkIcon");return c(),i("div",null,[u,e("ul",null,[e("li",null,[e("a",L,[t("《Redis 设计与实现》"),r(d)])])])])}const p=a(l,[["render",n],["__file","34.Redis脚本.html.vue"]]);export{p as default};
