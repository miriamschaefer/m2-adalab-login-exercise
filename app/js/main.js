"use strict";

//SELECTORS...
let password = document.querySelector(".js-user-password");
let name = document.querySelector(".js-user-name");
let submit = document.querySelector(".login-button");
let accessDenied = document.querySelector(".error-wrapper");

//Number of user attemps
let attempts = 0;

//Object saved in database with user information to compare with my form
const userInfo = {
  name: "front23",
  password: "bicicleta",
};

// Empty object to store user data. No consigo que checkData compare con esto.

let formData = {};

//FUNCTIONS

// formData object shows the data the user inputs in the form. checkData picks that info up while the user writes.

function checkData() {
  formData.name = name.value;
  formData.password = password.value;

  console.log(formData);
}

function checkAttempts(ev) {}

function compareData(ev) {
  let attemptsCheck = (attempts += 1);
  console.log(attemptsCheck);

  if (name.value === userInfo.name && password.value === userInfo.password) {
    return [accessDenied.classList.add("hidden"), alert("You're in!")]; //cómo consigo que se vaya a
  } else if (attemptsCheck > 2) {
    return alert("You're blocked");
  } else {
    return accessDenied.classList.remove("hidden");
  }
}

//LISTENERS

name.addEventListener("keyup", checkData);
password.addEventListener("keyup", checkData);
submit.addEventListener("click", compareData);

// si coinciden valores se muestra un alert que diga estás dentro.
// si no, se incrementa en 1 el valor de la variable attempts. y se muestra el div oculto con clase .error-wrapper

// a los tres intentos (attempts + 3), aparece alert("Estás bloqueado")
