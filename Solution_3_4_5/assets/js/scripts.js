'use strict';

let headings_handler = () =>{
    let message = prompt("What's your message?");
    if (message) {
        let heading_elements = headers.querySelectorAll('[id*="h"]');
        heading_elements.forEach(heading => {
            heading.innerHTML = message;
        });
    }
};

let sum_handler = () =>{
    let sum = 0,
    number = 0;
    do {
        let number_message = prompt("Enter number to be summed");
        if (number_message && !isNaN(number_message)) {
            number = Number(number_message);
            sum += number;
        }
    } while (number > 0);
    alert("Sum is: " + sum);
}

let color_handler = () =>{
    let color = prompt("What's your faviorate color?(red, green, or blue)");
    let correct_color;
    let name = prompt("What's your name?");
    let number = prompt("What's your number?");
    let email = prompt("What's your email address?");
    if (["red", "green", "blue"].includes(color)) {
        correct_color = color;
    }
    else{
        console.log("Color is wrong, default will be taken");
    }
    console.log("%cName: ", 'color:'+correct_color, name);
    console.log("%cNumber: ", 'color:'+correct_color, number);
    console.log("%cEmail: ", 'color:'+correct_color, email);
};

let palindrome_handler = () =>{
    let palindrome_word = prompt("Word to test palindrome against?");
    if (palindrome_word) {
        let case_sensitive = confirm("Case sensitive?");
        let palindrome_word_spaceless = palindrome_word.replace(" ", "");
        let palindrome_length = palindrome_word_spaceless.length;
        let palindrome_half_length = Math.floor(palindrome_length/2);
        let is_palindrome = true;
        
        if (case_sensitive) {
            for (let index = 0; index < palindrome_half_length; index++) {
                if(palindrome_word_spaceless[index] !== palindrome_word_spaceless[palindrome_length-1-index]) is_palindrome = false;
            }
        } else {
            for (let index = 0; index < palindrome_half_length; index++) {
                if(palindrome_word_spaceless[index].toLowerCase() !== palindrome_word_spaceless[palindrome_length-1-index].toLowerCase()) is_palindrome = false;
            }
        }
        
        if (is_palindrome) {
            console.log("%c"+palindrome_word, "color:green", " is palindrome" );
        } else {
            console.log("%c"+palindrome_word, "color:red", " is not palindrome" );
        }
    }
};

let e_count_handler = () =>{
    let e_string = prompt("String to count character 'e' against?");
    if (e_string) {
        let e_count = e_string.toLowerCase().split("e").length-1;
        console.log("'E' count in " + e_string + " is %c"+e_count, "font-weight:bold");
    }
};

let parity_handler = () =>{
    let parity_string = prompt("Enter a number to check its parity");
    if (parity_string && !isNaN(parity_string)) {
        let parity_result = (parseInt(parity_string)%2)? "Odd" : "Even";
        console.log(parity_string + " is %c"+parity_result, "font-weight:bold");
    }
};

let validate_input = (value, type) => {
    if(!["string", "phone", "mobile", "email"].includes(type)) return 0;
    const string_regex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    const phone_regex = /^[0-9]{8}$/;
    const mobile_regex = /^01[0125][0-9]{8}$/;
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    switch (type) {
        case "string":
            return string_regex.test(value);
        case "phone":
            return phone_regex.test(value);
        case "mobile":
            return mobile_regex.test(value);
        case "email":
            return email_regex.test(value);
        default:
            return 0;
    }
}

let clear_errors = (form) => {
    form.querySelectorAll(".errors").forEach(error_element => {
        error_element.innerHTML = "";
    });
}

let clear_entered = (container) => {
    container.querySelectorAll("span[id^='entered_']").forEach(entered_element => {
        entered_element.innerHTML = "";
    });
}

let set_entered_labels_color = (container, color) => {
    container.querySelectorAll("span.user_color").forEach(entered_element_label => {
        entered_element_label.style.color = color;
    });
}

let user_info_submit_handle = (event) => {
    event.preventDefault();
    let user_form = event.currentTarget;
    let user_form_container = user_form.closest("#user_info_container");
    let correct_color = "initial";
    clear_errors(user_form);
    clear_entered(user_form_container);
    set_entered_labels_color(user_form_container, correct_color);
    let name = user_form.name;
    let phone = user_form.phone;
    let mobile = user_form.mobile;
    let email = user_form.email;
    if (!(
        validate_input(name.value, "string") 
        && validate_input(phone.value, "phone") 
        && validate_input(mobile.value, "mobile") 
        && validate_input(email.value, "email")
        )
    ) {
        if (!validate_input(name.value, "string")) {
            name.closest(".form-control").querySelector(".errors").innerHTML = "Not Valid!";
        }
        if (!validate_input(phone.value, "phone")) {
            phone.closest(".form-control").querySelector(".errors").innerHTML = "Not Valid!";
        }
        if (!validate_input(mobile.value, "mobile")) {
            mobile.closest(".form-control").querySelector(".errors").innerHTML = "Not Valid!";
        }
        if (!validate_input(email.value, "email")) {
            email.closest(".form-control").querySelector(".errors").innerHTML = "Not Valid!";
        }
    }
    else {
        let color = prompt("What's your faviorate color?(red, green, or blue)");
        if (["red", "green", "blue"].includes(color)) {
            correct_color = color;
        }
        else{
            console.log("Color is wrong, default will be taken");
        }
        set_entered_labels_color(user_form_container, correct_color);
        name.closest("#user_info_container").querySelector("#entered_user_info #entered_name").innerHTML = name.value;
        phone.closest("#user_info_container").querySelector("#entered_user_info #entered_phone").innerHTML = phone.value;
        mobile.closest("#user_info_container").querySelector("#entered_user_info #entered_mobile").innerHTML = mobile.value;
        email.closest("#user_info_container").querySelector("#entered_user_info #entered_email").innerHTML = email.value;
    }
}

let array_sort_reset_handle = (event) => {
    event.currentTarget.closest('#array_sort_container').querySelectorAll("span.array_processed").forEach(entered_element => {
        entered_element.innerHTML = "";
    });
}

let array_sort_submit_handle = (event) => {
    event.preventDefault();
    let array_sort = event.currentTarget;
    let array_values = array_sort.numbers;
    if (array_values.length>0) {
        array_values = [...array_values];
        array_values = array_values.map(item=>item.value);
        document.getElementById('not_sorted').innerHTML = array_values.join(',');
        document.getElementById('ascending_sorted').innerHTML = array_values.sort((a, b) => a - b).join(',');
        document.getElementById('descending_sorted').innerHTML = array_values.sort((a, b) => b - a).join(',');
    }
}

let circle_area_handler = () =>{
    let area = 0,
    radius_message;
    do {
        radius_message = prompt("Enter a non-negative integer radius to get Circle Area");
    } while ((radius_message && isNaN(radius_message)) || Number(radius_message) < 0);
    area = Math.PI * Number(radius_message) ** 2;
    alert("Area is: " + area);
}

let sqrt_handler = () =>{
    let sqrt = 0,
    sq_message;
    do {
        sq_message = prompt("Enter a non-negative number to get its Square Root");
    } while ((sq_message && isNaN(sq_message)) || Number(sq_message) < 0);
    sqrt = Math.sqrt(Number(sq_message));
    alert("Square Root is: " + sqrt);
}

let degree_to_radian = (degree) => degree * Math.PI / 180;

let cos_handler = () =>{
    let cos = 0,
    cos_message;
    do {
        cos_message = prompt("Enter a degree angle to get its Cosine");
    } while (cos_message && isNaN(cos_message));
    let degree = Number(cos_message);
    let radian = degree_to_radian(degree);
    cos = Math.cos(radian);
    let fixed_cos = cos.toFixed(4);
    alert("Cosine is: " + fixed_cos);
}

document.addEventListener("DOMContentLoaded", function(event){
    headings_button.addEventListener("click", headings_handler);
    sum_button.addEventListener("click", sum_handler);
    color_button.addEventListener("click", color_handler);

    palindrome_button.addEventListener("click", palindrome_handler);
    e_count_button.addEventListener("click", e_count_handler);
    parity_button.addEventListener("click", parity_handler);

    this.forms.user_info.onsubmit = user_info_submit_handle;
    this.forms.array_sort.onsubmit = array_sort_submit_handle;
    this.forms.array_sort.onreset = array_sort_reset_handle;

    circle_area_button.addEventListener("click", circle_area_handler);
    sqrt_button.addEventListener("click", sqrt_handler);
    cos_button.addEventListener("click", cos_handler);
});