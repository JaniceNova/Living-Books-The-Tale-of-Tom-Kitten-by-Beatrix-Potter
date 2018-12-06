
$("#title").hover(function(){
    $(this).attr("width", $(this).attr("width") * 3.5 )
    $(this).attr("height", $(this).attr("height") * 3.5 )

}, function(){
    $(this).attr("width", $(this).attr("width") / 3.5)
    $(this).attr("height", $(this).attr("height") / 3.5 )
})
