# 一、Git基本使用

1. 安装
> [下载](https://git-scm.com/download/win)
> 在线远程仓库
    [github](https://github.com)
    [码云](https://gitee.com)

>  git 与 github关系
> git是一个版本管理工具

2. 对git进行最小配置
```
git config —global user.name "你自己的用户名"
git config --global user.email "你自己的邮箱"
```

3. 创建仓库及基本操作
    + git init   初始化git仓库
    + 添加到暂存区
       - git add 文件名称
       - git add .
    + git stutas  查看版本状态
    + git commit -m'版本描述文字'

4. 版本回退

    + git log   查看版本历史
    + git reset --hard HEAD^    版本回退，回退一个版本
    + git reset --hard dcbc3b    指定具体回退的目标commit的唯一id

> 头指针  表明当前操作所处的位置


5. 分支概念及使用
> 主分支  master
> 子分支  Demon   Tom

--创建项目--------------------------------------个人中心功能------------购物车功能---------> master分支
           |                                 |                        |
           |----Tom子分支-----个人中心功能---|                        |
           |                                                         |
           |----Demon 子分支----购物车功能----------------------------

 + git checkout -b 分支名称     新建分支并切换到新分支
 + git checkout 分支名称        切换到指定分支
 + git log      【重要】一定要在写代码前，确定自己是处于自己的子分支，不要在master分支直接编写功能代码 
 + git merge 子分支名称   【强调】先checkout到主分支
    - git checkout master
    - git merge Tom //这是合并的命令

6. 本地仓库与远程仓库合并过程 
    + 创建远程仓库
    + 在本地仓库目录下连接远程仓库
    ```
    git remote add 仓库名称(默认是origin) 远程仓库地址 
    ```
    + 获取远程仓库的分支信息
    ```
    git fetch origin
    ```
    + 将远程仓库的master分支，合并到本地的master分支上
    ```
    git merge --allow-unrelated-histories origin/master
    ```

    + 向远程仓库提交本地master分支
    ```
    git push --set-upstream origin master
    ```

    + 新增功能后，重新push
    ```
    git push 
    ```

7. 先新建远程仓库，然后在本地克隆
    + 新建远程仓库
    + 在本地目录下克隆远程仓库
    ```
    git clone 远程仓库地址
    ```
    + 修改本地代码后，将最新代码提交至远程仓库 
    ```
    git push  
    ```

8. 提交代码与拉取代码
    + git pull
    + git push

> 第一次pull下来的master分支代码是一样的
> A成员在本地master分支进行了开发，并push
> B成员也在本地master分支进行开发，并push
> 产生冲突
> 如何避免冲突，不要同时操作同一个分支


二、团队配合

1. 组长新建组织

2. 组长在组织中创建仓库

3. 组长邀请组员进入组织（仓库--管理--所有---邀请成员）

4. 通过所有成员申请

5. 所有成员git clone组织中新建的仓库

6. 【立刻马上】所有成员创建自己的分支，在自己的分支上进行开发

7. 提交分支，将自己的分支提交至远程仓库，暂时不合并
    ```
    git push origin 分支名称
    ```

8. 小组长主导进行分支合并 【看考小组团队配合操作流程图】

9. 新的master分支将变为一个完整项目，可以打包上线




