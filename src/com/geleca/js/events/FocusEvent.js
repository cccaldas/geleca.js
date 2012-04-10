FocusEvent.FOCUS_IN 	= "focus_in";
FocusEvent.FOCUS_OUT 	= "focus_out";

FocusEvent.extend(Event);
function FocusEvent(type) {
	this.type = type;
}
