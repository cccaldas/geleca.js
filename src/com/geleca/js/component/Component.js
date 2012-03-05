Component.extend(EventDispatcher);

function Component(asset) {
	this._super();
	
	this.asset = asset;
	
	var self = this;
	
	this.getWidth = function() {
		return Number(self.getCss("width").replace("px", ""));
	};
	
	this.setWidth = function(value) {
		if(isNumber(value))
			value = value + "px";
			
		self.setCss("width", value);
	};
	
	this.getHeight = function() {
		return Number(self.getCss("height").replace("px", ""));
	};
	
	this.setHeight = function(value) {
		if(isNumber(value))
			value = value + "px";
			
		self.setCSs("height", value);
	};
	
	this.getAlpha = function() {
		return Number(self.getCss("opacity"));
	};
	
	this.setAlpha = function(value) {
		self.setCss("opacity", value);
		//trace("setAlpha", value);
	};
	
	this.getCss = function(prop) {
		if(self.asset.currentStyle)
			return currentStyle[prop];
		else if(window.getComputedStyle)
			return document.defaultView.getComputedStyle(self.asset, null).getPropertyValue(prop);
	};
	
	this.setCss = function(prop, value) {
		self.asset.style[prop] = value;
	};
	
	/*
	function getStyle(el, styleProp)
	{
		var x = document.getElementById(el);
		if (x.currentStyle)
			var y = x.currentStyle[styleProp];
		else if (window.getComputedStyle)
			var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
		return y;
	}*/
}