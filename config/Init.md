# 此处说明一些项目初始化时的准备

## 文章菜单路由（路径）

**注意：** 文件夹结构即路由结构

`_`开头文件夹默认不能被访问

不清楚的可以去看看[官方文档](https://nextjs.org/docs/app) https://nextjs.org/docs/app/building-your-application/routing#roles-of-folders-and-files

请务必在 `halo` 后台创建以下几个菜单路径（和前端的菜单路径匹配）

路径固定 - 名称随意

- `/` - 首页
- `/journals` - 动态
- `/links` - 友链
- `/about` - 关于

至于文章的路径

这里采用了 `/p/${metadata.anme}/${spec.slug}` 的形式，修改时请注意务必知晓 `metadata.anme` 用来作什么。

## 项目使用图标

采用方案：用纯JS把iconfont.cn的图标转换成React组件，不依赖字体，支持多色彩。工具为 [react-iconfont-cli](https://github.com/iconfont-cli/react-iconfont-cli)

我这里为了做了一些修改，并在 npmjs.com 中新发布了一个修改包 `@aerowang/react-iconfont-cli`，项目中已有使用。

使用方法：
1. 基础说明请看[原版](https://github.com/iconfont-cli/react-iconfont-cli#readme)
2. **注意：**需要额外安装开发依赖 `fs-extra`，项目中已有安装
3. 最后一步生成图标组件即可，同样使用[原版](https://github.com/iconfont-cli/react-iconfont-cli#readme)提供的方法 `npx iconfont-h5`