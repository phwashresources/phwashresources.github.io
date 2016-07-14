var phInstagram = phInstagram || {}
    phInstagram.instagram = function(){
        phInstagram.runInstagramFeed();
    };

phInstagram.runInstagramFeed = function () {
    $.getScript('/js/instafeed.min.js', function () {
        if (Instafeed) {
            new Instafeed({
                get: 'user',
                clientId: '939773e2d8e94fe2a31940e250d74266',
                limit: 8,
                sortBy: 'most-recent',
                template: '<a href="{{link}}" target="_blank" class="col-md-2 col-sm-2 col-xs-6"><img src="{{image}}" /></a>',
                resolution: 'low_resolution',
                success: function(feed){
                    var data = feed.data.reverse();
                    $('.placeholder').each(function(index, placeholder){
                        var model = data.pop();
                        $(placeholder).html(
                            '<a href="'+ model.link +'" target="_blank">'
                            +'<div class="image-container" style="background-color: #000 !important">'
                            + '<img src="'+ model.images.low_resolution.url +'" />'
                            +'<div class="image-overlay"></div>' + '</div>'
                            + '</a>').hide().fadeIn();
                    });
                }
            }).run();
        }
    });
};

$(function(){
    phInstagram.instagram();
});