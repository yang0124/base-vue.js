# 一、$emit的使用流程
> 为了完成子元素出发父元素的事件，并传递参数

1. 子组件内部绑定事件
```
<li @click="handleCheck(item)">
    {{item}}
</li>
```

2. 子组件的事件函数，出发父组件自定义事件
```
handleCheck(str){
    this.$emit('showmsg',str)
}
```

3. 在父空间中的子组件标签上，绑定自定义事件，由这个自定义事件出发父组件的事件函数
```
<my-list @showmsg="handleMsg">
</my-list>
```

4. 父组件的事件函数，改变父组件的data
```
handleMsg(str){
    this.msg = str
    this.isShow = false
},
```

# 二、slot插槽

1. 插槽基本使用
```
定义组件时，设置slot 插槽
Vue.component('my-comp',{
    template:`<div>
                我是my-comp组件
                <slot name="s1"></slot>
                <slot></slot>
                <slot name="s2"></slot>
        </div>`
})

在调用组件的时候，在组件标签中间写入新的内容
<my-comp>
    <h1 slot="s1">我是新的插槽内容1</h1>
    <h1 slot="s2">我是新的插槽内容2</h1>
    <h1>我是新的插槽内容3</h1>
</my-comp>
```

2. 插槽的使用规则
> 匿名插槽显示匿名结构
> 具名插槽，显示名称相对应的结构
> 组件中slot插槽的顺序，决定了最终显示顺序

# 三、组件的分析及实现流程

## (1) 组件的分析
布局   样式

功能（以massage组件为例）
1. props
    组件外观   m-type      字符串        (success,warning,error,info)  
    关闭按钮   m-close     布尔值
    文字居中   m-center    布尔值
    自定义样式 m-style     字符串
2. slot
    自定义内容    slot="title"
    自定义图标    slot="icon"

3. 行为
    自动消失
    点击关闭

## (2)依照分析内容进行组件封装

# 四、任务

1. $emit实现子传父的流程

2. slot插槽的使用流程

3. 使用组件封装理论知识点，完成msg组件封装
> [组件效果参考](https://element.eleme.cn/#/zh-CN/component/message)

4. 扩展实现modal组件的封装
> [组件效果参考](https://element.eleme.cn/#/zh-CN/component/message-box)