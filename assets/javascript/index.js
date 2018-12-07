
$("#title").hover(function () {
    $(this).attr("width", $(this).attr("width") * 3.5)
    $(this).attr("height", $(this).attr("height") * 3.5)

}, function () {
    $(this).attr("width", $(this).attr("width") / 3.5)
    $(this).attr("height", $(this).attr("height") / 3.5)
})

// button magic --------------
$(".Buttons").mousedown(function () {
    $(this).css("background-color", "rgba(37, 87, 129, 0.6)")
})

$(".Buttons").mouseup(function () {
    $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
})

$(".Buttons").hover(function () {
    $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
}, function () {
    $(this).css("background-color", "rgba(0, 0, 0, 0)")
})



// audio ---------------------------------------------

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/javascript/Title.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    // audioElement.addEventListener("canplay",function(){
    //     $("#length").text("Duration:" + audioElement.duration + " seconds");
    //     $("#source").text("Source:" + audioElement.src);
    //     $("#status").text("Status: Ready to play").css("color","green");
    // });
    
    // audioElement.addEventListener("timeupdate",function(){
    //     $("#currentTime").text("Current second:" + audioElement.currentTime);
    // });
    
    $('#Play').click(function() {

    if()
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    // $('#pause').click(function() {
    //     audioElement.pause();
    //     $("#status").text("Status: Paused");
    // });
    
    // $('#restart').click(function() {
    //     audioElement.currentTime = 0;
    // });
});