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