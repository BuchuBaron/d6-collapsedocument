Drupal.behaviors.collapsedocument = function(context) { 
  $('div.content h2').addClass('expandable').after('<div class="collapse"></div>');
  $('div.collapse').append($('div.collapse').nextUntil('h2'));
  $('div.collapse').hide().prev('h2').toggleClass('collapsed');

  $('div.content h2').click(function() {
    $(this).next('.collapse').slideToggle(600);
    $(this).toggleClass('collapsed');
  });
};

