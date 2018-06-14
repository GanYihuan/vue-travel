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

## 2-2: hello vue ✨

-**chap2/2-2.html**

## 2-3: TodoList ✨

-**chap2/2-3.html**

## 2-4: MVVM, MVP ✨✨✨✨

-**chap2/2-4.html**

## 2-5: component thought introduce ✨

## 2-6: component thought use ✨✨

## 2-7: father child pass data ✨✨

## 3-1: instance

- ✨

##### chrome check vue instance

## 3-2: life circle

_(chap3/3-2.html)_

- ✨✨

## 3-3: module

_(chap3/3-3.html)_

- ✨✨

## 3-4: computed

_(chap3/3-4.html)_

- ✨✨

## 3-5: computed getter setter

_(chap3/3-5.html)_

- ✨✨

## 3-6: set style

_(chap3/3-6.html)_

- ✨✨

## 3-7: condition rendering

_(chap3/3-7.html)_

- ✨✨

## 3-8: cycle

_(chap3/3-8.html)_

- ✨✨

## 3-9: set

_(chap3/3-8.html)_

- ✨✨

## 4-1: $refs, ref

_(chap4/4-1.html)_

- ✨✨

## 4-2: father child transfer data

_(chap4/4-2.html)_

- ✨✨

## 4-3: component parameter check, props features, no't props features

_(chap4/4-3.html)_

- ✨✨

## 4-4: native event

_(chap4/4-4.html)_

- ✨✨

## 4-5: not father child component pass data

_(chap4/4-5.html)_

- ✨✨

## 4-6: slot

_(chap4/4-6.html)_

- ✨✨

## 4-7: slot scope

_(chap4/4-7.html)_

- ✨✨

## 4-8: Dynamic components and v-once instructions.

_(chap4/4-8.html)_

- ✨✨

## 5-1: animate

_(chap5/5-1.html)_

- ✨✨

## 5-2: Animate.css library

_(chap5/5-2.html)_

- ✨✨

## 5-3: use Animate.css and transition at the same time

_(chap5/5-3.html)_

- ✨✨

## 5-4: js animate and velocity.js

_(chap5/5-4.html)_

- ✨✨

## 5-5: many component animate

_(chap5/5-5.html)_

- ✨✨

## 5-6: list animate, transition-group

_(chap5/5-6.html)_

- ✨✨

## 5-7: animate package

_(chap5/5-7.html)_

- ✨✨

## 5-8: conclusion

- ✨

##### dynamic transition

##### state transition

## 6-1: environment config

- ✨

```
node -v
npm -v
```

## 6-2: dialog introduce

- ✨

## 6-3: router

_(router/route.js)_

- ✨

## 6-4: know

_(static/know1.png))_
_(static/know2.png))_

- ✨

## 6-5: init project

- ✨✨

##### Travel icons

##### index.html

##### reset.css

##### border.css

```
npm install fastclick
```

## 7-1: Header component

_(home/Header.vue)_

- ✨✨✨

##### 1rem = html font-size=50px

##### <style lang="stylus" scoped> scoped: only use for this component

```
npm install stylus --save
npm install stylus-loader --save
```

## 7-2: Header component

_(home/Header.vue)_

- ✨✨

## 7-3: carousel component

_(home/Swiper.vue)_

- ✨✨✨

```
npm install vue-awesome-swiper --save
```

##### prevent shake, inside css .wrapper

## 7-4: Icons area component

_(home/Icons.vue)_

- ✨✨

## 7-5: Icons area component

_(home/Icons.vue)_

- ✨✨

## 7-6: recommend component

_(home/Recommend.vue)_

- ✨✨

## 7-7: weekend component

_(home/Weekend.vue)_

- ✨✨

## 7-8: dynamic data rendering

_(home/Home.vue)_
_(config/index.js)_

- ✨✨✨

##### static file can check in chrome

> http://localhost:8080/static/mock/index.json

##### forwarding

_(config/index.js)_

```
proxyTable: {
  '/api': {
      target: 'http://localhost:8080',
      pathRewrite: {
        '^/api': '/static/mock'
      }
    }
},
```

_(home/Home.vue)_

```
axios.get('/api/index.json?city=')
```

> will forwarding to

```
axios.get('/static/mock/index.json?city=' + this.city)
```

## 7-9: father child component transfer data

_(home/Home.vue)_
_(home/Header.vue)_
_(home/Icons.vue)_
_(home/Recommend.vue)_
_(home/Swiper.vue)_
_(home/Weekend.vue)_

- ✨✨✨

## 8-1: city Header component

_(city/Header.vue)_

- ✨

## 8-2: city Search component

_(city/Search.vue)_

- ✨

## 8-3: city List component

_(city/List.vue)_

- ✨✨

## 8-4: city List component better-scroll

_(city/Search.vue)_
_(city/Alphabet.vue)_

- ✨✨

##### better-scroll

## 8-5: dynamic data rendering

_(city/City.vue)_
_(city/List.vue)_

- ✨✨✨

##### Ajax

## 8-6: Brother component linkage, Alphabet scroll

_(city/Alphabet.vue)_
_(city/City.vue)_
_(city/List.vue)_

- ✨✨✨✨

## 8-7: Alphabet Performance optimization

_(city/Alphabet.vue)_

- ✨✨✨

##### Performance optimization

##### Throttling function

## 8-8: Search function

_(city/Search.vue)_

- ✨✨✨✨

##### better-scroll

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
