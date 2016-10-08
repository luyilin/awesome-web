# awesome-css

##《揭秘css》小练习

## css 属性
 * hsla(色调,饱和度,亮度,透明度) 色调0-360,0、360红色,120绿色,240蓝色,注意饱和度必须写成百分比形式,建议使用hsla而不是rgba,因为它的字符长度更短，重复率更低。
 * currentColor 当前标签继承的文字颜色,适用于自动与文本颜色保持一致的属性
 * background-clip属性,border-box 背景剪裁至边框 padding-box 背景剪裁至内边框 content-box 背景剪裁至内容框
 * column-width 规定列的宽度 column-count规定分成几列 column-gap 规定列间距
 * box-shadow: inset内阴影 水平阴影的位置 垂直阴影的位置 模糊距离 阴影尺寸 颜色,box-shadow text-shadow 都可添加多个阴影
 * background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动 scroll默认,fixed,inherit
 * background-origin 属性规定 background-position 属性相对于什么位置来定位 border-box padding-box content-box
 * outline: 轮廓边框宽度 样式 颜色, outline会占据margin
 * box-sizing: border-box; 盒模型的宽度=内容宽度+padding+border

 * linear-gradient = linear-gradient([ [ <angle> | to <side-or-corner> ] ,]? <color-stop>[, <color-stop>]+)
   <side-or-corner> = [left | right] || [top | bottom]
   <color-stop> = <color> [ <length> | <percentage> ]?
   取值：
   下述值用来表示渐变的方向，可以使用角度或者关键字来设置：
   * angle：
   用角度值指定渐变的方向（或角度）。
   to left：
   设置渐变为从右到左。相当于: 270deg
   to right：
   设置渐变从左到右。相当于: 90deg
   to top：
   设置渐变从下到上。相当于: 0deg
   to bottom：
   设置渐变从上到下。相当于: 180deg。这是默认值，等同于留空不写。
   to bottom right 
   渐变到右下 325deg
   to bottom left 
   渐变到左下 45deg 
   * color：指定颜色。
    color-stop 用于指定渐变的起止颜色：
   * length：用长度值指定起止色位置。不允许负值
   * percentage：用百分比指定起止色位置。定义止色位置去掉渐变效果,改为实色块效果
 * repeating-linear-gradient 实现可重复的渐变
 * 径向渐变 radial-gradient ``
 
 ```
 radial-gradient([<bg-position> || <angle>,]? [<shape> || <size>,]? <color-stop>, <color-stop>[, <color-stop>]*);
 径向渐变到目前还不支持Opera的内核浏览器
 ```
 
 * vh and vw
   * 响应式web设计离不开百分比。但是，CSS百分比并不是所有的问题的最佳解决方案。CSS的宽度是相对于包含它的最近的父元素的宽度的。但是如果你就想用视口（viewpoint）的宽度或者高度，而不是父元素的，那该肿么办？ 这就是 vh 和 vw 单位为我们提供的。
   1vh 等于1/100的视口高度。栗子：浏览器高度900px, 1 vh = 900px/100 = 9 px。同理，如果视口宽度未750， 1vw = 750px/100 = 7.5 px。
   * 可以想象到的，他们有很多很多的用途。比如，我们用很简单的方法只用一行CSS代码就实现同屏幕等高的框。
   
   ```
    .slide {
        height: 100vh;
    }
   ```
    
   * 假设你需要一个和屏幕同宽的标题，你只要设置这个标题的font-size的单位为vw，那标题的字体大小就会自动根据浏览器的宽度进行缩放，以达到字体和viewport大小同步的效果，
   
  * requestAnimationFrame html API
    * requestAnimationFrame 是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。
    * 设置这个API的目的是为了让各种网页动画效果（DOM动画、Canvas动画、SVG动画、WebGL动画）能够有一个统一的刷新机制，节省系统资源，提高系统性能，改善视觉效果。
    * 代码中使用这个API，就是告诉浏览器希望执行一个动画，让浏览器在下一个动画帧安排一次网页重绘。
    * requestAnimationFrame的优势，在于充分利用显示器的刷新机制，比较节省系统资源。显示器有固定的刷新频率（60Hz或75Hz），也就是说，每秒最多只能重绘60次或75次，requestAnimationFrame的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行页面重绘。此外，使用这个API，一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了CPU、GPU和电力。
    * 不过有一点需要注意，requestAnimationFrame是在主线程上完成。这意味着，如果主线程非常繁忙，requestAnimationFrame的动画效果会大打折扣。
    * requestAnimationFrame使用一个回调函数作为参数。这个回调函数会在浏览器重绘之前调用。
    * 目前，主要浏览器Firefox 23 / IE 10 / Chrome / Safari）都支持这个方法。可以用下面的方法，检查浏览器是否支持这个API。如果不支持，则自行模拟部署该方法。
    
    ```
     window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       || 
                  window.webkitRequestAnimationFrame || 
                  window.mozRequestAnimationFrame    || 
                  window.oRequestAnimationFrame      || 
                  window.msRequestAnimationFrame     || 
                  function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                  };
        })();
     // 上面的代码按照1秒钟60次（大约每16.7毫秒一次），来模拟requestAnimationFrame。
     ```
    
     * 使用requestAnimationFrame的时候，只需反复调用它即可。
     
     ```
     function repeatOften() {
       // Do whatever
       requestAnimationFrame(repeatOften);
     }
     
     requestAnimationFrame(repeatOften);
     ```
     
 * animation-fill-mode : none | forwards | backwards | 
   * both; none 不改变默认行为。
   * forwards 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
   * backwards 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）
   * both 向前和向后填充模式都被应用。

## css编码技巧
 * 提高代码可维护性要尽量减少改动时要编辑的地方
  
  e.g.
  
 ```
 font-size:20px;
 padding:6px 12px;
 background: #58a linear-gradient(#77a0bb, #58a);
 border-radius: 4px;
 box-shadow: 0 1px 5px gray;
 color: white;
 text-shadow:0 -1px 1px #335166;
 line-height:30px;
 ```
 
 * 代码改善点:
   * 如果改变字号,则需同时调整行高。(某些值相互依赖时,应该用代码表示相互关系)
   * padding border-radius box-shadow text-shadow line-height等参数应随父元素的字号改变
   * em相对父元素的字体大小,rem相对html根元素的字体大小,px相对显示器屏幕分辨率
 修改后的代码:
 
 ```
 font-size: 125% /* e.g.父元素的font-size:16px 相对父元素的字体大小*/
 padding: .3em .8em;
 background: #58a linear-gradient(hsla(0,0%,100%,.2),transparent); 
 /* 产生主色调的亮色或暗色变体,可用半透明的黑色或白色叠加在主色调上*/
 border-radius: .2em;
 box-shadow: 0 .05em .25em rgba(0,0,0,.5);
 line-height: 1.5; /* line-height: 150% 根据父元素继承来的font-size计算 line-height: 1.5 根据自身元素的font-size计算*/
 ```
 
 * 有时代码易维护和代码量少不可兼得
   * e.g. 为元素添加一个10px的边框,但左侧不加边框 border-width: 10px 10px 10px 0;但若以后需要改动边框的宽度，需要同时改3个地方。那么以下这种方式可能更好 border-width: 10px; border-left: 0;
 * 当需要在较大分辨率下得到固定宽度,使用max-width
 * html元素也可分为替换元素和非替换元素。替换元素是浏览器根据标签的元素和属性判断显示的内容,如 `<input type="text"/>` 是文本输入框,type属性是radio时是单选按钮, `<img src="">`由标签元素img和属性决定显示的内容,如img input textarea select object都是替换元素,没有实质内容
 * 不要忘记为替换元素设置一个max-width:100%;
 * 如果需求背景图片铺满整个容器,使用background:cover 优于移动端通过css把大图缩小显示
