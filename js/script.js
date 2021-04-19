$(document).ready(function(){
    $('.carousel__inner').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    fade: true,
                    cssEase: 'linear'
                }
            }
        ]
    });
