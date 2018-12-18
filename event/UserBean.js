/*
Events 
	enevts.EventEmitter
	emitter.addListener(event,listener)==on // 添加监听
	emitter.on(event,listener)
	emitter.once(event,listener)  // 一次性的监听
	emitter.removeListener(event,listener) // 删除指定监听
	emitter.removeAllListeners([event]) // 删除所有监听
	emitter.setMaxListeners(n) // 默认情况下当一个事件的监听超过10小时，EventEmitter将打印警告信息，0表示无限制
	emitter.listeners(evebt) // 返回特定事件的事件监听器集合
	emitter.emit(event,[arg1],[arg2],[...]) // 用提供的参数按顺序执行每个事件监听器
*/
var events = require('events');
var http = require('http');
function UserBean(){
	// 实例化事件发生器
	this.eventEmit = new events.EventEmitter();
	this.zhuce =function(req,res){
		console.log('注册');
		req['name'] = 'aa';
		req['pwd'] = '123456';
		// 事件发生器的发生事件
		this.eventEmit.emit('zhucesecc','aa','123456');
	},
	this.login=function(req,res){
		console.log('登录');
		res.write('用户名：'+req['name']);
		res.write('密码：'+req['pwd']);
		res.write('登录');
	}

}
module.exports = UserBean;