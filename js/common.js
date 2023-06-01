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