var phw = phw || {};
phw.imageSlider = function() {
    phw.productImageSlider();
};

phw.productImageSlider = function(){
    phw.autoPlaySlider = $('.product-img-slider').lightSlider({
        item: 1,
        controls: true,
        speed: 2000,
        pause: 6000,
        auto: true,
        loop:true,
        enableDrag:false,
        responsive : [
            {
                breakpoint:992,
                settings: {
                    item:3,
                    enableDrag:true
                }
            },
            {
                breakpoint:800,
                settings: {
                    item:2,
                    enableDrag:true
                }
            },
            {
                breakpoint:767,
                settings: {
                    item:1,
                    enableDrag:true
                }
            }
        ]
    });
    $('.product-img-slider').on('mouseenter',function(){
        phw.autoPlaySlider.pause();
    });
    $('.product-img-slider').on('mouseleave',function(){
        phw.autoPlaySlider.play();
    });
};
//
//$(function(){
//    phw.imageSlider();
//});