console.log('\'Allo \'Allo!');

$(document).ready(function(){
    $('.o-slider1').slick({
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        swipe: false,
        dotsClass: '.dots',
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        cssEase: 'linear',

    });
});

$(document).ready(function(){
    $('.o-slider2').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        swipe: false,
        autoplaySpeed: 4000,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            }
        ]
    });
});

$('.o-slider2--buttons--prev').click(function(){
    $('.o-slider2').slick('slickPrev')
});

$('.o-slider2--buttons--next').click(function(){
    $('.o-slider2').slick('slickNext')
});

function navFunction() {
    let nav = document.getElementById('myTopnav');
    if (nav.className === 'c-header--nav') {
        nav.className += '--responsive';
    }
    else if($(window).width() < 870){
        nav.className = 'c-header--nav';
    }
    else {
        nav.className = 'c-header--nav';
    }
}

