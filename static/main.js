Clock.init();
Weather.init();

$('#black-overlay').addClass('transparent');
var startupSound = document.getElementById("startupSound").play();

if(startupSound !== undefined) {
	playPromise.then(function() {

	}).catch(function(error) {

	});
}