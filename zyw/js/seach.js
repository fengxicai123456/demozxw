$(function(){
	var i =1;
	$(".list-big").on("touchstart",function(){
		i++
		if(i%2 ==0){
			$("p.yk-list").css("display","none")
			$(this).children("i").html("&#xe501;")	
		}else{
			$("p.yk-list").css("display","block")
			$(this).children("i").html("&#xe656;")	
		}
		
	})
	
})
