# 数据驱动

## 简介
Vue.js一个核心思想是数据驱动。所谓数据驱动，是指视图是有数据驱动生成，我们对视图修改，不会直接操作DOM，而是通过修改数据。
在vue.js中我们可以采用简洁的模板语法来声明式的将数据渲染为DOM：
```html
<div id="app">
 {{message}}
</div>
```
```js
var app=new Vue({
  el:"#app"，
  data:{
    message:'Hello Vue!'
  }
})
```
最终它会在页面渲染出Hello Vue。接下来我们从源码角度分析Vue是如何实现的。

## new Vue发生了什么
### 主流程
![](https://ustbhuangyi.github.io/vue-analysis/assets/new-vue.png)
### 初始化
### 挂载
### 编译
### render
### 虚拟dom
### patch

