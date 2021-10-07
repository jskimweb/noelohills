window.onload = function () {
	// 모달창 닫기
	const modal = $('.modal');
	const modalBox = $('.modal-box');
	const modalClose = $('.modal__close');

	modalClose.click(function () {
		modal.stop().fadeOut();
	});

	modal.click(function () {
		$(this).stop().fadeOut();
	});

	modalBox.click(function (event) {
		event.stopPropagation();
	});

	// 스크롤 시 Header 고정
	const header = $('.header');
	const headerScr = 'header--scroll';

	$(window).scroll(function () {
		let winScrTop = $(window).scrollTop();

		if (winScrTop > 0) {
			header.addClass(headerScr);
		} else {
			header.removeClass(headerScr);
		}
	});

	// 모바일 gnb 보이기/숨기기
	const mGnbBtn = $('.m-gnb-btn');
	const mGnb = $('.m-gnb');
	const mGnbClose = $('.m-gnb__close');
	const blackBg = $('.black-bg');

	mGnbBtn.click(function () {
		mGnb.show();
		blackBg.show();
		$('html, body').css('overflow', 'hidden');
	});
	mGnbClose.click(function () {
		mGnb.hide();
		blackBg.hide();
		$('html, body').removeAttr('style');
	});

	// 리사이징된 윈도우 크기에 따른 모바일 gnb 자동 숨기기
	$(window).resize(function () {
		if ($(window).outerWidth() > 1060) {
			mGnb.hide();
			blackBg.hide();
			$('html, body').removeAttr('style');
		}
	});

	// 모바일 gnb 서브메뉴 보이기/숨기기
	const mMainmenus = [$('.m-mainmenu01'), $('.m-mainmenu02'), $('.m-mainmenu03')];
	const mDep02s = [$('.m-mainmenu01+.m-dep02'), $('.m-mainmenu02+.m-dep02'), $('.m-mainmenu03+.m-dep02')];

	$.each(mMainmenus, function (index) {
		$(this).click(function () {
			$(this).toggleClass('m-mainmenu--active');
			mDep02s[index].toggleClass('m-dep02--show');
		})
	});

	// visual 슬라이드
	let sw_visual = new Swiper('.sw-visual', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.sw-visual__pg',
			clickable: true,
		},
	});

	// footer-info 보이기/숨기기
	const footerBtn = $('.footer__btn');
	const footerInfo = $('.footer-info');
	const footerInfoShow = 'footer-info--show';

	footerBtn.click(function () {
		footerInfo.toggleClass(footerInfoShow);
	});

	// Go-top
	const goTop = $('.go-top');
	const goTopShow = 'go-top--show';

	goTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		});
	});

	// 스크롤 위치에 따른 Go-top 보이기/숨기기
	$(window).scroll(function () {
		let winScrTop = $(window).scrollTop();

		if (winScrTop >= 450) {
			goTop.addClass(goTopShow);
		} else {
			goTop.removeClass(goTopShow);
		}
	});
}