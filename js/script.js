window.onload = function () {
	const header = $('.header');
	const headerScr = 'header--scroll';

	// visual slide
	new Swiper('.sw-visual', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.sw-visual__pg',
		},
	});

	// go-top
	const goTop = $('.go-top');
	const goTopShow = 'go-top--show';

	goTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		});
	});

	// scroll
	$(window).scroll(function () {
		let winScrTop = $(window).scrollTop();

		// header fix
		if (winScrTop > 0) {
			header.addClass(headerScr);
		} else {
			header.removeClass(headerScr);
		}

		// go-top show & hide
		if (winScrTop >= 450) {
			goTop.addClass(goTopShow);
		} else {
			goTop.removeClass(goTopShow);
		}
	});
}