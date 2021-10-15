const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  //最後まで行ったら一枚目に戻る
  loop: true,

  // If we need pagination(一番下のスライド分のドットの部分)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

//ドローワー
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

//ページ内リンクとスムーススクロール
jQuery('a[href^="#"]').on('click',function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html, body').animate({
    scrollTop: position
  },
  300);
});


// jQuery('a[href^="#"]').on('click',function() {

//   var header = jQuery('.header').innerHeight();
//   var id = jQuery(this).attr('href');
//   var position = jQuery(id).offset().top - header;
//   console.log(id);
//   console.log(position);
//   jQuery('html, body').animate({
//     scrollTop: position
//   },
//   300);
// });

//一定位置までスクロールしたらアイテムを表示する方法
jQuery(window).on("scroll", function() {
  if (100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass( 'is-show' );
  }else {
  jQuery('.to-top').removeClass( 'is-show' );
  }
});

// jQuery(window).on("scroll", function() {
//   console.log(jQuery(this).scrollTop());
// });

//クリックイベントのコーディング
jQuery('.header-nav li a').on('click',function() {
  jQuery('.header-nav li a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});


//アコーディオンのコーディング
jQuery('.qa-box-q').on('click',function() {
  // alert("click"); クリックされたかどうかを確認する
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box-icon').toggleClass('is-open');
});

// アコーディオン
jQuery('.accordion-y-head').click(function() {
				jQuery(this).next().slideToggle();
				jQuery(this).children('.accordion-y-icon').toggleClass('is-open');
			});

//モーダル
jQuery('.js-close-button').on('click',function(e) {
  e.preventDefault();//aタグ本来の動きを無効化
  //  alert("click閉じる"); クリックされたかどうかを確認する
    //data-以下が「target」になってる属性の値（target-modal）を取得
  // console.log(jQuery(this).data('target'))
  var target = jQuery(this).data('target');
    //targetの値と同じクラス名を持った要素に.hideを追加
  jQuery(target).hide();
});

// モーダルを開く
jQuery('.js-open-button').on('click',function(e) {
  e.preventDefault();//aタグ本来の動きを無効化
  //  alert("click閉じる"); クリックされたかどうかを確認する
    //data-以下が「target」になってる属性の値（target-modal）を取得
  // console.log(jQuery(this).data('target'))
  var target = jQuery(this).data('target');
    //targetの値と同じクラス名を持った要素に.showを追加
  jQuery(target).show();
});

