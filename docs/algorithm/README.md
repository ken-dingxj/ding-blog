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
