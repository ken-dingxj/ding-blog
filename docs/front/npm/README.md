# 简单动画方法库封装
## 目录结构
```text
.
├── README.md
├── dist
│   ├── Animate.amd.js
│   ├── Animate.cjs.js
│   ├── Animate.esm.js
│   ├── Animate.iife.js
│   ├── Animate.system.js
│   └── Animate.umd.js
├── example
│   ├── commonjs
│   │   └── index.js
│   ├── index.esm.html
│   ├── index.jsdelivr.html
│   ├── index.umd.html
│   ├── require
│   │   ├── index.html
│   │   └── js
│   │       ├── config.js
│   │       ├── lib
│   │       │   └── require.js
│   │       └── script
│   │           └── main.js
│   └── system
│       ├── index.html
│       └── js
│           ├── lib
│           │   └── system.js
│           └── main.js
├── package-lock.json
├── package.json
├── rollup.config.js
├── src
│   └── index.js
└── tree.md
```

[**项目地址**](https://github.com/ken-dingxj/Animate/)

## 业务代码
```js
//src/index.js
/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2020-04-22 09:52:53
 * @LastEditTime: 2020-04-22 10:21:57
 * @LastEditors: dingxuejin
 */
var tween = {
  linear: function (t, b, c, d) {
    return (c * t) / d + b;
  },
  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  strongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  strongEaseOut: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineasein: function (t, b, c, d) {
    return c * (t / d) * t * t + b;
  },
  sineaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
};

var Animate = function (dom) {
  this.dom = dom;
  this.startTime = 0;
  this.startPos = 0;
  this.endPos = 0;
  this.propertyName = null;
  this.easing = null;
  this.duration = null;
};

Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date();
  this.startPos = this.dom.getBoundingClientRect()[propertyName];
  this.propertyName = propertyName;
  this.endPos = endPos;
  this.easing = tween[easing];
  this.duration = duration;

  var self = this;
  var timeId = setInterval(function () {
    if (self.step() === false) {
      clearInterval(timeId);
    }
  }, 19);
};

Animate.prototype.step = function () {
  var t = +new Date();
  if (t >= this.startTime + this.duration) {
    this.update(this.endPos);
    return false;
  }
  var pos = this.easing(
    t - this.startTime,
    this.startPos,
    this.endPos - this.startPos,
    this.duration
  );
  console.log(pos);

  this.update(pos);
};

Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + "px";
};
export default Animate;
```
## 配置rollup
[rollup](https://www.rollupjs.com/)
```js
export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js'
    }
  };
```
**package的script里面配置构建方式**
```json
    "build:cjs": "rollup -c -f cjs -o dist/Animate.cjs.js",
    "build:amd": "rollup -c -f amd -o dist/Animate.amd.js",
    "build:esm": "rollup -c -f esm -o dist/Animate.esm.js",
    "build:iife": "rollup -c -f iife -o dist/Animate.iife.js -n Animate",
    "build:umd": "rollup -c -f umd -o dist/Animate.umd.js -n Animate",
    "build:system": "rollup -c -f system -o dist/Animate.system.js",
```
## 构建方式说明
- amd – 异步模块定义，用于像RequireJS这样的模块加载器
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 &lt;script type=module&gt;标签引入
- iife – 一个自动执行的功能，适合作为&lt;script&gt;标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
- umd – 通用模块定义，以amd，cjs 和 iife 为一体
- system - SystemJS 加载器格式

## 测试例子
相关案例查看example包

## 发布包基本流程
### 使用nrm管理npm源：
>nrm：npm registry 管理工具，方便切换不同的源；我们开发的包要发布的源是https://registry.npmjs.org
```js
// 安装
npm install -g nrm
// 查看
nrm ls
// 切换
nrm use taobao
// 增加源
nrm add  <registry> <url> [home]
// 删除源
nrm del <registry>
```
### 发布包
>记得先在 https://www.npmjs.com 注册账户并在邮箱激活账户
- 切换registry到npm对应链接https://registry.npmjs.org/：nrm use npm
- 登录：npm login
- 发布、更新：npm publish

### jsDelivr,cdn,npm
对于制作原型或学习，你可以这样使用最新版本：
```html
<script src="https://cdn.jsdelivr.net/npm/d_animate/dist/Animate.umd.js"></script>
```

使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：
```html
<script type="module">
  import Vue from "https://cdn.jsdelivr.net/npm/d_animate/dist/Animate.esm.js""
</script>
```

 webpack 或 Browserify 模块打包器配合使用
 ```js
    npm install d_animate
 ```