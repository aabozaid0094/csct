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

//#region Fibonacci
let fibonacci_length = (length) => {
    if (length < 2) throw new Error("Not enough fibonacci length");
    let result = [0, 1];
    for (let index = 2; index < length; index++)
        result.push(result[index - 1] + result[index - 2]);
    return result;
};
let fibonacci_max = (max) => {
    if (max < 1) throw new Error("Not enough fibonacci max");
    let result = [0, 1], next_fibonacci = 1;
    for (let index = 2; next_fibonacci < max; index++) {
        console.log(next_fibonacci);
        result.push(next_fibonacci);
        next_fibonacci = result[index] + result[index - 1];
    }
    return result;
};
let fibonacci_handle = () => {
    console.log(fibonacci_length(10));
    console.log(fibonacci_max(10));
};
if (document.getElementById('fibonacci_button')) fibonacci_button.addEventListener("click", fibonacci_handle);
//#endregion

document.addEventListener("DOMContentLoaded", function (event) {
});