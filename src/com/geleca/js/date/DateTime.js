DateTime.convertMillisecondsToHours = function(milliseconds) {
	return Math.round(milliseconds / (60*60*1000));
}

DateTime.getNow = function() {
	return new DateTime();
}

function DateTime(date) {
	var _date = date;
	var self = this;
	
	if(!_date)
		_date = new Date();
		
	this.getDay = function() {
		return _date.getDate();
	};
	
	this.setDay = function(value) {
		_date.setDate(value);
	};
	
	this.getTime = function() { return _date.getTime(); };
	this.setTime = function(value) {
		_date.setTime(value);
	};
	
	this.getHours = function() { return _date.getHours(); };
	this.setHours = function(value) {
		_date.setHours(value);
	};
	
	this.getMonth = function() { return _date.getMonth(); };
	this.setMonth = function(value) {
		_date.setMonth(value);
	};
	
	this.getFullMonth = function() { return new Month(self.getMonth(), self.getYear()); };
	
	this.getYear = function() { return _date.getFullYear(); };
	this.setYear = function(value) {
		_date.setFullYear(value);
	};
	
	this.getFullYear = function() { return new Year(self.getYear()); };
	
	this.toString = function(format) {
		if(!format)
			format = "mm/dd/yyyy";
			
		return DateUtil.toString(_date, format);
	};
	
	this.toDate = function() {
		return _date;
	};
	
	return this;
}
