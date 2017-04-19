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
  // Split the before and after strings and convert to words using reference arrays
  // Create reference arrays
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var unique = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // Split the before string(possibly reverse for the sake of map)
  var preDecimal = before.split('');
  console.log(preDecimal);
  // postDecimal needs to just add 'and xx/100' to the number
  var postDecimal = "and " + after + "/100";
  console.log(postDecimal);

  // Get the length of the preDecimal number for reference in the map ie: 5 = 10,000 4 = 1,000 3 = 100 etc.

  // Do the regular ones first, then figure out the unique cases

  // Loop through (using 'map') and convert the stringified numbers to words and concat
  preDecimal.map(function(int) {
    console.log('this is the map', int);
  });


  // Capitalize the first letter of the word string

  console.log(intArray);
}

numToWords(test);
