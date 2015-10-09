var phHome = phHome || {};
phHome.phHomeFunction = function() {
    phHome.pageScroll();
    phHome.navbarScroll();
    phHome.videoButton();
};

phHome.videoButton = function(){
    var videoButton = $('#video-button');
    var videoContainer = $('#video-section .video-container');
    var videoMenuContainer = $('#video-section .video-container #video-menu-container');
    videoButton.on('click', function(){
        videoContainer.addClass('video-on-show');
        videoMenuContainer.css('display','none');
        videoContainer.append('<iframe src="https://player.vimeo.com/video/141763062?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"></iframe>');
    });
};

phHome.pageScroll = function(){
    $('.page-scroll a').on('click', function(e){
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1500, 'easeInOutExpo');
    });
};

phHome.navbarScroll = function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50 && $(document).width() >= 992) {
            $('nav').addClass('navbar-shrink');
        } else {
            $('nav').removeClass('navbar-shrink');
        }
    });
};

$(function(){
    phHome.phHomeFunction();
});