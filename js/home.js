$(document).ready(function(){
    videoPlayer = document.getElementById("video-sample");
    video_count = 0;
});
function videoChange(){
    var videoSources = [
        'http://d2434a0nr1d7t1.cloudfront.net/p/D42_7_073/D42_7_073_detail.mp4',
        'http://ak8.picdn.net/shutterstock/videos/6078290/preview/stock-footage-coron-philippines-february-unidentified-people-buying-and-selling-fresh-fish-and.mp4',
        'http://ak4.picdn.net/shutterstock/videos/6081911/preview/stock-footage-coron-philippines-february-unidentified-people-buying-and-selling-fresh-fish-on-the.mp4',
        'http://ak9.picdn.net/shutterstock/videos/5637488/preview/stock-footage-fresh-fishes-form-andaman-sea.mp4'
    ];
    if (video_count == videoSources.length)
        video_count = 0;

    videoPlayer.src = videoSources[video_count];
    videoPlayer.play();
    video_count++;
}
