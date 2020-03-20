// Convert the given number into a roman numeral.

var convertToRoman = function(num) {
  var deciVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var roman = "";

  for (var index = 0; index < deciVal.length; index++) {
    while (deciVal[index] <= num) {
      roman += romanNumeral[index];
      num -= deciVal[index];
    }
  }

  return roman;
};

// next 
// PalindromeChheck
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing
// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

// 
// Return true if the passed string looks like a valid US phone number.
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");