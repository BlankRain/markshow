title: MarkShow ReadMe.md

speaker: 十八赞

url: http://github.com/BlankRain

transition: slide3

files: /js/jy.js,/css/jy.css,/js/zoom.js

theme: moon

[幻片]
# MarkShow介绍
---------
* MarkDown介绍
* PPT介绍
* MarkShow介绍

[幻片]
## MarkDown介绍
* ### 什么是MarkDown?
Markdown 是 约翰·格鲁伯(John Gruber)创建的一门语法,它允许人们“使用易读易写的纯文本格式编写文档”. 它的关注点在写,而不是格式.
* ### MarkDown语法介绍.
  [简书语法资源](http://www.jianshu.com/p/q81RER)

  [Segmentfault资源](https://segmentfault.com/markdown)

  [英文译文版](http://maogm.com/blog/markdown-syntax.html)

|名称 | 符号 | 意义 |
|----|----|----|
|标题| # | 一级标题|
|标题| ## | 二级标题|
|标题| ### | 三级标题|
|标题| #### | 四级标题|
|标题| ##### | 五级标题|
|列表| * |列表|
|列表| - |列表|
|列表| 1. |有序列表|
|链接| `[显示](http://abc) `|链接|
|图片| `![](http://tupiandizhi) `|图片|
|引用| > |引用|
|粗体| `*粗粗的文字*`|粗粗的文字|
|斜体| `**粗粗的文字**`|斜斜的文字|
|表头|&#124; 表头 &#124; 表头 &#124;|表头|
|表体|&#124; 表体 &#124; 表体 &#124;|表体|
`
注：-、1. # 都要和文本之间要保留一个字符的空格
`

以上语法已可满足90%的要求,更多其他细节请查看资源.

[幻片]
## PPT介绍
* ### 什么是PPT?
    一般指微软的PowerPoint ,它是`演示文稿`的代名词.`演示文稿`是信息的载体,它负责沟通演讲者与听众.

    目前,微软的PPT,功能很多,也很强大,但是,太强太复杂了.需要一款简单轻便关注于内容本身的软件,那就是MarkShow

[幻片]
## MarkShow介绍
- ### 什么是MarkShow?
MarkShow就是用MarkDown语法来写PPT. 它的理念来源于MarkDown. 它应用于PPT,也就是`演示文稿`这么件事情.  
简而言之,`使用易读易写的纯文本格式编写演示文档`. 概念及范围缩小了一部分.相比而言,更具体了一些.

  概念及理念就这么多.

- ### 需要做的事情
 1. 源码基于 nodePPT 改造,新增部分中文语法.
 2. 整合finereport 报表服务,增加在线web数据展示.
 3. 云存储.
 4. atom编辑器及其插件开发.
