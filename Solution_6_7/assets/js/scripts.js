'use strict';

let typing_message_handle = () => {
    const new_window = open("", "message_window", "width=500px,height=300px");
    new_window.document.write("<p>typing message</p>");
    setTimeout(() => {
        new_window.close();
    }, 2000);
};

let writeVal = (val) => document.getElementById("txt1").value += val.trim();
//#region Slider
const current_slider_change = new Event("current_slider_change");
let slider = {
    "images": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    "current": 0
};
const slider_element = document.querySelector('.slider .images_wrapper');
let slider_play_interval;

let change_slide_image = (event) => {
    let image = event.currentTarget.querySelector('img');
    image.src = `./assets/images/slide_show/${slider.images[slider.current]}`;
}
slider_element.addEventListener("current_slider_change", change_slide_image);

let slider_previous_handle = (slider) => {
    if (slider.current > 0) {
        slider.current--;
    }
    else {
        slider.current = slider.images.length - 1;
    }
    slider_element.dispatchEvent(current_slider_change);
};

let slider_play_handle = () => {
    slider_play_interval = setInterval(() => {
        slider_next_handle();
    }, 3000);
};

let slider_pause_handle = () => clearInterval(slider_play_interval);

let slider_next_handle = () => {
    if (slider.current < slider.images.length - 1) {
        slider.current++;
    }
    else {
        slider.current = 0;
    }
    slider_element.dispatchEvent(current_slider_change);
};
//#endregion

//#region Marbles
let current_marble = -1;
let marbles_animation_interval;
let play_marbles_animation = (marbles_element) => {
    let marble_elements = marbles_element.querySelectorAll('img');
    marbles_animation_interval = setInterval(() => {
        if (current_marble == marble_elements.length - 1) current_marble = 0;
        else current_marble++;
        marble_elements.forEach(marble_element => marble_element.src = "./assets/images/marbles/marble2.jpg");
        marble_elements[current_marble].src = "./assets/images/marbles/marble1.jpg";
    }, 1000);
};
let pause_marbles_animation = (event) => clearInterval(marbles_animation_interval);
//#endregion

document.addEventListener("DOMContentLoaded", function (event) {
    if (document.getElementById("typing_message_button")) {
        typing_message_button.addEventListener("click", typing_message_handle);
    }
    const urlParams = new URLSearchParams(window.location.search);
    const name_param = urlParams.get('name');
    const email_param = urlParams.get('email');

    if (document.getElementById("welcome_submit")) {
        if (name_param && email_param) {
            welcome_submit.innerHTML = `Welcome '${name_param}', You have successfully registered with the email of '${email_param}'.`;
        }
        else {
            welcome_submit.innerHTML = `Kindly submit name and email.`;
        }
    }

    if (document.getElementById('c_button')) {
        c_button.addEventListener("click", () => { document.getElementById("txt1").value = ""; });
    }
    if (document.getElementById('backspace_button')) {
        backspace_button.addEventListener("click", () => { document.getElementById("txt1").value = document.getElementById("txt1").value.slice(0, -1); });
    }

    if (document.getElementById('slider_previous_button')) {
        slider_previous_button.addEventListener("click", () => slider_previous_handle(slider));
    }
    if (document.getElementById('slider_play_button')) {
        slider_play_button.addEventListener("click", slider_play_handle);
    }
    if (document.getElementById('slider_pause_button')) {
        slider_pause_button.addEventListener("click", slider_pause_handle);
    }
    if (document.getElementById('slider_next_button')) {
        slider_next_button.addEventListener("click", slider_next_handle);
    }

    let marbles_element = document.querySelector('.marbles');
    if (marbles_element) {
        play_marbles_animation(marbles_element);
        marbles_element.addEventListener("mouseover", pause_marbles_animation);
        marbles_element.addEventListener("mouseleave", () => play_marbles_animation(marbles_element));
    }
});