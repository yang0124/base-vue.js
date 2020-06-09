# 一、编程式导航传参
> 路由对象必须事先配置一个name属性
1. 为路由对象新增name属性
```
routes:[
    {
        path:'/',
        component:home,
        name:'home'
    }
]
```

2. 定义事件函数，函数内部接受一个name
```
handleNav(target){
    this.$router.push({
        name:target,
        params:{
            id:'233',
            name:'编程式导航传参'
        }
    })
}
```

3. 在对应导航标签上，触发路由事件函数，并携带对应的name
```
<ul>
    <li @click="handleNav('home')">
        首页
    </li>
    <li @click="handleNav('product')">
        产品
    </li>
    <li @click="handleNav('contact')">
        联系
    </li>
</ul>
```


# 二、路由切换方法选择
1. router-link  
> 跳转按钮本身就是a标签 
> 多个菜单并列，并且需要为激活菜单添加样式

2. 编程式导航 通过path跳转
> 不希望页面标签结构发生变化
> 不传递参数

2. 编程式导航 通过name跳转
> 不希望页面标签结构发生变化
> 传递参数


# 三、命名视图
> router-view 取名字
> 可以允许我们在同一个路由路径下，同时渲染多个组件

1. 将完整页面合理拆分为组件
> 例如：顶部导航、侧边栏、内容区

2. 使用新的方式初始化路由对象
```
 routes:[
    {
        path:'/',
        components:{
            nav:Nav,
            aside:Aside,
            default:Main1
        }
    }
 ]
```

3. 在Vue实例app容器中，设置多个router-view，并按需命名
```
<router-view name="nav"></router-view>
<router-view name="aside"></router-view>
<router-view></router-view>
```

# 四、其他知识点
> 路由别名   为路由对象额外再设置一个路径，可以使得其组件可以多路径访问
```
{
    path:'/',
    component:home,
    alias:'/home'
},
```
> 重定向   www.a.com/home  重定向到   www.a.com/
   
> history模式  使得项目路径体验更好

# 五、导航守卫（路由守卫）
> 在进入路由组件之前，进行权限判断，决定是否允许用户访问该组件
> 跟安保人员的职责相似
全局前置守卫
```
router.beforeEach((to, from, next) => {
    // console.log(from)
    // console.log(to)
    if(to.path!='/prod'){  //如果不是产品组件，直接放行
        next()
    }else{  // 如果想访问产品组件，要求用户登录
        if(loginState){ //如果已经登录，则放行
            next()
        }else{
            next({
                path:'/login'
            })
        }
    }
})
```


# 六、404 页面处理
```
在路由对象最后面添加一个，兜底路由
{
    path:'*',
    component:notFound
}
```


# 七、脚手架 vue-cli
> 为项目开发提供一个较为合理的基本骨架结构

1. 全局安装vue-cli
> vue-cli2.0安装方式
```
npm i vue-cli -g
```
> vue-cli3.0安装方式 【本次课程使用这种方式】
```
npm i @vue/cli -g
```

2. 使用vue命令创建项目基本目录
```
vue create smartisan-vue
```

3. 基本选项  
> 是否从淘宝镜像下载包文件  YES
> 选择preset预设   babel,eslint

4. 进入项目目录并运行查看
```
cd smartisan-vue
npm run serve
```
5. 认识项目目录结构

# 八、npm淘宝镜像

[文档](http://npm.taobao.org/)
安装cnpm包管理器
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

# 九、工程目录初步使用
> 目标：实现一个跟(09.命名视图.html)一样的功能
1. 准备.vue单文件组件

2. 新建router/index.js路由文件，配置路由对象并抛出

3. 将路由对象引入并注入至Vue实例（main.js）

4. 在App.vue根组件中新增router-view用以显示对应组件

