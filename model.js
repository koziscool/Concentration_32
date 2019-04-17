
matcherModel = {

  size: 4, 
  cards: [],
  cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ],

  currentId: 1,

  selectedCard: null,

  numGuesses: 0,
  matchedCards: 0,
  gameStateText: "You haven't won yet, pick two cards",

  init: function( size ) {
    this.size = size || this.size;
    var numPairs = Math.pow( this.size, 2 ) / 2;
    for( var i = 0; i < numPairs; i++ ) this.addPair();
    this.shuffle();
  },

  getId: function(  ) {
    var id = this.currentId;
    this.currentId++;
    return id;
  },


  addPair: function( ) {
    var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length ) ];
    this.cards.push( new this.Card( value, this.getId() ) );
    this.cards.push( new this.Card( value, this.getId() ) );
  },

  Card: function( value, id ) {
    this.value = value;
    this.id = id;
  },

  shuffle: function(  ) {
    var currentIndex = this.cards.length, temp, rand;

    while( currentIndex > 0 ) {
      rand = Math.floor( Math.random() * currentIndex )
      currentIndex--;

      temp = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[rand];
      this.cards[rand] = temp;
    }
  },

  selectedSameCard: function( id ) {
    return this.selectedCard && this.selectedCard.id === id;
  },

  getCard: function( id ) {
    for( var i = 0; i < this.cards.length ; i++ ) {
      if( this.cards[i].id === id ) return this.cards[i];
    }
    return null;
  },

  setSelectedCard: function( id ) {
    this.selectedCard = this.getCard(id);
  },

  checkGuess: function( id ) {
    this.numGuesses++;
    var guessCard = this.getCard(id);
    var isCorrect = false;

    if( this.selectedCard && guessCard && this.selectedCard.value === guessCard.value ){
      isCorrect = true;
      this.matchedCards += 2;
    }

    this.selectedCard = null;

    if( this.matchedCards >= this.cards.length )
      this.gameStateText = "Congratulations, you win!";

    return isCorrect;
  },
};



