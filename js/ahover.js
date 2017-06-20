$(function(){
	$(".ahover a").mouseover(function(){
		$(this).css({"height":"88px","color":"black","border-top":"1px solid gray","border-bottom":" 1px solid gray","text-align":" left","position":" relative"});
		$(".ahover a b").css({"color": "red","display":" block","margin-left":" 30px","font-size": "15px","font-weight":" 800","float":" none"});
		$(".ahover a img").css({"display":"block","position":"absolute","left":"180px","top":"10px"})
	})	
	$(".ahover a:first-child").mouseout(function(){
		$(this).css()
		$(".ahover a img").css({"display":"none"})
	})
	
});
