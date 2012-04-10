Input.extend(Component);
function Input(asset) {
	this._super(asset);
	var self = this;
	
	var _valid 		= true;
	
	this.setValid = function(value) {
		_valid = value;
		
		if(value)
			$(self.asset).removeClass("invalid");
		else
			$(self.asset).addClass("invalid");
	}
	
	this.getValid = function() {
		return _valid;
	}
}