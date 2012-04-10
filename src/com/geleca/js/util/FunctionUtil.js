FunctionUtil = { };
FunctionUtil.functionDelay = function(fn, delay) {
	setTimeout(fn, delay * 1000);
};

FunctionUtil.executeSequential = function(functions, onComplete) {
	if (onComplete == null)
		onComplete = function(){};
		
	var current = -1;
	
	exec();
	
	function exec() {
		current ++;
		
		if(current != functions.length - 1)
			functions[current](exec);
		else
			functions[current](onComplete);
	}
};