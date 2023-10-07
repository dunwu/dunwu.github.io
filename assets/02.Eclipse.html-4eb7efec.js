import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as g,o as l,c as p,a as i,b as t,d as e,e as a}from"./app-05b4da95.js";const o={},n=a('<h1 id="eclipse-快速入门" tabindex="-1"><a class="header-anchor" href="#eclipse-快速入门" aria-hidden="true">#</a> Eclipse 快速入门</h1><h2 id="代码智能提示" tabindex="-1"><a class="header-anchor" href="#代码智能提示" aria-hidden="true">#</a> 代码智能提示</h2><h3 id="java-智能提示" tabindex="-1"><a class="header-anchor" href="#java-智能提示" aria-hidden="true">#</a> Java 智能提示</h3><p>Window -&gt; Preferences -&gt; Java -&gt; Editor -&gt; Content Assist -&gt; Auto Activation</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-1a0d2206870c6542.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>delay 是自动弹出提示框的延时时间，我们可以修改成 100 毫秒；triggers 这里默认是&quot;.&quot;，只要加上&quot;abcdefghijklmnopqrstuvwxyz&quot;或者&quot;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;，嘿嘿！这下就能做到和 VS 一样的输入每个字母都能提示啦：</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-5eb9ad6afbe05289.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>其它类型的文件比如 HTML、JavaScript、JSP 如果也能提供提示那不是更爽了？有了第二点设置的基础，其实这些设置都是一样的。</p><h3 id="javascript-智能提示" tabindex="-1"><a class="header-anchor" href="#javascript-智能提示" aria-hidden="true">#</a> JavaScript 智能提示</h3><p>Window -&gt; Preferences -&gt; JavaScript-&gt; Editor -&gt; Content Assist -&gt; Auto-Activation</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-31bca3ed1b0d0050.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="html-智能提示" tabindex="-1"><a class="header-anchor" href="#html-智能提示" aria-hidden="true">#</a> HTML 智能提示</h3><p>Window -&gt; Preferences -&gt; Web -&gt; HTML Files -&gt; Editor -&gt; Content Assist -&gt; Auto-Activation</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-7c1ce7a35793f234.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>保存后，我们再来输入看看，感觉真是不错呀：</p><figure><img src="http://images2015.cnblogs.com/blog/318837/201605/318837-20160519135330638-166066199.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h2><p>很多教科书上说到 Eclipse 的插件安装都是通过 Help -&gt; Install New SoftWare 这种自动检索的方式，操作起来固然是方便，不过当我们不需要某种插件时不太容易找到要删除哪些内容，而且以后 Eclipse 版本升级的时候，通过这种方式安装过的插件都得再重新装一次。另外一种通过 Link 链接方式，就可以解决这些问题。</p>',18),s={href:"http://www.eclipse.org/babel/downloads.php",target:"_blank",rel:"noopener noreferrer"},c=a('<figure><img src="http://upload-images.jianshu.io/upload_images/3101171-d8a662eaba3550e3.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我的版本是 Kepler，然后进入下载页面，单击红框框中的链接，即可下载汉化包了：</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-3544d5393f4e298f.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>下载完解压缩后，会有个包含 features 和 plugin 目录的 eclipse 文件夹，把这个 eclipse 放在我们的 Eclipse 安装根目录，也就是和 eclipse.exe 同一级目录下。然后仍然在这一级目录下，新建一个 links 文件夹，并在该文件夹内，建一个 language.link 的文本文件。该文本文件的名字是可以任取的，后缀名是.link，而不是.txt 哟。好了，最后一步，编辑该文件，在里面写入刚才放入的语言包的地址，并用“\\”表示路径，一定要有 path= 这个前缀。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-18f74bf3080d2c1b.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>保存文件后，重新打开 Eclipse，熟悉的中文界面终于看到了。虽然汉化不完全，不过也够用了不是么。如果仍然出现的是英文，说明汉化失败，重新检查下 language.link 文件中配置的信息是否和汉化包的目录一致。　　其它的插件安装方法也是如此，当不需要某个插件时，只需删除存放插件的目录和 links 目录下相应的 link 文件，或者改变下 link 文件里面的路径变成无效路径即可；对 Eclipse 做高版本升级时，也只需把老版存放插件的目录和 links 目录复制过去就行了。</p><h2 id="基本设置" tabindex="-1"><a class="header-anchor" href="#基本设置" aria-hidden="true">#</a> 基本设置</h2><p>在 Preference 的搜索项中搜索 Text Editors。<br> 可以参考我的设置：<br> Show line numbers<br> Show print margin<br> Insert spaces for tabs</p><p><img src="http://upload-images.jianshu.io/upload_images/3101171-91aa025fbe7592f8.png" alt="img" loading="lazy"><br> 设置代码的字体类型和大小：</p><p>Window -&gt; Preferences -&gt; General -&gt; Appearance -&gt; Content Assist -&gt; Colors and Fornts，只需修改 Basic 里面的 Text Font 就可以了。</p><p>推荐 Courier New。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-49b9126aa0dd58c0.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-b7d6d71b2c211321.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="设置文本文件及-jsp-文件编码" tabindex="-1"><a class="header-anchor" href="#设置文本文件及-jsp-文件编码" aria-hidden="true">#</a> 设置文本文件及 JSP 文件编码</h2><p>Window -&gt; Preferences -&gt; General -&gt; Workspace -&gt; Text file encoding -&gt; Other：</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-b7aa010673565c88.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-b83fa3476fddde46.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="设置-jdk-本地-javadoc-api-路径及源码路径" tabindex="-1"><a class="header-anchor" href="#设置-jdk-本地-javadoc-api-路径及源码路径" aria-hidden="true">#</a> 设置 JDK 本地 JavaDOC API 路径及源码路径</h2><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-45b5dee3d3ce917a.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-f960daf4839662e3.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>还都生成的是无意义的变量名，这样可能会对含有相同类型的变量参数的调用顺序造成干扰；</p><p>这种问题，我们把 JDK 或者相应 Jar 包的源码导入进去就能避免了：</p><p>Window -&gt; Preferences -&gt; Java -&gt; Installed JREs -&gt; Edit：</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-a08c9166dbbf4361.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选中设置好的 JRE 目录，编辑，然后全选 JRE system libraries 下的所有 Jar 包，点击右边的 Source Attachment；</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-4e6c78afa8e3e50b.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>External location 下，选中 JDK 安装目录下的 src.zip 文件，一路 OK 下来。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-e82d03ce88f64312.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>设置完，我们再来看看，幸福来的好突然有木有！</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-400b3952aa60cb8e.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="设置-servlet-源码或其它-jar-包源码" tabindex="-1"><a class="header-anchor" href="#设置-servlet-源码或其它-jar-包源码" aria-hidden="true">#</a> 设置 Servlet 源码或其它 Jar 包源码</h2><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-ec1980f58297e42c.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上一步已经设置过了 JDK 的源码或 JavaDoc 路径，为啥现在又出来了呢？其实这个不难理解，因为我们使用到的类的源码并不在 JDK 的源码包中。</p><p>仔细看，我们会发现这些 Jar 包其实都在 Tomcat 根目录下的 lib 文件夹中，但是翻遍了 Tomcat 目录也没有相应的 jar 或 zip 文件呀。既然本地没有，那就去官网上找找：</p>',34),f={href:"http://tomcat.apache.org/download-70.cgi%E8%BF%99%E9%87%8C%E6%9C%89Tomcat%E7%9A%84%E5%AE%89%E8%A3%85%E5%8C%85%E5%92%8C%E6%BA%90%E7%A0%81%E5%8C%85%EF%BC%9B",target:"_blank",rel:"noopener noreferrer"},h=a('<figure><img src="http://upload-images.jianshu.io/upload_images/3101171-2962b9cd48422373.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以自定义一个专门用于存放 JavaSource 和 JavaDoc 的文件夹，把下载文件放到该目录下，</p><p>然后再切换到 Eclipse 下，选中没有代码提示的类或者函数， 按下 F3，点击 Change Attached Source：</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-e8c7cc17364206cf.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选择我们刚才下载好的 tomcat 源码文件，一路 OK。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-138cb66d553d9306.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>然后再回过头看看我们的代码提示，友好多了：</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-b27652e5ff1d6eab.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>其它 Jar 包源码的设置方式也一样。</p><h2 id="反编译插件-jd-eclipse" tabindex="-1"><a class="header-anchor" href="#反编译插件-jd-eclipse" aria-hidden="true">#</a> 反编译插件 JD-Eclipse</h2><p>无论是开发还是调试，反编译必不可少，每次都用 jd-gui 打开去看，多麻烦，干脆配置下 JD 插件，自动关联.class：</p>',11),u={href:"http://jd.benow.ca/",target:"_blank",rel:"noopener noreferrer"},m=a('<figure><img src="http://upload-images.jianshu.io/upload_images/3101171-403597b1b46607ef.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开 Eclipse，Window -&gt; Preferences -&gt; General - &gt; Editors ，把 .class 文件设置关联成 jd 插件的 editor</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-d95625fcf362526c.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="validate-优化" tabindex="-1"><a class="header-anchor" href="#validate-优化" aria-hidden="true">#</a> Validate 优化</h2><p>我们在 eclipse 里经常看到这个进程，validating... 逐个的检查每一个文件。那么如何关闭一些 validate 操作呢？</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-8323d6f595f96fdd.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>打开 eclipse，点击【window】菜单，选择【preferences】选项。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-88bd81ece1b3f29f.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在左侧点击【validation】选项，在右侧可以看到 eclipse 进行的自动检查都有哪些内容。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-0c3cf67c6e954dd6.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>将 Manual（手动）保持不动，将 build 里面只留下 classpath dependency Validator，其他的全部去掉。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-e1a3051fde4828d8.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>最后点击【OK】按钮，保存设置。</p><figure><img src="http://upload-images.jianshu.io/upload_images/3101171-7c6803eed8cf618a.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>以后如果需要对文件进行校验检查的时候，在文件上点击右键，点击【Validate】进行检查。</p><h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键" aria-hidden="true">#</a> 常用快捷键</h2><table><thead><tr><th>快捷键</th><th>描述</th></tr></thead><tbody><tr><td>Ctrl+1</td><td>快速修复（最经典的快捷键,就不用多说了，可以解决很多问题，比如 import 类、try catch 包围等）</td></tr><tr><td>Ctrl+Shift+F</td><td>格式化当前代码</td></tr><tr><td>Ctrl+Shift+M</td><td>添加类的 import 导入</td></tr><tr><td>Ctrl+Shift+O</td><td>组织类的 import 导入（既有 Ctrl+Shift+M 的作用，又可以帮你去除没用的导入，很有用）</td></tr><tr><td>Ctrl+Y</td><td>重做（与撤销 Ctrl+Z 相反）</td></tr><tr><td>Alt+/</td><td>内容辅助（帮你省了多少次键盘敲打，太常用了）</td></tr><tr><td>Ctrl+D</td><td>删除当前行或者多行</td></tr><tr><td>Alt+↓</td><td>当前行和下面一行交互位置（特别实用,可以省去先剪切,再粘贴了）</td></tr><tr><td>Alt+↑</td><td>当前行和上面一行交互位置（同上）</td></tr><tr><td>Ctrl+Alt+↓</td><td>复制当前行到下一行（复制增加）</td></tr><tr><td>Ctrl+Alt+↑</td><td>复制当前行到上一行（复制增加）</td></tr><tr><td>Shift+Enter</td><td>在当前行的下一行插入空行（这时鼠标可以在当前行的任一位置,不一定是最后）</td></tr><tr><td>Ctrl+/</td><td>注释当前行,再按则取消注释</td></tr><tr><td>Alt+Shift+↑</td><td>选择封装元素</td></tr><tr><td>Alt+Shift+←</td><td>选择上一个元素</td></tr><tr><td>Alt+Shift+→</td><td>选择下一个元素</td></tr><tr><td>Shift+←</td><td>从光标处开始往左选择字符</td></tr><tr><td>Shift+→</td><td>从光标处开始往右选择字符</td></tr><tr><td>Ctrl+Shift+←</td><td>选中光标左边的单词</td></tr><tr><td>Ctrl+Shift+→</td><td>选中光标又边的单词</td></tr><tr><td>Ctrl+←</td><td>光标移到左边单词的开头，相当于 vim 的 b</td></tr><tr><td>Ctrl+→</td><td>光标移到右边单词的末尾，相当于 vim 的 e</td></tr><tr><td>Ctrl+K</td><td>参照选中的 Word 快速定位到下一个（如果没有选中 word，则搜索上一次使用搜索的 word）</td></tr><tr><td>Ctrl+Shift+K</td><td>参照选中的 Word 快速定位到上一个</td></tr><tr><td>Ctrl+J</td><td>正向增量查找（按下 Ctrl+J 后,你所输入的每个字母编辑器都提供快速匹配定位到某个单词,如果没有,则在状态栏中显示没有找到了,查一个单词时,特别实用,要退出这个模式，按 escape 建）</td></tr><tr><td>Ctrl+Shift+J</td><td>反向增量查找（和上条相同,只不过是从后往前查）</td></tr><tr><td>Ctrl+Shift+U</td><td>列出所有包含字符串的行</td></tr><tr><td>Ctrl+H</td><td>打开搜索对话框</td></tr><tr><td>Ctrl+G</td><td>工作区中的声明</td></tr><tr><td>Ctrl+Shift+G</td><td>工作区中的引用</td></tr><tr><td>Ctrl+Shift+T</td><td>搜索类（包括工程和关联的第三 jar 包）</td></tr><tr><td>Ctrl+Shift+R</td><td>搜索工程中的文件</td></tr><tr><td>Ctrl+E</td><td>快速显示当前 Editer 的下拉列表（如果当前页面没有显示的用黑体表示）</td></tr><tr><td>F4</td><td>打开类型层次结构</td></tr><tr><td>F3</td><td>跳转到声明处</td></tr><tr><td>Alt+←</td><td>前一个编辑的页面</td></tr><tr><td>Alt+→</td><td>下一个编辑的页面（当然是针对上面那条来说了）</td></tr><tr><td>Ctrl+PageUp/PageDown</td><td>在编辑器中，切换已经打开的文件</td></tr><tr><td>F5</td><td>单步跳入</td></tr><tr><td>F6</td><td>单步跳过</td></tr><tr><td>F7</td><td>单步返回</td></tr><tr><td>F8</td><td>继续</td></tr><tr><td>Ctrl+Shift+D</td><td>显示变量的值</td></tr><tr><td>Ctrl+Shift+B</td><td>在当前行设置或者去掉断点</td></tr><tr><td>Ctrl+R</td><td>运行至行(超好用，可以节省好多的断点)</td></tr><tr><td>Alt+Shift+R</td><td>重命名方法名、属性或者变量名 （是我自己最爱用的一个了,尤其是变量和类的 Rename,比手工方法能节省很多劳动力）</td></tr><tr><td>Alt+Shift+M</td><td>把一段函数内的代码抽取成方法 （这是重构里面最常用的方法之一了,尤其是对一大堆泥团代码有用）</td></tr><tr><td>Alt+Shift+C</td><td>修改函数结构（比较实用,有 N 个函数调用了这个方法,修改一次搞定）</td></tr><tr><td>Alt+Shift+L</td><td>抽取本地变量（ 可以直接把一些魔法数字和字符串抽取成一个变量,尤其是多处调用的时候）</td></tr><tr><td>Alt+Shift+F</td><td>把 Class 中的 local 变量变为 field 变量 （比较实用的功能）</td></tr><tr><td>Alt+Shift+I</td><td>合并变量（可能这样说有点不妥 Inline）</td></tr><tr><td>Alt+Shift+V</td><td>移动函数和变量（不怎么常用）</td></tr><tr><td>Alt+Shift+Z</td><td>重构的后悔药（Undo）</td></tr><tr><td>Alt+Enter</td><td>显示当前选择资源的属性，windows 下的查看文件的属性就是这个快捷键，通常用来查看文件在 windows 中的实际路径</td></tr><tr><td>Ctrl+↑</td><td>文本编辑器 上滚行</td></tr><tr><td>Ctrl+↓</td><td>文本编辑器 下滚行</td></tr><tr><td>Ctrl+M</td><td>最大化当前的 Edit 或 View （再按则反之）</td></tr><tr><td>Ctrl+O</td><td>快速显示 OutLine</td></tr><tr><td>Ctrl+T</td><td>快速显示当前类的继承结构</td></tr><tr><td>Ctrl+W</td><td>关闭当前 Editer</td></tr><tr><td>Ctrl+L</td><td>文本编辑器 转至行</td></tr><tr><td>F2</td><td>显示工具提示描述</td></tr></tbody></table>',17);function b(j,_){const d=g("ExternalLinkIcon");return l(),p("div",null,[n,i("p",null,[t("我们以 Eclipse 的中文汉化包插件为例，先到官方提供的汉化包地址下载一个："),i("a",s,[t("http://www.eclipse.org/babel/downloads.php"),e(d)]),t("，注意选好自己的 Eclipse 版本：")]),c,i("p",null,[i("a",f,[t("http://tomcat.apache.org/download-70.cgi这里有Tomcat的安装包和源码包；"),e(d)])]),h,i("p",null,[t("先从 "),i("a",u,[t("http://jd.benow.ca/"),e(d)]),t(" 上下载离线安装包 jdeclipse_update_site.zip，解压缩后把 features、plugins 这 2 个文件夹复制到 新建文件夹 jdeclipse，然后把 jdeclipse 文件夹整个复制到 Eclipse 根目录的 dropins 文件夹下，重启 Eclipse 即可。这种方式是不是比建 link 文件更方便了？")]),m])}const E=r(o,[["render",b],["__file","02.Eclipse.html.vue"]]);export{E as default};
