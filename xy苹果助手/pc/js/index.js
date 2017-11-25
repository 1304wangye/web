//文档就绪
$(function() {
	
	//回到顶部按钮对象
	var topcontrol = $('#topcontrol');
	//导航条对象
	var nav = $('.nav-wrap');
	//导航栏相对于网页原点的位置
	var navPos = nav.offset().top;
	//导航条本身高度
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function(e) {
		
		//获得滚动条的位置
		var sTop = $(window).scrollTop();
		
		//判断滚动条是否超过200px
		if (sTop >= 200) {
			topcontrol.fadeIn(300);
		} else {
			topcontrol.fadeOut(300);
		}
		
		//自动给导航条添加fix样式
		if (sTop >= navPos) {
			if (!(nav.hasClass('fix'))){
				nav.addClass('fix');
				$('.banner').css('margin-bottom',navHeight);
			}
		} else {
			if (nav.hasClass('fix')){
				nav.removeClass('fix');
				$('.banner').css('margin-bottom',0);
			}
		}	
		
		/*滚动监听高亮导航*/
		//海量正版免费下
		var introPos = {
			start:$('#post-intro').offset().top - navHeight,
			end:$('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight
		}
		
		//判断滚动条的范围
		if (sTop >= introPos.start &&  sTop < introPos.end) {
			if (!($('.intro').hasClass('active'))) {
				$('.intro').addClass('active');
			}
		} else {
			if ($('.intro').hasClass('active')) {
				$('.intro').removeClass('active');
			}
		}
		
		//无需苹果账号
		var usagePos = {
			start:$('#post-usage').offset().top - navHeight,
			end:$('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight
		}
		
		//判断滚动条的范围
		if (sTop >= usagePos.start &&  sTop < usagePos.end) {
			if (!($('.usage').hasClass('active'))) {
				$('.usage').addClass('active');
			}
		} else {
			if ($('.usage').hasClass('active')) {
				$('.usage').removeClass('active');
			}
		}
		
		//手机瘦身
		var choicePos = {
			start:$('#choiceness').offset().top - navHeight,
			end:$('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight
		}
		
		//判断滚动条的范围
		if (sTop >= choicePos.start &&  sTop < choicePos.end) {
			if (!($('.choice').hasClass('active'))) {
				$('.choice').addClass('active');
			}
		} else {
			if ($('.choice').hasClass('active')) {
				$('.choice').removeClass('active');
			}
		}
		
	});
	
	//回到顶部按钮单击事件
	topcontrol.click(function() {
		//滚动条过渡到顶部
		$('html,body').animate({scrollTop:0},1000);
	});
	
	//网页导航锚点过渡
	$('.nav-wrap a').click(function() {
		
		//获得对应区域相对于网页原点的位置
		var objTop = $(this.hash).offset().top - navHeight + 7;
		//滚动条过渡到顶部
		$('html,body').animate({scrollTop:objTop},1000);
		
		return false;
	});
	
});
