# 一、知识点回顾
1. vue的基本使用流程

2. vue相关基础方法
    + 数据绑定  {{数据}}
    + 属性绑定  v-bind:class   v-bind:style
    + 条件渲染  v-if   v-else
    + 列表渲染  v-for   嵌套的列表渲染
    + 事件绑定  v-on:click
        - 不定义事件函数
        - 事件函数传参，通过事件对象获取真实DOM
        - 事件修饰符  .stop
        - 键盘事件   如何判断按键
        - 事件修饰符叠加使用

3. 属性绑定与事件绑定的简写方法
> 属性绑定  v-bind:class=""  简写为 :class="动态属性变量"
> 事件绑定  v-on:click=""   简写为  @click=""

# 二、学员录入练习讲解
1. 按流程拆分实现功能
    + 录入功能（v-model、push、v-for）
    + 暂无数据提示  (v-if)
    + 单个成员删除，二次确认（confirm弹框,事件函数传参,splice）
    + 成绩筛选功能
    + 删除全部成员

2. 命名规范
> [CodeIf](https://unbug.github.io/codelf/)

# 三、本地存储的方法
1. localStorage
    > localStorage.setItem(key,value)
    > localStorage.getItem(key)
    > localStorage.removeItem(key)
    > localStorage.clear()

2. sessionStorage

# 四、watch监听
> 作用：可以监视到某一个特定data值的变化后，触发一个函数的执行
1. 浅监听
```
 watch: {
    list:function(){ //浅监听
         console.log(this.list)
    }
 }
```
2. 深度监听
```
 watch: {
    list:{ //深度监听
        handler:function(){
            console.log(this.list)
        },
        deep:true
    }
 }
```

# 五、生命周期函数
> Vue初始化的过程中，会经历几个阶段，每个阶段都会有特定的生命周期函数会主动触发

> 生命周期函数的作用在于，可以让我们介入Vue初始化过程
> 例如：我们要在Vue内容显示前，向服务器发起请求，获取数据
[生命周期函数图](https://cn.vuejs.org/images/lifecycle.png)

1. 最常用的生命周期函数
> created

2. 借助独立的模块在vue中发起ajax请求
> [axios模块](http://www.axios-js.com/)
```
axios.get(接口地址).then((请求结果)=>{
    使用请求到的数据
})
```

4. 模拟数据的平台(mock数据)
> [rap2](http://rap2.taobao.org/)

# 六、任务
1. 完成学员录入小系统

2. 熟悉watch监听与生命周期函数

3. 尝试使用created生命周期进行接口数据对接

4. 优化学员录入系统
    + 将每次录入的新数据存入localStorage
    + watch监听变化，直接覆盖本地存储中的旧的数据
    + 为每一条人员信息对象，新增一个唯一id标识
    + 完善删除单个数据的功能