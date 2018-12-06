
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