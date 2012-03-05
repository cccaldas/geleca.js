Assert = {};
Assert.isFunction = function(fn, desc) {
	Assert.assert(typeof(fn) == "function", desc);
};

Assert.isNumber = function(number, desc) {
	Assert.assert(!isNaN(Number(number)), desc);
};

Assert.isEquals = function(val1, val2, desc) {
	Assert.assert(val1 == val2, desc);
};



Assert.assert = function(expression, description) {
	if(!expression)
		throw "Assert Failed: " + description;
};