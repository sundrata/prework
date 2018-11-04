/*Consider an electric drill. It can use different drill bits.
It can be charging, idling, or in use. When in use, it can be rotating clockwise
or counter-clockwise. What would a drill's class look like? What properties/methods would it have?*/

class Drill{
  constructor( bit, clockwise, charge ){
    this.bit = bit;
    this.clockwise = true;
    this.charge = true;
  }
  bit(){
    if(this.bit === 'Auger' || this.bit === 'Spade'){
      return 'You currently have a wood bit attached.'
    }
    else{
      return 'Your current bit is not designed to drill through wood.'
    }
  }
  clockwise(){
    if(this.clockwise){
      return 'Your drill is turning clockwise.'
    }
    else{
      this.clockwise != this.clockwise;
      return this;
    }//end constructor
  }
}//end drill class

let status0 = new Drill( 'Auger', true, true);
