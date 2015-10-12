var phPhats = phPhats || {};
phPhats.phPhatsFunction = function() {
    phPhats.productImageSlider();
    phPhats.videoButton();
};

phPhats.videoButton = function(){
    var videoButton = $('#video-button');
    var videoContainer = $('#video-section .video-container');
    var videoMenuContainer = $('#video-section .video-container #video-menu-container');
    videoButton.on('click', function(){
        videoContainer.addClass('video-on-show');
        videoMenuContainer.css('display','none');
        videoContainer.append('<iframe src="https://player.vimeo.com/video/141763062?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"></iframe>');
    });
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
                breakpoint:1200,
                settings: {
                    item:4
                }
            },
            {
                breakpoint:991,
                settings: {
                    item:3,
                    enableDrag:true
                }
            },
            {
                breakpoint:767,
                settings: {
                    item:2,

                }
            },
            {
                breakpoint:520,
                settings: {
                    item:1,

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