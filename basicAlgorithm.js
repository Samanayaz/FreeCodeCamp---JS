function convertToF(celsius) {
    // Only change code below this line
    var fahrenheit = celsius * (9 / 5) + 32;
  
    // Only change code above this line
    if (typeof fahrenheit !== "undefined") {
      return fahrenheit;
    } else {
      return "fahrenheit not defined";
    }
  }

//   Reverse a streing
function reverseString(str) {
    var rev = str.split("");
    rev.reverse();
    return str = rev.join("");
    }
    
    reverseString(“hello”);