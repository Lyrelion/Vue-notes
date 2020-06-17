const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    // 处理静态资源
app.use(express.static('public'))
    // 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // 允许前台单独设置的请求头向服务器发送请求
    res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});

// 15-async函数处理多个异步请求
app.get('/async1', (req, res) => {
    res.send('hello')
})
app.get('/async2', (req, res) => {
        if (req.query.info == 'hello') { // 如果接受的参数值是hello
            res.send(req.query.info + 'world') // hello world
        } else {
            res.send('error')
        }
    })
    // 10-axios基本用法 13-axios拦截器
app.get('/axios0', (req, res) => {
        res.send('Hello axios!')
    })
    // 11-axios请求传参
app.get('/axios', (req, res) => {
    res.send('axios get 传递参数' + req.query.id)
})
app.get('/axios/:id', (req, res) => {
    res.send('axios get (Restful) 传递参数 / params对象 传递参数' + req.params.id)
})
app.delete('/axios/:id', (req, res) => {
    res.send('axios delete 传递参数' + req.params.id)
})
app.post('/axios', (req, res) => {
    res.send('axios post 传递参数' + req.body.uname + '---' + req.body.pwd)
})
app.put('/axios/:id', (req, res) => {
    res.send('axios put 传递参数' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

// 12-axios响应结果与全局配置
app.get('/axios-json', (req, res) => {
    res.json({ // 返回 json格式的数据
        uname: '茶茶子',
        age: 21
    });
})

// 07-FetchAPI基本使用
app.get('/fdata', (req, res) => {
    res.send('Hello Fetch!')
})
app.get('/books', (req, res) => {
    res.send('传统的URL传递参数!' + req.query.id)
})
app.get('/books/:id', (req, res) => {
    res.send('Restful形式的URL传递参数!' + req.params.id)
})
app.delete('/books/:id', (req, res) => {
    res.send('DELETE请求传递参数!' + req.params.id)
})
app.post('/books', (req, res) => {
    res.send('POST请求传递参数!' + req.body.uname + '---' + req.body.pwd)
})
app.put('/books/:id', (req, res) => {
    res.send('PUT请求传递参数!' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

// 09-Fetch响应结果的数据格式
app.get('/json', (req, res) => {
    res.json({
        uname: '茶茶子',
        age: 21,
        gender: 'female'
    });
})

// 06-Promise常用API-对象方法 all()、race()
app.get('/a1', (req, res) => {
    setTimeout(function() {
        res.send('Hello TOM!')
    }, 1000);
})
app.get('/a2', (req, res) => {
    setTimeout(function() {
        res.send('Hello JERRY!')
    }, 2000);
})
app.get('/a3', (req, res) => {
    setTimeout(function() {
        res.send('Hello SPIKE!')
    }, 3000);
})

// 路由 01-异步编程与Promise概述
app.get('/data', (req, res) => {
    res.send('Hello World!')
})
app.get('/data1', (req, res) => {
    setTimeout(function() {
        res.send('Hello TOM!') // 给返回结果增加一秒延迟
    }, 1000);
})
app.get('/data2', (req, res) => {
    res.send('Hello JERRY!')
})

// 启动监听
app.listen(3000, () => {
    console.log('running...')
})