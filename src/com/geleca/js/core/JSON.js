JSON = {};
JSON.parse = function(json) {
	return eval('(' + json + ')');
};