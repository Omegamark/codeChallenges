// This solution works up to 999,999,999 in it's current state.
// Need to fix validation for 0
var test13 = 999999999.79; // This one works
var test16 = 0.9;
var test1 = 1;
var test2 = 1000000000;
var test3 = 1.3345;
var test4 = 100000000000000;
var test5 = "dkfajs;";
var test6 = 0;
console.log(test4.length);
function numToWords(num) {
  // Instatiate variables
  // An array of integers created from the original number. Integers are in string form.
  var intArray = [];
  var checkInput, checkNumber;
  var string;
  // Word arrays to correspond with numbers.
  var ONE_TO_NINETEEN = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
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

  var TENS = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  var SCALES = ["thousand", "million", "billion", "trillion"];

  var preDecimalNumbersArray = [];
  var postDecimal = "";
  var ultimateSolution = "";
  var wordArray = [];
  var endOfWordArray;
  var endOfIntArray;
  var beforeDecimal = 0;
  var afterDecimal;
  var string;
  // Check that the thing passed is a number.
  validateInput();
  // Split the number on the decimal and generate preDecimal array and postDecimal variable.
  splitOnDecimal();
  // Validate that the entry is a number and valid dollar amount.
  console.log("CHECKINPUT", checkInput);
  if (checkInput === true) checkNumber = validateNumber();
  console.log("fjdkslaf;", checkNumber);
  console.log("this is pre", preDecimal);
  console.log("this is post", postDecimal);

  wordArray.length = preDecimalNumbersArray.length;
  console.log("this is word Array", wordArray);
  endOfWordArray = wordArray.length - 1;
  endOfIntArray = preDecimalNumbersArray.length - 1;
  console.log("this is endOfIntArray", endOfIntArray);
  // Generate an array of words after validation.

  console.log("CHECKNUMBER", checkNumber);
  if (checkNumber === true) {
    // Creating a variable to represent the end of the word array for use with if statments.
    createWordArray();
    // Concatenate the word array, normalize and return solution
    // fixSolution();
  } else {
    console.log(
      "The input is outside of this function's constraints. It is either more than 1 trillion, more than 2 numbers were entered for change, or it is not a number."
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

    beforeDecimal = intArray[0];
    afterDecimal = intArray[1];
    console.log("this is before decimal", beforeDecimal);

    console.log("this is after", afterDecimal);
    preDecimal = beforeDecimal.split("");
    console.log(preDecimal);

    postDecimal = afterDecimal;

    preDecimal.forEach(function(index) {
      preDecimalNumbersArray.push(parseInt(index));
    });
  }
  // Function to check that the thing passed is a number.

  function validateInput() {
    if (num != parseFloat(num)) {
      console.log("please enter a valid dollar amount.");
      checkInput = false;
    } else {
      checkInput = true;
    }
  }
  // Function to validate that the number passed is a number and a valid dollar amount.
  function validateNumber() {
    // Check to be sure that the number is less than one billion or zero.
    if (preDecimalNumbersArray[0] === 0) {
      ultimateSolution = "zero";
      return false;
    } else if (preDecimalNumbersArray.length > 15) {
      return false;
    } else if (!postDecimal) {
      return true;
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
    let roughConcatenatedArray = wordArray.join(" ");

    // Concatenate the preDecimal array with the postDecimal variable
    let preliminarySolution1 =
      roughConcatenatedArray + " and " + postDecimal + "/100 dollars";

    // Correct the spaces in the string
    let preliminarySolution2 = preliminarySolution1.replace(/  +/g, " ");

    // Capitalize the first letter of the string
    ultimateSolution = (function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })(preliminarySolution2);
  }
  // Function to turn number into 3 digit chunks for reference.

  // Function to create an array of words.
  function createWordArray() {
    // helper function for use with Array.filter
    function isTruthy(item) {
      return !!item;
    }
    function chunk(number) {
      (number = beforeDecimal), (thousands = []);

      while (number > 0) {
        thousands.push(number % 1000);
        number = Math.floor(number / 1000);
      }

      return thousands;
    }

    console.log("CHUNKY!!!!!", chunk());
    // **************
    // translate a number from 1-999 into English
    function inEnglish(number) {
      var thousands,
        hundreds,
        tens,
        ones,
        words = [];

      if (number < 20) {
        return ONE_TO_NINETEEN[number - 1]; // may be undefined
      }

      if (number < 100) {
        ones = number % 10;
        tens = (number / 10) | 0; // equivalent to Math.floor(number / 10)

        words.push(TENS[tens - 1]);
        words.push(inEnglish(ones));

        return words.filter(isTruthy).join("-");
      }

      hundreds = (number / 100) | 0;
      words.push(inEnglish(hundreds));
      words.push("hundred");
      words.push(inEnglish(number % 100));

      return words.filter(isTruthy).join(" ");
    }
    // append the word for a scale. Made for use with Array.map
    function appendScale(chunk, exp) {
      var scale;
      if (!chunk) {
        return null;
      }
      scale = SCALES[exp - 1];
      return [chunk, scale].filter(isTruthy).join(" ");
    }
    string = chunk()
      .map(inEnglish)
      .map(appendScale)
      .filter(isTruthy)
      .reverse()
      .join(" ");
  }
  console.log(string);
  return ultimateSolution;
}

console.log(numToWords(test13));
