var http = require('http');
var json = require('react-dom')
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    console.log(request.url,request.rawHeaders)
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.setHeader('Access-Control-Max-Age','600')
    response.setHeader("Access-Control-Allow-Credentials","true");
    response.setHeader("Access-Control-Expose-Headers","Keep-Alive");
    response.setHeader('Set-Cookie', 'nae=linyuana;');
    // response.setHeader("Cache-Control","public,max-age=6000");
    // response.setHeader('Content-Length','20')
    // 发送响应数据 "Hello World"
    response.end("jsonpCallback('lklklk')");
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');