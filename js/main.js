'use strict';
// Dark / light mode declare
const lightMode = document.querySelector('.fa-sun-o');
const darkMode = document.querySelector('.fa-moon-o');

// Toggle Light Mode
lightMode.addEventListener('click', function () {
document.querySelector('.body').classList.add('light');
document.querySelector('.fa-sun-o').style.display = "none";
document.querySelector('.fa-moon-o').style.display = "block";
});

// Toggle Dark Mode
darkMode.addEventListener('click', function () {
  document.querySelector('.body').classList.remove('light');
  document.querySelector('.fa-sun-o').style.display = "block";
  document.querySelector('.fa-moon-o').style.display = "none";
  });
  
