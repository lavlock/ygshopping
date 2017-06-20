$(document).ready(function() {
	$(".area").hover(function() {
		$(this).find(".zindex").show(100);
	}, function() {
		$(this).find(".zindex").hide(100);
		});
	});
