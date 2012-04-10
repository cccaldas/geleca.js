EventDispatcher.extend(Object);

function EventDispatcher(){
	this._super();
	var _events = {};	
	var self 	= this;
	
	this.addEventListener = function(type, callBack) {		
		if(_events[type] == undefined)
			_events[type] = [];
			
		_events[type].push(callBack);
	};
	
	this.removeEventListener = function(type, callBack) {		
		if(_events[type] == undefined)
			return;
			
		_events[type].splice(_events[type].indexOf(callBack), 1);
	};
	
	this.dispatchEvent = function(evt) {
		if(_events[evt.type] == undefined)
			return;
		
		evt.target = this;
		//trace("dispatchEvent", this, self);
		//console.log(calee);
		//evt.target = self;
			
		for (var i=0; i < _events[evt.type].length; i++) {
			_events[evt.type][i](evt);
		};
	};
	
	this.removeAll = function() {
		_events = {};
	};
}