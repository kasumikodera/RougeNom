// JavaScript Document

//ハンバーガーメニュー

$(document).ready(function(){
if ($(window).width() < 640) {//ウインドウサイズが1024px以下ならば
$('.btn_nav').click(function(){
				$('.movile_inner').toggleClass('click')
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


$('.appear_wrap').on('inview', function() {
$(this).addClass('fade_in');
});

//$(function(){
//	
///*	var thisOffset = $('.appear_wrap').offset().top;
//	if($(window).height() > thisOffset){*/
//		$('.appear_wrap').addClass('fade_in');
///*	}
//*/	/*alert(thisOffset);*/
//});

//$(document).on('touchstart', '.gnav a[href]', function(){
//	var target = $(event.target);
//	if(target.find('.appear_wrap')){
//		$(this).addClass('fade_in');
//		console.log("aaaaaaaaa");
//		
//	}
//});

//スクロールするとフェードイン
//$(function(){
//  $(window).scroll(function (){
//    $('.appear_wrap').each(function(){
//      var imgPos = $(this).offset().top;
//      var scroll = $(window).scrollTop();
//      var windowHeight = $(window).height();
//      if (scroll > imgPos - windowHeight + windowHeight/5){
//        $(this).addClass('fade_in');
//		  console.log('bbbbbbbbbbbbb');
//      }
//    });
//  });
//});



//$(function() {
//    $(window).on('scroll', function() {
//        scrollDirection();
//    });
//    $('body').on('touchmove', function() {
//        scrollDirection();
//			console.log("aaaaaaaaa");
//    });
//});

//$(document).ready(function(){
//	$('.gnav a').click(function(event){
//		var target = $(event.target);
//	if(target.find(".appear_wrap")){
//		$(this).addClass("fade_in");
//	}
//	console.log("aaaaaaaaa");
//	});
//});


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


