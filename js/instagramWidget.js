var phInstagram = phInstagram || {}
    phInstagram.instagram = function(){
        phInstagram.runInstagramFeed();
    };

phInstagram.runInstagramFeed = function () {
    $.getScript('/js/instafeed.min.js', function () {
        if (Instafeed) {
            new Instafeed({
                get: 'tagged',
                tagName: 'avonph',
                clientId: 'b74a7734368849fabe400246441d36f6',
                limit: 8,
                sortBy: 'most-recent',
                template: '<a href="{{link}}" target="_blank" class="col-md-2 col-sm-2 col-xs-6"><img src="{{image}}" /></a>',
                resolution: 'low_resolution',
                success: function(feed){
                    var data = feed.data.reverse();
                    $('.placeholder').each(function(index, placeholder){
                        var model = data.pop();
                        $(placeholder).html(
                            '<div class="image-container" style="background-color: #000 !important">'
                            +'<a href="'+ model.link +'" target="_blank">'
                            + '<img src="'+ model.images.low_resolution.url +'" />' + '</a>'
                            +'<div class="image-overlay"></div>' + '</div>').hide().fadeIn();
                    });
                }
            }).run();
        }
    });
};

$(function(){
    phInstagram.instagram();
});