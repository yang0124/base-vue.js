# 一、回顾vuex使用流程
1. 安装

2. 新建store/index.js文件用以初始化vuex

3. 在store/index.js中定义vuex对象（引入、定义store状态机、抛出）

4. 在main.js中全局注入store

5. 在组件中获取store提供的state数据，并渲染
```
this.$store.state.数据包名称
```

6. 在组件中通过触发mutations的方式，引发state变化，从而引发视图更新
```
this.$store.commit('mutations的名称',参数)
```

# 二、实现vuex统一管理购物车数据


# 三、组件样式作用域
```
<style scoped>
div{
    border: 1px solid red !important;
}
.ng-binding{
    color: blue
}
</style>
```

# 四、getters的使用
> 将state的数据处理之后，得到新的数据供组件渲染使用
1. 定义getters并处理得到相应数据

2. 在组件的computed中获取getters数据
```
this.$sotre.getters.数据包名称
```

3. 在组件的html结构中绑定并展示对应数据

# 五、知识梳理
1. 封装购物车组件
> 样式作用域scoped

2. mutations的触发与参数传递

3. Vue.set() 设置响应式数据的方法

4. getters的使用流程

5. 完成购物车组件提取及内部功能，并拓展实现【移除购物车】的功能