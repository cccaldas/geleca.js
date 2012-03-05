function trace() {
	var msg = "[TRACE] ";
    for (var i=0; i < arguments.length; i++) {
	msg += arguments[i];
	if(i != arguments.length - 1)
	    msg += ", ";
    };

    window.console.log(msg);
}

//oop
/*Function.prototype.extend = function(parentClassOrObject){ 
	if(parentClassOrObject.constructor == Function) 
	{ 
		//normal inheritance 
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype._super = parentClassOrObject.prototype;
	} 
	else 
	{ 
		//pure virtual inheritance 
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype._super = parentClassOrObject;
	} 
	return this;
};*/