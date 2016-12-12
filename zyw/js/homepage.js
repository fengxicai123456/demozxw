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
		                	'<a ><img src="'+ data[i].goodsListImg +'"/></a>'+
		                    '</div>'+
							'<div class="'+'describe">'+
						    '<p><a href="#">' + data[i].goodsName + '</a></p>' +
							'<div>'+
							'<p>' +
							'<span>￥' + data[i].price + '</span>' +
							'<span>' + data[i].discount + '折</span>' +
							'</p>' +
							'<b class="mui-icon icon iconfont icon-cart" ></b>' +
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
		var pid=0; 
		$("#m-box").delegate("b", "touchstart", function() {
			pid = $(this).parents(".m-merchandise").attr("pid");
			var itm = localStorage.getItem("userName")
			//alert(itm)
				
			
				if(itm == null){
					var denglu = window.confirm("您还没有登录，请登录")
					if(denglu){
					window.location.href = "html/register.html"
					}
			}else{
				$.ajax({
					type:"get",
					dataType:"jsonp",
					url:"http://datainfo.duapp.com/shopdata/getCar.php?userID="+itm,
					async:true,
					success:function(data){
						var num =0;
						
						//console.log(data)
						var m=0
					if(data.length == undefined){
				
						$.ajax({
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number=1",
								async:true,
								success:function(){
									console.log("第一次添加")
								}
							});
						
					}
					for(var i=0;i<data.length;i++){
						//console.log(pid)
						if(pid == data[i].goodsID){
							num = parseInt(data[i].number)+1
							//alert(pid)
							$.ajax({
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number="+num,
								async:true,
								success:function(){
									console.log("第一次之后")
								}
							});
							
							return;
							
						}
					 m = m +1
					
					}
					// alert(m)
					if(m == data.length){
						//alert(pid)
						$.ajax({
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number=1",
								async:true,
								success:function(){
									console.log("第一次添加")
								}
							});
					}
						
						
						
					}
				});
				
				
				
				
			}
			
			
		});
		
var scrollContent;
function loaded() {
	scrollContent = new iScroll('m-box');

}
//document.addEventListener('touchstart', function (e) { e.preventDefault(); }, false);
//document.addEventListener('DOMContentLoaded', loaded, false);	


$('#m-box ul li').delegate('.m-merchandise .picture','touchstart',function(){
	var pid = $(this).parents('.m-merchandise').attr('pid')
	location.href = 'html/list.html?goodsId=' + pid;
})
		