// JavaScript Document

//ページトップボタン

$("#PageTop>a").on("click",function(){
	$("html,body").animate({scrollTop:0},1000);
});

// 背景スライドアニメーション(Vegas2)
var ww = window.innerWidth || document.documentElement.clientWidth || 0;
 if (ww > 640){
 var srcBgArray = [{ src: './images/kv_01_pc@2x.png' }, //PCでスライドする画像を配列で設定
     { src: './images/kv_02_pc@2x.png' },
 { src: './images/kv_03_pc@2x.png' }];
 } else {
var srcBgArray = [{ src: './images/kv_01@2x.png' }, //スマホでスライドする画像を配列で設定
	{ src: './images/kv_02@2x.png' },
{ src: './images/kv_03@2x.png' }];
 
 }
 $('#slider').vegas({
 slides: srcBgArray,
 delay: 5000,
 timer: false,
 transition: 'blur', 
animation: 'kenburns',
 transitionDuration: 3000
   });

//replace
$('.header_main').height(window.innerHeight + 'px');


//$(document).ready(function(){
//if ($(window).width() < 640) {//ウインドウサイズが1024px以下ならば
//$('nav_item').click(function(){
//			$(".movile_inner").removeClass("click");
//			$('.gnav').fadeOut('fast');
//			});
//		}
//});