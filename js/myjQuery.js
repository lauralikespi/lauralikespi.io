$(document).ready(function(){
	$('#fadingPic1 p').hide();
	$('#fadingPic1 img').mouseover(function(){
		$('#fadingPic1 p').show();
		$('#fadingPic1 img').fadeTo("slow",0.6);
	});
	$('#fadingPic1 img').mouseleave(function(){
		$('#fadingPic1 p').hide();
		$('#fadingPic1 img').fadeTo("slow",1);
	});
	$('#fadingPic2 p').hide();
	$('#fadingPic2 img').mouseover(function(){
		$('#fadingPic2 p').show();
		$('#fadingPic2 img').fadeTo("slow",0.6);
	});
	$('#fadingPic2 img').mouseleave(function(){
		$('#fadingPic2 p').hide();
		$('#fadingPic2 img').fadeTo("slow",1);
	});
	$('#fadingPic3 p').hide();
	$('#fadingPic3 img').mouseover(function(){
		$('#fadingPic3 p').show();
		$('#fadingPic3 img').fadeTo("slow",0.6);
	});
	$('#fadingPic3 img').mouseleave(function(){
		$('#fadingPic3 p').hide();
		$('#fadingPic3 img').fadeTo("slow",1);
	});
	$('.navigationBar li').mouseover(function(){
		$(this).fadeTo("slow",0.6);
	});
	$('.navigationBar li').mouseleave(function(){
		$(this).fadeTo("slow",1);
	});
})
	