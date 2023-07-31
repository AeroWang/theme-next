## Halo Theme Next

一款使用了 [Halo](https://github.com/halo-dev/halo) v2.7.0 API接口服务的博客主题

API接口你懂得吧👀

预览图待定，可以先去 <a href="https://theme-next-git-dev-gotoobe.vercel.app" target="_blank">开发预览地址</a> 瞧一瞧

## 说明

该主题使用 [Next.js](https://nextjs.org/) 创建。

**重要：** 该主题并不能直接在 [Halo](https://github.com/halo-dev/halo) 后台安装，需要单独部署。

### API 接口说明

接口好像暂时不太完善，一些功能着实不太好实现

- 暂时没有归档接口，先搁置归档页面

## 部署

`.env.local` 文件存储了一些环境变量，并未上传到仓库中，请自行补充

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

* `Node.js` 环境部署 `Node.js v18 +`
  1. 将项目文件打包至服务器内解压。
  2. 进入文件目录后顺序执行以下命令
    之所以开发时用了 `pnpm` ，现在却用 `npm` ，是因为我在服务器上用 `pnpm install` 时出现问题，不过大家也可以试试

    国内大陆服务器建议首先执行 `npm config set https://registry.npmmirror.com/` ，设置依赖国内镜像源。
     - `npm install` （安装依赖）
     - `npm run build` （构建）
     - `npm run start`（项目启动）

* `Docker` 部署

   也可以先看看官方文档介绍，https://nextjs.org/docs/app/building-your-application/deploying#docker-image

   使用此方式需修改配置文件
  ```js
  // next.config.js
  module.exports = {
    // ... 其它配置.
    output: 'standalone',
  }
  ```

   docker 构建部署时如果要使用内网 IP 仍存在问题，暂时解决办法是使用实际域名，`.env.production` 中的 `HALO_HOST` 替换为实际域名

* 静态导出并部署
  这种方式会缺失 Next.js 的许多功能及优化，目前不建议也不提供此方式的部署方案，感兴趣的可以自己去研究一下

### vercel 托管

应该也许有其它方式进行托管，欢迎补充。

用过的人就不用多说了吧[手动滑稽]，开始`fork`或者`clone`后定制自己的配置进行部署吧

<a href="https://vercel.com/docs/getting-started-with-vercel" target="_blank">vercel 部署开始的地方</a>

## 特性
* 单页面顺滑地无刷新加载内容
* 图片加载优化（blur, lazyload, Responsive images）
* 图片加载成功前的占位符图像提供三种形式（`css`, `svg`, `base64`）渲染
* 提供两种方式加载图片：
  1. 直接加载远程图片
  2. 本机中转远程图片
* 更现代化？因人而异吧
* SSG, SSR 页面，SEO 更好一些
* ISR(增量静态生成)，基于上一条
  ```
  example:
    http://localhost:3000 -> host
    验证首页 http://localhost:3000/api/revalidate?secret=<HALO_REVALIDATE_TOKEN>&path=/
    验证关于页 http://localhost:3000/api/revalidate?secret=<HALO_REVALIDATE_TOKEN>&path=/about
  ```

## TODO
1. [ ] Responsive images 待优化 （待考虑）
2. [x] ISR 待补充
3. [ ] 点赞功能
4. [ ] 文章搜索
5. [ ] 站点数据统计及相关区域展示