
matcherController = {

  model: matcherModel,
  view: matcherView,

  init: function( size ) {
    this.model.init(size);
    this.view.init();
    this.view.addClickHandlers( this.selectCard, this );
  },

  selectCard: function( id ) {
    if( this.selecting || this.model.selectedSameCard(id) ) return;
    this.selecting = true;
    this.view.revealCard( id );

    if( this.model.selectedCard ){
      var selectId = this.model.selectedCard.id;
      var isCorrect = this.model.checkGuess(id);
      this.view.updateGameView();

      var that = this;
      if( isCorrect ){
        setTimeout( function(){
          that.view.setCorrect(id);
          that.view.setCorrect(selectId);
          that.selecting = false;
        }, 1000 );
      } else {
        setTimeout( function(){
          that.view.hideCards();
          that.selecting = false;
        }, 1500);
      }
      
    } else {
      this.model.setSelectedCard(id);
      this.selecting = false;
    }

  },


};
