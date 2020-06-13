<!--
 * @Description:
 * @Author: dingxuejin
 * @Date: 2020-06-13 11:08:24
 * @LastEditTime: 2020-06-13 12:48:39
 * @LastEditors: dingxuejin
-->

# ajax 详解

## 手写 ajax

```js
var ajax = new XMLHttpRequest();
ajax.addListener("load", function() {
  console.log(this.response);
});
ajax.open("Get", "http://www.example.org/example.txt");
ajax.send(null);
```

### 请求类型

**生成的请求可以有两种方式来获取数据，异步模式或同步模式**

```js
//同步
var ajax = new XMLHttpRequest();
ajax.open("Get", "http://www.example.org/example.txt", false);
ajax.onload = function() {
  console.log(this.response);
};
ajax.send(null);

console.log(123);//等待请求成功后，打印
```

```js
//异步
var ajax = new XMLHttpRequest();
ajax.open("Get", "http://www.example.org/example.txt", false);
ajax.onload = function() {
  console.log(this.response);
};
ajax.send(null);

console.log(123);//优先执行
```
