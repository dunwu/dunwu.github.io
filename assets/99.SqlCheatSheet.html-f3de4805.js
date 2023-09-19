import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as d,e as c}from"./app-d8d56f9e.js";const a={},n=c('<h1 id="sql-cheat-sheet" tabindex="-1"><a class="header-anchor" href="#sql-cheat-sheet" aria-hidden="true">#</a> SQL Cheat Sheet</h1><h2 id="查找数据的查询" tabindex="-1"><a class="header-anchor" href="#查找数据的查询" aria-hidden="true">#</a> 查找数据的查询</h2><h3 id="select-用于从数据库中选择数据" tabindex="-1"><a class="header-anchor" href="#select-用于从数据库中选择数据" aria-hidden="true">#</a> <strong>SELECT</strong>: 用于从数据库中选择数据</h3><ul><li><code>SELECT</code> * <code>FROM</code> table_name;</li></ul><h3 id="distinct-用于过滤掉重复的值并返回指定列的行" tabindex="-1"><a class="header-anchor" href="#distinct-用于过滤掉重复的值并返回指定列的行" aria-hidden="true">#</a> <strong>DISTINCT</strong>: 用于过滤掉重复的值并返回指定列的行</h3><ul><li><code>SELECT DISTINCT</code> column_name;</li></ul><h3 id="where-用于过滤记录-行" tabindex="-1"><a class="header-anchor" href="#where-用于过滤记录-行" aria-hidden="true">#</a> <strong>WHERE</strong>: 用于过滤记录/行</h3><ul><li><code>SELECT</code> column1, column2 <code>FROM</code> table_name <code>WHERE</code> condition;</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>WHERE</code> condition1 <code>AND</code> condition2;</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>WHERE</code> condition1 <code>OR</code> condition2;</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>WHERE NOT</code> condition;</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>WHERE</code> condition1 <code>AND</code> (condition2 <code>OR</code> condition3);</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>WHERE EXISTS</code> (<code>SELECT</code> column_name <code>FROM</code> table_name <code>WHERE</code> condition);</li></ul><h3 id="order-by-用于结果集的排序-升序-asc-或者降序-desc" tabindex="-1"><a class="header-anchor" href="#order-by-用于结果集的排序-升序-asc-或者降序-desc" aria-hidden="true">#</a> <strong>ORDER BY</strong>: 用于结果集的排序，升序（ASC）或者降序（DESC）</h3><ul><li><code>SELECT</code> * <code>FROM</code> table_name <code>ORDER BY</code> column;</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>ORDER BY</code> column <code>DESC</code>;</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>ORDER BY</code> column1 <code>ASC</code>, column2 <code>DESC</code>;</li></ul><h3 id="select-top-用于指定从表顶部返回的记录数" tabindex="-1"><a class="header-anchor" href="#select-top-用于指定从表顶部返回的记录数" aria-hidden="true">#</a> <strong>SELECT TOP</strong>: 用于指定从表顶部返回的记录数</h3><ul><li><code>SELECT TOP</code> number columns_names <code>FROM</code> table_name <code>WHERE</code> condition;</li><li><code>SELECT TOP</code> percent columns_names <code>FROM</code> table_name <code>WHERE</code> condition;</li><li>并非所有数据库系统都支持<code>SELECT TOP</code>。 MySQL 中是<code>LIMIT</code>子句</li><li><code>SELECT</code> column_names <code>FROM</code> table_name <code>LIMIT</code> offset, count;</li></ul><h3 id="like-用于搜索列中的特定模式-where-子句中使用的运算符" tabindex="-1"><a class="header-anchor" href="#like-用于搜索列中的特定模式-where-子句中使用的运算符" aria-hidden="true">#</a> <strong>LIKE</strong>: 用于搜索列中的特定模式，WHERE 子句中使用的运算符</h3><ul><li>% (percent sign) 是一个表示零个，一个或多个字符的通配符</li><li>_ (underscore) 是一个表示单个字符通配符</li><li><code>SELECT</code> column_names <code>FROM</code> table_name <code>WHERE</code> column_name <code>LIKE</code> pattern;</li><li><code>LIKE</code> ‘a%’ （查找任何以“a”开头的值）</li><li><code>LIKE</code> ‘%a’ （查找任何以“a”结尾的值）</li><li><code>LIKE</code> ‘%or%’ （查找任何包含“or”的值）</li><li><code>LIKE</code> ‘_r%’ （查找任何第二位是“r”的值）</li><li><code>LIKE</code> ‘a*%*%’ （查找任何以“a”开头且长度至少为 3 的值）</li><li><code>LIKE</code> ‘[a-c]%’（查找任何以“a”或“b”或“c”开头的值）</li></ul><h3 id="in-用于在-where-子句中指定多个值的运算符" tabindex="-1"><a class="header-anchor" href="#in-用于在-where-子句中指定多个值的运算符" aria-hidden="true">#</a> <strong>IN</strong>: 用于在 WHERE 子句中指定多个值的运算符</h3><ul><li>本质上，IN 运算符是多个 OR 条件的简写</li><li><code>SELECT</code> column_names <code>FROM</code> table_name <code>WHERE</code> column_name <code>IN</code> (value1, value2, …);</li><li><code>SELECT</code> column_names <code>FROM</code> table_name <code>WHERE</code> column_name <code>IN</code> (<code>SELECT STATEMENT</code>);</li></ul><h3 id="between-用于过滤给定范围的值的运算符" tabindex="-1"><a class="header-anchor" href="#between-用于过滤给定范围的值的运算符" aria-hidden="true">#</a> <strong>BETWEEN</strong>: 用于过滤给定范围的值的运算符</h3><ul><li><code>SELECT</code> column_names <code>FROM</code> table_name <code>WHERE</code> column_name <code>BETWEEN</code> value1 <code>AND</code> value2;</li><li><code>SELECT</code> * <code>FROM</code> Products <code>WHERE</code> (column_name <code>BETWEEN</code> value1 <code>AND</code> value2) <code>AND NOT</code> column_name2 <code>IN</code> (value3, value4);</li><li><code>SELECT</code> * <code>FROM</code> Products <code>WHERE</code> column_name <code>BETWEEN</code> #01/07/1999# AND #03/12/1999#;</li></ul><h3 id="null-代表一个字段没有值" tabindex="-1"><a class="header-anchor" href="#null-代表一个字段没有值" aria-hidden="true">#</a> <strong>NULL</strong>: 代表一个字段没有值</h3><ul><li><code>SELECT</code> * <code>FROM</code> table_name <code>WHERE</code> column_name <code>IS NULL</code>;</li><li><code>SELECT</code> * <code>FROM</code> table_name <code>WHERE</code> column_name <code>IS NOT NULL</code>;</li></ul><h3 id="as-用于给表或者列分配别名" tabindex="-1"><a class="header-anchor" href="#as-用于给表或者列分配别名" aria-hidden="true">#</a> <strong>AS</strong>: 用于给表或者列分配别名</h3><ul><li><code>SELECT</code> column_name <code>AS</code> alias_name <code>FROM</code> table_name;</li><li><code>SELECT</code> column_name <code>FROM</code> table_name <code>AS</code> alias_name;</li><li><code>SELECT</code> column_name <code>AS</code> alias_name1, column_name2 <code>AS</code> alias_name2;</li><li><code>SELECT</code> column_name1, column_name2 + ‘, ‘ + column_name3 <code>AS</code> alias_name;</li></ul><h3 id="union-用于组合两个或者多个-select-语句的结果集的运算符" tabindex="-1"><a class="header-anchor" href="#union-用于组合两个或者多个-select-语句的结果集的运算符" aria-hidden="true">#</a> <strong>UNION</strong>: 用于组合两个或者多个 SELECT 语句的结果集的运算符</h3><ul><li>每个 SELECT 语句必须拥有相同的列数</li><li>列必须拥有相似的数据类型</li><li>每个 SELECT 语句中的列也必须具有相同的顺序</li><li><code>SELECT</code> columns_names <code>FROM</code> table1 <code>UNION SELECT</code> column_name <code>FROM</code> table2;</li><li><code>UNION</code> 仅允许选择不同的值, <code>UNION ALL</code> 允许重复</li></ul><h3 id="any-all-用于检查-where-或-having-子句中使用的子查询条件的运算符" tabindex="-1"><a class="header-anchor" href="#any-all-用于检查-where-或-having-子句中使用的子查询条件的运算符" aria-hidden="true">#</a> <strong>ANY|ALL</strong>: 用于检查 WHERE 或 HAVING 子句中使用的子查询条件的运算符</h3><ul><li><code>ANY</code> 如果任何子查询值满足条件，则返回 true。</li><li><code>ALL</code> 如果所有子查询值都满足条件，则返回 true。</li><li><code>SELECT</code> columns_names <code>FROM</code> table1 <code>WHERE</code> column_name operator (<code>ANY</code>|<code>ALL</code>) (<code>SELECT</code> column_name <code>FROM</code> table_name <code>WHERE</code> condition);</li></ul><h3 id="group-by-通常与聚合函数-count-max-min-sum-avg-一起使用-用于将结果集分组为一列或多列" tabindex="-1"><a class="header-anchor" href="#group-by-通常与聚合函数-count-max-min-sum-avg-一起使用-用于将结果集分组为一列或多列" aria-hidden="true">#</a> <strong>GROUP BY</strong>: 通常与聚合函数（COUNT，MAX，MIN，SUM，AVG）一起使用，用于将结果集分组为一列或多列</h3><ul><li><code>SELECT</code> column_name1, COUNT(column_name2) <code>FROM</code> table_name <code>WHERE</code> condition <code>GROUP BY</code> column_name1 <code>ORDER BY</code> COUNT(column_name2) DESC;</li></ul><h3 id="having-having-子句指定-select-语句应仅返回聚合值满足指定条件的行。它被添加到-sql-语言中-因为-where-关键字不能与聚合函数一起使用。" tabindex="-1"><a class="header-anchor" href="#having-having-子句指定-select-语句应仅返回聚合值满足指定条件的行。它被添加到-sql-语言中-因为-where-关键字不能与聚合函数一起使用。" aria-hidden="true">#</a> <strong>HAVING</strong>: HAVING 子句指定 SELECT 语句应仅返回聚合值满足指定条件的行。它被添加到 SQL 语言中，因为 WHERE 关键字不能与聚合函数一起使用。</h3><ul><li><code>SELECT</code> <code>COUNT</code>(column_name1), column_name2 <code>FROM</code> table <code>GROUP BY</code> column_name2 <code>HAVING</code> <code>COUNT(</code>column_name1<code>)</code> &gt; 5;</li></ul><h2 id="修改数据的查询" tabindex="-1"><a class="header-anchor" href="#修改数据的查询" aria-hidden="true">#</a> 修改数据的查询</h2><h3 id="insert-into-用于在表中插入新记录-行" tabindex="-1"><a class="header-anchor" href="#insert-into-用于在表中插入新记录-行" aria-hidden="true">#</a> <strong>INSERT INTO</strong>: 用于在表中插入新记录/行</h3><ul><li><code>INSERT INTO</code> table_name (column1, column2) <code>VALUES</code> (value1, value2);</li><li><code>INSERT INTO</code> table_name <code>VALUES</code> (value1, value2 …);</li></ul><h3 id="update-用于修改表中的现有记录-行" tabindex="-1"><a class="header-anchor" href="#update-用于修改表中的现有记录-行" aria-hidden="true">#</a> <strong>UPDATE</strong>: 用于修改表中的现有记录/行</h3><ul><li><code>UPDATE</code> table_name <code>SET</code> column1 = value1, column2 = value2 <code>WHERE</code> condition;</li><li><code>UPDATE</code> table_name <code>SET</code> column_name = value;</li></ul><h3 id="delete-用于删除表中的现有记录-行" tabindex="-1"><a class="header-anchor" href="#delete-用于删除表中的现有记录-行" aria-hidden="true">#</a> <strong>DELETE</strong>: 用于删除表中的现有记录/行</h3><ul><li><code>DELETE FROM</code> table_name <code>WHERE</code> condition;</li><li><code>DELETE</code> * <code>FROM</code> table_name;</li></ul><h2 id="聚合查询" tabindex="-1"><a class="header-anchor" href="#聚合查询" aria-hidden="true">#</a> 聚合查询</h2><h3 id="count-返回出现次数" tabindex="-1"><a class="header-anchor" href="#count-返回出现次数" aria-hidden="true">#</a> <strong>COUNT</strong>: 返回出现次数</h3><ul><li><code>SELECT COUNT (DISTINCT</code> column_name<code>)</code>;</li></ul><h3 id="min-and-max-返回所选列的最小-最大值" tabindex="-1"><a class="header-anchor" href="#min-and-max-返回所选列的最小-最大值" aria-hidden="true">#</a> <strong>MIN() and MAX()</strong>: 返回所选列的最小/最大值</h3><ul><li><code>SELECT MIN (</code>column_names<code>) FROM</code> table_name <code>WHERE</code> condition;</li><li><code>SELECT MAX (</code>column_names<code>) FROM</code> table_name <code>WHERE</code> condition;</li></ul><h3 id="avg-返回数字列的平均值" tabindex="-1"><a class="header-anchor" href="#avg-返回数字列的平均值" aria-hidden="true">#</a> <strong>AVG()</strong>: 返回数字列的平均值</h3><ul><li><code>SELECT AVG (</code>column_name<code>) FROM</code> table_name <code>WHERE</code> condition;</li></ul><h3 id="sum-返回数值列的总和" tabindex="-1"><a class="header-anchor" href="#sum-返回数值列的总和" aria-hidden="true">#</a> <strong>SUM()</strong>: 返回数值列的总和</h3><ul><li><code>SELECT SUM (</code>column_name<code>) FROM</code> table_name <code>WHERE</code> condition;</li></ul><h2 id="连接查询" tabindex="-1"><a class="header-anchor" href="#连接查询" aria-hidden="true">#</a> 连接查询</h2><h3 id="inner-join-内连接-返回在两张表中具有匹配值的记录" tabindex="-1"><a class="header-anchor" href="#inner-join-内连接-返回在两张表中具有匹配值的记录" aria-hidden="true">#</a> <strong>INNER JOIN</strong>: 内连接，返回在两张表中具有匹配值的记录</h3><ul><li><code>SELECT</code> column_names <code>FROM</code> table1 <code>INNER JOIN</code> table2 <code>ON</code> table1.column_name=table2.column_name;</li><li><code>SELECT</code> table1.column_name1, table2.column_name2, table3.column_name3 <code>FROM</code> ((table1 <code>INNER JOIN</code> table2 <code>ON</code> relationship) <code>INNER JOIN</code> table3 <code>ON</code> relationship);</li></ul><h3 id="left-outer-join-左外连接-返回左表-table1-中的所有记录-以及右表中的匹配记录-table2" tabindex="-1"><a class="header-anchor" href="#left-outer-join-左外连接-返回左表-table1-中的所有记录-以及右表中的匹配记录-table2" aria-hidden="true">#</a> <strong>LEFT (OUTER) JOIN</strong>: 左外连接，返回左表（table1）中的所有记录，以及右表中的匹配记录（table2）</h3><ul><li><code>SELECT</code> column_names <code>FROM</code> table1 <code>LEFT JOIN</code> table2 <code>ON</code> table1.column_name=table2.column_name;</li></ul><h3 id="right-outer-join-右外连接-返回右表-table2-中的所有记录-以及左表-table1-中匹配的记录" tabindex="-1"><a class="header-anchor" href="#right-outer-join-右外连接-返回右表-table2-中的所有记录-以及左表-table1-中匹配的记录" aria-hidden="true">#</a> <strong>RIGHT (OUTER) JOIN</strong>: 右外连接，返回右表（table2）中的所有记录，以及左表（table1）中匹配的记录</h3><ul><li><code>SELECT</code> column_names <code>FROM</code> table1 <code>RIGHT JOIN</code> table2 <code>ON</code> table1.column_name=table2.column_name;</li></ul><h3 id="full-outer-join-全外连接-全连接是左右外连接的并集-连接表包含被连接的表的所有记录-如果缺少匹配的记录-以-null-填充。" tabindex="-1"><a class="header-anchor" href="#full-outer-join-全外连接-全连接是左右外连接的并集-连接表包含被连接的表的所有记录-如果缺少匹配的记录-以-null-填充。" aria-hidden="true">#</a> <strong>FULL (OUTER) JOIN</strong>: 全外连接，全连接是左右外连接的并集. 连接表包含被连接的表的所有记录, 如果缺少匹配的记录, 以 NULL 填充。</h3><ul><li><code>SELECT</code> column_names <code>FROM</code> table1 <code>FULL OUTER JOIN</code> table2 <code>ON</code> table1.column_name=table2.column_name;</li></ul><h3 id="self-join-自连接-表自身连接" tabindex="-1"><a class="header-anchor" href="#self-join-自连接-表自身连接" aria-hidden="true">#</a> <strong>Self JOIN</strong>: 自连接，表自身连接</h3><ul><li><code>SELECT</code> column_names <code>FROM</code> table1 T1, table1 T2 <code>WHERE</code> condition;</li></ul><h2 id="视图查询" tabindex="-1"><a class="header-anchor" href="#视图查询" aria-hidden="true">#</a> 视图查询</h2><h3 id="create-创建视图" tabindex="-1"><a class="header-anchor" href="#create-创建视图" aria-hidden="true">#</a> <strong>CREATE</strong>: 创建视图</h3><ul><li><code>CREATE VIEW</code> view_name <code>AS SELECT</code> column1, column2 <code>FROM</code> table_name <code>WHERE</code> condition;</li></ul><h3 id="select-检索视图" tabindex="-1"><a class="header-anchor" href="#select-检索视图" aria-hidden="true">#</a> <strong>SELECT</strong>: 检索视图</h3><ul><li><code>SELECT</code> * <code>FROM</code> view_name;</li></ul><h3 id="drop-删除视图" tabindex="-1"><a class="header-anchor" href="#drop-删除视图" aria-hidden="true">#</a> <strong>DROP</strong>: 删除视图</h3><ul><li><code>DROP VIEW</code> view_name;</li></ul><h2 id="修改表的查询" tabindex="-1"><a class="header-anchor" href="#修改表的查询" aria-hidden="true">#</a> 修改表的查询</h2><h3 id="add-添加字段" tabindex="-1"><a class="header-anchor" href="#add-添加字段" aria-hidden="true">#</a> <strong>ADD</strong>: 添加字段</h3><ul><li><code>ALTER TABLE</code> table_name <code>ADD</code> column_name column_definition;</li></ul><h3 id="modify-修改字段数据类型" tabindex="-1"><a class="header-anchor" href="#modify-修改字段数据类型" aria-hidden="true">#</a> <strong>MODIFY</strong>: 修改字段数据类型</h3><ul><li><code>ALTER TABLE</code> table_name <code>MODIFY</code> column_name column_type;</li></ul><h3 id="drop-删除字段" tabindex="-1"><a class="header-anchor" href="#drop-删除字段" aria-hidden="true">#</a> <strong>DROP</strong>: 删除字段</h3><ul><li><code>ALTER TABLE</code> table_name <code>DROP COLUMN</code> column_name;</li></ul>',71),l=[n];function i(t,r){return o(),d("div",null,l)}const u=e(a,[["render",i],["__file","99.SqlCheatSheet.html.vue"]]);export{u as default};