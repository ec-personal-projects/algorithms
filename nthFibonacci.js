//input a single integer
//output a single integer that is the nth - 1 value plus n

//define a function getNthFib
function getNthFib(n) {
  //define stoppingPoint variable = argument - 1;
  const stop = n - 1;
  //define starting array = [0, 1];
  let array = [0, 1];
  //define firstIndex = 0
  let firstIndex = 0;
  //while array.length <= stoppingPoint
  while (array.length <= stop) {
    //let secondIndex = firstIndex - 1;
    let secondIndex = firstIndex - 1;
    //if array[secondIndex] !== undefined
    if (array[secondIndex] !== undefined) {
      //let sum = array[firstIndex] + array[secondIndex];
      let sum = array[firstIndex] + array[secondIndex];
      //push sum to array
      array.push(sum);
      //firstIndex += 1;
      firstIndex++;
    }
    //else, just increment the firstIndex
    else {
      firstIndex++;
    }
  }
  //return array[stoppingPoint]
  return array[stop];
}

//What is happening:

//array of nums = [0, 1];
//given 6 as argument:
//1. num1 = array[0] = 0; num2 = array[0 - 1] = undefined; 0 + undefined = undefined: do nothing
//2. num1 = array[1] = 1; num2 = array[0] = 0; 0 + 1 = 1; push 1 to array;
//3. num1 = array[2] = 1; num2 = array[1] = 1; 1 + 1 = 2; push 2 to array;
//4. num1 = array[3] = 2; num2 = array[2] = 1; 1 + 2 = 3; push 3 to array;
//5. num1 = array[4] = 3; num2 = array[3] = 2; 2 + 3 = 5; push 5 to array;
//Array length = argument - 1. stop and return array[array.length - 1];
