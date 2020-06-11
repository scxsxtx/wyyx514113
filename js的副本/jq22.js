function b(){	
	t = parseInt(x.css('top'));
	y.css('top','36px');	
	x.animate({top: t - 36 + 'px'},'slow');	//36为每个li的高度
	if(Math.abs(t) == h- 36){ //36为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,2000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	$('.swap').html($('.news-li').html());
	x = $('.news-li');
	y = $('.swap');
	h = $('.news-li li').length * 36; //36为每个li的高度
	setTimeout(b,2000);//滚动间隔时间 现在是3秒
	
})
