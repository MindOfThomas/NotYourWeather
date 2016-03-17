var http = new XMLHttpRequest();
function fireOffRequest(url) {
	requests++;
	document.getElementById('loaded').style.display = 'none';
	document.getElementById('loading').style.display = 'block';

	http.onreadystatechange = function() {
	    if (http.readyState == 4 && http.status === 200) {
	    	document.getElementById('limit-warning').style.display = 'none';
	        startTheWeatherMachine(JSON.parse(http.responseText));
	    } else if (http.readyState == 4 && http.status === 510) {
	        document.getElementById('limit-error').style.display = 'block';
	    }
	};
	http.open("GET", url, true);
	http.send();
}