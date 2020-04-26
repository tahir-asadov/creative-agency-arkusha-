console.log('script');
var b;
jQuery = $;
$(document).ready(function() {
  $('.band-content').magnificPopup({type:'image'});
  $('.band-content').appear();
  $(document.body).on('appear', '.band-content', function(e, $affected) {
    $(this).addClass( 'animated pulse' );
    console.log('appered');
  });
  $(window).scroll();
  AOS.init();

  $('#work-cats span').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var dataid = $(this).data('id');
    $('.works div').addClass('hidden');
    $('.works .' + dataid + '').removeClass('hidden');
  });

  $('.search-button').click(function(){
    $('.search-form').slideToggle();
    $('.hamburger-menu').slideUp();
  });

  $('.hamburger-btn').click(function(){
    $('.hamburger-menu').slideToggle();
    $('.search-form').slideUp();
  });

});