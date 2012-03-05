GLog = { };
GLog.enabled = true;
GLog.log = function() {
	if(!GLog.enabled)
		return;
		
	var msg = "[GLOG] ";
    for (var i=0; i < arguments.length; i++) {
	msg += arguments[i];
	if(i != arguments.length - 1)
	    msg += ", ";
    };

    window.console.log(msg);
};