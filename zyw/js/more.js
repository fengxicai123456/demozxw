var flag=true;
$('.serviceone .test').on('touchstart',function(){
	if(flag){
	$(this).children('.m-jiantou').css('transform','rotateZ(90deg)')
	flag=!flag;
	}else{
	$(this).children('.m-jiantou').css('transform','rotateZ(0deg)')	
	flag=!flag;
	} 
})
