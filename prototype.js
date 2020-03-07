// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
  })();

//   Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.


// useful array function is Array.prototype.filter(), or simply filter()./////////////

// filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];

  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Add your code above this line

  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});


// We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

// 

const squareList = (arr) => {
  // Only change code below this line
  const squareList = arr =>
  arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



// Every method //////////
// The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
// or example, the following code would check if every element in the numbers array is less than 10:

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});

// check positive by every method 

function checkPositive(arr) {
  // Add your code below this line
  return arr.every(function(value) {
    return value > 0;
  });
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);