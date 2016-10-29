function clock() {
	var today = new Date();

	var hours = today.getHours();
	var minutes = today.getMinutes();

	hours = hours % 12;
	hours = hours ? hours : 12;
	//hours = (hours < 10 ? "0" : "") + hours
	minutes = (minutes < 10 ? "0" : "") + minutes; //Append 0 if less than 10

	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

	document.getElementById("time").innerHTML = (hours + ":" + minutes);
	document.getElementById("dayofweek").innerHTML = days[today.getDay()];
	document.getElementById("date").innerHTML = months[today.getMonth()] + " " + today.getMonth();
}

setInterval('clock()', 1000);