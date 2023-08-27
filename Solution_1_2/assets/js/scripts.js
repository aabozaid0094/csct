'use strict';
document.addEventListener("DOMContentLoaded", function(event){
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const first_name = parameters.get('first_name');
    const last_name = parameters.get('last_name');
    if (first_name && document.getElementById('full_name')) full_name.innerHTML = first_name + " " + last_name;

    const username = parameters.get('username');
    const password = parameters.get('password');
    const location = parameters.get('location');
    const remember_me = parameters.get('remember_me');
    if (username && document.getElementById('username')) document.getElementById('username').value = username;
    if (password && document.getElementById('password')) document.getElementById('password').value = password;
    if (location && document.getElementById('location')) document.getElementById('location').value = location;
    if (remember_me && document.getElementById('remember_me')) document.getElementById('remember_me').checked = true;
});