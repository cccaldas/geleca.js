Timer.extend(EventDispatcher);

function Timer(delay, repeatCount) {
	this._super();
	
	this.delay 			= delay;
	this.repeatCount 	= repeatCount;
	this.currentCount	= 0;
	
	var _interval		= null;
	var self			= this;
	
	function timer_timer() {
		self.currentCount ++;
		self.dispatchEvent(new TimerEvent(TimerEvent.TIMER));
		
		if(self.repeatCount != 0)
		{
			if(self.currentCount == self.repeatCount)
				self.reset();
		}
	}
	
	this.start = function() {
		self.stop();	
		_interval = setInterval(timer_timer, delay);
	};
	
	this.stop = function() {
		if(_interval)
			clearInterval(_interval);
	};
	
	this.reset = function() {
		self.stop();
		self.currentCount = 0;
	}
}