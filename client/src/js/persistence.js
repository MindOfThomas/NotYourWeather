var Persistence = function() {
	// From https://mathiasbynens.be/notes/localstorage-pattern
	var storage = (function() {
		var uid = new Date();
		var result;
		try {
			localStorage.setItem(uid, uid);
			result = localStorage.getItem(uid) == uid;
			localStorage.removeItem(uid);
			return result && localStorage;
		} catch (exception) {}
	}());

	var Persistence = {};

	Persistence.save = function(name, value) {
		if(storage) {
			switch(typeof value) {
				case 'object': {
					value = JSON.stringify(value);
					break;
				}
				case 'array': {
					value = JSON.stringify(value);
					break;
				}
				case 'number': {
					value = '$num$' + value;
					break;
				}
				case 'boolean': {
					value = '$bool$' + value;
					break;
				}
				case 'string': {
					value = '$str$' + value;
					break;
				}
				default: {
					value = value;
					break;
				}
			}
			storage.setItem(name, value);
			return true;
		} else {
			return false;
		}
	};
	Persistence.load = function(name) {
		if(storage) {
			var data = storage.getItem(name);
			if(data !== null) {
				if(data.match(/^\$num\$/) !== null) {
					data = parseInt(data.replace('$num$', ''));
				} else if (data.match(/^\$bool\$/) !== null) {
					data = data.indexOf('true') > -1;
				} else if (data.match(/^\$str\$/) !== null) {
					data = data.replace('$str$', '');
				} else {
					data = JSON.parse(data);
				}
				return data;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	return Persistence;
};