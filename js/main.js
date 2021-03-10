'use strict';

// Dark / light mode declare
const lightMode = document.querySelector('.fa-sun-o');
const darkMode = document.querySelector('.fa-moon-o');
const cardClass = document.querySelectorAll('.card');
const cardTitles = document.querySelectorAll('.card-title');
var i;

// Toggle Light Mode
lightMode.addEventListener('click', function () {
  document.querySelector('.body').classList.add('light-mode');
  document.querySelector('.fa-sun-o').style.display = "none";
  document.querySelector('.fa-moon-o').style.display = "block";
  // For loop for all card colors
  for (i = 0; i < cardClass.length; i++){
  cardClass[i].classList.add('light-card');
  }
  // For loop for all card titles
  for (i = 0; i < cardTitles.length; i++){
  cardTitles[i].classList.add('light-card-title');
  }
});

// Toggle Dark Mode
darkMode.addEventListener('click', function () {
  document.querySelector('.body').classList.remove('light-mode');
  document.querySelector('.fa-sun-o').style.display = "block";
  document.querySelector('.fa-moon-o').style.display = "none";
  // For loop for all card colors
  for (i = 0; i < cardClass.length; i++){
  cardClass[i].classList.remove('light-card');
  }
  // For loop for all card titles
  for (i = 0; i < cardTitles.length; i++){
  cardTitles[i].classList.remove('light-card-title');
  }
});

// Filter from tags

$(document).ready(function(){
  $(".chip").click(function(){
      var value = $(this).attr('data-filter');
      if(value == "view-all"){
          $('.filter').show('1000');
      }
      else{
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
      }
  });
  if ($(".chip").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});