$('#showFilePanel').click(function(event) {
    if ($('.notification-container').hasClass('dismiss')) {
      $('.notification-container').removeClass('dismiss').addClass('selected').show();
    }
    event.preventDefault();
  });
  
  $('#closeFilePanel').click(function(event) {
    if ($('.notification-container').hasClass('selected')) {
      $('.notification-container').removeClass('selected').addClass('dismiss');
    }
    event.preventDefault();
  });