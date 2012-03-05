//oop
Function.prototype.extend = function(_class) {
	this.prototype._super = function() {
		var _super = new _class(arguments[0],
								arguments[1],
								arguments[2],
								arguments[3],
								arguments[4],
								arguments[5],
								arguments[6],
								arguments[7],
								arguments[8],
								arguments[9]
								);
								
		for (var key in _super)
			if(this[key] == undefined)
				this[key] = _super[key];
	}
	
	return this;
}

/*
Function.prototype.extend = function(parentClassOrObject){ 
	if(parentClassOrObject.constructor == Function) 
	{ 
		//normal inheritance 
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype._super = parentClassOrObject.prototype;
		//this.prototype.super = function() { this.constructor(); };
	} 
	else 
	{ 
		//pure virtual inheritance 
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype._super = parentClassOrObject;
		//this.prototype.super = function() { this.constructor(); };
	} 
	return this;
};*/