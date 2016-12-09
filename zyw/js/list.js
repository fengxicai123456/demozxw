$(function(){
	var date = new Date()
	var d = Date.parse("Dec 12, 2016")
	var hm = d - date;
	var timer
 timer =setInterval(function(){
    hm = hm -1000

	var miao = parseInt((hm/1000)%60)
	var fen  = parseInt((hm/60000)%60)
	var shi  = parseInt((hm/3600000)%24)
	var tian =  parseInt((hm/3600000)/24)
	//console.log(tian+":"+shi+":"+fen+":"+miao)
	console.log('距离结束时间:'+tian+'天'+shi+'时'+fen+'分'+miao+'秒')
	
	$(".search span").html('距离结束时间:'+tian+'天'+shi+'时'+fen+'分'+miao+'秒')

},1000)
	
	$(".search").css({"color":"#fff","textAlign":"left"})
	$(".search span").css("marginLeft","0.22rem")

})
