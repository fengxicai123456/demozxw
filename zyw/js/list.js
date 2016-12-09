$(function(){
	var date = new Date()
	var d = Date.parse("Dec 12, 2016")
	var hm = d - date;
	var timer
	var goodsId =  window.location.search.split("=")[1]
	var yk_img;
 timer =setInterval(function(){
    hm = hm -1000

	var miao = parseInt((hm/1000)%60)
	var fen  = parseInt((hm/60000)%60)
	var shi  = parseInt((hm/3600000)%24)
	var tian =  parseInt((hm/3600000)/24)
	//console.log(tian+":"+shi+":"+fen+":"+miao)
	//console.log('距离结束时间:'+tian+'天'+shi+'时'+fen+'分'+miao+'秒')
	
	$(".search span").html('距离结束时间:'+tian+'天'+shi+'时'+fen+'分'+miao+'秒')

},1000)
	
	$(".search").css({"color":"#fff","textAlign":"left"})
	$(".search span").css("marginLeft","0.22rem")
	
	//console.log(window.location.search.split("=")[1])
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		async:true,
		dataType:"jsonp",
		success:function(data){
			
			//console.log(data[0].goodsID)
			for(var i=0;i<data.length;i++){
				if(data[i].goodsID == goodsId){
					var a = data[i].price
					var b = data[i].discount
					var c = parseInt(a*(1+b/10))
				
					var html =  '<div class="yk-list-img"><img src="'+data[i].goodsListImg+'"/></div>'+
								  '<div class="yk-list-bq"><div class="yk-bq-left"></div><div class="yk-bq-z">￥'+data[i].price+'&nbsp;'+data[i].className+'</div><span class="yk-quan"></span></div>'+
					 			  '<div class="yk-list-money"><span>市场价：'+c+'&nbsp;'+data[i].discount+'折</span><span>125人购买</span></div>'+
					 			  '<p class="yk-xq-nr"><span>产地：土耳其</span>&nbsp;<span>品牌：LIU.JO</span>&nbsp;<span>商品名称：'+data[i].goodsName+'</span></p>'+
								  '<p class="yk-xq-nr1">舒适的领口，时尚大方，极简的风格，彰显女人本色。兽头人身的团，彰显另类个性。小小的胸花随心点缀，女人的可爱气质。(胸花有别针，可拆卸)体现</p>'+
								  '<p class="yk-xq-nr2">细节靓点：印花，配装物品</p>'
								 
					$("section").append(html)
				//console.log(data[i].imgsUrl)
				yk_img = data[i].imgsUrl
				console.log(yk_img)
				//console.log(html)
				}
			}
			
		}
	});
	$("footer p").eq(1).on("touchstart",function(){
		//console.log(yk_img)
		window.location.href = "photo.html?ky=" + yk_img+"&goodsID="+goodsId;
	})
})
