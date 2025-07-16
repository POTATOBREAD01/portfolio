$(document).ready(function() {

    // 헤더 스크롤
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('headerScroll');
            $('#header a').addClass('navBtnScroll')
            $('.navBtn').addClass('navBtnScroll')
        } else {
            $('header').removeClass('headerScroll');
            $('#header a').removeClass('navBtnScroll');
            $('.navBtn').removeClass('navBtnScroll');
        }
    });

    // Nav
    $('.navBtn').on('click', function () {
        const targetId = $(this).data('target');
        const target = $(targetId);

        if (target.length) {
            const scrollPosition = target.offset().top - 72;

            $('html, body').animate({
                scrollTop: scrollPosition
            }, 400);
        }
    });

    // a태그 클릭시 이동
    $('a[href^="#"]').on('click', function (e) {
        const targetId = $(this).attr('href');
        const target = $(targetId);

        if (target.length) {
            e.preventDefault(); // 기본 이동 막기
            const scrollPosition = target.offset().top - 72;

            $('html, body').animate({
                scrollTop: scrollPosition
            }, 400); // 400ms 동안 부드럽게 이동
        }
    });

    // 블로그 이동
    $('.blogBox').on('click', function() {
        const link = $(this).data('link');
        if (link) {
            window.open(link, '_blank');
        }
    });

// 모달 열기
$('.projectBtn').on('click', function () {
  const id = $(this).data('id');
  const $modal = $('.projectModal[data-id="' + id + '"]');
  const $back = $('.modalBack');
  const $dialog = $('.modalDialog');

  // 숨김 해제
  $back.removeClass('hidden');
  $dialog.removeClass('hidden');
  $modal.removeClass('hidden');

  // ⚠️ 강제 리플로우로 애니메이션 정상 발동
  void $dialog[0].offsetWidth;
  void $back[0].offsetWidth;

  // show 클래스 추가 (애니메이션 시작)
  $back.addClass('show');
  $dialog.addClass('show');
});

// 닫기 버튼 클릭 시 닫기
$('.closeBtn').on('click', function () {
  const $modal = $(this).closest('.projectModal');
  const $back = $('.modalBack');
  const $dialog = $('.modalDialog');

  // show 클래스 제거 (애니메이션 시작)
  $back.removeClass('show');
  $dialog.removeClass('show');

  // transition 종료 후 display 숨김 처리
  setTimeout(() => {
    $modal.addClass('hidden');
    $back.addClass('hidden');
    $dialog.addClass('hidden');
  }, 300); // transition 시간과 일치
});

// 배경 클릭 시 닫기
$('.modalBack').on('click', function () {
  const $back = $('.modalBack');
  const $dialog = $('.modalDialog');

  $back.removeClass('show');
  $dialog.removeClass('show');

  setTimeout(() => {
    $('.projectModal').addClass('hidden');
    $back.addClass('hidden');
    $dialog.addClass('hidden');
  }, 300);
});
});