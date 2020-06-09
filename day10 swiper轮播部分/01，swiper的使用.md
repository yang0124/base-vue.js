# 一、swiper
> 第三方的插件，专注于实现页面中的切换各种效果
[swiper5.x配置项](https://www.swiper.com.cn/api/index.html)

1. [基本使用步骤](https://www.swiper.com.cn/usage/index.html)

2. 在vue项目中使用swiper
> 注意 new Swiper进行结构初始化的位置
动态渲染数据成功之后，才能进行new Swiper
结论：在updated生命周期函数中，进行new Swiper
问题：在updated进行初始化，有一些性能问题

3. swiper组件封装(参考06号代码文件)

# 二、自定义指令
> 案例：通过一个指令为元素添加背景

1. 定义指令
```
Vue.directive('hello',{
    inserted(el,binding,vnode){
        console.log(el)
        console.log(binding)
        console.log(vnode)
        el.style.background = binding.value
    }
})
```

2. 使用指令
```
<div v-hello="'blue'">阿斯顿发斯蒂芬</div>
```

3. 指令只在元素初始化的时候调用

# 三、自定义指令优化swiper组件初始化



# 四、filter过滤器
1. 定义过滤器
```
Vue.filter('intro-filter',(value)=>{
    let reg = /特朗普/g
    return value.replace(reg,'川建国')
})
```

2. 在渲染数据的时候调用过滤器
```
<ul>
    <li v-for="(item,index) in list" :key="index">
        <h3>{{item.title}}</h3>
        <p>{{item.intro | intro-filter}}</p>
        <!-- <img :src="item.imgUrl | img-filter" alt=""> -->
    </li>
</ul>
```

# 五、理论知识梳理

1. swiper的基本使用

2. 在vue中使用swiper，注意new Swiper的位置

3. 自定义指令 
```
全局指令
Vue.directive('指令名称',{指令方法属性等配置项})

局部指令
Vue.component('',{
    directives:{
        '指令名称1':{指令方法属性等配置项},
        '指令名称2':{指令方法属性等配置项},
        '指令名称3':{指令方法属性等配置项}
    }
})
```

4. filter过滤器
```
Vue.filter('过滤器名称',()=>{
    return 过滤结果
})
```

# 六、MUI组件库
> 结合Hbuilder进行开发


# 任务
1. 熟悉swiper结合vue的使用

2. 使用Vue.directive 与 Vue.filter

3. 完成电影列表组件封装、完成swiper组件封装

4. 融合实现整个卖座首页功能


