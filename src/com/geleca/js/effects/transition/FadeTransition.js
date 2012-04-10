FadeTransition = {};
FadeTransition.fadeIn = function(target, time, alpha, onComplete) {
	if(!alpha)
		alpha = 1;
		
	if(isNumber(time))
		time *= 1000;	
		
	if(!time)
		time = "fast";
		
    $(target).stop().fadeTo(time, "1", onComplete);
}
FadeTransition.fadeOut = function(target, time, alpha, onComplete) {
	if(!alpha)
		alpha = 0;
		
	if(isNumber(time))
		time *= 1000;
		
	if(!time)
		time = "fast";
		
    $(target).stop().fadeTo(time, alpha, function() { 
	//$(this).css("display", "none");
	if(onComplete)
	    onComplete(); 
    });
}