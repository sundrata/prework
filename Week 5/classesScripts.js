

class Card{
  constructor( number, suit)  {
    this.number = number;
    this.suit = suit;
    this.faceUp = false;
  }// end constructor
  color(){
    if( this.suit === 'Spades' || this.suit === 'Clubs'){
      return 'Black';
    }// end black
    else{
      return 'Red';
    }// end red
  }//end color method
  flip(){
    this.faceUp = !this.faceUp;
    return this;
  }// shortcut to toggle a boolean
}; //end card

let card0 = new Card( 6, 'Clubs');
let card1 = new Card( 1, 'Spades');
let card2 = new Card( 3, 'Hearts');
