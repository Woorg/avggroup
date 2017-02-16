import svg4everybody from 'svg4everybody';
import jQuery from 'jquery';
import 'slick-carousel';
import 'jquery.maskedinput/src/jquery.maskedinput';


(function () {

	jQuery(function ($) {

		svg4everybody();


		// fixed Header

		const header = $('.header');
		const hHeight = header.height();
		const hWrap = $('.header__w');

		$(window).on('scroll', function () {

			const sPos = $(window).scrollTop();

			if (sPos >= hHeight + 100) {
				header.addClass('header_scrolled');
				hWrap.addClass('header__w_scrolled');
			}else {
				header.removeClass('header_scrolled');
				hWrap.removeClass('header__w_scrolled');
			}
		});

		// animate to section


		const navLink = $('.nav__item a');

		navLink.on('click', function (e) {
			e.preventDefault();
			const sectionId = $(this).attr('href');
			const $id = $(sectionId);
			$('html, body').animate({
				scrollTop: $id.offset().top - 60
			}, 300);

		});

		const home = $('.logo');

		home.on('click', function (e) {
			e.preventDefault();
			const sectionId = $(this).attr('href');
			const $id = $(sectionId);
			$('html, body').animate({
				scrollTop: $id.offset().top - 60
			}, 300);

		});

		const callButton = $('.features__button, .call__button');

		callButton.on('click', function (e) {
			e.preventDefault();
			const sectionId = $(this).attr('href');
			const $id = $(sectionId);
			$('html, body').animate({
				scrollTop: $id.offset().top
			}, 300);

		});

		// hero Slider

		const $slider = $('.slider');

		$slider.slick({
			arrows: false
		});

		// brands carousel

		const $carousel = $('.manufacturer__list');

		$carousel.slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 240,
					settings: {
						slidesToShow: 1
					}
				}
			]

		});


		// phone maskedinput

		const inputPhone = $('.form__input_phone');
		inputPhone.mask('8 (999) 999-99-99');


		// menu toggler

		const $menuTrigger = $('.menu-trigger');
		const $menuList = $('.nav__list');
		$menuTrigger.click(function () {
			$menuList.toggleClass('nav_toggled');
		});

		$(window).resize(function () {
			let viewWidth = $(window).width();
			if (viewWidth > 1200) {
				$menuList.removeClass('nav_toggled');
			}
		});

	});

})();
