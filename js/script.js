// JavaScript Document

//ハンバーガーメニュー

$(document).ready(function(){
if ($(window).width() < 640) {//ウインドウサイズが1024px以下ならば
$('.btn_nav').click(function(){
				$(".movile_inner").toggleClass("click")
				if ($('.gnav').css('display') == 'none') {
					$('.gnav').fadeIn('fast');
				} else {
					$('.gnav').fadeOut('fast');
			}
		});
	$('.gnav a[href]').on('click', function() {
        $('.btn_nav').trigger('click');
    });
	}
});

//$(document).ready(function(){
//	$('a:enabled').on('click', function(){
//		console.log("aaaaaaaaa");
//		// アンカーの値取得
//		var href = $(this).attr("#>.appear_wrap");
//		// 遷移位置取得
//		var target = $(href == "#").offset().top;
//		$(".appear_wrap").addClass("fade_in");
//	 });
//});


//スクロールするとフェードイン
$(function(){
  $(window).scroll(function (){
    $(".appear_wrap").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_in");
      }
    });
  });
});

//window.onload = function() {
//  scroll_effect();
//
////  $(window).scroll(function(){
////   scroll_effect();
////  });
//
//  function scroll_effect(){
//   $('.appear_wrap').each(function(){
//    var elemPos = $(this).offset().top;
//    var scroll = $(window).scrollTop();
//    var windowHeight = $(window).height();
//    if (scroll > elemPos - windowHeight){
//     $(this).addClass('fade_in');
//    }
//   });
//  }
//};







//document.documentElement.scrollTop

