GTween = {};

GTween.removeTweens = function(target) {
	var tweens = target["__tweens"];
	
	if(tweens == undefined)
		return;
	
	for (var i=0; i < tweens.length; i++) {
		tweens[i].stop();
	};
	
	delete target["__tweens"];
};

GTween.addTween = function(target, props) {
	var timer = new Timer(10, (props.time * 1000) / 10);
	timer.addEventListener(TimerEvent.TIMER, timer_timer);
	
	var time 		= props.time;
	var onComplete 	= props.onComplete;
	var onUpdate 	= props.onUpdate;
	
	delete props.time;
	delete props.onComplete;
	delete props.onUpdate;
	
	var increment = {};
	for (var prop in props) {
		increment[prop] = (props[prop] - target[getGetter(prop)]()) / timer.repeatCount;
		//trace(getGetter(prop));
		//trace(getSetter(prop));
	}
	
	
	if(target["__tweens"] == undefined)
		target["__tweens"] = [];
		
	target["__tweens"].push(timer);
	
	timer.start();
	function timer_timer(e) {
		for (var prop in props) {
			if(timer.repeatCount == timer.currentCount)
			{
				target[getSetter(prop)](props[prop]);
			}
			else
				target[getSetter(prop)](target[getGetter(prop)]() + increment[prop]);
		}
		
		if(onUpdate)
			onUpdate();
		
		if(timer.repeatCount == timer.currentCount)
		{
			if(onComplete)
				onComplete();
		}
	}
	
	function getGetter(prop) {
		return "get"+prop.charAt(0).toUpperCase()+prop.substring(1, prop.length);
	}
	
	function getSetter(prop) {
		return "set"+prop.charAt(0).toUpperCase()+prop.substring(1, prop.length);
	}
};