

$(document).ready(function(){
	var window_height = $(window).height(); 
	var window_width = $(window).width(); 
	$('.parallax').css('height',window_height);
	$('.parallax').css('width',window_width);
	

});

$(window).resize(function(){
	var window_height = $(window).height(); 
	var window_width = $(window).width(); 
	$('.parallax').css('height',window_height);
	$('.parallax').css('width',window_width);
	
});

