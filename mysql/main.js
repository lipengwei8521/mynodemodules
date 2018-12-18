
// 直接连接mysql，使用前需安装mysql模块 npm install mysql 
var mysql = require('mysql');
// 创建一个connection
var connection = mysql.createConnection({
	host:'localhost', //主机
	port:'3306',	// 端口号
	user:'root',	// 用户名
	password:'root',	// 密码
	database:'study'	// 数据库名
});
// 创建一个connection
connection.connect(function(err){
	if(err){
		console.log('[query]-:'+err);
		return;
	}
	console.log('[connection connect] succeed!');

});

// 插入语句
/*
var userAddSql = 'insert into user (id,name,pwd,create_date) value(?,?,?,?)';
var param = ['3','wangwu','bbbb','2012'];
connection.query(userAddSql,param,function(err,rs){
	if(err){
		console.log('insert err:'+err.message);
		return;
	}
	console.log('insert success');
});
*/
// 查询
connection.query('select * from user',function(err,rows,fields){
	if(err){
		console.log('query-:'+err.message);
		return;
	}
	console.log('the solution is :'+rows[0].name);
	console.log(fields);
});

connection.query('select * from user',function(err,rows){
	if(err){
		console.log('query-:'+err.message);
		return;
	}

	for (var i = rows.length - 1; i >= 0; i--) {
		console.log(i+'the solution is :'+rows[i].name);
	}
	console.log(rows);
	
	
});

connection.query('select * from user where id = ?',[1],function(err,rows){
	if(err){
		console.log('query-:'+err.message);
		return;
	}

	for (var i = rows.length - 1; i >= 0; i--) {
		console.log(i+'the solution is :'+rows[i].name);
	}
	console.log(rows);
	
	
});

// 关闭connection
connection.end(function(err){
	if(err){
		console.log(err.toString);
		return;
	}
	console.log('[connection end] succeed!');
});