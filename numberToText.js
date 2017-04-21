// Write some code that will accept an amount and convert it to the
// appropriate string representation.
//
// Example:
// Convert 2523.04
// to “Two thousand five hundred twenty-three and 04/100
// dollars”

// Expected output = “Two thousand five hundred twenty-three and 04/100

var test = 2523.04
var test2 = 2515.15
var test3 = 13116.82
var test4 = 10312.34
var test5 = 20000.54
var test6 = 33518.33
var test7 = 315314.89
var test8 = 13325322.90
var test9 = 43215215.86
var test10 = 103450.29
var test11 = 912322173.50
// Fringe cases
var test12 = 1.50
var test13 = 999999999.79 // This one works
var test14 = 100.33
var test15 = 13.56
var test16 = .90
var check = [];
var intArray = [];


function numToWords (num) {
  var stringifiedNumber = [];
  var intArray = [];

  stringifiedNumber = num.toString().split(".");

  for (i = 0; i < stringifiedNumber.length; i++) {
    intArray.push(stringifiedNumber[i]);
  }
  // Begin converting numbers to word
  // Split the array indices into 2 variables
  var before = intArray[0];
  // console.log('this is before', before);
  var after = intArray[1];
  // console.log('this is after', after);
  // Create reference arrays
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var unique = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // Split the before string(possibly reverse for the sake of map)
  var preDecimal = before.split('');
  // console.log('This is preDecimal', preDecimal);
  // postDecimal needs to just add 'and xx/100' to the number
  var postDecimal = "and " + after + "/100 dollars";
  // console.log('this is postDecimal', postDecimal);

  // Get the length of the preDecimal number for reference in the map ie: 5 = 10,000 4 = 1,000 3 = 100 etc.
  var numberLength = preDecimal.length;
  // console.log('this is number length', numberLength);

  // Convert the preDecimal array from strings to numbers
  var preDecimalNumbers = [];
  preDecimal.forEach(function(index) {
    preDecimalNumbers.push(parseInt(index));
  });


  // Reverse preDecimalNumbers so that the 1s place is first
  // This step may not be necessary. Not sure why I did this...
  // var reversedPreDecimalNumbers = [];
  // reversedPreDecimalNumbers = preDecimalNumbers.reverse();
  // console.log(reversedPreDecimalNumbers)

  // Do the regular ones first, then figure out the unique cases

  // Loop through (using 'map') and convert the stringified numbers to words

  var reversedWordArray = [];
  // Make the reversedWordArray the same length as the reversedPreDecimalNumbers array.
  reversedWordArray.length = preDecimalNumbers.length;
  // Map the reversedWordArray to the reversedPreDecimalNumbers



    // First find unique numbers
    // Skip the ones place if the number is unique
    // Convert ones place to words
    // figure out how to dynamically splice
    // console.log('this is preDecimalNumbers', preDecimalNumbers)
    // if(preDecimalNumbers[index] === 0) {
    //   reversedWordArray.splice('')
    // }

    // Tried a map, but now going to hard code up to a billion
    // Create a variable to splice in reverse order rather than reverse the array
    var endOfWordArray = reversedWordArray.length - 1;
    // Create another variable for endOfIntArray
    var endOfIntArray = preDecimalNumbers.length -1;


    // Should really create a function for the places and reuse that rather than rewrite code

    // If statement for ones & teens place
    if(preDecimalNumbers[endOfIntArray] > 0 && preDecimalNumbers[endOfIntArray - 1] === 1){
      reversedWordArray.splice(endOfWordArray, 1, unique[preDecimalNumbers[endOfIntArray]]);
      reversedWordArray.splice(endOfWordArray - 1, 1);
    } else {
      reversedWordArray.splice(endOfWordArray, 1, ones[preDecimalNumbers[endOfIntArray]]);
    }


    // If statement for 10s place
    if (preDecimalNumbers[endOfWordArray - 1] > 1) {
      reversedWordArray.splice(endOfWordArray - 1, 1, tens[preDecimalNumbers[endOfIntArray - 1]]);
    }

    // If statement for 100s place
    if (preDecimalNumbers[endOfWordArray - 2] > 0) {
      reversedWordArray.splice(endOfWordArray - 2, 1, ones[preDecimalNumbers[endOfIntArray - 2]] + ' hundred');
    }

    // If statement for 1000s, teen 1000s & 10,000s place
   if(preDecimalNumbers[endOfIntArray - 3] > 0 && preDecimalNumbers[endOfIntArray - 4] === 1){
      reversedWordArray.splice(endOfWordArray - 3, 1, unique[preDecimalNumbers[endOfIntArray - 3]] + ' thousand');
      reversedWordArray.splice(endOfWordArray - 4, 1)
    } else if (preDecimalNumbers[endOfIntArray - 4] > 0) {
      reversedWordArray.splice(endOfWordArray - 4, 1, tens[preDecimalNumbers[endOfIntArray - 4]]);
      reversedWordArray.splice(endOfWordArray - 3, 1, ones[preDecimalNumbers[endOfIntArray - 3]] + ' thousand')

    }


    // If statement for 100,000s place
    if (preDecimalNumbers[endOfWordArray - 5] > 0) {
      reversedWordArray.splice(endOfWordArray - 5, 1, ones[preDecimalNumbers[endOfIntArray - 5]] + ' hundred');
    }

    // If statement for tens, teens & 1,000,000s place
    if(preDecimalNumbers[endOfIntArray - 6] > 0 && preDecimalNumbers[endOfIntArray - 7] === 1){
      reversedWordArray.splice(endOfWordArray - 6, 1, unique[preDecimalNumbers[endOfIntArray - 6]] + ' million');
      reversedWordArray.splice(endOfWordArray - 7, 1)
    } else if (preDecimalNumbers[endOfIntArray - 7] > 0) {
      reversedWordArray.splice(endOfWordArray - 7, 1, tens[preDecimalNumbers[endOfIntArray - 7]]);
      reversedWordArray.splice(endOfWordArray - 6, 1, ones[preDecimalNumbers[endOfIntArray - 6]] + ' million')

    }
    // If statement for 100,000,000s place
    if (preDecimalNumbers[endOfWordArray - 8] > 0) {
      reversedWordArray.splice(endOfWordArray - 8, 1, ones[preDecimalNumbers[endOfIntArray - 8]] + ' hundred');
    }


  // console.log(reversedWordArray)

  // Concatenate the reversedWordArray and add the cents
  var concatArray = reversedWordArray.join(' ');
  // console.log('this is the solution: ', concatArray)
  // Concatenate the preDecimal array with the postDecimal variable
  var solution = concatArray + ' ' + postDecimal;
  // console.log('this is the solution: ', solution)

  // Correct the spaces in the string with a function
  var solution2 = solution.replace(/  +/g, ' ');
  // console.log('this is the ultimate solution:', solution2)
  
  // Capitalize the first letter of the string
  var ultimateSolution = (function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  })(solution2);

  // Solve fringe case where there are no cents (actually no, I assume .00 will be used for 0 cents)

  // Remove 'and' for cases where there is nothing before the decimal

  if (before === '0') {
    ultimateSolution = postDecimal.replace('and ', '');
  }

  return ultimateSolution;

  console.log(ultimateSolution);




}

numToWords(test13);
