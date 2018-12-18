var http = require('http');

var url = require('url');

var router = require("./router");

http.createServer(function(request,response){
	
	response.writeHead(200,{'contet-Type':'text/html;charset=utf-8'});

	if(request.url!=='/favicon.ico'){
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');

		router[pathname](request,response);
	}
	
	console.log('主程序执行完毕');

}).listen(8000);

console.log('now Server port is 8000');