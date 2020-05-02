# 变化侦测

## Object 变化侦测

### 追踪变化

使用 Object.defineProperty

```js
function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      return val;
    },
    set: function(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
    },
  });
}
```

### 收集依赖

假设依赖是一个函数，保存 window.target 上

```js
function defineReactive(data, key, val) {
  let dep = [];
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      //新增
      dep.push(window.target);
      return val;
    },
    set: function(newVal) {
      if (val === newVal) {
        return;
      }
      //新增
      for (let i = 0; i < dep.length; i++) {
        dep[i](newVal, val);
      }
      val = newVal;
    },
  });
}
```

### 封装 dep 类

```js
export default class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    remove(this.subs, sub);
  }

  depend() {
    if (window.target) {
      this.addSub(window.target);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
```
在改造一下defineReactive
```js
function defineReactive(data, key, val) {
  let dep = new Dep();//修改
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      //新增
      dep.depend();//修改
      return val;
    },
    set: function(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify()//新增
    },
  });
}
```
### 依赖是Watcher
```js

vm.$watch('a.b.c',function(newVal,oldVal){
    //做点什么
})

export default class Watcer{
    constructor(vm,expOrFn,cb){
        this.vm=vm;
        this.getter=parsePath(expOrFn)
        this.cb=cb
        this.value=this.get()
    }

    get(){
        window.target=this
        let value=this.getter.call(this.vm,this.vm)
        window.target=undefined
        return value
    }

    update(){
        const oldValue=this.value
        this.value=this.get()
        this.cb.call(this.vm,this.value,oldValue)
    }
}
const baiRE=/[^\w.$]/
export function parsePath(){
    if(bailRE.test(path)){
        return
    }
    const segments=path.split('.')
    return function(obj){
        for(let i=0;i<segments.length;i++){
            if(!obj)return
            obj=obj[segments[i]]
        }
        return obj
    }
}
```