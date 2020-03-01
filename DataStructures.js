// indexOf() method//////////////

// JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
    // change code below this line
   if(arr.indexOf(elem)>=0){
     return true;
   }
    // change code above this line
  return false;
  }
  
  // change code here to test different cases:
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//  We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed. 

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
  for(let i=0; i<arr.length; i++){
   if (arr[i].indexOf(elem) == -1){
     newArr.push(arr[i]);
   }
  }
  return newArr;
  }
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  