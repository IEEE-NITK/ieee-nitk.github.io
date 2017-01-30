$(document).ready(function(){
	console.log("this was called for");
	$("#event_list li").mouseenter(function(event){
		$(".event_details h3").html(event.target.id);
	}).click(function(event){
		console.log(event.target.id);
		$(".box_left").animate({
				"padding":"0px",
				"width":"10%"
			},
			{
				duration : 400, 
				queue : false
			});
		$(".box_middle").animate({"width":"40%","padding":"0px"},{duration:400,queue:false});
		$(".box_left .text2").css({"transform":"rotate(-90deg)"},{duration:400,queue:false});
		$(".box_left .event_details").css({"display":"none"});

	});
});