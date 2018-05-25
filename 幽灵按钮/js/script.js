$(function(){
	$('.link .button').hover(function(){
		var title=$(this).attr('data');
		$('.tip em').text(title);
		var pos=$(this).position().left+10;
		// 这里不用width是因为如果用width，表示的是定义的宽，而该盒子宽度是自适应的
		var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l=pos-dis;
		$('.tip').css({'left':l+'px'}).animate({'top':145,'opacity':1},500);
	},function(){
		$('.tip').animate({'top':100,'opacity':0},500);
	})
})