var fileimg = require('./fileimg');

module.exports= {
	readimage:function(req,res){
		fileimg.readimg('./img/1.jpg',res);
		console.log('读取图片完成');
	}

}