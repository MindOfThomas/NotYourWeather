var weather = {
	place: '',
	desc: '',
	code: null,
	temp: {
		cur: null
	},
	wind: {
		speed: null,
		degree: null
	},
	humidity: null
};
function startTheWeatherMachine(data) {
	try {
		weather.place = data.name;
		weather.desc = data.weather[0].description;
		weather.code = data.weather[0].id;
		weather.temp.cur = data.main.temp;
		weather.wind.speed = data.wind.speed;
		weather.wind.degree = data.wind.deg;
		weather.humidity = data.main.humidity;
	} catch(e) {
		weather.place = 'Placeholder, Oops';
		weather.desc = 'An error occured';
		weather.code = 500;
		weather.temp.cur = 40;
		weather.wind.speed = 5;
		weather.wind.degree = getRandomInRange(0, 10, 2);
		weather.humidity = 38;

	}

	updateInfo();
}

function updateInfo() {
	document.getElementById('gen-place').innerText = weather.place;
	document.getElementById('gen-warnplace').innerText = weather.place;

	var img = document.getElementById('gen-img');
	img.className = removeOldClass(img.className);
	img.className += ' wi-owm-' + weather.code;

	document.getElementById('gen-desc').innerText = makeATitle(weather.desc);

	var unit = unitType === 'imperial' ? 'F' : 'C';
	document.getElementById('gen-temp-cur').innerText = Math.floor(weather.temp.cur) + String.fromCharCode(176) + unit;

	unit = unitType === 'imperial' ? 'MPH' : 'KPH';
	document.getElementById('gen-wind-speed').innerText = Math.floor(weather.wind.speed) + unit;
	document.getElementById('gen-wind-degree').innerText = Math.floor(weather.wind.degree) + String.fromCharCode(176);

	document.getElementById('gen-humidity').innerText = weather.humidity + '%';

	document.getElementById('loading').style.display = 'none';
	document.getElementById('loaded').style.display = 'block';
}

function removeOldClass(classes) {
	classes = classes.split(' ');
	for(var i = 0; i < classes.length; i++) {
		if(classes[i].indexOf('wi-owm') > -1) {
			classes.splice(i, 1);
		}
	}
	return classes.join(' ');
}
