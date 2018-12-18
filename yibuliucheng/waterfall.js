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

function exec(){

	// 串行有关联
	async.waterfall(
		[		
			function(done){
				i = 0;
				// 异步操作
				setInterval(function(){
					console.log('aaaaaa'+new Date());
					i++;
					if(i==3){
						clearInterval(this);
						done(null,'one完毕');// 若这里出错，例如done('error','one完毕');则会阻止后面的回调
					}
				},1000);
				
			},
			function(preValue,done){
				jj = 0;
				setInterval(function(){
					console.log(preValue+new Date());
					jj++;
					if(jj==3){
						clearInterval(this);
						done(null,preValue+',two完毕');
					}
				},1000);
			}
		],function(err,rs){
			console.log(err);
			console.log(rs);
		}
	);
}
exec();
console.log('主程序执行完成！');