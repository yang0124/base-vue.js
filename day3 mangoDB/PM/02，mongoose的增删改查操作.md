# 一、mongoose常用方法

1. 新增数据

2. 查询数据
find方法
```
artModel.find().then((result)=>{
    console.log(result)
    res.render('admin/list.html',{
        listD:result
    })
})
```
findById方法
```
artModel.findById(id).then((result)=>{
    console.log(result)
    res.render('admin/edit',result)
})
```

3. 修改数据
```
artModel.update({被更新的数据匹配条件},{新内容},(result)=>{
})
```

```
artModel.update({_id:id},newObj,(result)=>{
    res.send({
        code:1,
        msg:'修改成功'
    })
})
```

4. 删除数据
```
router.get('/del',(req,res)=>{
    let {id} = req.query;
    artModel.remove({_id:id}).then((result)=>{
        console.log(result)
        res.send({
            code:1,
            msg:'删除成功'
        })
    })
})
```

# 二、swig模板引擎的数据绑定
> {{数据}} 这种语法在HTML页面中哪些地方可以使用
1. 在标签之内   <div>{{数据}}</div>
2. 标签属性内   <div class="{{数据}}"></div>
3. 在js代码内部   
```
$('.btn-primary').click(function(){
    $.ajax({
        url:'/admin/update',
        method:'post',
        data:{
            'id':'{{_id.toString()}}'
        },
        success:(res)=>{}
    })
})
```

# 三、回顾与任务
1. 编辑已有文章信息
+ 打开编辑页（新建编辑页面、渲染编辑页接口）
+ 在编辑页显示文章原内容
+ 【确认修改】按钮提交更新操作（前端提交，后端update更新数据库）

2. 模糊查询
> 匹配数据的方式，变为了正则匹配

3. 删除功能
 + 前端提交请求，并携带id
 + 后端执行remove删除操作，并给前端返回状态数据
 + 前端接收状态数据，并更新DOM

4. 尝试实现分页功能[扩展功能]
```
artModel.count()  //获取当前数据表中总的数据条数
artModel.find().skip(5).limit(10).then((result)=>{

})
```

