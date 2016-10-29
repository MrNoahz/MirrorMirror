var Weather = {
	get: function(url) {
		var Httpreq = new XMLHttpRequest(); // a new request
		Httpreq.open("GET", url, false);
		Httpreq.send(null);
		return Httpreq.responseText;
	},
	getCoords: function() {
		var location = JSON.parse(this.get("http://ip-api.com/json"));
		this.getWeather(location.lat, location.lon);
	},
	getWeather: function(lat, long) {
		var apikey = "ed82bdfeb9e5b8e72a81416f6f4ac687";

		var weather = JSON.parse(this.get("https://api.forecast.io/forecast/" 
			    + apikey + "/" + lat + "," 
			    + long));

		//this.temperature = Math.floor(weather.currently.temperature);
		//this.summary     = weather.hourly.summary;
		this.changeText(Math.floor(weather.currently.temperature), weather.hourly.summary, weather.currently.precipIntensity * 10);
	},
	changeText: function(temp, summary, rainchance) {
		document.getElementById("temperature").innerHTML     = temp + "°";
		document.getElementById("weather_summary").innerHTML = summary;
	},
	init: function() {
		this.getCoords();
	}
};