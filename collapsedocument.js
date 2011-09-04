Drupal.behaviors.collapsedocument = function(context) { 
  // Put attachments into their own section
  if ($('div.content h2').last().html() != "Downloads") {
    $('table#attachments').before('<h2>Downloads</h2>');
  }
  if ($('div.content h2').last().html() == "Downloads") {
    $('div.content h2').last().attr('Id', 'Downloads');
  }
  
  // Prepare H2 for collapse
  $('div.content h2').addClass('expandable').after('<div class="collapse"></div>');
  // Undo the Downloads h2
  $('h2#Downloads').removeClass('expandable');
  $('h2#Downloads').next().remove();
  // Collapse the remaining headings
  $('div.collapse').each(function() {
    $(this).append($(this).nextUntil('h2'));
    $(this).hide().prev('h2').toggleClass('collapsed');
  });
  // If we have accidentally included the subscription form, or book navigation
  // in the last collapsed section, hoik them back out
  $('div.collapse').last().attr('Id', 'lastCollapse');
  $('#lastCollapse #subscriptions-ui-node-form').appendTo($('#lastCollapse').parent());
  $('#lastCollapse div.book-navigation').appendTo($('#lastCollapse').parent());

  $('div.content h2').click(function() {
    $(this).next('.collapse').slideToggle(600);
    $(this).toggleClass('collapsed');
  });
};

/*
jQuery.fn.nextUntil = function(selector) {
  var query = jQuery([]);
  while (true) {
    var next = this.next();
    if (next.length == 0 || next.is(selector)) {
      return query;
    }
    query.add(next);
  }
  return query;
}

// To retrieve all LIs avec a parent
$(".parent:first").nextUntil(".parent");
*/
