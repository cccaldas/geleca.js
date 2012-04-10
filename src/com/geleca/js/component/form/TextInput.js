TextInput.extend(Input);
function TextInput(asset) {
	this._super(asset);
	var self = this;
	var _restrict 			= "";
	var _restrict_exclude 	= [
		KeyBoard.BACKSPACE,
		KeyBoard.TAB,
		KeyBoard.ENTER,
		KeyBoard.SHIFT,
		KeyBoard.CTRL,
		KeyBoard.ALT,
		KeyBoard.PAUSE_BREAK,
		KeyBoard.CAPSLOCK,
		KeyBoard.ESCAPE,
		KeyBoard.PAGE_UP,
		KeyBoard.SPACEBAR,
		KeyBoard.PAGE_DOWN,
		KeyBoard.END,
		KeyBoard.HOME,
		KeyBoard.LEFT,
		KeyBoard.UP,
		KeyBoard.RIGHT,
		KeyBoard.DOWN,
		KeyBoard.INSERT,
		KeyBoard.DELETE
	];
	var _restrict_char 		= [];
	
	this.getRestrict = function() { return _restrict; };
	this.setRestrict = function(value) {
		_restrict = value;
	};
	
	$(asset).change(function(e) {		
		self.dispatchEvent(new Event(Event.CHANGE));
	});
	
	$(asset).keydown(function(e) {
		var keyCode = e.keyCode;
		
		apply_restrict(keyCode);
		
		self.dispatchEvent(new KeyboardEvent(KeyboardEvent.KEY_DOWN, keyCode));
	});
	
	function apply_restrict(keyCode) {
		if(_restrict.length == 0)
			return;
			
		if(_restrict_exclude.indexOf(keyCode) != -1)
			return;
		
		var text 	= self.getText();
		var replace = false;
		var chr	= 0;
		for (var i=0; i < text.length; i++) {
			chr = text.charAt(i);
			if(_restrict.indexOf(chr) == -1) {
				text = StringUtil.replace(text, chr, "");
				replace = true;
			}
		};
		
		if(replace)
			self.setText(text);
	}
	
	$(asset).keyup(function(e) {
		var keyCode = e.keyCode;
		
		apply_restrict(keyCode);
		
		self.dispatchEvent(new KeyboardEvent(KeyboardEvent.KEY_UP, keyCode));
	});
	
	this.setText = function(value) {
		$(self.asset).val(value);
	}
	
	this.getText = function() {
		return $(self.asset).val();
	}
	
	this.focus = function() {
		self.asset.focus();
	}
}