import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as a,c as B,a as E,d as t,w as e,b as A,e as i}from"./app-ab18ad7c.js";const s={},d=i('<h1 id="设计模式概述" tabindex="-1"><a class="header-anchor" href="#设计模式概述" aria-hidden="true">#</a> 设计模式概述</h1><blockquote><p>设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。</p></blockquote><h2 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式" aria-hidden="true">#</a> 创建型模式</h2><h3 id="创建型模式简介" tabindex="-1"><a class="header-anchor" href="#创建型模式简介" aria-hidden="true">#</a> 创建型模式简介</h3><p><strong>创建型模式</strong>抽象了<strong>实例化</strong>的过程。它将<strong>系统</strong>与它的<strong>对象</strong>创建、结合、表示的方式<strong>分离</strong>。</p><p>创建型模式都会将关于该系统使用哪些具体的类的信息<strong>封装</strong>起来。</p><p>在软件工程中，创建型模式是处理对象创建的设计模式，试图根据实际情况使用合适的方式创建对象。</p><p>基本的对象创建方式可能会导致设计上的问题，或增加设计的复杂度。创建型模式通过以某种方式控制对象的创建来解决问题。</p><p>创建型模式的<strong>指导思想</strong>是：</p><ul><li>将系统使用的具体类封装起来。</li><li>隐藏这些具体类的实例创建和结合的方式。</li></ul><p>创建型模式又分为<strong>对象创建型模式</strong>和<strong>类创建型模式</strong>。对象创建型模式处理对象的创建，类创建型模式处理类的创建。</p><ul><li><strong>对象创建型模式</strong>把对象创建的一部分推迟到另一个对象中。（代表模式：<strong>单例模式</strong>、<strong>建造者模式</strong>、<strong>原型模式</strong>、<strong>抽象工厂模式</strong>）</li><li><strong>类创建型模式</strong>将它对象的创建推迟到子类中。（代表模式：<strong>工厂方法模式</strong>）</li></ul><h3 id="创建型模式应用" tabindex="-1"><a class="header-anchor" href="#创建型模式应用" aria-hidden="true">#</a> 创建型模式应用</h3><p>现代软件工程更加依赖对象的组合，而不是类的继承，强调从硬编码的行为转变到定义一组基本行为来组合成复杂的行为。</p><p>硬编码的行为不够灵活，因为如果想要改变设计的一部分，需要通过重写或者重新实现才能完成。</p><p>另外，硬编码没有提高重用性，而且难以跟踪错误。由于这些原因，创建型模式比硬编码的行为更有用。</p><p>创建型模式使设计变得更灵活，提供了不同的方式，从代码中移除了对需要实例化的具体类的引用。换句话说，这些模式增强了对象和类之间的独立性。</p><p>在以下情况中，可以考虑应用创建型模式：</p><ul><li>一个系统需要和它的对象和产品的创建相互独立。</li><li>一组相关的对象被设计为一起使用。</li><li>隐藏一个类库的具体实现，仅暴露它们的接口。</li><li>创建独立复杂对象的不同表示。</li><li>一个类希望它的子类实现它所创建的对象。</li><li>类的实例化在运行时才指定。</li><li>一个类只能有一个实例，而且这个实例能在任何时候访问到。</li><li>实例应该能在不修改的情况下具有可扩展性。</li></ul><h3 id="创建型模式代表" tabindex="-1"><a class="header-anchor" href="#创建型模式代表" aria-hidden="true">#</a> 创建型模式代表</h3><blockquote><p>创建型模式提供了创建对象的机制， 能够提升已有代码的灵活性和可复用性。</p></blockquote>',21),h=E("h3",{id:"结构型模式",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#结构型模式","aria-hidden":"true"},"#"),A(" 结构型模式")],-1),u=E("blockquote",null,[E("p",null,"结构型模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。")],-1),_=E("h3",{id:"行为型模式",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#行为型模式","aria-hidden":"true"},"#"),A(" 行为型模式")],-1),c=E("blockquote",null,[E("p",null,"行为模式负责对象间的高效沟通和职责委派。")],-1),F=E("h2",{id:"📚-资料",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#📚-资料","aria-hidden":"true"},"#"),A(" 📚 资料")],-1),C={href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"},f=E("h2",{id:"🚪-传送",tabindex:"-1"},[E("a",{class:"header-anchor",href:"#🚪-传送","aria-hidden":"true"},"#"),A(" 🚪 传送")],-1),m={href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"};function g(b,k){const l=n("RouterLink"),o=n("ExternalLinkIcon");return a(),B("div",null,[d,E("ul",null,[E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01.%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("简单工厂模式 (Simple Factory)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/02.%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("工厂方法模式 (Factory Method)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/03.%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("抽象工厂模式 (Abstract Factory)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/04.%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("建造者模式 (Builder)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/05.%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("原型模式 (Prototype)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/06.%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("单例模式 (Singleton)")]),_:1})])]),h,u,E("ul",null,[E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/07.%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("适配器模式 (Adapter)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/08.%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("桥接模式 (Bridge)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/09.%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("组合模式 (Composite)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/10.%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("装饰模式 (Decorator)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/11.%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("外观模式 (Facade)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/12.%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("享元模式 (Flyweight)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/13.%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("代理模式 (Proxy)")]),_:1})])]),_,c,E("ul",null,[E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/14.%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("模板方法模式 (Template Method)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/15.%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("命令模式 (Command)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/16.%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("迭代器模式 (Iterator)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/17.%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("观察者模式 (Observer)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/18.%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("解释器模式 (Interpreter)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/19.%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("中介者模式 (Mediator)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/20.%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("职责链模式 (Chain of Responsibility)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/21.%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("备忘录模式 (Memento)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/22.%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("策略模式 (Strategy)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/23.%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("访问者模式 (Visitor)")]),_:1})]),E("li",null,[t(l,{to:"/03.%E8%AE%BE%E8%AE%A1/02.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/24.%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F.html"},{default:e(()=>[A("状态模式 (State)")]),_:1})])]),F,E("ul",null,[E("li",null,[E("a",C,[A("《Head First 设计模式》"),t(o)])]),E("li",null,[E("a",p,[A("《大话设计模式》"),t(o)])])]),f,E("p",null,[A("◾ 💧 "),E("a",m,[A("钝悟的 IT 知识图谱"),t(o)]),A(" ◾")])])}const y=r(s,[["render",g],["__file","00.设计模式概述.html.vue"]]);export{y as default};
