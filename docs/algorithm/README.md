## 每日一练

### 两数之和(20200316)

给定一个整数数组 nums  和一个目标值 target，请你在该数组中找出和为目标值的那   两个   整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

```java
//暴力破解法（时间复杂度在 O(n2)）
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i=0;i<nums.length;i++){
            for(int j=i+1;j<nums.length;j++){
                if(nums[j]==target-nums[i]){
                    return new int[]{i,j};
                };
            };
        };
        return null;
    }
};
//哈希映射（时间复杂度在 O(n)）
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int tem = target - nums[i];
            if (map.get(tem) != null) {
                return new int[]{map.get(tem),i};
            }
            map.put(nums[i],i);
        }
        return null;
    }
}
```

```javascript
//暴力破解法（时间复杂度在 O(n2)）
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
};
//哈希映射（时间复杂度在 O(n)）
var twoSum = function(nums, target) {
  let map = new Map();
  let arr;
  nums.forEach((item, index) => {
    let tem = target - item;
    if (map.get(tem) !== undefined) {
      arr = new Array(map.get(tem), index);
    }
    map.set(item, index);
  });
  return arr;
};
```

### 两数相加(20200317)

给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式储存的，并且它们的每个节点只能储存一位数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
    }
}
```

### js浮点数计算(20200318)

js浮点数计算精度问题解决方案

```js
console.log(68.1 + 19.35); //87.44999999999999
//两数相加
function accAdd(num1, num2) {
  var r1, r2, m;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return Math.round(num1 * m + num2 * m) / m;
}

console.log(accAdd(68.1, 19.35)); //87.45

// 两个浮点数相减
function accSub(num1, num2) {
  var r1, r2, m;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
}

// 两数相除
function accDiv(num1, num2) {
  var t1, t2, r1, r2;
  try {
    t1 = num1.toString().split(".")[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = num2.toString().split(".")[1].length;
  } catch (e) {
    t2 = 0;
  }
  r1 = Number(num1.toString().replace(".", ""));
  r2 = Number(num2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
//两浮点数相乘
function accMul(num1, num2) {
  var m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
  //多个数相加
  function calculation(val){
	function accAdd(num1,num2){
       var r1,r2,m;
       try{
           r1 = num1.toString().split('.')[1].length;
       }catch(e){
           r1 = 0;
       }
       try{
           r2=num2.toString().split(".")[1].length;
       }catch(e){
           r2=0;
       }
       m=Math.pow(10,Math.max(r1,r2));
       return Math.round(num1*m+num2*m)/m;
	}
	var arr=val.split("+")
	return arr.reduce(accAdd)
    }
}
```
### 对象深度相等(20200319)
```js
function deepEqual(x, y) {
  // 指向同一内存时
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;
 
    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {  
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }
 
    return true;
  }
  else 
    return false;
}
let obj1={
 "fkeyarea":["3301","3302"],
 "fruleName":"规则名称",
 "fdimensionScheme":[{
        "fdataSource":1,
        "fstepInterval":[{
          "rowType":1,
          "fmaxValue":"100",
          "fminValue":"",
          "fbranc":"20"
         }]
  },{
        "fdataSource":2,
        "fstepInterval":[{
          "rowType":2,
          "fmaxValue":"200",
          "fminValue":"100",
          "fbranc":"30"
         }]
  },{
        "fdataSource":3,
        "fstepInterval":[{
          "rowType":2,
          "fmaxValue":"300",
          "fminValue":"200",
          "fbranc":"40"
         }]
  }]
}
let obj2={
 "fkeyarea":["3301","3302"],
 "fruleName":"规则名称",
 "fdimensionScheme":[{
        "fdataSource":1,
        "fstepInterval":[{
          "rowType":1,
          "fmaxValue":"100",
          "fminValue":"",
          "fbranc":"20"
         }]
  },{
        "fdataSource":2,
        "fstepInterval":[{
          "rowType":2,
          "fmaxValue":"200",
          "fminValue":"100",
          "fbranc":"30"
         }]
  },{
        "fdataSource":3,
        "fstepInterval":[{
          "rowType":2,
          "fmaxValue":"300",
          "fminValue":"200",
          "fbranc":"40"
         }]
  }]
}
console.log(deepEqual(obj1,obj2))// true
```
### currying(函数柯里化，部分求值)(20200320)

一个currying的函数首先会接收一些参数，接受这些参数之后，不会立即求值，而是返回另个函数，刚才传入的参数形成闭包中保存起来，待到需要求值的时候，之前传入的所有参数一次性求值

```js
var currying=function(fn){
  var args=[];
  return function(){
    if(arguments.length===0){
      return fn.apply(this,args);
    }else{
      [].push.apply(args,arguments);
      return argument.callee;
      console.log()
    }
  }
}

var cost =(function(){
  var money=0;
  return function(){
    for(var i=0,l=arguments.length;i<1;i++){
      money+=arguments[i];
    }
    return money
  }
})()

var cost=currying(cost);
cost(100);
cost(200);
cost(300);
cost();//求值并输出：600
```

### uncurrying(20200321) 

把泛化this的过程提取出来

```js
Function.prototype.uncurrying1=function(){
  var self=this;
  return function(){
    var obj=Array.prototype.shift.call(arguments)
    return self.apply(obj,arguments);
  }
}

Function.prototype.uncurrying2=function(){
  var self=this;
  return function(){
    return Function.prototype.call.apply(self,arguments);
  }
}
```

### 函数节流(20200322)

函数被频繁调用，例如（onresize，mousemove事件，上传进度）

> 节流原理：一秒钟调用了10次，实际需要2到3次，可以借助setTimeout完成

代码实现：
```js
var throttle=function(fn,interval){
  var _self=fn,//保存需要被延迟的函数引用
  timer,//定时器
  firstTime=true;//还否第一次调用
  return function(){
    var args=arguments,_me=this;

    if(firstTime){//如果第一次调用，不需要延迟执行  
      _self.apply(_me,args);
      return firstTime=false;
    }
    if(timer){//如果定时器还在，说明前一次延迟执行还没完成
      return false;
    }
    timer=setTimeout(function(){//延迟一段时间执行
      clearTimeout(timer);
      timer=null;
      _self.apply(_me,args);
    },interval||500);
  }
}

window.onresize=throttle(function(){
  console.log(1)
},500)
```
### 分时函数(20200323)

例子：创建webQQ的QQ好友列表。可能需要一次性往页面创建成百上千的节点，往往会导致浏览器卡顿甚至假死；

卡死代码：
```js
var ary=[];
for(var i=1;i<=10000000;i++){
    ary.push(i);
}
var renderFriendList=function(data){
    for(var i=0,l=data.length;i<l;i++){
        var div=document.createElement('div');
        div.innerHTML=i;
        document.body.appendChild(div);
    }
}

renderFriendList(ary)
```
解决方案：timeChunk函数
```js
//第一个参数创建节点用到的数据，第二个参数创建节点逻辑函数，第三个参数表示每一次创建节点数量
var timeChunk=function(ary,fn,count){
  var obj,t;

  var len=arr.length;
  var start=function(){
    for(var i=0;i<Math.min(count||1,arr.length);i++){
      var obj=ary.shift();
      fn(obj);
    }
  }
  return function(){
    t=setInterval(function(){
      if(ary.length===0){//如果全部节点都已经被创建好
        return clearInterval(t);
      }
      start();
    },200)//分批执行的时间间隔，也可以用参数的形式传入
  }
}
```
改进方案：
```js
var timeChunk=function(ary,fn,count){
  var obj,t;

  var len=ary.length;
  var start=function(){
    for(var i=0;i<Math.min(count||1,ary.length);i++){
      var obj=ary.shift();
      fn(obj);
    }
  }
  return function(){
    
    t=setInterval(function(){
      if(ary.length===0){//如果全部节点都已经被创建好
        return clearInterval(t);
      }
      window.requestAnimationFrame(start)
    },60)//分批执行的时间间隔，也可以用参数的形式传入
  }
}
```
执行代码：
```js
<script>
var timeChunk=function(ary,fn,count){
  var obj,t;

  var len=ary.length;
  var start=function(){
    for(var i=0;i<Math.min(count||1,ary.length);i++){
      var obj=ary.shift();
      fn(obj);
    }
  }
  return function(){
    
    t=setInterval(function(){
      if(ary.length===0){//如果全部节点都已经被创建好
        return clearInterval(t);
      }
      window.requestAnimationFrame(start)
    },60)//分批执行的时间间隔，也可以用参数的形式传入
  }
}

var ary=[];
for(var i=1;i<=10000000;i++){
    ary.push(i);
}
var renderFriendList=timeChunk(ary,function(n){
        var div=document.createElement('div');
        div.innerHTML=n;
        document.body.appendChild(div);
},100)

renderFriendList(ary)
</script>
```
### 惰性加载函数(20200324)

```js
var addEvent=function(elem,type,handler){
  if(window.addEventListener){
    return elem.addEventListener(type,handle,false);
  }
  if(window.attachEvent){
    return elem.attachEvent('on'+type,handler);
  }
}
缺点：每次调用都要执行里面的if分支
```
```js
var addEvent=(function(elem,type,handler){
  if(window.addEventListener){
    return function(elem,type,handler){
      elem.addEventListener(type,handle,false);
    }
  }
  if(window.attachEvent){
    return function(elem,type,handler){
      elem.attachEvent('on'+type,handler);
    }
  }
})()
缺点：如果未使用addEvent函数，造成多余操作
```
```js
var addEvent=function(elem,type,handler){
  if(window.addEventListener){
    addEvent=function(elem,type,handler){
      elem.addEventListener(type,handle,false);
    }
  }
  if(window.attachEvent){
    addEvent=function(elem,type,handler){
      elem.attachEvent('on'+type,handler);
    }
  }
}
优点：第一次进入这个分支，会重写这个函数，下一次进入时，就不会存在多余if分支
```