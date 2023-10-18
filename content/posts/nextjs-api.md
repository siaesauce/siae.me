---
title: 使用 Prisma 和 Supabase 构建一个简单的 API 实践
date: 2023-10-19
categories: '折腾'
tags: ['NextJS', 'Prisma', 'Supabase', 'API', 'NextJS API']
description: 使用 Prisma 和 Supabase 数据库在 NextJS 中实现一个 API 的简单实践。
---

## 前言

最近把 Blog 的 [Talks](/talks)（碎碎念）页面填补了一下，这个页面主要用来发表一些我的奇怪的想法或者生活状态，类似于说说日志？

在这里记录一下实现过程，主要用到了`Prisma`和`Supabase`的免费的`PostgreSQL`数据库。

## 前期工作

### 初始化 Supabase

首先，你需要拥有/注册一个`Supabase`账号，随后在主页中`New project`创建一个新项目。

进入项目中，找到这一串数据库连接地址：

![Prisma](/images/post/prisma.png)

```shell
SUPABASE_DATABASE_URL=postgresql://postgres:[创建项目时的密码，不需要保留前后中括号]@db.wsrdjmwlimzeprcnvyav.supabase.co:5432/postgres
```

将其保存在项目中的`.env`文件中，后面会在`Prisma`用到。

### 安装和配置 Prisma

现在我们需要安装`Prisma`，然后输入初始化命令。

```json
pnpm install prisma @prisma/client //安装 Prisma
pnpx prisma init //初始化 Prisma
```

现在，在项目的根目录下会多出一个`prisma`文件夹，我们进入文件夹内的`shema.prisma`文件内

```prisma {6,7}
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("SUPABASE_DATABASE_URL")
}

model Talks {
  id  String @id @default(uuid()) // ID
  date DateTime @default(now()) // 发布时间
  lastmod DateTime @updatedAt // 最后修改时间
  content String // 内容
  images String[] // 图片
  tags String[] // 标签
}
```

我们需要将 provider 改为`postgresql`，url 是我们刚刚在`.env`文件中保存的 Supabase 连接地址。

最后一段代码将是我们需要在 Prisma 上为我们的 Talks 创建的数据模型。

在这边我为了方便写前端样式，也没有考虑到架构的最佳实践，可以在下面评论狠狠的鞭打我。

完成上面的工作后，我们还需要将数据模型同步到 Supabase 的数据库上，执行下面命令。

```json
pnpx prisma db push
```

现在你就可以在 Supabase 上看到我们的表格了，到这里前期工作就完成啦~

## API

首先，根据 Prisma 的最佳实践，我们需要创建一个全局的实例化对象的文件，这样当你的 API 想要多次调用 Prisma 的时候，就不需要一次又一次的导入 Prisma 实例了。

```ts
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

将代码添加到你 src 中合适的位置，这里我放到了[`src/utils/prisma.ts`](https://github.com/siaesauce/siae.me/blob/main/src/utils/prisma.ts)，完成之后运行下面的代码，确保我们的 Prisma 客户端和数据库是同步的，之后每次更改`shema.prisma`文件都要运行一遍这行代码。

```
pnpx prisma generate
```

然后，我们在`src/app/talks/route.ts`（Talks API）文件里引用 Prisma 实例。

```js
import prisma from '@/utils/prisma'
```

到这一步，我们只需要一行的代码就能完成对数据库的调用了，列举几个在 Talks API 中用到的几个方法。

```ts
prisma.talks.findMany() // 查询全部 talks 表单里的数据

prisma.talks.create() // 在 talks 表单中新增一条数据

prisma.talks.delete() // 删除 talks 表单中的某条数据

prisma.talks.update() // 更新 talks 表单中的某条数据
```

关于 NextJS 中的 API 部分，可以查看[官方文档](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)，在这里主要记录利用 Prisma 和 Supabase 实践过程。我的代码写的比较烂，就不放具体实现代码了，完整代码在这里：[Talks API](https://github.com/siaesauce/siae.me/blob/main/src/app/api/talks/route.ts)

### 注意

如果需要部署在`Vercel`上，我们还需要在`package.json`中新增一条 Script ，让项目部署的时候都会运行这条指令，来保证每次都是最新的 Prisma 客户端。

```json {7}
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "analyze": "cross-env ANALYZE=true next build",
    "postinstall": "prisma generate"
  },
```

## 参考&致谢

<code>[Next.js](https://nextjs.org/docs/getting-started/project-structure)</code>
<code>[Prisma](https://www.prisma.io)</code>
<code>[Supabase](https://supabase.com/)</code>
