var fs = require('fs');

module.exports = {
	// 读取图片
	showimg:function(path,res){
		fs.readFile(path,'binary',function(err,filedata){
			if(err){
				console.log(err);
				return;
			}else{
			
				res.write(filedata,'binary');
				res.end();
			}	
		});
	},
	// 读取html页面
	indexhtml:function(path,recall){
		fs.readFile(path,function(err,data){
			if(err){
				console.log(err);
			}else{
				recall(data);
			}
		});
	}
}