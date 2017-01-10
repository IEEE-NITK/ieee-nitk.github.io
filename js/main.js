

var phrases = ["LEARN","TEACH","CREATE"];
var phraseTimer;
var index = 0, pos = 0;
var sigs;

function phraseShow(){
	$("#text_effect").html('');
	pos = 0;
	for(pos=0;pos<phrases[index].length;pos++){
		$("<span/>",{
			"class" : "effect_char",
			"style" : "animation-delay:"+pos*0.2+"s",
			"html"  : phrases[index].charAt(pos)
		}).appendTo("#text_effect");
	}
	index++;
	index = index%3;		
}

$(document).ready(function(){

	$("#fullpage").fullpage({
		anchors: ['home', 'about_us', 'sigs','events','team','projects'],
		menu : "#menu",
		css3 : true,
		afterLoad : function(anchorLink,index){
		}
	});
	phraseShow();
	phraseTimer = setInterval(phraseShow, 3000);


});
function popup(){
		$(".full_screen_menu").slideToggle();
}