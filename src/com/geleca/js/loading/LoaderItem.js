LoaderItem.extend(EventDispatcher);
function LoaderItem(id, src, weight) {
	this._super();
	
	if(!weight)
		weight = 1;
	
	this.id 		= id;
	this.src 		= src;
	this.progress	= 0;
	this.weight		= weight;
	this.content 	= null;
	this.loader 	= null;
	
	var self = this;	
	var _xhr = new XMLHttpRequest();
	
	_xhr.onreadystatechange = function() {
		if (_xhr.readyState == 4) {
			self.progress = 1;
			self.content = _xhr.responseText;
			self.dispatchEvent(new Event(Event.COMPLETE));
		}
	 };

	_xhr.onprogress = function(e) {
		self.progress = e.loaded/e.total;
	};
	
	this.load = function() {
		_xhr.open("GET", self.src, true);
		_xhr.send();
	};
}
