## 每日一练
### 两数之和(20200361)
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
