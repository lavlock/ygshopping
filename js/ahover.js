$(function(){
	$(".ahover a:first-child").mouseover(function(){
		$(this).css({"className":"clearfix","display":"block","height":"87px","color":"blue"})
		$(".ahover a b").css({"display":"block","color":"red"})
		$(".ahover a img").css({"display":"block","float":"right","left":"180px","top":"10px"})
	})	
	$(".ahover a:first-child").mouseout(function(){
		$(this).css()
	})
	
});