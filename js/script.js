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


//スクロールするとフェードイン
$('.appear_wrap').on('inview', function() {
$(this).addClass('fade_in');
});







