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
let myRegex = /[h-s2-6]/gi; // Changed this line
let result = quoteSample.match(myRegex);

// ceret (^) //////////
// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

let quoteSample = quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Changed this line
let result = quoteSample.match(myRegex);

// PLUS SIGN (+) ///////////////////
// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
// For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Changed this line\
let result = difficultSpelling.match(myRegex);

// STAR SIGN (*)

// There's also an option that matches characters that occur zero or more times.
// The character to do this is the asterisk or star: *.
chewieQuote =  "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/gi;
let result = chewieQuote.match(chewieRegex);

// Lazy Matching (?)////////////////
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].


// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

// ^ beginig patern match
//  Outside of a character set, the caret is used to search for patterns at the beginning of strings. no flat bracket 
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Changed this line
let result = calRegex.test(rickyAndCal);

// $ ending pattern match//////////////
// You can search the end of strings using the dollar sign character $ at the end of the regex.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Changed this line
let result = lastRegex.test(caboose);

//  \w Match all letter and numbers////////////////
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Changed this line
let result = quoteSample.match(alphabetRegexV2).length;

// \d Match all numbers only
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Changed this line
let result = movieName.match(numRegex).length;

//  \D match all non-numbers 
// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

// Match white-space using \s   /////////
// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Changed this line
let result = sample.match(countWhiteSpace);

// match non-white space using \S  //////////////
// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. 
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Changed this line
let result = sample.match(countNonWhiteSpace);

// using comma {,} 
// To only specify the lower number of patterns, keep the first number followed by a comma.
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);

// curly bracket with number
// To specify a certain number of patterns, just have that one number between the curly brackets.
// For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

//  ? 
// You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
// For example, there are slight differences in American and British English and you can use the question mark to match both spellings.
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
