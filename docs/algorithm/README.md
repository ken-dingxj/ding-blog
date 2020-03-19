## 每日一练
### 两数之和(20200316)
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
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
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]===target-nums[i]){
                return [i,j]
            }
        }
    }
};
//哈希映射（时间复杂度在 O(n)）
var twoSum = function(nums, target) {
    let map=new Map();
    let arr;
    nums.forEach((item,index)=>{
        let tem =target-item
        if(map.get(tem)!==undefined){
            arr=new Array(map.get(tem),index);
        }
        map.set(item,index)
    })
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