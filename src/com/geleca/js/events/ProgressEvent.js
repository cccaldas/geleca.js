ProgressEvent.extend(Event);

function ProgressEvent(type, progress) {
	this.type 		= type;
	this.progress 	= progress;
}