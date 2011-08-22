Drupal.behaviors.collapsedocument = function(context) { 
  $('div.content h2').addClass('expandable').after('<div class="collapse"></div>');
  $('div.collapse').each(function() {
    $(this).append($(this).nextUntil('h2'));
    $(this).hide().prev('h2').toggleClass('collapsed');
  });

  $('div.content h2').click(function() {
    $(this).next('.collapse').slideToggle(600);
    $(this).toggleClass('collapsed');
  });
};
