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

$('.products-block__item a').click(function(){
  const imgLink = $(this).parent().find('img').attr('src');//Копируем адрес фото
  const productName = $(this).parent().find('.products-block__name').text();//Копируем название
  const productText = $(this).parent().find('.products-block__description').text();//Копируем описание

  $('.modal__product-img img').attr('src', '');
  $('.modal__product-img img').attr('src', imgLink);//Вставляем адрес фото в модалку
  $('.modal__product .title-section').text(productName); //Вставляем название продукта в модалку
  $('.modal__product .modal__product-text').text(productText); //Вставляем описание продукта в модалку
  $('.modal__input-product-name').val(productName);

  $(".modal__product .modal__product-table").empty(); //Очищаем блок с таблицей
  $(this).parent().find('.products-block__specifications')
    .clone().appendTo(".modal__product .modal__product-table"); //Компируем таблицу и продукта
});
