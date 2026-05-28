let copy = document.getElementById("copy");
let passHistory = document.getElementById("history");
let inputFlied = document.getElementById("inputFlied");
let lengthInput = document.getElementById("length");
let message = document.getElementById("message");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()";

let btn = document.getElementById("btn");
let strengthLength = document.getElementById("strength");

copy.addEventListener("click", copyFun);
btn.addEventListener("click", generatePassword);

loadHistory();

function checkStrength(password){

    let strength = "Weak";

    if(
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password)
    ){
        strength = "Medium";
    }

    if(
        password.length >= 12 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*()]/.test(password)
    ){
        strength = "Strong";
    }

    strengthLength.innerText = "Strength : " + strength;
}

function copyFun(){

    if(inputFlied.value === ""){
        return;
    }

    navigator.clipboard.writeText(inputFlied.value);

    alert("Password Copied!");
}

function generatePassword(){

    let length = Number(lengthInput.value);

    if(length < 6){
        message.innerText = "Password length must be at least 6";
        return;
    }

    message.innerText = "";

    let characters = "";

    if(uppercaseCheckbox.checked){
        characters += upperChars;
    }

    if(lowercaseCheckbox.checked){
        characters += lowerChars;
    }

    if(numbersCheckbox.checked){
        characters += numberChars;
    }

    if(symbolsCheckbox.checked){
        characters += symbolChars;
    }

    if(characters === ""){
        message.innerText = "Select at least one option";
        return;
    }

    let password = "";

    for(let i = 0; i < length; i++){

        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    inputFlied.value = password;

    checkStrength(password);

    savePassword(password);
}

function savePassword(password){

    let passwords =
        JSON.parse(localStorage.getItem("passwords")) || [];

    passwords.push(password);

    localStorage.setItem(
        "passwords",
        JSON.stringify(passwords)
    );

    loadHistory();
}

function loadHistory(){

    let passwords =
        JSON.parse(localStorage.getItem("passwords")) || [];

    passHistory.innerHTML = "";

    passwords.forEach(function(pass){

        let li = document.createElement("li");

        li.innerText = pass;

        passHistory.appendChild(li);
    });
}