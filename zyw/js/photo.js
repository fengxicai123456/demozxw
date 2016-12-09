$(function(){
	
	var arr = JSON.parse(decodeURIComponent(window.location.search.split("&")[0].split("=")[1]))
	console.log(arr)
 	for(var i=0;i<arr.length;i++){
	 	var html =  '<div class="swiper-slide"><img src='+arr[i]+' /></div>'
	 	$(".swiper-wrapper").append(html)			
 	
 	}
	var goodsID =  JSON.parse(decodeURIComponent(window.location.search.split("&")[1].split("=")[1]))
	console.log(goodsID)
	$("footer p").eq(0).on("touchstart",function(){
		window.location.href = "list.html?goodsID="+goodsID
	})
})
