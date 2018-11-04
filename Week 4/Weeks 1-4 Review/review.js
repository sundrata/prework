const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats(){
  console.log('inside enoughSeats');
  //check if seatsInCar >= number of passengers
  if(seatsInCar >= passengers.length){
    return true;
  }
  else{
    return false;
  }
}// end enoughSeats

function getInCar (nameOfPassenger){
  console.log('inside getInCar', nameOfPassenger);
  //push new passenger into passengers arrays
  passengers.push(nameOfPassenger);
  return passengers;
}

function readyForRoadTrip(){
  if(enoughSeats() && tankFull){
  return true;
}//end all good
  else{
    return false;
  }//end not ready
}
getInCar('you');
getInCar('me');
getInCar('her');
getInCar('him');

console.log('enough seats?', enoughSeats());
console.log('are we ready for the trip?', readyForRoadTrip());
