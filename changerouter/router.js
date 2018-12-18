// 获取 readhtml.js
var readhtml = require('./readhtml');

// 封装一个回调函数
function getRecall(req,res){
	res.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
	function recall(data){
		res.write(data);
		res.end(''); // 不写没有http结尾
	}
	return recall;
}

module.exports = {
	login:function(req,res){
		recall = getRecall(req,res);
		// 调用 readhtml.js中的indexhtml方法
		readhtml.indexhtml('./view/index.html',recall);
	},
	showImg:function(req,res){
		res.writeHead(200,{'Contet-Type':'image/jpeg'});
		// 调用 readhtml.js中的showimg方法
		readhtml.showimg('./img/1.jpg',res);
	}

}