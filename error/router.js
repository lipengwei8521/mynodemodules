var readhtml = require('./readhtml');

function getRecall(req,res){
	res.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
	function recall(data){
		res.write(data)
		res.end('');
	}
	return recall;
}
module.exports={
	login:function(req,res){
		recall = getRecall(req,res);
		readhtml.login('./html/login111.html',recall);// 不存在文件login111.html
		console.log("login====");
	},
	showImg:function(req,res){
		res.writeHead(200,{'Contet-Type':'image/jpeg'});
		readhtml.showimg('./img/1.jpg',res);
		console.log("login====");
	}
}