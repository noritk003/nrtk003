$(function(){
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });


  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  //スクロールアニメーション
  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },300);
  });

  $('.paragraph li').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({
      'scrollTop': position
    }, slow);
  });




  //image lotation
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }

  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();

  });

  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();

  });
  // フォーム入力
  $('#form').submit(function() {
    var selectValue = $('#select-form').val();
    var textValue = $('#text-form').val();

    if (textValue == '') {
      $('#error-message').text('理由を記入してください');
    } else {
      $('#error-message').text('');
    }

    $('#output-select').text(selectValue);
    $('#output-text').text(textValue);
    return false;
  });

});
