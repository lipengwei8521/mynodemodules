var file = require('./file');

module.exports = {
	writeFile:function(req,res){

		function recall(data){
			res.write('异步写文件成功');
			res.end('');// 不写则没有http协议尾
		}

		file.writefile('./file/异步.txt','这是异步写文件',recall);
	},
	writeFileSync:function(req,res){

		res.write('同步写文件成功');
		res.end('');
		file.writeFileSync('./file/同步.txt','这是同步写文件');
	
	}

}