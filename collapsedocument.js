Drupal.behaviors.collapsedocument = function(context) { 
  $('div.content h2').after('<div class="collapsebegin"></div>');
  $('div.content h2').slice(1).before('<div class="collapseend"></div>');
  if ($('div.content h2').size()) {
    $('div.content').append('<div class="collapseend"></div>');
  }
debugger;
  $('div.content').val().replace('/collapsebegin"><\/div>/g', 'collapse">');
  $('div.content').replace('/<div class="collapseend">/g', '');
};

