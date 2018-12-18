var async = require('async');


function oneFun(){
	console.log('oneFun');
	/*
	setTimeout(function(){


	},1000);
	*/
	i = 0;
	setInterval(function(){
		console.log('aaaaaa'+new Date());
		i++;
		if(i==3){
			clearInterval(this);
		}
	},1000);
}
function twoFun(){
	console.log('twoFun');
	jj = 0;
	setInterval(function(){
		console.log('bbbbbbb'+new Date());
		jj++;
		if(jj==3){
			clearInterval(this);
		}
	},1000);
}

//oneFun();
//twoFun();

function exec(){

	// 窜行无关联
	async.series(
		{	
			// 按顺序执行，one并不执行完，two不执行，当one出错的时候，two也不执行
			one:function(done){
				i = 0;
				// 异步操作
				setInterval(function(){
					console.log('aaaaaa'+new Date());
					i++;
					if(i==3){
						clearInterval(this);
						done(null,'one完毕');
					}
				},1000);
				
			},
			two:function(done){
				jj = 0;
				setInterval(function(){
					console.log('bbbbbbb'+new Date());
					jj++;
					if(jj==3){
						clearInterval(this);
						done(null,'two完毕');
					}
				},1000);
			}
		},function(err,rs){
			console.log(err);
			console.log(rs);
		}
	);
}
exec();
console.log('主程序执行完成！');