var util = require( 'util' );

var Base = function(){
	this.name = 'base';
	this.base = '1992';
	this.sayHello = function(){
		console.log( 'Hello '+this.name );
	}
}

Base.prototype.showName = function(){
	console.log( this.name );
}

var Sub = function(){
	this.name = 'sub';
}

util.inherits( Sub, Base );

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log( 'objBase', objBase );

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log( 'objSub', objSub );