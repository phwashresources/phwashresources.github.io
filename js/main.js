var phMain = phMain || {};
phMain.phMainFunction = function() {
    phMain.runInstagramWidget();
    phMain.runFacebookWidget();
    phMain.runTwitterWidget();
    phMain.stickyNavbar();
};

phMain.stickyNavbar = function(){
    $(".category-nav-container").sticky({topSpacing:50});
}

phMain.runInstagramWidget = function(){
    $.getScript('http://instagramfollowbutton.com/components/instagram/v2/js/ig-follow.js', function(d,t){
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        s.parentNode.insertBefore(g,s);
    }(document,"script"));
};

phMain.runFacebookWidget = function(){
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};

phMain.runTwitterWidget = function(){
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };
        return t;
    }(document, "script", "twitter-wjs"));
}

$(function(){
    phMain.phMainFunction();
});