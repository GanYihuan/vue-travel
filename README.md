# imooc-travel

> Vue2.5 开发去哪儿网 App 从零基础入门到实战项目

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 慕课网: Vue2.5 开发去哪儿网 App 从零基础入门到实战项目

## 注意，如果无法请求到 static 里面数据 时,config/index.js 能配置端口

## 2-2 hello world

- ✨
- **chap2/2-2.html**

## 2-3 开发 TodoList

- ✨
- **chap2/2-3.html**

## 2-4 MVVM 模式

- ✨✨✨✨
- **chap2/2-4.html**

## 2-5 前端组件化

- ✨

## 2-6 使用组件改造 TodoList

- ✨✨

## 2-7 简单的组件间传值

- ✨✨✨

## 2-8 章节小结

- ✨

## 3-1 Vue 实例

- ✨

## 3-2 Vue 实例生命周期

- ✨✨✨
- **chap3/3-2.html**

## 3-3 Vue 的模版语法

- ✨✨
- **chap3/3-3.html**

## 3-4 计算属性,方法与侦听器

- ✨✨
- **chap3/3-4.html**

## 3-5 计算属性的 getter 和 setter

- ✨✨
- **chap3/3-5.html**

## 3-6 Vue 中的样式绑定

- ✨✨
- **chap3/3-6.html**

## 3-7 Vue 中的条件渲染

- ✨✨
- **chap3/3-7.html**
- v-if, v-show
- input define key

## 3-8, 3-9 Vue 中的列表渲染 Vue 中的 set 方法

- ✨✨
- **chap3/3-8.html**

## 4-1 使用组件的细节点

- ✨✨✨
- **chap4/4-1.html**
- is: 解决 H5 上的小 bug: `<tr is="row"></tr>`
- data must function
- ref

## 4-2 父子组件间的数据传递

- ✨✨
- **chap4/4-2.html**
- 单项数据流
- $emit
- child component data must function

## 4-3 组件参数校验与非 props 特性

- ✨✨
- **chap4/4-3.html**

## 4-4 给组件绑定原生事件

- ✨✨
- **chap4/4-4.html**

## 4-5 非父子组件间的传值

- ✨✨✨✨
- **chap4/4-5.html**
- bus

## 4-6 在 Vue 中使用插槽

- ✨✨
- **chap4/4-6.html**

## 4-7 作用域插槽

- ✨✨✨✨
- **chap4/4-7.html**

## 4-8 动态组件与 v-once 指令

- ✨✨✨✨
- **chap4/4-8.html**
- 动态组件
- v-once

## 5-1 Vue 动画 - Vue 中 CSS 动画原理

- ✨✨
- **chap5/5-1.html**

## 5-2 在 Vue 中使用 animate.css 库

- ✨✨
- **chap5/5-2.html**
- use Animate.css library

## 5-3 在 Vue 中同时使用过渡和动画

- ✨✨
- **chap5/5-3.html**

## 5-4 Vue 中的 Js 动画与 Velocity.js 的结合

- ✨✨
- **chap5/5-4.html**
- Velocity.js library

## 5-5 Vue 中多个元素或组件的过渡

- ✨✨✨
- **chap5/5-5.html**
- 加 key 不让它复用 dom, 否则动画不出现
- mode="in-out": 先显示再隐藏
- 动态组件 `<component :is="type"></component>`

## 5-6 Vue 中的列表过渡

- ✨✨
- **chap5/5-6.html**

## 5-7 Vue 中的动画封装

- ✨✨
- **chap5/5-7.html**

## 6-1 Vue 项目预热 - 环境配置

-✨

```shell
node -v
npm -v
vue init webpack imooc-travel
npm run dev
```

## 6-2 Vue项目预热 - 项目代码介绍

- ✨

## 6-3 Vue项目预热 - 单文件组件与 Vue 中的路由

- ✨
- **router/route.js**

## 6-4 Vue项目预热 - 单页应用 VS 多页应用

- ✨
- **static/know1.png**
- **static/know2.png**

## 6-5 Vue项目预热 - 项目代码初始化

- ✨✨
- index.html/meta
- iconfont
- reset.css
- border.css
- fastclick 移动端延迟 300ms 解决

```shell
npm i fastclick -S
```

## 7-1 Vue项目首页 - header 区域开发

- ✨✨✨
- **home/Header.vue**
- 1rem = html font-size = 50px

```shell
npm i stylus -S
npm i stylus-loader -S
```

## 7-2 Vue 项目首页 - iconfont 的使用和代码优化

- ✨✨
- **home/Header.vue**
- 别名配置 webpack.base.conf.js

## 7-3 Vue 项目首页 - 首页轮播图

- ✨✨✨
- **home/Swiper.vue**
- prevent shake, inside css .wrapper
- vue-awesome-swiper
- 图片宽高比固定比值:

```css
  overflow: hidden;
  padding-bottom: 31.25%;
  height: 0;
```

- >>>: 样式穿透, 不受 scoped 影响, .wrapper 里面出现 .swiper-pagination-bullet-active就可以添加样式

```shell
npm i vue-awesome-swiper -S
```

## 7-4 Vue项目首页 - 图标区域页面布局

- ✨✨
- **home/Icons.vue**

## 7-5 Vue项目首页 - 图标区域逻辑实现

- ✨✨✨
- **home/Icons.vue**
- swiper 无法分页, 解决
- swiper 样式设置
- css 显示...

## 7-6 Vue项目首页 - 热销推荐组件开发

- ✨✨
- **home/Recommend.vue**

## 7-7 Vue项目首页 - 开发周末游组件

- ✨✨
- **home/Weekend.vue**
- Weekend.styl 固定宽高比

## 7-8 Vue 项目首页 - 使用 axios 发送 ajax 请求 

- ✨✨✨
- **home/Home.vue**
- axios 异步传数据

```shell
npm i axios -S
```

- 转发访问的路径内容
- **config/index.js**

```shell
proxyTable: {
  '/api': {
    target: 'http://localhost:8080',
    pathRewrite: {
      '^/api': '/static/mock'
    }
  }
},
```

```shell
axios.get('/api/index.json?city=')
```

> 将转发到

```shell
axios.get('/static/mock/index.json?city=' + this.city)
```

## 7-9 Vue 项目首页 - 首页父子组组件间传值

- ✨✨✨
- **home/Home.vue**
- **home/Header.vue**
- **home/Icons.vue**
- **home/Recommend.vue**
- **home/Swiper.vue**
- **home/Weekend.vue**

## 8-1 Vue项目城市选择页 - 路由配置

- ✨
- **city/Header.vue**

## 8-2 Vue项目城市选择页 - 搜索框布局

- ✨
- **city/Search.vue**

## 8-3 Vue项目城市选择页 - 列表布局

- ✨✨✨
- **city/List.vue**
- 内部设置了float:left,为了触发float BLC```overflow: hidden```

## 8-4 Vue 项目城市选择页 - BetterScroll 的使用和字母表布局

- ✨✨
- **city/Search.vue**
- **city/Alphabet.vue**
- ``npm i better-scroll -S``
- better-scroll 包裹两层

## 8-5 Vue项目城市选择页 - 页面的动态数据渲染

- ✨✨✨
- **city/City.vue**
- **city/List.vue**
- Ajax

## 8-6 Vue项目城市选择页 - 兄弟组件数据传递

- ✨✨✨✨
- **city/Alphabet.vue**
- **city/City.vue**
- **city/List.vue**

## 8-7 Vue项目城市选择页 - 列表性能优化

- ✨✨✨
- **city/Alphabet.vue**
- 节流功能

## 8-8 Vue项目城市选择页 - 搜索逻辑实现

- ✨✨✨✨
- **city/Search.vue**
- better-scroll

## 8-9 Vue项目城市选择页 - Vuex实现数据共享

- ✨✨✨✨
- **city/List.vue**
- **city/Search.vue**
- **home/Header.vue**
- **store/state.js**
- **store/store.js**
- **store/mutations.js**

```shell
npm i vuex -S
```

## 8-10 Vue项目城市选择页 - Vuex的高级使用及localStorage

- ✨✨✨✨
- mapState 共用数据映射
- mapMutations 共用 mutation 数据映射

## 8-11 Vue项目城市选择页 - 使用keep-alive优化网页性能

- ✨✨✨✨
- **App.vue**
- **Home.vue**
- keep-alive, activated生命周期, 当页面重新显示的时候将运行
- 发送ajax请求带参数

## 9-1 Vue项目详情页 - 动态路由和banner布局

- ✨✨
- **Banner.vue**
- 动态路由

## 9-2 Vue 项目详情页 - 公用图片画廊组件拆分 ✨✨✨

- **Gallary.vue**
- Swiper official website

## 9-3 Vue 项目详情页 - 实现 Header 渐隐渐显效果 ✨✨✨

- **Header.vue**

## 9-4 Vue 项目详情页 - 对全局事件的解绑 ✨✨✨

- **Header.vue**

## 9-5 Vue 项目详情页 - 使用递归组件实现详情页列表 ✨✨✨

- **List.vue**

```shell
// 名称为了使用递归
name: 'DetailList',
```

## 9-6 Vue 项目详情页 - 动态获取详情页面数据 ✨✨✨

- **Detail.vue**
- **route.js**
- route 路径跳转，页面始终位于顶部

## 9-7 Vue 项目详情页 - 在项目中加入基础动画 ✨✨

- **FadeAnimation.vue**
- **Banner.vue**

## 10-1 Vue 项目的联调测试上线 - 项目前后端联调 ✨✨

- **config/index.js**
- localhost: 80 端口

## 10-2 Vue 项目的联调测试上线 - 真机测试 ✨✨✨

- **config/index.js**
- **package.json**
- **city/Alphabet.vue**
- get IP

```shell
<!-- mac -->
ifconfig
<!-- window -->
ipconfig
```

> package.json 配置后重启项目

```shell
"dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",
```

- 8081: 根据 config/index.js 来查看配置
- chrome: `IP:8081`
- 移动在同一局域网访问 `IP:8081`
- **city/Alphabet.vue**
- @touchstart.prevent 阻止默认事件
- babel-polyfill: 防止白屏

> babel-polyfill: 当你的手机版本太低时，添加一些承诺语法

## 10-3 Vue 项目的联调测试上线 - 打包上线 ✨✨✨

- **config/index.js**
- 打包

```shell
npm run build
```

- **config/index.js**

> App 放入项目文件中，需要配置路径，后端访问项目文件可以运行 App

```shell
build: {
  assetsPublicPath: '/project',
}
```

## 10-4 Vue 项目的联调测试上线 - 异步组件实现按需加载 ✨

## 10-5 Vue 项目的联调测试上线 - 课程总结与后续学习指南 ✨
