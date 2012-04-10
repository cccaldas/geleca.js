function Year(year) {
	var _date 	= new Date();
	this.months = [];
	
	_date.setFullYear(year);
	
	for (var i = 0; i < 12; i++)
		this.months.push(new Month(i, year));
	
	return this;
}
