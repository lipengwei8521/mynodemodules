// 用连接池连接mysql，需要安装mysqlpool模块 npm install -g node-mysql // -g表示全局

var OptPool = require('./OptPool');

var optPool = new OptPool();
var pool = optPool.getPool();

// 从连接池获取一个连接
pool.getConnection(function(err,conn){
	conn.query('select * from user where id = ?',[1],function(err,rows){
	if(err){
		console.log('query-:'+err.message);
		return;
	}
	for (var i = rows.length - 1; i >= 0; i--) {
		console.log(i+'the solution is :'+rows[i].name);
	}
	console.log(rows);
	conn.release();// 放回连接池
});
});