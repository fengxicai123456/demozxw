	 var mySwiper = new Swiper ('.main', {
	    direction: 'horizontal',
	    loop: true,
	    effect : 'fade',
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    
	    // 如果需要前进后退按钮
	    nextButton:'.swiper-button-next',
	    prevButton:'.swiper-button-prev',	    
	    // 如果需要滚动条
	   //                                                          scrollbar: '.swiper-scrollbar',
	  })
	 

function getajax1() {
			$.ajax({
					type: "GET",
					url: "http://datainfo.duapp.com/shopdata/getGoods.php",
					async: true,
					dataType: "jsonp"
				})
				.done(function(data) {
					//console.log(data)
					for(var i = 0; i < data.length; i++) {
						var html =
							'<div class="'+'m-merchandise m-m"'+'pid="'+ data[i].goodsID +'">'+
	                    	'<div class="'+'picture">'+
		                	'<a href="'+'#"><img src="'+ data[i].goodsListImg +'"/></a>'+
		                    '</div>'+
							'<div class="'+'describe">'+
						    '<p><a href="#">' + data[i].goodsName + '</a></p>' +
							'<div>'+
							'<p>' +
							'<span>￥' + data[i].price + '</span>' +
							'<span>' + data[i].discount + '折</span>' +
							'</p>' +
							'<b class="mui-icon icon iconfont icon-gouwuche" ></b>' +
						    '</div>'+
							'</div>'+
						    '</div>'
							$(html).appendTo($("#m-box ul li"));
					}
					/*console.log(data[i])*/
				})

			.fail(function(XHR, textStatus) {
				console.log(XHR);
			})
			//.always(function(){loaded()})
				var scrollContent;				
		}
getajax1();
//2部分      购物车信息提取
		$("#m-box").delegate("b", "touchstart", function() {
			var pid = $(this).parents(".m-merchandise").attr("pid");
			alert(pid);
			//console.log("http://datainfo.duapp.com/shopdata/updatecar.php?userID=wangjie&goodsID="+pid+"&number=1")
			$.ajax({
					type: "GET",
					url: "http://datainfo.duapp.com/shopdata/updatecar.php?userID=wangjie&goodsID="+pid+"&number=1",
					async: true,
					dataType: "json"
				})
			.done(function(data){
					console.log(data)
				})
			.fail(function(XHR, textStatus) {
				console.log(XHR);
				console.log(textStatus);
			})
		});
		
var scrollContent;
function loaded() {
	scrollContent = new iScroll('m-box');

}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);		
		