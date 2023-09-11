const e=JSON.parse('{"key":"v-20bee31f","path":"/03.%E8%AE%BE%E8%AE%A1/03.%E9%87%8D%E6%9E%84/01.%E4%BB%A3%E7%A0%81%E7%9A%84%E5%9D%8F%E5%91%B3%E9%81%93%E5%92%8C%E9%87%8D%E6%9E%84.html","title":"代码的坏味道和重构","lang":"zh-CN","frontmatter":{"title":"代码的坏味道和重构","date":"2018-10-13T22:48:00.000Z","order":1,"category":["设计","重构"],"tag":["设计","重构","代码的坏味道"],"description":"第一次读《重构:改善既有代码的设计》时，我曾整理过一个简单的笔记。最近，因为参与一个重构项目，再一次温习了《重构:改善既有代码的设计》。过程中，萌发了认真总结、整理重构方法的冲动，于是有了这系列文字。 症与药 对代码的坏味道的思考 “有病要早治，不要放弃治疗”。多么朴素的道理 ，人人都懂。 病，就是不健康。 人有病，可以通过打针、吃药、做手术来进行治疗。 如果把代码的坏味道（代码质量问题）比作病症，那么重构就是治疗代码的坏味道的药。 个人认为，在重构这件事上，也可以应用治病的道理：","head":[["meta",{"property":"og:url","content":"https://dunwu.github.io/03.%E8%AE%BE%E8%AE%A1/03.%E9%87%8D%E6%9E%84/01.%E4%BB%A3%E7%A0%81%E7%9A%84%E5%9D%8F%E5%91%B3%E9%81%93%E5%92%8C%E9%87%8D%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"钝悟"}],["meta",{"property":"og:title","content":"代码的坏味道和重构"}],["meta",{"property":"og:description","content":"第一次读《重构:改善既有代码的设计》时，我曾整理过一个简单的笔记。最近，因为参与一个重构项目，再一次温习了《重构:改善既有代码的设计》。过程中，萌发了认真总结、整理重构方法的冲动，于是有了这系列文字。 症与药 对代码的坏味道的思考 “有病要早治，不要放弃治疗”。多么朴素的道理 ，人人都懂。 病，就是不健康。 人有病，可以通过打针、吃药、做手术来进行治疗。 如果把代码的坏味道（代码质量问题）比作病症，那么重构就是治疗代码的坏味道的药。 个人认为，在重构这件事上，也可以应用治病的道理："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T15:44:18.000Z"}],["meta",{"property":"article:author","content":"钝悟"}],["meta",{"property":"article:tag","content":"设计"}],["meta",{"property":"article:tag","content":"重构"}],["meta",{"property":"article:tag","content":"代码的坏味道"}],["meta",{"property":"article:published_time","content":"2018-10-13T22:48:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T15:44:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码的坏味道和重构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-13T22:48:00.000Z\\",\\"dateModified\\":\\"2023-09-11T15:44:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"钝悟\\",\\"url\\":\\"https://dunwu.github.io\\"}]}"]]},"headers":[{"level":2,"title":"症与药","slug":"症与药","link":"#症与药","children":[{"level":3,"title":"对代码的坏味道的思考","slug":"对代码的坏味道的思考","link":"#对代码的坏味道的思考","children":[]},{"level":3,"title":"重构的原则","slug":"重构的原则","link":"#重构的原则","children":[]}]},{"level":2,"title":"代码的坏味道","slug":"代码的坏味道","link":"#代码的坏味道","children":[{"level":3,"title":"代码坏味道之代码臃肿","slug":"代码坏味道之代码臃肿","link":"#代码坏味道之代码臃肿","children":[]},{"level":3,"title":"代码坏味道之滥用面向对象","slug":"代码坏味道之滥用面向对象","link":"#代码坏味道之滥用面向对象","children":[]},{"level":3,"title":"代码坏味道之变革的障碍","slug":"代码坏味道之变革的障碍","link":"#代码坏味道之变革的障碍","children":[]},{"level":3,"title":"代码坏味道之非必要的","slug":"代码坏味道之非必要的","link":"#代码坏味道之非必要的","children":[]},{"level":3,"title":"代码坏味道之耦合","slug":"代码坏味道之耦合","link":"#代码坏味道之耦合","children":[]}]},{"level":2,"title":"扩展阅读","slug":"扩展阅读","link":"#扩展阅读","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1694447058000,"updatedTime":1694447058000,"contributors":[{"name":"dunwu","email":"forbreak@163.com","commits":1}]},"readingTime":{"minutes":10.82,"words":3245},"filePathRelative":"03.设计/03.重构/01.代码的坏味道和重构.md","localizedDate":"2018年10月13日","excerpt":"<p>第一次读《重构:改善既有代码的设计》时，我曾整理过一个简单的笔记。最近，因为参与一个重构项目，再一次温习了《重构:改善既有代码的设计》。过程中，萌发了认真总结、整理重构方法的冲动，于是有了这系列文字。</p>\\n<h2> 症与药</h2>\\n<h3> 对代码的坏味道的思考</h3>\\n<p>“有病要早治，不要放弃治疗”。多么朴素的道理 ，人人都懂。</p>\\n<p>病，就是不健康。</p>\\n<p>人有病，可以通过打针、吃药、做手术来进行治疗。</p>\\n<p><strong>如果把代码的坏味道（代码质量问题）比作病症，那么重构就是治疗代码的坏味道的药。</strong></p>\\n<p>个人认为，在重构这件事上，也可以应用治病的道理：</p>","autoDesc":true}');export{e as data};
