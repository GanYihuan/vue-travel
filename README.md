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

> 注意，如果无法请求到 static 里面数据 时,config/index.js 能配置端口

## 2-2 hello world

## 2-3 开发 TodoList

## 2-4 MVVM 模式

> MVVM 是什么, MVP 是什么

- jquery 方法 $.extend $.proxy

```js
function Page() {}
/* 为 Page 增加内容 */
$.extend(Page.prototype, {})
// $.proxy 方法接受一个已有的函数，并返回一个带特定上下文的新的函数。
// 该方法通常用于向上下文指向不同对象的元素添加事件。
$.proxy(this.handleBtnClick, this)
```

## 2-5 前端组件化

## 2-6 使用组件改造 TodoList

## 2-7 简单的组件间传值

## 2-8 章节小结

## 3-1 Vue 实例

## 3-2 Vue 实例生命周期

- 生命周期图

## 3-3 Vue 的模版语法

## 3-4 计算属性,方法与侦听器

## 3-5 计算属性的 getter 和 setter

## 3-6 Vue 中的样式绑定

## 3-7 Vue 中的条件渲染

- v-if, v-show
- input define key

## 3-8, 3-9 Vue 中的列表渲染 Vue 中的 set 方法

## 4-1 使用组件的细节点

- is: 解决 H5 上的小 bug

```html
<tbody>
  <!-- tbody inside must need <tr>, when use Vue component, 'is' can solve it -->
  <tr is="row"></tr>
  <tr is="row"></tr>
  <tr is="row"></tr>
</tbody>
```

## 4-2 父子组件间的数据传递

- 单项数据流
- 父级数据转化为子组件内部数据

```js
/* access father data */
props: ['count'],
/* child component data must function */
data() {
  return {
    /* 父级数据转化为子组件内部数据 */
    number: this.count
  }
},
```

## 4-3 组件参数校验与非 props 特性

## 4-4 给组件绑定原生事件

## 4-5 非父子组件间的传值

- bus

## 4-6 在 Vue 中使用插槽

## 4-7 作用域插槽

```html
<template slot-scope="props">
  <h1>{{props.item}} --- hello</h1>
</template>
```

## 4-8 动态组件与 v-once 指令

## 5-1 Vue 动画 - Vue 中 CSS 动画原理

- 5-1.png 5-1-2.png

## 5-2 在 Vue 中使用 animate.css 库

- animate.css

```html
<!-- use Animate.css library -->
<!-- animated: 启动 Animate.css -->
<!-- swing: 效果 -->
<transition
  enter-active-class="animated swing" leave-active-class="animated shake"
>
  <div v-if="show">hello world 3</div>
</transition>
```

## 5-3 在 Vue 中同时使用过渡和动画

```html
<!-- Use Animate.css library -->
<!-- appear: 刚刚加载就出现动画 -->
<!-- type="transition": 动画效果以自己定义的 transition 为最优先 -->
<!-- :duration="5000": 总时间 5s, 5s 后 animate class 将会清除 -->
<!-- :duration="{enter: 5000, leave: 10000}": 5s 后, enter animateClass 将会清除, 10s 后, leave animateClass 将会清除 -->
<transition
  name="fade"
  :duration="{enter: 5000, leave: 10000}"
  type="transition"
  appear
  appear-active-class="animated swing"
  enter-active-class="animated swing fade-enter-active"
  leave-active-class="animated shake fade-leave-active"
>
  <div v-if="show">hello world 3</div>
</transition>
```

## 5-4 Vue 中的 Js 动画与 Velocity.js 的结合

```js
Velocity(
  el,
  {
    fontSize: 30
  },
  {
    duration: 2000,
    complete: done
  }
)
```

## 5-5 Vue 中多个元素或组件的过渡

- 加 key 不让它复用 dom, 否则动画不出现
- mode="in-out": 先显示再隐藏

```html
<transition name="fade" mode="out-in">
  <!-- 动态组件 -->
  <component :is="type"></component>
</transition>

handleClick() {
  this.type = this.type === 'child' ? 'child-one' : 'child'
}

Vue.component('child', {
  template: '<div>child</div>'
})
Vue.component('child-one', {
  template: '<div>child-one</div>'
})
```

## 5-6 Vue 中的列表过渡

```html
<transition-group name="fade">
  <div v-for="(item, index) of list" :key="item.id">
    {{item.title}}
  </div>
</transition-group>
```

## 5-7 Vue 中的动画封装

## 6-1 Vue 项目预热 - 环境配置

```node
node -v
npm -v
npm i nvm
nvm ls
nvm install 8.9.1
nvm use 8.9.1
vue init webpack imooc-travel
npm run start
```

## 6-2 Vue 项目预热 - 项目代码介绍

## 6-3 Vue 项目预热 - 单文件组件与 Vue 中的路由

```js
/* 路径跳转，页面始终位于顶部 */
scrollBehavior(to, from, savedPosition) {
  return {
    x: 0,
    y: 0
  }
}
```

## 6-4 Vue 项目预热 - 单页应用 VS 多页应用

- 单页应用

  > 页面切换快
  > 首屏慢, SEO 差

- 多页应用
  > 首屏时间快, SEO 效果好
  > 页面切换慢

## 6-5 Vue 项目预热 - 项目代码初始化

- index.html/meta
- iconfont 使用
- reset.css
- border.css
- fastclick 移动端延迟 300ms 解决

```node
npm i fastclick -S
```

## 7-1 Vue 项目首页 - header 区域开发

- iphone6: 1rem = html: font-size

```node
npm i stylus stylus-loader -S
```

## 7-2 Vue 项目首页 - iconfont 的使用和代码优化

- 别名配置 webpack.base.conf.js

## 7-3 Vue 项目首页 - 首页轮播图

- prevent shake, inside css .wrapper
- vue-awesome-swiper
- 图片宽高比固定比值:

```css
div {
  overflow: hidden;
  padding-bottom: 31.25%;
  width: 100%;
  height: 0;
}
```

- >>> 样式穿透, 不受 scoped 影响, .wrapper 里面出现 .swiper-pagination-bullet-active 就可以添加样式

```node
npm i vue-awesome-swiper -S
```

## 7-4 Vue 项目首页 - 图标区域页面布局

## 7-5 Vue 项目首页 - 图标区域逻辑实现

- swiper 无法分页, 解决 **Icons.vue**
- css 显示 ...

```css
ellipsis() {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

```css
position: absolute;
// 相当于 width: 100%;
left: 0;
right: 0;
// 相当于 width: 100%;
```

## 7-6 Vue 项目首页 - 热销推荐组件开发

## 7-7 Vue 项目首页 - 开发周末游组件

- Weekend.styl 固定宽高比

## 7-8 Vue 项目首页 - 使用 axios 发送 ajax 请求

- axios 异步传数据

```node
npm i axios -S
```

- 转发访问的路径内容
- **config/index.js**

```js
proxyTable: {
  '/api': {
    target: 'http://localhost:8080',
    pathRewrite: {
      '^/api': '/static/mock'
    }
  }
},
```

```js
axios.get('/api/index.json?city=')
```

> 将转发到

```js
axios.get('/static/mock/index.json?city=' + this.city)
```

## 7-9 Vue 项目首页 - 首页父子组组件间传值

## 8-1 Vue 项目城市选择页 - 路由配置

## 8-2 Vue 项目城市选择页 - 搜索框布局

## 8-3 Vue 项目城市选择页 - 列表布局

- 内部设置了 float:left,为了触发 float BLC`overflow: hidden`

## 8-4 Vue 项目城市选择页 - BetterScroll 的使用和字母表布局

- `npm i better-scroll -S`
- better-scroll 包裹两层

## 8-5 Vue 项目城市选择页 - 页面的动态数据渲染

- Ajax

## 8-6 Vue 项目城市选择页 - 兄弟组件数据传递

## 8-7 Vue 项目城市选择页 - 列表性能优化

- 节流功能

## 8-8 Vue 项目城市选择页 - 搜索逻辑实现

- better-scroll

## 8-9 Vue 项目城市选择页 - Vuex 实现数据共享

```shell
npm i vuex -S
```

> 支持新语法, ...mapState(), **.babelrc** 配置

```console
npm i babel-preset-stage-1 -D
```

```json
"presets": [
  "stage-1"
],
```

## 8-10 Vue 项目城市选择页 - Vuex 的高级使用及 localStorage

- mapState 共用数据映射
- mapMutations 共用 mutation 数据映射

## 8-11 Vue 项目城市选择页 - 使用 keep-alive 优化网页性能

- keep-alive, activated 生命周期, 当页面重新显示的时候将运行
- 发送 ajax 请求带参数

## 9-1 Vue 项目详情页 - 动态路由和 banner 布局

- 动态路由

## 9-2 Vue 项目详情页 - 公用图片画廊组件拆分

- Swiper official website

## 9-3 Vue 项目详情页 - 实现 Header 渐隐渐显效果

## 9-4 Vue 项目详情页 - 对全局事件的解绑

## 9-5 Vue 项目详情页 - 使用递归组件实现详情页列表

```shell
// 名称为了使用递归
name: 'DetailList',
```

## 9-6 Vue 项目详情页 - 动态获取详情页面数据

- route 路径跳转，页面始终位于顶部

## 9-7 Vue 项目详情页 - 在项目中加入基础动画

## 10-1 Vue 项目的联调测试上线 - 项目前后端联调

- localhost: 80 端口

## 10-2 Vue 项目的联调测试上线 - 真机测试

- get IP

```console
<!-- mac -->
ifconfig
<!-- window -->
ipconfig
```

> package.json 配置后重启项目, 能通过 ip 地址被访问 --host 0.0.0.0

```json
"dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",
```

- 8081: 根据 config/index.js 来查看配置
- chrome: `IP:8081`
- 移动在同一局域网访问 `IP:8081`
- **city/Alphabet.vue**
- @touchstart.prevent 阻止默认事件
- babel-polyfill: 防止白屏

> babel-polyfill: 当你的手机版本太低时，添加一些承诺语法

## 10-3 Vue 项目的联调测试上线 - 打包上线

- 打包

```console
npm run build
```

- dist 内文件放入(/Applications/XAMPP/htdocs)文件中, 浏览器访问 localhost
- 将 dist 改名为 project 放入, 要配置名称 **config/index.js**

```js
build: {
  assetsPublicPath: '/project',
}
```

## 10-4 Vue 项目的联调测试上线 - 异步组件实现按需加载

## 10-5 Vue 项目的联调测试上线 - 课程总结与后续学习指南
