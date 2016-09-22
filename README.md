# awesome-css
🍭css

《揭秘css》小练习

## css 属性
 * hsla(色调,饱和度,亮度,透明度) 色调0-360,0、360红色,120绿色,240蓝色,建议使用hsla而不是rgba,因为它的字符长度更短，重复率更低。
 * currentColor 当前标签继承的文字颜色,适用于自动与文本颜色保持一致的属性
 * background-clip属性,border-box 背景剪裁至边框 padding-box 背景剪裁至内边框 content-box 背景剪裁至内容框
 * column-width 规定列的宽度 column-count规定分成几列 column-gap 规定列间距
 * box-shadow: inset内阴影 水平阴影的位置 垂直阴影的位置 模糊距离 阴影尺寸 颜色,box-shadow text-shadow 都可添加多个阴影
 * background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动 scroll默认,fixed,inherit
 * background-origin 属性规定 background-position 属性相对于什么位置来定位 border-box padding-box content-box
 * outline: 轮廓边框宽度 样式 颜色, outline要占据margin
 * <linear-gradient> = linear-gradient([ [ <angle> | to <side-or-corner> ] ,]? <color-stop>[, <color-stop>]+)
   <side-or-corner> = [left | right] || [top | bottom]
   <color-stop> = <color> [ <length> | <percentage> ]?
   取值：
   下述值用来表示渐变的方向，可以使用角度或者关键字来设置：
   <angle>：
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
   <color-stop> 用于指定渐变的起止颜色：
   <color>：
   指定颜色。
   <length>：
   用长度值指定起止色位置。不允许负值
   <percentage>：
   用百分比指定起止色位置。定义止色位置去掉渐变效果,改为色块效果
  * 

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
 * html元素也可分为替换元素和非替换元素。替换元素是浏览器根据标签的元素和属性判断显示的内容,如<input type="text"/>是文本输入框,type属性是radio时是单选按钮,<img src="">由标签元素img和属性决定显示的内容,如img input textarea select object都是替换元素,没有实质内容
 * 不要忘记为替换元素设置一个max-width:100%;
 * 如果需求背景图片铺满整个容器,使用background:cover 优于移动端通过css把大图缩小显示
