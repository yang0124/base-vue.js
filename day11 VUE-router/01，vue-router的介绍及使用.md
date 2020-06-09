# 一、什么是vue-router？
> vue单页面应用项目的路由管理工具，
> SPA，项目只有一个入口html文件，项目内部所有业务的切换，其本质是不同组件的切换
> vue-router负责将用户从一个组件引导至另外一个组件


# 二、为什么要使用vue-router?
> 中大型项目中采用vue-router，对路由关系进行集中式管理
> 相当于，从卧室走向厨房，（步行，平衡车）

# 三、如何使用vue-router？
> 使用vue-router前，要先引入vue
> [文档](https://router.vuejs.org/zh/)
1. 引入vue-router

2. 准备路由组件
```
let home = {
    template:`<div>我是首页</div>`
}
let product = {
    template:`<div>我是产品</div>`
}
let contact = {
    template:`<div>我是联系</div>`
}
```

3. 初始化路由对象

```
let router = new VueRouter({
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/prod',
            component:product
        },
        {
            path:'/contact',
            component:contact
        }
    ]
})
```

4. 在Vue实例对象中，注入路由对象
```
new Vue({
    el:'#app',
    router  //路由注入
})
```

5. 触发路由跳转
```
<router-link to="/contact">
    联系
</router-link>
```

6. 显示路由组件
```
<router-view></router-view>
```

# 四、动态路由
> 路由跳转并传递参数
> 注意：不要在路由中中传递过量数据
> 例如 ：不要将商品的详情，从列表页传给详情页，而是传递id，在详情页查询数据下来使用

1. 设置路由形参
```
...前面的代码
{
    path:'/prod/:id',
    component:product
},
...后面的代码
```

2. 传递路由实参
```
<router-link to="/prod/66666">
    产品
</router-link>
```

3. 在组件内部使用路由参数
```
let product = {
    template:`<div>我是产品{{$route.params.id}}</div>`
}
```

# 五、路由嵌套

1. 准备子组件
```
let prod1 = {
    template:`<div>我是1号产品</div>`
}
let prod2 = {
    template:`<div>我是2号产品</div>`
}
let prod3 = {
    template:`<div>我是3号产品</div>`
}
```

2. 在对应主路由对象下配置子路由
```
...前面的代码
{
    path:'/prod',
    component:product,
    children:[
        {
            path:'/',
            component:prod1
        },
        {
            path:'p2',
            component:prod2
        },
        {
            path:'p3',
            component:prod3
        }
    ]
},
...后面的代码
```

3. 在主路由组件内部，添加子路由导航与视图容器
```
let product = {
        template:`<div>
                    我是产品
                    <ul>
                        <li>
                            <router-link to="/prod">
                                产品1
                            </router-link>
                        </li>
                    </ul>
                    <router-view></router-view>
            </div>`
}
```

# 六、激活导航的router-link样式控制

```
.router-link-exact-active{
    background: orange;
    color: #fff;
}
```

# 七、编程式导航
> 事件的方式触发路由切换
> 核心使用this.$router.push方法

注意区分以下三个方法:
router   自定义的路由对象 
$route   组件结构中获取路由参数
this.$router  实现编程式导航的方法

1. 定义事件函数，并按path触发路由切换
```
methods: {
    handleNav(target){
        this.$router.push({
            path:target
        })
    }
},
```

2. 在导航标签上绑定路由事件，并传递对应的路由path
```
<ul>
    <li @click="handleNav('/')">
        首页
    </li>
    <li @click="handleNav('/prod')">
        产品
    </li>
    <li @click="handleNav('/contact')">
        联系
    </li>
</ul>
```

# 八、梳理
1. 基本使用流程

2. 动态路由

3. 路由嵌套

4. 编程式导航