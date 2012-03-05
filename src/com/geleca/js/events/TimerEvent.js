TimerEvent.TIMER 			= "timer";
TimerEvent.TIMER_COMPLETE 	= "timer_complete";

TimerEvent.extend(Event);
function TimerEvent(type) {
	this.type = type;
}