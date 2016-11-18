$(document).ready(function(){
	$('#fadingPic1 p').hide();
	$('#fadingPic1 img').mouseover(function(){
		$('#fadingPic1 p').show();
		$('#fadingPic1 img').stop().fadeTo("slow",0.6);
	});
	$('#fadingPic1 img').mouseleave(function(){
		$('#fadingPic1 p').hide();
		$('#fadingPic1 img').stop().fadeTo("slow",1);
	});
	$('#fadingPic2 p').hide();
	$('#fadingPic2 img').hover(function(){
		$('#fadingPic2 p').show();
		$('#fadingPic2 img').stop().fadeTo("slow",0.6);
	});
	$('#fadingPic2 img').mouseleave(function(){
		$('#fadingPic2 p').hide();
		$('#fadingPic2 img').stop().fadeTo("slow",1);
	});
	$('#fadingPic3 p').hide();
	$('#fadingPic3 img').hover(function(){
		$('#fadingPic3 p').show();
		$('#fadingPic3 img').stop().fadeTo("slow",0.6);
	});
	$('#fadingPic3 img').mouseleave(function(){
		$('#fadingPic3 p').hide();
		$('#fadingPic3 img').stop().fadeTo("slow",1);
	});
	$('.navigationBar li').mouseover(function(){
		$(this).stop().fadeTo("slow",0.6);
	});
	$('.navigationBar li').mouseleave(function(){
		$(this).stop().fadeTo("slow",1);
	});
})
	