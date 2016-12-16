## transform   transition   animation

* Transform，变形：
它就像普通的CSS width/height/color属性一样，让元素展现不同的style，一旦元素被施上transform属性，就直接显示效果。它包括旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix等功能，变形分2D跟3D。
transform-origin，元素变化的基准点，2D有X-Y轴坐标，3D是X-Y-Z坐标

* Transition，过渡：
给 transform 变形加上时间概念，让它在一段特定的时间里按照特定的速度进行变化
transition: property duration timing-function delay; property：执行过渡的属性 duration：执行过渡的持续时间 timing-function：执行过渡的速率模式 状态变化速度 delay：延时多久执行
 timing-function:   ease：（逐渐变慢）默认值，ease函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0). linear：（匀速），linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0). ease-in：(加速)，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0). ease-out：（减速），ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0). ease-in-out：（加速然后减速），ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
cubic-bezier函数：自定义速度模式  可通过工具网站定制
http://cubic-bezier.com/#.17,.67,.83,.67

* Animation，动画：
keyframes  关键帧  @keyframes name{}
animation:[<animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-direction>]

animation-timing-function == transition-timing-function 有六种状态变化速度
animation-delay  延时多久执行

animation-iteration-count 指定元素播放动画的循环次数，其可以取值<number>为数字，其默认值为“1”；infinite为无限次数循环。

animation-direction 是用来指定元素动画播放的方向，其只有两个值，默认值为normal，动画的每次循环都是向前播放；另一个值是alternate，动画播放在第偶数次向前播放，第奇数次向反方向播放。

animation-fill-mode 动画结束以后，会立即从结束状态跳回到起始状态。如果想让动画保持在结束状态，需要使用animation-fill-mode属性
（1）none：默认值，回到动画没开始时的状态。
（2）backwards：让动画回到第一帧的状态。
（3）both: 根据animation-direction（见后）轮流应用forwards和backwards规则。

animation-play-state  控制元素动画的播放状态。其主要有两个值，running和paused其中running为默认值。他们的作用就类似于我们的音乐播放器一样，可以通过paused将正在播放的动画停下了，也可以通过running将暂停的动画从你暂停的那个位置开始播放。

浏览器从一个状态向另一个状态过渡，是平滑过渡。steps函数可以实现分步过渡。steps 函数栗子 http://dabblet.com/gist/1745856

* transition Vs animation
   * transition的优点在于简单易用，但是它有几个很大的局限。
      * transition需要事件触发，所以没法在网页加载时自动发生。
      * transition是一次性的，不能重复发生，除非一再触发。
      * transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
      * 一条 transform 规则，只能定义一个属性的变化，transition 可以控制多个属性的变化 比如 all
   * animation
      * animation 事件无需触发即可发生
      * 可以重复发生 infinite 无限循环播放
      * 可以定义多个关键帧
      * 控制多个属性的变化