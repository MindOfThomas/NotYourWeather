var autocomplete = new google.maps.places.Autocomplete(locationInput, {types: ['geocode']});
autocomplete.addListener('place_changed', getLocation);

function getLocation() {
	if(requests >= 5) {
		document.getElementById('limit-warning').style.display = 'block';
	}
	if(locationInput.value.toLowerCase() !== 'whatever' && requests < 5) {
		document.getElementById('limit-warning').style.display = 'none';
		var place = autocomplete.getPlace();
		var latitude = getRandomInRange(-90, 90, 6);
		var longitude = getRandomInRange(-180, 180, 6);
		var tempUrl = baseUrl + unitType + '&lat=' + latitude + '&lon=' + longitude;
		fireOffRequest(tempUrl);
	} else if(locationInput.value.toLowerCase() === 'whatever') {
		// Do somethin' special for the little guy
	}
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}