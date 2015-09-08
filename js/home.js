var phHome = phHome || {};
phHome.phHomeFunction = function() {
    phHome.pageScroll();
    phHome.navbarScroll();
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