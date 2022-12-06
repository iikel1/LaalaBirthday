
$(document).ready(function()
	{
		var NavigatorName = navigator.userAgent.toLowerCase();
		console.log(NavigatorName);
		var velas_top = window.screen.height * 0.5 - 130;
		console.log(velas_top);
		//修改蜡烛的高度
		$('.velas').css(
			{
				'top': velas_top +'px'
			}
		);
		
		//先隐藏所有的文字
		$('.text').addClass('hide');
		$('#fullpage').fullpage(
			{
				sectionsColor: ['#ee9ca7', '#66cccc', '#ffcc66', '#00cc99','#ee9ca7', '#66cccc', '#ffcc66'],
				navigation: true,
				//增加回调函数，文字动画
				afterLoad: function(anchorLink, index)
				{
					//跳过最后彩蛋
					if (index == 7)
					{
						return;
					}
					
					
		            var text = $(this).find('.text');
		            text.removeClass('hide');
		            $(this).find('.text').addClass('animated fadeInDown');
		            svgpaint(index);
		            
		            if (index == 4)
		            {
		            	$(this).find('img').addClass('flipInX')
		            }
	       	},
				//心累，感觉回滚没有有文字动画果然不行，得加上
				 onLeave: function(index, nextIndex, direction){ 
				 	
				 	//跳过最后彩蛋
					if (index == 7)
					{
						return;
					}
				 	var text = $(this).find('.text');
				 	$(this).find('.text').removeClass('animated fadeInDown').addClass('hide');
				 	
				 },
			}
			
		);
		
		
	});
	
	
	


