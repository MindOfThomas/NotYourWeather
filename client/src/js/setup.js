function listenersAssemble() {
	var locationButton = document.getElementById('location-button');
	var imperialRadio = document.getElementById('unit-imperial');
	var metricRadio = document.getElementById('unit-metric');
	listenToMe(locationButton, 'click', getLocation);
	listenToMe(imperialRadio, 'change', function(evt) {
		unitType = evt.target.value;
	});
	listenToMe(metricRadio, 'change', function(evt) {
		unitType = evt.target.value;
	});
}
function listenToMe(element, evt, func) {
	if(element.addEventListener) {
		element.addEventListener(evt, func);
	} else if(element.attachElement) {
		element.attachElement('on' + evt, func);
	}
}