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
	
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
	
	}
});


//スクロールするとフェードイン
$('.appear_wrap').on('inview', function() {
$(this).addClass('fade_in');
});







