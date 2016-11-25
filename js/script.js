

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