// Changes the Link active status depending on the section of the page.
$(document).ready(function() {
    $(window).on('scroll', function() {
      var scrollPos = $(document).scrollTop();
      $('.nav-link').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav-link').removeClass('active');
          currLink.addClass('active');
        }
      });
    });
});