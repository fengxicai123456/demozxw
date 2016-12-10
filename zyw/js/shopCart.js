window.onload = function(){
function user(){
		$(".list-cart").html(" ")
	var itm = localStorage.getItem("userName")
			//alert(itm)
				
			
				if(itm == null){
				window.location.href = "html/myXiu.html"
			}else{
				$.ajax({
					type:"get",
					dataType:"jsonp",
					url:"http://datainfo.duapp.com/shopdata/getCar.php?userID="+itm,
					async:true,
					success:function(data){
						var num_number = 0;
						var num_momey = 0;
						//console.log(data)
						for(var i=0;i<data.length;i++){
							//console.log(data[i].goodsListImg)
							html = '<dl>'+
										'<dt><img src='+data[i].goodsListImg+'></dt>'+
										'<dd>'+
											'<p>'+data[i].goodsName+'<i class="iconfont">&#xe61f;</i></p>'+
											'<p>'+data[i].className+'</p>'+
											'<p>单价：<span>￥'+data[i].price+'<i></i></span><i>L</i></p>'+
											'<p>数量：<span class="iconfont jian" data-pid='+data[i].goodsID+'>&#xe620;</span><input type="text" disabled="disabled" value='+data[i].number+'><span data-pid='+data[i].goodsID+' class="iconfont jia">&#xe626;</span></p>'+
										'</dd>'+
										
									'</dl>'
							$(".list-cart").append(html)
							
							num_momey = num_momey + data[i].price* data[i].number
							num_number = num_number +parseInt(data[i].number)
						}
						$(".z-money-num").html(num_momey)
						$(".z-money-my").html(num_number)
						
						
						
						
						$(".jian").on("touchstart",function(){
							
							var pid = $(this).attr("data-pid")
							//alert($(this).attr("data-pid"))
							$.ajax({
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/getCar.php?userID="+itm,
								dataType:"jsonp",
								async:true,
								success:function(data){
									//console.log(data)
									for(var i=0;i<data.length;i++){
										if(pid == data[i].goodsID){
											var ss = data[i].number-1
											
											
											//console.log(ss+":"+pid+":"+itm)
											$.ajax({
												type:"get",
												url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number="+ss,
												async:true,
											
												success:function(data){
													user()
												}
												
											});
											
										
											
										}
									
									}
									
								}
							});	
							
							
						})
						
							
						$(".jia").on("touchstart",function(){
						
							var pid = $(this).attr("data-pid")
							//alert($(this).attr("data-pid"))
							$.ajax({
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/getCar.php?userID="+itm,
								dataType:"jsonp",
								async:true,
								success:function(data){
									//console.log(data)
									for(var i=0;i<data.length;i++){
										if(pid == data[i].goodsID){
											var ss = parseInt(data[i].number)+1
											
											
											//console.log(ss+":"+pid+":"+itm)
											$.ajax({
												type:"get",
												url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number="+ss,
												async:true,
											
												success:function(data){
													user()
												}
												
											});
											
										
											
										}
									
									}
									
								}
							});	
							
							
						})	
						
						
						
						
						
						
						
						
						
						
						
						
					}
				});
			}
			}
		user()
		
}
