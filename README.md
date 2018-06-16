# imooc-travel

> A Vue.js project

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

## 注意，如果无法请求到static里面数据 时,config/index.js 能配置端口

## 2-2: hello vue ✨

-**chap2/2-2.html**

## 2-3: TodoList ✨

-**chap2/2-3.html**

## 2-4: MVVM, MVP ✨✨✨✨

-**chap2/2-4.html**

## 2-5: component thought introduce ✨

## 2-6: component thought use ✨✨

## 2-7: father child pass data ✨✨✨

## 3-1: vue instance ✨

## 3-2: life circle ✨✨

- **chap3/3-2.html**

## 3-3: v-text, v-html ✨✨

- **chap3/3-3.html**

## 3-4: computed, method, watch ✨✨

- **chap3/3-4.html**

## 3-5: computed getter setter ✨✨

- **chap3/3-5.html**

## 3-6: set style ✨✨

- **chap3/3-6.html**

## 3-7: condition render ✨✨

- **chap3/3-7.html**

- v-if, v-show
- input define key

## 3-8, 3-9: cycle ✨✨

- **chap3/3-8.html**

## chap4: In-depth understanding of Vue components

## 4-1 Use the details of the component ✨✨✨

- **chap4/4-1.html**

- is: 解决H5上的小bug
- data must function
- ref

## 4-2 Data transfer between parent and child components ✨✨

- **chap4/4-2.html**

- 单项数据流
- $emit
- child component data must function

## 4-3 Component parameter validation and non-props features ✨✨

- **chap4/4-3.html**

## 4-4: native event ✨✨

- **chap4/4-4.html**

## 4-5: Passing values between non-parent-child components ✨✨

- **chap4/4-5.html**

- bus

## 4-6: slot ✨✨

- **chap4/4-6.html**

## 4-7: slot scope ✨✨

- **chap4/4-7.html**

## 4-8: Dynamic components with v-once instructions ✨✨

- **chap4/4-8.html**

- 动态组件
- v-once

## 5-1: animate ✨✨

- **chap5/5-1.html**

## 5-2: Animate.css library ✨✨

- **chap5/5-2.html**
- Animate.css library

## 5-3: use Animate.css and transition at the same time ✨✨

- **chap5/5-3.html**

## 5-4: js animate and velocity.js ✨✨

- **chap5/5-4.html**
- Velocity.js library

## 5-5: many component animate ✨✨✨

- **chap5/5-5.html**
- key
- mode
- 动态组件

## 5-6: list animate, transition-group ✨✨

- **chap5/5-6.html**

## 5-7: animate package ✨✨

- **chap5/5-7.html**

## 6-1: 环境配置 ✨

```shell
node -v
npm -v
vue init webpack imooc-travel
npm run dev
```

## 6-2: 项目代码介绍 ✨

## 6-3: 单文件组件与Vue中的路由 ✨

- **router/route.js**

## 6-4: 单页应用VS多页应用 ✨

- **static/know1.png**
- **static/know2.png**

## 6-5: 项目代码初始化 ✨✨

- index.html/meta
- iconfont
- reset.css
- border.css
- fastclick 移动端延迟300ms解决

```shell
npm install fastclick
```

## 7-1 Vue项目首页 - header区域开发 ✨✨✨

- **home/Header.vue**
- 1rem = html font-size=50px

```shell
npm install stylus --save
npm install stylus-loader --save
```

## 7-2 Vue项目首页 - iconfont 的使用和代码优化 ✨✨

- **home/Header.vue**
- 别名配置 webpack.base.conf.js

## 7-3 Vue项目首页 - 首页轮播图 ✨✨✨

- **home/Swiper.vue**
- prevent shake, inside css .wrapper
- vue-awesome-swiper
- 图片宽高比固定比值 Swpier.styl
- >>>: 样式穿透

```shell
npm install vue-awesome-swiper --save
```

## 7-4 Vue项目首页 - 图标区域页面布局 ✨✨

- **home/Icons.vue**

## 7-5 Vue项目首页 - 图标区域逻辑实现 ✨✨✨

- **home/Icons.vue**
- swiper 无法分页, 解决
- swiper 样式设置
- css 显示...

## 7-6 Vue项目首页 - 热销推荐组件开发 ✨✨

- **home/Recommend.vue**

## 7-7 Vue项目首页 - 开发周末游组件 ✨✨

- **home/Weekend.vue**
- Weekend.styl 固定宽高比

## 7-8 Vue项目首页 - 使用 axios 发送 ajax 请求 ✨✨✨

- **home/Home.vue**
- axios 异步传数据

```shell
npm install axios --save
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

## 7-9 Vue项目首页 - 首页父子组组件间传值 ✨✨✨

- **home/Home.vue**
- **home/Header.vue**
- **home/Icons.vue**
- **home/Recommend.vue**
- **home/Swiper.vue**
- **home/Weekend.vue**

## 8-1 Vue项目城市选择页 - 路由配置 ✨

- **city/Header.vue**

## 8-2 Vue项目城市选择页 - 搜索框布局 ✨

- **city/Search.vue**

## 8-3 Vue项目城市选择页 - 列表布局 ✨✨

- **city/List.vue**

## 8-4 Vue项目城市选择页 - BetterScroll 的使用和字母表布局 ✨✨

- **city/Search.vue**
- **city/Alphabet.vue**

- better-scroll

## 8-5 Vue项目城市选择页 - 页面的动态数据渲染 ✨✨✨

- **city/City.vue**
- **city/List.vue**

- Ajax

## 8-6 Vue项目城市选择页 - 兄弟组件数据传递 ✨✨✨✨

- **city/Alphabet.vue**
- **city/City.vue**
- **city/List.vue**

## 8-7 Vue项目城市选择页 - 列表性能优化 ✨✨✨

- **city/Alphabet.vue**

- Performance optimization
- Throttling function

## 8-8 Vue项目城市选择页 - 搜索逻辑实现 ✨✨✨✨

- **city/Search.vue**
- better-scroll

## 8-9, 8-10: Vuex

_(city/List.vue)_
_(city/Search.vue)_
_(home/Header.vue)_
_(store/state.js)_
_(store/store.js)_
_(store/mutations.js)_

- ✨✨✨✨

##### if cache wrong, close chrome

##### install vuex

```
npm install vuex --save
```

## 8-11: performed optimization

_(App.vue)_
_(Home.vue)_

- ✨✨✨✨

##### keep-alive

##### Ajax

## 9-1: Banner component

_(Banner.vue)_

- ✨✨

## 9-2: Gallary component, Swiper

_(Gallary.vue)_

- ✨✨✨

##### Swiper official website

## 9-3: Header component animate

_(Header.vue)_

- ✨✨✨

## 9-4: fix bug

_(Header.vue)_

- ✨✨✨

## 9-5: Recursive components

_(List.vue)_

- ✨✨✨

#####

```
// name use for Recursive
name: 'DetailList',
```

## 9-6: dynamic data rendering

_(Detail.vue)_
_(route.js)_

- ✨✨✨

##### route

## 9-7: animate

_(FadeAnimation.vue)_
_(Banner.vue)_

- ✨✨

## 10-1: Front-end Back-end intermodulation

_(config/index.js)_

- ✨✨

## 10-2: mobile test

_(config/index.js)_
_(package.json)_
_(city/Alphabet.vue)_

- ✨✨✨

##### get IP

```
ifconfig
```

> inet: IP
> _(package.json)_

```
"dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",
```

##### chrome:

```
IP:8080
```

##### mobile in the same Local area network, access

```
IP:8080
```

_(city/Alphabet.vue)_

> fix bug

##### babel-polyfill

> when your mobile too low, add some promise grammar

## 10-3: package

_(config/index.js)_

- ✨✨✨

```
npm run build
```

_(config/index.js)_

> App put into project file, need to config path, Back-end access project file can run App

```
build: {
    assetsPublicPath: '/project',
}
```

## 10-4: video can't open

## 10-5: summary

- ✨
