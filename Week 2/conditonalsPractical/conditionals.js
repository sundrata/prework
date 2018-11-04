console.log('js');
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;
//check if there's room for everyone

if (seatsInCar >= passengers && infantSeats >= infants) {
  console.log('ready for the road trip');
    if (fullTank) {
      console.log('ready to hit the highway')
    }
    else{
      console.log('Fuel up before interstate');
    }
} //end enough seats
else {
console.log('not ready, check car passengers and equipment');
} // not enough seats
