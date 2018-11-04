//checking if hockey skates need to be sharpened
//rule of thumb is to sharpen skate blades after every 5 uses

let timesUsed = [];
const freshSkate = 0;

 function sharpener(bladeUses){
   if (bladeUses >= 5){
     console.log('Your skates need a sharpening!');
   }
   else{
     console.log('Your skates are still sharp!');
   }
   timesUsed.push(bladeUses);
 }

sharpener(5);
