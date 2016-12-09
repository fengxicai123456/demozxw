//-----------------------------底部footer  跳转链接
var jumpHref = ['../index.html', 'search.html', 'shopCart.html', 'myXiu.html', 'more.html'];
$('.childPage .footer-list').on('touchstart', function() {
	var index = $(this).index();
	location.href = jumpHref[index];
})
var homeHref = ['index.html', 'html/search.html', 'html/shopCart.html', 'html/myXiu.html', 'html/more.html'];
$('.homePage .footer-list').on('touchstart', function() {
	var index = $(this).index();
	location.href = homeHref[index];
})

$('header .search .searchInput').on('touchstart',function(){
	//alert(location.pathname)                                             )
	//location.href = 'seo.html';
})