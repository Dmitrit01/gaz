$(document).ready(function() {
    //Бургер
    $('.menu__burger').click(function() {
        $('.menu__burger,.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //Слайдер
   $('.slider').slick({
        slidesToShow: 1,
        responsive:[
            {
                breakpoint:991,
                settings:{
                    arrows:false,
                    dots:true,
                }
            }
        ]


        
 });





});