// 调用mysql模块
var mysql = require('mysql');
function OptPool(){

	this.flag=true;//是否连接过
	this.pool = mysql.createPool({
		host:'localhost', //主机
		port:'3306',	// 端口号
		user:'root',	// 用户名
		password:'root',	// 密码
		database:'study'	// 数据库名
	});

	this.getPool =function(){
		if(this.flag){
			// 监听connection事件
			this.pool.on('connection',function(connection){
				connection.query('set session auto_increment_increment=1')
				this.flag = false;

			});
		}
		return this.pool;
	}
}

module.exports = OptPool;