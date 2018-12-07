
// $("#title").hover(function () {
//     $(this).attr("width", $(this).attr("width") * 3.5)
//     $(this).attr("height", $(this).attr("height") * 3.5)

// }, function () {
//     $(this).attr("width", $(this).attr("width") / 3.5)
//     $(this).attr("height", $(this).attr("height") / 3.5)
// })

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
    $("#Play").src="assets/images/blackPlayButton.svg"
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/javascript/Title.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    var a = 0;
$('#Play').click(function() {
   if(a===1) {
        audioElement.pause();
        a=0;
        $("#Play").src="";
        $("#Play").src="assets/images/blackPlayButton.svg";
        
    }
    else {
        audioElement.play();
        a=1;
        $("#Play").src="";
        $("#Play").src="assets/images/pauseButton.svg";

    }
});
});


// $("a#button").attr("class", "play");

// $("a#button").attr("class", "pause");