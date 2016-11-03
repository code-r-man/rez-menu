$(window).load(function() {
  // $('body').addClass('loaded');
});

// PAGE REFRESH FUNCTION
//REFRESH
// var ww = $(window).width();
// var limit = 768;
// function refresh() {
//   ww = $(window).width();
//   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
// }
// var tOut;
// $(window).resize(function() {
//    var resW = $(window).width();
//    clearTimeout(tOut);
//    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {        
//        tOut = setTimeout(refresh, 100);
//    }
// });


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
