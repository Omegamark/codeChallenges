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
