var flag=true;
$('.serviceone .test').on('touchstart',function(){
	if(flag){
	$(this).children('.m-jiantou').css('transform','rotateZ(90deg)')
	$(".test").children('em').css("display","none");
	$(this).children('.dew').css("display","block");
	if($(this).html()==$('.serviceone .test1').html()){		
		$(".de").css("display","block");		
	}
	flag=!flag;
	}else{
	$(this).children('.m-jiantou').css('transform','rotateZ(0deg)')	
		$(this).children('.dew').css("display","none");
	flag=!flag;
	} 
});
$(".de .deri").on('touchstart',function(){
$(".de").css("display","none");
});

$('.servicetwo .test').on('touchstart',function(){	
if(flag){ 
	$(this).children('.m-jiantou').css('transform','rotateZ(90deg)')
	$(this).children(".ta").css("display","block");
flag=!flag;	
}else{	
flag=!flag;	
$(this).children('.m-jiantou').css('transform','rotateZ(0deg)')
}
});
$('.servicetwo .test .ta3').on('touchstart',function(){	
$(".ta").css("display","none");
});


	window.onload = function(){
		var zxyUser  = localStorage.getItem("userName");
		if(zxyUser){
			$(".out").html("退出登录");
		$('.out').on('touchend',function(){
   			localStorage.removeItem("userName")
   			$(".out").html("请登入");
   		})
		}else{
		$(".out").html("请登入");
		}
   	
	   	$('section').delegate('.out','touchstart',function(){
	   		//alert($('.out').html())
			if( $('.out').html() == "请登入"){
				window.location.href = 'register.html'
			}
		})
   		}
	
