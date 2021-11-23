function isPalindrome(string) {
  //Define result
  let result = true;
  //Turn string into an array
  let arr = string.split('');
  //If arr length is odd, remove middle character
  if (arr.length % 2 !== 0) {
    let mid = arr.splice(Math.floor(arr.length / 2), 1);
  }
  
  //Define an empty queue:
  let queue = [];
  //Iterate through the array
  arr.map((val, idx) => {
    //If the idx is in first half, push to queue
    if (idx < arr.length / 2) {
      queue.push(val);
    } else {
    //Else check with back of queue
      //If curr val doesnt equal back of queue, result set to false, break
      if (val !== queue[queue.length - 1]) {
        result = false;
      }
      queue.pop();
      //Else pop last value off of queue
    }
  })

  //Return result
  return result;
}

let test = 'abca'

console.log(isPalindrome(test));




//MUCH EASIER SOLUTION:
function betterSolution(string) {
  //Reverse the string, and see if it equals input string
  
  //Define reverse string as empty
  let reverseString = '';
  //Iterate through the string backwards, adding it to reverse string
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return string === reverseString
}