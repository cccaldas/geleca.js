FadeTransition = {};
FadeTransition.fadeIn = function(target, callBack) {
    $(target).stop().fadeTo("fast", "1", callBack);
}
FadeTransition.fadeOut = function(target, callBack) {
    $(target).stop().fadeTo("fast", "0", function() { 
	$(this).css("display", "none");
	if(callBack)
	    callBack(); 
    });
}


//component
Component.extend(EventDispatcher);
function Component() {
	
}