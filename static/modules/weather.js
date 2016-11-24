var Weather = {
	icons: {},
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

		this.changeText(Math.floor(weather.currently.temperature),
						weather.hourly.summary, 
						weather.currently.precipIntensity * 10,
						this.icons["clear-day"]);//this.icons[weather.currently.icon]);
	},
	changeText: function(temp, summary, rainchance, icon) {
		document.getElementById("temperature").innerHTML     = temp + "°";
		document.getElementById("weather_summary").innerHTML = summary;
		document.getElementById("weather-icon").src = "/static/res/weather-icons/" + icon;
	},
	init: function() {
		this.icons["clear-day"] = "weather-clear.png";
		this.icons["clear-night"] = "weather-clear-night.png";
		this.icons["rain"] = "weather-rain-night.png";
		this.icons["snow"] = "weather-snow.png";
		this.icons["sleet"] = "weather-snow.png";
		this.icons["wind"] = "weather-wind.png";
		this.icons["fog"] = "weather-fog.png";
		this.icons["cloudy"] = "weather-clouds.png";
		this.icons["partly-cloudy-day"] = "weather-few-clouds.png";
		this.icons["partly-cloudy-night"] = "weather-few-clouds-night.png";

		this.getCoords();
	}
};