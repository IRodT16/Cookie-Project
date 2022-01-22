'use strict';

///////COOKIE CHALLENGE/////////

//Welcome Screen
const welcomeUI = document.querySelectorAll('.welcome');
const loginBtn = document.querySelector('.login__btn');
const login = document.getElementById('login');
const header = document.querySelector('h1');

//Logged in UI
const appUI = document.querySelectorAll('.app');
const logoutBtn = document.getElementById('logout__btn');
const welcome = document.getElementById('welcome');
const newHeader = document.getElementById('currentCookie');
const remove = document.getElementById('remove__btn');
const createCookie = document.getElementById('create__btn');
const display = document.getElementById('display');
const edit = document.getElementById('edit__btn');
const input = document.getElementById('cookieTxt');
var today = new Date();
const date =
  today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
//
///////////////////////////

const inputText = function () {
  input.value = 'New cookie name here';
};

loginBtn.addEventListener('click', function () {
  appUI.forEach(i => {
    i.style.opacity = 1;
  });

  welcomeUI.forEach(i => {
    i.style.opacity = 0;
  });

  welcome.textContent = `Welcome, ${login.value}`;
});

logoutBtn.addEventListener('click', function () {
  appUI.forEach(i => {
    i.style.opacity = 0;
  });

  welcomeUI.forEach(i => {
    i.style.opacity = 1;
  });

  welcome.textContent = `Welcome, ${login.value}`;

  inputText();
  login.value = 'First Name Here';
});

createCookie.addEventListener('click', function () {
  const x =
    (document.cookie = `username=Cookie Monster; created=${date}; expires=Sun, 1 Jan 2023 00:00:00 UTC`);
  display.textContent = x;
  inputText();
});

edit.addEventListener('click', function () {
  const y =
    (document.cookie = `username=${input.value}; created=${date}; expires=Sun, 1 Jan 2023 00:00:00 UTC`);

  display.textContent = y;
  inputText();
});

remove.addEventListener('click', function () {
  function deleteCookie() {
    document.cookie = 'username=;  expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  }
  deleteCookie();
  display.textContent = '';
  inputText();
  display.textContent = 'Sorry, no more cookies..';
});

input.addEventListener('click', function () {
  this.value = '';
});

login.addEventListener('click', function () {
  this.value = '';
});

///////////Notes/////////
// Things I want to look into:
//
// How to incorporate 'enter' keystroke and 'click' event listener for same function/action
//
// How to prevent Login function from working, if no name/text is entered. Also, how to prevent default
// text from being incorporated into welcome message.
//
// Goes without saying, learn how to properly write HTML/CSS
