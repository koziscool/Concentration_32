

$(document).ready( function() {
  $("#grid-size").focus();
  $("#grid-size-button").click( function(e){
    e.preventDefault();
    var size = $("#grid-size").val();
    if( Math.floor(size/2) === size/2 ){
      matcherController.init(size);
      matcherView.updateGameView();
      $("#grid-size-form").hide();
    } else {
      $("#grid-size").val( "Bad input, try again" );

    }
  });
});

