StringUtil = {};
StringUtil.replace = function(text, find, replacement) {
	while(text.indexOf(find) != -1)
		text = text.replace(find, replacement);
		
	return text;
};