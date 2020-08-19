//ハンバーガーメニューの開閉
$('.burger-btn').on('click', function () {
  $('.drawer').toggleClass('slide-in');
  $('.burger-btn').toggleClass('cross');
  $('body').toggleClass('noscroll');
});

// ページ内リンクスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    let odjust = -140;
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + odjust;
    $("html,body").animate({ scrollTop: position }, speed, "swing");
  });
});

// ページトップボタン表示
$(window).scroll(function () {
  let now = $(window).scrollTop();
  if (now > 200) {
    $('.pagetop').fadeIn("fast");
  } else {
    $('.pagetop').fadeOut('fast');
  }
});
