Event.extend(Object);
Event.COMPLETE 	= "complete";
Event.INIT 		= "init";
Event.SELECT	= "select";
Event.CHANGE	= "change";

function Event(type) {
	this.type 			= type;
	this.currentTarget 	= null;
	this.target			= null;
}