MouseEvent.CLICK 		= "click";
MouseEvent.ROLL_OVER 	= "roll_over";
MouseEvent.ROLL_OUT 	= "roll_out";
MouseEvent.MOUSE_DOWN 	= "mouse_down";
MouseEvent.MOUSE_UP 	= "mouse_up";

MouseEvent.extend(Event);
function MouseEvent(type, mouseX, mouseY) {
	this.type 		= type;
	this.mouseX 	= mouseX;
	this.mouseY 	= mouseY;
}