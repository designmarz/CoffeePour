$(document).ready(function() {
  
var cp = $('#coffeePot');
console.log(cp);


// $('#coffeePot').click(function() {
//   $( this ).slideUp();
//   		console.log(this + " Clicked!");
// });

var tracker = 0;

cp.click(function() {
	
	if (tracker !== 0) {
	$(this).css('transform','rotate(0deg)')
	tracker -= 60;
	console.log(this + " Rotate +60deg "+ tracker);
} else	{
	$(this).css('transform','rotate(-60deg)')
	tracker += 60;
  	console.log(this + " Rotate -60deg "+ tracker);
  	}
});



});