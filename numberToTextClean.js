// This solution works up to 999,999,999 in it's current state.
var test13 = 999999999.79; // This one works
var test16 = 0.9;
var test1 = 1;
var test2 = 1000000000;
var test3 = 1.3345;
var test4 = 100000000000000090;
var test5 = "dkfajs;";

function numToWords(num) {
  // Instatiate variables
  // An array of integers created from the original number. Integers are in string form.
  var intArray = [];
  var checkInput;
  var checkNumber;
  // Word arrays to correspond with numbers.
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  const unique = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];
  const bigNums = ["hundred", "thousand", "million", "billion", "trillion"];

  var preDecimalNumbersArray = [];
  var postDecimal = "";
  var ultimateSolution = "";
  var wordArray = [];

  // Check that the thing passed is a number.
  if (num != parseFloat(num)) {
    console.log("please enter a valid dollar amount.");
    checkInput = false;
  } else {
    checkInput = true;
  }
  // Split the number on the decimal and generate preDecimal array and postDecimal variable.
  splitOnDecimal();
  // Validate that the entry is a number and valid dollar amount.
  if (checkInput === true) checkNumber = validateNumber();
  console.log("fjdkslaf;", checkNumber);
  console.log("this is pre", preDecimal);
  console.log("this is post", postDecimal);

  wordArray.length = preDecimalNumbersArray.length;
  console.log("this is word Array", wordArray);
  var endOfWordArray = wordArray.length - 1;
  var endOfIntArray = preDecimalNumbersArray.length - 1;
  console.log("this is endOfIntArray", endOfIntArray);
  // Generate an array of words after validation.
  if (checkNumber === true) {
    // Creating a variable to represent the end of the word array for use with if statments.
    createWordArray();
    // Concatenate the word array, normalize and return solution
    fixSolution();
  } else {
    console.log(
      "the number entered is outside of this functions constraints. It is either more than 1 trillion or more than 2 numbers were entered for change."
    );
  }

  // Should really create a function for the places and reuse that rather than rewrite code

  // if()
  // *** Functions ***
  // Function to split the number on the decimal and generate a preDecimal integer array and a postDecimal variable.
  function splitOnDecimal() {
    // An array of each integer from the number in an array of integer strings. Also check that the number fits within constraints.
    let intArray = [];

    // Stringify the number so string methods can be applied and split on the number's decimal then split the preDecimal number into an integer array.
    intArray = num.toString().split(".");
    // Iterate over the array created by spliting the number

    let beforeDecimal = intArray[0];
    let afterDecimal = intArray[1];
    console.log("this is before decimal", beforeDecimal);

    console.log("this is after", afterDecimal);
    preDecimal = beforeDecimal.split("");
    console.log(preDecimal);

    postDecimal = afterDecimal;

    preDecimal.forEach(function(index) {
      preDecimalNumbersArray.push(parseInt(index));
    });
  }

  // Function to validate that the number passed is a number and a valid dollar amount.
  function validateNumber() {
    // Check to be sure that the number is less than one billion.
    if (preDecimalNumbersArray.length > 16) {
      return false;
    } else if (postDecimal.length > 2) {
      return false;
    } else {
      return true;
    }
  }
  // Function to fix spacing in the solution.
  function fixSolution() {
    console.log(wordArray);
    // Concatenate the wordArray and add the cents
    let concatenatedArray = wordArray.join(" ");

    // Concatenate the preDecimal array with the postDecimal variable
    let solution = concatenatedArray + " and " + postDecimal + "/100 dollars";

    // Correct the spaces in the string
    let solution2 = solution.replace(/  +/g, " ");

    // Solve fringe case where there are no cents (actually no, I assume .00 will be used for 0 cents)

    // Capitalize the first letter of the string
    ultimateSolution = (function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })(solution2);
  }

  // Function to create an array of words.
  function createWordArray() {
    // If statement for ones & teens place
    if (
      preDecimalNumbersArray[endOfIntArray] > 0 &&
      preDecimalNumbersArray[endOfIntArray - 1] === 1
    ) {
      wordArray.splice(
        endOfWordArray,
        1,
        unique[preDecimalNumbersArray[endOfIntArray]]
      );
      wordArray.splice(endOfWordArray - 1, 1);
    } else {
      wordArray.splice(
        endOfWordArray,
        1,
        ones[preDecimalNumbersArray[endOfIntArray]]
      );
    }

    // If statement for 10s place
    if (preDecimalNumbersArray[endOfWordArray - 1] > 1) {
      wordArray.splice(
        endOfWordArray - 1,
        1,
        tens[preDecimalNumbersArray[endOfIntArray - 1]]
      );
    }

    // If statement for 100s place
    if (preDecimalNumbersArray[endOfWordArray - 2] > 0) {
      wordArray.splice(
        endOfWordArray - 2,
        1,
        ones[preDecimalNumbersArray[endOfIntArray - 2]] + " hundred"
      );
    }

    // If statement for 1000s, teen 1000s & 10,000s place
    if (
      preDecimalNumbersArray[endOfIntArray - 3] > 0 &&
      preDecimalNumbersArray[endOfIntArray - 4] === 1
    ) {
      wordArray.splice(
        endOfWordArray - 3,
        1,
        unique[preDecimalNumbersArray[endOfIntArray - 3]] + " thousand"
      );
      wordArray.splice(endOfWordArray - 4, 1);
    } else if (preDecimalNumbersArray[endOfIntArray - 4] > 0) {
      wordArray.splice(
        endOfWordArray - 4,
        1,
        tens[preDecimalNumbersArray[endOfIntArray - 4]]
      );
      wordArray.splice(
        endOfWordArray - 3,
        1,
        ones[preDecimalNumbersArray[endOfIntArray - 3]] + " thousand"
      );
    }

    // If statement for 100,000s place
    if (preDecimalNumbersArray[endOfWordArray - 5] > 0) {
      wordArray.splice(
        endOfWordArray - 5,
        1,
        ones[preDecimalNumbersArray[endOfIntArray - 5]] + " hundred"
      );
    }

    // If statement for tens, teens & 1,000,000s place
    if (
      preDecimalNumbersArray[endOfIntArray - 6] > 0 &&
      preDecimalNumbersArray[endOfIntArray - 7] === 1
    ) {
      wordArray.splice(
        endOfWordArray - 6,
        1,
        unique[preDecimalNumbersArray[endOfIntArray - 6]] + " million"
      );
      wordArray.splice(endOfWordArray - 7, 1);
    } else if (preDecimalNumbersArray[endOfIntArray - 7] > 0) {
      wordArray.splice(
        endOfWordArray - 7,
        1,
        tens[preDecimalNumbersArray[endOfIntArray - 7]]
      );
      wordArray.splice(
        endOfWordArray - 6,
        1,
        ones[preDecimalNumbersArray[endOfIntArray - 6]] + " million"
      );
    }

    // If statement for 100,000,000s place
    if (preDecimalNumbersArray[endOfWordArray - 8] > 0) {
      wordArray.splice(
        endOfWordArray - 8,
        1,
        ones[preDecimalNumbersArray[endOfIntArray - 8]] + " hundred"
      );
    }
  }

  return ultimateSolution;
}

console.log(numToWords(test13));
