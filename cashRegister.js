function checkCashRegister(price, cash, cid) {
  //Find the sum of everything in the cash register:
  let registerSum = 0;
  cid.forEach((value) => (registerSum += value[1]));
  registerSum = (Math.round(registerSum * 100) / 100).toFixed(2);
  //Define a variable for storing a change object:
  let changeObject = {};

  function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }

  //Build a recursive function that adds change to the change object and removes the change from the register:
  function findChange(value) {
    //Base Case: argument is 0, no more change needed, just return
    value.toFixed(2);
    if (value === 0) {
      return;
      //Else if the change is greater than 100 AND there are 100 bills in cid, add a 100 to the change object, remove it from the cid, and recurse
    } else if (value >= 100 && cid[8][1] > 0) {
      if (changeObject[cid[8][0]]) {
        changeObject[cid[8][0]] += 100;
        value = round(value - 100, 2);
        cid[8][1] = cid[8][1] - 100;
        findChange(value);
      } else {
        changeObject[cid[8][0]] = 100;
        value = round(value - 100, 2);
        cid[8][1] = cid[8][1] - 100;
        findChange(value);
      }
      //Else if the change is greater than 20 AND there are 20 bills in cid, add a 20 to the change object, remove it from the cid, and recurse
    } else if (value >= 20 && cid[7][1] > 0) {
      if (changeObject[cid[7][0]]) {
        changeObject[cid[7][0]] += 20;
        value = round(value - 20, 2);
        cid[7][1] = cid[7][1] - 20;
        findChange(value);
      } else {
        changeObject[cid[7][0]] = 20;
        value = round(value - 20, 2);
        cid[7][1] = cid[7][1] - 20;
        findChange(value);
      }
      //Else if the change is greater than 10 AND there are 10 bills in cid, add a 10 to change object, remove it from cid, and recurse
    } else if (value >= 10 && cid[6][1] > 0) {
      if (changeObject[cid[6][0]]) {
        changeObject[cid[6][0]] += 10;
        value = round(value - 10, 2);
        cid[6][1] = cid[6][1] - 10;
        findChange(value);
      } else {
        changeObject[cid[6][0]] = 10;
        value = round(value - 10, 2);
        cid[6][1] = cid[6][1] - 10;
        findChange(value);
      }
      //Else if the change is greater than 5 AND there are 5 bills in the cid, add a 5 to change object, remove it from cid, and recurse
    } else if (value >= 5 && cid[5][1] > 0) {
      if (changeObject[cid[5][0]]) {
        changeObject[cid[5][0]] += 5;
        value = round(value - 5, 2);
        cid[5][1] = cid[5][1] - 5;
        findChange(value);
      } else {
        changeObject[cid[5][0]] = 5;
        value = round(value - 5, 2);
        cid[5][1] = cid[5][1] - 5;
        findChange(value);
      }
      //Else if the change is greater than 1 AND there are 1 bills in the cid, add a 1 to the change object, remove it from cid, and recurse
    } else if (value >= 1 && cid[4][1] > 0) {
      if (changeObject[cid[4][0]]) {
        changeObject[cid[4][0]] += 1;
        value = round(value - 1, 2);
        cid[4][1] = cid[4][1] - 1;
        findChange(value);
      } else {
        changeObject[cid[4][0]] = 1;
        value = round(value - 1, 2);
        cid[4][1] = cid[4][1] - 1;
        findChange(value);
      }
      //Else if the change is greater than 0.25 AND there are quarters in the cid, add a 0.25 to change object, remove it from cid, and recurse
    } else if (value >= 0.25 && cid[3][1] > 0) {
      if (changeObject[cid[3][0]]) {
        changeObject[cid[3][0]] += 0.25;
        value = round(value - 0.25, 2);
        cid[3][1] = cid[3][1] - 0.25;
        findChange(value);
      } else {
        changeObject[cid[3][0]] = 0.25;
        value = round(value - 0.25, 2);
        cid[3][1] = cid[3][1] - 0.25;
        findChange(value);
      }
      //Else if the change is greater than 0.10 AND there are dimes in the cid, add 0.10 to change object, remove it from cid, and recurse
    } else if (value >= 0.1 && cid[2][1] > 0) {
      if (changeObject[cid[2][0]]) {
        changeObject[cid[2][0]] += 0.1;
        value = round(value - 0.1, 2);
        cid[2][1] = cid[2][1] - 0.1;
        findChange(value);
      } else {
        changeObject[cid[2][0]] = 0.1;
        value = round(value - 0.1, 2);
        cid[2][1] = cid[2][1] - 0.1;
        findChange(value);
      }
      //Else if the change is greater than 0.05 AND there are nickles in the cid, add 0.05 to change object, remove it from cid, and recurse
    } else if (value >= 0.05 && cid[1][1] > 0) {
      if (changeObject[cid[1][0]]) {
        changeObject[cid[1][0]] += 0.05;
        value = round(value - 0.05, 2);
        cid[1][1] = cid[1][1] - 0.05;
        findChange(value);
      } else {
        changeObject[cid[1][0]] = 0.05;
        value = round(value - 0.05, 2);
        cid[1][1] = cid[1][1] - 0.05;
        findChange(value);
      }
      //Else if the change is greater than 0.01 AND there are pennies in the cid, add 0.01 to change object, remove it from cid, and recurse
    } else if (value >= 0.01 && cid[0][1] > 0) {
      if (changeObject[cid[0][0]]) {
        changeObject[cid[0][0]] += 0.01;
        value = round(value - 0.01, 2);
        cid[0][1] = cid[0][1] - 0.01;
        findChange(value);
      } else {
        changeObject[cid[0][0]] = 0.01;
        value = round(value - 0.01, 2);
        cid[0][1] = cid[0][1] - 0.01;
        findChange(value);
      }
    }
  }

  //Define a variable for total change needed (cash - price);
  let changeNeeded = cash - price;

  //If changeNeeded > registerSum return INSUFFICIENT FUNDS
  if (changeNeeded > registerSum) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
    //Else if changeNeeded = registerSum return CLOSED + cid
  } else if (round(changeNeeded, 2) === round(registerSum, 2)) {
    return {
      status: "CLOSED",
      change: cid,
    };
    //Else invoke findChange with changeNeeded and return OPEN + change
  } else {
    findChange(changeNeeded);
    //Change the changeObject to a changeArray:
    let changeArray = [];
    for (key in changeObject) {
      let touple = [key, round(changeObject[key], 2)];
      changeArray.push(touple);
    }
    return {
      status: "OPEN",
      change: changeArray,
    };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
