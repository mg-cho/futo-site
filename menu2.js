$(function(){

		var menu=$('#menu'),
		pos=menu.offset();

			$(window).scroll(function(){
				if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('menu-wrapper-first')){
					//fade fixed menu in
					menu.fadeOut('fast', function(){
						$(this).removeClass('menu-wrapper-first').addClass('menu-wrapper-fixed').fadeIn('fast');
					});
				} else if($(this).scrollTop() <= pos.top && menu.hasClass('menu-wrapper-fixed')){
					//fade first menu in
					menu.fadeOut('fast', function(){
						$(this).removeClass('menu-wrapper-fixed').addClass('menu-wrapper-first').fadeIn('fast');
					});
				}
			});
	});