Preloader.extend(Component);
function Preloader(asset) {
	this._super(asset);
	var self = this;
	
	var _onProgress;
	
	this.progress 		= 0;
	this.setProgress 	= function(value) {
		self.progress = value;
		if(_onProgress)
			_onProgress(value);
	};
	
	this.setOnProgress = function(value) {
		_onProgress = value;
	};
}