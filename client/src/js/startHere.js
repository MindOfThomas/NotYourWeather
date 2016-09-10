var requests = 0;
var locationInput = document.getElementById('location-input');
var unitType = document.getElementById('unit-imperial');
	unitType = unitType.checked ? 'imperial' : 'metric';

listenersAssemble();

function makeATitle(str) {
	str = str.split(' ');
	for(var i = 0; i < str.length; i++) {
		var c = str[i].charAt(0).toUpperCase();
		str[i] = c + str[i].substr(1);
	}
	return str.join(' ');;
}


function adBlockDetected() {
	document.getElementById('dff').style.display = 'block';
}

if(typeof blockAdBlock === 'undefined') {
	adBlockDetected();
} else {
	blockAdBlock.onDetected(adBlockDetected);
}