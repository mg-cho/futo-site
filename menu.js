$(function(){

		var menu=$('#menu'),
		pos=menu.offset();

			$(window).scroll(function(){
				if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('menu-wrapper-first') && document.getElementById('content-wrapper')!=null){
					// replace header w/ header-after & page w/ page-after
					document.getElementById('content-wrapper').id='content-wrapper-after';
					if(document.getElementById('page')!=null){
						document.getElementById('page').id='page-after';
					}
					else if(document.getElementById('page-1')!=null){
						document.getElementById('page-1').id='page-after';
					}
					//fade fixed menu in
					menu.fadeOut('fast', function(){
						$(this).removeClass('menu-wrapper-first').addClass('menu-wrapper-fixed').fadeIn('fast');
					});
				} else if($(this).scrollTop() <= pos.top && menu.hasClass('menu-wrapper-fixed') && document.getElementById('content-wrapper-after')!=null){
					//replace header-after w/ header & page-after w/ page
					document.getElementById('content-wrapper-after').id='content-wrapper';
					document.getElementById('page-after').id='page-1';
					//fade first menu in
					menu.fadeOut('fast', function(){
						$(this).removeClass('menu-wrapper-fixed').addClass('menu-wrapper-first').fadeIn('fast');
					});
				}
			});
	});