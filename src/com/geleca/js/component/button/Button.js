Button.extend(Component);
function Button(asset) {
	this._super(asset);
	var self = this;
	
	$(asset).click(function(e) {
		if(self.getEnabled())
			self.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
	});
	
	$(asset).hover(function() {
		if(self.getEnabled())
			self.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OVER));
	}, function() {
		if(self.getEnabled())
			self.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OUT));
	});
	
	$(asset).mousedown(function(e) {
		//trace("Button::mousedown()");
				
		if(self.getEnabled()) {
			self.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_DOWN));
			
			function mouseup(e) {
				//trace("Button::mouseup()");
				self.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_UP));
				
				$("body").unbind("mouseup", mouseup);
				$(asset).unbind("mouseup", 	mouseup);
				
				return false;
			}
			
			$("body").mouseup(mouseup);
			$(asset).mouseup(mouseup);			
		}
		
		return false;	
			
	});
	
	$(asset).mouseup(function(e) {
		//if(self.getEnabled())
			//self.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_UP));
	});
}