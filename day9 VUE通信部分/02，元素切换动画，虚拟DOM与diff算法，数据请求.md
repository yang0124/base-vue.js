# 一、vue的transition组件实现动画
> [transion属性](https://cn.vuejs.org/v2/api/#transition)


# 二、虚拟DOM与diff算法

元素切换动画的现象

> 两个标签如果相同，没有加key属性，没有动画效果
> 不同标签切换，有动画效果
> 相同标签，加不同的key，有动画效果

## (1) 虚拟DOM
> 其本质是一个json对象

1. 真实DOM
<div class="cont" id="box">
    <p></p>
    <span></span>
</div>

2. 虚拟DOM

vnode = [
    {
        tag:'div',
        attr:{
            class:'cont',
            id:'box'
        },
        children:[
            {
                tag:'p',
                attr:''
            },
            {
                tag:'span',
                attr:''
            }
        ]
    }
]

3. diff算法比对虚拟DOM的过程
> 1+1算法
> 3*6算法
> diff算法   以比较好的性能，得到最新的虚拟DOM对象

4. 新的虚拟DOM
vnode = [
    {
        tag:'div',
        attr:{
            class:'cont',
            id:'box'
        },
        children:[
            {
                tag:'p',
                attr:''
            },
            {
                tag:'p',
                attr:''
            }
        ]
    }
]

5. 新的真实DOM
<div class="cont" id="box">
    <p></p>
    <p></p>
</div>

# 三、transition与animatecss结合
1. 引入animate.css

2. 为需要执行aniamte动画的元素添加出场与入场的控制
```
<transition 
    mode="out-in" 
    appear
    enter-active-class="animated slideInLeft" 
    leave-active-class="animated slideOutRight">
        <div class="box" v-if="isShow" key="1"></div>
        <div class="box blue" v-else key="2"></div>

</transition>
```

# 四、异步请求的方式
1. 原生JS中的XMLHttpRequest

2. JQuery封装后的  $.ajax

3. 原生JS中的 fetch 
> [文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
```
fetch('data.json').then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res)
    this.list = res.data
})
```
4. axios 第三方模块
> (1)普通用法 
axios.get   axios.post

> (2)设置请求头的方式
```
axios({
    url,
    method:'get',
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15761312564462471020750","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
    }
}).then((res)=>{
    console.log(res.data.data.films)
    this.list = res.data.data.films
})
```

> (3) 【暂时了解，后期使用】设置基础信息数据的方式，例如：统一为每一个请求设置同一个base_url
```
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

# 任务
1. 整理一套跟虚拟DOM、diff算法相关的文章
2. transition及虚拟DOM，diff算法之间的关联
3. fetch、axios请求数据流程
4. transition与axios结合，完成【卖座】数据列表的渲染与切换动画
> 布局(html,css)
> 菜单切换(vue基础语法)
> 数据列表的渲染（axios,v-for）
> 菜单切换动画(transition,transition-group)
