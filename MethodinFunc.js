// Math.random() + Math.floor method 


// Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

// To do this, we'll define a minimum number min and a maximum number max.

// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
  ourRandomRange(1, 9);


// parseInt with Rdix
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// parseInt(string, radix);

// And here's an example:

// var a = parseInt("11", 2);

// The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3

function convert (str) {
    parseInt(str, 2);
}

console.log(convert("222"));