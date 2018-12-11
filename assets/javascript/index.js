
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
$("#playButtonGoesHere").mousedown(function () {
    $(this).css("background-color", "rgba(37, 87, 129, 0.6)")
})

$("#playButtonGoesHere").mouseup(function () {
    $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
})

$("#playButtonGoesHere").hover(function () {
    $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
}, function () {
    $(this).css("background-color", "rgba(0, 0, 0, 0)")
})



// audio ---------------------------------------------

$(document).ready(function () {

    $("#playButtonGoesHere").html("<img src='assets/images/blackPlayButton.svg' alt='PlayButton' class='Buttons canplay canpause' Title='Play' id='Play'></img>")
    $("#Play").src = "assets/images/blackPlayButton.svg"
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/javascript/Title.mp3');

 audioElement.addEventListener('ended', function () {
            a = 0;
            $("#playButtonGoesHere").html("<img src='assets/images/blackPlayButton.svg' alt='PlayButton' class='Buttons canplay canpause' Title='Play' id='Play'></img>")
            },false);
    // audioElement.addEventListener('ended', function () {
    //     this.play();
    // }, false);  
   
    var a = 0; 
    
    if (audioElement.currentTime = 0) {
                
                audioElement.pause();
            }
    $('#playButtonGoesHere').click(function () {
        if (a === 1) {
            audioElement.pause();
            a = 0;
            $("#playButtonGoesHere").html("<img src='assets/images/blackPlayButton.svg' alt='PlayButton' class='Buttons canplay canpause' Title='Play' id='Play'></img>")
         
        }
        else {
            audioElement.play();
            a = 1;
            $("#playButtonGoesHere").html("<img src='assets/images/pauseButton.svg' alt='PlayButton' class='Buttons canplay canpause' Title='Play' id='Play'></img>")

        } 
       
    });

    $("span").hover(function(){
        $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
    }, function(){
        $(this).css("background-color", "white")
    })

    $("span").mousedown(function () {
        $(this).css("background-color", "rgba(37, 87, 129, 0.6)")
    })
    
    $("span").mouseup(function () {
        $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
    })
});



var word= ""

// Code for getting value of span tags
$("span").mousedown(function () {
    console.log($(this).text())
word=$(this).text()

say(word)
})


// making span tags









//model for the questionMark

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("questionMark");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function say(m){ 	var msg = new SpeechSynthesisUtterance(); 	var voices = window.speechSynthesis.getVoices(); 	msg.voice = voices[10]; 	msg.voiceURI = "native"; 	msg.volume = 1; 	msg.rate = 1; 	msg.pitch = 0.8; 	msg.text = m; 	msg.lang = 'en-US';   	speechSynthesis.speak(msg); }