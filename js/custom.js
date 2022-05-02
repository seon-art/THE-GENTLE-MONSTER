$(document).ready(function(){	
	$(".tabs li").click(function(){
		var tab_id = $(this).attr("data-tab");

		$(".tabs li").removeClass("current");
		$(".tab-content").removeClass("current");
		
		$(this).addClass("current");
		$("#"+tab_id).addClass("current");
	});
	
	

	//login modal
	$(".m_log").on("click",function(){
		var aa = $(this).attr("src")
		$(".log_modal").attr("src",aa)
		$(".box_log").fadeIn();
		});
		$(".log>.close").on("click",function(){
			$(".box_log").fadeOut();
		});

		$(".m_log").on("click",function(){
		var aa = $(this).attr("src")
		$(".log_modal").attr("src",aa)
		$(".box_log").fadeIn();
		});
		$(".close").on("click",function(){
			$(".box_log").fadeOut();
		});

		$(".m_search").on("click",function(){
		var aa = $(this).attr("src")
		$(".search_modal").attr("src",aa)
		$(".box_search").fadeIn();
		});
		$(".search_close").on("click",function(){
			$(".box_search").fadeOut();
	});

	//hamberger
	$(".quick").click(function()    {
		if($(".burger").hasClass('on')){
		  $(".burger").removeClass('on');
		  $(".qmenu").removeClass('on');
		 
		} else{
		  $(".burger").addClass('on');
		 $(".qmenu").addClass('on'); 
		}
	  });

		
	
});