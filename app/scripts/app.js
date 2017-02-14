import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();


	// fixed Header

	let header = $('.header');
	let hHeight = header.height();
	let hWrap = $('.header__w');

	$(window).on('scroll', function () {

		let sPos = $(window).scrollTop();

		if (sPos >= hHeight) {
			header.addClass('header_scrolled');
			hWrap.addClass('header__w_scrolled');
		}else {
			header.removeClass('header_scrolled');
			hWrap.removeClass('header__w_scrolled');
		}
	});

	// animate to section


	let navLink = $('.nav__link');

	navLink.on('click', function (e) {
		e.preventDefault();
		let sectionId = $(this).attr('href');
		let $id = $(sectionId);
		$('html, body').animate({
			scrollTop: $id.offset().top - 60
		}, 300);

	});

	let home = $('.logo');

	home.on('click', function (e) {
		e.preventDefault();
		let sectionId = $(this).attr('href');
		let $id = $(sectionId);
		$('html, body').animate({
			scrollTop: $id.offset().top - 60
		}, 300);

	});

});
