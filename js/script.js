//make board
for(var i = 0; i < 16; i++){
	$("#board").append("<div class='row myRow'>");
	for(var x = 0; x < 16; x++){
		$("#board").append("<div class='box'></div>");
	}
	$("#board").append("</div>");
}

//colors blue on hover
$(".box").hover(function(){
	$(this).addClass("blue");
});

//resets board
$("#restart").click(function(){
	$(".box").removeClass("blue");
});