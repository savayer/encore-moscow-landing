import $ from 'jquery'
import 'slick-carousel'

$('.slider').slick({
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: '150px',
    prevArrow: '<a href="#" class="arrow arrow--left"><span class="w-icon-slider-left"></span></a>',
    nextArrow: '<a href="#" class="arrow arrow--right"><span class="w-icon-slider-right"></span></a>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerPadding: '50px'
            }
        },
        {
            breakpoint: 500,
            settings: {
                centerPadding: '20px'
            }
        }
    ]
})