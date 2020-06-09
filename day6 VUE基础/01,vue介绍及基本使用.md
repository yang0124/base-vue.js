 
  
    
    
     
      
       # 一、vue课程介绍
1. 三周时间
> 理论周 (vue的基本使用)
> 实战周（vue-cli搭建工程化开发环境、.vue单文件组件）
> 项目周（提前分组，三人一组，每个小组找一款小众应用，可以是PC端[推荐]、移动端）

2. 内容
> vue基础  vue-router
> vue-cli   vuex

# 二、vue介绍
> MVVM类型的开发框
> SPA(single page application) 单页面应用开发
> React   Vue   Angular（TypeScript）
> Vue 是一种渐进式的开发框架 
> 渐进增强、优雅降级

> [Vue文档](https://cn.vuejs.org/)

# 三、vue基本使用
> 不推荐在vue中使用DOM操作来实现交互效果
> 而采用  【数据驱动视图】 的思想完成交互

1. 引入vue.js，以备使用vue方法

2. 准备vue实例化所需要的页面结构
```
<div id="app"></div>
```
3. vue对象的初始化
```
new Vue({
    el:'#app', //初始化vue实例的容器
    data:{   //vue实例中需要使用到的数据包
        msg:'hello world',
        isActive:false,
        array:[
            {name:'张三丰',score:100},
            {name:'张三丰',score:100},
            {name:'张三丰',score:100}
        ]
    }
})
```
# 四、vue的基础语法
1. 条件渲染  v-if  v-else  v-show

2. 列表渲染  v-for

3. 事件绑定流程  v-on:click

4. 属性绑定   v-bind:class="active"


# 五、任务
1. Nodejs梳理

2. 体验vue基本使用流程及基础语法

3. 尝试向列表中新增一个人员信息

4. 实现一个菜单切换小练习


