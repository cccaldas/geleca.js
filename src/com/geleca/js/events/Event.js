Event.extend(Object);

function Event(type) {
	this.type 			= type;
	this.currentTarget 	= null;
	this.target			= null;
}