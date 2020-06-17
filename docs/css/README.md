# 欢迎进入CSS世界
## 流向的改变
### direction
**兼容性**

| Chrome | Safari | Firefox | Opera | IE | Android | IOS |
| :---: | :---: | :---: | :---: | :---: |:---: |:---: |
| 2.0+| 3.0+| 任意版本| 9.2+| 5.5+| 任意版本| 3.1+| 

```css
/**从左向右**/
direction:ltr;
/**从右向左**/
direction:rtl;

/**或者在对应的容器上面加dir="ltr"**/
<div class="f-cen" dir="ltr"></div>
```

### direction的黄金搭档unicode-bidi
```css
unicode-bidi: normal;/**正常排列**/
unicode-bidi: embed;/**正常排列,字符排序独立嵌套，不受外部影响**/
unicode-bidi: bidi-override;/**反向排列**/
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
      .f-rtl{
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
    <div class="f-rtl">啊啊啊  <span class="f-rtl" style="unicode-bidi: normal;">我是说你手机</span>  顶顶顶顶</div>
    <br/>
    <div class="f-rtl">啊啊啊  <span class="f-rtl" style="unicode-bidi: embed;">我是说你手机</span>  顶顶顶顶</div>
    <br/>
    <div class="f-rtl">啊啊啊  <span class="f-rtl" style="unicode-bidi: bidi-override;">我是说你手机</span>  顶顶顶顶</div>
    <!-- U+202E字符可以实现字符反向排列 -->
     <p>&#x202E;一二三四五六七八九十</p>
  </body>
</html>
```
### writing-mode

