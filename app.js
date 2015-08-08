$(document).ready(function() {
  
var cp = $('#coffeePot');
console.log(cp);

//  c=document.getElementById("myCanvas");
//  ctx=c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(20,70);
// ctx.bezierCurveTo(100,20,150,100,200,20);
// ctx.stroke();





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