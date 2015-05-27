var name;

exports.setName = function ( thyname ) {
	name = thyname;
}
exports.sayHello = function(){
	console.log( 'Hello' + name );
}
var app = function(){
	// this.name = 'Cheng Cong';
	// name = this.name + '123';
	this.sayHello = function(){
		console.log( 'It is me, hey '+ name )
	}
	this.setName = function( name ){
		name = name; 
	}
}
module.exports = app;