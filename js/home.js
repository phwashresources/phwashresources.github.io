var phHome = phHome || {};
phHome.phHomeFunction = function() {
    phHome.pageScroll();
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

$(function(){
    phHome.phHomeFunction();
});