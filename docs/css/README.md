# 欢迎进入 CSS 世界

## 流向的改变

### direction

**兼容性**

| Chrome | Safari | Firefox  | Opera |  IE  | Android  | IOS  |
| :----: | :----: | :------: | :---: | :--: | :------: | :--: |
|  2.0+  |  3.0+  | 任意版本 | 9.2+  | 5.5+ | 任意版本 | 3.1+ |

```css
/**从左向右**/
direction:ltr;
/**从右向左**/
direction:rtl;

/**或者在对应的容器上面加dir="ltr"**/
<div class="f-cen" dir="ltr"></div>
```

### direction 的黄金搭档 unicode-bidi

```css
unicode-bidi: normal; /**正常排列**/
unicode-bidi: embed; /**正常排列,字符排序独立嵌套，不受外部影响**/
unicode-bidi: bidi-override; /**反向排列**/
```

示例:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .box {
        background-color: aqua;
      }
      .box1 {
        background-color: brown;
      }
      .f-wh {
        display: inline-block;
        width: 100px;
        height: 100px;
      }
      .f-cen {
        text-align: center;
      }
      .f-rtl {
        direction: rtl;
      }
    </style>
  </head>
  <body>
    <div class="f-cen" dir="ltr">
      <div class="box  f-wh">确定</div>
      <div class="box1  f-wh">取消</div>
    </div>
    <div class="f-cen" dir="rtl">
      <div class="box  f-wh">确定</div>
      <div class="box1  f-wh">取消</div>
    </div>
    <div class="f-rtl">
      啊啊啊
      <span class="f-rtl" style="unicode-bidi: normal;">我是说你手机</span>
      顶顶顶顶
    </div>
    <br />
    <div class="f-rtl">
      啊啊啊
      <span class="f-rtl" style="unicode-bidi: embed;">我是说你手机</span>
      顶顶顶顶
    </div>
    <br />
    <div class="f-rtl">
      啊啊啊
      <span class="f-rtl" style="unicode-bidi: bidi-override;"
        >我是说你手机</span
      >
      顶顶顶顶
    </div>
    <!-- U+202E字符可以实现字符反向排列 -->
    <p>&#x202E;一二三四五六七八九十</p>
  </body>
</html>
```

### writing-mode

**兼容性**
```css
writing-mode:lr-tb|tb-rl|tb-lr;(IE7+)
writing-mode:horizontal-tb|vertical-rl|vertical-lr;(IE8+)
```

```html

<!--
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-06-17 11:15:52
 * @LastEditTime: 2020-06-28 12:24:35
 * @LastEditors: dingxuejin
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
     *{
         margin: 0;
         padding: 0;
     }
     .box{

         display: inline-block;
         writing-mode: horizontal-tb;
     }
      .box1{
         display: inline-block;
         writing-mode: vertical-lr;
     }
    </style>
  </head>
  <body>
    <div class="box">不知细叶谁剪出</div>
    <div class="box">二月春风似剪刀</div>
    <div class="box1">不知细叶谁剪出</div>
    <div class="box1">二月春风似剪刀</div>
  </body>
</html>

```
#### 场景
水平方向margin合并<br/>
普通块元素可以使用margin:auto实现垂直居中<br/>
使用text-align:center实现图片垂直居中<br/>
可以使用text-indent实现文字下沉效果<br/>
可以实现全兼容的icon fonts图标的旋转效果<br/>
充分利用高度的高度自适应布局等<br/>

## css 居中方式（垂直，水平）

### 方式一(index1)

利用父级 text-aline 水平居中
子级 inline-block
使用伪类::after,inline-block,100%
子级设置 vertical-align 相对于父级基线实现垂直居中

```html
<!--
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-06-20 13:41:46
 * @LastEditTime: 2020-06-20 14:02:23
 * @LastEditors: dingxuejin
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        height: 200px;
        width: 200px;
        background-color: blanchedalmond;
        text-align: center;
      }
      .box::after {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      .box1 {
        vertical-align: middle;
        display: inline-block;
        height: 50px;
        width: 50px;
        background-color: blue;
      }
      .box2 {
        display: inline-block;
        vertical-align: middle;
        height: 50px;
        width: 50px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="box1"></div>
      <div class="box2"></div>
    </div>
  </body>
</html>
```

### 方式二(index2)

父级相对定位
创建一个居中容器，包裹需要居中的元素
居中容器利用绝对定位居中

```html
<!--
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-06-20 13:41:46
 * @LastEditTime: 2020-06-20 14:10:37
 * @LastEditors: dingxuejin
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: relative;
        height: 200px;
        width: 200px;
        background-color: blanchedalmond;
        text-align: center;
      }
      .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .box1 {
        height: 50px;
        width: 50px;
        background-color: blue;
      }
      .box2 {
        height: 50px;
        width: 50px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="center">
        <div class="box1"></div>
        <div class="box2"></div>
      </div>
    </div>
  </body>
</html>
```

### 方式三(index3)

原理：
margin 的 auto 属性的作用是用来分配剩余空间，所以对于有剩余空间的元素才有效哦（块及元素）
比如图片设置 margin: 0 auto 是无效的，因为图片是内联元素，不是占一整行，没有剩余空间

块及元素水平方向居中：两侧 auto，则平分剩余空间，相当于水平居中。

```css
div {
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  height: 200px;
}
或者 div {
  margin: 0 auto;
  width: 200px;
  height: 200px;
}
```

想要实现垂直方向的居中可以用绝对定位：

```css
div  {
                background: #FF0000;
                width: 200px;
                height: 200px;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            }
```

margin: auto;  是关键，没有设置此项，也不会水平垂直居中
margin-top: auto; margin-bottom: auto; 仅实现垂直方向居中

作用原理：
1.在普通内容流中，margin:auto的效果等同于margin-top:0;margin-bottom:0
2.position:absolute使绝对定位块跳出了内容流，内容流中的其余部分渲染时绝对定位部分不进行渲染。
3.为块区域设置top: 0; left: 0; bottom: 0; right: 0;将给浏览器重新分配一个边界框，此时该块块将填充其父元素的所有可用空间，所以margin 垂直方向上有了可分配的空间。
4.再设置margin 垂直方向上下为auto，即可实现垂直居中。（注意高度得设置）。

```html
<!--
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-06-20 13:41:46
 * @LastEditTime: 2020-06-20 14:24:10
 * @LastEditors: dingxuejin
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: relative;
        height: 200px;
        width: 200px;
        background-color: blanchedalmond;
        /* text-align: center; */
      }
      .box1 {
        height: 50px;
        width: 50px;
        background-color: blue;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="center">
        <div class="box1"></div>
      </div>
    </div>
  </body>
</html>
```
### 方式四(index4)
默认的web流中，margin设置auto的时候，只有水平方向才会居中，因为默认
width是100%自适应的，auto才有计算值可算，而垂直方向，height没有任
何设置的时候高度绝不会自动和父级高度一致，因此无法实现垂直方向的居中，
使用writing-mode，纵横规则已经改变，垂直流方向自动适用父级高度

```html
<!--
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-06-28 12:53:01
 * @LastEditTime: 2020-06-28 13:18:45
 * @LastEditors: dingxuejin
--> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            height: 240px;
            width: 300px;
            background-color: red;
            overflow: hidden;
        }
        .auto{
            display: block;
            height: 100px;
            width: 100px;
            margin-top: auto;
            margin-bottom: auto;
        }
        .verticle-mode{
            writing-mode: tb-rl;
            -webkit-writing-mode:verticle-mode;
            writing-mode: vertical-lr;
        }
        .text{
            display: block;
            height: 100px;
            margin-top: auto;
            margin-bottom: auto;
            writing-mode: horizontal-tb;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./images/logo.jpeg" alt="" class="auto">
    </div>
<br>
    <div class="box verticle-mode">
        <img src="./images/logo.jpeg" alt="" class="auto">
        <span class="text">测试文字</span>
    </div>
</body>
</html>

```
