$(function() {

	$('.header-carousel').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		// autoHeight: true,
		// autoWidth: true,
		smartSpeed: 700,
		onInitialized  : counter,
		onTranslated : counter
	});
	function counter(event) {
		var element   = event.target;         
    var items     = event.item.count;     
    var item      = event.item.index + 1;   
    $('.header-carousel-counter').text(item + '/' + items);
	};
	


	$('.header-carousel-gallery').owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		dots: true,
		// autoHeight: true,
		// loop: true,
		// smartSpeed: 700
	});
	
	// Create Thumbs
	var imgUrl = [];
	$.each($('.header-carousel-gallery .owl-item img'), function(i) {
		var ths = $(this),
				galleryDot = $('.header-carousel-gallery .owl-dot');
		imgUrl[i] = '/' + ths.attr('src'),
				
		galleryDot.css('background-image', 'url(' + imgUrl + ')');			
	});
	$.each($('.header-carousel-gallery .owl-dot'), function(i) {
		var ths = $(this);
		ths.css('background-image', 'url(' + imgUrl[i] + ')');
	});
	// Create Thumbs END

	$('.header-carousel-item-about').owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		dots: true,
		loop: false
		// autoHeight: true,
	});
	
	$('.s-team-carousel').owlCarousel({
		items: 4,
		smartSpeed: 700,
		dots: false,
		nav: false,
		loop: false,
		responsive: {
			0 : {
				items: 1
			},
			380 : {
				items: 2
			},
			600 : {
				items: 3
			},
			800 : {
				items: 4
			}
		}
	});

});
