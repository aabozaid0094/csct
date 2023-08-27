'use strict';

//#region Parameters
let generate_parameters = (parameters_count) => {
    return Array.from(Array(parameters_count).keys())
}
function parameters_exception(...parameters) {
    if(arguments.length!=2) throw new Error("Parameters count is not correct")
    else console.log("Parameters count is correct");
}
let parameters_handle = () => {
    let parameters_count_message = prompt("Enter a non-negative integer number of parameters");
    if (!isNaN(parameters_count_message) && Number.isInteger(Number(parameters_count_message)) && Number(parameters_count_message) > 0) 
    parameters_exception(...generate_parameters(Number(parameters_count_message)));
    else alert('Wrong number!!');
}
if (document.getElementById('parameters_button')) parameters_button.addEventListener("click", parameters_handle);
//#endregion

//#region Sum
let sum_handle = () =>{
    let operand_message, operands = new Array(), sum = 0;
    do {
        operand_message = prompt("Enter a number to be summed");
        if(operand_message) operands.push(operand_message);
    } while (operand_message);
    debugger;
    if (operands.length<1) throw new Error("Not enough operands!!");
    operands.forEach(operand => {
        if (!isNaN(Number(operand))) sum += Number(operand);
        else throw new Error("One or more operands are not number!!");
    });
    alert(`The summation is ${sum}`)
}
if (document.getElementById('sum_button')) sum_button.addEventListener("click", sum_handle);
//#endregion

//#region ASCII
let ascii_observe_toggle = false;
let ascii_observe_toggle_handle = (event) =>{
    const toggle_classList = event.currentTarget.classList;
    ascii_observe_toggle = !ascii_observe_toggle;
    toggle_classList.toggle("active");
}
let keyboard_key_pressed = (event) => {
    if (ascii_observe_toggle) {
        if (event.altKey) alert("ALT key was pressed");
        else if (event.ctrlKey) alert("CTRL key was pressed");
        else if (event.shiftKey) alert("SHIFT key was pressed");
        else alert(`Key pressed was of code ${event.keyCode}`);
    }
}
if (document.getElementById('ascii_button')) ascii_button.addEventListener("click", ascii_observe_toggle_handle);
document.addEventListener("keydown", keyboard_key_pressed)
//#endregion