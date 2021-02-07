var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide([
    '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
    '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
});
document.querySelector('.prepend-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
});
document.querySelector('.append-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
});
document.querySelector('.append-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.appendSlide([
    '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
    '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
});
