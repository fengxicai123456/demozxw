window.onload = function(){
function user(){
		$(".list-cart").html(" ")
	var itm = localStorage.getItem("userName")
			//alert(itm)
				
			
				if(itm == null){
					//$("section").css("display","none")
					$(".list-cart").html("<p>您还没有登录，请<a href='register.html'>登录</a>后查看购物车</p> ")
			
			}else{
				$("section").css("display","block")
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
											'<p><span>'+data[i].goodsName+'</span><i class="iconfont delThisGoods">&#xe61f;</i></p>'+
											'<p>'+data[i].className+'</p>'+
											'<p>单价：<span>￥'+data[i].price+'<i></i></span><i>L</i></p>'+
											'<p>数量：<span class="iconfont jian" data-pid='+data[i].goodsID+'>&#xe620;</span><input class="inputValue" type="text" disabled="disabled" value='+data[i].number+'><span data-pid='+data[i].goodsID+' class="iconfont jia">&#xe626;</span></p>'+
										'</dd>'+
										
									'</dl>'
							$(".list-cart").append(html)
							
							num_momey = num_momey + data[i].price* data[i].number
							num_number = num_number +parseInt(data[i].number)
						}
						$(".z-money-num").html((num_momey).toFixed(2))
						$(".z-money-my").html(num_number)
						
						
						
						
						$(".jian").on("touchstart",function(){
							var pid = $(this).attr("data-pid")
							//alert($(this).attr("data-pid"))
							var inputNumber = $(this).siblings('.inputValue').val()
							var inputText =  $(this).siblings('.inputValue').val(--inputNumber);
							if(inputNumber == 0){
								var flag = window.confirm('确定删除该商品');
								if(flag){$(this).parents('dl').remove()
								}else{
									inputNumber = 1
									$(this).siblings('.inputValue').val(1)
								}
							}
							$.ajax({
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/getCar.php?userID="+itm,
								dataType:"jsonp",
								async:true,
								success:function(data){
									//console.log(data)
									for(var i=0;i<data.length;i++){
										if(pid == data[i].goodsID){
											var ss = inputNumber;
											//alert(data[i].price* ss)
											$(".z-money-num").html( (+$(".z-money-num").html() - +data[i].price).toFixed(2))
											$(".z-money-my").html( +$(".z-money-my").html() - 1)
											//console.log(ss+":"+pid+":"+itm)
											$.ajax({
												type:"get",
												url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number="+ss,
												async:true,
												success:function(data){
													
												}
												
											});
											
										
											
										}
								
									}
									
								}
							});	
							
							
						})
						
						$(".jia").on("touchstart",function(){
						
							var pid = $(this).attr("data-pid");
							var inputNumber = $(this).siblings('.inputValue').val();
							var inputText =  $(this).siblings('.inputValue').val(++inputNumber);
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
											var ss = inputNumber;
											//alert(ss)
											//alert(data[i].price* ss)
											$(".z-money-num").html( (+$(".z-money-num").html() + +data[i].price).toFixed(2))
											$(".z-money-my").html( +$(".z-money-my").html() + 1)
											//console.log(ss+":"+pid+":"+itm)
											$.ajax({
												type:"get",
												url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number="+ss,
												async:true,
											
												success:function(data){
													//inputText.val(ss)
													//user()
												}
											});
											
										
											
										}
									
									}
									
								}
							});	
							
							
						})	
						
						
						$('.delThisGoods').on("touchstart",function(){
							var pid = $(this).parents('dl').find('.jia').attr("data-pid");
							
							var flag = window.confirm('确定删除该商品');
							console.log(flag)
								if(flag){
									$(this).parents('dl').remove();
									
									$.ajax({
									type:"get",
									url:"http://datainfo.duapp.com/shopdata/getCar.php?userID="+itm,
									dataType:"jsonp",
									async:true,
									success:function(data){
										//console.log(data)
										for(var i=0;i<data.length;i++){
											if(pid == data[i].goodsID){
												var ss = 0;
												//alert(data[i].price* ss)
												$(".z-money-num").html( (+$(".z-money-num").html() - (+data[i].price *data[i].number)).toFixed(2))
												$(".z-money-my").html( +$(".z-money-my").html() - data[i].number)
												//console.log(ss+":"+pid+":"+itm)
												$.ajax({
													type:"get",
													url:"http://datainfo.duapp.com/shopdata/updatecar.php?userID="+itm+"&goodsID="+pid+"&number="+ss,
													async:true,
													success:function(data){
														
													}
													
												});
												
											
												
											}
										
										}
										
									}
								});	
								}
						})
						
						
						
						
						
						
						
						
						
					}
				});
			}
			}
		user()
		
}
