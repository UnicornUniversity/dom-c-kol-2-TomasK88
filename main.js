
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (inputNumberSystem !== 10 || outputNumberSystem !== 2) { //kontrola zda se převádí z desítkové do dvojkové
    console.log("Je podporován pouze převod z desítkové do dvojkové soustavy."); //vypsání chyby
    return "";
}

let decNumber = Number(inputNumber); //převod vstupu na číslo

if (isNaN(decNumber)) {
  console.log("Vstup musí být číslo"); //kontrola, že se jedná o číslo
  return "";
} else if (decNumber < 0) {  //kontrola, zda je číslo kladné
  console.log("Číslo musí být kladné");
  return "";
} else if (decNumber === 0) { // pokud je se rovná číslo v desítkové soustavě 0, tak je i ve dvojkové soustavě nula a vrátí se tedy rovnou "0"
  return "0";
}

let binNumber = "";
for (let number = decNumber; number > 0; number = (number - (number % 2)) / 2) { //cyklus postupně dělící číslo a zapisující zbytek po dělení do proměnné binNumber
    let remainder = number % 2;
    binNumber = remainder + binNumber;
}

return binNumber;
}


/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [2];
}