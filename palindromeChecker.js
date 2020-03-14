// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
    // Good luck!
  
    var x = /[\W_]/g;                                    
    var y = str.replace( re ,'');
    var final = y.toLowerCase();
                            
    var reverse = final.split('').reverse().join('');
    
    if (reverse != final) return false;
    return true;
  }
  
  
  
  console.log(palindrome("eye"));
  