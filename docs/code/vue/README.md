# Vue生态解析

## vue构造函数
**vue原型**
```js
Vue.prototype._init=function(option?:Object){}
Vue.prototype.$data
Vue.prototype.$props
Vue.prototype.$set=set
Vue.prototype.$delete=del
Vue.prototype.$watch=function(expOrFn:string|function,cb:any,option?:Object):Function{}
Vue.prototype.$on=function(event:tring|Array<string>,fn:Function):Component{}
Vue.prototype.$once=function(event:string|Array<string>,fn:Function):Component{}
Vue.prototype.$off=function(event?:string|Attay<string>,fn?:Function):Component{}
Vue.prototype.$emit = function (event: string): Component {}

```