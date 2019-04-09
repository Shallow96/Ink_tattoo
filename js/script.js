$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,

        responsive:{
            0:{
                items:1
            }
        }
    });
});

$(document).ready(function() {
    $('.has-animation').each(function() {
        $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
        });
    });
});





