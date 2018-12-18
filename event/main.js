var http = require('http');
var events = require('events');
var UserBean = require('./UserBean');

http.createServer(function(request,response){
	response.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
	if(request.url!=='/favicon.ico'){
		user = new UserBean();
		user.eventEmit.once('zhucesecc',function(name,pwd){
			response.write('注册成功');
			console.log('传来name'+name);
			console.log('传来pwd'+pwd);
			user.login(request,response);
			response.end('');
		});// 注册监听

		// 这里先执行，成功了，上面once监听到才执行
		user.zhuce(request,response);
	}


}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');