// This solution works up to 999,999,999 in it's current state.
var test13 = 999999999.79; // This one works
var test16 = 0.9;
var test1 = 1;
var test2 = 1000000000;
var test3 = 1.3345;

function numToWords(num) {
  // Validate that the entry is a number and valid dollar amount.
  // validateNumber();
  // An array of integers created from the original number. Integers are in string form.
  var intArray = [];
  // Word arrays to correspond with numbers.
  var ones = [
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
  var unique = [
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
  var tens = [
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

  var preDecimalArray = [];
  var preDecimalNumber;
  var postDecimal = "";
  var preDecimalNumbers = [];
  var ultimateSolution = "";

  // Split the number on the decimal and generate preDecimal array and postDecimal variable.
  splitOnDecimal();
  console.log("this is pre", preDecimal);
  console.log("this is post", postDecimal);
  var reversedWordArray = [];

  reversedWordArray.length = preDecimalNumbers.length;

  var endOfWordArray = reversedWordArray.length - 1;
  var endOfIntArray = preDecimalNumbers.length - 1;

  // Should really create a function for the places and reuse that rather than rewrite code

  // If statement for ones & teens place
  if (
    preDecimalNumbers[endOfIntArray] > 0 &&
    preDecimalNumbers[endOfIntArray - 1] === 1
  ) {
    reversedWordArray.splice(
      endOfWordArray,
      1,
      unique[preDecimalNumbers[endOfIntArray]]
    );
    reversedWordArray.splice(endOfWordArray - 1, 1);
  } else {
    reversedWordArray.splice(
      endOfWordArray,
      1,
      ones[preDecimalNumbers[endOfIntArray]]
    );
  }

  // If statement for 10s place
  if (preDecimalNumbers[endOfWordArray - 1] > 1) {
    reversedWordArray.splice(
      endOfWordArray - 1,
      1,
      tens[preDecimalNumbers[endOfIntArray - 1]]
    );
  }

  // If statement for 100s place
  if (preDecimalNumbers[endOfWordArray - 2] > 0) {
    reversedWordArray.splice(
      endOfWordArray - 2,
      1,
      ones[preDecimalNumbers[endOfIntArray - 2]] + " hundred"
    );
  }

  // If statement for 1000s, teen 1000s & 10,000s place
  if (
    preDecimalNumbers[endOfIntArray - 3] > 0 &&
    preDecimalNumbers[endOfIntArray - 4] === 1
  ) {
    reversedWordArray.splice(
      endOfWordArray - 3,
      1,
      unique[preDecimalNumbers[endOfIntArray - 3]] + " thousand"
    );
    reversedWordArray.splice(endOfWordArray - 4, 1);
  } else if (preDecimalNumbers[endOfIntArray - 4] > 0) {
    reversedWordArray.splice(
      endOfWordArray - 4,
      1,
      tens[preDecimalNumbers[endOfIntArray - 4]]
    );
    reversedWordArray.splice(
      endOfWordArray - 3,
      1,
      ones[preDecimalNumbers[endOfIntArray - 3]] + " thousand"
    );
  }

  // If statement for 100,000s place
  if (preDecimalNumbers[endOfWordArray - 5] > 0) {
    reversedWordArray.splice(
      endOfWordArray - 5,
      1,
      ones[preDecimalNumbers[endOfIntArray - 5]] + " hundred"
    );
  }

  // If statement for tens, teens & 1,000,000s place
  if (
    preDecimalNumbers[endOfIntArray - 6] > 0 &&
    preDecimalNumbers[endOfIntArray - 7] === 1
  ) {
    reversedWordArray.splice(
      endOfWordArray - 6,
      1,
      unique[preDecimalNumbers[endOfIntArray - 6]] + " million"
    );
    reversedWordArray.splice(endOfWordArray - 7, 1);
  } else if (preDecimalNumbers[endOfIntArray - 7] > 0) {
    reversedWordArray.splice(
      endOfWordArray - 7,
      1,
      tens[preDecimalNumbers[endOfIntArray - 7]]
    );
    reversedWordArray.splice(
      endOfWordArray - 6,
      1,
      ones[preDecimalNumbers[endOfIntArray - 6]] + " million"
    );
  }

  // If statement for 100,000,000s place
  if (preDecimalNumbers[endOfWordArray - 8] > 0) {
    reversedWordArray.splice(
      endOfWordArray - 8,
      1,
      ones[preDecimalNumbers[endOfIntArray - 8]] + " hundred"
    );
  }
  // Fix spacing in the solution.
  fixSolution();

  // Function to fix spacing in the solution.
  function fixSolution() {
    console.log(reversedWordArray);
    // Concatenate the reversedWordArray and add the cents
    let concatenatedArray = reversedWordArray.join(" ");

    // Concatenate the preDecimal array with the postDecimal variable
    let solution = concatenatedArray + " " + postDecimal;

    // Correct the spaces in the string
    let solution2 = solution.replace(/  +/g, " ");

    // Solve fringe case where there are no cents (actually no, I assume .00 will be used for 0 cents)

    // Remove 'and' for cases where there is nothing beforeDecimal the decimal
    if (preDecimal.length - 1 === 0 || null || undefined) {
      console.log("dfsdjfk", preDecimal.length - 1);
      ultimateSolution = postDecimal.replace("and ", "");
    } else {
      // Capitalize the first letter of the string
      ultimateSolution = (function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      })(solution2);
    }
  }
  // Function to split the number on the decimal and generate a preDecimal integer array and a postDecimal variable.
  function splitOnDecimal() {
    // An array of each integer from the number in an array of integer strings. Also check that the number fits within constraints.
    let stringifiedNumber = [];

    // Stringify the number so string methods can be applied and split on the number's decimal then split the preDecimal number into an integer array.
    stringifiedNumber = num.toString().split(".");
    for (i = 0; i < stringifiedNumber.length; i++) {
      intArray.push(stringifiedNumber[i]);
    }
    let beforeDecimal = intArray[0];
    let afterDecimal = intArray[1];
    console.log("this is before decimal", beforeDecimal);

    console.log("this is after", afterDecimal);
    preDecimal = beforeDecimal.split("");
    console.log(preDecimal);

    postDecimal = "and " + afterDecimal + "/100 dollars";

    preDecimal.forEach(function(index) {
      preDecimalNumbers.push(parseInt(index));
    });
  }
  // Function to validate that the number passed is a number and a valid dollar amount.
  function validateNumber() {
    // Check that the thing passed is a number.
    if (num != parseFloat(num)) console.log("not a number");
    // Check to be sure that the number is less than one billion.
    if (beforeDecimal.length > 9) {
      console.log("The number you chose is outside of the constraints.");
      return false;
    } else if (afterDecimal.length > 2) {
      console.log(
        "There is no monitary denomination less than a penny in the USA"
      );
      return false;
      // ultimateSolution = "This is not a valid dollar amount!";
      // return ultimateSolution;
    }
  }

  return ultimateSolution;
}

console.log(numToWords(test13));
