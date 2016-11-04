$(document).ready(function() {

var header = $('body');

var backgrounds = new Array(
   'url(Images/VMware.png)'
);

var current = 0;

$('#home').click(function(){
$(document).scrollTop(1050) // any value you need
});

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 5000);

// $(".hover").hover(function(){
//     $(this).css("background-color", "black");

// });

header.css('background-image', backgrounds[0]);

	$(".mobile-menu").click(function(event) {
		event.preventDefault();

			    if( $(this).next('.clear').is(':visible') === true){
        			$(this).next('.clear').slideUp();
    			}else{
        			$(this).next('.clear').slideDown();
        			$(".mobile-menu").hide();
    			}
    			
	})

})