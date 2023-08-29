'use strict';

//#region Swap
let swap_handle = (event) => {
    let swap_element = event.currentTarget;
    let swap_x = swap_element.querySelector("#swap_x"), swap_x_value = "";
    let swap_y = swap_element.querySelector("#swap_y"), swap_y_value = "";
    if (swap_x) swap_x_value = swap_x.innerHTML;
    if (swap_y) swap_y_value = swap_y.innerHTML;
    let [swap_x_value_new, swap_y_value_new] = [swap_y_value,swap_x_value];
    swap_x.innerHTML = swap_x_value_new;
    swap_y.innerHTML = swap_y_value_new;
    alert("swapped");
};
if(document.getElementById('swap')) swap.addEventListener("click", swap_handle);
//#endregion

//#region Min, Max
let min_max_handle = (event) => {
    let min_max_element = event.currentTarget;
    let min_max_numbers = min_max_element.querySelector("#min_max_numbers"), min_max_numbers_array = [];
    if (min_max_numbers) min_max_numbers_array = min_max_numbers.innerHTML.split(',');
    alert(`Min is ${Math.min(...min_max_numbers_array.map((number)=>Number(number)))}`);
    alert(`Max is ${Math.max(...min_max_numbers_array.map((number)=>Number(number)))}`);
};
if(document.getElementById('min_max')) min_max.addEventListener("click", min_max_handle);
//#endregion

//#region Array
let is_string = value => typeof value === 'string' || value instanceof String;
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
let array_handle = () => {
    let all_are_string = fruits.every(is_string);
    if (all_are_string) alert(`[${fruits.toString()}] every element is strings`);
    else alert(`[${fruits.toString()}] some or all elements are not strings`);

    let some_start_with_a = fruits.some(fruit => fruit.startsWith("a"));
    if (some_start_with_a) alert(`some of [${fruits.toString()}] starts with a`);
    else alert(`none of [${fruits.toString()}] starts with a`);

    let start_with_b_s = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
    if (start_with_b_s.length) alert(`[${start_with_b_s.toString()}] are the elements that start with b or s`);

    alert(`[${fruits.map(fruit => `I like ${fruit}`)}]`);

    fruits.map(fruit => `I like ${fruit}`).forEach(fruit_liked => alert(fruit_liked));
};
if(document.getElementById('array')) array.addEventListener("click", array_handle);
//#endregion

document.addEventListener("DOMContentLoaded", function(event){
});