var phPhats = phPhats || {};
phPhats.phPhatsFunction = function() {
    phPhats.productImageSlider();
};

phPhats.productImageSlider = function(){
    var autoPlaySlider = $('#product-img-slider').lightSlider({
        item: 5,
        controls: true,
        speed: 2000,
        pause: 4000,
        auto: true,
        loop:true,
        enableDrag:false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:4,
                    enableDrag:true
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,

                }
            }
        ]
    });
    $('#product-img-slider').on('mouseenter',function(){
        autoPlaySlider.pause();
    });
    $('#product-img-slider').on('mouseleave',function(){
        autoPlaySlider.play();
    });
};


$(function(){
    phPhats.phPhatsFunction();
})