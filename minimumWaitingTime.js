function minimumWaitingTime(queries) {
  if (queries.length !== 0) {
    //Define a waitTime variable:
    let waitTime = 0;
    //First you will want to sort the array from smallest runtime to largest (want the largest to go last)
    let sortedQueries = queries.sort((a, b) => a - b);

    //Define a currWait variable and set equal to 0:
    let currWait = 0;

    //Iterate through the array, if the value at the current index -1 does not equal undefined, it will need to get added to the current wait time
    for (let i = 0; i < sortedQueries.length; i++) {
      //If the time at i - 1 is not undefined, add it to the currWait variable
      if (sortedQueries[i - 1]) {
        currWait += sortedQueries[i - 1];
        //Then add the currWait for the index the iteration is at to the waitTime (final wait time):
        waitTime += currWait;
      }
    }
    //After iteration, return waitTime;
    return waitTime;
  }
  //Else, there are no queries, waitTime is 0;
  return 0;
}

let test = [3, 2, 1, 2, 6];
minimumWaitingTime(test);
