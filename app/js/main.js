;
(function ($) {
	$(document).ready(function () {


		$('a[href*=#]').bind("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});


		//Make elements equal height
		$('.matchHeight').matchHeight();


		var $slider = $('.home_slider');

		$slider.slick({
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
			prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
			slide: '.slide'
		});
	});
}(jQuery));
