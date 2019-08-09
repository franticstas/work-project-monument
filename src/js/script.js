
new WOW().init();

//Модальное окно
$('.order-slide__link').click(function() {
  $('.modal-block').toggleClass('show');
  $('.mask').toggleClass('show');
});
$('.modal-block__button--close').click(function() {
  $('.modal-block').removeClass('show');
  $('.mask').removeClass('show');
});

//Мобильное меню
$('.nav__button--open').click(function() {
  $('.header__nav').toggleClass('header__nav--open');
  $('.mask').toggleClass('show');
});

$('.nav__button--close').click(function() {
  $('.header__nav').removeClass('header__nav--open');
  $('.mask').removeClass('show');
});

$('.mask').click(function() {
  $('.header__nav').removeClass('header__nav--open');
  $('.mask').removeClass('show');
  $('.modal-block').removeClass('show');
});

//Открытие меню второго уровня без перехода по ссылке
$('nav ul li > a').on('click', function(e) {
  var li = $(this).closest('li');
  if (li.find('.subs__list').length) {
    if (!li.hasClass('active')) {
      e.preventDefault();
    }
    li.toggleClass('active');
  }
});
$(document).mouseup(function(e) {
  var div = $('nav ul li.active');
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.removeClass('active');
  }
});

//Блок слайда для заказов
$('.order-slide__wrap').slick({
  infinite: true,
  dots: true,
  dotsClass: 'order-slide__dots',
  prevArrow: '.order-slide__arrow-prew',
  nextArrow: '.order-slide__arrow-next',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false
      }
    }
  ]
});

//Блок слайда услуг
$('.services-slide__wrap').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.services-slide__arrow-prew',
  nextArrow: '.services-slide__arrow-next',
  responsive: [
    {
      breakpoint: 960,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
     }
  ]
});

//Блок слайда услуг
$('.stocks-slide__wrap').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.stocks-slide__arrow-prew',
  nextArrow: '.stocks-slide__arrow-next',
  responsive: [
    {
      breakpoint: 960,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Блок слайда услуг
$('.reviews__slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.reviews-slide__arrow-prew',
  nextArrow: '.reviews-slide__arrow-next'
});

