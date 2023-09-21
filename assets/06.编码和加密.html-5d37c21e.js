import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as n,c as i,a as t,b as e,d as r,e as s}from"./app-2f2b7333.js";const p={},c=s('<h1 id="编码和加密" tabindex="-1"><a class="header-anchor" href="#编码和加密" aria-hidden="true">#</a> 编码和加密</h1><blockquote><p>关键词：<code>Base64</code>、<code>消息摘要</code>、<code>数字签名</code>、<code>对称加密</code>、<code>非对称加密</code>、<code>MD5</code>、<code>SHA</code>、<code>HMAC</code>、<code>AES</code>、<code>DES</code>、<code>DESede</code>、<code>RSA</code></p></blockquote><h2 id="base64-编码" tabindex="-1"><a class="header-anchor" href="#base64-编码" aria-hidden="true">#</a> Base64 编码</h2><h3 id="base64-原理" tabindex="-1"><a class="header-anchor" href="#base64-原理" aria-hidden="true">#</a> Base64 原理</h3><p>Base64 内容传送编码是一种以任意 8 位字节序列组合的描述形式，这种形式不易被人直接识别。</p><p>Base64 是一种很常见的编码规范，其作用是将二进制序列转换为人类可读的 ASCII 字符序列，常用在需用通过文本协议（比如 HTTP 和 SMTP）来传输二进制数据的情况下。<strong>Base64 并不是加密解密算法</strong>，尽管我们有时也听到使用 Base64 来加密解密的说法，但这里所说的加密与解密实际是指**编码（encode）<strong>和</strong>解码（decode）**的过程，其变换是非常简单的，仅仅能够避免信息被直接识别。</p><p>Base64 算法主要是将给定的字符以字符编码(如 ASCII 码，UTF-8 码)对应的十进制数为基准，做编码操作：</p><ol><li>将给定的字符串以字符为单位，转换为对应的字符编码。</li><li>将获得字符编码转换为二进制</li><li>对二进制码做分组转换，每 3 个字节为一组，转换为每 4 个 6 位二进制位一组（不足 6 位时低位补 0）。这是一个分组变化的过程，3 个 8 位二进制码和 4 个 6 位二进制码的长度都是 24 位（3<em>8 = 4</em>6 = 24）。</li><li>对获得的 4-6 二进制码补位，向 6 位二进制码添加 2 位高位 0，组成 4 个 8 位二进制码。</li><li>对获得的 4-8 二进制码转换为十进制码。</li><li>将获得的十进制码转换为 Base64 字符表中对应的字符。</li></ol><p><strong><em>Base64 编码表</em></strong></p><table><thead><tr><th><strong>索引</strong></th><th><strong>对应字符</strong></th><th><strong>索引</strong></th><th><strong>对应字符</strong></th><th><strong>索引</strong></th><th><strong>对应字符</strong></th><th><strong>索引</strong></th><th><strong>对应字符</strong></th></tr></thead><tbody><tr><td>0</td><td>A</td><td>17</td><td>R</td><td>34</td><td>i</td><td>51</td><td>z</td></tr><tr><td>1</td><td>B</td><td>18</td><td>S</td><td>35</td><td>j</td><td>52</td><td>0</td></tr><tr><td>2</td><td>C</td><td>19</td><td>T</td><td>36</td><td>k</td><td>53</td><td>1</td></tr><tr><td>3</td><td>D</td><td>20</td><td>U</td><td>37</td><td>l</td><td>54</td><td>2</td></tr><tr><td>4</td><td>E</td><td>21</td><td>V</td><td>38</td><td>m</td><td>55</td><td>3</td></tr><tr><td>5</td><td>F</td><td>22</td><td>W</td><td>39</td><td>n</td><td>56</td><td>4</td></tr><tr><td>6</td><td>G</td><td>23</td><td>X</td><td>40</td><td>o</td><td>57</td><td>5</td></tr><tr><td>7</td><td>H</td><td>24</td><td>Y</td><td>41</td><td>p</td><td>58</td><td>6</td></tr><tr><td>8</td><td>I</td><td>25</td><td>Z</td><td>42</td><td>q</td><td>59</td><td>7</td></tr><tr><td>9</td><td>J</td><td>26</td><td>a</td><td>43</td><td>r</td><td>60</td><td>8</td></tr><tr><td>10</td><td>K</td><td>27</td><td>b</td><td>44</td><td>s</td><td>61</td><td>9</td></tr><tr><td>11</td><td>L</td><td>28</td><td>c</td><td>45</td><td>t</td><td>62</td><td>+</td></tr><tr><td>12</td><td>M</td><td>29</td><td>d</td><td>46</td><td>u</td><td>63</td><td>/</td></tr><tr><td>13</td><td>N</td><td>30</td><td>e</td><td>47</td><td>v</td><td></td><td></td></tr><tr><td>14</td><td>O</td><td>31</td><td>f</td><td>48</td><td>w</td><td></td><td></td></tr><tr><td>15</td><td>P</td><td>32</td><td>g</td><td>49</td><td>x</td><td></td><td></td></tr><tr><td>16</td><td>Q</td><td>33</td><td>h</td><td>50</td><td>y</td><td></td><td></td></tr></tbody></table><h3 id="base64-应用" tabindex="-1"><a class="header-anchor" href="#base64-应用" aria-hidden="true">#</a> Base64 应用</h3><p>Base64 编码可用于在 HTTP 环境下传递较长的标识信息。在其他应用程序中，也常常需要把二进制数据编码为适合放在 URL(包括隐藏表单域)中的形式。此时，采用 Base64 编码具有不可读性，即所编码的数据不会被人用肉眼所直接看到，算是起到一个加密的作用。</p><p>然而，<strong>标准的 Base64 并不适合直接放在 URL 里传输</strong>，因为 URL 编码器会把标准 Base64 中的 <code>/</code> 和 <code>+</code> 字符变为形如 <code>%XX</code> 的形式，而这些 <code>%</code> 号在存入数据库时还需要再进行转换，因为 ANSI SQL 中已将 <code>%</code> 号用作通配符。</p><p>为解决此问题，可采用一种用于 URL 的改进 Base64 编码，它不仅在末尾填充 <code>=</code> 号，并将标准 Base64 中的“+”和“/”分别改成了 <code>-</code> 和 <code>_</code>，这样就免去了在 URL 编解码和数据库存储时所要作的转换，避免了编码信息长度在此过程中的增加，并统一了数据库、表单等处对象标识符的格式。</p><p>另有一种用于正则表达式的改进 Base64 变种，它将 <code>+</code> 和 <code>/</code> 改成了 <code>!</code> 和 <code>-</code>，因为 <code>+</code>, <code>*</code> 以及前面在 IRCu 中用到的 <code>[</code> 和 <code>]</code> 在正则表达式中都可能具有特殊含义。</p><h2 id="消息摘要" tabindex="-1"><a class="header-anchor" href="#消息摘要" aria-hidden="true">#</a> 消息摘要</h2><h3 id="消息摘要概述" tabindex="-1"><a class="header-anchor" href="#消息摘要概述" aria-hidden="true">#</a> 消息摘要概述</h3><p><strong>消息摘要，其实就是将需要摘要的数据作为参数，经过哈希函数(Hash)的计算，得到的散列值</strong>。</p><p>消息摘要是一个唯一对应一个消息或文本的固定长度的值，它由一个单向 Hash 加密函数对消息进行作用而产生。如果消息在途中改变了，则接收者通过对收到消息的新产生的摘要与原摘要比较，就可知道消息是否被改变了。因此消息摘要保证了消息的完整性。消息摘要采用单向 Hash 函数将需加密的明文&quot;摘要&quot;成一串密文，这一串密文亦称为数字指纹(Finger Print)。它有固定的长度，且不同的明文摘要成密文，其结果总是不同的，而同样的明文其摘要必定一致。这样这串摘要便可成为验证明文是否是&quot;真身&quot;的&quot;指纹&quot;了。</p><h3 id="消息摘要特点" tabindex="-1"><a class="header-anchor" href="#消息摘要特点" aria-hidden="true">#</a> 消息摘要特点</h3><ul><li>唯一性：数据只要有一点改变，那么再通过消息摘要算法得到的摘要也会发生变化。虽然理论上有可能会发生碰撞，但是概率极其低。</li><li>不可逆：消息摘要算法的密文无法被解密。</li><li>不需要密钥，可使用于分布式网络。</li><li>无论输入的明文有多长，计算出来的消息摘要的长度总是固定的。</li></ul><h3 id="消息摘要常用算法" tabindex="-1"><a class="header-anchor" href="#消息摘要常用算法" aria-hidden="true">#</a> 消息摘要常用算法</h3><p>消息摘要算法包括<strong>MD(Message Digest，消息摘要算法)</strong>、<strong>SHA(Secure Hash Algorithm，安全散列算法)</strong>、**MAC(Message AuthenticationCode，消息认证码算法)**共 3 大系列，常用于验证数据的完整性，是数字签名算法的核心算法。</p><p><strong>MD5</strong>和<strong>SHA1</strong>分别是<strong>MD</strong>、<strong>SHA</strong>算法系列中最有代表性的算法。</p><p>如今，MD5 已被发现有许多漏洞，从而不再安全。SHA 算法比 MD 算法的摘要长度更长，也更加安全。</p><h2 id="数字签名" tabindex="-1"><a class="header-anchor" href="#数字签名" aria-hidden="true">#</a> 数字签名</h2><p>数字签名算法可以看做是一种带有密钥的消息摘要算法，并且这种密钥包含了公钥和私钥。也就是说，<strong>数字签名算法是非对称加密算法和消息摘要算法的结合体</strong>。</p><p>数字签名算法要求能够验证数据完整性、认证数据来源，并起到抗否认的作用。</p><p>数字签名算法包含签名和验证两项操作，遵循私钥签名，公钥验证的方式。</p><p>签名时要使用私钥和待签名数据，验证时则需要公钥、签名值和待签名数据，其核心算法主要是消息摘要算法。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/advanced/java-message-digest-process.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>数字签名常用算法：<strong>RSA</strong>、<strong>DSA</strong>、<strong>ECDSA</strong></p><h2 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h2><p>对称加密算法主要有 DES、3DES（TripleDES）、AES、IDEA、RC2、RC4、RC5 和 Blowfish 等。</p><p>对称加密算法是应用较早的加密算法，技术成熟。在对称加密算法中，数据发信方将明文（原始数据）和加密密钥（mi yao）一起经过特殊加密算法处理后，使其变成复杂的加密密文发送出去。收信方收到密文后，若想解读原文，则需要使用加密用过的密钥及相同算法的逆算法对密文进行解密，才能使其恢复成可读明文。在对称加密算法中，使用的密钥只有一个，发收信双方都使用这个密钥对数据进行加密和解密，这就要求解密方事先必须知道加密密钥。</p><p>对称加密特点：</p><ul><li>优点：计算量小、加密速度快、加密效率高。</li><li>缺点：算法是公开的，安全性得不到保证。</li></ul><p>通信双方每次使用对称加密算法时，都需要使用其他人不知道的惟一密钥，这会使得通信双方所拥有的密钥数量呈几何级数增长，密钥管理成为用户的负担。对称加密算法在分布式网络系统上使用较为困难，主要是因为密钥管理困难，使用成本较高。</p><p>而与公钥、密钥加密算法比起来，对称加密算法能够提供加密和认证却缺乏了签名功能，使得使用范围有所缩小。</p><h3 id="对称加密原理" tabindex="-1"><a class="header-anchor" href="#对称加密原理" aria-hidden="true">#</a> 对称加密原理</h3><p>对称加密要求加密与解密使用同一个密钥，解密是加密的逆运算。由于加密、解密使用同一个密钥，这要求通信双方必须在通信前商定该密钥，并妥善保存该密钥。</p><p>对称加密体制分为两种：</p><p>一种是对明文的单个位（或字节）进行运算，称为流密码，也称为序列密码；</p><p>一种是把明文信息划分为不同的组（或块）结构，分别对每个组（或块）进行加密、解密，称为分组密码。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/advanced/symmetric-encryption.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>假设甲乙方作为通信双方。假定甲乙双方在消息传递前已商定加密算法，欲完成一次消息传递需要经过如下步骤。</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/advanced/symmetric-encryption-progress.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="对称加密工作模式" tabindex="-1"><a class="header-anchor" href="#对称加密工作模式" aria-hidden="true">#</a> 对称加密工作模式</h3><p>以 DES 算法的工作模式为例，DES 算法根据其加密算法所定义的明文分组的大小（56 位），将数据分割成若干 56 位的加密区块，再以加密区块为单位，分别进行加密处理。如果最后剩下不足一个区块的大小，称之为<strong>短块</strong>。短块的处理方法有填充法、流密码加密法、密文挪用技术。</p><p>根据数据加密时每个加密区块见得关联方式来区分，可以分为以下种工作模式：</p><p><strong>(1) 电子密码本模式(Electronic Code Book, ECB)</strong></p><p>用途：适合加密密钥，随机数等短数据。例如，安全地传递 DES 密钥，ECB 是最合适的模式。</p><p><strong>(2) 密文链接模式(Cipher Booki Chaining, CBC)</strong></p><p>用途：可加密任意长度的数据，适用于计算产生检测数据完整性的消息认证 MAC。</p><p><strong>(3) 密文反馈模式(Cipher Feed Back, CFB)</strong></p><p>用途：因错误传播无界，可以用于检查发现明文密文的篡改。</p><p><strong>(4) 输出反馈模式(Output Feed Back, OFB)</strong></p><p>用途：使用于加密冗余性较大的数据，比如语音和图像数据。</p><p>AES 算法除了以上 4 中模式外，还有一种新的工作模式：</p><p><strong>(5) 计数器模式(Counter, CTR)</strong></p><p>用途：适用于各种加密应用。</p><p>本文对于各种工作模式的原理展开描述。个人认为，作为工程应用，了解其用途即可。</p><h3 id="对称加密填充方法" tabindex="-1"><a class="header-anchor" href="#对称加密填充方法" aria-hidden="true">#</a> 对称加密填充方法</h3><p>Java 中对称加密对于短块的处理，一般是采用填充方式。</p><p>常采用的是：NoPadding（不填充）、Zeros 填充（0 填充）、PKCS5Padding 填充。</p><p><strong>ZerosPadding</strong></p><p>方式：全部填充为 0 的字节</p><p>结果如下：</p><p>F1 F2 F3 F4 F5 F6 F7 F8 //第一块</p><p>F9 00 00 00 00 00 00 00 //第二块</p><p><strong>PKCS5Padding</strong></p><p>方式：每个填充的字节都记录了填充的总字节数</p><p>结果如下：</p><p>F1 F2 F3 F4 F5 F6 F7 F8 //第一块</p><p>F9 07 07 07 07 07 07 07 //第二块</p><h3 id="基于口令加密的流程-pbe" tabindex="-1"><a class="header-anchor" href="#基于口令加密的流程-pbe" aria-hidden="true">#</a> 基于口令加密的流程（PBE）</h3><p>DES、DESede、AES、IDEA 这几种算法的应用模型几乎如出一辙。</p><p>但是，并非所有对称加密算法都是如此。</p><p>基于口令加密(Password Based Encryption, PBE)是一种基于口令加密的算法。其特点是：口令由用户自己掌管，采用随机数（这里叫做盐）杂凑多重加密等方法保证数据的安全性。</p><p>PBE 没有密钥概念，密钥在其他对称加密算法中是经过计算得出的，PBE 则使用口令替代了密钥。</p><p>流程：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/advanced/password-based-encryption-progress.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h2><p>非对称加密常用算法：DH(Diffie-Hellman，密钥交换算法)、RSA</p><p>非对称加密算法和对称加密算法的主要差别在于非对称加密算法用于加密和解密的密钥是不同的。一个公开，称为公钥（public key）；一个保密，称为私钥（private key）。因此，非对称加密算法也称为双钥加密算法或公钥加密算法。</p><p>非对称加密特点：</p><ul><li>优点：非对称加密算法解决了对称加密算法的密钥分配问题，并极大地提高了算法安全性。</li><li>缺点：算法比对称算法更复杂，因此加密、解密速度都比对称算法慢很多。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/master/cs/java/advanced/asymmetric-encryption.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>非对称加密算法实现机密信息交换的基本过程是：甲方生成一对密钥并将其中的一把作为公用密钥向其它方公开；得到该公用密钥的乙方使用该密钥对机密信息进行加密后再发送给甲方；甲方再用自己保存的另一把专用密钥对加密后的信息进行解密。</p><p>另一方面，甲方可以使用乙方的公钥对机密信息进行签名后再发送给乙方；乙方再用自己的私匙对数据进行验证。</p><p>甲方只能用其私钥解密，由其公钥加密后的任何信息。 非对称加密算法的保密性比较好，它消除了最终用户交换密钥的需要。</p><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2><ul><li><strong>明文(Plaintext)</strong>：指待加密信息。明文可以是文本文件、图片文件、二进制数据等。</li><li><strong>密文(Ciphertext)</strong>：指经过加密后的明文。密文通常以文本、二进制等形式存在。</li><li><strong>加密(Encryption)</strong>：指将明文转换为密文的过程。</li><li><strong>解密(Decryption)</strong>：指将密文转换为明文的过程。</li><li><strong>加密密钥(Encryption Key)</strong>：指通过加密算法进行加密操作用的密钥。</li><li><strong>解密密钥(Decryption Key)</strong>：指通过解密算法进行解密操作用的密钥。</li><li><strong>信道(Channel)</strong>：通信的通道，是信号传输的媒介。</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',94),h={href:"https://book.douban.com/subject/27165931/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://book.douban.com/subject/25861566/",target:"_blank",rel:"noopener noreferrer"};function l(u,m){const d=o("ExternalLinkIcon");return n(),i("div",null,[c,t("ul",null,[t("li",null,[t("a",h,[e("《Java 核心技术 卷 II 高级特性》"),r(d)])]),t("li",null,[t("a",g,[e("《Java 加密与解密的艺术》"),r(d)])])])])}const B=a(p,[["render",l],["__file","06.编码和加密.html.vue"]]);export{B as default};
