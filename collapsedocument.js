Drupal.behaviors.collapsedocument = function(context) { 
/**
 * Implementation of jQuery.nextUntil()
 * but somehow this does not work, maybe I am installing it wrong
 *
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
*/

  // Add a 'collapse-all' and expand-all link to the top of the document
  $('div.content h2:first').before('<a id="collapse-all">collapse all</a> <a id="expand-all">expand all</a>');
  $('#expand-all').click(function() {
    $('div.content h2.collapsed').each(function() {
      $(this).click()
    });
  });
  $('#collapse-all').click(function() {
    $('div.content h2').each(function() {
      if (!$(this).hasClass('collapsed')) {
        $(this).click();
      }
    });
  });
  // Pull the citation popup block to be next to the expand-all link
  $('div#popup-element-0').css({display:"inline"});
  $('div.content h2:first').before($('div#popup-element-0'));
  $('div#section1').remove();

  // Put attachments into their own section
  if ($('div.content h2:last').html() != "Downloads") {
    $('div.table-wrapper table#attachments').parent().before('<h2>Downloads</h2>');
  }
  if ($('div.content h2:last').html() == "Downloads") {
    $('div.content h2:last').attr('Id', 'Downloads');
  }
  // Prepare H2 for collapse
  $('div.content h2').addClass('expandable').after('<div class="collapse"></div>');
  // Undo the Downloads h2
  $('h2#Downloads').removeClass('expandable');
  $('h2#Downloads').next().remove();
  // Collapse the remaining headings
  $('div.collapse').each(function() {
//cjpo breaks hoverIntent in menu dropdowns:    $(this).append($(this).nextUntil('h2'));
    while (true) {
      var next = $(this).next();
      if (next.length == 0 || next.is('h2')) {
	break;
      }
      $(this).append(next);
    }
    $(this).hide().prev('h2').toggleClass('collapsed');
  });
  // If we have accidentally included the subscription form, or book navigation
  // in the last collapsed section, hoik them back out
  $('div.collapse:last').attr('Id', 'lastCollapse');
  $('#lastCollapse #subscriptions-ui-node-form').appendTo($('#lastCollapse').parent());
  $('#lastCollapse div.book-navigation').appendTo($('#lastCollapse').parent());

  $('div.content h2').click(function() {
    $(this).next('.collapse').slideToggle(600);
    $(this).toggleClass('collapsed');
  });
};

/*
// To retrieve all LIs avec a parent
$(".parent:first").nextUntil(".parent");
*/
