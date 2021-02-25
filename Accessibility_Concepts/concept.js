function fontUpdate() {
  var element = document.querySelector(".lorem");
  element.classList.toggle("lorem__update");
}

function whiteUpdate() {
  document.querySelector(".phone__card").style.backgroundColor =
    "rgb(247, 247, 247)";
  document.querySelector(".phone__card").style.transition = ".3s";
  document.querySelector(".lorem").style.color = "black";
}

function greenUpdate() {
  document.querySelector(".phone__card").style.backgroundColor = "#a5cdad";
  document.querySelector(".phone__card").style.transition = ".3s";
  document.querySelector(".lorem").style.color = "black";
}

function beigeUpdate() {
  document.querySelector(".phone__card").style.backgroundColor = "#f9f5db";
  document.querySelector(".phone__card").style.transition = ".3s";
  document.querySelector(".lorem").style.color = "black";
}

function blackUpdate() {
  document.querySelector(".phone__card").style.backgroundColor = "#141723";
  document.querySelector(".phone__card").style.transition = ".3s";
  document.querySelector(".lorem").style.color = "#ccc";
  document.querySelector(".lorem").style.transition = ".3s";
}
