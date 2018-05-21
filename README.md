# imooc-travel

> A Vue.js project

## Build Setup

``` bash
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


## 慕课网: Vue2.5开发去哪儿网App 从零基础入门到实战项目


## 2-2: hello vue
*(chap2/2-2.html*
- ✨


## 2-3: TodoList
*(chap2/2-3.html)*
- ✨


## 2-4: MVVM, MVP
*(chap2/2-4.html)*
- ✨✨✨✨


## 2-5: component thought introduce
- ✨


## 2-6: component thought use
- ✨✨


## 2-7: father child pass data
- ✨✨


## 3-1: instance
- ✨
##### chrome check vue instance


## 3-2: life circle
*(chap3/3-2.html)*
- ✨✨


## 3-3: module
*(chap3/3-3.html)*
- ✨✨


## 3-4: computed
*(chap3/3-4.html)*
- ✨✨


## 3-5: computed getter setter
*(chap3/3-5.html)*
- ✨✨


## 3-6: set style
*(chap3/3-6.html)*
- ✨✨


## 3-7: condition rendering
*(chap3/3-7.html)*
- ✨✨


## 3-8: cycle
*(chap3/3-8.html)*
- ✨✨


## 3-9: set
*(chap3/3-8.html)*
- ✨✨


## 4-1: $refs, ref
*(chap4/4-1.html)*
- ✨✨


## 4-2: father child transfer data
*(chap4/4-2.html)*
- ✨✨


## 4-3: component parameter check, props features, no't props features
*(chap4/4-3.html)*
- ✨✨


## 4-4: native event
*(chap4/4-4.html)*
- ✨✨


## 4-5: not father child component pass data
*(chap4/4-5.html)*
- ✨✨


## 4-6: slot
*(chap4/4-6.html)*
- ✨✨


## 4-7: slot scope
*(chap4/4-7.html)*
- ✨✨


## 4-8: Dynamic components and v-once instructions.
*(chap4/4-8.html)*
- ✨✨


## 5-1: animate
*(chap5/5-1.html)*
- ✨✨


## 5-2: Animate.css library
*(chap5/5-2.html)*
- ✨✨


## 5-3: use Animate.css and transition at the same time
*(chap5/5-3.html)*
- ✨✨


## 5-4: js animate and velocity.js
*(chap5/5-4.html)*
- ✨✨


## 5-5: many component animate
*(chap5/5-5.html)*
- ✨✨


## 5-6: list animate, transition-group
*(chap5/5-6.html)*
- ✨✨


## 5-7: animate package
*(chap5/5-7.html)*
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
*(router/route.js)*
- ✨


## 6-4: know
*(static/know1.png))*
*(static/know2.png))*
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
*(home/Header.vue)*
- ✨✨✨
##### 1rem = html font-size=50px
##### <style lang="stylus" scoped>   scoped: only use for this component
```
npm install stylus --save
npm install stylus-loader --save
```


## 7-2: Header component
*(home/Header.vue)*
- ✨✨


## 7-3: carousel component
*(home/Swiper.vue)*
- ✨✨


## 7-4: Icons area component
*(home/Icons.vue)*
- ✨✨


## 7-5: Icons area component
*(home/Icons.vue)*
- ✨✨


## 7-6: recommend component
*(home/Recommend.vue)*
- ✨✨


## 7-7: weekend component
*(home/Weekend.vue)*
- ✨✨


## 7-8: dynamic data rendering
*(home/Home.vue)*
*(config/index.js)*
- ✨✨✨
##### static file can check in chrome
> http://localhost:8080/static/mock/index.json
##### forwarding
*(config/index.js)*
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
*(home/Home.vue)*
```
axios.get('/api/index.json?city=')
```
> will forwarding to
```
axios.get('/static/mock/index.json?city=' + this.city)
```


## 7-9: father child component transfer data
*(home/Home.vue)*
*(home/Header.vue)*
*(home/Icons.vue)*
*(home/Recommend.vue)*
*(home/Swiper.vue)*
*(home/Weekend.vue)*
- ✨✨✨


## 8-1: city Header component
*(city/Header.vue)*
- ✨


## 8-2: city Search component
*(city/Search.vue)*
- ✨


## 8-3: city List component
*(city/List.vue)*
- ✨✨


## 8-4: city List component better-scroll
*(city/Search.vue)*
*(city/Alphabet.vue)*
- ✨✨
##### better-scroll


## 8-5: dynamic data rendering
*(city/City.vue)*
*(city/List.vue)*
- ✨✨✨
##### Ajax


## 8-6: Brother component linkage, Alphabet scroll
*(city/Alphabet.vue)*
*(city/City.vue)*
*(city/List.vue)*
- ✨✨✨✨


## 8-7: Alphabet Performance optimization
*(city/Alphabet.vue)*
- ✨✨✨
##### Performance optimization
##### Throttling function


## 8-8: Search function
*(city/Search.vue)*
- ✨✨✨✨
##### better-scroll


## 8-9, 8-10: Vuex
*(city/List.vue)*
*(city/Search.vue)*
*(home/Header.vue)*
*(store/state.js)*
*(store/store.js)*
*(store/mutations.js)*
- ✨✨✨✨
##### if cache wrong, close chrome


## 8-11: performed optimization
*(App.vue)*
*(Home.vue)*
- ✨✨✨✨
##### keep-alive
##### Ajax


## 9-1: Banner component
*(Banner.vue)*
- ✨✨


## 9-2: Gallary component, Swiper
*(Gallary.vue)*
- ✨✨✨
##### Swiper official website


## 9-3: Header component animate
*(Header.vue)*
- ✨✨✨


## 9-4: fix bug
*(Header.vue)*
- ✨✨✨


## 9-5: Recursive components
*(List.vue)*
- ✨✨✨


## 9-6: dynamic data rendering
*(Detail.vue)*
*(route.js)*
- ✨✨✨
##### route


## 9-7: animate
*(FadeAnimation.vue)*
*(Banner.vue)*
- ✨✨


## 10-1: Front-end Back-end intermodulation
*(config/index.js)*
- ✨✨


## 10-2: mobile test
*(config/index.js)*
*(package.json)*
*(city/Alphabet.vue)*
- ✨✨✨
##### get IP
```
ifconfig
```
> inet: IP
*(package.json)*
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
*(city/Alphabet.vue)*
> fix bug
##### babel-polyfill
> when your mobile too low, add some promise grammar


## 10-3: package
*(config/index.js)*
- ✨✨✨
```
npm run build
```
*(config/index.js)*
> App put into project file, need to config path, Back-end access project file can run App
```
build: {
    assetsPublicPath: '/project',
}
```


## 10-4: video can't open


## 10-5: summary
- ✨
