GLoader.extend(EventDispatcher);
function GLoader() {
	this._super();
	
	this.items 		= [];
	this.progress 	= 0;
	
	var _current = 0;
	
	var timer = new Timer(2);
	timer.addEventListener(TimerEvent.TIMER, timer_timer);
	
	var self = this;
	
	this.addItem = function(item) {
		item.loader = self;
		self.items.push(item);
		
		//trace("GLoader::addItem", item, item.addEventListener, item.removeEventListener);
	};
	
	this.load = function() {
		if(self.items.length == 0) {
			self.dispatchEvent(new Event(Event.COMPLETE));
			timer.stop();
			return;
		}
		
		run();
	};
	
	this.getItem = function(id) {
		for (var i=0; i < self.items.length; i++) {
			if(self.items[i].id == id)
				return self.items[i];
		};
		
		return null;
	};
	
	function run() {
		timer.start();
		
		var item = self.items[_current];
		item.addEventListener(Event.COMPLETE, item_complete);
		item.load();
	}
	
	function item_complete(e) {
		var item = e.target;
		
		item.removeEventListener(Event.COMPLETE, item_complete);

		self.dispatchEvent(new ProgressEvent(ProgressEvent.PROGRESS, self.progress));

		if (_current == self.items.length -1) {
			timer.stop();
			self.progress = 1;
			self.dispatchEvent(new ProgressEvent(ProgressEvent.PROGRESS, self.progress));
			self.dispatchEvent(new Event(Event.COMPLETE));
			return;
		}

		_current ++;

		run();
	}
	
	function timer_timer(e) {
		var progress 	= 0;
		var weight 		= 0;
		var item;
		
		for (var i=0; i < self.items.length; i++) {
			item = self.items[i];
			
			progress 	+= (item.progress / 1) * item.weight;
			weight 		+= item.weight;
		}
		
		self.progress = progress / weight;
	}
}
