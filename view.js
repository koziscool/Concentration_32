
matcherView = {
  
  model: matcherModel,

  init: function(  ) {
    this.$grid = $("#matcher-grid");
    this.addCardsToGrid();

    var width = 100 / this.model.size - 2;
    $(".card").css({
      width: width + "%"
    });
  },

  addCardsToGrid: function(  ) {
    for( var i = 0; i < this.model.cards.length ; i++ ) {
      var card = this.model.cards[i];
      var $cardDiv = $("<div><div class='name'>" + card.value + "</div></div>");
      $cardDiv.addClass("card");
      $cardDiv.data("card-id", card.id);
      $cardDiv.attr("id", "card-" + card.id);
      this.$grid.append( $cardDiv );
    }
  },


  updateGameView: function(  ) {
    $("#num-guesses").text( this.model.numGuesses );
    $("#total-cards").text( this.model.cards.length );
    $("#matched-cards").text( this.model.matchedCards );
    $("#game-state-text").text( this.model.gameStateText );
  },

  addClickHandlers: function( fn, context ) {
    $(".card").click( function(){
      fn.call( context, $(this).data("card-id") );
    });
  },

  revealCard: function( id ) {
    $("#card-" + id).addClass("revealed");
  },

  setCorrect: function( id ) {
    $("#card-" + id).addClass("correct");
  },

  hideCards: function(  ) {
    $(".card").not(".correct").removeClass("revealed");
  },

};
