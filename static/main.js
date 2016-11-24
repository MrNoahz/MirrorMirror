Clock.init();
Weather.init();

$('#black-overlay').addClass('transparent');
var startupSound = document.getElementById("startupSound").play();

if(startupSound !== undefined) {
	startupSound.then(function() {
	}).catch(function(error) {
	});
}