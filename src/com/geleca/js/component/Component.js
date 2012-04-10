Component.extend(EventDispatcher);
function Component(asset) {
	this._super();
	this.asset = asset;
	
	var self 		= this;
	var _enabled 	= true;
	var _selected	= false;
	
	var _mouseX = 0;
	var _mouseY = 0;
	
	//focus
	$(asset).focus(function(e) {
		self.dispatchEvent(new FocusEvent(FocusEvent.FOCUS_IN));
	});
	
	$(asset).blur(function(e) {
		self.dispatchEvent(new FocusEvent(FocusEvent.FOCUS_OUT));
	});
	
	this.setEnabled = function(value) {
		_enabled = value;
		
		if(value)
			$(self.asset).removeClass("disabled");
		else
			$(self.asset).addClass("disabled");
	}
	
	this.getEnabled = function() {
		return _enabled;
	}
	
	this.setSelected = function(value) {
		_selected = value;
		
		if(value)
			$(self.asset).addClass("selected");
		else
			$(self.asset).removeClass("selected");
	}
	
	this.getSelected = function() {
		return _selected;
	}
	
	this.getWidth = function() {
		return $(asset).width();
		//return Number($(asset).width().replace("px", ""));
	};
	
	this.setWidth = function(value) {
		$(asset).width(value);
		return;
		
		
				
		if(isNumber(value))
			value = value + "px";
			
		self.setCss("width", value);
		//trace("Component::setWidth()", value);
	};
	
	this.getHeight = function() {
		return $(asset).height();
		//return Number(self.getCss("height").replace("px", ""));
	};
	
	this.setHeight = function(value) {
		$(asset).height(value);
		return;
		
		if(isNumber(value))
			value = value + "px";
			
		self.setCSs("height", value);
	};
	
	this.getAlpha = function() {
		return $(asset).css("opacity");
		//return Number(self.getCss("opacity"));
	};
	
	this.setAlpha = function(value) {
		$(asset).css({"opacity":value});
		return;
		
		self.setCss("opacity", value);
		//trace("setAlpha", value);
	};
	
	this.setVisible = function(value) {
		if(value == true)
			$(asset).css({"visibility":"visible"});
			//self.setCss("visibility", "visible");
		if(value == false)
			$(asset).css({"visibility":"hidden"});
			//self.setCss("visibility", "hidden");
	}
	
	this.getVisible = function() {
		//if(self.getCss("visibility") == "visible")
		if($(asset).css("visibility") == "visible")
			return true;
		//if(self.getCss("visibility") == "hidden")
		if($(asset).css("visibility") == "hidden")
			return false;
		return null;
	}
	
	this.getCss = function(prop) {
		return $(self.asset).css(prop);
		
		if(self.asset.currentStyle)
			return currentStyle[prop];
		else if(window.getComputedStyle)
			return document.defaultView.getComputedStyle(self.asset, null).getPropertyValue(prop);
	};
	
	this.setCss = function(prop, value) {
		$(self.asset).css({prop:value});
		return;
		
		self.asset.style[prop] = value;
	};
	
	//this.setCss = $(asset).css;
	//this.getCss = $(asset).css;
	
	$(asset).mousemove(function(e) {
		if(e.target == e.currentTarget) {
			
			if(!e.offsetX)
				e.offsetX = e.clientX - $(e.target).offset().left;
				
			if(!e.offsetY)
				e.offsetY = e.clientY - $(e.target).offset().top;
			
			/*
			if (!(e.offsetX || e.offsetY)) {
				offsetX = e.layerX - $(e.target).position().left;
				offsetY = e.layerY - $(e.target).position().top;
			}
			else {
				offsetX = e.offsetX;
				offsetY = e.offsetY;
			}*/
			
			_mouseX = e.offsetX;
			_mouseY = e.offsetY;
			
			//trace("Component::mousemove()", e.pageX, e.pageY);

			if(self.getEnabled())
				self.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_MOVE, _mouseX, _mouseY));
		}
	});
	
	var drag_rect;
	var drag_position;
	var drag_x = 0;
	var drag_y = 0;
	
	//drag
	this.startDrag = function(rect) {
		drag_rect 	= rect;
		var parent 	= $(asset).parent();
		
		drag_position = self.getCss("position");
		self.setCss("position", "relative");
		
		drag_x = self.getMouseX();
		drag_y = self.getMouseY();
		
		//trace("Component::startDrag()", self, drag_x, drag_y, _mouseX, _mouseY);
		
		//parent.mousemove(startDrag_mouseMove);
		$("body").mousemove(startDrag_mouseMove);
	};
	
	function startDrag_mouseMove(e) {
		//trace("Component::startDrag_mouseMove");
		
		var parent = $(asset).parent();
		
		//if(e.target == e.currentTarget) {			
			var offset = parent.offset();
			var x = (e.pageX - (offset.left)) - drag_x;
			var y = (e.pageY - (offset.top)) - drag_y;
			
			//trace("Component::startDrag_mouseMove()", e.pageX, offset.left, drag_x);
			
			x = e.pageX - $(self.asset).parent().offset().left - drag_x;
			y = e.pageY - $(self.asset).parent().offset().top - drag_y;
			
			//trace("Component::startDrag_mouseMove()", x, y);
			
			self.setLeft(x);
			self.setTop(y);
			
			//return;
			
			if(self.getLeft() > drag_rect.x + drag_rect.width)
				self.setLeft(drag_rect.x + drag_rect.width);
			if(self.getLeft() < drag_rect.x)
				self.setLeft(drag_rect.x);

			if(self.getTop() > drag_rect.y + drag_rect.height)
				self.setTop(drag_rect.y + drag_rect.height);
			if(self.getTop() < drag_rect.y)
				self.setTop(drag_rect.y);
			
		//}
		//var x = e.pageX - e.offsetX;
		
		//var y = e.pageY - e.offsetY;
		
		//trace("x", x, "y", y);
		
		
		
		//$(asset).css({left:self.getMouseX(), top:self.getMouseY()});
		//trace("Component::startDrag()", "mouseMove", self.getLeft(), self.getTop());
		//if(self.getLeft() + self.getWidth() > drag_rect.x + drag_rect.width)
			//self.setLeft(drag_rect.x + drag_rect.width);
			
			//if(self.getTop() + self.getHeight() > drag_rect.y + drag_rect.height)
				//self.setTop(drag_rect.y + drag_rect.height);
	}
	
	this.stopDrag = function() {
		//trace("Component::stopDrag()");
		
		$("body").unbind("mousemove", startDrag_mouseMove);
		//$(asset).parent().unbind("mousemove", startDrag_mouseMove);
		
		self.setCss("position", drag_position);
	};
	
	//this.getLeft 	= function() { return Number(self.getCss("left").replace("px", "")); };
	this.getLeft 	= function() { return Number($(asset).css("left").replace("px", "")); };
	//this.getTop 	= function() { return Number(self.getCss("top").replace("px", "")); };
	this.getTop 	= function() { return Number($(asset).css("top").replace("px", "")); };
	
	this.setLeft = function(value) {
		if(isNumber(value))
			value = value + "px";
		
		$(asset).css({"left":value});
		//self.setCss("left", value);
	};
	
	this.setTop = function(value) {
		if(isNumber(value))
			value = value + "px";
			
		$(asset).css({"top":value});
		//self.setCss("top", value);
	};
	
	this.getMouseX = function() { return _mouseX };
	this.getMouseY = function() { return _mouseY };
	
	
	this.getHTML = function() { return self.asset.innerHTML; };
	this.setHTML = function(value) {
		self.asset.innerHTML = value;
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