# About
```
这是一个基于模板引擎实现的学生信息管理系统
This is a student information management project(using tempalte engine)
```



# Front end
Node.js

# Back End 
```
MongoDB
```



# Configuration

```
1:创建项目文件夹，生成项目描述文件
2:创建网站服务器实现客户端课服务器端的通信
3:连接数据库并设计学员信息表
4:创建路由并实现页面模板的呈递
5:实现静态资源访问
```



```bash
1:
makedir students
cd student
npm init -y
touch app.js
2:
npm install http
```



# Git command

```bash
git add .
git commit -m "5:post abc"
git push origin master
```



# start the server

 >```bash
 >nodemon app.js
 >```
 >
 >

# Router module

1：获取路由对象

2：调用路由对象方法创建路由

2：启用路由，使路由生效

# Tree

```bash
(base) ➜  student_profile_mmanagement git:(master) tree -I "node_modules"
.
├── README.md
└── student
    ├── app.js
    ├── model
    │   ├── connect.js
    │   └── user.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── css
    │       ├── list.css
    │       └── main.css
    └── views
        ├── index.art
        └── list.art
```

