rez_menu = function(options) {
	
    // This is the easiest way to have default options.
    var settings = $.extend({
        // These are the defaults.
        break_point: 768,
        target: '.nav__list',
        duration: 400,
        auto_collapse: true,
        toggle_animate: true,
        fixed: true,
        logo_center: true,
        backdrop_close: true,
        backdrop_show: true
    }, options );

    toggle_menu = function() {
    	$('#nav-toggle').addClass('transition'); 

		if ($(settings.target).hasClass('in')) {
			$(settings.target).removeClass('in');
			$('.nav-backdrop').remove();
			$(settings.target).slideUp(settings.duration, function(){
				$('#nav-toggle').removeClass('transition')
			});
			if (settings.toggle_animate) {
				$('#nav-toggle').removeClass('in');
			}

		} else {
			$(settings.target).addClass('in');
			$(settings.target).slideDown(settings.duration, function(){
				$('#nav-toggle').removeClass('transition')				
			});
			$(settings.target).css({'display':'block'});
			if (settings.toggle_animate) {
				$('#nav-toggle').addClass('in');
			}
		}
    }

    // Toggle menu button
	$('#nav-toggle').click(function() {
		if ($(this).hasClass('transition') == false) {
			toggle_menu();

			if ($(settings.target).hasClass('in')) {
				var backdrop_style = '';
				if (settings.backdrop_show) {
					backdrop_style = 'nav-backdrop--show'
				}
				$('body').append("<a href='#!' class='nav-backdrop " + backdrop_style + "'></a>");
			}
		}
	});

	// Close the menu on 'backdrop' click
	$('body').on('click', '.nav-backdrop', function() {
		if (settings.backdrop_close) {
			toggle_menu();
		}
	});
	
	// Close the menu on link click
	$(settings.target).find('a').click(function() {
		if (settings.auto_collapse) {
			toggle_menu();
		}
	});


	$(window).resize(function(){
		var win_width = $(window).width();
		var win_height = $(window).height();

		if (win_width <= settings.break_point && $(settings.target).hasClass('in') != true) {
		    $(settings.target).hide();
		}

		if (win_width <=settings.break_point && $(settings.target).hasClass('in')) {
			$(settings.target).css({'display':'block'});
		}

		if (win_width > settings.break_point) {
			$(settings.target).css({'display':'inline-block'});

		}

		if (settings.fixed) {
			if (win_width <= settings.break_point) {
				$('body').addClass('nav-fixed-in');
				$('#nav').addClass('nav--fixed');
				$('#nav').css('top',0);
			} else {
				$('body').removeClass('nav-fixed-in');
				$('#nav').removeClass('nav--fixed')
				$('#nav').css('top',0);
			}
		}

		if (settings.logo_center) {
			if (win_width <= settings.break_point) {
				$('#nav').addClass('nav--center');
			} else {
				$('#nav').removeClass('nav--fixed')
			}
		}

	})

}