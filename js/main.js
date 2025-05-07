$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

});

// toggle
$(function(){
	$('.c-toggle__header').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});


$(function () {
  const devW = 1024;

  function setMenuBehavior() {
    const winW = $(window).width();

    // 一度すべてのイベントを解除
    $('.l-header__menu > .c-mega-menu').off('mouseenter mouseleave click');
    $('.c-mega-menu__button').off('click');

    if (winW <= devW) {
      // SP：クリックで開閉（.c-mega-menu__button のみ）
      $('.c-mega-menu__button').on('click', function (e) {
        e.preventDefault(); // aタグのデフォルト動作をキャンセル
        const $menu = $(this).next('.c-mega-menu__wrap');
        $menu.stop().slideToggle(300);
        $(this).toggleClass("open");
      });
    } else {
      // PC：ホバーで開閉
      $('.l-header__menu > .c-mega-menu').hover(
        function () {
          $('main').css('opacity', '0.4');
          $(this).children('.c-mega-menu__wrap').stop().slideDown(300);
        },
        function () {
          $('main').css('opacity', '');
          $(this).children('.c-mega-menu__wrap').stop().slideUp(300);
        }
      );
    }
  }

  // 初回とリサイズ時にイベントを設定
  $(window).on('load resize', setMenuBehavior);
});

$('.c-accordion__header').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});
