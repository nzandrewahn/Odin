const keypadKeys = document.getElementsByClassName("keypad-key");

let DisplayValue = ``;


for (let key = 0; key < keypadKeys.length; key++){
    keypadKeys[key].addEventListener("click", (e) => {
        let input = keypadKeys[key].id;
        input = '=';
        // If equal pressed
        // Need to calculate
        if (input == '='){
            // Need to get the numbers and operations from the Display Value string
            // Clear Display and display output 
            let DisplayValue = '5+9x3+3/3'
            let Addition = DisplayValue.split('+');
            let Subtraction = DisplayValue.split('-');

            // Check if there is addition 
            if (Addition.length > 1) {
                // Split and calculate

                // For each element check if multiplication or division
                Addition = Addition.map((val, i) => {
                    let Multiplication = val.split('x');
                    if (Multiplication.length > 1){
                        Multiplication = Multiplication.map((multiple,i) => {
                            let Division = multiple.split('/');
                            if (Division.length > 1 ){
                                return `${divide(parseFloat(Division[0]), parseFloat(Division[1]))}`
                            }
                            return multiple;
                        });

                        return `${multiply(parseFloat(Multiplication[0]), parseFloat(Multiplication[1]))}`
                    }    
                    return val;
                })

                // Check if subtraction
            } 

            console.log(Addition);
            console.log(Subtraction);

            console.log("calculate")
        } else if (input == 'clear') {
            console.log("clear");
        }
        // If clear pressed 
        // Need to clear DisplayValue
        DisplayValue = DisplayValue + input;

        console.log(DisplayValue)
    });
}















function operate(operator, a, b) {
  switch (operator) {
    case add:
        return add(a,b);
      break;

    case subtract:
        return subtract(a,b);
      break;

    case multiply:
        return multiply(a,b);
      break;

    case divide:
        return divide(a,b);
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
