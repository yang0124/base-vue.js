# 一、在windows常见操作
1. 在文件夹之间切换

2. 创建文件夹

3. 创建文件

4. 查看当前文件夹的目录结构

5. 编辑html,js等文件

6. 安装软件

# 二、在Linux下进行类似操作
> 没有图形化界面，全部操作通过终端指令完成
> shell  powershell   gitBash


1. 连接远程CentOS服务器
> ssh root@公网IP

2. 文件夹切换
> cd ..   返回上一级
> cd 文件夹名称    进入下一级
> cd /d/文件夹    直接进入某个盘符下的文件夹

3. 创建文件夹与创建文件
> mkdir 文件夹名称
> touch index.html 创建文件

4. 编辑文件
 + vi app.js 或者 vim app.js       打开待编辑文件
 + i     进入编辑状态
 + 在app.js中写入代码
 + ESC    退出编辑状态
 + :wq      保存退出


 5. 安装软件
 > yum list | grep nodejs    查看yum平台是否有对应的包
 > yum install git  安装对应包文件

 6. 删除文件夹/文件
 > rm 文件名称
 > rm -r 文件夹的名称     递归删除    每次删除时会进行二次确认
 > rm -rf 文件夹的名称     强制递归删除

 7. 复制文件\文件夹
> cp -r 被复制的文件夹  新文件夹路径及名称

> cp 文件名  新的路径及文件名



# 二、安装高版本nodejs

1. 在nodejs官网，找到10号版本nodejs下载链接地址
[Node10.x下载位置](https://nodejs.org/en/download/releases/)
[Node10.18.0下载链接](https://nodejs.org/dist/latest-v10.x/node-v10.18.0-linux-x64.tar.xz)

2. 在CentOS服务器指定目录下，下载Nodejs安装包
```
cd /usr/local/src

wget https://nodejs.org/dist/latest-v10.x/node-v10.18.0-linux-x64.tar.xz
```

3. 解压下载到的nodejs安装包  
```
tar -xvf node-v10.18.0-linux-x64.tar.xz
```

4. 将解压后的文件夹复制一份并重命名
```
cp -r node-v10.18.0-linux-x64 node
```

5. 配置环境变量
```
vim /etc/profile     #打开环境变量配置文件
```
在export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL这前面添加：
```
#Nodejs 环境变量 
export NODE_HOME=/usr/local/src/node   #这里要指定解压后的node文件夹位置
export PATH=$NODE_HOME/bin:$PATH
```

6. 刷新环境变量，使其生效
```
source /etc/profile
```

7. 使用如下命令测试nodejs是否安装成功
```
npm -v
node -v
```


# 三、远程服务器部署项目
 1. 创建git远程仓库

 2. 在本地电脑clone远程仓库

 3. 在该仓库中创建一个基本node服务项目

 4. 将node项目上传至git仓库

 5. 在CentOS远程服务器clone远程的git仓库

 6. npm i  为CentOS中clone的项目，安装对应依赖包

 7. 远程服务器指定目录下 执行npm start启动服务

 8. 在浏览器中通过   公网IP:3000  访问服务端node项目


# 四、任务
> 将一个带有图片的html文件，通过远程服务器某个接口下发给客户端
涉及到的知识点
下发文件  sendFile
静态资源托管   


