$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass();
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});