
onResize = function() {
  var winW = $(window).width();
  var winH = $(window).height();

    //FOOTER
    $('body').css({
    	'padding-bottom': ($('.footer').outerHeight())
    });
}

$(document).ready(function() {
	var winW = $(window).width();
	var winH = $(window).height();

  rez_menu({
    auto_collapse:true,
  });

	onResize();

	$(window).resize(function(){
		onResize();
	}).trigger('resize');

  //SVG
  svg4everybody();

});
