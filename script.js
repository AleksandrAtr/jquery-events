
//Cloned from CI github

/*

$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });

   //applies colour red to paragraphs when clicked on 
	$('p').click(function(){
     $('p').addClass('paraRed');
	})

	//will add lightblue to h2 elements
	$('h2').hover(function(){
		$('h2').addClass('headerBlue');
	   })

   $('h2').hover(function(){
	$(this).css('font-size','120%');
   })
   //applies colour black to body background when mouse enters over buttons
   $('.bottom_button')
   .on('mouseenter', function(){
	$('#container').css('backgroundColor','black');
   })
   .on('mouseleave', function(){
	$('#container').css('backgroundColor','grey');
   })
}); 

*/

// ================================
//Events in JQuery - Challenge 1
/*
$(document).ready(function() {
	$('p').click(function(){
		$('p').css('color','red');
	})

$('h2').hover(function() {
	$('h2').css('backgroundColor','lightblue')
})

$('.card-panel')
.on('mouseenter',function() {
	$('body').css('backgroundColor','black')
})
.on('mouseleave',function() {
	$('body').css('backgroundColor','#e1e2e2')
})
});

*/


// ================================
//JQuery Effects - Challenge 1 - hide()
/*
$('#card-panel-1').click(function() {
	$('#card-panel-1').hide('slow');
})
$('#card-panel-2').click(function() {
	$('#card-panel-1').hide('medium');
})
$('#card-panel-3').click(function() {
	$('#card-panel-1').hide('fast');
})
$('#card-panel-4').click(function() {
	$('#card-panel-1').hide(30000);
})
*/

// ================================
//JQuery Effects - Challenge 2 - JQuery toggle() method.

/*
$('#button-card-1').click(function() {
	$('#par-1').toggle('slow');
})
$('#button-card-2').click(function() {
	$('#par-2').toggle('medium');
})
$('#button-card-3').click(function() {
	$('#par-3').toggle('fast');
})
$('#button-card-4').click(function() {
	$('#par-4').toggle();
})
*/

// ================================
//JQuery Effects - Challenge 3 - JQuery slideToggle() method.

/*
$('#button-card-1').click(function() {
	$('#par-1').slideToggle (750);
})
$('#button-card-2').click(function() {
	$('#par-2').slideToggle (1000);
})
$('#button-card-3').click(function() {
	$('#par-3').slideToggle();
})

*/

// ================================
//JQuery Effects - Challenge 4 - JQuery fadeTo() method.

/*

$('#button-card-1').mouseenter(function() {
	$('#par-1').fadeTo(200,0.5);
})
$('#button-card-1').mouseleave(function() {
	$('#par-1').fadeTo(200,1);
})
$('#button-card-2').mouseenter(function() {
	$('#par-2').fadeTo(1000,0.5);
})
$('#button-card-2').mouseleave(function() {
	$('#par-2').fadeTo(1000,1);
})

*/

// ================================
//Welcome to your JQuery Method Chaining - Challenge 1
/*
$('#button-card-1').mouseenter(function() {
	$('button')
		.removeClass('make-red')
		.removeClass('make-border');
})

$('#button-card-1').mouseleave(function() {
	$('button')
		.removeClass('make-border')
		.removeClass('make-red');
})
*/

// ================================
//Welcome to your JQuery Method Chaining - Challenge 2
// Chain the methods hide() and show() within the first click event handler
// Chain the methods fadeOut() fadeIn() within the second click event handler

$('#button-card-1').click(function() {
	$('#par-1').hide(2000).show(2000);
})
$('#button-card-2').click(function() {
	$('#par-2').fadeOut(1000).fadeIn(1000);
})