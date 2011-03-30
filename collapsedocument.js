Drupal.behaviors.collapsedocument = function(context) { 
  $('div.content h2').after('<div class="collapse">');
  $('div.content h2').slice(1).before('</div> <!-- collapse -->');
  if ($('div.content h2').count()) {
    $('div.content').append('</div> <!-- collapse -->');
  }
};

