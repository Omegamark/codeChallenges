// Write some code that will accept an amount and convert it to the
// appropriate string representation.
//
// Example:
// Convert 2523.04
// to “Two thousand five hundred twenty-three and 04/100
// dollars”

// Expected output = “Two thousand five hundred twenty-three and 04/100

var test = 2523.04
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
  console.log('this is before', before);
  var after = intArray[1];
  console.log('this is after', after);
  // Create reference arrays
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var unique = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // Split the before string(possibly reverse for the sake of map)
  var preDecimal = before.split('');
  console.log('This is preDecimal', preDecimal);
  // postDecimal needs to just add 'and xx/100' to the number
  var postDecimal = "and " + after + "/100 dollars";
  console.log('this is postDecimal', postDecimal);

  // Get the length of the preDecimal number for reference in the map ie: 5 = 10,000 4 = 1,000 3 = 100 etc.
  var numberLength = preDecimal.length;
  console.log('this is number length', numberLength);

  // Convert the preDecimal array from strings to numbers
  var preDecimalNumbers = [];
  preDecimal.forEach(function(index) {
    preDecimalNumbers.push(parseInt(index));
  });

  console.log(preDecimalNumbers)
  // Reverse preDecimalNumbers so that the 1s place is first
  var reversedPreDecimalNumbers = [];
  reversedPreDecimalNumbers = preDecimalNumbers.reverse();
  console.log(reversedPreDecimalNumbers)

  // Do the regular ones first, then figure out the unique cases

  // Loop through (using 'map') and convert the stringified numbers to words

  var reversedWordArray = [];
  reversedPreDecimalNumbers.map(function(int) {
    console.log(int);
    // First find unique numbers
    // Skip the ones place if the number is unique
    // Convert ones place to words
    if(reversedPreDecimalNumbers[0] > 0){
    reversedWordArray.push(ones[int])
    
    } else if (reversedPreDecimalNumbers[1] > 0) {
      reversedWordArray.push(tens[int])
    } else if (reversedPreDecimalNumbers[2] > 0) {
      reversedWordArray.push(ones[int] + ' hundred')
    } else if (reversedPreDecimalNumbers[3] > 0) {
      reversedWordArray.push(ones[int] + ' thousand')
    }
  });
  console.log(reversedWordArray)

  // Concatenate the preDecimal array

  // Concatenate the preDecimal array with the postDecimal variable

  // Capitalize the first letter of the word string


}

numToWords(test);
