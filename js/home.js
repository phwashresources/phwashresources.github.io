var phHome = phHome || {};
phHome.phHomeFunction = function() {
    phHome.pageScroll();
};

phHome.pageScroll = function(){
    $('.page-scroll a').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 75
            }, 1000);
        }

    });
};

$(function(){
    phHome.phHomeFunction();
});