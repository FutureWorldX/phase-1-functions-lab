// Code your solution in this file!

//using the information from README.md and testindex.js

//let in JavaScript makes a variable only accessed within the function block
//var in JavaScript makes a variable to be accessed by all functions in a JavaScript file


function distanceFromHqInBlocks(distanceValue) {
    //returns the number of blocks given a value

    distanceValue = parseInt(distanceValue, 10); //parse int to make it an integer by default
    //42nd street is essentially position 0 because someone has not moved from HQ
    let hqPosition = 42; // location/street in blocks
    let hqPositionFeet = 264; // relative hq location/street given in feet [1 block is 264 feet]

    //calculates distances from 42nd street HQ location by subtracting the two values
    let distanceDifference = distanceValue - hqPosition; // calculating difference
       
    console.log(`HQ position in blocks is: ${hqPosition}`);
    console.log(`Distance entered in blocks is: ${distanceValue}`);
    console.log(`Difference in city blocks is: ${distanceDifference}`);

    //giving result of viewer location in blocks
    if (distanceDifference <= 0)
    {
      let smallerDifference;
      //removing the negative sign so that the actual numeric value can be loaded
      smallerDifference = distanceDifference * -1; 
      console.log(`Difference smaller than ${hqPosition} blocks is: ${smallerDifference} blocks`);
      return smallerDifference;
    }
    else if (distanceDifference > 0){
      return distanceDifference;
    }
  }

  function distanceFromHqInFeet(distanceValue) {
    distanceFromHqInBlocks(distanceValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

    let hqPosition = 42; // location/street in blocks
    let hqPositionFeet = 264; // relative hq location/street given in feet [1 block is 264 feet]

    //calculates distances from 42nd street HQ location by subtracting the two values
    let distanceDifference = distanceValue - hqPosition; // calculating difference
    let calculateDistance, smallerDifference;

    if(distanceValue < hqPosition){
      //removing the negative sign so that the actual numeric value can be loaded
      smallerDifference = distanceDifference * -1;

      //calculates distances below 42nd street
      console.log(`Distance difference is: ${smallerDifference}`);

      //multiply the amount of feet by the provided difference by the unit test
      calculateDistance = parseInt(smallerDifference * hqPositionFeet, 10);
      console.log(`Calculated difference is: ${calculateDistance}`);

      // return the final calculated distance
      return calculateDistance;
    }
    else {
      //calculate distances above 42nd street
      console.log(`Distance difference is: ${distanceDifference}`);

      //multiply the amount of feet by the provided distances by the unit test
      calculateDistance = parseInt(distanceDifference * hqPositionFeet, 10);
      console.log(`Calculated difference is: ${calculateDistance}`);

      // return the final calculated distance
      return calculateDistance;
    }
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    //returns a distance in feet

    let distanceInFeet = 264; // relative distance given in feet [1 block is 264 feet]
    let calculateDistance, smallerDifference, travelDistance = destination - start;
    //returns distance when destination is below distance
    if(destination < start){
      //removing the negative sign so that the actual numeric value can be loaded
      smallerDifference = travelDistance * -1;

      //calculates distances below 42nd street
      console.log(`Short Distance difference is: ${smallerDifference}`);

      //multiply the amount of feet by the provided distances in the unit test
      calculateDistance = smallerDifference * distanceInFeet;
      console.log(`Calculated difference in feet is: ${calculateDistance}`);

      // return the final calculated distance
      return calculateDistance;
    }
    else {
      //calculate distances above 42nd street
      console.log(`Long Distance difference is: ${travelDistance}`);

      //multiply the amount of feet by the provided difference by the unit test
      calculateDistance = parseInt(travelDistance * distanceInFeet, 10);
      console.log(`Calculated difference in feet is: ${calculateDistance}`);

      // return the final calculated distance
      return calculateDistance;
    }
  }

  function calculatesFarePrice(start, destination) {
    let msgResult, fareDistance, farePrice, totalFare;
    let calculateDistance = distanceTravelledInFeet(start, destination);
    
    //returns the fare for the customer
    if (calculateDistance < 0){
      msgResult = "Length cannot be less than 0.";
      farePrice = 0;
      return msgResult;
    }
    if (calculateDistance < 400) {
      //gives customers a free sample
      //remember the first 400 feet are free!
      msgResult = "This one is on me!";
      farePrice = 0;
      console.log(`The fare price total is $${farePrice}! ${msgResult}`);
      return farePrice;
    }
    else if (calculateDistance >= 400 && calculateDistance <= 2000){
      //charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
      fareDistance = calculateDistance - 400;
      console.log(`The difference after subtracting 400 feet is: ${fareDistance}`);
      totalFare = parseFloat(0.02 * calculateDistance); //this will be useful if the total fare was needed in the calculation
      
      //calculating the 0.02 dollars [2 cents] per foot to get the final fare price
      farePrice = parseFloat(0.02 * fareDistance);
      msgResult = `I will gladly take your $${farePrice}.`;
      console.log(`The fare price total is $${farePrice}, therfore ${msgResult}`);
      return farePrice;
    }
    else if (calculateDistance > 2000 && calculateDistance <= 2500){
      //charges 25 dollars for a distance over 2000 feet
      msgResult = "I will gladly take your twenty five bucks because the distance is over 2000 feet.";
      farePrice = 25;
      console.log(`The fare price total is $${farePrice}, therfore ${msgResult}`);
      return farePrice;
    }
    else if (calculateDistance > 2500){
      //does not allow rides over 2500 feet
      msgResult = "cannot travel that far";
      farePrice = 0;
      return msgResult;
    }
    else {
      //when other values do not match the expression
      console.log(`The value entered is: ${calculateDistance}`);
      msgResult = "No can do.";
      farePrice = 0;
      return msgResult;
    } 
  }