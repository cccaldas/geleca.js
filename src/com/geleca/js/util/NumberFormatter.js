NumberFormatter = {};
NumberFormatter.addLeadingZero = function(number) {
	if(number < 10)
		return "0" + String(number);
		
	return number.toString();
};