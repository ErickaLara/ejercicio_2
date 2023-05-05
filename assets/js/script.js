// declararo variables 
let num = 0

// ingreso de valores
num = parseInt(prompt("Ingrese Grados Celsius"))
let n1 = parseFloat(num);

let tempKelv = n1 + 273.15;
let tempFahr = (n1 * 9/5) + 32;

document.write("<p>La temperatura " + n1 + "  °C, equivale: </p>")
document.write("<p>En Kelvin es  " + tempKelv + " K. </p>");
document.write("<p>En Fahrenheit es  " + tempFahr + "°F.</p>");
