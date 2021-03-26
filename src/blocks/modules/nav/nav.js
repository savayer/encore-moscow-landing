$(document).on('click', '.menu a[href^="#"]', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
});

$('.nav__burger').click(function () {
    $(this).toggleClass('active')
})