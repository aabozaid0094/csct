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
if (document.getElementById('promise')) promise.addEventListener("click", promise_handle);
//#endregion

document.addEventListener("DOMContentLoaded", function (event) {
});