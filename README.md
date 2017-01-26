# aniAuto

A jquery plugin based on animate.css 
一个基于 [animate.css](https://github.com/daneden/animate.css) 的jquery插件

> 只需添加一些标签属性和一行js脚本就可以组合出复杂的动画效果.
> [https://justinzzc.github.io/aniAuto/](https://justinzzc.github.io/aniAuto/)

##安装

> bower install aniAuto


##用法

### 基本使用方法

~~~ html
<head>
    <link rel="stylesheet" href="css/animate.css">

    <script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/aniAuto.js"></script>
</head>

<body>
...

 <div id="item_1" class="ani-auto item tada" >
            demo item
 </div>
...

<script>
    $(document).ready(function () {

        $.aniAuto();

    });
</script>
</body>

~~~

> 将需要配置自动动画的dom节点配置class类 `ani-auto` .



##配置项

+ 可用配置项
 - 初始隐藏 (attribute) ani-init-hide
 - 延迟 (attribute) ani-delay
 - 持续时长 (attribute) ani-duration
 - 重复次数 (attribute) ani-iteration
 - 触发元素 (attribute) ani-trigger
 - 自动滚动 (attribute) ani-scroll  ani-scroll-offset
 - 动画事件回调 (attribute) ani-start  ani-end
 
 
###初始隐藏 (attribute) ani-init-hide

~~~ javascript
<div class="ani-auto  tada" ani-init-hide>
            hide
</div>
~~~ 

> 添加`ani-init-hide` 属性后初始会隐藏,动画开始的时候出现
 
 
 
 
###延迟 (attribute) ani-delay

~~~ javascript
<div class="ani-auto  tada" ani-delay="1s">
            delay
</div>
~~~

> `ani-delay`:参考[animation-delay的值](http://www.w3school.com.cn/cssref/pr_animation-delay.asp)


###持续时长 (attribute) ani-duration

~~~ javascript
<div class="ani-auto  tada" ani-duration="1s">
            duration
</div>
~~~

> `ani-duration`:参考[animation-duration的值](http://www.w3school.com.cn/cssref/pr_animation-duration.asp)



###重复次数 (attribute) ani-iteration

~~~ javascript
<div class="ani-auto  wobble" ani-iteration="5">
            iteration
</div>
~~~

> `ani-duration`:参考[animation-iteration的值](http://www.w3school.com.cn/cssref/pr_animation-iteration.asp)



###触发元素 (attribute) ani-trigger

~~~ javascript
<div id="item_1" class="ani-auto  tada" >
 delay
</div>

<div id="item_2" class="ani-auto  flipInX" ani-trigger="#item_1">
 trigger
</div>
~~~

> `ani-trigger`:参考[jquery选择器](http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp)



###自动滚动 (attribute) ani-scroll  ani-scroll-offset

~~~ javascript
<div class=" ani-auto  zoomIn"  ani-scroll ani-scroll-offset="-2%">
      <p>trigger scroll offset </p>
</div>
~~~

> `ani-scroll-offset` 值:
  + 数值,如:-100   ==> 100px
  + 百分比,如:-2%   ==> -2% * $('body').height()

###动画事件回调 (attribute) ani-start  ani-end

~~~ html
<div class=" ani-auto  zoomIn" ani-start="zoomStart" ani-end="zoomEnd">
      <p>trigger scroll offset </p>
</div>
~~~
~~~ javascript
  //第一种方式
 $.aniAuto(document,{
    methods:{
        zoomStart:function (){
        console.log('zoomStart');
        },
        zoomEnd:function (){
        console.log('zoomEnd');
        }
    }
 });
 
 //第二种方式
    window.zoomStart= function (){
        console.log('zoomStart');
    };
    
    window.zoomEnd=function (){
        console.log('zoomEnd');
    }
~~~

> `ani-start` 值:
  + 方法名,function



###详细请查看 

[demo页面](./demo/demo.html)


###捐赠donate

![](https://justinzzc.github.io/imgs/donate.jpg)
