DateUtil = {};
DateUtil.toString = function(date, format) {
	if(!format)
		format = "mm/dd/yyyy";
		
	format = format.replace("mm", 	NumberFormatter.addLeadingZero(Number(date.getMonth().toString()) + 1));
	format = format.replace("dd", 	NumberFormatter.addLeadingZero(Number(date.getDate().toString())));
	format = format.replace("yyyy", date.getFullYear.toString());
		
	return format;
}

DateUtil.fromString = function(date, format) {	
	if(!format)
		format = "mm/dd/yyyy";
	
	var day		= Number(String(date.charAt(format.indexOf("d"))) + String(date.charAt(format.indexOf("d") + 1)));
	var month	= Number(String(date.charAt(format.indexOf("m"))) + String(date.charAt(format.indexOf("m") + 1)));	
	
	month --;
	
	var year = (
				String(date.charAt(format.indexOf("y"))) + 
				String(date.charAt(format.indexOf("y") + 1)) + 
				String(date.charAt(format.indexOf("y") + 2)) + 
				String(date.charAt(format.indexOf("y") + 3))
				);
				
	return new Date(year, month, day);
}
