# javascript设计模式与开发实战
## 第五章 策略模式
### 5.1 使用策略模式计算奖金
定义：定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换。
> 策略模式计算奖金
```js
//初始代码
var calculateBonus=function(performanceLevel,salary){
    if(performanceLevel==='S'){
        return salary*4;
    }
    if(performanceLevel==='A'){
        return salary*3;
    }
    if(performanceLevel=='B'){
        return salary*2;
    }
}
calculateBonus('B',20000);//输出：40000
calculateBonus('S',6000);//输出：24000
```
```js
//组合函数重构代码
var performanceS=function(salary){
    return salary*4;
}
var performanceA=function(salary){
    return salary*3;
}
var performanceB=function(salary){
    return salary*2;
}
var calculateBonus=function(salary){
    if(performanceLevel==='S'){
        return performanceS(salary);
    }
    if(performanceLevel==='A'){
        return performanceB(salary);
    }
}
calculateBonus('A',10000);//输出：3000
```
```js
//策略模式重构代码
var performanceS=function(){};
performanceS.prototype.calculate=function(salary){
    return salary*4;
}
var performanceA=function(){};
performanceA.prototype.calculate=function(salary){
    return salary*3;
}
var performanceB=function(){}
performanceB.prototype.calculate=function(salary){
    return salary*2;
}
var Bonus=function(){
    this.salary=null;
    this.strategy=null;
}
Bonus.prototype.setSalary=function(salary){
    this.salary=salary;
}

Bonus.prototype.setStrategy=function(strategy){
    this.strategy=strategy;
}

Bonus.prototype.getBonus=function(){
    if(!this.strategy){
        throw new Error('未设置strategy');
    }
    return this.strategy.calculate(this.salary);
}

//各个类职责鲜明
var bonus=new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performance());
```
```js
//js版本的策略模式
var strategies={
    "S":function(salary){
        return salary*4;
    },
    "A":function(salary){
        return salary*3;
    },
    "B":function(salary){
        return salary*2;
    }
}
var calculateBonus=function(level,salary){
    return strategies[level](salary);
}
calculateBonus('S',20000)
```