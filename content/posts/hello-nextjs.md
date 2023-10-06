---
title: 降落到 NextJS 的博客新体验！
date: 2023-09-20
categories: '碎碎念'
tags: ['NextJS', 'Blog', 'React', 'TailwindCSS', 'Contentlayer']
description: 使用 Next.js 重构博客的体验和过程。
---

## 前言

生命在于折腾，最近看到很多巨佬都是自己手撸博客，不免又让我泛起了折腾的心。

毕竟每个人的审美存在差异，博客最多时间的还是取悦自己。自己写博客，可以根据自己的需求随意往上面堆功能，可以说很符合我这种喜欢折腾的人了~

## NextJS

最初我尝试过<code>Astro</code>，试着写了一个 Demo。Markdown 的数据有现成的<code>API</code>可以调用，文档也非常详细，只需要搞定基础布局就好了。唯一不足的就是，我希望可以无刷新的切换导航页，不仅是资源的复用性，且在使用上我感觉会更舒服一些。

犹豫过后，还是决定尝试一下名气比较大的<code>NextJS</code>，NextJS 13 的<code>APP Router</code>也已经非常稳定了，顺便也可以学习一下新的知识，查漏补缺。

## Markdown

抛弃传统使用的<code>fs</code>方法来读取 Markdown 内容，我尝试了最近很比较火的<code>[Contentlayer](https://contentlayer.dev/)</code>来做内容驱动。

**内容即数据**，仅需要非常简单的配置就可以将 Markdown 解析为 HTML，还提供了非常高的自由度，可以将 React 组件替换默认标签，比如可以使用<code>Next/Image</code>来优化内容中的图像，以及支持添加<code>rehype</code>和<code>remark</code> Markdown 插件来锦上添花。

我的配置文件<code>[contentlayer.config.ts](https://github.com/siaesauce/siae.me/blob/main/contentlayer.config.ts)</code>

## SEO

博客的<code>SEO</code>优化，我没有做特别的调整。只是根据<code>NextJS</code>的文档，在<code>app</code>目录下添加上<code>robots.ts</code><code>sitemap.ts</code>给博客添加抓取规则和站点地图，另外补充上每个页面的<code>Metadate</code>信息。

如果你想支持<code>RSS</code>订阅，需要额外安装 [RSS](https://www.npmjs.com/package/rss) 包，根据你的喜好在<code>app</code>目录下添加<code>[Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#static-route-handlers)</code>，根据 RSS 的文档补充上相应的的配置即可。

## 最后

总得来说<code>NextJS 13</code>没有传言的需要踩很多的坑，只是大部分用的技术可能只有英文文档，不过理解起来还是比较简单的。目前完成的部分，断断续续也就花费了一周的时间，总体还是很顺利的~

最后<code>Lighthouse</code>得分附上：

![lighthouse](/images/post/lighthouse.png)

## 参考&鸣谢

<code>[Next.js](https://nextjs.org/docs/getting-started/project-structure)</code>
<code>[Vercel](https://vercel.com)</code>
<code>[TailwindCSS](https://tailwindcss.com)</code>
<code>[Contentlayer](https://contentlayer.dev)</code>
<code>[Base](https://github.com/laymonage/base)</code>
<code>[Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)</code>
