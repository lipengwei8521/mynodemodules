var indexfile = require('./readfile');

module.exports = {

	login:function(request,response){// 异步执行

		function recall(data){
			response.write(data);
			response.end('ok');
		}

		indexfile.readfile('./model/index.html',recall);

		console.log('login 路由 异步方法执行完毕。');
	},
	zhuce:function(request,response){

		function recall(data){
			response.write(data);
			response.end('ok');
		}

		indexfile.readfile('./model/index.html',recall);

		console.log('zhece 路由 异步方法执行完毕。');
	}

}