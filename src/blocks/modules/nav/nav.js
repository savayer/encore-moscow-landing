$(document).on('click', '.menu a[href^="#"]', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
});

$('.nav__burger').click(function () {
    $(this).toggleClass('active')
    $('.nav__mobile_wrapper').toggleClass('active')
    if ($(this).hasClass('active')) {
        $('body').css({'overflow': 'hidden'})
    } else {
        $('body').css({'overflow': ''})
    }
})

$('.nav__mobile_wrapper').click(function () {
    $(this).removeClass('active')
    $('.nav__burger').removeClass('active')
    if ($(this).hasClass('active')) {
        $('body').css({'overflow': 'hidden'})
    } else {
        $('body').css({'overflow': ''})
    }
})