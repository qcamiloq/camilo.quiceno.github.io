

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

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		 e.preventDefault();
		 var target = this.hash;
		 $target = $(target);
		 $('html, body').stop().animate({
		    'scrollTop':  $target.offset().top - 50//no need of parseInt here
		 }, 1000, 'swing', function () {
		    window.location.hash = target ;
		 });
	});
});	

$('.navbar li').click(function(e) {
	$('.navbar li.active').removeClass('active');
	var $this = $(this);
	if (!$this.hasClass('active')) {
		$this.addClass('active');
	}
	e.preventDefault();
});

$('.progressBarValue').mouseover(function(){
	$(this).css('background','#00838F');
})

$('.progressBarValue').mouseout(function(){
	$(this).css('background','#616365');
})

$('th').mouseover(function(){
	$('th').css('background','#00838F');
})

$('th').mouseout(function(){
	$('th').css('background','#BDBDBD');
})

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1100);      
            }
            
        }); 
    
    });
    
});

