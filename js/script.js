function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

$(document).ready(function () {
	/*Меню бургер*/
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

/*Меню*/
var sections = $('section')
	, nav = $('nav')
	, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop();

	sections.each(function () {
		var top = $(this).offset().top - nav_height - 100,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('header__link_active');
			sections.removeClass('section_active');

			$(this).addClass('section_active');
			nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('header__link_active');
		}
	});
});

nav.find('a').on('click', function () {
	var $el = $(this)
		, id = $el.attr('href');

	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
	}, 500);

	return false;
});
/*Меню*/

/*Добавление фона шапке при скролле*/
$(window).scroll(function () {

	if ($(this).scrollTop() > 1) {

		$('header').addClass("header_bg");

	} else {

		$('header').removeClass("header_bg");
	}

});

$(document).ready(function () {
	/*Кнопка вызова модального окна*/
	$('.popup-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeIn()
	});
	/*Кнопка закрытия модального окна*/
	$('.popup__close').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});
});