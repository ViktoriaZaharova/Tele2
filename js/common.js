$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeOut();
});

$('.autopayment-settings-toggle').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active').parents().find('.block-hidden').fadeToggle();
});

// активная ссылка меню
$('.menu li a').each(function () {
	var location = window.location.href;
	var link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// end