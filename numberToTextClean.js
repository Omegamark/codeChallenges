// This solution works up to 999,999,999 in it's current state.

var check = [];
var intArray = [];

function numToWords (num) {
  var stringifiedNumber = [];
  var intArray = [];

  stringifiedNumber = num.toString().split(".");

  for (i = 0; i < stringifiedNumber.length; i++) {
    intArray.push(stringifiedNumber[i]);
  }
  var before = intArray[0];
  var after = intArray[1];

  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var unique = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  var preDecimal = before.split('');
  var postDecimal = "and " + after + "/100 dollars";
  var numberLength = preDecimal.length;

  var preDecimalNumbers = [];

  preDecimal.forEach(function(index) {
    preDecimalNumbers.push(parseInt(index));
  });

  var reversedWordArray = [];

  reversedWordArray.length = preDecimalNumbers.length;


  var endOfWordArray = reversedWordArray.length - 1;
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
    reversedWordArray.splice(endOfWordArray - 4, 1);
  } else if (preDecimalNumbers[endOfIntArray - 4] > 0) {
    reversedWordArray.splice(endOfWordArray - 4, 1, tens[preDecimalNumbers[endOfIntArray - 4]]);
    reversedWordArray.splice(endOfWordArray - 3, 1, ones[preDecimalNumbers[endOfIntArray - 3]] + ' thousand');

  }


  // If statement for 100,000s place
  if (preDecimalNumbers[endOfWordArray - 5] > 0) {
    reversedWordArray.splice(endOfWordArray - 5, 1, ones[preDecimalNumbers[endOfIntArray - 5]] + ' hundred');
  }

  // If statement for tens, teens & 1,000,000s place
  if(preDecimalNumbers[endOfIntArray - 6] > 0 && preDecimalNumbers[endOfIntArray - 7] === 1){
    reversedWordArray.splice(endOfWordArray - 6, 1, unique[preDecimalNumbers[endOfIntArray - 6]] + ' million');
    reversedWordArray.splice(endOfWordArray - 7, 1);
  } else if (preDecimalNumbers[endOfIntArray - 7] > 0) {
    reversedWordArray.splice(endOfWordArray - 7, 1, tens[preDecimalNumbers[endOfIntArray - 7]]);
    reversedWordArray.splice(endOfWordArray - 6, 1, ones[preDecimalNumbers[endOfIntArray - 6]] + ' million');

  }

  // If statement for 100,000,000s place
  if (preDecimalNumbers[endOfWordArray - 8] > 0) {
    reversedWordArray.splice(endOfWordArray - 8, 1, ones[preDecimalNumbers[endOfIntArray - 8]] + ' hundred');
  }

  // Concatenate the reversedWordArray and add the cents
  var concatArray = reversedWordArray.join(' ');

  // Concatenate the preDecimal array with the postDecimal variable
  var solution = concatArray + ' ' + postDecimal;

  // Correct the spaces in the string
  var solution2 = solution.replace(/  +/g, ' ');

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

}
