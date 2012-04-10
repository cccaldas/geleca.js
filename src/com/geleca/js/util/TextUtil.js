TextUtil = {};
TextUtil.replaceSpecialCaracters = function(text) {
	text = StringUtil.replace(text, "ç", "c");
	text = StringUtil.replace(text, "ã", "a");
	text = StringUtil.replace(text, "á", "a");
	text = StringUtil.replace(text, "à", "a");
	text = StringUtil.replace(text, "â", "a");
	text = StringUtil.replace(text, "ä", "a");
	
	text = StringUtil.replace(text, "é", "e");
	text = StringUtil.replace(text, "è", "e");
	text = StringUtil.replace(text, "ê", "e");
	
	text = StringUtil.replace(text, "í", "i");
	text = StringUtil.replace(text, "ì", "i");
	text = StringUtil.replace(text, "î", "i");
	
	text = StringUtil.replace(text, "ó", "o");
	text = StringUtil.replace(text, "ò", "o");
	text = StringUtil.replace(text, "õ", "o");
	text = StringUtil.replace(text, "ô", "o");
	
	text = StringUtil.replace(text, "ú", "u");
	text = StringUtil.replace(text, "ù", "u");
	text = StringUtil.replace(text, "û", "u");
	
	return text;
};

TextUtil.removeWhiteSpaces = function(text, replacement) {
	if(replacement == "") 
		return StringUtil.replace(text, " ", "");
	else 
		return StringUtil.replace(text, " ", replacement);	
};

TextUtil.formatURL = function(text) {
	text = TextUtil.replaceSpecialCaracters(text);
	text = TextUtil.removeWhiteSpaces(text,"-");
	
	return text.toLowerCase();
};