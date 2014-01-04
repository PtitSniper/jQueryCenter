jQuery.fn.center=function(){
		$(this).css({
			"position" : "fixed",
			"left":"50%",
			"top":"50%",
			"margin-left" : - $(this).width() / 2 + "px",
			"margin-top" :  - $(this).height() / 2 + "px"
		});
};
