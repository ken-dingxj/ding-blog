<!--
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-06-28 13:35:16
 * @LastEditTime: 2020-07-06 17:33:08
 * @LastEditors: dingxuejin
--> 

# webpack源码解析

## webpack整体流程图

摘自:[细说webapck之流程篇](https://www.cnblogs.com/yxy99/p/5852987.html)

![GitHub](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg "GitHub,Social Coding")

### optimist阶段(现在已被yargs替代)

```js
//webpack-cli/bin/cli.js
const yargs = require("yargs").usage(`webpack-cli ${require("../package.json").version}

Usage: webpack-cli [options]
       webpack-cli [options] --entry <entry> --output <output>
       webpack-cli [options] <entries...> --output <output>
       webpack-cli <command> [options]

For more information, see https://webpack.js.org/api/cli/.`);

	require("./config/config-yargs")(yargs);

	// yargs will terminate the process early when the user uses help or version.
	// This causes large help outputs to be cut short (https://github.com/nodejs/node/wiki/API-changes-between-v0.10-and-v4#process).
	// To prevent this we use the yargs.parse API and exit the process normally
	yargs.parse(process.argv.slice(2), (err, argv, output) => {
```

和commander一样,process.argv.slice(2)，获取到后缀参数后，把参数保存到argv里面，看看argv是什么

```js
argv:
$0: "node_modules/webpack/bin/webpack.js"
bail: null
cache: null
color: {level: 3, hasBasic: true, has256: true, has16m: true}
colors: {level: 3, hasBasic: true, has256: true, has16m: true}
hot: true
info-verbosity: "info"
infoVerbosity: "info"
profile: null
_: []
__proto__: Object
```
 ### config合并与插件加载
 
 在加载插件之前，webpack将webpack.config.js中的各个配置项拷贝到option对象中，并加载用户配置在webapck.config.js的plugins。接着argv
 会传入到./node_modules/webpack/bin/convert-argv.js中，通过判断argv中参数的值决定是否去加载对应插件。
 ```js
 ifBooleanArg("hot", function() {
    ensureArray(options, "plugins");
    var HotModuleReplacementPlugin = require("../lib/HotModuleReplacementPlugin");
    options.plugins.push(new HotModuleReplacementPlugin());
});
...
return options;
 ```
options只作为最后返回结果，包含了之后构建阶段所需的重要信息

```js
{
  entry: {},//入口配置
  output: {}, //输出配置
  plugins: [], //插件集合(配置文件 + shell指令)
  module: { loaders: [ [Object] ] }, //模块配置
  context: //工程路径
  ...
}
```

