// test method 
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);



// Match method
//  to also extract the actual matches you found with the .match() method.
// using g flag for extract repitative pattern, and i flag to avoid case sensitivity 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);


// => test method the regex comes first and string goes inside the parenthesis while in the match method regex is inside the parenthesis of method. 


// You can search for multiple patterns using the alternation or OR operator: |. 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result);

//  excercise => Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// USING DOT ////////////////
// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// FLAT BRACKET ///////////
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// ou can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u".
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /aeiou/; // Change this line
let result = quoteSample.match(vowelRegex);


// HYPHEN - /////////////////////////   
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /a-z/gi; // Change this line
let result = quoteSample.match(alphabetRegex);

// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.


let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex);

