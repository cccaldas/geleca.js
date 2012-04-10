KeyboardEvent.KEY_DOWN 	= "key_down";
KeyboardEvent.KEY_UP 	= "key_up";

KeyboardEvent.extend(Event);
function KeyboardEvent(type, keyCode) {
	this.type 		= type;
	this.keyCode 	= keyCode;
}
