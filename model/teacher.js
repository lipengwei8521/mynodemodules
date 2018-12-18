var User = require('./User');

function Teacher(id,name,age){
	User.apply(this,[age,name,age]);
	this.teach=function(res){
		res.write(this.name+'剑客');
	}
}

module.exports = Teacher;