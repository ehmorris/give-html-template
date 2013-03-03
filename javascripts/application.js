$(function() {

  $('.filtered-funds > ul li:not(.detail) a.details').click(function() {
    if ($(this).parents('li').hasClass('selected')) {
      $(this).parents('li').removeClass('selected');
      $(this).parents('li').next('.detail').removeClass('active');
    }
    else if ($(this).parents('li').next('.detail').length > 0) {
      var topval = ($(this).parents('li').offset().top + $(this).parents('li').outerHeight()) - $('.fundlist').offset().top;
      $(this).parents('li').addClass('selected');
      $(this).parents('li').next('.detail').css('top', topval);
      $(this).parents('li').next('.detail').addClass('active');
    }

    return false;
  });

  $('article').fitVids();
  $('li').fitVids();

  $('.fundlist').masonry({
    itemSelector : '.fund, .video, .article'
  });
});
