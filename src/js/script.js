new WOW().init();

//Мобильное меню
$('.page-header__open-nav').click(function() {
  $('.page-header__nav').toggleClass('page-header__nav--open');
  $('body').toggleClass('overflow-hidden');
  $('.mask').toggleClass('show');
});

$('.page-header__close-nav').click(function() {
  $('.page-header__nav').removeClass('page-header__nav--open');
  $('body').removeClass('overflow-hidden');
  $('.mask').removeClass('show');
});

$('.mask').click(function() {
  $('.page-header__nav').removeClass('page-header__nav--open');
  $('body').removeClass('overflow-hidden');
  $('.mask').removeClass('show');
});

$('.form-phone').mask('+7 (999) 999-99-99');
