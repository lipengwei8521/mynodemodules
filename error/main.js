var http = require('http');
var url = require('url');
var router = require('./router');

var exp = require('./exp');

http.createServer(function(request, response){
	
	if(request.url!=='/favicon.ico'){ // 防止第二次重复访问
		//response.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');// 替换掉前面的 /
		console.log(pathname);
		try{
			//router[pathname](request,response);
			var str = exp.exp(0);
			response.write(str);
			response.end('');

		}catch(err){
			console.log('错误为：'+err);
			response.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
			response.write(err.toString());
			response.end('');
		}
		console.log('server 执行完毕。');
	}
}).listen(8000);
console.log('Server is running in port 8000');