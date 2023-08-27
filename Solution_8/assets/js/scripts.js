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
