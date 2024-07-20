<!--
 * @Author: Antony-Juicy wangshengping1064@dingtalk.com
 * @Date: 2023-03-21 17:47:53
 * @LastEditors: Antony-Juicy wangshengping1064@dingtalk.com
 * @LastEditTime: 2024-07-20 22:13:42
 * @FilePath: /react18-umi4-antdPor5-template/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Ant Design Pro

本项目使用 [Ant Design Pro](https://pro.ant.design)进行构建.

## 运行前准备

下载依赖:

```bash
npm install
```

or

```bash
yarn
```

## 脚本

Ant Design Pro 提供了一些有用的脚本（`package.json`）来帮助您快速启动和构建 web 项目，代码风格检查和测试。

### 启动项目

```bash
yarn start  ## 登录需要跑这个命令
```

### 编译项目

```bash
yarn build
```

### 检查代码风格

```bash
yarn lint
```

使用脚本修改部分 lint 错误 :

```bash
yarn lint:fix
```

合法的提交日志格式如下(emoji 和 模块可选填)：

        [<emoji>] [revert: ?]<type>[(scope)?]: <message>

        💥 feat(模块): 添加了个很棒的功能
        🐛 fix(模块): 修复了一些 bug
        📝 docs(模块): 更新了一下文档
        🌷 UI(模块): 修改了一下样式
        🏰 chore(模块): 对脚手架做了些更改
        🌐 locale(模块): 为国际化做了微小的贡献

        其他提交类型: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep

        See https://github.com/vuejs/core/blob/main/.github/commit-convention.md
