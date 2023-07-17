## Halo Theme Next

一款使用了 [Halo](https://github.com/halo-dev/halo) v2.7.0 API接口服务的博客主题

预览图待定，可以先去 <a href="https://theme-next-git-dev-gotoobe.vercel.app" target="_blank">开发预览地址</a> 瞧一瞧

## 说明

目前正处于开发阶段，<a href="https://theme-next-git-dev-gotoobe.vercel.app" target="_blank">开发预览地址</a>

该主题使用 [Next.js](https://nextjs.org/) 创建。

**重要：** 该主题并不能直接在 [Halo](https://github.com/halo-dev/halo) 后台安装，需要单独部署。

## 部署

`.env.local` 文件存储了一些变量，并未上传到仓库中，请自行创建补充

```text
# ISR 重新验证 TOKEN
HALO_REVALIDATE_TOKEN=xxxxx
# 部分接口需要验证 Basic Auth
HALO_AUTHORIZATION='Basic aaaa'
# 静态资源存放基础域名（目前存放又拍云）
STATIC_URL=https://a.example.com
```

### 自行托管

需要有服务器哦，运行起来占用内存好像也不是很大

以下方式选其一，以支持所有功能的Next.js

* `Node.js` 环境部署
  1. 将项目文件打包至服务器内解压。
  2. 进入文件目录后顺序执行以下命令
    之所以开发时用了 `pnpm` ，现在却用 `npm` ，是因为我在服务器上用 `pnpm install` 时出现问题，不过大家也可以试试

    国内大陆服务器建议首先执行 `npm config set https://registry.npmmirror.com/` ，设置依赖国内镜像源。
     - `npm install` （安装依赖）
     - `npm run build` （构建）
     - `npm run start`（项目启动）

* `Docker` 部署

   也可以先看看官方文档介绍，https://nextjs.org/docs/app/building-your-application/deploying#docker-image

   详细后续补充...

* 静态导出并部署
  这种方式会缺失 Next.js 的许多功能及优化，目前不建议也不提供此方式的部署方案，感兴趣的可以自己去研究一下

### vercel 托管

应该也许有其它方式进行托管，欢迎补充。

用过的人就不用多说了吧[手动滑稽]，开始`fork`或者`clone`后定制自己的配置进行部署吧

<a href="https://vercel.com/docs/getting-started-with-vercel" target="_blank">vercel 部署开始的地方</a>

## 特性

* 更现代化？因人而异吧
* ISR(增量静态生成)
* 后面再补充...

