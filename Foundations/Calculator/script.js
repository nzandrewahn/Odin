const keypadKeys = document.getElementsByClassName("keypad-key");
const equationDisplay = document.getElementById("eq-disp");
const answerDisplay = document.getElementById("ans-disp");


let displayValue = [];
let operandList = ["clear", "=", "*", "/", "+", "-"];

let displayString = '';

// displayValue = [9, '*', 9, '+', 3, '-', 2, '*', 8]
// displayString = '9*9+3-2*8'


for (let key = 0; key < keypadKeys.length; key++) {
  keypadKeys[key].addEventListener("click", (e) => {
    let input = keypadKeys[key].id;


    if (input != "=" && input != "clear"){
      displayString = displayString + input;
      console.log(displayString);
      equationDisplay.innerHTML = displayString;
    }

    console.log(displayValue);
    // If equal pressed
    // Need to calculate
    if (input == "=") {
      let intbruh = 0;
      while (displayValue.some((r) => operandList.indexOf(r) > 0)) {
        console.log(displayValue);
        // Get index of muliplication
        let multInd = displayValue.indexOf("*");
        console.log(multInd)
        if (multInd > 0) {
          displayValue[multInd - 1] =
            displayValue[multInd + 1] * displayValue[multInd - 1];
          displayValue.splice(multInd, 2);
          continue;
        }

        console.log(displayValue);

        // Get index of division
        let divInd = displayValue.indexOf("/");
        if (divInd > 0) {
          displayValue[divInd - 1] =
            displayValue[divInd + 1] / displayValue[divInd - 1];
          displayValue.splice(divInd, 2);
          continue;
        }

        console.log(displayValue);


        // Get index of add
        let addInd = displayValue.indexOf("+");
        console.log(`addInd: ${addInd}`);
        if (addInd > 0) {
          displayValue[addInd - 1] =
            displayValue[addInd + 1] + displayValue[addInd - 1];
          displayValue.splice(addInd, 2);
          continue;
        }
        console.log(displayValue);

        // Get index of subtraction
        let subInd = displayValue.indexOf("-");
        if (subInd > 0) {
          displayValue[subInd - 1] =
            displayValue[subInd - 1] - displayValue[subInd + 1];
          displayValue.splice(subInd, 2);
          continue;
        }
      }
      
      let testVal = eval(displayString);
      console.log(displayString);
      answerDisplay.innerHTML = `${displayValue[0]}`
      console.log(`Answer is: ${testVal}`)

    } else if (input == "clear") {
      displayValue = [];
      displayString = '';
      equationDisplay.innerHTML = '';
      answerDisplay.innerHTML = '';
    } else if (!operandList.includes(input)) {
      displayValue.push(parseFloat(input));
    } else {
      displayValue.push(input);
    }

    // If clear pressed
    // Need to clear DisplayValue
    

  });
}

// Need to parse the string as a mathematical expression
// While displayValue contains either +*/-
// Need to continue to loop through it and get rid of the operations
// Displayvalue split +
// [5, 5/2*2-2-5*3]
// Evaluate each value in array
// check if has operation
// and split only if -
// [5/2*2, 2, 5*3]
// loop through array
// check if has operation (?) * or /
// Split by *
// [5/2, 2]

function operate(operator, a, b) {
  switch (operator) {
    case add:
      return add(a, b);
      break;

    case subtract:
      return subtract(a, b);
      break;

    case multiply:
      return multiply(a, b);
      break;

    case divide:
      return divide(a, b);
      break;

    default:
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
