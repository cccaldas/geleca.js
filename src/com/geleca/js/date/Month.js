Month.JANUARY 	= 0;
Month.FEBRUARY 	= 1;
Month.MARCH 	= 2;
Month.APRIL 	= 3;
Month.MAY 		= 4;
Month.JUNE 		= 5;
Month.JULY 		= 6;
Month.AUGUST 	= 7;
Month.SEPTEMBER = 8;
Month.OCTOBER 	= 9;
Month.NOVEMBER 	= 10;
Month.DECEMBER 	= 11;

function Month(month, year) {
	var _month = month;
	var _year = year;
	var _date = new Date();
	var _days = 1;
	var _month_names = {};
	
	_date.setMonth(month);
	_date.setFullYear(year);
	
	_date.setDate(1);
	
	while(_date.getMonth() == _month) {
		_date.setDate(_days);
		_days ++;	
	}
	
	_days -= 2;
	
	_date.setMonth(_month);
	_date.setDate(1);
	_date.setFullYear(_year);
	
	_month_names[LangEnum.PT_BR] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	_month_names[LangEnum.EN_US] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	this.getName = function(lang) {
		if(!lang)
			lang = LangEnum.PT_BR;
			
		return _month_names[lang][_month];
	};
	
	this.getMonth = function() {
		return _month;
	};
	
	this.getDays = function() {
		return _days;
	};
	
	return this;
	
}
