
var url = require('url');
var readhtml = require('./readhtml');

var querystring = require('querystring');
function getRecall(req,res){
	res.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
	function recall(data){
		res.write(data);
		res.end('');
	}
	return recall;
}

module.exports={
	login:function(req,res){
		// get方式提交
		/*
		var rdata = url.parse(req.url,true).query;
		console.log(rdata);
		if(rdata['email']!=undefined){
			console.log('email===='+rdata['email']
				);
			console.log('password='+rdata['pwd']);
		}
		recall = getRecall(req,res);
		readhtml.login('./login.html',recall);
		*/



		// post 提交方式
		// 定义一个post变量，用于暂时储存请求体的信息
		var post = '';
		// 通过req的data事件监听函数，每当接受到请求体的数据，就到post变量中
		req.on('data',function(chunk){
			post +=chunk;			
		});
		// 注意异步
		// 在end事件触发后，通过querystring.parse将post街恶习为真正的post格式，然后向客户端返回
		req.on('end',function(){
			post = querystring.parse(post);
			//console.log('接受的参数'+ post['email']+'\n'+post['pwd']);
			if(post['email']!=undefined){
				console.log('email===='+post['email']
					);
				console.log('password='+post['pwd']);
			}

			// 接受到所有参数再显示页面
			recall = getRecall(req,res);
			readhtml.login('./login.html',recall);
		});

		
	},
	showimg:function(req,res){
		res.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
		readhtml.showimg('./1.jpg',res);
	}
}