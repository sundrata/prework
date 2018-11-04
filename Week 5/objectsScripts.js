//card object literal example
let card0 = {
  suit: 'Hearts',
  number: 3
} // end card0

let card1 = {
  suit: 'Spaids',
  number: 1
} // end card1

let card2 = {
  suit: 'Diamonds',
  number: 2
}

function isRed( cardToCheck ){
  if (cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds'){
    return true;
  }
  else{
    return false;
  }
}// end isRed

function greaterCard(cardA, cardB){
  if(cardA.number > cardB.number){
    return cardA;
  }
  else{
    return cardB;
  }
}//end greaterCard
