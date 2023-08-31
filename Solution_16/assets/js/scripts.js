'use strict';

//#region Promise
const is_valid_url = urlString => {
    try {
        return Boolean(new URL(urlString));
    }
    catch (e) {
        return false;
    }
}
let url_to_promise = (url) => {
    if (is_valid_url(url)) {
        return fetch(url);
    }
    else return "Invalid endpoint!";
};
let promise_handle = () => {
    url_to_promise("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
};
if (document.getElementById('promise_button')) promise_button.addEventListener("click", promise_handle);
//#endregion

//#region Fibonacci Length
let fibonacci_length = function*(length, index = 0){
    if (length < 2) throw new Error("Not enough fibonacci length");
    let [former_previous, previous] = [0, 1];
    while (index < length) {
        yield former_previous;
        [former_previous, previous] = [previous, former_previous + previous];
        index++;
    }
};
let fibonacci_length_iterator = fibonacci_length(10);
let fibonacci_length_handle = () => {
    console.log(`Fibonacci Length: ${fibonacci_length_iterator.next().value}`);
};
if (document.getElementById('fibonacci_length_button')) fibonacci_length_button.addEventListener("click", fibonacci_length_handle);
//#endregion

//#region Fibonacci Max
let fibonacci_max = function*(max) {
    if (max < 1) throw new Error("Not enough fibonacci max");
    let [former_previous, previous] = [0, 1];
    while (former_previous < max) {
        yield former_previous;
        [former_previous, previous] = [previous, former_previous + previous];
    }
};
let fibonacci_max_iterator = fibonacci_max(10);
let fibonacci_max_handle = () => {
    console.log(`Fibonacci Max: ${fibonacci_max_iterator.next().value}`);
};
if (document.getElementById('fibonacci_max_button')) fibonacci_max_button.addEventListener("click", fibonacci_max_handle);
//#endregion

document.addEventListener("DOMContentLoaded", function (event) {
});